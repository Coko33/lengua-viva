import { useState } from "react";
import { useAuth } from "./../context/authContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "./Alert";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (err) {
      console.log(err.code);
      if (err.code === "auth/user-not-found")
        setError("No se encuentra el usuario");
      if (err.code === "auth/invalid-email")
        setError("No se ingresó un correo válido");
      if (err.code === "auth/wrong-password")
        setError("La contraseña no es correcta");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 tx-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            className="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            placeholder="youremail@company.ltd"
            onChange={handleChange}
          ></input>
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 tx-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            className="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            id="password"
            placeholder="******"
            onChange={handleChange}
          ></input>
        </div>

        <button className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Login
        </button>
      </form>
      <button onClick={handleGoogleSignIn}>Login with google</button>
    </div>
  );
}
