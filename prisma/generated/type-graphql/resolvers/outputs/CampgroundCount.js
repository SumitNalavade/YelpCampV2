"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CampgroundCount = class CampgroundCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CampgroundCount.prototype, "Review", void 0);
CampgroundCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CampgroundCount", {
        isAbstract: true
    })
], CampgroundCount);
exports.CampgroundCount = CampgroundCount;
