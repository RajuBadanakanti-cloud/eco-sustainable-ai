import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      required: true
    },

    category: {
      type: String,
      enum: ["Kitchen", "Personal Care", "Home Essentials", "Accessories"],
      required: true
    },

    sub_category: {
      type: String,
      required: true
    },

    seo_tags: {
      type: [String],
      default: []
    },

    sustainability_filters: {
      type: [String],
      default: []
    }
  },
  {
    timestamps: true, toJSON:{virtuals:true}, toObject:{virtuals:true}
  }, 
);


productSchema.virtual("AiLog", {
  ref:"AiLog",
  localField:"_id",
  foreignField:"productId"
})


const Product = mongoose.model("Product", productSchema)
export default Product