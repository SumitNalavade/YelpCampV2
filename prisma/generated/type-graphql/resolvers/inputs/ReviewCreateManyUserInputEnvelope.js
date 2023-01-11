"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewCreateManyUserInput_1 = require("../inputs/ReviewCreateManyUserInput");
let ReviewCreateManyUserInputEnvelope = class ReviewCreateManyUserInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewCreateManyUserInput_1.ReviewCreateManyUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewCreateManyUserInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReviewCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
ReviewCreateManyUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewCreateManyUserInputEnvelope", {
        isAbstract: true
    })
], ReviewCreateManyUserInputEnvelope);
exports.ReviewCreateManyUserInputEnvelope = ReviewCreateManyUserInputEnvelope;
