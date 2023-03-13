import { message, List, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BooksListNames from "../../service/BooksListNames";
import { Container, StyledTitle } from "./index.styled";
import Grid1 from "./../../assets/icons/grid1.svg";
import Grid2 from "./../../assets/icons/grid2.svg";
import Grid1Blue from "./../../assets/icons/grid1-blue.svg";
import Grid2Blue from "./../../assets/icons/grid2-blue.svg";

export const BookList = () => {
  const [book, setBook] = useState([]);
  const bookName = useLocation();
  const [btnLayout, setBtnLayout] = useState("horizontal");
  const [btnVertical, setBtnVertical] = useState(false);
  const [btnHorizontal, setBtnHorizonta] = useState(true);

  let str = bookName.pathname;
  str = str.substring(1);

  useEffect(() => {
    try {
      BooksListNames(bookName.pathname).then((response) => {
        const books = response.data;
        setBook(books.results.books);
        console.log(books.results.books);
      });
    } catch (error) {
      message.error(
        "Houve um erro ao carregar as informações, tente novamente mais tarde"
      );
    }
  }, [bookName]);

  return (
    <>
      <Container>
        <StyledTitle>
          <h1>{str}</h1>
          <div className="content-filter">
            <p>Exibir 5 por vez</p>
            <button
              className="btn-layout"
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
              className="btn-layout"
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
            total: book.num_results,
          }}
          dataSource={book}
          renderItem={(book) => (
            <List.Item
              key={book.rank}
              style={
                btnLayout === "vertical"
                  ? { display: "inline-block" }
                  : { display: "flex" }
              }
            >
              <List.Item.Meta
                style={
                  btnLayout === "vertical"
                    ? { display: "grid" }
                    : { display: "flex" }
                }
                avatar={
                  <img width={167} alt="Capa do livro" src={book.book_image} />
                }
                title={book.title}
                description={
                  <div
                    style={
                      btnLayout === "horizontal"
                        ? { width: "100%" }
                        : { width: "200px" }
                    }
                  >
                    <p>{book.description}</p>
                    <p>
                      <strong>Editora:</strong> {book.publisher}
                    </p>
                    <p>
                      <strong>Rank:</strong> {book.rank}
                    </p>
                    <a
                      href={book.amazon_product_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button
                        type="primary"
                        shape="round"
                        size={200}
                        className="btn-price"
                      >
                        Compre por{" "}
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(book.price)}
                      </Button>
                    </a>
                  </div>
                }
              />
            </List.Item>
          )}
        ></List>
      </Container>
    </>
  );
};
