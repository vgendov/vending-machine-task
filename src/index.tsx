import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

async function deferRender() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }
 
  const { worker } = await import('./mocks/browser')
 
  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start()
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
deferRender().then(() => root.render(
  <Provider store={store}>
    <App />
  </Provider>
));
