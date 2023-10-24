import { useState, useEffect } from "react";
import "./App.css";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Buscador from "./assets/components/Buscador";
import Miapi from "./assets/components/Miapi";
function App() {
    const [filtro, setFiltro] = useState("");

    return (
        <div className="container">
            <Header></Header>
            <Buscador filtro={filtro} setFiltro={setFiltro}></Buscador>
            <Miapi filtro={filtro}></Miapi>
            <Footer></Footer>
        </div>
    );
}

export default App;
