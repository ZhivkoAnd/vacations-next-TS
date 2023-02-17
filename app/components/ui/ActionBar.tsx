import React from "react";
import Search from "./Search";
import Filters from "./Filters";

interface Props {
  inputQuery: string;
  setInputQuery: any;
  setFilterDateAscending?: () => void;
  setFilterDateDescending?: () => void;
  setFilterTitleAscending?: () => void;
  setFilterTitleDescending?: () => void;
  setFilterPriceAscending?: () => void;
  setFilterPriceDescending?: () => void;
  isAdminPage?: boolean
}

const ActionBar = ({
  inputQuery,
  setInputQuery,
  setFilterDateAscending,
  setFilterDateDescending,
  setFilterTitleAscending,
  setFilterTitleDescending,
  setFilterPriceAscending,
  setFilterPriceDescending,
  isAdminPage

}: Props) => {
  return (
    <div className="action-bar">
      <Filters
        setFilterDateAscending={setFilterDateAscending}
        setFilterDateDescending={setFilterDateDescending}
        setFilterTitleAscending={setFilterTitleAscending}
        setFilterTitleDescending={setFilterTitleDescending}
        setFilterPriceAscending={setFilterPriceAscending}
        setFilterPriceDescending={setFilterPriceDescending}
        isAdminPage={isAdminPage}
      />
      <Search inputQuery={inputQuery} setInputQuery={setInputQuery} />
    </div>
  );
};

export default ActionBar;
