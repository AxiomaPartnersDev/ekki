import express from "express";
import cors from "cors";
import http from "http";
import config from "./config";
import mongoose from "mongoose";
import router from "./routes";
import path from "path";



const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
    cors({
        origin: "*",
    })
);

app.use(express.static(path.resolve(__dirname, "../client", "build")));

app.use("/", router);

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
});

const server = http.createServer(app);

const main = async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(config.dbConnectLink);

        server.listen(config.port, () => {
            console.log(`listening on *: ${config.port}`);
        });
    } catch (e) {
        console.log("DB ErRoR", e);
    }
};

main().then(() => {

});
