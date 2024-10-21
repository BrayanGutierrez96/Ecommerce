import "../Styles/login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login">
      <section id="home">
        <div id="portada">
          <img src="img-login.png" alt="" className="img-login" />
        </div>
        <div id="contenedor-formulario">
          <form action="" className="formulario">
            <h2 className="titulo-formulario">Log in to Exclusive</h2>
            <h3 className="texto-formulario">Enter your details below</h3>
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
            <div className="login-btns">
              <button className="btn-login">Log In</button>
              <Link className="forget-password">Forget Password?</Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
