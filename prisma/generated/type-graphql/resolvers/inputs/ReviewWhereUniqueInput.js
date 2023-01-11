"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ReviewWhereUniqueInput = class ReviewWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewWhereUniqueInput.prototype, "id", void 0);
ReviewWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewWhereUniqueInput", {
        isAbstract: true
    })
], ReviewWhereUniqueInput);
exports.ReviewWhereUniqueInput = ReviewWhereUniqueInput;
