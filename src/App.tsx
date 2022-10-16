import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Button from "./components/Button";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <div className="App">
      안녕하세요 화이팅 해봐요. 설정 잘 됐을라나.. <br />
      절대경로 설정해야하는뎁..
      {/* <Button /> */}
      <TodoList />
    </div>
  );
}

export default App;
