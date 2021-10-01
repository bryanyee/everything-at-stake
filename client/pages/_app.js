import DocumentHead from 'components/DocumentHead';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/bootstrap-overrides.scss';
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
