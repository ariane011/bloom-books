import { Col, Row, message } from "antd";
import Input from "antd/es/input/Input";
import React, { useEffect, useState } from "react";
import { Container } from "./index.styled";
import GenresList from "../../service/GenresList";

export const Header = ({ onChange }) => {
  const [books, setBooks] = useState([]);
  const { Search } = Input;
  const [search, setSearch] = useState({
    query: "",
    list: [],
  });

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

  return (
    <Container>
      <a href={"/"} style={{ fontSize: 24, fontWeight: 500 }}>
        Bloom Books
      </a>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          width: "60%",
        }}
      >
        <Col span={16}>
          <Search onChange={handleChange} value={search.query} />
        </Col>
      </Row>
    </Container>
  );
};
