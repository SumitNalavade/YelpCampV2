"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewUpdateWithoutUserInput_1 = require("../inputs/ReviewUpdateWithoutUserInput");
const ReviewWhereUniqueInput_1 = require("../inputs/ReviewWhereUniqueInput");
let ReviewUpdateWithWhereUniqueWithoutUserInput = class ReviewUpdateWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewWhereUniqueInput_1.ReviewWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewWhereUniqueInput_1.ReviewWhereUniqueInput)
], ReviewUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUpdateWithoutUserInput_1.ReviewUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewUpdateWithoutUserInput_1.ReviewUpdateWithoutUserInput)
], ReviewUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
ReviewUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewUpdateWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], ReviewUpdateWithWhereUniqueWithoutUserInput);
exports.ReviewUpdateWithWhereUniqueWithoutUserInput = ReviewUpdateWithWhereUniqueWithoutUserInput;
