"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCampgroundResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyCampgroundArgs_1 = require("./args/DeleteManyCampgroundArgs");
const Campground_1 = require("../../../models/Campground");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyCampgroundResolver = class DeleteManyCampgroundResolver {
    async deleteManyCampground(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).campground.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCampgroundArgs_1.DeleteManyCampgroundArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyCampgroundResolver.prototype, "deleteManyCampground", null);
DeleteManyCampgroundResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Campground_1.Campground)
], DeleteManyCampgroundResolver);
exports.DeleteManyCampgroundResolver = DeleteManyCampgroundResolver;
