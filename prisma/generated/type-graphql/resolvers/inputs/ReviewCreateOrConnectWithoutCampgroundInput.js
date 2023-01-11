"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewCreateOrConnectWithoutCampgroundInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewCreateWithoutCampgroundInput_1 = require("../inputs/ReviewCreateWithoutCampgroundInput");
const ReviewWhereUniqueInput_1 = require("../inputs/ReviewWhereUniqueInput");
let ReviewCreateOrConnectWithoutCampgroundInput = class ReviewCreateOrConnectWithoutCampgroundInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewWhereUniqueInput_1.ReviewWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewWhereUniqueInput_1.ReviewWhereUniqueInput)
], ReviewCreateOrConnectWithoutCampgroundInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewCreateWithoutCampgroundInput_1.ReviewCreateWithoutCampgroundInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewCreateWithoutCampgroundInput_1.ReviewCreateWithoutCampgroundInput)
], ReviewCreateOrConnectWithoutCampgroundInput.prototype, "create", void 0);
ReviewCreateOrConnectWithoutCampgroundInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewCreateOrConnectWithoutCampgroundInput", {
        isAbstract: true
    })
], ReviewCreateOrConnectWithoutCampgroundInput);
exports.ReviewCreateOrConnectWithoutCampgroundInput = ReviewCreateOrConnectWithoutCampgroundInput;
