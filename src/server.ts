import { app } from "./app";

const port = process.env.PORT || 3000;

app.listen(port, () =>
  process.stdout.write(`App listening at http://localhost:${port}`)
);