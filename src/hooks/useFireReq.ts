import { useEffect } from "react";
import {
  collection,
  doc,
  setDoc,
  query,
  getDocs,
  updateDoc,
  deleteField,
  deleteDoc,
} from "firebase/firestore";
import { firestore } from "../firebaseConfig";
import { ITodo } from "../pages/atoms";
import { firebaseConfig } from "../firebaseConfig";
import { useSetRecoilState } from "recoil";
import { todoState } from "../pages/atoms";

const useFireReq = () => {
  const setTodoList = useSetRecoilState(todoState);

  const _session_key = `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`;
  const userData = sessionStorage.getItem(_session_key) || "{}";
  const { uid, email, displayName } = JSON.parse(userData);

  //* 투두리스트 서버에서 가져오기
  useEffect(() => {
    async function loadTodos() {
      const q = query(collection(firestore, uid));
      const querySnapshot = await getDocs(q);
      if (querySnapshot) {
        const todosInFirestore: ITodo[] = querySnapshot.docs.map((doc) => ({
          id: doc.data().id,
          text: doc.data().text,
          min: doc.data().min,
          sec: doc.data().sec,
        }));
        setTodoList(todosInFirestore);
      }
    }
    if (uid) {
      loadTodos();
    }
  }, []);

  //*투두 서버에 추가
  const addTodoFireBase = async (todo: ITodo) => {
    try {
      const newTodoRef = doc(collection(firestore, uid));

      const newTodo = { ...todo, id: newTodoRef.id };
      setTodoList((prev) => [newTodo, ...prev]);

      await setDoc(newTodoRef, newTodo);
    } catch (error) {
      alert(`An error occurred: ${error}`);
    }
  };

  //* 투두 수정코드

  const editTodoFireBase = async (todo: ITodo) => {
    try {
      const newTodoRef = doc(firestore, uid, todo.id);

      await updateDoc(newTodoRef, { text: todo.text });
    } catch (error) {
      alert(`An error occurred: ${error}`);
    }
  };

  //* 투두 삭제코드

  const removeTodoFireBase = async (id: any) => {
    try {
      console.log(firestore, "-------------", uid, "-------------", id);
      await deleteDoc(doc(firestore, uid, id));
    } catch (error) {
      alert(`An error occurred: ${error}`);
    }
  };

  return { addTodoFireBase, editTodoFireBase, removeTodoFireBase };
};

export default useFireReq;
