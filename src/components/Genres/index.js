import React, { useEffect, useState } from "react";
import { Container, StyledTitle } from "./index.styled";
import Grid1 from "./../../assets/icons/grid1.svg";
import Grid2 from "./../../assets/icons/grid2.svg";
import Grid1Blue from "./../../assets/icons/grid1-blue.svg";
import Grid2Blue from "./../../assets/icons/grid2-blue.svg";
import moment from "moment";
import { Link } from "react-router-dom";
import GenresList from "../../service/GenresList";
import { Card, List, message } from "antd";
import { Search } from "../Search";

export const Genres = () => {
  const [books, setBooks] = useState([]);
  const [btnLayout, setBtnLayout] = useState("horizontal");
  const [btnVertical, setBtnVertical] = useState(false);
  const [btnHorizontal, setBtnHorizonta] = useState(true);
  const [search, setSearch] = useState({
    query: "",
    list: [],
  });

  const handleChange = (e) => {
    const results = books.filter((book) => {
      if (e.target.value === "") return books;
      return book.list_name
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setSearch({
      query: e.target.value,
      list: results,
    });
  };

  useEffect(() => {
    try {
      GenresList().then((response) => {
        const books = response.data;
        setBooks(books.results);
      });
    } catch (error) {
      message.error(
        "Houve um erro ao carregar as informações, tente novamente mais tarde"
      );
    }
  }, []);

  const renderItem = (data) =>
    data.edges.map((item) => (
      <List.Item>
        <Card bordered={false} style={{ width: "100%" }}>
          {item.node.name}
        </Card>
      </List.Item>
    ));

  return (
    <Container>
      <Search onChange={handleChange} value={search.query} />
      <StyledTitle>
        <ul></ul>
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
        }}
        dataSource={search.query === "" ? books : search.list}
        renderItem={(books) => (
          <>
            <Link to={`/${books.list_name}`}>
              {console.log(books)}
              <List.Item
                key={books.list_name}
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
          </>
        )}
      ></List>
    </Container>
  );
};
