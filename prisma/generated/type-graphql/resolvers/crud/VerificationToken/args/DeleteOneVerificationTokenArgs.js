"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneVerificationTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VerificationTokenWhereUniqueInput_1 = require("../../../inputs/VerificationTokenWhereUniqueInput");
let DeleteOneVerificationTokenArgs = class DeleteOneVerificationTokenArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VerificationTokenWhereUniqueInput_1.VerificationTokenWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VerificationTokenWhereUniqueInput_1.VerificationTokenWhereUniqueInput)
], DeleteOneVerificationTokenArgs.prototype, "where", void 0);
DeleteOneVerificationTokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneVerificationTokenArgs);
exports.DeleteOneVerificationTokenArgs = DeleteOneVerificationTokenArgs;
