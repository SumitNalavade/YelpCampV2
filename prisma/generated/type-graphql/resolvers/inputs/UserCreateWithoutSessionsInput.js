"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutSessionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateNestedManyWithoutUserInput_1 = require("../inputs/AccountCreateNestedManyWithoutUserInput");
const CampgroundCreateNestedManyWithoutUserInput_1 = require("../inputs/CampgroundCreateNestedManyWithoutUserInput");
const ReviewCreateNestedManyWithoutUserInput_1 = require("../inputs/ReviewCreateNestedManyWithoutUserInput");
let UserCreateWithoutSessionsInput = class UserCreateWithoutSessionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutSessionsInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput)
], UserCreateWithoutSessionsInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundCreateNestedManyWithoutUserInput_1.CampgroundCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundCreateNestedManyWithoutUserInput_1.CampgroundCreateNestedManyWithoutUserInput)
], UserCreateWithoutSessionsInput.prototype, "Campgrounds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewCreateNestedManyWithoutUserInput_1.ReviewCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewCreateNestedManyWithoutUserInput_1.ReviewCreateNestedManyWithoutUserInput)
], UserCreateWithoutSessionsInput.prototype, "Review", void 0);
UserCreateWithoutSessionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutSessionsInput", {
        isAbstract: true
    })
], UserCreateWithoutSessionsInput);
exports.UserCreateWithoutSessionsInput = UserCreateWithoutSessionsInput;
