
import "../../Styles/login.css";
import {Link} from "react-router-dom"

function CreateAccount() {
  return (
    <section id="home">
      <div id="portada">
        <img src="img-login.png" alt="" className="img-login" />
      </div>
      <div id="contenedor-formulario">
        <form action="" className="formulario">
          <h2 className="titulo-formulario">Create an account</h2>
          <h3 className="texto-formulario">Enter your details below</h3>
          <input className="entrada-login" type="text" placeholder="Name" />

          <input
            className="entrada-login"
            type="text"
            placeholder="Email or Phone Number"
          />
          <input
            className="entrada-login"
            type="password"
            placeholder="Password"
          />
          <button type="button" className="btn-create-account crear-cuenta">
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
