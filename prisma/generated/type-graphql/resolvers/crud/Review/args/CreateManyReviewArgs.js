"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyReviewArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewCreateManyInput_1 = require("../../../inputs/ReviewCreateManyInput");
let CreateManyReviewArgs = class CreateManyReviewArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewCreateManyInput_1.ReviewCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyReviewArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyReviewArgs.prototype, "skipDuplicates", void 0);
CreateManyReviewArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyReviewArgs);
exports.CreateManyReviewArgs = CreateManyReviewArgs;
