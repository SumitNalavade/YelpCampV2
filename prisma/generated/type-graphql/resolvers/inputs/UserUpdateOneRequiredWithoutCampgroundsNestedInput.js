"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutCampgroundsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutCampgroundsInput_1 = require("../inputs/UserCreateOrConnectWithoutCampgroundsInput");
const UserCreateWithoutCampgroundsInput_1 = require("../inputs/UserCreateWithoutCampgroundsInput");
const UserUpdateWithoutCampgroundsInput_1 = require("../inputs/UserUpdateWithoutCampgroundsInput");
const UserUpsertWithoutCampgroundsInput_1 = require("../inputs/UserUpsertWithoutCampgroundsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutCampgroundsNestedInput = class UserUpdateOneRequiredWithoutCampgroundsNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutCampgroundsInput_1.UserCreateWithoutCampgroundsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutCampgroundsInput_1.UserCreateWithoutCampgroundsInput)
], UserUpdateOneRequiredWithoutCampgroundsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCampgroundsInput_1.UserCreateOrConnectWithoutCampgroundsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutCampgroundsInput_1.UserCreateOrConnectWithoutCampgroundsInput)
], UserUpdateOneRequiredWithoutCampgroundsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutCampgroundsInput_1.UserUpsertWithoutCampgroundsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutCampgroundsInput_1.UserUpsertWithoutCampgroundsInput)
], UserUpdateOneRequiredWithoutCampgroundsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutCampgroundsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutCampgroundsInput_1.UserUpdateWithoutCampgroundsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutCampgroundsInput_1.UserUpdateWithoutCampgroundsInput)
], UserUpdateOneRequiredWithoutCampgroundsNestedInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutCampgroundsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutCampgroundsNestedInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutCampgroundsNestedInput);
exports.UserUpdateOneRequiredWithoutCampgroundsNestedInput = UserUpdateOneRequiredWithoutCampgroundsNestedInput;
