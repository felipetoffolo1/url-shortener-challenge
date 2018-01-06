const url = (state = { currentLongUrl: "", currentShortUrl: "" }, action) => {
  switch (action.type) {
    case "RECEIVE_URL":
      console.log(state);
      return Object.assign({}, state, {
        currentShortUrl: action.shortUrl,
        currentLongUrl: action.url
      });
    default:
      return state;
  }
};

export default url;
