import React, { lazy, Suspense } from "react";
import "./search-results-lazy.scss";

const LazyComponent = lazy(() => import("../search-results/search-results"));

export const SearchResultsLazy = () => {
  return (
    <div>
      <Suspense fallback={<div>Please wait...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default SearchResultsLazy;
