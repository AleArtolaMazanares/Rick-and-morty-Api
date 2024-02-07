import React, { useContext, useEffect, useState } from 'react'
import { RickAndMortiContext } from '../../components/context/RickAndMortiContext'
import { Link, useParams } from 'react-router-dom'

function InformacionDeLosPersonas() {
    const {informacionDeLosPersonajes, setEncontrado} = useContext(RickAndMortiContext)
    const [informacion, setinformacion] = useState([])
    const [loading, setLoading] = useState(false)
    const {id} = useParams();

    useEffect(()=>{
        const informacion = () =>{
            informacionDeLosPersonajes(id)
            .then(data => {
                setinformacion(data)
                setLoading(true)
            })
        }
        informacion();
    },[id])
    const resetearEstado = ()=>{
        setEncontrado(false)
    }
  return (
    <div>
        {
            loading ? (
                informacion.length === 0 ? (
                    <p>no se pudieron cargar los personajes</p>
                ) : (
                    <div>
                        <p>Name: {informacion.name}</p>
                        <img src={informacion.image} alt="" />
                        <p>Genero: {informacion.gender}</p>
                        <p>Especie: {informacion.species}</p>
                        <p>Estatus: {informacion.status}</p>
                        <Link to={"/"} onClick={resetearEstado}>Volver</Link>
                    </div>
                )
            ) : (
                <p>cargando...</p>
            )
        }
    </div>
  )
}

export default InformacionDeLosPersonas