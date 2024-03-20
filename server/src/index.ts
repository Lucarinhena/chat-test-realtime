import App from "./app";
import dotenv from "dotenv";

const app = new App();

dotenv.config();

app.server.listen(process.env.PORT  || 3008, () => {
  console.log("Server Running at port " + process.env.PORT);
});
