import api from "./index";

export const ListNames = () => {
  return api.get(
    `svc/books/v3/lists.json?api-key=NmDjgi41PA8jqfavYKxjhHsSxLdNMtXs`
  );
};
