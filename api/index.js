"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_connect_1 = require("./db/db.connect");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "./.env" });
(0, db_connect_1.connectDB)();
// import authRoute from "./auth/auth.router";
// import adminRoute from "./admin/admin.router";
// import clientRoute from "./client/client.router";
var app = (0, express_1.default)();
var port = process.env.PORT || 3000;
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)({ credentials: true, origin: "http://localhost:3000" }));
// app.use("/", (req, res) => {
//   res.json({ success: true, message: "Namma lost maara !" });
// });
// app.use(authRoute);
// app.use(adminRoute);
// app.use(clientRoute);
app.use(function (error, req, res, next) {
    if (error) {
        res.status(error.status).json({ message: error.message });
    }
});
// app.use("*", (req: Request, res: Response) => {
//   res.status(404).json({ message: "Resource not found" });
// });
app.listen(port, function () {
    console.log("\uD83C\uDF89\uD83C\uDF89 - Wakey Wakey, your Server is up and running at " + port + "!");
});
