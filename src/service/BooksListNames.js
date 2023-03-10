import api from "./index";

const BooksListNames = (bookName) => {
  return api.get(
    `/svc/books/v3/lists/current${bookName}.json?api-key=NmDjgi41PA8jqfavYKxjhHsSxLdNMtXs`
  );
};

export default BooksListNames;
