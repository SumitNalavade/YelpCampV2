"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewUpdateManyWithWhereWithoutCampgroundInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewScalarWhereInput_1 = require("../inputs/ReviewScalarWhereInput");
const ReviewUpdateManyMutationInput_1 = require("../inputs/ReviewUpdateManyMutationInput");
let ReviewUpdateManyWithWhereWithoutCampgroundInput = class ReviewUpdateManyWithWhereWithoutCampgroundInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewScalarWhereInput_1.ReviewScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewScalarWhereInput_1.ReviewScalarWhereInput)
], ReviewUpdateManyWithWhereWithoutCampgroundInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUpdateManyMutationInput_1.ReviewUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewUpdateManyMutationInput_1.ReviewUpdateManyMutationInput)
], ReviewUpdateManyWithWhereWithoutCampgroundInput.prototype, "data", void 0);
ReviewUpdateManyWithWhereWithoutCampgroundInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewUpdateManyWithWhereWithoutCampgroundInput", {
        isAbstract: true
    })
], ReviewUpdateManyWithWhereWithoutCampgroundInput);
exports.ReviewUpdateManyWithWhereWithoutCampgroundInput = ReviewUpdateManyWithWhereWithoutCampgroundInput;
