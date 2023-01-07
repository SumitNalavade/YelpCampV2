"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCampgroundArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundOrderByWithRelationInput_1 = require("../../../inputs/CampgroundOrderByWithRelationInput");
const CampgroundWhereInput_1 = require("../../../inputs/CampgroundWhereInput");
const CampgroundWhereUniqueInput_1 = require("../../../inputs/CampgroundWhereUniqueInput");
const CampgroundScalarFieldEnum_1 = require("../../../../enums/CampgroundScalarFieldEnum");
let FindManyCampgroundArgs = class FindManyCampgroundArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundWhereInput_1.CampgroundWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundWhereInput_1.CampgroundWhereInput)
], FindManyCampgroundArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CampgroundOrderByWithRelationInput_1.CampgroundOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCampgroundArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundWhereUniqueInput_1.CampgroundWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundWhereUniqueInput_1.CampgroundWhereUniqueInput)
], FindManyCampgroundArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCampgroundArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCampgroundArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CampgroundScalarFieldEnum_1.CampgroundScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCampgroundArgs.prototype, "distinct", void 0);
FindManyCampgroundArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyCampgroundArgs);
exports.FindManyCampgroundArgs = FindManyCampgroundArgs;
