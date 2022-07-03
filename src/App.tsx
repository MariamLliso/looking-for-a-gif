import AppStyle from "./AppStyle";
import Form from "./components/Form/Form";

const App = (): JSX.Element => (
  <AppStyle>
    <h1 className="header">
      Looking for a <strong>Gif</strong>?
    </h1>
    <Form />
  </AppStyle>
);

export default App;
