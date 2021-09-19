import AppHead from 'components/AppHead';
import Navbar from 'components/Navbar';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <div>
      <AppHead />
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default App;
