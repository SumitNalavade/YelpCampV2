"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutReviewNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutReviewInput_1 = require("../inputs/UserCreateOrConnectWithoutReviewInput");
const UserCreateWithoutReviewInput_1 = require("../inputs/UserCreateWithoutReviewInput");
const UserUpdateWithoutReviewInput_1 = require("../inputs/UserUpdateWithoutReviewInput");
const UserUpsertWithoutReviewInput_1 = require("../inputs/UserUpsertWithoutReviewInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutReviewNestedInput = class UserUpdateOneRequiredWithoutReviewNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutReviewInput_1.UserCreateWithoutReviewInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutReviewInput_1.UserCreateWithoutReviewInput)
], UserUpdateOneRequiredWithoutReviewNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReviewInput_1.UserCreateOrConnectWithoutReviewInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutReviewInput_1.UserCreateOrConnectWithoutReviewInput)
], UserUpdateOneRequiredWithoutReviewNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutReviewInput_1.UserUpsertWithoutReviewInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutReviewInput_1.UserUpsertWithoutReviewInput)
], UserUpdateOneRequiredWithoutReviewNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutReviewNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutReviewInput_1.UserUpdateWithoutReviewInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutReviewInput_1.UserUpdateWithoutReviewInput)
], UserUpdateOneRequiredWithoutReviewNestedInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutReviewNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutReviewNestedInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutReviewNestedInput);
exports.UserUpdateOneRequiredWithoutReviewNestedInput = UserUpdateOneRequiredWithoutReviewNestedInput;
