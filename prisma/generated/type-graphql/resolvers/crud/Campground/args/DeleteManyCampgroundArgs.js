"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCampgroundArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundWhereInput_1 = require("../../../inputs/CampgroundWhereInput");
let DeleteManyCampgroundArgs = class DeleteManyCampgroundArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundWhereInput_1.CampgroundWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundWhereInput_1.CampgroundWhereInput)
], DeleteManyCampgroundArgs.prototype, "where", void 0);
DeleteManyCampgroundArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyCampgroundArgs);
exports.DeleteManyCampgroundArgs = DeleteManyCampgroundArgs;
