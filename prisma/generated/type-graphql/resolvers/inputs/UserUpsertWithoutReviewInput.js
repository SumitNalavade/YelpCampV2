"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutReviewInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutReviewInput_1 = require("../inputs/UserCreateWithoutReviewInput");
const UserUpdateWithoutReviewInput_1 = require("../inputs/UserUpdateWithoutReviewInput");
let UserUpsertWithoutReviewInput = class UserUpsertWithoutReviewInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutReviewInput_1.UserUpdateWithoutReviewInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutReviewInput_1.UserUpdateWithoutReviewInput)
], UserUpsertWithoutReviewInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutReviewInput_1.UserCreateWithoutReviewInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutReviewInput_1.UserCreateWithoutReviewInput)
], UserUpsertWithoutReviewInput.prototype, "create", void 0);
UserUpsertWithoutReviewInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutReviewInput", {
        isAbstract: true
    })
], UserUpsertWithoutReviewInput);
exports.UserUpsertWithoutReviewInput = UserUpsertWithoutReviewInput;
