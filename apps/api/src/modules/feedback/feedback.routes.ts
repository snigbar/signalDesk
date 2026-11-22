import { Router } from "express";


import { createFeedbackController } from "./feedback.controller.js";
import { validate } from "../../middleware/validateFeedback.js";
import { createFeedbackSchema } from "./feedback.schema.js";

const router = Router();

router.post(
  "/",
  validate(createFeedbackSchema),
  createFeedbackController
);

export default router;