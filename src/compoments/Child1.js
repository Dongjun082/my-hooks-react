import React, { useRef } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

// props = {data};

const Child1 = ({ data, setData }) => {
  const todoRef = useRef();

  const insertTodo = () => {
    const value = todoRef.current.value;
    if (value == "") {
      alert("할일을 입력해주세요.");
      return;
    }

    if (data.includes(value)) {
      alert("이미 등록된 할일입니다.");
      todoRef.current.value = "";
      todoRef.current.focus();
      return;
    }

    setData(value);
    todoRef.current.value = "";
    todoRef.current.focus();
  };

  const keyInsert = (event) => {
    if (event.keyCode === 13) {
      insertTodo();
    }
  };

  // const onKeyPress = (e) => {
  //     if (e.key == "Enter") {
  //         insertTodo();
  //       }
  //     };

  // insertTodo => onclick의 이벤트를 생성
  //    const insertTodo = () => {
  // setData(todoRef.current.value);
  // todo를 (ref)참조.ref를 출력하기 위해 존재하는 태그(current)이고 출력된 값은 value
  // todoRef.current.value = "";
  // 값이 입력이 되고 리스트에 저장이 되면 혹은 값이 없다면...
  // todoRef.current.focus();
  // insertTodo 버튼에 focus를 해준다.
  // ref는 참조형식이고, 일반 객체이다.
  // 함수가 반환한 객체의 current(태그) 프로퍼티로 해당 React Element의 DOM에 접근

  return (
    <div>
      <h1>자식1</h1>
      <InputGroup className="mb-3" style={{ width: "300px" }}>
        <Form.Control
          ref={todoRef}
          placeholder="할일을 입력하세요"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onKeyUp={keyInsert}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"

          // 버튼이라는 곳에 insertTodo라는 함수 이벤트를 생성
        >
          버튼
        </Button>
      </InputGroup>
      {/* <button onClick={setData}>증가</button> */}
    </div>
  );
};

export default Child1;
