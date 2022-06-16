import axios from "axios";
import { useState } from "react";

import { Article } from "../types/api/Article";

export const useAllArticles = () => {
  const [articles, setArticles] = useState<Array<Article>>([]);

  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      setArticles(res.data);
    })
    .catch();
};
