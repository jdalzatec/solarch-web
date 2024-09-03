export const humanize = (str) => {
  return str.replace(/_/g, " ").replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
};
