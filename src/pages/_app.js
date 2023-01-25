import '@/styles/globals.css'
import { Provider } from "react-redux";
import { store } from "../services/store";
import AppContainer from "../components/AppContainer/ApplicationContainer";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </Provider>
  );
}
