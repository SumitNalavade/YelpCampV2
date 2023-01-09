"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAccountOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstAccountOrThrowArgs_1 = require("./args/FindFirstAccountOrThrowArgs");
const Account_1 = require("../../../models/Account");
const helpers_1 = require("../../../helpers");
let FindFirstAccountOrThrowResolver = class FindFirstAccountOrThrowResolver {
    async findFirstAccountOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).account.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Account_1.Account, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAccountOrThrowArgs_1.FindFirstAccountOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstAccountOrThrowResolver.prototype, "findFirstAccountOrThrow", null);
FindFirstAccountOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Account_1.Account)
], FindFirstAccountOrThrowResolver);
exports.FindFirstAccountOrThrowResolver = FindFirstAccountOrThrowResolver;
