interface Data {
  fields: {
    date: string;
  };
}

export const filterDateAscending = (arr: Data[]) => {
  return [...arr].sort((a, b) => {
    return Number(a.fields.date) - Number(b.fields.date);
  });
};

export const filterDateDescending = (arr: [{ fields: { date: number } }]) => {
  return [...arr].sort((a, b) => {
    return Number(b.fields.date) - Number(a.fields.date);
  });
};
