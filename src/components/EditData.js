import React, { useState } from "react";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

export default function EditMovie() {
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [habilitado, setHabilitado] = useState(1);
  const [archivo, setArchivo] = useState();

  const [previewUrl, setPreviewUrl] = useState([]);

  const previewImagen = (e) => {
    const reader = new FileReader();
    const files = e.target.files;
    if (files && files.length) {
      reader.onload = (e) => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleChangeInput = (e) => {
    setArchivo(e.target.files[0]);
    previewImagen(e);
  };

  const subirEvento = async (e) => {
    e.preventDefault();
    if (nombre === "" || id === "") {
      return;
    }

    const docRef = doc(db, "eventos", id);
  };

  return (
    <div>
      <h1>Editar evento</h1>
      <form id="form1" onSubmit={subirEvento}>
        <label htmlFor="id">ID del evento</label>
        <input
          id="id"
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        ></input>
        <br></br>
        <label htmlFor="nombre">Nombre del evento</label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        ></input>
        <br></br>
        <label htmlFor="descripcion">Descripción del evento</label>
        <textarea
          id="descripcion"
          type="text"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        ></textarea>
        <br></br>
        <input
          id="archivo"
          type="file"
          name="archivo"
          onChange={(e) => handleChangeInput(e)}
        ></input>{" "}
        {previewUrl.length ? (
          <img className="previewImg" alt="preview" src={previewUrl} />
        ) : (
          <></>
        )}
        <button type="submit">Actualizar Evento</button>
      </form>
    </div>
  );
}

//https://www.youtube.com/watch?v=F7t-n5c7JsE
//40:00
