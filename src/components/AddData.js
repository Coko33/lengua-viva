import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./../firebase";
import { app } from "./../firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { eventosCollectionRef } from "../firestore.collections";

export default function AddData() {
  const [nombre, setNombre] = useState();
  const [descripcion, setDescripcion] = useState();
  const [habilitado, setHabilitado] = useState(1);
  const [archivo, setArchivo] = useState();

  const [previewUrl, setPreviewUrl] = useState([]);

  /* function handleSubmit(e) {
    e.preventDefault();
    if (nombre === "") {
      return;
    }
    const eventosCollectionRef = collection(db, "eventos");
    addDoc(eventosCollectionRef, { nombre, descripcion, habilitado })
      .then((res) => {
        console.log(res.id);
      })
      .catch((err) => {
        console.log(err.message);
      });
    alert(nombre);
  } */

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

  console.log(previewUrl);

  const handleChangeInput = (e) => {
    setArchivo(e.target.files[0]);
    previewImagen(e);
    console.log(archivo);
  };

  const subirEvento = async (e) => {
    e.preventDefault();
    /* const archivo = e.target.files[0]; */
    const storage = getStorage(app);
    const archivoPath = ref(storage, archivo.name);
    uploadBytes(archivoPath, archivo).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        /* const eventosCollectionRef = collection(db, "eventos"); */
        addDoc(eventosCollectionRef, {
          nombre,
          descripcion,
          habilitado,
          url: downloadURL,
        })
          .then((res) => {
            document.getElementById("form1").reset();
            setPreviewUrl([]);
            console.log(res.id);
          })
          .catch((err) => {
            console.log(err.message);
          });
        alert(nombre);
      });
    });
  };

  return (
    <div>
      <h1>Agregar evento</h1>
      <form id="form1" onSubmit={subirEvento}>
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
        <button type="submit">Enviar Evento</button>
      </form>
    </div>
  );
}
