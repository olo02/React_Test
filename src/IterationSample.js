import React, { useState } from "react";

const IterationSample = () => {
  // 배열 연습
  //let arr = [];
  //arr.map((a, b, c) => "");

  // 배열로 만들기
  //const names = ["눈사람", "얼음", "눈", "바람"];
  //const nameList = names.map((name, index) => <li key={index}>{name}</li>);

  // obj로 만들기
  const obj = [
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ];
  const [names, setNames] = useState(obj);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);
  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextName = names.concat({ id: nextId, text: inputText });
    setNextId(nextId + 1);
    setNames(nextName);
    setInputText("");
  };
  const onRemove = (id) => {
    setNames(names.filter((name) => name.id !== id));
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <>
      <input
        value={inputText}
        onChange={onChange}
        onKeyPress={onKeyPress}
      ></input>
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
