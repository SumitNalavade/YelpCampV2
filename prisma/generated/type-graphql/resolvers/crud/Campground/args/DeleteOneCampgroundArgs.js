"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCampgroundArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundWhereUniqueInput_1 = require("../../../inputs/CampgroundWhereUniqueInput");
let DeleteOneCampgroundArgs = class DeleteOneCampgroundArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundWhereUniqueInput_1.CampgroundWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CampgroundWhereUniqueInput_1.CampgroundWhereUniqueInput)
], DeleteOneCampgroundArgs.prototype, "where", void 0);
DeleteOneCampgroundArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneCampgroundArgs);
exports.DeleteOneCampgroundArgs = DeleteOneCampgroundArgs;
