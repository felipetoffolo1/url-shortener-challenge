import { GoogleUrlKey } from "../constants/ApiKeys";

export const receiveUrl = (url, shortUrl) => {
  return {
    type: "RECEIVE_URL",
    url,
    shortUrl
  };
};

const api = "https://www.googleapis.com/urlshortener/v1/url";

const headers = {
  Accept: "application/json"
};

export const fetchUrl = url => (dispatch, getState) => {
  return fetch(`${api}?key=${GoogleUrlKey}&longUrl=${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ access_token: GoogleUrlKey, longUrl: url })
  })
    .then(res => res.json())
    .then(res => {
      dispatch(receiveUrl(res.longUrl, res.id));
    });
};
