"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundCreatesecondaryImageUrlsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CampgroundCreatesecondaryImageUrlsInput = class CampgroundCreatesecondaryImageUrlsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CampgroundCreatesecondaryImageUrlsInput.prototype, "set", void 0);
CampgroundCreatesecondaryImageUrlsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CampgroundCreatesecondaryImageUrlsInput", {
        isAbstract: true
    })
], CampgroundCreatesecondaryImageUrlsInput);
exports.CampgroundCreatesecondaryImageUrlsInput = CampgroundCreatesecondaryImageUrlsInput;
