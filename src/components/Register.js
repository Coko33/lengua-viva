import { useState } from "react";
import { useAuth } from "./../context/authContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "./Alert";

export function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (err) {
      console.log(err.code);
      if (err.code === "auth/invalid-email") setError("Correo invalido");
      if (err.code === "auth/weak-password")
        setError("La contraseña debe tener al menos 6 caracteres");
      if (err.code === "auth/email-already-in-use")
        setError("ese correo ya fue usado por alguien");
    }
  };

  return (
    <div>
      {error && <Alert message={error} />}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="youremail@company.ltd"
          onChange={handleChange}
        ></input>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="******"
          onChange={handleChange}
        ></input>

        <button>Register</button>
      </form>
    </div>
  );
}
