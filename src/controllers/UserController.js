"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tsoa_1 = require("tsoa");
let UserController = class UserController extends tsoa_1.Controller {
    async getAll() {
        let users = [];
        let user = {
            email: "teste",
            id: 1
        };
        users.push(user);
        return users;
    }
};
__decorate([
    (0, tsoa_1.Get)()
], UserController.prototype, "getAll", null);
UserController = __decorate([
    (0, tsoa_1.Route)("api/users")
], UserController);
exports.UserController = UserController;
