
import References from "../components/References";
import { Link } from "react-router-dom";
import FormContact from "../components/FormContact";
function Contact() {
  return (
    <>
      <div className="flex mx-32 my-12 gap-4">
        <Link className="text-gray-400 hover:underline" to="/">
          Home
        </Link>
        <span>/</span>
        <Link className="hover:underline">Contact</Link>
      </div>
      <div className="flex flex-row gap-5 justify-center">
        <References />
        <FormContact />
      </div>
    </>
  );
}

export default Contact;
