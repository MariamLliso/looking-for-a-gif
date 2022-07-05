import AppStyle from "./AppStyle";
import Form from "./components/Form/Form";
import GifList from "./components/GifList/GifList";

const App = (): JSX.Element => (
  <AppStyle>
    <h1 className="header">
      Looking for a <strong>Gif</strong>?
    </h1>
    <Form />
    <GifList />
  </AppStyle>
);

export default App;
