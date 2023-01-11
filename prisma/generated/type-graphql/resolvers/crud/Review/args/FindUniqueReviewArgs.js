"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueReviewArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewWhereUniqueInput_1 = require("../../../inputs/ReviewWhereUniqueInput");
let FindUniqueReviewArgs = class FindUniqueReviewArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewWhereUniqueInput_1.ReviewWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewWhereUniqueInput_1.ReviewWhereUniqueInput)
], FindUniqueReviewArgs.prototype, "where", void 0);
FindUniqueReviewArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueReviewArgs);
exports.FindUniqueReviewArgs = FindUniqueReviewArgs;
