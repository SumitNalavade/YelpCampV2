"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutCampgroundsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutCampgroundsInput_1 = require("../inputs/UserCreateOrConnectWithoutCampgroundsInput");
const UserCreateWithoutCampgroundsInput_1 = require("../inputs/UserCreateWithoutCampgroundsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutCampgroundsInput = class UserCreateNestedOneWithoutCampgroundsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutCampgroundsInput_1.UserCreateWithoutCampgroundsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutCampgroundsInput_1.UserCreateWithoutCampgroundsInput)
], UserCreateNestedOneWithoutCampgroundsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCampgroundsInput_1.UserCreateOrConnectWithoutCampgroundsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutCampgroundsInput_1.UserCreateOrConnectWithoutCampgroundsInput)
], UserCreateNestedOneWithoutCampgroundsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutCampgroundsInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutCampgroundsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutCampgroundsInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutCampgroundsInput);
exports.UserCreateNestedOneWithoutCampgroundsInput = UserCreateNestedOneWithoutCampgroundsInput;
