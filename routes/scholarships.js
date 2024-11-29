import express from "express";
import {
  applyScholarship,
  getScholarships,
} from "../controllers/scholarships.js";

const router = express.Router();

router.get("/", getScholarships);
router.post("/apply", applyScholarship);

export default router;
