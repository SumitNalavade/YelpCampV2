"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewUpdateManyWithoutCampgroundNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewCreateManyCampgroundInputEnvelope_1 = require("../inputs/ReviewCreateManyCampgroundInputEnvelope");
const ReviewCreateOrConnectWithoutCampgroundInput_1 = require("../inputs/ReviewCreateOrConnectWithoutCampgroundInput");
const ReviewCreateWithoutCampgroundInput_1 = require("../inputs/ReviewCreateWithoutCampgroundInput");
const ReviewScalarWhereInput_1 = require("../inputs/ReviewScalarWhereInput");
const ReviewUpdateManyWithWhereWithoutCampgroundInput_1 = require("../inputs/ReviewUpdateManyWithWhereWithoutCampgroundInput");
const ReviewUpdateWithWhereUniqueWithoutCampgroundInput_1 = require("../inputs/ReviewUpdateWithWhereUniqueWithoutCampgroundInput");
const ReviewUpsertWithWhereUniqueWithoutCampgroundInput_1 = require("../inputs/ReviewUpsertWithWhereUniqueWithoutCampgroundInput");
const ReviewWhereUniqueInput_1 = require("../inputs/ReviewWhereUniqueInput");
let ReviewUpdateManyWithoutCampgroundNestedInput = class ReviewUpdateManyWithoutCampgroundNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewCreateWithoutCampgroundInput_1.ReviewCreateWithoutCampgroundInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUpdateManyWithoutCampgroundNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewCreateOrConnectWithoutCampgroundInput_1.ReviewCreateOrConnectWithoutCampgroundInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUpdateManyWithoutCampgroundNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewUpsertWithWhereUniqueWithoutCampgroundInput_1.ReviewUpsertWithWhereUniqueWithoutCampgroundInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUpdateManyWithoutCampgroundNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewCreateManyCampgroundInputEnvelope_1.ReviewCreateManyCampgroundInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewCreateManyCampgroundInputEnvelope_1.ReviewCreateManyCampgroundInputEnvelope)
], ReviewUpdateManyWithoutCampgroundNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereUniqueInput_1.ReviewWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUpdateManyWithoutCampgroundNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereUniqueInput_1.ReviewWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUpdateManyWithoutCampgroundNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereUniqueInput_1.ReviewWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUpdateManyWithoutCampgroundNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereUniqueInput_1.ReviewWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUpdateManyWithoutCampgroundNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewUpdateWithWhereUniqueWithoutCampgroundInput_1.ReviewUpdateWithWhereUniqueWithoutCampgroundInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUpdateManyWithoutCampgroundNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewUpdateManyWithWhereWithoutCampgroundInput_1.ReviewUpdateManyWithWhereWithoutCampgroundInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUpdateManyWithoutCampgroundNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewScalarWhereInput_1.ReviewScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUpdateManyWithoutCampgroundNestedInput.prototype, "deleteMany", void 0);
ReviewUpdateManyWithoutCampgroundNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewUpdateManyWithoutCampgroundNestedInput", {
        isAbstract: true
    })
], ReviewUpdateManyWithoutCampgroundNestedInput);
exports.ReviewUpdateManyWithoutCampgroundNestedInput = ReviewUpdateManyWithoutCampgroundNestedInput;
