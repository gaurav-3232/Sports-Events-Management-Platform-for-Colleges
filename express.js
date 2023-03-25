const express = require("express");
const port = 8081;
const app = express();
app.use(express.json()); // if after using api is in jason format for it is used

//get method
app.get("/", (req, res) => {
    res.send("Hello express...");

})

app.get("/getname", (req, res) => {
    console.log(req.query.name);
    name = req.query.name;
    res.send(`Hello ${name}`)
})


app.get("/find", (req, res) => {
    x = req.query.num1;
    y = req.query.num2;

    output = "";

    if (x > y)
        output = `${x} is greatest`;
    else
        output = `${y} is greatest`;

    res.send(output);

});

//post method
app.post("/calc", (req, res) => {
    console.log(req.body)

    x = req.body.num1;
    y = req.body.num2;

    sum = x + y;
    mul = x * y;
    div = x / y;

    number = [{ "sum": sum }, { "multiplication": mul }, { "division": div }]

    res.send(number);

})




app.listen(process.env.PORT || port, () => {
    console.log(`listening on port ${port}`);
});