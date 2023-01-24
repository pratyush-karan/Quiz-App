import axios from "axios";
import categoryTransformer from "../Transformers/categoryTransformer";

const categoryService = {
  getCategories: async () => {
    const res = await axios.get(`https://the-trivia-api.com/api/categories`);
    return categoryTransformer(res.data);
  },
};

export default categoryService;
