import express from "express";
import authRoute from "./auth.route";

const router = express.Router();

router.use(authRoute);

router.get("/", (req, res) =>
  res.send("The API endpoint is working correctly!!!")
);

export default router;
