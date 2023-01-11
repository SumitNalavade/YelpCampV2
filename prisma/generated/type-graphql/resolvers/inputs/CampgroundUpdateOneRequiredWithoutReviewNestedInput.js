"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundUpdateOneRequiredWithoutReviewNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundCreateOrConnectWithoutReviewInput_1 = require("../inputs/CampgroundCreateOrConnectWithoutReviewInput");
const CampgroundCreateWithoutReviewInput_1 = require("../inputs/CampgroundCreateWithoutReviewInput");
const CampgroundUpdateWithoutReviewInput_1 = require("../inputs/CampgroundUpdateWithoutReviewInput");
const CampgroundUpsertWithoutReviewInput_1 = require("../inputs/CampgroundUpsertWithoutReviewInput");
const CampgroundWhereUniqueInput_1 = require("../inputs/CampgroundWhereUniqueInput");
let CampgroundUpdateOneRequiredWithoutReviewNestedInput = class CampgroundUpdateOneRequiredWithoutReviewNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundCreateWithoutReviewInput_1.CampgroundCreateWithoutReviewInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundCreateWithoutReviewInput_1.CampgroundCreateWithoutReviewInput)
], CampgroundUpdateOneRequiredWithoutReviewNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundCreateOrConnectWithoutReviewInput_1.CampgroundCreateOrConnectWithoutReviewInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundCreateOrConnectWithoutReviewInput_1.CampgroundCreateOrConnectWithoutReviewInput)
], CampgroundUpdateOneRequiredWithoutReviewNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundUpsertWithoutReviewInput_1.CampgroundUpsertWithoutReviewInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundUpsertWithoutReviewInput_1.CampgroundUpsertWithoutReviewInput)
], CampgroundUpdateOneRequiredWithoutReviewNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundWhereUniqueInput_1.CampgroundWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundWhereUniqueInput_1.CampgroundWhereUniqueInput)
], CampgroundUpdateOneRequiredWithoutReviewNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundUpdateWithoutReviewInput_1.CampgroundUpdateWithoutReviewInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundUpdateWithoutReviewInput_1.CampgroundUpdateWithoutReviewInput)
], CampgroundUpdateOneRequiredWithoutReviewNestedInput.prototype, "update", void 0);
CampgroundUpdateOneRequiredWithoutReviewNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CampgroundUpdateOneRequiredWithoutReviewNestedInput", {
        isAbstract: true
    })
], CampgroundUpdateOneRequiredWithoutReviewNestedInput);
exports.CampgroundUpdateOneRequiredWithoutReviewNestedInput = CampgroundUpdateOneRequiredWithoutReviewNestedInput;
