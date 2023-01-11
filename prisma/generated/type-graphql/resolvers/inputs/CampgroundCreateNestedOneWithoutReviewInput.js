"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundCreateNestedOneWithoutReviewInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundCreateOrConnectWithoutReviewInput_1 = require("../inputs/CampgroundCreateOrConnectWithoutReviewInput");
const CampgroundCreateWithoutReviewInput_1 = require("../inputs/CampgroundCreateWithoutReviewInput");
const CampgroundWhereUniqueInput_1 = require("../inputs/CampgroundWhereUniqueInput");
let CampgroundCreateNestedOneWithoutReviewInput = class CampgroundCreateNestedOneWithoutReviewInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundCreateWithoutReviewInput_1.CampgroundCreateWithoutReviewInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundCreateWithoutReviewInput_1.CampgroundCreateWithoutReviewInput)
], CampgroundCreateNestedOneWithoutReviewInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundCreateOrConnectWithoutReviewInput_1.CampgroundCreateOrConnectWithoutReviewInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundCreateOrConnectWithoutReviewInput_1.CampgroundCreateOrConnectWithoutReviewInput)
], CampgroundCreateNestedOneWithoutReviewInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundWhereUniqueInput_1.CampgroundWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundWhereUniqueInput_1.CampgroundWhereUniqueInput)
], CampgroundCreateNestedOneWithoutReviewInput.prototype, "connect", void 0);
CampgroundCreateNestedOneWithoutReviewInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CampgroundCreateNestedOneWithoutReviewInput", {
        isAbstract: true
    })
], CampgroundCreateNestedOneWithoutReviewInput);
exports.CampgroundCreateNestedOneWithoutReviewInput = CampgroundCreateNestedOneWithoutReviewInput;
