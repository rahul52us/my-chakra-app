import axios from "axios";
import { action, makeObservable, observable } from "mobx";

class QuizStore {
  categories: any = [];

  constructor() {
    makeObservable(this, {
      categories: observable,
      getCategories: action,
    });
  }

  getCategories = async () => {
    try {
      const { data } = await axios.get("quiz/auth/categories");
      this.categories = data.data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err?.message);
    }
  };
}

export default QuizStore;