"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewUpdateManyWithoutUserNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewCreateManyUserInputEnvelope_1 = require("../inputs/ReviewCreateManyUserInputEnvelope");
const ReviewCreateOrConnectWithoutUserInput_1 = require("../inputs/ReviewCreateOrConnectWithoutUserInput");
const ReviewCreateWithoutUserInput_1 = require("../inputs/ReviewCreateWithoutUserInput");
const ReviewScalarWhereInput_1 = require("../inputs/ReviewScalarWhereInput");
const ReviewUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/ReviewUpdateManyWithWhereWithoutUserInput");
const ReviewUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/ReviewUpdateWithWhereUniqueWithoutUserInput");
const ReviewUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/ReviewUpsertWithWhereUniqueWithoutUserInput");
const ReviewWhereUniqueInput_1 = require("../inputs/ReviewWhereUniqueInput");
let ReviewUpdateManyWithoutUserNestedInput = class ReviewUpdateManyWithoutUserNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewCreateWithoutUserInput_1.ReviewCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewCreateOrConnectWithoutUserInput_1.ReviewCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewUpsertWithWhereUniqueWithoutUserInput_1.ReviewUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewCreateManyUserInputEnvelope_1.ReviewCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewCreateManyUserInputEnvelope_1.ReviewCreateManyUserInputEnvelope)
], ReviewUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereUniqueInput_1.ReviewWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereUniqueInput_1.ReviewWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereUniqueInput_1.ReviewWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereUniqueInput_1.ReviewWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewUpdateWithWhereUniqueWithoutUserInput_1.ReviewUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewUpdateManyWithWhereWithoutUserInput_1.ReviewUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewScalarWhereInput_1.ReviewScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
ReviewUpdateManyWithoutUserNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewUpdateManyWithoutUserNestedInput", {
        isAbstract: true
    })
], ReviewUpdateManyWithoutUserNestedInput);
exports.ReviewUpdateManyWithoutUserNestedInput = ReviewUpdateManyWithoutUserNestedInput;
