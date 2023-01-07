"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CampgroundWhereUniqueInput = class CampgroundWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundWhereUniqueInput.prototype, "id", void 0);
CampgroundWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CampgroundWhereUniqueInput", {
        isAbstract: true
    })
], CampgroundWhereUniqueInput);
exports.CampgroundWhereUniqueInput = CampgroundWhereUniqueInput;
