"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewCreateNestedManyWithoutCampgroundInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewCreateManyCampgroundInputEnvelope_1 = require("../inputs/ReviewCreateManyCampgroundInputEnvelope");
const ReviewCreateOrConnectWithoutCampgroundInput_1 = require("../inputs/ReviewCreateOrConnectWithoutCampgroundInput");
const ReviewCreateWithoutCampgroundInput_1 = require("../inputs/ReviewCreateWithoutCampgroundInput");
const ReviewWhereUniqueInput_1 = require("../inputs/ReviewWhereUniqueInput");
let ReviewCreateNestedManyWithoutCampgroundInput = class ReviewCreateNestedManyWithoutCampgroundInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewCreateWithoutCampgroundInput_1.ReviewCreateWithoutCampgroundInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewCreateNestedManyWithoutCampgroundInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewCreateOrConnectWithoutCampgroundInput_1.ReviewCreateOrConnectWithoutCampgroundInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewCreateNestedManyWithoutCampgroundInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewCreateManyCampgroundInputEnvelope_1.ReviewCreateManyCampgroundInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewCreateManyCampgroundInputEnvelope_1.ReviewCreateManyCampgroundInputEnvelope)
], ReviewCreateNestedManyWithoutCampgroundInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereUniqueInput_1.ReviewWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewCreateNestedManyWithoutCampgroundInput.prototype, "connect", void 0);
ReviewCreateNestedManyWithoutCampgroundInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewCreateNestedManyWithoutCampgroundInput", {
        isAbstract: true
    })
], ReviewCreateNestedManyWithoutCampgroundInput);
exports.ReviewCreateNestedManyWithoutCampgroundInput = ReviewCreateNestedManyWithoutCampgroundInput;
