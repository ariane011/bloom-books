import React from "react";
import { Input } from "antd";

export const Search = ({ onChange }) => {
  const { Search } = Input;

  return (
    <>
      <Search
        placeholder=" Pesquise por um filme aqui..."
        type="search"
        name="search-form"
        id="search-form"
        onChange={onChange}
        className="input-search"
        size="large"
      />
    </>
  );
};
