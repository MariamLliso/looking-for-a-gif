import GifStyle from "./GifStyle";

const Gif = (): JSX.Element => (
  <GifStyle>
    <img
      className="gif-image"
      src="https://media4.giphy.com/media/JQFZzvTP7XmPBmcSdH/giphy.gif?cid=eeb5b81c07k7oxkap4871f9it5lprfj4gd3gzwlsy1k72t05&rid=giphy.gif&ct=g"
      alt="Hamster"
    />
    <h3 className="gif-title">Titulo</h3>
  </GifStyle>
);

export default Gif;
