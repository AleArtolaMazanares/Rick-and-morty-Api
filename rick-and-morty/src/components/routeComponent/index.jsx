import React from "react"
import {Route, Routes} from "react-router-dom"
import Personajes from "../../pages/personajes"
import InformacionDeLosPersonas from "../../pages/informacionDeLosPersonajes"

const RouteComponent = () =>{
    return(
        <>
        <Routes>
            <Route index element={<Personajes/>}/>
            <Route path="informacion/:id" element={<InformacionDeLosPersonas/>}/>
        </Routes>
        </>
    )
}

export default RouteComponent