import React, { useEffect, useMemo, useRef, useState } from "react";
import Child1 from "./compoments/Child1";
import Child2 from "./compoments/Child2";

// ===============================================================================
const App = () => {
  const [todoList, setTodoList] = useState([]);
  // useState는 값을 바꾸는 동적일을 할당 시켜주는 Hooks이다.
  // useRef는 해당 자료를 참고하는 Hooks이다.

  const addTodo = (todo) => {
    const tempTodoList = [...todoList];
    // [...todoList]을 하여 tempTodoList 생성한다.
    tempTodoList.push(todo);
    // 복제된 tempTodoList에 입력된 todo를 push로 넣는다.
    setTodoList(tempTodoList);
    // setCount((prew) => prew + 1);
  };

  const deleteTodo = (index) => {
    const tempTodoList = [...todoList];

    tempTodoList.splice(index, 1);

    setTodoList(tempTodoList);
  };

  return (
    <div>
      <h1>부모</h1>
      <hr />
      <Child1 data={todoList} setData={addTodo} />
      {/* 값을 입력 받음 */}
      <Child2 data={todoList} deletedata={deleteTodo} />
      {/* 입력된 값이 저장됨 */}
    </div>
  );

  // ===============================================================================
  //   //useState 방식
  //   const [number, setNumber] = useState(0);
  //   const onIncrease = () => {
  //     setNumber(number + 1);
  //   };
  //   const onDecrease = () => {
  //     setNumber(number - 1);
  //   };
  //   return (
  //     <div>
  //       <div>{number}</div>
  //       <button onClick={onIncrease}>+1</button>
  //       <button onClick={onDecrease}>-1</button>
  //     </div>
  //   );
  // };
  // ===============================================================================
  //useEffect 방식

  //useMemo 방식

  // ===============================================================================
  //useRef 방식
  //   const [inputs, setInputs] = useState({
  //     name: "",
  //     setInputs: "",
  //   });
  //   const nameInput = useRef();
  //   const { name, nickname } = inputs;
  //   const onChange = (e) => {
  //     const { value, name } = e.target;
  //     setInputs({
  //       ...inputs,
  //       [name]: value,
  //     });
  //   };
  //   const onReset = () => {
  //     setInputs({
  //       name: "",
  //       setInputs: "",
  //     });
  //     nameInput.current.focus();
  //   };
  //   return (
  //     <div>
  //       <input
  //         name="name"
  //         placeholder="이름"
  //         onChange={onChange}
  //         value={name}
  //         ref={nameInput}
  //       />
  //       <input
  //         name="nickname"
  //         placeholder="닉네임"
  //         onChange={onChange}
  //         value={nickname}
  //       />
  //       <button onClick={onReset}>초기화</button>
  //       <div>
  //         <b>값 : </b>
  //         {name} ({nickname})
  //       </div>
  //     </div>
  //   );
  // };
  // ===============================================================================
  //uselist 예제
  //   const [list, setList] = useState([0, 0, 0]);
  //   const changeList = (index) => {
  //     const tempList = [...list];
  //     tempList[index] = tempList[index] + 1;
  //     setList(tempList);
  //   };
  //   return (
  //     <div>
  //       <div>{list[0]}</div>
  //       <div>{list[1]}</div>
  //       <div>{list[2]}</div>
  //       <button onClick={() => changeList(0)}>0번 변경</button>
  //       <button onClick={() => changeList(1)}>1번 변경</button>
  //       <button onClick={() => changeList(2)}>2번 변경</button>
  //     </div>
  //   );
  // };
  // function App() {
  //   return <div></div>;
  // }
  // ===============================================================================
};
export default App;
