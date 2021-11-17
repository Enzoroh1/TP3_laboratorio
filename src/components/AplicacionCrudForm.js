// import AplicacionCrudTableRow from "./AplicacionCrudTableRow";
import React,{useState,useEffect} from "react";

const initialForm = {
    nombreContacto:"",
    apellidoContacto:"",
    emailContacto:"",
    id:null,
};

const AplicacionCrudForm =() =>{
    const [form,setForm]= useState({initialForm});

    const handleChange = (e)=>{

    }
    const handleSubmit = (e)=>{

    }
    const handleReset = (e)=>{

    }
    return(
        <div>
            <h3>Agregar</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombreContacto" placeholder="Nombre Contacto" onChange={handleChange} value={form.nombreContacto}/>
                <input type="text" name="apellidoContacto" placeholder="Apellido Contacto" onChange={handleChange} value={form.apellidoContacto}/>
                <input type="text" name="emailContacto" placeholder="Email Contacto" onChange={handleChange} value={form.emailContacto}/>
                <input type="submit" value="Enviar"/>
                <input type="reset" value="Limpiar" onClick={handleReset} />
            </form>
        </div>
    )
};
export default AplicacionCrudForm;