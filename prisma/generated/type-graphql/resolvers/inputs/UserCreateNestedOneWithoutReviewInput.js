"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutReviewInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutReviewInput_1 = require("../inputs/UserCreateOrConnectWithoutReviewInput");
const UserCreateWithoutReviewInput_1 = require("../inputs/UserCreateWithoutReviewInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutReviewInput = class UserCreateNestedOneWithoutReviewInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutReviewInput_1.UserCreateWithoutReviewInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutReviewInput_1.UserCreateWithoutReviewInput)
], UserCreateNestedOneWithoutReviewInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReviewInput_1.UserCreateOrConnectWithoutReviewInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutReviewInput_1.UserCreateOrConnectWithoutReviewInput)
], UserCreateNestedOneWithoutReviewInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutReviewInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutReviewInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutReviewInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutReviewInput);
exports.UserCreateNestedOneWithoutReviewInput = UserCreateNestedOneWithoutReviewInput;
