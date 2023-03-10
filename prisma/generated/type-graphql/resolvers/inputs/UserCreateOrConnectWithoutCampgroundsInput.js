"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutCampgroundsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutCampgroundsInput_1 = require("../inputs/UserCreateWithoutCampgroundsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutCampgroundsInput = class UserCreateOrConnectWithoutCampgroundsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutCampgroundsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutCampgroundsInput_1.UserCreateWithoutCampgroundsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutCampgroundsInput_1.UserCreateWithoutCampgroundsInput)
], UserCreateOrConnectWithoutCampgroundsInput.prototype, "create", void 0);
UserCreateOrConnectWithoutCampgroundsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutCampgroundsInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutCampgroundsInput);
exports.UserCreateOrConnectWithoutCampgroundsInput = UserCreateOrConnectWithoutCampgroundsInput;
