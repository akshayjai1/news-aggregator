const apiKey = "eceed6f8530c4a1891648fd53561759e";
export const headlinesURL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

let day = new Date();
day.setMonth(day.getMonth() - 1);
let dateString = day.toISOString().slice(0, 10);
export const getSearchURL = function (searchKey = "") {
  return `https://newsapi.org/v2/everything?q=${searchKey}&from=${dateString}&sortBy=popularity&apiKey=${apiKey}`;
};
