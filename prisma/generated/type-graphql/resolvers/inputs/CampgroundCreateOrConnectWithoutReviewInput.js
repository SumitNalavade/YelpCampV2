"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundCreateOrConnectWithoutReviewInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundCreateWithoutReviewInput_1 = require("../inputs/CampgroundCreateWithoutReviewInput");
const CampgroundWhereUniqueInput_1 = require("../inputs/CampgroundWhereUniqueInput");
let CampgroundCreateOrConnectWithoutReviewInput = class CampgroundCreateOrConnectWithoutReviewInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundWhereUniqueInput_1.CampgroundWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CampgroundWhereUniqueInput_1.CampgroundWhereUniqueInput)
], CampgroundCreateOrConnectWithoutReviewInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundCreateWithoutReviewInput_1.CampgroundCreateWithoutReviewInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CampgroundCreateWithoutReviewInput_1.CampgroundCreateWithoutReviewInput)
], CampgroundCreateOrConnectWithoutReviewInput.prototype, "create", void 0);
CampgroundCreateOrConnectWithoutReviewInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CampgroundCreateOrConnectWithoutReviewInput", {
        isAbstract: true
    })
], CampgroundCreateOrConnectWithoutReviewInput);
exports.CampgroundCreateOrConnectWithoutReviewInput = CampgroundCreateOrConnectWithoutReviewInput;
