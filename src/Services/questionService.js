import axios from "axios";
import questionTransformer from "../Transformers/questionTransformer";

const questionService = {
  getQuestions: async (params) => {
    const res = await axios.get(`https://the-trivia-api.com/api/questions`, {
      params,
    });
    return questionTransformer(res.data);
  },
};

export default questionService;
