import '@/styles/globals.css'
import { Provider } from "react-redux";
import { store } from "../features/store";
// import AppContainer from "../components/AppContainer/ApplicationContainer";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        {/* <AppContainer> */}
        <Component {...pageProps} />
        {/* </AppContainer> */}
      </Provider>
    </SessionProvider>
  );
}
