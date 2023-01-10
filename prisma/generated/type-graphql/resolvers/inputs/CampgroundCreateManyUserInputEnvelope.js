"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundCreateManyUserInput_1 = require("../inputs/CampgroundCreateManyUserInput");
let CampgroundCreateManyUserInputEnvelope = class CampgroundCreateManyUserInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CampgroundCreateManyUserInput_1.CampgroundCreateManyUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CampgroundCreateManyUserInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CampgroundCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
CampgroundCreateManyUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("CampgroundCreateManyUserInputEnvelope", {
        isAbstract: true
    })
], CampgroundCreateManyUserInputEnvelope);
exports.CampgroundCreateManyUserInputEnvelope = CampgroundCreateManyUserInputEnvelope;
