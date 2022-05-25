const express = require("express");
const app = express();

const port = 8080;

var DB = {
    provider: {
        id: "BRCRD0028MG2ROML",
        name: "João",
        company: "4intelligence",
        create_at: "2022-03-02T18:13:16",
        amount_products: 242
    }    
}

app.get("/providers", (req, res) => {
    res.statusCode = 200;
    res.json(DB.provider);
});

app.listen(port,() => {
    console.log(`App runnin in port ${port}`);
});