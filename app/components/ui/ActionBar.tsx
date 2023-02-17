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
  admin?: boolean
  user?: boolean
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
  admin, user

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
        admin={admin} user={user}
      />
      <Search inputQuery={inputQuery} setInputQuery={setInputQuery} />
    </div>
  );
};

export default ActionBar;
