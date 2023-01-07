"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCampgroundResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneCampgroundArgs_1 = require("./args/DeleteOneCampgroundArgs");
const Campground_1 = require("../../../models/Campground");
const helpers_1 = require("../../../helpers");
let DeleteOneCampgroundResolver = class DeleteOneCampgroundResolver {
    async deleteOneCampground(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).campground.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Campground_1.Campground, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCampgroundArgs_1.DeleteOneCampgroundArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneCampgroundResolver.prototype, "deleteOneCampground", null);
DeleteOneCampgroundResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Campground_1.Campground)
], DeleteOneCampgroundResolver);
exports.DeleteOneCampgroundResolver = DeleteOneCampgroundResolver;
