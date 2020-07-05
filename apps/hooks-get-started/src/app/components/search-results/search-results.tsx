import React, { useEffect, useState } from "react";

import "./search-results.scss";

/* eslint-disable-next-line */
export interface SearchResultsProps {}

export interface ApiResponse {
  hits: any[];
}

export const SearchResults = (props: SearchResultsProps) => {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("react");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://hn.algolia.com/api/v1/search?query=" + query
      );
      const data = (await response.json()) as ApiResponse;
      setData(data);
    }
    fetchData();
  }, [query]);

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {data.hits.map((item) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
};
