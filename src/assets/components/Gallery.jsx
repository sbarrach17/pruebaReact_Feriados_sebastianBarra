import React from "react";
import Miapi from "./Miapi";

const Gallery = ({ feriados }) => {
    return (
        <main>
            <section className="gallery">
                {feriados.map((feriado, index) => (
                    <Miapi key={index} feriado={feriado} />
                ))}
            </section>
        </main>
    );
};

export default Gallery;
