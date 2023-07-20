import React, { useState } from "react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { Button, ButtonGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../type/local";
import { useQuery } from "react-query";
import { getRecipes } from "../../api/recipes";

const kinds = [
  "메인반찬",
  "국/탕",
  "찌개",
  "디저트",
  "면/만두",
  "밥/죽/떡",
  "퓨전",
  "김치/젓갈/장류",
  "양념/소스/잼",
  "양식",
  "샐러드",
  "스프",
  "빵",
  "과자",
  "차/음료/술",
  "기타",
];
const situations = [
  "일상",
  "초스피드",
  "손님접대",
  "술안주",
  "다이어트",
  "도시락",
  "영양식",
  "간식",
  "야식",
  "푸드스타일링",
  "해장",
  "명절",
  "이유식",
  "기타",
];
const methods = [
  "볶음",
  "끓이기",
  "부침",
  "조림",
  "무침",
  "비빔",
  "찜",
  "절임",
  "튀김",
  "삶기",
  "굽기",
  "데치기",
  "회",
  "기타",
];
const ingredients = [
  "소고기",
  "돼지고기",
  "닭고기",
  "육류",
  "채소류",
  "해물류",
  "달걀/유제품",
  "가공식품류",
  "쌀",
  "밀가루",
  "건어물류",
  "버섯류",
  "과일류",
  "콩/견과류",
  "곡류",
  "기타",
];

const RecipeList = () => {
  const [selectedKind, setSelectedKind] = useState(kinds[0]);
  const [selectedSituation, setSelectedSituation] = useState(situations[0]);
  const [selectedMethod, setSelectedMethod] = useState(methods[0]);
  const [selectedIngredient, setSelectedIngredient] = useState(ingredients[0]);

  const { data, isLoading, error } = useQuery("recipes", getRecipes);
  const recipes = data || [];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred: {error.message}</div>;

  const selectedCategories = [
    selectedKind,
    selectedSituation,
    selectedMethod,
    selectedIngredient,
  ];

  const filteredRecipes = recipes.filter((recipe) => {
    const recipeCategories = recipe.category.split("^.^");
    return selectedCategories.some((selectedCategory) => {
      return (
        selectedCategory !== null && recipeCategories.includes(selectedCategory)
      );
    });
  });

  return (
    <div>
      <h2>카테고리 선택</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <ButtonGroup>
          {kinds.map((kind) => (
            <Button
              key={kind}
              active={selectedKind === kind}
              onClick={() =>
                setSelectedKind(kind === selectedKind ? null : kind)
              }
            >
              {kind}
            </Button>
          ))}
        </ButtonGroup>
        <ButtonGroup>
          {situations.map((situation) => (
            <Button
              key={situation}
              active={selectedSituation === situation}
              onClick={() =>
                setSelectedSituation(
                  situation === selectedSituation ? null : situation
                )
              }
            >
              {situation}
            </Button>
          ))}
        </ButtonGroup>
        <ButtonGroup>
          {methods.map((method) => (
            <Button
              key={method}
              active={selectedMethod === method}
              onClick={() =>
                setSelectedMethod(method === selectedMethod ? null : method)
              }
            >
              {method}
            </Button>
          ))}
        </ButtonGroup>
        <ButtonGroup>
          {ingredients.map((ingredient) => (
            <Button
              key={ingredient}
              active={selectedIngredient === ingredient}
              onClick={() =>
                setSelectedIngredient(
                  ingredient === selectedIngredient ? null : ingredient
                )
              }
            >
              {ingredient}
            </Button>
          ))}
        </ButtonGroup>
      </div>

      <h2>레시피 목록</h2>
      {filteredRecipes.map((recipe) => (
        <RecipeCard
          id={recipe.id}
          key={recipe.title}
          title={recipe.title}
          subtitle={recipe.subtitle}
          imageUrl={recipe.url}
          nickname={recipe.user_id}
        />
      ))}
    </div>
  );
};

export default RecipeList;
