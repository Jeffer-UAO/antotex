import { useState } from "react";

import { Categories } from "../api/category";




export function useCategory() {

  const categoryCtrl = new Categories()
  const [loadingCategory, setLoadingCategory] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState(null);

  const getCategories = async () => {

    try {
      setLoadingCategory(true);
      const response = await categoryCtrl.getAll();
      setLoadingCategory(false);
      setCategories(response);
    } catch (error) {
      setLoadingCategory(false);
      setError(error);
    }
  };

  return {
    error,
    loadingCategory,
    categories,
    getCategories,
  };
}
