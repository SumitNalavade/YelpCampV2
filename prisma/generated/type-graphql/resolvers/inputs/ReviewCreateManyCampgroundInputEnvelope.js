"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewCreateManyCampgroundInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewCreateManyCampgroundInput_1 = require("../inputs/ReviewCreateManyCampgroundInput");
let ReviewCreateManyCampgroundInputEnvelope = class ReviewCreateManyCampgroundInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewCreateManyCampgroundInput_1.ReviewCreateManyCampgroundInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewCreateManyCampgroundInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReviewCreateManyCampgroundInputEnvelope.prototype, "skipDuplicates", void 0);
ReviewCreateManyCampgroundInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewCreateManyCampgroundInputEnvelope", {
        isAbstract: true
    })
], ReviewCreateManyCampgroundInputEnvelope);
exports.ReviewCreateManyCampgroundInputEnvelope = ReviewCreateManyCampgroundInputEnvelope;
