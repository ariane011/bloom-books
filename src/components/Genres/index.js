import React, { useEffect, useState } from "react";
import { Container, StyledTitle } from "./index.styled";
import Grid1 from "./../../assets/icons/grid1.svg";
import Grid2 from "./../../assets/icons/grid2.svg";
import Grid1Blue from "./../../assets/icons/grid1-blue.svg";
import Grid2Blue from "./../../assets/icons/grid2-blue.svg";
import moment from "moment";
import { Link, useLocation } from "react-router-dom";
import GenresList from "../../service/GenresList";
import { List, message } from "antd";
import { SearchGenres } from "../../service/Search";
import { Search } from "../Search";
import debounce from "lodash.debounce";

export const Genres = () => {
  const [books, setBooks] = useState([]);
  const [btnLayout, setBtnLayout] = useState("horizontal");
  const [btnVertical, setBtnVertical] = useState(false);
  const [btnHorizontal, setBtnHorizonta] = useState(true);
  const [search, setSearch] = useState("");
  const bookName = useLocation();

  useEffect(() => {
    if (search.length !== 0) {
      try {
        SearchGenres(search).then((response) => {
          const books = response.data;
          setBooks(books.results);
        });
      } catch (error) {
        message.error(
          "Houve um erro ao fazer a requisição, tente novamente mais tarde."
        );
      }
    } else {
      GenresList().then((response) => {
        const books = response.data;
        setBooks(books.results);
      });
    }
  }, [bookName, search]);

  return (
    <Container>
      <Search onChange={debounce((e) => setSearch(e.target.value), 500)} />
      <StyledTitle>
        <h1>Gêneros</h1>
        <div className="content-filter">
          <p>Exibir 5 por vez</p>
          <button
            onClick={(e) => {
              setBtnHorizonta(true);
              setBtnVertical(false);
              setBtnLayout("horizontal");
            }}
          >
            <img
              src={!btnHorizontal ? Grid1 : Grid1Blue}
              alt="Alinhamento Horizontal"
              className="grid1"
            />
          </button>
          <button
            onClick={(e) => {
              setBtnVertical(true);
              setBtnHorizonta(false);
              setBtnLayout("vertical");
            }}
          >
            <img
              src={!btnVertical ? Grid2 : Grid2Blue}
              alt="Alinhamento Vertical"
              className="grid2"
            />
          </button>
        </div>
      </StyledTitle>
      <List
        className="list"
        itemLayout={btnLayout}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 5,
          total: books.num_results,
        }}
        dataSource={books}
        renderItem={(books) => (
          <Link to={`/${books.list_name}`}>
            <List.Item
              key={books.bookName}
              style={
                btnLayout === "vertical"
                  ? { display: "inline-block" }
                  : { display: "flex" }
              }
            >
              <h2>{books.display_name}</h2>
              <p className="text-update">
                Atualizado em:{" "}
                {moment(books.newest_published_date).format("DD/MM/YYYY")}
              </p>
              <p>
                Última publicação:{" "}
                {moment(books.newest_published_date).format("DD/MM/YYYY")}
              </p>
              <p>
                Publicação mais antiga:{" "}
                {moment(books.oldest_published_date).format("DD/MM/YYYY")}
              </p>
            </List.Item>
          </Link>
        )}
      ></List>
    </Container>
  );
};
