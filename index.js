"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var apiUrl = "https://jsonplaceholder.typicode.com/todos/1";
// Make the API call using Axios
axios_1.default.get(apiUrl).then(function (response) {
    console.log("Todo:", response.data);
});
