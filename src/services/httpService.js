import axios from "axios";
const baseUrl = "http://localhost:3000";

export async function addComment(comment) {
  console.log(comment);
  return await axios.post(baseUrl + "/comments", {
    product_id: comment.product_id,
    user_id: 2,
    user_name: comment.user_name,
    message: comment.message,
    score: comment.score,
  });
}

export async function getAllProducts() {
  return await axios.get(baseUrl + "/products/all");
}

export async function getAllCompenies() {
  return await axios.get(baseUrl + "/compenies");
}

export async function getCommentsByID(product_id) {
  var url = `${baseUrl}/comments/byProduct/${product_id}`;
  return await axios.get(url);
}

export async function signIn(email, password) {
  return await axios.post(baseUrl + "/auth", {
    email: email,
    password: password,
  });
}

export async function signUp(firstName, email, password, phone) {
  return await axios.post(baseUrl + "/users", {
    name: firstName,
    email: email,
    password: password,
    phone: phone,
  });
}

export async function getProductByID(product_id) {
  return await axios.get(`${baseUrl}/products/${product_id}`);
}

export default {
  addComment,
  getAllProducts,
  getAllCompenies,
  getCommentsByID,
  signIn,
  signUp,
  getProductByID,
};
