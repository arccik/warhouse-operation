import '@/styles/globals.css'
import { Provider } from "react-redux";
import { store } from "../features/store";
import { SessionProvider } from "next-auth/react";
import { SnackbarProvider } from "notistack";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <SnackbarProvider maxSnack={5}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </SnackbarProvider>
    </SessionProvider>
  );
}
