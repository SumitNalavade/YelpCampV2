"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCampgroundArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundCreateInput_1 = require("../../../inputs/CampgroundCreateInput");
let CreateOneCampgroundArgs = class CreateOneCampgroundArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundCreateInput_1.CampgroundCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CampgroundCreateInput_1.CampgroundCreateInput)
], CreateOneCampgroundArgs.prototype, "data", void 0);
CreateOneCampgroundArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneCampgroundArgs);
exports.CreateOneCampgroundArgs = CreateOneCampgroundArgs;
