import "../Styles/login.css";
function Login() {
  return (
    <div>
      <section id="home">
      <div id="portada">
        <img src="../../public/portada.jpg" alt="" />
      </div>
      <div id="contenedor-formulario">
        <strong>
          <h1>Create on account</h1>
        </strong>
        <strong>
          <h3>Enter your details below</h3>
        </strong>
        <form action="" id="formulario">
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
          <button type="button" className="btn-login crear-cuenta">
            Create Account
          </button>
          <button type="button" className="btn-login google-cuenta">
            <img id="img-google" src="google.png" alt="" />
            Sign Up with Google
          </button>
        </form>
        <p>
          Already have account <a href="#">Log in</a>
        </p>
      </div>
    </section>
    </div>
  )
}

export default Login