import { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";

export function FileUpload() {
  const [uploadValue, setUploadValue] = useState(0);
  const [picture, setPicture] = useState(null);

  const handleUpload = async (e) => {
    e.stopPropagation();
    const file = e.target.files[0];
    const storage = getStorage();
    const storageRef = ref(storage, `fotos-galeria/${file.name}`);
    /*const metadata = {
  contentType: 'image/jpeg',
};*/
    const uploadTask = await uploadBytesResumable(storageRef, file);

    console.log(uploadTask);
    /* .then((snapshot) => {
      console.log(snapshot); //file.name + " uploaded!");
    }); */

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log(snapshot);
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
        /* setUploadValue(progress); */
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
        /* setUploadValue(100);
        setPicture(uploadTask.snapshot.downloadURL); */
      }
    );
  };

  return (
    <div>
      {<progress value={uploadValue}></progress>}
      <form>
        <input type="file" onChange={handleUpload}></input>
        <input
          type="text"
          name="nombre"
          placeholder="nombra tu archivo"
        ></input>
        <button type="submit">Enviar</button>
      </form>

      {<img width="320" src={picture} alt=""></img>}
    </div>
  );
}
