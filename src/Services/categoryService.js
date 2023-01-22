import axios from "axios";

const categoryService = {
  getCategories: async () => {
    const res = axios.get(`https://the-trivia-api.com/api/categories`);
    return res;
  },
};

export default categoryService;
