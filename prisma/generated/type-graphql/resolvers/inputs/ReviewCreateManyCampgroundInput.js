"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewCreateManyCampgroundInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ReviewCreateManyCampgroundInput = class ReviewCreateManyCampgroundInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewCreateManyCampgroundInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReviewCreateManyCampgroundInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReviewCreateManyCampgroundInput.prototype, "body", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReviewCreateManyCampgroundInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReviewCreateManyCampgroundInput.prototype, "createdAt", void 0);
ReviewCreateManyCampgroundInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewCreateManyCampgroundInput", {
        isAbstract: true
    })
], ReviewCreateManyCampgroundInput);
exports.ReviewCreateManyCampgroundInput = ReviewCreateManyCampgroundInput;
