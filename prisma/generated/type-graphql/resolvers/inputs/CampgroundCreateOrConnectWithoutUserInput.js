"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundCreateWithoutUserInput_1 = require("../inputs/CampgroundCreateWithoutUserInput");
const CampgroundWhereUniqueInput_1 = require("../inputs/CampgroundWhereUniqueInput");
let CampgroundCreateOrConnectWithoutUserInput = class CampgroundCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundWhereUniqueInput_1.CampgroundWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CampgroundWhereUniqueInput_1.CampgroundWhereUniqueInput)
], CampgroundCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundCreateWithoutUserInput_1.CampgroundCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CampgroundCreateWithoutUserInput_1.CampgroundCreateWithoutUserInput)
], CampgroundCreateOrConnectWithoutUserInput.prototype, "create", void 0);
CampgroundCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CampgroundCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], CampgroundCreateOrConnectWithoutUserInput);
exports.CampgroundCreateOrConnectWithoutUserInput = CampgroundCreateOrConnectWithoutUserInput;
