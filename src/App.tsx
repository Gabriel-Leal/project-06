import "./styles/global.css";
// import { Provider as ReduxProvider } from "react-redux";

// import { store } from "./store";
import { Player } from "./pages/Player";

export function App() {
  return (
    // the provider is from Redux, now I'm using Zustand
    // <ReduxProvider store={store}>
    <Player />
    // </ReduxProvider>
  );
}
