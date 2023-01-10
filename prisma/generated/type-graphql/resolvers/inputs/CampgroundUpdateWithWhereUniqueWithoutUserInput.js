"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundUpdateWithoutUserInput_1 = require("../inputs/CampgroundUpdateWithoutUserInput");
const CampgroundWhereUniqueInput_1 = require("../inputs/CampgroundWhereUniqueInput");
let CampgroundUpdateWithWhereUniqueWithoutUserInput = class CampgroundUpdateWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundWhereUniqueInput_1.CampgroundWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CampgroundWhereUniqueInput_1.CampgroundWhereUniqueInput)
], CampgroundUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundUpdateWithoutUserInput_1.CampgroundUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CampgroundUpdateWithoutUserInput_1.CampgroundUpdateWithoutUserInput)
], CampgroundUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
CampgroundUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CampgroundUpdateWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], CampgroundUpdateWithWhereUniqueWithoutUserInput);
exports.CampgroundUpdateWithWhereUniqueWithoutUserInput = CampgroundUpdateWithWhereUniqueWithoutUserInput;
