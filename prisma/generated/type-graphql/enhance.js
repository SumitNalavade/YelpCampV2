"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    Campground: crudResolvers.CampgroundCrudResolver
};
const actionResolversMap = {
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
    }
};
const crudResolversInfo = {
    Campground: ["aggregateCampground", "createManyCampground", "createOneCampground", "deleteManyCampground", "deleteOneCampground", "findFirstCampground", "findFirstCampgroundOrThrow", "campgrounds", "campground", "getCampground", "groupByCampground", "updateManyCampground", "updateOneCampground", "upsertOneCampground"]
};
const argsInfo = {
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
    UpsertOneCampgroundArgs: ["where", "create", "update"]
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
    Campground: ["id", "name", "description", "averageRating", "primaryImageUrl", "secondaryImageUrls", "address", "price"]
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
    AggregateCampground: ["_count", "_avg", "_sum", "_min", "_max"],
    CampgroundGroupBy: ["id", "name", "description", "averageRating", "primaryImageUrl", "secondaryImageUrls", "address", "price", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    CampgroundCountAggregate: ["id", "name", "description", "averageRating", "primaryImageUrl", "secondaryImageUrls", "address", "price", "_all"],
    CampgroundAvgAggregate: ["averageRating", "price"],
    CampgroundSumAggregate: ["averageRating", "price"],
    CampgroundMinAggregate: ["id", "name", "description", "averageRating", "primaryImageUrl", "address", "price"],
    CampgroundMaxAggregate: ["id", "name", "description", "averageRating", "primaryImageUrl", "address", "price"]
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
    CampgroundWhereInput: ["AND", "OR", "NOT", "id", "name", "description", "averageRating", "primaryImageUrl", "secondaryImageUrls", "address", "price"],
    CampgroundOrderByWithRelationInput: ["id", "name", "description", "averageRating", "primaryImageUrl", "secondaryImageUrls", "address", "price"],
    CampgroundWhereUniqueInput: ["id"],
    CampgroundOrderByWithAggregationInput: ["id", "name", "description", "averageRating", "primaryImageUrl", "secondaryImageUrls", "address", "price", "_count", "_avg", "_max", "_min", "_sum"],
    CampgroundScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "description", "averageRating", "primaryImageUrl", "secondaryImageUrls", "address", "price"],
    CampgroundCreateInput: ["id", "name", "description", "averageRating", "primaryImageUrl", "secondaryImageUrls", "address", "price"],
    CampgroundUpdateInput: ["id", "name", "description", "averageRating", "primaryImageUrl", "secondaryImageUrls", "address", "price"],
    CampgroundCreateManyInput: ["id", "name", "description", "averageRating", "primaryImageUrl", "secondaryImageUrls", "address", "price"],
    CampgroundUpdateManyMutationInput: ["id", "name", "description", "averageRating", "primaryImageUrl", "secondaryImageUrls", "address", "price"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
    CampgroundCountOrderByAggregateInput: ["id", "name", "description", "averageRating", "primaryImageUrl", "secondaryImageUrls", "address", "price"],
    CampgroundAvgOrderByAggregateInput: ["averageRating", "price"],
    CampgroundMaxOrderByAggregateInput: ["id", "name", "description", "averageRating", "primaryImageUrl", "address", "price"],
    CampgroundMinOrderByAggregateInput: ["id", "name", "description", "averageRating", "primaryImageUrl", "address", "price"],
    CampgroundSumOrderByAggregateInput: ["averageRating", "price"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    CampgroundCreatesecondaryImageUrlsInput: ["set"],
    StringFieldUpdateOperationsInput: ["set"],
    FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    CampgroundUpdatesecondaryImageUrlsInput: ["set", "push"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"]
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
