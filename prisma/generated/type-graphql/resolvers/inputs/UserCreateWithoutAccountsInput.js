"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutAccountsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundCreateNestedManyWithoutUserInput_1 = require("../inputs/CampgroundCreateNestedManyWithoutUserInput");
const ReviewCreateNestedManyWithoutUserInput_1 = require("../inputs/ReviewCreateNestedManyWithoutUserInput");
const SessionCreateNestedManyWithoutUserInput_1 = require("../inputs/SessionCreateNestedManyWithoutUserInput");
let UserCreateWithoutAccountsInput = class UserCreateWithoutAccountsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutAccountsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutAccountsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutAccountsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutAccountsInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutAccountsInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput)
], UserCreateWithoutAccountsInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundCreateNestedManyWithoutUserInput_1.CampgroundCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundCreateNestedManyWithoutUserInput_1.CampgroundCreateNestedManyWithoutUserInput)
], UserCreateWithoutAccountsInput.prototype, "Campgrounds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewCreateNestedManyWithoutUserInput_1.ReviewCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewCreateNestedManyWithoutUserInput_1.ReviewCreateNestedManyWithoutUserInput)
], UserCreateWithoutAccountsInput.prototype, "Review", void 0);
UserCreateWithoutAccountsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutAccountsInput", {
        isAbstract: true
    })
], UserCreateWithoutAccountsInput);
exports.UserCreateWithoutAccountsInput = UserCreateWithoutAccountsInput;
