// import Counter from "./Counter";
//import Say from "./Say";
//import EventPractice from "./EventPractice";
//import EventPracticeFn from "./EventPracticeFn";
//import ValidationSample from "./ValidationSample";

import { Component } from "react";
//import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * Math.pow(2, 24)).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }

  // render() {
  //   return (
  //     <div>
  //       <Scrollbox ref={(ref) => (this.scrollbox = ref)} />
  //       <button onClick={() => this.scrollbox.scrollToBottom()}>
  //         맨 밑으로
  //       </button>
  //       <button onClick={() => this.scrollbox.scrollToTop()}>맨 위로</button>
  //     </div>
  //   );
  // }
}

// const App = () => {
//   return <ValidationSample />;
// };

export default App;
