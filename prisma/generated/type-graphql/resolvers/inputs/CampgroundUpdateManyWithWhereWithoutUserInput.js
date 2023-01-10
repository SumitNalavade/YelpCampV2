"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundScalarWhereInput_1 = require("../inputs/CampgroundScalarWhereInput");
const CampgroundUpdateManyMutationInput_1 = require("../inputs/CampgroundUpdateManyMutationInput");
let CampgroundUpdateManyWithWhereWithoutUserInput = class CampgroundUpdateManyWithWhereWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundScalarWhereInput_1.CampgroundScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CampgroundScalarWhereInput_1.CampgroundScalarWhereInput)
], CampgroundUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundUpdateManyMutationInput_1.CampgroundUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CampgroundUpdateManyMutationInput_1.CampgroundUpdateManyMutationInput)
], CampgroundUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
CampgroundUpdateManyWithWhereWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CampgroundUpdateManyWithWhereWithoutUserInput", {
        isAbstract: true
    })
], CampgroundUpdateManyWithWhereWithoutUserInput);
exports.CampgroundUpdateManyWithWhereWithoutUserInput = CampgroundUpdateManyWithWhereWithoutUserInput;
