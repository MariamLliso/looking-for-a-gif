import { SyntheticEvent, useState } from "react";
import { inputText } from "../../interfaces/searchInterface";
import FormStyle from "./FormStyle";

const Form = (): JSX.Element => {
  const initialData: inputText = "";
  const [formData, setFormData] = useState<inputText>(initialData);

  const onChangeData = (event: SyntheticEvent) => {
    event.preventDefault();

    setFormData((event.target as HTMLInputElement).value);
  };

  return (
    <FormStyle>
      <form className="search-form">
        <input
          type="text"
          value={formData}
          onChange={onChangeData}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search!
        </button>
      </form>
    </FormStyle>
  );
};

export default Form;
