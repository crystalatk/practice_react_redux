import { Provider } from "react-redux";
import { store } from "./redux/store";
import Counter from "./components/Counter";
import Test from "./components/Test";

import "./App.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <Counter />
        </div>
        <Test />
      </Provider>
    </>
  );
}

export default App;
