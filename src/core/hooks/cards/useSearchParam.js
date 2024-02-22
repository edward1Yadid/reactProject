import { useState, useEffect } from "react";

const useSearchParam = (paramKey, initialValue, onSearchQueryChange) => {
  const [searchQuery, setSearchQuery] = useState(initialValue);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const valueFromQueryParam = queryParams.get(paramKey);
    setSearchQuery(valueFromQueryParam || initialValue);

    if (typeof onSearchQueryChange === "function") {
      onSearchQueryChange(valueFromQueryParam || initialValue);
    }
  }, [paramKey, initialValue, onSearchQueryChange]);

  const updateSearchQuery = (newQuery) => {
    setSearchQuery(newQuery);

    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set(paramKey, newQuery);
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${queryParams}`
    );
  };

  return [searchQuery, updateSearchQuery];
};

export default useSearchParam;
