import moment from "moment";

export const isoFormatFromString = (dateString) => {
  return moment(dateString).format("YYYY-MM-DD HH:mm:ss");
};
