"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewCreateManyUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ReviewCreateManyUserInput = class ReviewCreateManyUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewCreateManyUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReviewCreateManyUserInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReviewCreateManyUserInput.prototype, "body", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReviewCreateManyUserInput.prototype, "campgroundId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReviewCreateManyUserInput.prototype, "createdAt", void 0);
ReviewCreateManyUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewCreateManyUserInput", {
        isAbstract: true
    })
], ReviewCreateManyUserInput);
exports.ReviewCreateManyUserInput = ReviewCreateManyUserInput;
