import api from "../axios/api";

const addRecipe = async (newRecipe: FormData) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  };

  console.log(newRecipe)
  await api.post(`/api/recipe`, newRecipe, config);
};

const getTestRecipes = async () => {
  const response = await api.get(`/api/recipe`);
  return response.data;
};

const getRecipes = async () => {
  const response = await api.get(`/api/recipe`);
  return response.data;
};

const getRecipe = async (recipeId) => {
  const response = await api.get(`/api/recipe/${recipeId}`);
  return response.data;
};

const updateRecipe = async (sendData) => {
  console.log(sendData)
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  };

  await api.put(`/api/recipe/${sendData.recipeId}`, sendData.formData, config);
};

const deleteRecipe = async (recipeId:string) => {
  const response = await api.delete(`/api/recipe/${recipeId}`);
  return response.data;
};

const getContents = async (recipeId) => {
  const response = await api.get(`/api/recipe/contents/${recipeId}`);
  return response.data;
};

const getComments = async (recipeId) => {
  const response = await api.get(`/api/recipe/comments/${recipeId}`);
  return response.data;
};

const addComment = async (sendData) => {
  const response = await api.post(`/api/recipe/comment`, sendData);
}

const getComment = async (recipeId) => {
  const response = await api.get(`/api/recipe/recipe/${recipeId}`);
  return response.data;
};

const deleteComment = async (commentId) => {
  const response = await api.delete(`/api/recipe/comment/${commentId}`);
  return response.data;
};

const likeRecipe = async (recipe_id) => {
  const response = await api.post(`/api/recipe/like`,recipe_id);
  return response.data;
};

export {getTestRecipes,addRecipe,updateRecipe,deleteRecipe,getRecipes,getRecipe,getComment,getComments,deleteComment,getContents,addComment,likeRecipe};