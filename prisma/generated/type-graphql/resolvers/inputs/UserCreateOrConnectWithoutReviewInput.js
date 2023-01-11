"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutReviewInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutReviewInput_1 = require("../inputs/UserCreateWithoutReviewInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutReviewInput = class UserCreateOrConnectWithoutReviewInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutReviewInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutReviewInput_1.UserCreateWithoutReviewInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutReviewInput_1.UserCreateWithoutReviewInput)
], UserCreateOrConnectWithoutReviewInput.prototype, "create", void 0);
UserCreateOrConnectWithoutReviewInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutReviewInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutReviewInput);
exports.UserCreateOrConnectWithoutReviewInput = UserCreateOrConnectWithoutReviewInput;
