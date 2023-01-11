"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundWhereInput_1 = require("../inputs/CampgroundWhereInput");
let CampgroundRelationFilter = class CampgroundRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundWhereInput_1.CampgroundWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundWhereInput_1.CampgroundWhereInput)
], CampgroundRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundWhereInput_1.CampgroundWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundWhereInput_1.CampgroundWhereInput)
], CampgroundRelationFilter.prototype, "isNot", void 0);
CampgroundRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("CampgroundRelationFilter", {
        isAbstract: true
    })
], CampgroundRelationFilter);
exports.CampgroundRelationFilter = CampgroundRelationFilter;
