"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundCreatesecondaryImageB64sInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CampgroundCreatesecondaryImageB64sInput = class CampgroundCreatesecondaryImageB64sInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CampgroundCreatesecondaryImageB64sInput.prototype, "set", void 0);
CampgroundCreatesecondaryImageB64sInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CampgroundCreatesecondaryImageB64sInput", {
        isAbstract: true
    })
], CampgroundCreatesecondaryImageB64sInput);
exports.CampgroundCreatesecondaryImageB64sInput = CampgroundCreatesecondaryImageB64sInput;
