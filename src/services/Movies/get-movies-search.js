import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";
import { useQuery } from "@tanstack/react-query";

const fetchDataMoviesSearch = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http
    .get(_key, { params: _params })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      if (err.response.status === 401) {
        window.location.href = "/";
      }
    });
  return data.data;
};

const useDataMoviesSearchQuery = (options) => {
  return useQuery([API_ENDPOINT.SEARCH_MOVIE, options], fetchDataMoviesSearch);
};

export { fetchDataMoviesSearch, useDataMoviesSearchQuery };
