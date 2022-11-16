import { InputContainer } from "./styled";

export function Input(props) {
  return (
    <InputContainer>
      <input {...props}/>
    </InputContainer>
  )
}
