"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundUpdateManyWithoutUserNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundCreateManyUserInputEnvelope_1 = require("../inputs/CampgroundCreateManyUserInputEnvelope");
const CampgroundCreateOrConnectWithoutUserInput_1 = require("../inputs/CampgroundCreateOrConnectWithoutUserInput");
const CampgroundCreateWithoutUserInput_1 = require("../inputs/CampgroundCreateWithoutUserInput");
const CampgroundScalarWhereInput_1 = require("../inputs/CampgroundScalarWhereInput");
const CampgroundUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/CampgroundUpdateManyWithWhereWithoutUserInput");
const CampgroundUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/CampgroundUpdateWithWhereUniqueWithoutUserInput");
const CampgroundUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/CampgroundUpsertWithWhereUniqueWithoutUserInput");
const CampgroundWhereUniqueInput_1 = require("../inputs/CampgroundWhereUniqueInput");
let CampgroundUpdateManyWithoutUserNestedInput = class CampgroundUpdateManyWithoutUserNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CampgroundCreateWithoutUserInput_1.CampgroundCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CampgroundUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CampgroundCreateOrConnectWithoutUserInput_1.CampgroundCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CampgroundUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CampgroundUpsertWithWhereUniqueWithoutUserInput_1.CampgroundUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CampgroundUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundCreateManyUserInputEnvelope_1.CampgroundCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundCreateManyUserInputEnvelope_1.CampgroundCreateManyUserInputEnvelope)
], CampgroundUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CampgroundWhereUniqueInput_1.CampgroundWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CampgroundUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CampgroundWhereUniqueInput_1.CampgroundWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CampgroundUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CampgroundWhereUniqueInput_1.CampgroundWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CampgroundUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CampgroundWhereUniqueInput_1.CampgroundWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CampgroundUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CampgroundUpdateWithWhereUniqueWithoutUserInput_1.CampgroundUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CampgroundUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CampgroundUpdateManyWithWhereWithoutUserInput_1.CampgroundUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CampgroundUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CampgroundScalarWhereInput_1.CampgroundScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CampgroundUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
CampgroundUpdateManyWithoutUserNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CampgroundUpdateManyWithoutUserNestedInput", {
        isAbstract: true
    })
], CampgroundUpdateManyWithoutUserNestedInput);
exports.CampgroundUpdateManyWithoutUserNestedInput = CampgroundUpdateManyWithoutUserNestedInput;
