import ComponentExtension from "./components/ComponentExtension";
import FirstComponent from "./components/FirstComponent";
import NOTJSX from "./components/NOTJSX";

const App = () => {
  return (
    <main>
      <FirstComponent />
      <ComponentExtension />
      <NOTJSX />
    </main>
  );
};

export default App;
