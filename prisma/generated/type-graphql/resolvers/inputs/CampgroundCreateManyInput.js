"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CampgroundCreateManyInput = class CampgroundCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundCreateManyInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundCreateManyInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundCreateManyInput.prototype, "imageURL", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundCreateManyInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CampgroundCreateManyInput.prototype, "price", void 0);
CampgroundCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CampgroundCreateManyInput", {
        isAbstract: true
    })
], CampgroundCreateManyInput);
exports.CampgroundCreateManyInput = CampgroundCreateManyInput;
