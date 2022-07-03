import { SyntheticEvent, useState } from "react";
import { IInputText } from "../../interfaces/gifInterfaces";
import FormStyle from "./FormStyle";

const Form = (): JSX.Element => {
  const initialData: IInputText = "";
  const [formData, setFormData] = useState<IInputText>(initialData);

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
