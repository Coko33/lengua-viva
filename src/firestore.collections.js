import { collection } from "firebase/firestore";
import { db } from "./firebase";

export const eventosCollectionRef = collection(db, "eventos");
