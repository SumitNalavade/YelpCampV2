"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundCreateWithoutUserInput_1 = require("../inputs/CampgroundCreateWithoutUserInput");
const CampgroundUpdateWithoutUserInput_1 = require("../inputs/CampgroundUpdateWithoutUserInput");
const CampgroundWhereUniqueInput_1 = require("../inputs/CampgroundWhereUniqueInput");
let CampgroundUpsertWithWhereUniqueWithoutUserInput = class CampgroundUpsertWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundWhereUniqueInput_1.CampgroundWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CampgroundWhereUniqueInput_1.CampgroundWhereUniqueInput)
], CampgroundUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundUpdateWithoutUserInput_1.CampgroundUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CampgroundUpdateWithoutUserInput_1.CampgroundUpdateWithoutUserInput)
], CampgroundUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundCreateWithoutUserInput_1.CampgroundCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CampgroundCreateWithoutUserInput_1.CampgroundCreateWithoutUserInput)
], CampgroundUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
CampgroundUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CampgroundUpsertWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], CampgroundUpsertWithWhereUniqueWithoutUserInput);
exports.CampgroundUpsertWithWhereUniqueWithoutUserInput = CampgroundUpsertWithWhereUniqueWithoutUserInput;
