import { NavBarContainer, NavBarContent, Ul, Button } from "./style";

import LogoDio from "../../assets/logo-dio.png";

export default function NavBar() {
  return (
    <NavBarContainer>
      <NavBarContent>
        <div>
          <img src={LogoDio} alt="Logo dio" />
        </div>
        <Ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <Button>Entrar</Button>
          </li>
          <li>
            <Button>Cadastrar</Button>
          </li>
        </Ul>
      </NavBarContent>
    </NavBarContainer>
  );
}
