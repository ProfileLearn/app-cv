import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {Req} from "./Req"

// COMPONENTE CON ESTADO PRINCIPAL

export function Cv() {
    const [value, setValue] = useState("");

    function addCls(elemento, operacion, clase) {
        elemento.forEach((e) => {
            console.log(e);
            if (operacion === "add") {
                e.classList.add(clase);
            }
            if (operacion === "remove") {
                e.classList.remove(clase);
            }
            console.log(e);
        });
    }

    function marcar(event) {
        const target = event.target;
        const contenedor = target.parentNode;
        const arrayClases = contenedor.querySelectorAll(".copiable");

        if (target.classList.contains("copiable")) {
            target.classList.toggle("copiar");
        } else if (target.classList.contains("copiarContenido")) {
            const operacion = [...arrayClases].every((e) =>
                e.classList.contains("copiar")
            );
            console.log(operacion);
            if (operacion) {
                addCls(arrayClases, "remove", "copiar");
            } else {
                addCls(arrayClases, "add", "copiar");
            }
        }
    }

    function copiar(e) {
        const arr = Array.from(document.querySelectorAll(".copiar")).map((e) => {
            if (e.classList.contains("items")) {
                return e.textContent;
            } else {
                return e.textContent + "\n";
            }
        });

        setValue(arr.join("\n"));
    }

    // MAJEADOR DE CLICKS

    function handleClick(e) {
        console.log(value);
        marcar(e);
        copiar(e);
    }
    return (
        <div id="main">
            <CopyToClipboard text={value}>
                <button id="btn">Haga Click Para COPIAR</button>
            </CopyToClipboard>
            <Req onClick={handleClick} />
        </div>
    );
}

