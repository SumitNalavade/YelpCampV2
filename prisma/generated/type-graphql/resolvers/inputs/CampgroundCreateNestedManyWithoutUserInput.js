"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundCreateManyUserInputEnvelope_1 = require("../inputs/CampgroundCreateManyUserInputEnvelope");
const CampgroundCreateOrConnectWithoutUserInput_1 = require("../inputs/CampgroundCreateOrConnectWithoutUserInput");
const CampgroundCreateWithoutUserInput_1 = require("../inputs/CampgroundCreateWithoutUserInput");
const CampgroundWhereUniqueInput_1 = require("../inputs/CampgroundWhereUniqueInput");
let CampgroundCreateNestedManyWithoutUserInput = class CampgroundCreateNestedManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CampgroundCreateWithoutUserInput_1.CampgroundCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CampgroundCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CampgroundCreateOrConnectWithoutUserInput_1.CampgroundCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CampgroundCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundCreateManyUserInputEnvelope_1.CampgroundCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundCreateManyUserInputEnvelope_1.CampgroundCreateManyUserInputEnvelope)
], CampgroundCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CampgroundWhereUniqueInput_1.CampgroundWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CampgroundCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
CampgroundCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CampgroundCreateNestedManyWithoutUserInput", {
        isAbstract: true
    })
], CampgroundCreateNestedManyWithoutUserInput);
exports.CampgroundCreateNestedManyWithoutUserInput = CampgroundCreateNestedManyWithoutUserInput;
