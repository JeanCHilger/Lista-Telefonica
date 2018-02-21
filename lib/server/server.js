var router = require("./router");

var app = router(3000);

var contacts = [
    {name: "Pedro", phoneNumber: "9999-8888", phoneOperator: {name: "Tim", code: 41, category: "Celular"}, date:new Date()},
    {name: "Mario", phoneNumber: "3444-3322", phoneOperator: {name: "GVT", code: 25, category: "Celular"}, date:new Date()},
    {name: "Ana", phoneNumber: "8877-3311", phoneOperator: {name: "Oi", code: 14, category: "Celular"}, date:new Date()}
];

var phoneOperators = [
    {name: "Oi", code: 14, category: "Celular"},
    {name: "Vivo", code: 15, category: "Celular"},
    {name: "Tim", code: 41, category: "Celular"},
    {name: "Claro", code: 21, category: "Celular"},
    {name: "GVT", code: 25, category: "Fixo"},
    {name: "Embratel", code: 21, category: "Fixo"}
];

app.interceptor(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.interceptor(function (req, res, next) {
    res.setHeader("Content-Type", "application/json;charset=UTF-8");
    next();
});

app.get("/operators", function (req, res) {
    res.write(JSON.stringify(phoneOperators));
    res.end();
});

app.get("/contacts", function (req, res) {
    res.write(JSON.stringify(contacts));
    res.end();
});

app.post("/contacts", function (req, res) {
    var contact = req.body;
    contacts.push(JSON.parse(contact));
    res.end();
});

app.options("/contacts", function (req, res) {
    res.end();
});
