import AppHead from 'components/AppHead'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <div>
      <AppHead />
      <Component {...pageProps} />
    </div>
  );
}

export default App
