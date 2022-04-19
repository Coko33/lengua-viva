import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./../firebase";
import AddData from "./AddData";
import { eventosCollectionRef } from "../firestore.collections";
import EditData from "./EditData";

export default function ListData() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    getEventos();
  }, []);

  useEffect(() => {
    setEventos(eventos);
  }, [eventos]);

  function getEventos() {
    /* const eventosCollectionRef = collection(db, "eventos"); */

    getDocs(eventosCollectionRef)
      .then((res) => {
        const evs = res.docs.map((evento) => ({
          data: evento.data(),
          id: evento.id,
        }));
        setEventos(evs);
      })
      .catch((err) => console.log(err.message));
    console.log(eventos);
  }

  return (
    <>
      <div>
        <h1>Hola DB</h1>
        <button onClick={() => getEventos()}>refresh</button>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Link de la imagen</th>
              <th>Precio</th>
              <th>Habilitado</th>
            </tr>
          </thead>
          <tbody>
            {eventos ? (
              eventos.map((evento) => (
                <tr key={evento.id}>
                  <td>{evento.id}</td>
                  <td>{evento.data.nombre}</td>
                  <td>{evento.data.descripcion}</td>
                  <td>{evento.data.url}</td>
                  <td>{evento.data.precio}</td>
                  <td>{evento.data.habilitado}</td>
                </tr>
              ))
            ) : (
              <tr>Sin eventos</tr>
            )}
          </tbody>
        </table>
      </div>
      <AddData></AddData>
      <EditData></EditData>
    </>
  );
}
