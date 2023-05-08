import React, { Component } from "react";
import { number } from "prop-types";

class Counter extends Component {
  //   constructor(props) {
  //     super(props);

  //     // state의 초깃값 설정
  //     this.state = {
  //       number: 0,
  //       number2: 0,
  //       fixedNumber: 0,
  //     };
  //   }
  state = { number: 0, number2: 0, fixedNumber: 0 };

  render() {
    const { number, fixedNumber } = this.state; // state 조회는 this.state로 한다.
    const { number2 } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>{fixedNumber}</h2>
        <button
          // 클릭 함수 지정
          onClick={() => {
            // 교재 기본 형태 : 같은걸 두 번 써도 1씩 증가
            // this.setState({ number: number + 1 });

            // 익숙한 형태
            // this.setState(function() {

            // });

            // arrow function 형태 : 같은 걸 두 번 쓰면 2씩 증가
            // this.setState((prevState) => {
            //   return { number: prevState.number + 1 };
            // });
            // this.setState((prevState) => {
            //   return { number: prevState.number + 1 };
            // });

            // callback 함수 형태
            this.setState({ number: number + 1 }, () => {
              console.log("setState 호출");
              console.log(this.state);
            });
          }}
        >
          +1
        </button>
        <h1>{number2}</h1>
        <button
          // 클릭 함수 지정
          onClick={() => {
            this.setState({ number2: number2 - 1 });
          }}
        >
          -1
        </button>
      </div>
    );
  }
}

export default Counter;
