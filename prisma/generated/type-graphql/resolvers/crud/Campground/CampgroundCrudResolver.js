"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateCampgroundArgs_1 = require("./args/AggregateCampgroundArgs");
const CreateManyCampgroundArgs_1 = require("./args/CreateManyCampgroundArgs");
const CreateOneCampgroundArgs_1 = require("./args/CreateOneCampgroundArgs");
const DeleteManyCampgroundArgs_1 = require("./args/DeleteManyCampgroundArgs");
const DeleteOneCampgroundArgs_1 = require("./args/DeleteOneCampgroundArgs");
const FindFirstCampgroundArgs_1 = require("./args/FindFirstCampgroundArgs");
const FindFirstCampgroundOrThrowArgs_1 = require("./args/FindFirstCampgroundOrThrowArgs");
const FindManyCampgroundArgs_1 = require("./args/FindManyCampgroundArgs");
const FindUniqueCampgroundArgs_1 = require("./args/FindUniqueCampgroundArgs");
const FindUniqueCampgroundOrThrowArgs_1 = require("./args/FindUniqueCampgroundOrThrowArgs");
const GroupByCampgroundArgs_1 = require("./args/GroupByCampgroundArgs");
const UpdateManyCampgroundArgs_1 = require("./args/UpdateManyCampgroundArgs");
const UpdateOneCampgroundArgs_1 = require("./args/UpdateOneCampgroundArgs");
const UpsertOneCampgroundArgs_1 = require("./args/UpsertOneCampgroundArgs");
const helpers_1 = require("../../../helpers");
const Campground_1 = require("../../../models/Campground");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCampground_1 = require("../../outputs/AggregateCampground");
const CampgroundGroupBy_1 = require("../../outputs/CampgroundGroupBy");
let CampgroundCrudResolver = class CampgroundCrudResolver {
    async aggregateCampground(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).campground.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyCampground(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).campground.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneCampground(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).campground.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCampground(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).campground.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneCampground(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).campground.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCampground(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).campground.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCampgroundOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).campground.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async campgrounds(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).campground.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async campground(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).campground.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getCampground(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).campground.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByCampground(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).campground.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyCampground(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).campground.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneCampground(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).campground.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneCampground(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).campground.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCampground_1.AggregateCampground, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCampgroundArgs_1.AggregateCampgroundArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CampgroundCrudResolver.prototype, "aggregateCampground", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCampgroundArgs_1.CreateManyCampgroundArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CampgroundCrudResolver.prototype, "createManyCampground", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Campground_1.Campground, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCampgroundArgs_1.CreateOneCampgroundArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CampgroundCrudResolver.prototype, "createOneCampground", null);
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
], CampgroundCrudResolver.prototype, "deleteManyCampground", null);
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
], CampgroundCrudResolver.prototype, "deleteOneCampground", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Campground_1.Campground, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCampgroundArgs_1.FindFirstCampgroundArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CampgroundCrudResolver.prototype, "findFirstCampground", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Campground_1.Campground, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCampgroundOrThrowArgs_1.FindFirstCampgroundOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CampgroundCrudResolver.prototype, "findFirstCampgroundOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Campground_1.Campground], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCampgroundArgs_1.FindManyCampgroundArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CampgroundCrudResolver.prototype, "campgrounds", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Campground_1.Campground, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCampgroundArgs_1.FindUniqueCampgroundArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CampgroundCrudResolver.prototype, "campground", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Campground_1.Campground, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCampgroundOrThrowArgs_1.FindUniqueCampgroundOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CampgroundCrudResolver.prototype, "getCampground", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CampgroundGroupBy_1.CampgroundGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCampgroundArgs_1.GroupByCampgroundArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CampgroundCrudResolver.prototype, "groupByCampground", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCampgroundArgs_1.UpdateManyCampgroundArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CampgroundCrudResolver.prototype, "updateManyCampground", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Campground_1.Campground, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCampgroundArgs_1.UpdateOneCampgroundArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CampgroundCrudResolver.prototype, "updateOneCampground", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Campground_1.Campground, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCampgroundArgs_1.UpsertOneCampgroundArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CampgroundCrudResolver.prototype, "upsertOneCampground", null);
CampgroundCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Campground_1.Campground)
], CampgroundCrudResolver);
exports.CampgroundCrudResolver = CampgroundCrudResolver;
