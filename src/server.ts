import { app } from "./app";

const port = process.env.PORT || 6060;

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);