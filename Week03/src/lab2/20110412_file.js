const csv = require("csv-parser");
const fs = require("fs");

const startDate = new Date(process.argv[2]);
const endDate = new Date(process.argv[3]);
let country = process.argv[4];
if (country) {
  country = country.replace("_", " ");
}
console.log(
  "--------------------------------------------------------------------------------------------"
);
console.log("startDate>>>", startDate);
console.log("endDate>>>", endDate);
console.log("country>>>", country);

console.log(
  "--------------------------------------------------------------------------------------------"
);
const results = [];

fs.createReadStream("./01-01-2021.csv")
  .pipe(csv({}))
  .on("data", (data) => {
    const { Confirmed, Deaths, Recovered, Country_Region, Last_Update } = data;
    const currentDate = new Date(Last_Update);

    if (
      (!startDate || currentDate >= new Date(startDate)) &&
      (!endDate || currentDate <= new Date(endDate)) &&
      (!country || Country_Region.toLowerCase() === country.toLowerCase())
    ) {
      results.push({ Confirmed, Deaths, Recovered });
    }
  })
  .on("end", () => {
    results.forEach((result) => {
      console.log(result.Confirmed, result.Deaths, result.Recovered);
    });
  });
