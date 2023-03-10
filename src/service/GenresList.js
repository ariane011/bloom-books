import api from "./index";

const GenresList = () => {
  return api.get(
    `svc/books/v3/lists/names.json?api-key=NmDjgi41PA8jqfavYKxjhHsSxLdNMtXs`
  );
};

export default GenresList;
