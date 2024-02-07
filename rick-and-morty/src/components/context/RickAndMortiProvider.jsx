import React, { useState } from 'react'
import { RickAndMortiContext } from './RickAndMortiContext'

function RickAndMortiProvider({children}) {

    const [encontrado, setEncontrado] = useState(false)
    const [personaEncontrado, setPersonajeEncontrado] = useState([])
    const [estadoError, setEstadoError] = useState([])

    const personajesRickAndMorty = () =>{
        return fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .catch(error => console.log(error))
    }

    const informacionDeLosPersonajes = (id)=>{
        return fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .catch(error => console.log(error))
    }

    const buscadorDePersonajesPorNombre = (name, status) =>{
        setEstadoError(status)
        try {
        return fetch(`https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`)
        .then(response => response.json())
        .then(data => {
            setPersonajeEncontrado(data)
            setEncontrado(true)
            return data
        })
        .catch(error => console.log(error))
        } catch (error) {
            console.log(`no hay personajes ${error}`)
        }
    }
 
  return (
    <div>
        <RickAndMortiContext.Provider value={{personajesRickAndMorty, informacionDeLosPersonajes, buscadorDePersonajesPorNombre, encontrado, personaEncontrado, setEncontrado, estadoError}}>
            {children}
        </RickAndMortiContext.Provider>
    </div>
  )
}

export default RickAndMortiProvider