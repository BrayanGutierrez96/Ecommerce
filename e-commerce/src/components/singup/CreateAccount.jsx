import { useState } from "react";
import "../../Styles/login.css";
import { Link } from "react-router-dom";

function CreateAccount() {
  const [telefono, setTelefono] =  useState(0)
  const [info, setInfo] = useState({
    name: "",
    identificador:"",
    password: "",
  });

  const crearCuenta = (event) => {
    const newInfo = {...info, [event.target.name]:event.target.value}
    setInfo(newInfo)
  };

  const enviarDatos = ()=>{
    const email = info.identificador
    const ultimaPosicion = email.charAt(email.length - 1);
    
    const validacion = isNaN(ultimaPosicion)
    if(validacion){
      setTelefono(email);
    }else{ 
      setTelefono(parseInt(email));
    }
    console.log(telefono);
  }

  return (
    <section id="home">
      <div id="portada">
        <img src="img-login.png" alt="" className="img-login" />
      </div>
      <div id="contenedor-formulario">
        <form action="" className="formulario">
          <h2 className="titulo-formulario">Create an account</h2>
          <h3 className="texto-formulario">Enter your details below</h3>
          <input className="entrada-login" type="text" placeholder="Name" name="name" onChange={(e)=>{crearCuenta(e)}}/>
          <input
            className="entrada-login"
            type="text"
            placeholder="Email or Phone Number"
            name="identificador"
            onChange={(e)=>{crearCuenta(e)}}
          />
          <input
            className="entrada-login"
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e)=>{crearCuenta(e)}}
          />
          <button type="button" className="btn-create-account crear-cuenta" onClick={enviarDatos}>
            Create Account
          </button>
          <button type="button" className="btn-create-account google-cuenta">
            <img id="img-google" src="google.png" alt="" />
            Sign Up with Google
          </button>
          <p className="texto-login__footer">
            Already have account ?
            <Link to="/login" className="enlace-login">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default CreateAccount;
