const http = require("http");
const port = 5000;
const myGroup = [
  {
    id: 0,
    name: "Dang Thanh Tuyen",
  },
  {
    id: 1,
    name: "Danh Truong Son",
  },
  {
    id: 2,
    name: "Dang Phuoc Truong Tai",
  },
  {
    id: 3,
    name: "Nguyen Trung Nguyen",
  },
];

const server = http.createServer();

server.on("request", (req, res) => {
  const items = req.url.split("/");
  switch (items[1]) {
    case "20110412":
      if (req.method === "POST") {
        req.on("data", (data) => {
          const newMember = data.toString();
          myGroup.push(JSON.parse(newMember));
          req.pipe(res);
        });
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");

        if (items.length < 3) {
          res.end(JSON.stringify(myGroup));
        } else if (items[2] < myGroup.length) {
          res.end(JSON.stringify(myGroup[Number(items[2])]));
        } else {
          res.end("Not valid");
        }
      }

      break;
    case "message":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      if (items.length < 3) {
        res.end(JSON.stringify(myGroup));
      } else if (items[2] < myGroup.length) {
        res.write(
          `<html><body><ul><li>${
            myGroup[Number(items[2])].name
          }</li></ul></body></html>`
        );
        res.end();
      } else {
        res.end("Not valid");
      }

      break;
    case "":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(myGroup));
      break;
    default:
      res.statusCode = 404;
      res.end();
      break;
  }
});

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
