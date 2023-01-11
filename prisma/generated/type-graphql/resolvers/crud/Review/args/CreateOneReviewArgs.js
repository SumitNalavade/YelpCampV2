"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneReviewArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewCreateInput_1 = require("../../../inputs/ReviewCreateInput");
let CreateOneReviewArgs = class CreateOneReviewArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewCreateInput_1.ReviewCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewCreateInput_1.ReviewCreateInput)
], CreateOneReviewArgs.prototype, "data", void 0);
CreateOneReviewArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneReviewArgs);
exports.CreateOneReviewArgs = CreateOneReviewArgs;
