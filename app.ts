import express from "express";
import allRoutes from "./routes/api";

const app = express();

app.use(express.json());

app.use("/", allRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

export default app;