import React, { useContext, useEffect, useState } from "react";
import { RickAndMortiContext } from "../../components/context/RickAndMortiContext";
import { Link } from "react-router-dom";
import BuscadorComponent from "../../components/BuscadorComponente";
import EncontradoPersonaje from "../../components/encontradoPersonaje";
import "../../personajesGlobales.css"


const Personajes = () =>{
    const {personajesRickAndMorty, encontrado} = useContext(RickAndMortiContext)
    const [personajes, setPersonajes] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const TodosLosPersonajesDeRickAndMorty = () =>{
            personajesRickAndMorty()
            .then(data =>{
                setPersonajes(data)
                setLoading(true)
            })
        }
        TodosLosPersonajesDeRickAndMorty();
    },[])



    
    return(
        <div>
               <BuscadorComponent/>
           {
            encontrado ? (
                <EncontradoPersonaje/>
            ) : (
                loading ? (
                    personajes.length === 0 ? (
                     <p>no hay personajes para cargar</p>
                    ) : (
                        <div className="containerPersonajes">  
                   {  personajes.results.map((personaje, index) =>(
                         <div key={index}>
                             <Link to={`informacion/${personaje.id}`}>
                                 <p>{personaje.name}</p>
                                 <img src={personaje.image} alt="" />
                             </Link>
                         </div>
                     ))}
                     </div>
                    )
                 ) : (
                     <p>cargando...</p>
                 )
            )
           }
        </div>
    )
}

export default Personajes