"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCampgroundArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundOrderByWithRelationInput_1 = require("../../../inputs/CampgroundOrderByWithRelationInput");
const CampgroundWhereInput_1 = require("../../../inputs/CampgroundWhereInput");
const CampgroundWhereUniqueInput_1 = require("../../../inputs/CampgroundWhereUniqueInput");
let AggregateCampgroundArgs = class AggregateCampgroundArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundWhereInput_1.CampgroundWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundWhereInput_1.CampgroundWhereInput)
], AggregateCampgroundArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CampgroundOrderByWithRelationInput_1.CampgroundOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateCampgroundArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundWhereUniqueInput_1.CampgroundWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundWhereUniqueInput_1.CampgroundWhereUniqueInput)
], AggregateCampgroundArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCampgroundArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCampgroundArgs.prototype, "skip", void 0);
AggregateCampgroundArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateCampgroundArgs);
exports.AggregateCampgroundArgs = AggregateCampgroundArgs;
