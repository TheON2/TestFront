import {PayloadAction, createSlice} from "@reduxjs/toolkit";

interface Comment {
    _id?: string;
    id?: string;
    recipeId?: string;
    content?: string;
    writerEmail?: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
}

interface Content {
    _id?: string;
    id?: string;
    recipeId?: string;
    content?: string;
    url?: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
}

export interface Recipe {
    _id?: string;
    id?: string;
    subtitle: string;
    category: string;
    ingredients: string;
    title: string;
    content: Content[] | null;
    tip: string;
    url: string;
    comment?: Comment[] | null;
    writerEmail?: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
}

export interface RecipesState {
    recipes: Recipe[] | null;
    recipe: Recipe | null;
    hasMoreRecipes: boolean;
    Loading: boolean;
    haveNew: boolean;
    modalOn: boolean;
    viewMode: number;
    viewMethod: number;
    page: number;
    haveWorking: number;
    haveDone: number;
}

const initialState: RecipesState = {
    recipes: [],
    recipe: {
        _id: "",
        id: "",
        subtitle: "",
        category: "",
        ingredients: "",
        title: "",
        content: [],
        comment: [],
        tip: "",
        url: "",
        writerEmail: "",
        createdAt: "",
        updatedAt: "",
        __v: 1,
    },
    hasMoreRecipes: true,
    Loading: false,
    haveNew: true,
    modalOn: false,
    viewMode: 1,
    viewMethod: 1,
    page: 1,
    haveWorking: 0,
    haveDone: 0,
};

const recipeSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {
        LOAD_RECIPES: (state: RecipesState, action: PayloadAction<Recipe[]>) => {
            state.recipes = action.payload;
        },
        LOAD_RECIPE: (state: RecipesState, action: PayloadAction<Recipe>) => {
            state.recipe = action.payload;
        },
        ADD_RECIPE: (state: RecipesState, action: PayloadAction<Recipe>) => {
            state.recipes?.push(action.payload);
        },
        UPDATE_RECIPE: (state: RecipesState, action: PayloadAction<Recipe>) => {
            if (state.recipes) {
                const index = state.recipes.findIndex(recipe => recipe.id === action.payload.id);
                if (index !== -1) {
                    state.recipes[index] = action.payload;
                }
            }
        },
        DELETE_RECIPE: (state: RecipesState, action: PayloadAction<string>) => {
            if (state.recipes) {
                state.recipes = state.recipes.filter(recipe => recipe.id !== action.payload);
            }
        },
        ADD_COMMENT: (state: RecipesState, action: PayloadAction<{ recipeId: string, comment: Comment }>) => {
            if (state.recipes) {
                const recipe = state.recipes.find(r => r.id === action.payload.recipeId);
                if (recipe) {
                    recipe.comment = recipe.comment ? [...recipe.comment, action.payload.comment] : [action.payload.comment];
                }
            }
        },
        DELETE_COMMENT: (state: RecipesState, action: PayloadAction<{ recipeId: string, commentId: string }>) => {
            if (state.recipes) {
                const recipe = state.recipes.find(r => r.id === action.payload.recipeId);
                if (recipe && recipe.comment) {
                    recipe.comment = recipe.comment.filter(comment => comment.id !== action.payload.commentId);
                }
            }
        }
    },
});

export const {
    LOAD_RECIPES,
    ADD_RECIPE,
    UPDATE_RECIPE,
    DELETE_RECIPE,
    ADD_COMMENT,
    DELETE_COMMENT
} = recipeSlice.actions;

export default recipeSlice.reducer;
