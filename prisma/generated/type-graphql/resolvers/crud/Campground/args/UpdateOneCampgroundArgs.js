"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCampgroundArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundUpdateInput_1 = require("../../../inputs/CampgroundUpdateInput");
const CampgroundWhereUniqueInput_1 = require("../../../inputs/CampgroundWhereUniqueInput");
let UpdateOneCampgroundArgs = class UpdateOneCampgroundArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundUpdateInput_1.CampgroundUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CampgroundUpdateInput_1.CampgroundUpdateInput)
], UpdateOneCampgroundArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundWhereUniqueInput_1.CampgroundWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CampgroundWhereUniqueInput_1.CampgroundWhereUniqueInput)
], UpdateOneCampgroundArgs.prototype, "where", void 0);
UpdateOneCampgroundArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneCampgroundArgs);
exports.UpdateOneCampgroundArgs = UpdateOneCampgroundArgs;
