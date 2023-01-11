"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewCreateWithoutUserInput_1 = require("../inputs/ReviewCreateWithoutUserInput");
const ReviewUpdateWithoutUserInput_1 = require("../inputs/ReviewUpdateWithoutUserInput");
const ReviewWhereUniqueInput_1 = require("../inputs/ReviewWhereUniqueInput");
let ReviewUpsertWithWhereUniqueWithoutUserInput = class ReviewUpsertWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewWhereUniqueInput_1.ReviewWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewWhereUniqueInput_1.ReviewWhereUniqueInput)
], ReviewUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUpdateWithoutUserInput_1.ReviewUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewUpdateWithoutUserInput_1.ReviewUpdateWithoutUserInput)
], ReviewUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewCreateWithoutUserInput_1.ReviewCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewCreateWithoutUserInput_1.ReviewCreateWithoutUserInput)
], ReviewUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
ReviewUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewUpsertWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], ReviewUpsertWithWhereUniqueWithoutUserInput);
exports.ReviewUpsertWithWhereUniqueWithoutUserInput = ReviewUpsertWithWhereUniqueWithoutUserInput;
