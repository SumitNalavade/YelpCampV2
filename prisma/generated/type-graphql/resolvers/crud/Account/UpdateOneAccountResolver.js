"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneAccountResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneAccountArgs_1 = require("./args/UpdateOneAccountArgs");
const Account_1 = require("../../../models/Account");
const helpers_1 = require("../../../helpers");
let UpdateOneAccountResolver = class UpdateOneAccountResolver {
    async updateOneAccount(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).account.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Account_1.Account, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneAccountArgs_1.UpdateOneAccountArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneAccountResolver.prototype, "updateOneAccount", null);
UpdateOneAccountResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Account_1.Account)
], UpdateOneAccountResolver);
exports.UpdateOneAccountResolver = UpdateOneAccountResolver;
