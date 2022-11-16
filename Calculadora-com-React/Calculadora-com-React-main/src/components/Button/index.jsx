import { ButtonContainer } from "./styled";

export function Button({ label, ...props}) {
  return (
    <ButtonContainer  {...props}>
      {label}
    </ButtonContainer>
  );
}
