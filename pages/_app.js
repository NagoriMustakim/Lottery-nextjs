import "../styles/globals.css";
import navbar from '../components/navbar';
function MyApp({ Component, pageProps }) {
  return (
    <>
    <navbar/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
  