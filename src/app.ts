import express, { Response as ExResponse, Request as ExRequest } from "express";
import swaggerUi from "swagger-ui-express";
import bodyParser from "body-parser";
import { RegisterRoutes } from "../build/routes";
import morgan from "morgan";

export const app = express();

// Use body parser to read sent json payloads
app.use(morgan('dev'))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')

    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept,Authorization')

    if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST')
        return res.status(200).json({})
    }
    next()
})

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/swagger", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(
    swaggerUi.generateHTML(await import("../build/swagger.json"))
  );
});

RegisterRoutes(app);