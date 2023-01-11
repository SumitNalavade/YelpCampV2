"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundUpsertWithoutReviewInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundCreateWithoutReviewInput_1 = require("../inputs/CampgroundCreateWithoutReviewInput");
const CampgroundUpdateWithoutReviewInput_1 = require("../inputs/CampgroundUpdateWithoutReviewInput");
let CampgroundUpsertWithoutReviewInput = class CampgroundUpsertWithoutReviewInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundUpdateWithoutReviewInput_1.CampgroundUpdateWithoutReviewInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CampgroundUpdateWithoutReviewInput_1.CampgroundUpdateWithoutReviewInput)
], CampgroundUpsertWithoutReviewInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundCreateWithoutReviewInput_1.CampgroundCreateWithoutReviewInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CampgroundCreateWithoutReviewInput_1.CampgroundCreateWithoutReviewInput)
], CampgroundUpsertWithoutReviewInput.prototype, "create", void 0);
CampgroundUpsertWithoutReviewInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CampgroundUpsertWithoutReviewInput", {
        isAbstract: true
    })
], CampgroundUpsertWithoutReviewInput);
exports.CampgroundUpsertWithoutReviewInput = CampgroundUpsertWithoutReviewInput;
