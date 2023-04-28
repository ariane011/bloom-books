import { useState } from "react";
import { Header } from "./components/Header";
import UseSearchComponent from "./components/useSearch,js";
// import "antd/dist/antd.min.css";
import Routes from "./routes";

function App() {
  const [search, setSearch] = useState({
    query: "",
    list: [],
  });

  return (
    <>
      <UseSearchComponent.Provider value={[search, setSearch]}>
        <Header />
        <Routes />
      </UseSearchComponent.Provider>
    </>
  );
}

export default App;
