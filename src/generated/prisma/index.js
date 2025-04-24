
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CalculationsScalarFieldEnum = {
  user_id: 'user_id',
  country_id: 'country_id',
  factor_id: 'factor_id',
  calculation_id: 'calculation_id'
};

exports.Prisma.CompanyVehiclesScalarFieldEnum = {
  vehicle_id: 'vehicle_id',
  vehicle_type: 'vehicle_type',
  vehicle_model: 'vehicle_model',
  vehicle_mileage: 'vehicle_mileage',
  user_id: 'user_id'
};

exports.Prisma.CountriesScalarFieldEnum = {
  country_id: 'country_id',
  country_name: 'country_name'
};

exports.Prisma.ElectricityScalarFieldEnum = {
  electricity_id: 'electricity_id',
  electricity_type: 'electricity_type',
  electricity_use: 'electricity_use',
  country_id: 'country_id',
  category_id: 'category_id',
  factor_id: 'factor_id'
};

exports.Prisma.EmissionCategoriesScalarFieldEnum = {
  category_id: 'category_id',
  category_name: 'category_name'
};

exports.Prisma.EmissionFactorsScalarFieldEnum = {
  factor_id: 'factor_id',
  category_id: 'category_id',
  subcategory: 'subcategory',
  country_id: 'country_id',
  factor_num: 'factor_num'
};

exports.Prisma.EmissionsScalarFieldEnum = {
  emission_id: 'emission_id',
  user_id: 'user_id',
  country_id: 'country_id',
  category_id: 'category_id',
  emission_value: 'emission_value'
};

exports.Prisma.FuelScalarFieldEnum = {
  fuel_id: 'fuel_id',
  fuel_name: 'fuel_name',
  category_id: 'category_id'
};

exports.Prisma.TravelScalarFieldEnum = {
  travel_id: 'travel_id',
  travel_type: 'travel_type',
  travel_mileage: 'travel_mileage',
  country_id: 'country_id',
  emission_id: 'emission_id',
  factor_id: 'factor_id'
};

exports.Prisma.UsersScalarFieldEnum = {
  user_id: 'user_id',
  user_name: 'user_name',
  user_company: 'user_company',
  user_email: 'user_email',
  country_id: 'country_id'
};

exports.Prisma.Vehicle_Fuel_RelationScalarFieldEnum = {
  vehicle_id: 'vehicle_id',
  fuel_id: 'fuel_id',
  vehicle_fuel_relation_id: 'vehicle_fuel_relation_id'
};

exports.Prisma.WaterScalarFieldEnum = {
  water_id: 'water_id',
  water_use: 'water_use',
  country_id: 'country_id',
  emission_id: 'emission_id',
  factor_id: 'factor_id'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.CalculationsOrderByRelevanceFieldEnum = {
  calculation_id: 'calculation_id'
};

exports.Prisma.CompanyVehiclesOrderByRelevanceFieldEnum = {
  vehicle_type: 'vehicle_type',
  vehicle_model: 'vehicle_model'
};

exports.Prisma.CountriesOrderByRelevanceFieldEnum = {
  country_name: 'country_name'
};

exports.Prisma.ElectricityOrderByRelevanceFieldEnum = {
  electricity_type: 'electricity_type'
};

exports.Prisma.EmissionCategoriesOrderByRelevanceFieldEnum = {
  category_name: 'category_name'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.EmissionFactorsOrderByRelevanceFieldEnum = {
  subcategory: 'subcategory'
};

exports.Prisma.FuelOrderByRelevanceFieldEnum = {
  fuel_name: 'fuel_name'
};

exports.Prisma.TravelOrderByRelevanceFieldEnum = {
  travel_type: 'travel_type'
};

exports.Prisma.UsersOrderByRelevanceFieldEnum = {
  user_name: 'user_name',
  user_company: 'user_company',
  user_email: 'user_email'
};

exports.Prisma.Vehicle_Fuel_RelationOrderByRelevanceFieldEnum = {
  vehicle_fuel_relation_id: 'vehicle_fuel_relation_id'
};


exports.Prisma.ModelName = {
  Calculations: 'Calculations',
  CompanyVehicles: 'CompanyVehicles',
  Countries: 'Countries',
  Electricity: 'Electricity',
  EmissionCategories: 'EmissionCategories',
  EmissionFactors: 'EmissionFactors',
  Emissions: 'Emissions',
  Fuel: 'Fuel',
  Travel: 'Travel',
  Users: 'Users',
  Vehicle_Fuel_Relation: 'Vehicle_Fuel_Relation',
  Water: 'Water'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/tiagocuzzuolnunes/carbon-footprint-project/src/generated/prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/Users/tiagocuzzuolnunes/carbon-footprint-project/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel Calculations {\n  user_id         Int\n  country_id      Int\n  factor_id       Int\n  calculation_id  String          @id @db.VarChar(100)\n  Countries       Countries       @relation(fields: [country_id], references: [country_id], onDelete: NoAction, onUpdate: NoAction, map: \"Calculations_Countries_FK\")\n  EmissionFactors EmissionFactors @relation(fields: [factor_id], references: [factor_id], onDelete: NoAction, onUpdate: NoAction, map: \"Calculations_EmissionFactors_FK\")\n  Users           Users           @relation(fields: [user_id], references: [user_id], onDelete: NoAction, onUpdate: NoAction, map: \"Calculations_Users_FK\")\n\n  @@index([country_id], map: \"Calculations_Countries_FK\")\n  @@index([factor_id], map: \"Calculations_EmissionFactors_FK\")\n  @@index([user_id], map: \"Calculations_Users_FK\")\n}\n\nmodel CompanyVehicles {\n  vehicle_id            Int                     @id\n  vehicle_type          String                  @db.VarChar(100)\n  vehicle_model         String                  @db.VarChar(100)\n  vehicle_mileage       Int\n  user_id               Int\n  Users                 Users                   @relation(fields: [user_id], references: [user_id], onDelete: NoAction, onUpdate: NoAction, map: \"CompanyVehicles_Users_FK\")\n  Vehicle_Fuel_Relation Vehicle_Fuel_Relation[]\n\n  @@index([user_id], map: \"CompanyVehicles_Users_FK\")\n}\n\nmodel Countries {\n  country_id      Int               @id\n  country_name    String            @db.VarChar(100)\n  Calculations    Calculations[]\n  Electricity     Electricity[]\n  EmissionFactors EmissionFactors[]\n  Emissions       Emissions[]\n  Travel          Travel[]\n  Users           Users[]\n  Water           Water[]\n}\n\nmodel Electricity {\n  electricity_id     Int                @id\n  electricity_type   String             @db.VarChar(100)\n  electricity_use    Float\n  country_id         Int\n  category_id        Int\n  factor_id          Int\n  Countries          Countries          @relation(fields: [country_id], references: [country_id], onDelete: NoAction, onUpdate: NoAction, map: \"Electricity_Countries_FK\")\n  EmissionCategories EmissionCategories @relation(fields: [category_id], references: [category_id], onDelete: NoAction, onUpdate: NoAction, map: \"Electricity_EmissionCategories_FK\")\n  EmissionFactors    EmissionFactors    @relation(fields: [factor_id], references: [factor_id], onDelete: NoAction, onUpdate: NoAction, map: \"Electricity_EmissionFactors_FK\")\n\n  @@index([country_id], map: \"Electricity_Countries_FK\")\n  @@index([category_id], map: \"Electricity_EmissionCategories_FK\")\n  @@index([factor_id], map: \"Electricity_EmissionFactors_FK\")\n}\n\nmodel EmissionCategories {\n  category_id     Int               @id\n  category_name   String            @db.VarChar(100)\n  Electricity     Electricity[]\n  EmissionFactors EmissionFactors[]\n  Emissions       Emissions[]\n  Fuel            Fuel[]\n  Travel          Travel[]\n  Water           Water[]\n}\n\nmodel EmissionFactors {\n  factor_id          Int                @id\n  category_id        Int\n  subcategory        String?            @db.VarChar(100)\n  country_id         Int\n  factor_num         Decimal            @db.Decimal(10, 0)\n  Calculations       Calculations[]\n  Electricity        Electricity[]\n  Countries          Countries          @relation(fields: [country_id], references: [country_id], onDelete: NoAction, onUpdate: NoAction, map: \"EmissionFactors_Countries_FK\")\n  EmissionCategories EmissionCategories @relation(fields: [category_id], references: [category_id], onDelete: NoAction, onUpdate: NoAction, map: \"EmissionFactors_EmissionCategories_FK\")\n  Travel             Travel[]\n  Water              Water[]\n\n  @@index([country_id], map: \"EmissionFactors_Countries_FK\")\n  @@index([category_id], map: \"EmissionFactors_EmissionCategories_FK\")\n}\n\nmodel Emissions {\n  emission_id        Int                @id @default(autoincrement())\n  user_id            Int\n  country_id         Int\n  category_id        Int\n  emission_value     Decimal            @db.Decimal(10, 0)\n  Countries          Countries          @relation(fields: [country_id], references: [country_id], onDelete: NoAction, onUpdate: NoAction, map: \"Emissions_Countries_FK\")\n  EmissionCategories EmissionCategories @relation(fields: [category_id], references: [category_id], onDelete: NoAction, onUpdate: NoAction, map: \"Emissions_EmissionCategories_FK\")\n  Users              Users              @relation(fields: [user_id], references: [user_id], onDelete: NoAction, onUpdate: NoAction, map: \"Emissions_Users_FK\")\n\n  @@index([country_id], map: \"Emissions_Countries_FK\")\n  @@index([category_id], map: \"Emissions_EmissionCategories_FK\")\n  @@index([user_id], map: \"Emissions_Users_FK\")\n}\n\nmodel Fuel {\n  fuel_id               Float                   @id\n  fuel_name             String                  @db.VarChar(100)\n  category_id           Int?\n  EmissionCategories    EmissionCategories?     @relation(fields: [category_id], references: [category_id], onDelete: NoAction, onUpdate: NoAction, map: \"Fuel_EmissionCategories_FK\")\n  Vehicle_Fuel_Relation Vehicle_Fuel_Relation[]\n\n  @@index([category_id], map: \"Fuel_EmissionCategories_FK\")\n}\n\nmodel Travel {\n  travel_id          Int                @id\n  travel_type        String             @db.VarChar(100)\n  travel_mileage     Int\n  country_id         Int\n  emission_id        Int\n  factor_id          Int\n  Countries          Countries          @relation(fields: [country_id], references: [country_id], onDelete: NoAction, onUpdate: NoAction, map: \"Travel_Countries_FK\")\n  EmissionCategories EmissionCategories @relation(fields: [emission_id], references: [category_id], onDelete: NoAction, onUpdate: NoAction, map: \"Travel_EmissionCategories_FK\")\n  EmissionFactors    EmissionFactors    @relation(fields: [factor_id], references: [factor_id], onDelete: NoAction, onUpdate: NoAction, map: \"Travel_EmissionFactors_FK\")\n\n  @@index([country_id], map: \"Travel_Countries_FK\")\n  @@index([emission_id], map: \"Travel_EmissionCategories_FK\")\n  @@index([factor_id], map: \"Travel_EmissionFactors_FK\")\n}\n\nmodel Users {\n  user_id         Int               @id\n  user_name       String            @db.VarChar(100)\n  user_company    String            @db.VarChar(100)\n  user_email      String            @db.VarChar(100)\n  country_id      Int\n  Calculations    Calculations[]\n  CompanyVehicles CompanyVehicles[]\n  Emissions       Emissions[]\n  Countries       Countries         @relation(fields: [country_id], references: [country_id], onDelete: NoAction, onUpdate: NoAction, map: \"Users_Countries_FK\")\n\n  @@index([country_id], map: \"Users_Countries_FK\")\n}\n\nmodel Vehicle_Fuel_Relation {\n  vehicle_id               Int\n  fuel_id                  Float\n  vehicle_fuel_relation_id String          @id @map(\"vehicle-fuel_relation_id\") @db.VarChar(100)\n  CompanyVehicles          CompanyVehicles @relation(fields: [vehicle_id], references: [vehicle_id], onDelete: NoAction, onUpdate: NoAction, map: \"Vehicle_Fuel_Relation_CompanyVehicles_FK\")\n  Fuel                     Fuel            @relation(fields: [fuel_id], references: [fuel_id], onDelete: NoAction, onUpdate: NoAction, map: \"Vehicle_Fuel_Relation_Fuel_FK\")\n\n  @@index([vehicle_id], map: \"Vehicle_Fuel_Relation_CompanyVehicles_FK\")\n  @@index([fuel_id], map: \"Vehicle_Fuel_Relation_Fuel_FK\")\n}\n\nmodel Water {\n  water_id           Int?\n  water_use          Int                @id\n  country_id         Int\n  emission_id        Int\n  factor_id          Int\n  Countries          Countries          @relation(fields: [country_id], references: [country_id], onDelete: NoAction, onUpdate: NoAction, map: \"Water_Countries_FK\")\n  EmissionCategories EmissionCategories @relation(fields: [emission_id], references: [category_id], onDelete: NoAction, onUpdate: NoAction, map: \"Water_EmissionCategories_FK\")\n  EmissionFactors    EmissionFactors    @relation(fields: [factor_id], references: [factor_id], onDelete: NoAction, onUpdate: NoAction, map: \"Water_EmissionFactors_FK\")\n\n  @@index([country_id], map: \"Water_Countries_FK\")\n  @@index([emission_id], map: \"Water_EmissionCategories_FK\")\n  @@index([factor_id], map: \"Water_EmissionFactors_FK\")\n}\n",
  "inlineSchemaHash": "035b72b3086503ef7d7d9db2346de938ebd1345b714e7318b09af99197de5302",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/generated/prisma",
    "generated/prisma",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Calculations\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"factor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"calculation_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Countries\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Countries\",\"nativeType\":null,\"relationName\":\"CalculationsToCountries\",\"relationFromFields\":[\"country_id\"],\"relationToFields\":[\"country_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EmissionFactors\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EmissionFactors\",\"nativeType\":null,\"relationName\":\"CalculationsToEmissionFactors\",\"relationFromFields\":[\"factor_id\"],\"relationToFields\":[\"factor_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"nativeType\":null,\"relationName\":\"CalculationsToUsers\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"user_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CompanyVehicles\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"vehicle_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vehicle_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vehicle_model\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vehicle_mileage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"nativeType\":null,\"relationName\":\"CompanyVehiclesToUsers\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"user_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Vehicle_Fuel_Relation\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Vehicle_Fuel_Relation\",\"nativeType\":null,\"relationName\":\"CompanyVehiclesToVehicle_Fuel_Relation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Countries\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"country_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Calculations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Calculations\",\"nativeType\":null,\"relationName\":\"CalculationsToCountries\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Electricity\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Electricity\",\"nativeType\":null,\"relationName\":\"CountriesToElectricity\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EmissionFactors\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EmissionFactors\",\"nativeType\":null,\"relationName\":\"CountriesToEmissionFactors\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Emissions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Emissions\",\"nativeType\":null,\"relationName\":\"CountriesToEmissions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Travel\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Travel\",\"nativeType\":null,\"relationName\":\"CountriesToTravel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"nativeType\":null,\"relationName\":\"CountriesToUsers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Water\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Water\",\"nativeType\":null,\"relationName\":\"CountriesToWater\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Electricity\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"electricity_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"electricity_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"electricity_use\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"factor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Countries\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Countries\",\"nativeType\":null,\"relationName\":\"CountriesToElectricity\",\"relationFromFields\":[\"country_id\"],\"relationToFields\":[\"country_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EmissionCategories\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EmissionCategories\",\"nativeType\":null,\"relationName\":\"ElectricityToEmissionCategories\",\"relationFromFields\":[\"category_id\"],\"relationToFields\":[\"category_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EmissionFactors\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EmissionFactors\",\"nativeType\":null,\"relationName\":\"ElectricityToEmissionFactors\",\"relationFromFields\":[\"factor_id\"],\"relationToFields\":[\"factor_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EmissionCategories\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Electricity\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Electricity\",\"nativeType\":null,\"relationName\":\"ElectricityToEmissionCategories\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EmissionFactors\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EmissionFactors\",\"nativeType\":null,\"relationName\":\"EmissionCategoriesToEmissionFactors\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Emissions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Emissions\",\"nativeType\":null,\"relationName\":\"EmissionCategoriesToEmissions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Fuel\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Fuel\",\"nativeType\":null,\"relationName\":\"EmissionCategoriesToFuel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Travel\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Travel\",\"nativeType\":null,\"relationName\":\"EmissionCategoriesToTravel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Water\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Water\",\"nativeType\":null,\"relationName\":\"EmissionCategoriesToWater\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EmissionFactors\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"factor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subcategory\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"factor_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"10\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Calculations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Calculations\",\"nativeType\":null,\"relationName\":\"CalculationsToEmissionFactors\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Electricity\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Electricity\",\"nativeType\":null,\"relationName\":\"ElectricityToEmissionFactors\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Countries\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Countries\",\"nativeType\":null,\"relationName\":\"CountriesToEmissionFactors\",\"relationFromFields\":[\"country_id\"],\"relationToFields\":[\"country_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EmissionCategories\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EmissionCategories\",\"nativeType\":null,\"relationName\":\"EmissionCategoriesToEmissionFactors\",\"relationFromFields\":[\"category_id\"],\"relationToFields\":[\"category_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Travel\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Travel\",\"nativeType\":null,\"relationName\":\"EmissionFactorsToTravel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Water\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Water\",\"nativeType\":null,\"relationName\":\"EmissionFactorsToWater\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Emissions\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"emission_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emission_value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"10\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Countries\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Countries\",\"nativeType\":null,\"relationName\":\"CountriesToEmissions\",\"relationFromFields\":[\"country_id\"],\"relationToFields\":[\"country_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EmissionCategories\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EmissionCategories\",\"nativeType\":null,\"relationName\":\"EmissionCategoriesToEmissions\",\"relationFromFields\":[\"category_id\"],\"relationToFields\":[\"category_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"nativeType\":null,\"relationName\":\"EmissionsToUsers\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"user_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Fuel\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"fuel_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fuel_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EmissionCategories\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EmissionCategories\",\"nativeType\":null,\"relationName\":\"EmissionCategoriesToFuel\",\"relationFromFields\":[\"category_id\"],\"relationToFields\":[\"category_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Vehicle_Fuel_Relation\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Vehicle_Fuel_Relation\",\"nativeType\":null,\"relationName\":\"FuelToVehicle_Fuel_Relation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Travel\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"travel_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"travel_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"travel_mileage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emission_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"factor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Countries\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Countries\",\"nativeType\":null,\"relationName\":\"CountriesToTravel\",\"relationFromFields\":[\"country_id\"],\"relationToFields\":[\"country_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EmissionCategories\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EmissionCategories\",\"nativeType\":null,\"relationName\":\"EmissionCategoriesToTravel\",\"relationFromFields\":[\"emission_id\"],\"relationToFields\":[\"category_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EmissionFactors\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EmissionFactors\",\"nativeType\":null,\"relationName\":\"EmissionFactorsToTravel\",\"relationFromFields\":[\"factor_id\"],\"relationToFields\":[\"factor_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Users\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_company\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Calculations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Calculations\",\"nativeType\":null,\"relationName\":\"CalculationsToUsers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CompanyVehicles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CompanyVehicles\",\"nativeType\":null,\"relationName\":\"CompanyVehiclesToUsers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Emissions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Emissions\",\"nativeType\":null,\"relationName\":\"EmissionsToUsers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Countries\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Countries\",\"nativeType\":null,\"relationName\":\"CountriesToUsers\",\"relationFromFields\":[\"country_id\"],\"relationToFields\":[\"country_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Vehicle_Fuel_Relation\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"vehicle_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fuel_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vehicle_fuel_relation_id\",\"dbName\":\"vehicle-fuel_relation_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CompanyVehicles\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CompanyVehicles\",\"nativeType\":null,\"relationName\":\"CompanyVehiclesToVehicle_Fuel_Relation\",\"relationFromFields\":[\"vehicle_id\"],\"relationToFields\":[\"vehicle_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Fuel\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Fuel\",\"nativeType\":null,\"relationName\":\"FuelToVehicle_Fuel_Relation\",\"relationFromFields\":[\"fuel_id\"],\"relationToFields\":[\"fuel_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Water\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"water_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"water_use\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emission_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"factor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Countries\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Countries\",\"nativeType\":null,\"relationName\":\"CountriesToWater\",\"relationFromFields\":[\"country_id\"],\"relationToFields\":[\"country_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EmissionCategories\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EmissionCategories\",\"nativeType\":null,\"relationName\":\"EmissionCategoriesToWater\",\"relationFromFields\":[\"emission_id\"],\"relationToFields\":[\"category_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EmissionFactors\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EmissionFactors\",\"nativeType\":null,\"relationName\":\"EmissionFactorsToWater\",\"relationFromFields\":[\"factor_id\"],\"relationToFields\":[\"factor_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "src/generated/prisma/libquery_engine-darwin-arm64.dylib.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/generated/prisma/schema.prisma")
