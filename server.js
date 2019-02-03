const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;
// router

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.use(express.static("public"));
app.get("*", (req, res) => {
  res.sendfile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(port, console.log("graphQL server is ready..."));
