"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCampgroundArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundOrderByWithAggregationInput_1 = require("../../../inputs/CampgroundOrderByWithAggregationInput");
const CampgroundScalarWhereWithAggregatesInput_1 = require("../../../inputs/CampgroundScalarWhereWithAggregatesInput");
const CampgroundWhereInput_1 = require("../../../inputs/CampgroundWhereInput");
const CampgroundScalarFieldEnum_1 = require("../../../../enums/CampgroundScalarFieldEnum");
let GroupByCampgroundArgs = class GroupByCampgroundArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundWhereInput_1.CampgroundWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundWhereInput_1.CampgroundWhereInput)
], GroupByCampgroundArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CampgroundOrderByWithAggregationInput_1.CampgroundOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCampgroundArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CampgroundScalarFieldEnum_1.CampgroundScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCampgroundArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundScalarWhereWithAggregatesInput_1.CampgroundScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundScalarWhereWithAggregatesInput_1.CampgroundScalarWhereWithAggregatesInput)
], GroupByCampgroundArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCampgroundArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCampgroundArgs.prototype, "skip", void 0);
GroupByCampgroundArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCampgroundArgs);
exports.GroupByCampgroundArgs = GroupByCampgroundArgs;
