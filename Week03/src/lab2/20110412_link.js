// const csv = require("csv-parser");
// const fs = require("fs");

// const startDate = process.argv[2];
// const endDate = process.argv[3];
// const country = process.argv[4];

// const results = [];

// fs.createReadStream("./01-01-2021.csv")
//   .pipe(csv({}))
//   .on("data", (data) => {
//     const { Confirmed, Deaths, Recovered, Country_Region, Last_Update } = data;
//     const currentDate = new Date(Last_Update);

//     if (
//       (!startDate || currentDate >= new Date(startDate)) &&
//       (!endDate || currentDate <= new Date(endDate)) &&
//       (!country ||
//         Country_Region.toLowerCase() === country.toLowerCase()
//         )
//     ) {
//       results.push({ Confirmed, Deaths, Recovered });
//     }
//   })
//   .on("end", () => {
//     results.forEach((result) => {
//       console.log(result.Confirmed, result.Deaths, result.Recovered);
//     });
//   });
// // fs.createReadStream("./01-01-2021.csv")
// // .pipe(  )
// //   .on("data", (data) => {
// //     console.log("data >>>>>>>>>>>>>", data);
// //   })
// //   .on("error", (err) => {
// //     console.log("err>>>", err);
// //   })
// //   .on("end", () => {
// //     console.log("end reading ");
// //   });
const csv = require("csv-parser");
const fs = require("fs");
const https = require("https");
const axios = require("axios");
const { parse } = require("csv-parse");
let formatDate = (date) => {
  let result = "";

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());
  result = `${day}-${month}-${year}`;
  return result;
};

const url =
  "https://github.com/CSSEGISandData/COVID-19/blob/master/csse_covid_19_data/csse_covid_19_daily_reports/";
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

for (
  let date = new Date(startDate);
  date <= endDate;
  date.setDate(date.getDate() + 1)
) {
  console.log("date>>>", date);
  console.log("endDate>>>", endDate);
  const fileDate = formatDate(date);
  const fileUrl = `${url}${fileDate}.csv`;
  console.log("fileDate>>>", fileDate);
  console.log("fileUrl>>>", fileUrl);
  // fetch(
  //   "https://github.com/CSSEGISandData/COVID-19/blob/master/csse_covid_19_data/csse_covid_19_daily_reports/02-01-2021.csv"
  // ).then((data) => {
  //   console.log("data<<<<<<<<<", data);
  // });
  // Tải file CSV
  https
    .get(fileUrl, (response) => {
      let data = "";
      console.log("data<<<<<<<<<");
      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => {
        csv(data, { headers: true }, (err, records) => {
          if (err) throw err;

          for (const record of records) {
            if (
              !country ||
              record.Country_Region.toLowerCase() === country.toLowerCase()
            ) {
              const confirmed = parseInt(record.Confirmed);
              const deaths = parseInt(record.Deaths);
              const recovered = parseInt(record.Recovered);

              // Xuất kết quả
              console.log(`${confirmed} ${deaths} ${recovered}`);
            }
          }
        });
        console.log("data>>>>", data);
      });
    })
    .on("error", (err) => {
      console.error(`Lỗi khi tải file: ${err.message}`);
    });
}
