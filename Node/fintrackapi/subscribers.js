const express = require("express");
const cors = require("cors");
const app = express();
const ConnectDB = require("./db");
const subscribersModel = require("./Models/subscribersModel");
const categoriesModel = require("./Models/categoriesModel"); /// step2
const registrationModel = require("./Models/registrationModel");
const gendersModel = require("./Models/gendersModel")
const servicesModel = require("./Models/servicesModel ")
const citiesModel = require("./Models/citiesModel ")
const stateModel = require("./Models/state")
const {
  application
} = require("express");

app.use(express.json());
app.use(cors());

app.post("/deposite", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get("/", (req, res) => {
  res.send("Welcome to GOPDAC....");
});
app.get("/categories", async (req, res) => { /// step3
  ConnectDB("fintrackdb")
  const result = await categoriesModel.find({})
  res.send(result)
})

app.post("/addcategory", (req, res) => {
  ConnectDB("fintrackdb") // 4
  const newCategory = new categoriesModel(req.body)
  newCategory.save()
  res.send("New category has been added!")
})
app.get("/state", async (req, res) => {
  ConnectDB("fintrackdb")
  const result = await stateModel.find({})
  res.send(result)
})
app.post("/addstate", (req, res) => {
  ConnectDB("fintrackdb")
  const newState = new stateModel(req.body)
  newState.save()
  res.send("New State has been added!")
})

app.get("/genders", async (req, res) => { /// step3
  ConnectDB("fintrackdb")
  const result = await gendersModel.find({})
  res.send(result)
})

app.post("/addgenders", (req, res) => {
  ConnectDB("fintrackdb") // 4
  const newCategory = new gendersModel(req.body)
  newCategory.save()
  res.send("New Genders has been added!")
})
app.get("/cities", async (req, res) => { /// step3
  ConnectDB("fintrackdb")
  const result = await citiesModel.find({})
  res.send(result)
})

app.post("/addcities", (req, res) => {
  ConnectDB("fintrackdb") // 4
  const newCategory = new citiesModel(req.body)
  newCategory.save()
  res.send("New city has been added!")
})








app.get("/registration", async (req, res) => {
  ConnectDB("fintrackdb")
  const result = await registrationModel.find({})
  res.send(result)
})
app.post("/registeradd", (req, res) => {
  ConnectDB("fintrackdb")
  const result = registrationModel(req.body)
  res.send("you have successfully register ")
})

app.get("/subscribers", async (req, res) => {
  ConnectDB("fintrackdb");
  const result = await subscribersModel.find({});
  res.send(result);
});
app.post("/subscribersbycity", async (req, res) => {
  ConnectDB("fintrackdb");
  const result = await subscribersModel.find(req.body);
  res.send(result);
});


app.post("/subsbycity", (req, res) => {
  const data = req.body
  res.json(data.city)
})
app.post("/fullname", (req, res) => {
  const data = req.body
  res.json(data.fname + " " + data.mname + " " + data.lname)
})

app.get("/addbank", (req, res) => {
  ConnectDB();
  const bank = {
    name: "Axis",
    branch: "Chinchwad",
    city: "Pune",
  };
  const newBank = new bankModel(bank);
  newBank.save();
});
app.post("/api/getBenef", async (req, res) => {
  ConnectDB();
  const result = await benefModel.find(req.body);
  res.send(result);
});

app.post("/api/addbenef", (req, res) => {
  ConnectDB();
  const newBenef = new benefModel(req.body);
  newBenef.save();
  res.send("New beneficiary added successfully!");
});

app.post("/api/updatebenef", async (req, res) => {
  ConnectDB();
  const currbenef = await benefModel.findOne({
    accno: req.body.accno
  });
  const newbenef = {
    accno: currbenef.accno,
    bankname: currbenef.bankname,
    branchname: currbenef.branchname,
    amnt: currbenef.amnt + Number(req.body.amnt),
    bname: currbenef.bname,
    isActive: currbenef.isActive,
  };
  currbenef.overwrite(newbenef);
  currbenef.save();
  res.send(
    "Your amount " +
    req.body.amnt +
    " has been added successfully. Balance Amount:" +
    currbenef.amnt
  );
});

app.post("/api/debitbenef", async (req, res) => {
  ConnectDB();
  const currbenef = await benefModel.findOne({
    accno: req.body.accno
  });
  const newbenef = {
    accno: currbenef.accno,
    bankname: currbenef.bankname,
    branchname: currbenef.branchname,
    amnt: currbenef.amnt - Number(req.body.amnt),
    bname: currbenef.bname,
    isActive: currbenef.isActive,
  };
  currbenef.overwrite(newbenef);
  currbenef.save();
  res.send(
    "Your amount " +
    req.body.amnt +
    " has been debited successfully. Balance Amount:" +
    currbenef.amnt
  );
});

app.post("/api/addbank", (req, res) => {
  ConnectDB();
  const newBank = new bankModel(req.body);
  newBank.save();
  res.send("New bank added successfully!!");
});

app.post("/api/getbank", async (req, res) => {
  ConnectDB();
  const result = await bankModel.find(req.body);
  res.send(result);
});

app.listen(3030, () => {
  console.log(`Connected to server : 3030`);
});