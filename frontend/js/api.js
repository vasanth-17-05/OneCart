const API_URL = "http://localhost:5000/api";
// Fetch products from backend (fallback to local)
export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) throw new Error("API unavailable");
    return await response.json();
  } catch (error) {
    console.warn("Using local mock data instead of API:", error.message);
    return localProducts;
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`);
    if (!response.ok) throw new Error("API unavailable");
    return await response.json();
  } catch (error) {
    return localProducts.find((p) => p.id === parseInt(id));
  }
};

export const registerUser = async (username, password) =>
  (
    await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
  ).json();

export const loginUser = async (username, password) =>
  (
    await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
  ).json();

export const placeOrderAPI = async (order) =>
  (
    await fetch(`${API_URL}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    })
  ).json();
