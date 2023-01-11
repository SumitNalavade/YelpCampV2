"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewWhereInput_1 = require("../inputs/ReviewWhereInput");
let ReviewListRelationFilter = class ReviewListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewWhereInput_1.ReviewWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewWhereInput_1.ReviewWhereInput)
], ReviewListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewWhereInput_1.ReviewWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewWhereInput_1.ReviewWhereInput)
], ReviewListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewWhereInput_1.ReviewWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewWhereInput_1.ReviewWhereInput)
], ReviewListRelationFilter.prototype, "none", void 0);
ReviewListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewListRelationFilter", {
        isAbstract: true
    })
], ReviewListRelationFilter);
exports.ReviewListRelationFilter = ReviewListRelationFilter;
