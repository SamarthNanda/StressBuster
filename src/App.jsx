import Head from "./component/Head";
import Main from "./component/main/Main";
import Count from "./component/countDown/Count";
import Drive from "./component/drive/Drive";

import "./App.css"

function App() {
  return (
    <div>
      <Head />
      <div className="container CD">
        <Count />
        <Drive />
      </div>
      <Main />
    </div>
  );
}

export default App;
