import myGroup from "../models/myGroup";

let getHomepage = (req, res) => {
  const method = req.method;
  const url = req.url;
  console.log(`method >>>>[${method}] , url>>>>>${url}`);
  console.log("mygroup >>>>>: ", myGroup);
  return res.render("index.ejs", { data: JSON.stringify(myGroup) });
};
//console.log("checkdata >>>>",typeof (data),JSON.stringify(data));
let getStudentpage = (req, res) => {
  const method = req.method;
  const url = req.url;
  console.log(`method >>>>[${method}] , url>>>>>${url}`);

  const pid = req.params.id;
  if (pid) {
    const person = myGroup.find((p) => p.id == pid);
    console.log("person", person);
    if (person) {
      return res.render("student.ejs", { data: JSON.stringify(person) });
    } else {
      return res.render("student.ejs", { data: "Not Valid" });
    }
  } else {
    return res.render("student.ejs", { data: "Not Valid" });
  }
};

let postStudentpage = (req, res) => {
  const method = req.method;
  const url = req.url;
  console.log(`method >>>>[${method}] , url>>>>>${url}`);
  console.log(req.body);
  const newItem = req.body;

  const existingItem = myGroup.find((item) => item.id === newItem.id);
  if (existingItem) {
    console.log("Not Valid item");
    return res.redirect("/");
  } else {
    myGroup.push(newItem);
    console.log("added");
    return res.redirect("/");
  }
};
let getMessagepage = (req, res) => {
  const method = req.method;
  const url = req.url;
  console.log(`method >>>>[${method}] , url>>>>>${url}`);

  if (method === "GET") {
    const pid = req.params.id;
    console.log("choose id >>>>", pid);
    if (pid) {
      const person = myGroup.find((p) => p.id == pid);
      // console.log("person", person);
      if (person) {
        return res.render("student.ejs", { data: JSON.stringify(person.name) });
      } else {
        return res.render("student.ejs", { data: "Not Valid" });
      }
    } else {
      return res.render("student.ejs", { data: JSON.stringify(myGroup) });
    }
  } else {
    return res.render("student.ejs", { data: "Not supported method" });
  }
};
let getMessage = (req, res) => {
  const method = req.method;
  if (method === "GET") {
    if (myGroup) {
      return res.render("student.ejs", { data: JSON.stringify(myGroup) });
    } else {
      return res.render("student.ejs", { data: "Not Valid" });
    }
  } else {
    return res.render("student.ejs", { data: "Not supported method" });
  }
};
module.exports = {
  getHomepage,
  getStudentpage,
  postStudentpage,
  getMessagepage,
  getMessage,
};
