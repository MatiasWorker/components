// src/index.tsx
import { useState, useEffect } from "react";
var getLimit = (data, pages) => Math.round(data.length / pages);
function usePages(data, page) {
  const [state, setState] = useState(page);
  useEffect(() => {
    if (page.pages != state.pages)
      setState(page);
  }, [page.pages]);
  const { length } = data;
  const start = state.page * state.pages;
  const limit = getLimit(data, page.pages);
  let end = start + state.pages;
  end = end > length ? length : end;
  const group = data.slice(start, end);
  function to(value = 1) {
    let nextPage = state.page + value;
    nextPage = nextPage > 0 ? nextPage : 0;
    if (limit > nextPage)
      setState({ ...state, page: nextPage });
  }
  function isDisabled(value = 1) {
    let nextPage = state.page + value;
    return !(nextPage > -1 ? nextPage < limit : false);
  }
  return {
    to,
    group,
    isDisabled,
    position: {
      page: state.page,
      start: start + 1,
      end,
      length
    }
  };
}
export {
  usePages
};
