import "../src/assets/styles/style.scss";
import { useFormik } from "formik";
import { FormSchema } from "./FormScheme";
function App() {
  const formInitialValue = {
    email: "",
  };
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: formInitialValue,
    validationSchema: FormSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  return (
    <main>
      <img src="images/logo.svg" className="ping-logo" alt="ping logo" />
      <div className="description">
        <h1>
          {" "}
          We are launching <span>soon!</span>
        </h1>
        <p> Subscribe and get notified</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Your email address"
            value={values.email}
            onChange={handleChange}
          />{" "}
          <span className="error">{errors.email}</span>
          <button> Notify Me</button>
        </form>
      </div>

      <img
        src="images/illustration-dashboard.png"
        className="dashboard"
        alt="illustration dashboard"
      />
      <div className="footer">
        <div className="socials">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>
        <p> &copy; Copyright Ping. All rights reserved.</p>
      </div>
    </main>
  );
}

export default App;
