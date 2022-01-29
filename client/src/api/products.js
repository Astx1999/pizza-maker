const axios = require("axios");

export async function getAllProducts() {
  try {
    const response = await axios.get("/api/products");
    return response.data;
  } catch (error) {
    return [];
  }
}

//
// export async function createProduct(data) {
//     const response = await axios.post(`/api/user`, {user: data});
//     return response.data;
// }
