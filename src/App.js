// import Counter from "./Counter";
//import Say from "./Say";
//import EventPractice from "./EventPractice";
//import EventPracticeFn from "./EventPracticeFn";
//import ValidationSample from "./ValidationSample";

import { Component } from "react";
import IterationSample from "./IterationSample";

class App extends Component {
  render() {
    return (
      <div>
        <IterationSample />
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
