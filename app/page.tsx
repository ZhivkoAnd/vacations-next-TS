"use client";

import VacationPanelContentful from "./components/ui/VacationPanelContentful";
import { FetchVacationsClient } from "./components/utils/FetchQueryClient";
import { useState, useEffect } from "react";
import {
  filterDateAscending,
  filterDateDescending,
} from "./components/utils/FilterFunctions";
import ActionBar from "./components/ui/ActionBar";

const Vacations = () => {
  const { data, isLoading } = FetchVacationsClient();

  const [inputQuery, setInputQuery] = useState("");
  const [filteredCities, setFilteredCities] = useState<any>(data);
  const [noVacationFound, setNoVacationFound] = useState(false);

  interface Data {
    fields: {
      date?: Date;
      title?: string;
    };
  }

  const modifiedDateData = data?.items.map((obj: Data) => {
    return {
      ...obj,
      fields: { ...obj.fields, date: new Date(obj.fields.date) },
    };
  });

  const inputData = modifiedDateData?.filter((city) =>
    city.fields.title.toLowerCase().includes(inputQuery.toLowerCase())
  );

  const setFilterDateAscending = () => {
    if (inputData && inputData.length) {
      setFilteredCities(filterDateAscending(inputData));
    } else {
      setFilteredCities(inputData);
    }
  };

  const setFilterDateDescending = () => {
    if (inputData && inputData.length) {
      setFilteredCities(filterDateDescending(inputData));
    } else {
      setFilteredCities(inputData);
    }
  };

  useEffect(() => {
    if (inputData && inputData.length) {
      setFilteredCities(inputData);
      setNoVacationFound(false);
    } else {
      setFilteredCities([]);
      setNoVacationFound(true);
    }
  }, [inputQuery, data]);

  if (isLoading) {
    return <div>isLoading</div>;
  }

  return (
    <>
      <ActionBar
        inputQuery={inputQuery}
        setInputQuery={setInputQuery}
        setFilterDateAscending={setFilterDateAscending}
        setFilterDateDescending={setFilterDateDescending}
      />
      {noVacationFound ? <div>NOTHING HERE</div> : ""}
      {filteredCities.length ? (
        <div className="vacation-panels">
          {filteredCities?.map((vacation: any) => (
            <VacationPanelContentful item={vacation} key={vacation.sys.id} />
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Vacations;
