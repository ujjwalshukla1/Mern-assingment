import OrderModel from "../models/Order.model.js";

export const placeOrder = async (req, res) => {
  try {
    const { cartItems, shippingInfo, totalAmount } = req.body;
    const userId = req.user.id;

    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({ message: "No items in the cart" });
    }

    const order = new OrderModel({
      user: userId,
      cartItems,
      shippingInfo,
      totalAmount,
    });

    await order.save();
    res.status(201).json({ message: "Order placed successfully", order });
  } catch (error) {
    console.error("Order placement failed:", error);
    res.status(500).json({ message: "Server error" });
  }
};
