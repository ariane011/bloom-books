import api from "./index";

export const ListNames = () => {
  return api.get(
    `svc/books/v3/lists/names.json?api-key=NmDjgi41PA8jqfavYKxjhHsSxLdNMtXs`
  );
};
