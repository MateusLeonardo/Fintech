import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";
import { DataContextProvider } from "./Context/DataContext";
import Resumo from "./Pages/Resumo";
import "./Style.css";

const App = () => {
  return (
    <DataContextProvider>
      <div className="container">
        <Sidenav />
        <Header />
        <Resumo />
      </div>
    </DataContextProvider>
  );
};

export default App;
