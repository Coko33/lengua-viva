import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export function Home() {
  const { user, logout, loading } = useAuth();
  /* console.log(user); */

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) return <h1>loading</h1>;

  return (
    <>
      <div>home</div>
      <br></br>
      <h1>Hola {user.displayName || user.email}</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
