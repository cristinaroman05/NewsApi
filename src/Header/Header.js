import { Button, Flex } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import"../Header/Header.css"
const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="nav-container">
      <Button onClick={() => navigate(-1)}>Atrás</Button>
      <Flex justify="space-between" alignItems="center" width="60%" maxWidth="600px">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/noticias">Noticias</NavLink>
        <NavLink to="/noticias/sport">Deportes</NavLink>
        <NavLink to="/noticias/economics">Economía</NavLink>
        <NavLink to="/noticias/tech">Tecnología</NavLink>
      </Flex>
      <Button onClick={() => navigate(+1)}>Adelante</Button>
    </div>
  );
};
export default Header;
