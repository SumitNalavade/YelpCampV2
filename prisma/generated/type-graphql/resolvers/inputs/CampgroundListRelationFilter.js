"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundWhereInput_1 = require("../inputs/CampgroundWhereInput");
let CampgroundListRelationFilter = class CampgroundListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundWhereInput_1.CampgroundWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundWhereInput_1.CampgroundWhereInput)
], CampgroundListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundWhereInput_1.CampgroundWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundWhereInput_1.CampgroundWhereInput)
], CampgroundListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundWhereInput_1.CampgroundWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundWhereInput_1.CampgroundWhereInput)
], CampgroundListRelationFilter.prototype, "none", void 0);
CampgroundListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("CampgroundListRelationFilter", {
        isAbstract: true
    })
], CampgroundListRelationFilter);
exports.CampgroundListRelationFilter = CampgroundListRelationFilter;
