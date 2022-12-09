interface Data {
  fields: {
    date?: number | Date | string;
  };
}

export const filterDateAscending = (arr: Data[]) => {
  return [...arr].sort((a, b) => {
    return Number(a.fields.date) - Number(b.fields.date);
  });
};

export const filterDateDescending = (arr: Data[]) => {
  return [...arr].sort((a, b) => {
    return Number(b.fields.date) - Number(a.fields.date);
  });
};
