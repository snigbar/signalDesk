import { Request, Response, NextFunction } from "express";

import { createFeedback } from "./feedback.service.ts";
import { CreateFeedbackInput } from "./feedback.schema.js";

export const createFeedbackController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const input = req.body as CreateFeedbackInput;

    const feedback = await createFeedback(input);

    return res.status(201).json({
      success: true,
      data: feedback,
    });
  } catch (error) {
    next(error);
  }
};