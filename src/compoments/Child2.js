import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const Child2 = ({ data, deletedata }) => {
  return (
    <div>
      <h1>자식2</h1>
      <Card style={{ width: "18rem" }}>
        <Card.Header>할일 목록</Card.Header>
        <ListGroup variant="flush">
          {data.map((todo, index) => {
            return (
              <ListGroup.Item key={index}>
                {todo}
                <button onClick={() => deletedata(index)}>삭제</button>
              </ListGroup.Item>
            );
          })}
          {/* map은 전달 함수를 규칙에 따라 변환시킨후 새로운 배열을 생성 */}
          {/* 반복되는 작업을 렌더링하기 위해 자바스크립트 map을 사용한다. */}
        </ListGroup>
      </Card>
    </div>
  );
};

export default Child2;
