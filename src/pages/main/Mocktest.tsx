import { useRecoilValue } from "recoil";
import React, { useEffect, useState } from "react";
import { firestore } from "../../firebaseConfig";
import { collection, doc, setDoc, query, getDocs } from "firebase/firestore";
import { authState } from "../../atoms/atoms";

const DUMMY_DATA = { id: 1, text: "리액트" };

interface MockData {
  id: string;
  text: string;
}

export default function Mocktest() {
  const authData = useRecoilValue(authState);

  // * 파이어 베이스에 투두 데이터 전송
  useEffect(() => {
    const fetchTest = async () => {
      if (Object.keys(DUMMY_DATA).length > 0) {
        try {
          const newTodoRef = doc(collection(firestore, authData.uid));

          await setDoc(newTodoRef, DUMMY_DATA);
          // setTodosState((todos) => [...todos, newTodo]); recoil 투두 연동
        } catch (error) {
          alert(`An error occurred: ${error}`);
        }
      }
    };

    fetchTest();
  }, []);

  // * 투두에 파이어 베이스 데이터 받아서 렌더링

  // const [todos, setTodos] = useRecoilState(todosState);
  // const loginState = useRecoilValue(authState);
  const [todos, setTodos] = useState<MockData[]>([]);

  useEffect(() => {
    async function loadTodos() {
      const q = query(collection(firestore, authData.uid));
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot);
      if (querySnapshot) {
        const todosInFirestore: MockData[] = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            text: doc.data().text,
          };
        });
        console.log(todosInFirestore);
        setTodos(todosInFirestore);
      }
    }
    loadTodos();
  }, [setTodos]);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
