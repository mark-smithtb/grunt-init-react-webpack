import request from "superagent";
require("superagent-auth-bearer")(request);

import ApiConstants from "../constants/ApiConstants";

function getUrlForPath(path) {
  return `${ApiConstants.API_URL}${path}`;
}

export var Api = {
  get(path, authToken = "") {
    return new Promise(function(resolve, reject) {
      request
        .get(getUrlForPath(path))
        .authBearer(authToken)
        .set("Accept", "application/json")
        .end(function(error, response) {
          if (error) {
            reject(response.body.errors);
          } else {
            resolve(response.body);
          }
        });
    });
  },

  post(path, data, authErrorMessage = null, authToken = null) {
    return new Promise((resolve, reject) => {
      request
        .post(getUrlForPath(path))
        .type("application/json")
        .send(data)
        .end(function(error, response) {
          if (error) {
            reject(response.body.errors);
          } else {
            resolve(response.body);
          }
        });
    });
  },

  put(path, data, authToken = null) {
    return new Promise(function(resolve, reject) {
      request
        .put(getUrlForPath(path))
        .authBearer(authToken)
        .type("application/json")
        .send(data)
        .end(function(error, response) {
          if (error) {
            reject(response.body.errors);
          } else {
            resolve(response.body);
          }
        });
    });
  },

  delete(path, authToken = null) {
    return new Promise(function(resolve, reject) {
      request
        .delete(getUrlForPath(path))
        .authBearer(authToken)
        .type("application/json")
        .end(function(error, response) {
          if (error) {
            reject(response.body.errors);
          } else {
            resolve(response.body);
          }
        });
    });
  }
};
