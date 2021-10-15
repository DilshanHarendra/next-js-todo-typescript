import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux";
import {store} from "../store/store";
import BaseLayout from "../component/layout/BaseLayout";

function MyApp({ Component, pageProps }: AppProps) {

  return (
      <Provider store={store}>
          <BaseLayout>
              <Component {...pageProps} />
          </BaseLayout>
      </Provider>

  )
}
export default MyApp
