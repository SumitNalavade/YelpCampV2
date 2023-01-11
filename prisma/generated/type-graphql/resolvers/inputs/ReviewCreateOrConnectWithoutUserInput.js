"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewCreateWithoutUserInput_1 = require("../inputs/ReviewCreateWithoutUserInput");
const ReviewWhereUniqueInput_1 = require("../inputs/ReviewWhereUniqueInput");
let ReviewCreateOrConnectWithoutUserInput = class ReviewCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewWhereUniqueInput_1.ReviewWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewWhereUniqueInput_1.ReviewWhereUniqueInput)
], ReviewCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewCreateWithoutUserInput_1.ReviewCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewCreateWithoutUserInput_1.ReviewCreateWithoutUserInput)
], ReviewCreateOrConnectWithoutUserInput.prototype, "create", void 0);
ReviewCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], ReviewCreateOrConnectWithoutUserInput);
exports.ReviewCreateOrConnectWithoutUserInput = ReviewCreateOrConnectWithoutUserInput;
