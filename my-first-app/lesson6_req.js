"use strict";
exports.__esModule = true;
var user_service_1 = require("./user-service");
user_service_1.userService.getAll().then(function (response) { return response.data; }).then(function (users) {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        console.log(user.name);
    }
});
