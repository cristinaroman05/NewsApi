import { Flex } from "@chakra-ui/react";
import "../News/News.css";
import { NavLink } from "react-router-dom";

const News = () => {
  return (
    <Flex>
      <NavLink to="/noticias/sport">Deportes</NavLink>
      <NavLink to="/noticias/economics">Economía</NavLink>
      <NavLink to="/noticias/tech">Tecnología</NavLink>
    </Flex>
  );
};
export default News;

