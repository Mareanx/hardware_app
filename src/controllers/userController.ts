import { collection, doc, setDoc } from "firebase/firestore";
import { db, auth } from "../../services/firebaseConfig";

import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";

type UserData = {
  nome: string;
  cpf: string;
  dataNascimento: string;
  telefone: string;
  email: string;
  senha: string;
};

class User {
  async create(userData: UserData) {
    const useRef = doc(collection(db, "users"));
    await setDoc(useRef, userData);
    await createUserWithEmailAndPassword(auth, userData.email, userData.senha);
  }
}

export const userController = new User();
