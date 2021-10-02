import classnames from 'classnames';
import { useState } from 'react';

import IndexLink from 'components/IndexLink';
import Layout from 'components/Layout';

import { TAGS, TAG_KEYS } from 'config/constants';
import { PAGES } from 'config/pages';

import styles from 'styles/Tag.module.scss';

const pages = [...PAGES];
pages.reverse();

export default function Index() {
  const [selectedTag, setTag] = useState(null);

  const onTagClick = (e, tagKey) => {
    if (tagKey !== selectedTag) {
      setTag(tagKey);  
    } else {
      e.target.blur();
      setTag(null);  
    }
  }

  return (
    <Layout
      header={<h1>Everything At Stake</h1>}
    >
      <p>
        <span>A technical blog about the Cardano blockchain and ecosystem.</span>
      </p>
      <div className="mt-4">
        {TAG_KEYS.map((tagKey) => (
          <button
            className={classnames('btn-sm', styles.tag, styles.selectable, {
              [styles.selected]: tagKey === selectedTag,
            })}
            onClick={(e) => onTagClick(e, tagKey)}
            key={tagKey}
          >
            {TAGS[tagKey]}
          </button>
        ))}
      </div>
      <div className="mt-5">
        {pages
          .filter(({ tags }) => {
            return selectedTag === null || tags.includes(TAGS[selectedTag]);
          })
          .map(({ date, description, enabled, id, tags, title }) => {
            if (!enabled) return null;
            return (
              <IndexLink
                className="mb-5"
                description={description}
                date={date}
                id={id}
                key={id}
                tags={tags}
                title={title}
              />
            );
          })}
      </div>
    </Layout>
  );
}
