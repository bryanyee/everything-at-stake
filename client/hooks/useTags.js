import { useState } from 'react';

export default function useTags() {
  const [selectedTag, setTag] = useState(null);

  const selectTag = (tagKey) => {
    if (tagKey !== selectedTag) {
      setTag(tagKey);
    } else {
      setTag(null);
    }
  }

  return [
    selectedTag,
    selectTag,
  ];
}
