//  The cart controller serves the cart database. Following functions are defined here. 


import db from '../../data/database.js';


async function getCart (req, res)  {
  try {
    const cartItems = await db.cart.find({});
    const totalSum = await calculateTotalSum();

    res.json({ cartItems, totalSum });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cart items' });
  }
};

async function addToCart (req, res) {
  try {

    const { name, price, quantity = 1 } = req.body;
      // Calculate totalPrice based on price and quantity
      const totalPrice = price * quantity;

    // Prepare new item with totalPrice
    const newItem = { name, price, quantity, totalPrice };

     // Insert new item into the cart database
    const insertedItem = await db.cart.insert(newItem);

    // Uppdatera totalSum
    await updateTotalSum();

    res.status(201).json(insertedItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
};

async function updateItemQuantity(req, res) {
  const { id } = req.params;
  const { quantity } = req.body;

  try {
    const item = await db.cart.findOne({ _id: id });
    const updatedTotalPrice = item.price * quantity;

    await db.cart.update({ _id: id }, { $set: { quantity, totalPrice: updatedTotalPrice } });

    const cartItems = await db.cart.find({});
    const totalSum = await calculateTotalSum();

    res.status(200).json({ message: 'Quantity updated', cartItems, totalSum });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update item quantity' });
  }
}





// Funktion för att uppdatera totalSum i databasen
async function updateTotalSum ()  {
  const cartItems = await db.cart.find({});
  const totalSum = cartItems.reduce((sum, item) => sum + item.totalPrice , 0);

  return totalSum;
};

// Funktion för att beräkna totalSum
async function calculateTotalSum ()  {
  const cartItems = await db.cart.find({});
  return cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
};

// Define the updateCartItem function
async function updateCartItem(req, res) {
  const { id } = req.params;
  const { quantity } = req.body;

  try {
    const item = await db.cart.findOne({ _id: id });
    const updatedTotalPrice = item.price * quantity;

    await db.cart.update({ _id: id }, { $set: { quantity, totalPrice: updatedTotalPrice } });

    const cartItems = await db.cart.find({});
    const totalSum = await calculateTotalSum();

    res.status(200).json({ message: 'Quantity updated', cartItems, totalSum });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update item quantity' });
  }
}

export { getCart, addToCart, updateItemQuantity, updateCartItem, updateTotalSum }