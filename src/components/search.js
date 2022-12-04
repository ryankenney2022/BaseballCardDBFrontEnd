import { response } from "express";
import React from "react";

function search(props) {
  const { name } = props;
  var url = "https://en.wikipedia.org/w/api.php";

  var params = {
    action: "query",
    list: "search",
    srsearch: { name },
    srlimit: 1,
    format: "json",
  };

  url = url + "?origin=*";
  Object.keys(params).forEach(function (key) {
    url += "&" + key + "=" + params[key];
  });

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      if (response.query.search[0].title === { name }) {
        console.log(`Your search of ${name} exists on Wikipedia`);
      }
    })
    .catch(function (error) {
      console.log(error);
    });

  return <p>{response.title}</p>;
}

export default search;
