import { createSlice } from '@reduxjs/toolkit';

export const articleSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [
      { title: 'Bananen' }
    ]
  },
  reducers: {
    addArticle: (state, action) => {
      const article = {
        title: action.payload.title
      };
      state.articles.push(article);
    },
  },
});


export const { addArticle } = articleSlice.actions;

export default articleSlice.reducer;