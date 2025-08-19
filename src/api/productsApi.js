import axios from 'axios';

export async function getAllProducts() {
  try {
    const res = await axios.get('https://fakestoreapi.com/products');
    return res.data;
  } catch {
    return null;
  }
}

export async function getSingleProduct(id) {
  try {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return res.data;
  } catch {
    return null;
  }
}

export async function getAllCategories() {
  try {
    const res = await axios.get('https://fakestoreapi.in/api/products/category');
    return res.data;
  } catch {
    return null;
  }
}

export async function getCategoryWiseProducts(type) {
  try {
    const res = await axios.get(`https://fakestoreapi.in/api/products/category?type=${type}`);
    return res.data;
  } catch {
    return null;
  }
}
