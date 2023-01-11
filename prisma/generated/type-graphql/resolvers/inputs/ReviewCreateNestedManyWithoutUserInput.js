"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewCreateManyUserInputEnvelope_1 = require("../inputs/ReviewCreateManyUserInputEnvelope");
const ReviewCreateOrConnectWithoutUserInput_1 = require("../inputs/ReviewCreateOrConnectWithoutUserInput");
const ReviewCreateWithoutUserInput_1 = require("../inputs/ReviewCreateWithoutUserInput");
const ReviewWhereUniqueInput_1 = require("../inputs/ReviewWhereUniqueInput");
let ReviewCreateNestedManyWithoutUserInput = class ReviewCreateNestedManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewCreateWithoutUserInput_1.ReviewCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewCreateOrConnectWithoutUserInput_1.ReviewCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewCreateManyUserInputEnvelope_1.ReviewCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewCreateManyUserInputEnvelope_1.ReviewCreateManyUserInputEnvelope)
], ReviewCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereUniqueInput_1.ReviewWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
ReviewCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewCreateNestedManyWithoutUserInput", {
        isAbstract: true
    })
], ReviewCreateNestedManyWithoutUserInput);
exports.ReviewCreateNestedManyWithoutUserInput = ReviewCreateNestedManyWithoutUserInput;
