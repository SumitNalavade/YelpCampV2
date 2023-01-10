"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutCampgroundsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutCampgroundsInput_1 = require("../inputs/UserCreateWithoutCampgroundsInput");
const UserUpdateWithoutCampgroundsInput_1 = require("../inputs/UserUpdateWithoutCampgroundsInput");
let UserUpsertWithoutCampgroundsInput = class UserUpsertWithoutCampgroundsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutCampgroundsInput_1.UserUpdateWithoutCampgroundsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutCampgroundsInput_1.UserUpdateWithoutCampgroundsInput)
], UserUpsertWithoutCampgroundsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutCampgroundsInput_1.UserCreateWithoutCampgroundsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutCampgroundsInput_1.UserCreateWithoutCampgroundsInput)
], UserUpsertWithoutCampgroundsInput.prototype, "create", void 0);
UserUpsertWithoutCampgroundsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutCampgroundsInput", {
        isAbstract: true
    })
], UserUpsertWithoutCampgroundsInput);
exports.UserUpsertWithoutCampgroundsInput = UserUpsertWithoutCampgroundsInput;
