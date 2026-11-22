
import { saveFeedback } from "./feedback.repository.js";
import { CreateFeedbackInput } from "./feedback.schema.js";

export const createFeedback = async (input: CreateFeedbackInput) => {
  return await saveFeedback(input);
};