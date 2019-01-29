export default function({ route, store }) {
  let currentCategoryID = route.params.id;
  store.commit("loadProducts", currentCategoryID);
  return store.dispatch("loadProducts", {
    currentCategoryID: currentCategoryID
  });
}
