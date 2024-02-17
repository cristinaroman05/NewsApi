import { Button, Heading, Image, Input, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import React, { useCallback } from "react";
import useFetch from "../useFetch";
import "../NewsSection/NewsSection.css";
const NewsSection = () => {
  const { topic } = useParams();
  const [currentPage, setCurrentPage] = React.useState(1);
  const info = useFetch(topic, currentPage);
  const [searchText, setSearchText] = React.useState("");
  const inputRef = React.useRef(null);

  const onSubmit = React.useCallback((event) =>{
    event.preventDefault();
    setSearchText(inputRef.current.value);
  })

  const onClickPrevious = React.useCallback(() => {
    currentPage > 1
      ? setCurrentPage(currentPage - 1)
      : alert("Ya estás en la primera página");
  }, [currentPage]);
  const onClickNext = React.useCallback(() => {
    currentPage < 5
      ? setCurrentPage(currentPage + 1)
      : alert("Ya estás en la última página");
  }, [currentPage]);

  const filteredArticles = info.articles?.filter((article) => {
    return article.title.toLowerCase().includes(searchText.toLocaleLowerCase())
})

  return (
    <div className="news-section">
      <form onSubmit={onSubmit}>
        <Input ref={inputRef} marginBottom="10px" placeholder="Filtrar noticias por título"></Input>
      </form>
      {filteredArticles &&
        filteredArticles.map((article) => {
          return (
            <div key={article._id}>
              <Image src={article.media}></Image>
              <Heading>{article.title}</Heading>
              <Text>{article.excerpt}</Text>
            </div>
          );
        })}
      <div className="news-section__button">
        <Button isDisabled={currentPage === 1} onClick={() => onClickPrevious()}>Anterior</Button>
        <p>
          Página {currentPage} de 5
        </p>
        <Button isDisabled={currentPage === 5} onClick={() => onClickNext()}>Siguiente</Button>
      </div>
    </div>
  );
};
export default NewsSection;
