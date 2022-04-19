import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Admin } from "./components/Admin";
import { Login } from "./components/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Register } from "./components/Register";
import { AuthProvider } from "./context/authContext";
import { FileUpload } from "./components/FileUpload";
import Nav from "./components/Nav";
import Inicio from "./components/Inicio";
import "./../src/index.css";
import "./../src/Animaciones.css";
import QueEsContar from "./components/secciones/QueEsContar";
import Talleres from "./components/secciones/Talleres";
import { useState } from "react";
import CuentosEnVivo from "./components/secciones/CuentosEnVivo";
import CuentosOnline from "./components/secciones/CuentosOnline";
import CuentosEnTuEscuela from "./components/secciones/CuentosEnTuEscuela";
import JuanMTapia from "./components/secciones/JuanMTapia";
import Manifiesto from "./components/secciones/Manifiesto";
import WinSize from "./components/helpers/WinSize";
import Footer from "./components/Footer";

function App() {
  const [isInicio, setIsInicio] = useState(false);

  if (isInicio) {
    const root = document.getElementById("rootHtml");
    root.classList.add("noScroll");
  } else {
    const root = document.getElementById("rootHtml");
    root.classList.remove("noScroll");
  }

  return (
    <>
      <WinSize></WinSize>
      <Nav isInicio={isInicio}></Nav>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={<Inicio setIsInicio={setIsInicio} />}
          ></Route>
          <Route path="/1" element={<QueEsContar />}></Route>
          <Route path="/2" element={<Talleres />}></Route>
          <Route path="/3" element={<CuentosEnVivo />}></Route>
          <Route path="/4" element={<CuentosOnline />}></Route>
          <Route path="/5" element={<CuentosEnTuEscuela />}></Route>
          <Route path="/6" element={<JuanMTapia />}></Route>
          <Route path="/7" element={<Manifiesto />}></Route>
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/galeria" element={<FileUpload />} />
        </Routes>
      </AuthProvider>
      {!isInicio && <Footer></Footer>}
    </>
  );
}

export default App;
