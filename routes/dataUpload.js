import express from "express";
import {
	uploadData,
	updateAnomaly,
	getTransaction,
} from "../controllers/dataUpload.js";

const router = express.Router();

router.post("/", uploadData);
router.patch("/:id/anomaly", updateAnomaly);
router.get("/getdata", getTransaction);

export default router;
