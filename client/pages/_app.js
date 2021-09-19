import DocumentHead from 'components/DocumentHead';

import 'styles/globals.scss';

function App({ Component, pageProps }) {
  return (
    <div>
      <DocumentHead />
      <Component {...pageProps} />
    </div>
  );
}

export default App;
