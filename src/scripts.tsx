import { GameStore } from "./components/GameStore";
import { createRoot } from "react-dom/client";

const App = () => {
  return <GameStore />;
};
createRoot(document.getElementById("root") as HTMLElement).render(<App />);
