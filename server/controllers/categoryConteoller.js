import Product from "../model/Product.js";
import AiLog from "../model/AiLog.js";
import generateCategory from "../services/aiServices.js";
import categoryPrompt from "../utils/categoryPrompt.js";
import AppError from "../utils/AppError.js";

export const createCategory = async (req, res, next) => {
  try {

    const { product_name, description } = req.body;

    if (!product_name || !description) {
      return next(new AppError("Product name and description is required!", 400));
    }

    // prompt build
    const prompt = categoryPrompt(product_name, description);

    // AI call
    const aiResponse = await generateCategory(prompt);

    // safe JSON parsing
    let data;
    try {
      data = JSON.parse(aiResponse);
    } catch {
      throw new AppError("AI returned invalid JSON format", 500);
    }

    // create product
    const product = await Product.create({
      product_name,
      description,
      ...data
    });

  // logging AI interaction
    await AiLog.create({
      productId: product._id,
      prompt:prompt,
      response: data // aiResponse
    });

    res.status(200).json({
      success: true,
      product
    });

  } catch (err) {
    next(err);
  }
};