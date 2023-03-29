import "./App.css";
import Alert from "./components/Alert/Alert";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <Alert show={true} color="info">
        This is an alert.
      </Alert>
      <Button color="primary">Hello World</Button>
    </>
  );
}

export default App;
