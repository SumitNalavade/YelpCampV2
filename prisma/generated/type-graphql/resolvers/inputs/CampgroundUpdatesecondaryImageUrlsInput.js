"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundUpdatesecondaryImageUrlsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CampgroundUpdatesecondaryImageUrlsInput = class CampgroundUpdatesecondaryImageUrlsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CampgroundUpdatesecondaryImageUrlsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CampgroundUpdatesecondaryImageUrlsInput.prototype, "push", void 0);
CampgroundUpdatesecondaryImageUrlsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CampgroundUpdatesecondaryImageUrlsInput", {
        isAbstract: true
    })
], CampgroundUpdatesecondaryImageUrlsInput);
exports.CampgroundUpdatesecondaryImageUrlsInput = CampgroundUpdatesecondaryImageUrlsInput;
