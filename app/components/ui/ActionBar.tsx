import React from "react";
import Search from "./Search";
import Filters from "./Filters";

interface Props {
  inputQuery: string;
  setInputQuery: any;
  setFilterDateAscending: () => void;
  setFilterDateDescending: () => void;
}

const ActionBar = ({
  inputQuery,
  setInputQuery,
  setFilterDateAscending,
  setFilterDateDescending,
} : Props) => {
  
  return (
    <div className="action-bar">
      <Filters
        setFilterDateAscending={setFilterDateAscending}
        setFilterDateDescending={setFilterDateDescending}
      />
      <Search inputQuery={inputQuery} setInputQuery={setInputQuery} />
    </div>
  );
};

export default ActionBar;
