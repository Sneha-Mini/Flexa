const express = require('express')
const connectDB = require('./mongodb.js')
const itemModel = require('./models/item.js')
const emailModel = require('./models/email.js')
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors())
connectDB()

app.post("/Signup", async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const height = req.body.height;
    const weight = req.body.weight;
    const bmi = req.body.bmi;
    var now = new Date();
    const items = new itemModel({name: name, email: email, password : password, height : height, weight : weight, bmi : bmi, date : now})
    try {
        await items.save();
        res.send("inserted data")
    } catch (error) {
        console.log(error);
        res.send("error");
    }
})
app.post("/Contact", async (req, res) => {
    const email = req.body.email;
    const emails = new emailModel({email: email})
    try {
        await emails.save();
        res.send("inserted data")
    } catch (error) {
        console.log(error);
        res.send("error");
    }
})
app.get("/bmi", async (req, res) => {
    try {
        const underweightCount = await itemModel.countDocuments({ bmi: { $lt: 18.5 } });
        const normalCount = await itemModel.countDocuments({ bmi: { $gte: 18.5, $lt: 25 } });
        const overweightCount = await itemModel.countDocuments({ bmi: { $gte: 25 } });
        const bmiCounts = {
            underweight: underweightCount,
            normal: normalCount,
            overweight: overweightCount
        };
        res.json(bmiCounts);
    } catch (error) {
        console.error("Error fetching BMI data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
app.get("/usercountinmonths", async (req, res) => {
    try {
        const searchTerm1 = 'Mar';
        const searchTerm2 = 'Apr';
        const searchTerm3 = 'May';
        const regexmar = new RegExp(searchTerm1,'i');
        const regexapr = new RegExp(searchTerm2,'i');
        const regexmay = new RegExp(searchTerm3,'i');
        const userCountmar = await itemModel.countDocuments({ date: { $regex: regexmar } });
        const userCountapr = await itemModel.countDocuments({ date: { $regex: regexapr } });
        const userCountmay = await itemModel.countDocuments({ date: { $regex: regexmay } });

        const Counts = {
            marcount: userCountmar,
            aprcount: userCountapr,
            maycount: userCountmay
        };
        res.json(Counts);
    } catch (error) {
        console.error("Error fetching user count data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
app.get("/totalusers", async (req, res) => {
    try {
        const users = await itemModel.find({});
        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
  
app.get("/users", async (req, res) => {
    try {
        const users = await itemModel.find({}, 'email name bmi'); // Retrieve email, name, and bmi fields only
        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
app.get("/checkEmail", async (req, res) => {
    const { email } = req.query;
    try {
        const existingUser = await itemModel.findOne({ email });
        if (existingUser) {
            return res.status(200).json({ exists: true });
        } else {
            return res.status(200).json({ exists: false });
        }
    } catch (error) {
        console.error("Error checking email:", error);
        return res.status(500).json({ message: "Failed to check email existence" });
    }
});
app.get("/checkUser", async (req, res) => {
    const { email, password } = req.query;
    try {
        const existingUser = await itemModel.findOne({ email, password });
        if (existingUser) {
            return res.status(200).json({ exists: true });
        } else {
            return res.status(200).json({ exists: false });
        }
    } catch (error) {
        console.error("Error checking credentials:", error);
        return res.status(500).json({ message: "Failed to check credentials" });
    }
});
app.get("/getName", async (req, res) => {
    const { email } = req.query;
    try {
        const user = await itemModel.findOne({ email });
        if (user) {
            res.status(200).json({ name: user.name, bmi : user.bmi });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).json({ message: "Failed to fetch user data" });
    }
});
app.listen(3000, () => {
    console.log("Server running on port 3000...");

});