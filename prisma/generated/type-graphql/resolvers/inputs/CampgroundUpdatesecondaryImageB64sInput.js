"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundUpdatesecondaryImageB64sInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CampgroundUpdatesecondaryImageB64sInput = class CampgroundUpdatesecondaryImageB64sInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CampgroundUpdatesecondaryImageB64sInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CampgroundUpdatesecondaryImageB64sInput.prototype, "push", void 0);
CampgroundUpdatesecondaryImageB64sInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CampgroundUpdatesecondaryImageB64sInput", {
        isAbstract: true
    })
], CampgroundUpdatesecondaryImageB64sInput);
exports.CampgroundUpdatesecondaryImageB64sInput = CampgroundUpdatesecondaryImageB64sInput;
