import "reflect-metadata";
import express from "express";
import serverless from "serverless-http";
import { NotFoundMiddleware, ErrorMiddleware } from './modules/shared/middlewares/error.middleware';
import { loadModules } from "./modules";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("API is online"));

app.use("/api/v1", loadModules());
app.use(ErrorMiddleware);
app.use(NotFoundMiddleware);

export const server = serverless(app);