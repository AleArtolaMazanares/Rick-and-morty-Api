import React, { useContext, useState } from "react";
import { RickAndMortiContext } from "../context/RickAndMortiContext";

const BuscadorComponent = () =>{
    const {buscadorDePersonajesPorNombre, setEncontrado}= useContext(RickAndMortiContext)
    const [nombrePersonaje, setNombrePersonaje] = useState("")
    const [statusPersonaje, setStatusPersonaje] = useState('')
    const [buscado, setBuscado] = useState(false)
    const [filtro, setFilltro] = useState(false)

    const buscador = (e) =>{
        e.preventDefault();
        if (nombrePersonaje === "") {
            alert("tienes que poner un nombre")
        }else{
        buscadorDePersonajesPorNombre(nombrePersonaje.toLowerCase(), statusPersonaje)
        .then(data => {
            setBuscado(false)
           if (data.results === undefined) {
            console.log("no hay personajes")
           }else{
            if (data.results.length > 1) {
                console.log("mayor")
            }else{
                setStatusPersonaje(data.results[0].status)
            }
           }
        })
        setBuscado(true)
        }
        setFilltro(true)
    }

    const volver = () =>{
        setEncontrado(false)
        setFilltro(false)
    }

    const status = (status) =>{
        setStatusPersonaje(status)
    }
    return(
        <>
            <form onSubmit={buscador}>
                <input type="text" placeholder="Buscar Personaje..." onChange={e => setNombrePersonaje(e.target.value)} />
                <button>Buscar</button>
                <br />

                {
                    filtro ? (
                        <div>
                            <button onClick={() => status('alive')}>alive</button>
                            <button onClick={()=> status('dead')}>dead</button>
                            <button onClick={()=> status('unknown')}>unknown</button>
                            <br />
                            <button onClickCapture={volver}>volver</button>
                        </div>
                    ) : (
                        <p></p>
                    )
                }
                
            </form>

            {
                buscado ? (
                    <p>Buscando...</p>
                ) : (
                    <p></p>
                )
            }
        </>
    )
}

export default BuscadorComponent