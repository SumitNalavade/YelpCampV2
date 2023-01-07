"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CampgroundScalarFieldEnum;
(function (CampgroundScalarFieldEnum) {
    CampgroundScalarFieldEnum["id"] = "id";
    CampgroundScalarFieldEnum["name"] = "name";
    CampgroundScalarFieldEnum["description"] = "description";
    CampgroundScalarFieldEnum["imageURL"] = "imageURL";
    CampgroundScalarFieldEnum["address"] = "address";
    CampgroundScalarFieldEnum["price"] = "price";
})(CampgroundScalarFieldEnum = exports.CampgroundScalarFieldEnum || (exports.CampgroundScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CampgroundScalarFieldEnum, {
    name: "CampgroundScalarFieldEnum",
    description: undefined,
});
