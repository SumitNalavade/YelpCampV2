"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCampgroundArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundCreateInput_1 = require("../../../inputs/CampgroundCreateInput");
const CampgroundUpdateInput_1 = require("../../../inputs/CampgroundUpdateInput");
const CampgroundWhereUniqueInput_1 = require("../../../inputs/CampgroundWhereUniqueInput");
let UpsertOneCampgroundArgs = class UpsertOneCampgroundArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundWhereUniqueInput_1.CampgroundWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CampgroundWhereUniqueInput_1.CampgroundWhereUniqueInput)
], UpsertOneCampgroundArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundCreateInput_1.CampgroundCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CampgroundCreateInput_1.CampgroundCreateInput)
], UpsertOneCampgroundArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundUpdateInput_1.CampgroundUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CampgroundUpdateInput_1.CampgroundUpdateInput)
], UpsertOneCampgroundArgs.prototype, "update", void 0);
UpsertOneCampgroundArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneCampgroundArgs);
exports.UpsertOneCampgroundArgs = UpsertOneCampgroundArgs;
