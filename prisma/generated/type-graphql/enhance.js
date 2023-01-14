"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = tslib_1.__importStar(require("./resolvers/relations/resolvers.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    Account: crudResolvers.AccountCrudResolver,
    Session: crudResolvers.SessionCrudResolver,
    User: crudResolvers.UserCrudResolver,
    VerificationToken: crudResolvers.VerificationTokenCrudResolver,
    Campground: crudResolvers.CampgroundCrudResolver,
    Review: crudResolvers.ReviewCrudResolver
};
const actionResolversMap = {
    Account: {
        aggregateAccount: actionResolvers.AggregateAccountResolver,
        createManyAccount: actionResolvers.CreateManyAccountResolver,
        createOneAccount: actionResolvers.CreateOneAccountResolver,
        deleteManyAccount: actionResolvers.DeleteManyAccountResolver,
        deleteOneAccount: actionResolvers.DeleteOneAccountResolver,
        findFirstAccount: actionResolvers.FindFirstAccountResolver,
        findFirstAccountOrThrow: actionResolvers.FindFirstAccountOrThrowResolver,
        accounts: actionResolvers.FindManyAccountResolver,
        account: actionResolvers.FindUniqueAccountResolver,
        getAccount: actionResolvers.FindUniqueAccountOrThrowResolver,
        groupByAccount: actionResolvers.GroupByAccountResolver,
        updateManyAccount: actionResolvers.UpdateManyAccountResolver,
        updateOneAccount: actionResolvers.UpdateOneAccountResolver,
        upsertOneAccount: actionResolvers.UpsertOneAccountResolver
    },
    Session: {
        aggregateSession: actionResolvers.AggregateSessionResolver,
        createManySession: actionResolvers.CreateManySessionResolver,
        createOneSession: actionResolvers.CreateOneSessionResolver,
        deleteManySession: actionResolvers.DeleteManySessionResolver,
        deleteOneSession: actionResolvers.DeleteOneSessionResolver,
        findFirstSession: actionResolvers.FindFirstSessionResolver,
        findFirstSessionOrThrow: actionResolvers.FindFirstSessionOrThrowResolver,
        sessions: actionResolvers.FindManySessionResolver,
        session: actionResolvers.FindUniqueSessionResolver,
        getSession: actionResolvers.FindUniqueSessionOrThrowResolver,
        groupBySession: actionResolvers.GroupBySessionResolver,
        updateManySession: actionResolvers.UpdateManySessionResolver,
        updateOneSession: actionResolvers.UpdateOneSessionResolver,
        upsertOneSession: actionResolvers.UpsertOneSessionResolver
    },
    User: {
        aggregateUser: actionResolvers.AggregateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        createOneUser: actionResolvers.CreateOneUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        deleteOneUser: actionResolvers.DeleteOneUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
        users: actionResolvers.FindManyUserResolver,
        user: actionResolvers.FindUniqueUserResolver,
        getUser: actionResolvers.FindUniqueUserOrThrowResolver,
        groupByUser: actionResolvers.GroupByUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        updateOneUser: actionResolvers.UpdateOneUserResolver,
        upsertOneUser: actionResolvers.UpsertOneUserResolver
    },
    VerificationToken: {
        aggregateVerificationToken: actionResolvers.AggregateVerificationTokenResolver,
        createManyVerificationToken: actionResolvers.CreateManyVerificationTokenResolver,
        createOneVerificationToken: actionResolvers.CreateOneVerificationTokenResolver,
        deleteManyVerificationToken: actionResolvers.DeleteManyVerificationTokenResolver,
        deleteOneVerificationToken: actionResolvers.DeleteOneVerificationTokenResolver,
        findFirstVerificationToken: actionResolvers.FindFirstVerificationTokenResolver,
        findFirstVerificationTokenOrThrow: actionResolvers.FindFirstVerificationTokenOrThrowResolver,
        verificationTokens: actionResolvers.FindManyVerificationTokenResolver,
        verificationToken: actionResolvers.FindUniqueVerificationTokenResolver,
        getVerificationToken: actionResolvers.FindUniqueVerificationTokenOrThrowResolver,
        groupByVerificationToken: actionResolvers.GroupByVerificationTokenResolver,
        updateManyVerificationToken: actionResolvers.UpdateManyVerificationTokenResolver,
        updateOneVerificationToken: actionResolvers.UpdateOneVerificationTokenResolver,
        upsertOneVerificationToken: actionResolvers.UpsertOneVerificationTokenResolver
    },
    Campground: {
        aggregateCampground: actionResolvers.AggregateCampgroundResolver,
        createManyCampground: actionResolvers.CreateManyCampgroundResolver,
        createOneCampground: actionResolvers.CreateOneCampgroundResolver,
        deleteManyCampground: actionResolvers.DeleteManyCampgroundResolver,
        deleteOneCampground: actionResolvers.DeleteOneCampgroundResolver,
        findFirstCampground: actionResolvers.FindFirstCampgroundResolver,
        findFirstCampgroundOrThrow: actionResolvers.FindFirstCampgroundOrThrowResolver,
        campgrounds: actionResolvers.FindManyCampgroundResolver,
        campground: actionResolvers.FindUniqueCampgroundResolver,
        getCampground: actionResolvers.FindUniqueCampgroundOrThrowResolver,
        groupByCampground: actionResolvers.GroupByCampgroundResolver,
        updateManyCampground: actionResolvers.UpdateManyCampgroundResolver,
        updateOneCampground: actionResolvers.UpdateOneCampgroundResolver,
        upsertOneCampground: actionResolvers.UpsertOneCampgroundResolver
    },
    Review: {
        aggregateReview: actionResolvers.AggregateReviewResolver,
        createManyReview: actionResolvers.CreateManyReviewResolver,
        createOneReview: actionResolvers.CreateOneReviewResolver,
        deleteManyReview: actionResolvers.DeleteManyReviewResolver,
        deleteOneReview: actionResolvers.DeleteOneReviewResolver,
        findFirstReview: actionResolvers.FindFirstReviewResolver,
        findFirstReviewOrThrow: actionResolvers.FindFirstReviewOrThrowResolver,
        reviews: actionResolvers.FindManyReviewResolver,
        review: actionResolvers.FindUniqueReviewResolver,
        getReview: actionResolvers.FindUniqueReviewOrThrowResolver,
        groupByReview: actionResolvers.GroupByReviewResolver,
        updateManyReview: actionResolvers.UpdateManyReviewResolver,
        updateOneReview: actionResolvers.UpdateOneReviewResolver,
        upsertOneReview: actionResolvers.UpsertOneReviewResolver
    }
};
const crudResolversInfo = {
    Account: ["aggregateAccount", "createManyAccount", "createOneAccount", "deleteManyAccount", "deleteOneAccount", "findFirstAccount", "findFirstAccountOrThrow", "accounts", "account", "getAccount", "groupByAccount", "updateManyAccount", "updateOneAccount", "upsertOneAccount"],
    Session: ["aggregateSession", "createManySession", "createOneSession", "deleteManySession", "deleteOneSession", "findFirstSession", "findFirstSessionOrThrow", "sessions", "session", "getSession", "groupBySession", "updateManySession", "updateOneSession", "upsertOneSession"],
    User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
    VerificationToken: ["aggregateVerificationToken", "createManyVerificationToken", "createOneVerificationToken", "deleteManyVerificationToken", "deleteOneVerificationToken", "findFirstVerificationToken", "findFirstVerificationTokenOrThrow", "verificationTokens", "verificationToken", "getVerificationToken", "groupByVerificationToken", "updateManyVerificationToken", "updateOneVerificationToken", "upsertOneVerificationToken"],
    Campground: ["aggregateCampground", "createManyCampground", "createOneCampground", "deleteManyCampground", "deleteOneCampground", "findFirstCampground", "findFirstCampgroundOrThrow", "campgrounds", "campground", "getCampground", "groupByCampground", "updateManyCampground", "updateOneCampground", "upsertOneCampground"],
    Review: ["aggregateReview", "createManyReview", "createOneReview", "deleteManyReview", "deleteOneReview", "findFirstReview", "findFirstReviewOrThrow", "reviews", "review", "getReview", "groupByReview", "updateManyReview", "updateOneReview", "upsertOneReview"]
};
const argsInfo = {
    AggregateAccountArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyAccountArgs: ["data", "skipDuplicates"],
    CreateOneAccountArgs: ["data"],
    DeleteManyAccountArgs: ["where"],
    DeleteOneAccountArgs: ["where"],
    FindFirstAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstAccountOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueAccountArgs: ["where"],
    FindUniqueAccountOrThrowArgs: ["where"],
    GroupByAccountArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyAccountArgs: ["data", "where"],
    UpdateOneAccountArgs: ["data", "where"],
    UpsertOneAccountArgs: ["where", "create", "update"],
    AggregateSessionArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManySessionArgs: ["data", "skipDuplicates"],
    CreateOneSessionArgs: ["data"],
    DeleteManySessionArgs: ["where"],
    DeleteOneSessionArgs: ["where"],
    FindFirstSessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstSessionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManySessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueSessionArgs: ["where"],
    FindUniqueSessionOrThrowArgs: ["where"],
    GroupBySessionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManySessionArgs: ["data", "where"],
    UpdateOneSessionArgs: ["data", "where"],
    UpsertOneSessionArgs: ["where", "create", "update"],
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    CreateOneUserArgs: ["data"],
    DeleteManyUserArgs: ["where"],
    DeleteOneUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueUserArgs: ["where"],
    FindUniqueUserOrThrowArgs: ["where"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyUserArgs: ["data", "where"],
    UpdateOneUserArgs: ["data", "where"],
    UpsertOneUserArgs: ["where", "create", "update"],
    AggregateVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyVerificationTokenArgs: ["data", "skipDuplicates"],
    CreateOneVerificationTokenArgs: ["data"],
    DeleteManyVerificationTokenArgs: ["where"],
    DeleteOneVerificationTokenArgs: ["where"],
    FindFirstVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstVerificationTokenOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueVerificationTokenArgs: ["where"],
    FindUniqueVerificationTokenOrThrowArgs: ["where"],
    GroupByVerificationTokenArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyVerificationTokenArgs: ["data", "where"],
    UpdateOneVerificationTokenArgs: ["data", "where"],
    UpsertOneVerificationTokenArgs: ["where", "create", "update"],
    AggregateCampgroundArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyCampgroundArgs: ["data", "skipDuplicates"],
    CreateOneCampgroundArgs: ["data"],
    DeleteManyCampgroundArgs: ["where"],
    DeleteOneCampgroundArgs: ["where"],
    FindFirstCampgroundArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstCampgroundOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyCampgroundArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueCampgroundArgs: ["where"],
    FindUniqueCampgroundOrThrowArgs: ["where"],
    GroupByCampgroundArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyCampgroundArgs: ["data", "where"],
    UpdateOneCampgroundArgs: ["data", "where"],
    UpsertOneCampgroundArgs: ["where", "create", "update"],
    AggregateReviewArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyReviewArgs: ["data", "skipDuplicates"],
    CreateOneReviewArgs: ["data"],
    DeleteManyReviewArgs: ["where"],
    DeleteOneReviewArgs: ["where"],
    FindFirstReviewArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstReviewOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyReviewArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueReviewArgs: ["where"],
    FindUniqueReviewOrThrowArgs: ["where"],
    GroupByReviewArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyReviewArgs: ["data", "where"],
    UpdateOneReviewArgs: ["data", "where"],
    UpsertOneReviewArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = crudResolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
                tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    Account: relationResolvers.AccountRelationsResolver,
    Session: relationResolvers.SessionRelationsResolver,
    User: relationResolvers.UserRelationsResolver,
    Campground: relationResolvers.CampgroundRelationsResolver,
    Review: relationResolvers.ReviewRelationsResolver
};
const relationResolversInfo = {
    Account: ["user"],
    Session: ["user"],
    User: ["accounts", "sessions", "Campgrounds", "Review"],
    Campground: ["user", "Review"],
    Review: ["user", "campground"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Account: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    Session: ["id", "sessionToken", "userId", "expires"],
    User: ["id", "name", "email", "emailVerified", "image"],
    VerificationToken: ["identifier", "token", "expires"],
    Campground: ["id", "name", "description", "primaryImageB64", "secondaryImageB64s", "address", "price", "userId"],
    Review: ["id", "rating", "body", "userId", "campgroundId"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateAccount: ["_count", "_avg", "_sum", "_min", "_max"],
    AccountGroupBy: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateSession: ["_count", "_min", "_max"],
    SessionGroupBy: ["id", "sessionToken", "userId", "expires", "_count", "_min", "_max"],
    AggregateUser: ["_count", "_min", "_max"],
    UserGroupBy: ["id", "name", "email", "emailVerified", "image", "_count", "_min", "_max"],
    AggregateVerificationToken: ["_count", "_min", "_max"],
    VerificationTokenGroupBy: ["identifier", "token", "expires", "_count", "_min", "_max"],
    AggregateCampground: ["_count", "_avg", "_sum", "_min", "_max"],
    CampgroundGroupBy: ["id", "name", "description", "primaryImageB64", "secondaryImageB64s", "address", "price", "userId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateReview: ["_count", "_avg", "_sum", "_min", "_max"],
    ReviewGroupBy: ["id", "rating", "body", "userId", "campgroundId", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    AccountCountAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_all"],
    AccountAvgAggregate: ["expires_at"],
    AccountSumAggregate: ["expires_at"],
    AccountMinAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    AccountMaxAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    SessionCountAggregate: ["id", "sessionToken", "userId", "expires", "_all"],
    SessionMinAggregate: ["id", "sessionToken", "userId", "expires"],
    SessionMaxAggregate: ["id", "sessionToken", "userId", "expires"],
    UserCount: ["accounts", "sessions", "Campgrounds", "Review"],
    UserCountAggregate: ["id", "name", "email", "emailVerified", "image", "_all"],
    UserMinAggregate: ["id", "name", "email", "emailVerified", "image"],
    UserMaxAggregate: ["id", "name", "email", "emailVerified", "image"],
    VerificationTokenCountAggregate: ["identifier", "token", "expires", "_all"],
    VerificationTokenMinAggregate: ["identifier", "token", "expires"],
    VerificationTokenMaxAggregate: ["identifier", "token", "expires"],
    CampgroundCount: ["Review"],
    CampgroundCountAggregate: ["id", "name", "description", "primaryImageB64", "secondaryImageB64s", "address", "price", "userId", "_all"],
    CampgroundAvgAggregate: ["price"],
    CampgroundSumAggregate: ["price"],
    CampgroundMinAggregate: ["id", "name", "description", "primaryImageB64", "address", "price", "userId"],
    CampgroundMaxAggregate: ["id", "name", "description", "primaryImageB64", "address", "price", "userId"],
    ReviewCountAggregate: ["id", "rating", "body", "userId", "campgroundId", "_all"],
    ReviewAvgAggregate: ["rating"],
    ReviewSumAggregate: ["rating"],
    ReviewMinAggregate: ["id", "rating", "body", "userId", "campgroundId"],
    ReviewMaxAggregate: ["id", "rating", "body", "userId", "campgroundId"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    AccountWhereInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
    AccountOrderByWithRelationInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
    AccountWhereUniqueInput: ["id", "provider_providerAccountId"],
    AccountOrderByWithAggregationInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_count", "_avg", "_max", "_min", "_sum"],
    AccountScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    SessionWhereInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires", "user"],
    SessionOrderByWithRelationInput: ["id", "sessionToken", "userId", "expires", "user"],
    SessionWhereUniqueInput: ["id", "sessionToken"],
    SessionOrderByWithAggregationInput: ["id", "sessionToken", "userId", "expires", "_count", "_max", "_min"],
    SessionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires"],
    UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image", "accounts", "sessions", "Campgrounds", "Review"],
    UserOrderByWithRelationInput: ["id", "name", "email", "emailVerified", "image", "accounts", "sessions", "Campgrounds", "Review"],
    UserWhereUniqueInput: ["id", "email"],
    UserOrderByWithAggregationInput: ["id", "name", "email", "emailVerified", "image", "_count", "_max", "_min"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image"],
    VerificationTokenWhereInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
    VerificationTokenOrderByWithRelationInput: ["identifier", "token", "expires"],
    VerificationTokenWhereUniqueInput: ["token", "identifier_token"],
    VerificationTokenOrderByWithAggregationInput: ["identifier", "token", "expires", "_count", "_max", "_min"],
    VerificationTokenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
    CampgroundWhereInput: ["AND", "OR", "NOT", "id", "name", "description", "primaryImageB64", "secondaryImageB64s", "address", "price", "user", "userId", "Review"],
    CampgroundOrderByWithRelationInput: ["id", "name", "description", "primaryImageB64", "secondaryImageB64s", "address", "price", "user", "userId", "Review"],
    CampgroundWhereUniqueInput: ["id"],
    CampgroundOrderByWithAggregationInput: ["id", "name", "description", "primaryImageB64", "secondaryImageB64s", "address", "price", "userId", "_count", "_avg", "_max", "_min", "_sum"],
    CampgroundScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "description", "primaryImageB64", "secondaryImageB64s", "address", "price", "userId"],
    ReviewWhereInput: ["AND", "OR", "NOT", "id", "rating", "body", "user", "userId", "campground", "campgroundId"],
    ReviewOrderByWithRelationInput: ["id", "rating", "body", "user", "userId", "campground", "campgroundId"],
    ReviewWhereUniqueInput: ["id"],
    ReviewOrderByWithAggregationInput: ["id", "rating", "body", "userId", "campgroundId", "_count", "_avg", "_max", "_min", "_sum"],
    ReviewScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "rating", "body", "userId", "campgroundId"],
    AccountCreateInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
    AccountUpdateInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
    AccountCreateManyInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    AccountUpdateManyMutationInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    SessionCreateInput: ["id", "sessionToken", "expires", "user"],
    SessionUpdateInput: ["id", "sessionToken", "expires", "user"],
    SessionCreateManyInput: ["id", "sessionToken", "userId", "expires"],
    SessionUpdateManyMutationInput: ["id", "sessionToken", "expires"],
    UserCreateInput: ["id", "name", "email", "emailVerified", "image", "accounts", "sessions", "Campgrounds", "Review"],
    UserUpdateInput: ["id", "name", "email", "emailVerified", "image", "accounts", "sessions", "Campgrounds", "Review"],
    UserCreateManyInput: ["id", "name", "email", "emailVerified", "image"],
    UserUpdateManyMutationInput: ["id", "name", "email", "emailVerified", "image"],
    VerificationTokenCreateInput: ["identifier", "token", "expires"],
    VerificationTokenUpdateInput: ["identifier", "token", "expires"],
    VerificationTokenCreateManyInput: ["identifier", "token", "expires"],
    VerificationTokenUpdateManyMutationInput: ["identifier", "token", "expires"],
    CampgroundCreateInput: ["id", "name", "description", "primaryImageB64", "secondaryImageB64s", "address", "price", "user", "Review"],
    CampgroundUpdateInput: ["id", "name", "description", "primaryImageB64", "secondaryImageB64s", "address", "price", "user", "Review"],
    CampgroundCreateManyInput: ["id", "name", "description", "primaryImageB64", "secondaryImageB64s", "address", "price", "userId"],
    CampgroundUpdateManyMutationInput: ["id", "name", "description", "primaryImageB64", "secondaryImageB64s", "address", "price"],
    ReviewCreateInput: ["id", "rating", "body", "user", "campground"],
    ReviewUpdateInput: ["id", "rating", "body", "user", "campground"],
    ReviewCreateManyInput: ["id", "rating", "body", "userId", "campgroundId"],
    ReviewUpdateManyMutationInput: ["id", "rating", "body"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    UserRelationFilter: ["is", "isNot"],
    AccountProviderProviderAccountIdCompoundUniqueInput: ["provider", "providerAccountId"],
    AccountCountOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    AccountAvgOrderByAggregateInput: ["expires_at"],
    AccountMaxOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    AccountMinOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    AccountSumOrderByAggregateInput: ["expires_at"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    SessionCountOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
    SessionMaxOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
    SessionMinOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    AccountListRelationFilter: ["every", "some", "none"],
    SessionListRelationFilter: ["every", "some", "none"],
    CampgroundListRelationFilter: ["every", "some", "none"],
    ReviewListRelationFilter: ["every", "some", "none"],
    AccountOrderByRelationAggregateInput: ["_count"],
    SessionOrderByRelationAggregateInput: ["_count"],
    CampgroundOrderByRelationAggregateInput: ["_count"],
    ReviewOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image"],
    UserMaxOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image"],
    UserMinOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image"],
    DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    VerificationTokenIdentifierTokenCompoundUniqueInput: ["identifier", "token"],
    VerificationTokenCountOrderByAggregateInput: ["identifier", "token", "expires"],
    VerificationTokenMaxOrderByAggregateInput: ["identifier", "token", "expires"],
    VerificationTokenMinOrderByAggregateInput: ["identifier", "token", "expires"],
    StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
    FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    CampgroundCountOrderByAggregateInput: ["id", "name", "description", "primaryImageB64", "secondaryImageB64s", "address", "price", "userId"],
    CampgroundAvgOrderByAggregateInput: ["price"],
    CampgroundMaxOrderByAggregateInput: ["id", "name", "description", "primaryImageB64", "address", "price", "userId"],
    CampgroundMinOrderByAggregateInput: ["id", "name", "description", "primaryImageB64", "address", "price", "userId"],
    CampgroundSumOrderByAggregateInput: ["price"],
    FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    CampgroundRelationFilter: ["is", "isNot"],
    ReviewCountOrderByAggregateInput: ["id", "rating", "body", "userId", "campgroundId"],
    ReviewAvgOrderByAggregateInput: ["rating"],
    ReviewMaxOrderByAggregateInput: ["id", "rating", "body", "userId", "campgroundId"],
    ReviewMinOrderByAggregateInput: ["id", "rating", "body", "userId", "campgroundId"],
    ReviewSumOrderByAggregateInput: ["rating"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    UserCreateNestedOneWithoutAccountsInput: ["create", "connectOrCreate", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    UserUpdateOneRequiredWithoutAccountsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutSessionsInput: ["create", "connectOrCreate", "connect"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    UserUpdateOneRequiredWithoutSessionsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    AccountCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    SessionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    CampgroundCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    ReviewCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    NullableDateTimeFieldUpdateOperationsInput: ["set"],
    AccountUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    SessionUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    CampgroundUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    ReviewUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    CampgroundCreatesecondaryImageB64sInput: ["set"],
    UserCreateNestedOneWithoutCampgroundsInput: ["create", "connectOrCreate", "connect"],
    ReviewCreateNestedManyWithoutCampgroundInput: ["create", "connectOrCreate", "createMany", "connect"],
    CampgroundUpdatesecondaryImageB64sInput: ["set", "push"],
    FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    UserUpdateOneRequiredWithoutCampgroundsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ReviewUpdateManyWithoutCampgroundNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UserCreateNestedOneWithoutReviewInput: ["create", "connectOrCreate", "connect"],
    CampgroundCreateNestedOneWithoutReviewInput: ["create", "connectOrCreate", "connect"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    UserUpdateOneRequiredWithoutReviewNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    CampgroundUpdateOneRequiredWithoutReviewNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    UserCreateWithoutAccountsInput: ["id", "name", "email", "emailVerified", "image", "sessions", "Campgrounds", "Review"],
    UserCreateOrConnectWithoutAccountsInput: ["where", "create"],
    UserUpsertWithoutAccountsInput: ["update", "create"],
    UserUpdateWithoutAccountsInput: ["id", "name", "email", "emailVerified", "image", "sessions", "Campgrounds", "Review"],
    UserCreateWithoutSessionsInput: ["id", "name", "email", "emailVerified", "image", "accounts", "Campgrounds", "Review"],
    UserCreateOrConnectWithoutSessionsInput: ["where", "create"],
    UserUpsertWithoutSessionsInput: ["update", "create"],
    UserUpdateWithoutSessionsInput: ["id", "name", "email", "emailVerified", "image", "accounts", "Campgrounds", "Review"],
    AccountCreateWithoutUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    AccountCreateOrConnectWithoutUserInput: ["where", "create"],
    AccountCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    SessionCreateWithoutUserInput: ["id", "sessionToken", "expires"],
    SessionCreateOrConnectWithoutUserInput: ["where", "create"],
    SessionCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    CampgroundCreateWithoutUserInput: ["id", "name", "description", "primaryImageB64", "secondaryImageB64s", "address", "price", "Review"],
    CampgroundCreateOrConnectWithoutUserInput: ["where", "create"],
    CampgroundCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    ReviewCreateWithoutUserInput: ["id", "rating", "body", "campground"],
    ReviewCreateOrConnectWithoutUserInput: ["where", "create"],
    ReviewCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    AccountUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    AccountUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    AccountUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    AccountScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    SessionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    SessionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    SessionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    SessionScalarWhereInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires"],
    CampgroundUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    CampgroundUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    CampgroundUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    CampgroundScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "description", "primaryImageB64", "secondaryImageB64s", "address", "price", "userId"],
    ReviewUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    ReviewUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    ReviewUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    ReviewScalarWhereInput: ["AND", "OR", "NOT", "id", "rating", "body", "userId", "campgroundId"],
    UserCreateWithoutCampgroundsInput: ["id", "name", "email", "emailVerified", "image", "accounts", "sessions", "Review"],
    UserCreateOrConnectWithoutCampgroundsInput: ["where", "create"],
    ReviewCreateWithoutCampgroundInput: ["id", "rating", "body", "user"],
    ReviewCreateOrConnectWithoutCampgroundInput: ["where", "create"],
    ReviewCreateManyCampgroundInputEnvelope: ["data", "skipDuplicates"],
    UserUpsertWithoutCampgroundsInput: ["update", "create"],
    UserUpdateWithoutCampgroundsInput: ["id", "name", "email", "emailVerified", "image", "accounts", "sessions", "Review"],
    ReviewUpsertWithWhereUniqueWithoutCampgroundInput: ["where", "update", "create"],
    ReviewUpdateWithWhereUniqueWithoutCampgroundInput: ["where", "data"],
    ReviewUpdateManyWithWhereWithoutCampgroundInput: ["where", "data"],
    UserCreateWithoutReviewInput: ["id", "name", "email", "emailVerified", "image", "accounts", "sessions", "Campgrounds"],
    UserCreateOrConnectWithoutReviewInput: ["where", "create"],
    CampgroundCreateWithoutReviewInput: ["id", "name", "description", "primaryImageB64", "secondaryImageB64s", "address", "price", "user"],
    CampgroundCreateOrConnectWithoutReviewInput: ["where", "create"],
    UserUpsertWithoutReviewInput: ["update", "create"],
    UserUpdateWithoutReviewInput: ["id", "name", "email", "emailVerified", "image", "accounts", "sessions", "Campgrounds"],
    CampgroundUpsertWithoutReviewInput: ["update", "create"],
    CampgroundUpdateWithoutReviewInput: ["id", "name", "description", "primaryImageB64", "secondaryImageB64s", "address", "price", "user"],
    AccountCreateManyUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    SessionCreateManyUserInput: ["id", "sessionToken", "expires"],
    CampgroundCreateManyUserInput: ["id", "name", "description", "primaryImageB64", "secondaryImageB64s", "address", "price"],
    ReviewCreateManyUserInput: ["id", "rating", "body", "campgroundId"],
    AccountUpdateWithoutUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    SessionUpdateWithoutUserInput: ["id", "sessionToken", "expires"],
    CampgroundUpdateWithoutUserInput: ["id", "name", "description", "primaryImageB64", "secondaryImageB64s", "address", "price", "Review"],
    ReviewUpdateWithoutUserInput: ["id", "rating", "body", "campground"],
    ReviewCreateManyCampgroundInput: ["id", "rating", "body", "userId"],
    ReviewUpdateWithoutCampgroundInput: ["id", "rating", "body", "user"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
