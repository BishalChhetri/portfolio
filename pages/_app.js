import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex-grow">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
