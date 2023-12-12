import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HistoriaScreen } from "./screens/historia/historia.screen";
import { HomeScreen } from "./screens/home/home.screen";
import { PoliticasPrivacidadeScreen } from "./screens/politicasPrivacidade/politicasPrivacidade.screen";
import { TermosUsoScreen } from "./screens/termosUso/termosUso.screen";

function App() {
  return (
    <Routes>
      <Route path="/inicio" element={<HomeScreen />} />
      <Route path="*" element={<HomeScreen />} />
      <Route
        path="/politicasDePrivacidade"
        element={<PoliticasPrivacidadeScreen />}
      />
      <Route path="/termosDeUso" element={<TermosUsoScreen />} />
      <Route path="/historia" element={<HistoriaScreen />} />
      {/* <Route path="/re" element={<HomeScreen />} /> */}
    </Routes>
  );
}

export default App;
