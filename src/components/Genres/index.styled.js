import styled from "styled-components";

export const StyledTitle = styled.div`
  width: 100%;
  background-color: #f2f3f8;
  height: 50px;
  display: flex;
  align-items: center;
  font-family: "Roboto";
  font-style: normal;
  h1 {
    font-size: 24px;
    color: #010311;
    padding-left: 50px;
    font-weight: 700;
  }
  .content-filter {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: auto 50px auto auto;
    width: inherit;
    p {
      padding-right: 43px;
    }
  }
`;

export const Container = styled.div`
  font-family: "Roboto";
  font-style: normal;
  .ant-list-split .ant-list-item {
    border-block-end: none;
    padding-left: 50px;
    padding-right: 50px;
  }
  h2 {
    font-size: 20px;
    text-decoration-line: underline;
    color: #5062f0;
    line-height: 23px;
    font-weight: 400;
  }
  .text-update {
    font-style: italic;
    font-weight: 400;
    font-size: 10px;
  }
  .list {
    width: 100%;
  }
  button {
    background-color: transparent;
    border: none;
  }
  .ant-list-pagination {
    display: flex;
    justify-content: center;
  }
  .ant-select-selector,
  .ant-pagination-options {
    display: none;
  }
  .grid1:hover,
  .grid2:hover {
    filter: invert(39%) sepia(65%) saturate(914%) hue-rotate(202deg)
      brightness(93%) contrast(104%);
  }
`;
