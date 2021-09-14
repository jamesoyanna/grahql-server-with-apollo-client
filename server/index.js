const { graphqlHTTP } = require("express-graphql");
const express = require("express");
const app = express();
const port = 5000;
const schema = require("./Schemas");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Server running on:${port}`);
});
