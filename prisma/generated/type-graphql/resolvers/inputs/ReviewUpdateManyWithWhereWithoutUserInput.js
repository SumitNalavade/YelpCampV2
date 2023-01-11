"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewScalarWhereInput_1 = require("../inputs/ReviewScalarWhereInput");
const ReviewUpdateManyMutationInput_1 = require("../inputs/ReviewUpdateManyMutationInput");
let ReviewUpdateManyWithWhereWithoutUserInput = class ReviewUpdateManyWithWhereWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewScalarWhereInput_1.ReviewScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewScalarWhereInput_1.ReviewScalarWhereInput)
], ReviewUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUpdateManyMutationInput_1.ReviewUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewUpdateManyMutationInput_1.ReviewUpdateManyMutationInput)
], ReviewUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
ReviewUpdateManyWithWhereWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewUpdateManyWithWhereWithoutUserInput", {
        isAbstract: true
    })
], ReviewUpdateManyWithWhereWithoutUserInput);
exports.ReviewUpdateManyWithWhereWithoutUserInput = ReviewUpdateManyWithWhereWithoutUserInput;
