const initialState = {
  articles: [
  	{ title: 'Bananen' }
  ]
};

function rootReducer(state = initialState, action: any) {
  if (action.type === "ADD_ARTICLE") {
    return {
      articles: state.articles.concat(action.payload)
    };
  }

  return state;
}

export default rootReducer;