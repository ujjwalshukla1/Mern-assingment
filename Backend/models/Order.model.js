import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    cartItems: [
      {
        id: Number,
        title: String,
        price: String,
        quantity: String,
      },
    ],
    shippingInfo: {
      fullName: String,
      address: String,
      city: String,
      zip: String,
    },
    totalAmount: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);
