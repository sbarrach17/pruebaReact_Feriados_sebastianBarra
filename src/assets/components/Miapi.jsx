import React, { useState, useEffect } from "react";

const Miapi = ({ filtro }) => {
    const [feriados, setFeriados] = useState([]);

    const feriadosFiltrados = feriados.filter((feriados) => feriados.title.toLowerCase().includes(filtro.toLowerCase()));

    useEffect(() => {
        consultarApi();
    }, []);

    const consultarApi = async () => {
        const url = "https://api.victorsanmartin.com/feriados/en.json";
        const response = await fetch(url);
        const data = await response.json();
        setFeriados(data.data);

        // METODO SORT PARA ORDENAR EL ARRAY POR FECHA CRONOLOGICA ASCEDENTE

        data.data.sort((a, b) => a.date.localeCompare(b.date));
        // SE UTILIZA REVERSE PARA QUE EL ORDEN SEA DESCENDENTE, DESDE EL ULTIMO FERIADO HASTA EL PRIMERO YA PASADO
        data.data.reverse();

        setFeriados(data.data);
    };

    return (
        <main>
            <section className="gallery">
                {feriadosFiltrados.map((feriado) => (
                    <div className="card">
                        <img src="./src/assets/Img/LogoFeriados.png" alt="" />
                        <div className="card-content">
                            <h4>{feriado.date}</h4>
                            <h3>{feriado.title}</h3>
                            <h4>{feriado.extra}</h4>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
};

export default Miapi;
