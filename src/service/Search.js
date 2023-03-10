import api from "./index";

export const SearchGenres = (search) => {
  return api.get(
    `/svc/books/v3/lists/current/${search}.json?api-key=NmDjgi41PA8jqfavYKxjhHsSxLdNMtXs`
    // `/svc/books/v3/lists/current/names.json?q=${search}&api-key=NmDjgi41PA8jqfavYKxjhHsSxLdNMtXs`
  );
};
