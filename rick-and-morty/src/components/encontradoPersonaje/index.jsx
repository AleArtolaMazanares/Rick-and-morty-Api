import React, { useContext } from "react";
import { RickAndMortiContext } from "../context/RickAndMortiContext";
import { Link } from "react-router-dom";
import "../../personajesGlobales.css"

const EncontradoPersonaje = ()=>{
    const {personaEncontrado, estadoError}= useContext(RickAndMortiContext)
    return(
        <>
        <h1>Personajes Encontrados:</h1>
    {
        personaEncontrado.results === undefined ?(
            <p>este personaje no esta {estadoError}</p>
        ) : (
            personaEncontrado.results.length > 1 ? (
                 <div className="containerPersonajes">
               { personaEncontrado.results.map((personaje, index)=>(
                    <div key={index}>
                        <Link to={`informacion/${personaje.id}`}>
                        <p>{personaje.name}</p>
                        <img src={personaje.image} alt="" />
                        </Link>
                    </div>
                )) }
                </div> 
            ) : (
                <div>
                    <Link  to={`informacion/${personaEncontrado.results[0].id}`}>
                    <p>{personaEncontrado.results[0].name}</p>
                    <img src={personaEncontrado.results[0].image} alt="" />
                    </Link>
                </div>
            )
    
        )
    }             
        
        </>
    )
}

export default EncontradoPersonaje