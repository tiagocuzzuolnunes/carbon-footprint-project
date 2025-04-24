
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Calculations
 * 
 */
export type Calculations = $Result.DefaultSelection<Prisma.$CalculationsPayload>
/**
 * Model CompanyVehicles
 * 
 */
export type CompanyVehicles = $Result.DefaultSelection<Prisma.$CompanyVehiclesPayload>
/**
 * Model Countries
 * 
 */
export type Countries = $Result.DefaultSelection<Prisma.$CountriesPayload>
/**
 * Model Electricity
 * 
 */
export type Electricity = $Result.DefaultSelection<Prisma.$ElectricityPayload>
/**
 * Model EmissionCategories
 * 
 */
export type EmissionCategories = $Result.DefaultSelection<Prisma.$EmissionCategoriesPayload>
/**
 * Model EmissionFactors
 * 
 */
export type EmissionFactors = $Result.DefaultSelection<Prisma.$EmissionFactorsPayload>
/**
 * Model Emissions
 * 
 */
export type Emissions = $Result.DefaultSelection<Prisma.$EmissionsPayload>
/**
 * Model Fuel
 * 
 */
export type Fuel = $Result.DefaultSelection<Prisma.$FuelPayload>
/**
 * Model Travel
 * 
 */
export type Travel = $Result.DefaultSelection<Prisma.$TravelPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Vehicle_Fuel_Relation
 * 
 */
export type Vehicle_Fuel_Relation = $Result.DefaultSelection<Prisma.$Vehicle_Fuel_RelationPayload>
/**
 * Model Water
 * 
 */
export type Water = $Result.DefaultSelection<Prisma.$WaterPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Calculations
 * const calculations = await prisma.calculations.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Calculations
   * const calculations = await prisma.calculations.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.calculations`: Exposes CRUD operations for the **Calculations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Calculations
    * const calculations = await prisma.calculations.findMany()
    * ```
    */
  get calculations(): Prisma.CalculationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companyVehicles`: Exposes CRUD operations for the **CompanyVehicles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanyVehicles
    * const companyVehicles = await prisma.companyVehicles.findMany()
    * ```
    */
  get companyVehicles(): Prisma.CompanyVehiclesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.countries`: Exposes CRUD operations for the **Countries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.countries.findMany()
    * ```
    */
  get countries(): Prisma.CountriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.electricity`: Exposes CRUD operations for the **Electricity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Electricities
    * const electricities = await prisma.electricity.findMany()
    * ```
    */
  get electricity(): Prisma.ElectricityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emissionCategories`: Exposes CRUD operations for the **EmissionCategories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmissionCategories
    * const emissionCategories = await prisma.emissionCategories.findMany()
    * ```
    */
  get emissionCategories(): Prisma.EmissionCategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emissionFactors`: Exposes CRUD operations for the **EmissionFactors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmissionFactors
    * const emissionFactors = await prisma.emissionFactors.findMany()
    * ```
    */
  get emissionFactors(): Prisma.EmissionFactorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emissions`: Exposes CRUD operations for the **Emissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emissions
    * const emissions = await prisma.emissions.findMany()
    * ```
    */
  get emissions(): Prisma.EmissionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fuel`: Exposes CRUD operations for the **Fuel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fuels
    * const fuels = await prisma.fuel.findMany()
    * ```
    */
  get fuel(): Prisma.FuelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.travel`: Exposes CRUD operations for the **Travel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Travels
    * const travels = await prisma.travel.findMany()
    * ```
    */
  get travel(): Prisma.TravelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle_Fuel_Relation`: Exposes CRUD operations for the **Vehicle_Fuel_Relation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicle_Fuel_Relations
    * const vehicle_Fuel_Relations = await prisma.vehicle_Fuel_Relation.findMany()
    * ```
    */
  get vehicle_Fuel_Relation(): Prisma.Vehicle_Fuel_RelationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.water`: Exposes CRUD operations for the **Water** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Waters
    * const waters = await prisma.water.findMany()
    * ```
    */
  get water(): Prisma.WaterDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "calculations" | "companyVehicles" | "countries" | "electricity" | "emissionCategories" | "emissionFactors" | "emissions" | "fuel" | "travel" | "users" | "vehicle_Fuel_Relation" | "water"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Calculations: {
        payload: Prisma.$CalculationsPayload<ExtArgs>
        fields: Prisma.CalculationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CalculationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CalculationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationsPayload>
          }
          findFirst: {
            args: Prisma.CalculationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CalculationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationsPayload>
          }
          findMany: {
            args: Prisma.CalculationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationsPayload>[]
          }
          create: {
            args: Prisma.CalculationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationsPayload>
          }
          createMany: {
            args: Prisma.CalculationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CalculationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationsPayload>
          }
          update: {
            args: Prisma.CalculationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationsPayload>
          }
          deleteMany: {
            args: Prisma.CalculationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CalculationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CalculationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationsPayload>
          }
          aggregate: {
            args: Prisma.CalculationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCalculations>
          }
          groupBy: {
            args: Prisma.CalculationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CalculationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CalculationsCountArgs<ExtArgs>
            result: $Utils.Optional<CalculationsCountAggregateOutputType> | number
          }
        }
      }
      CompanyVehicles: {
        payload: Prisma.$CompanyVehiclesPayload<ExtArgs>
        fields: Prisma.CompanyVehiclesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyVehiclesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyVehiclesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyVehiclesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyVehiclesPayload>
          }
          findFirst: {
            args: Prisma.CompanyVehiclesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyVehiclesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyVehiclesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyVehiclesPayload>
          }
          findMany: {
            args: Prisma.CompanyVehiclesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyVehiclesPayload>[]
          }
          create: {
            args: Prisma.CompanyVehiclesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyVehiclesPayload>
          }
          createMany: {
            args: Prisma.CompanyVehiclesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CompanyVehiclesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyVehiclesPayload>
          }
          update: {
            args: Prisma.CompanyVehiclesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyVehiclesPayload>
          }
          deleteMany: {
            args: Prisma.CompanyVehiclesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyVehiclesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompanyVehiclesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyVehiclesPayload>
          }
          aggregate: {
            args: Prisma.CompanyVehiclesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanyVehicles>
          }
          groupBy: {
            args: Prisma.CompanyVehiclesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyVehiclesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyVehiclesCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyVehiclesCountAggregateOutputType> | number
          }
        }
      }
      Countries: {
        payload: Prisma.$CountriesPayload<ExtArgs>
        fields: Prisma.CountriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountriesPayload>
          }
          findFirst: {
            args: Prisma.CountriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountriesPayload>
          }
          findMany: {
            args: Prisma.CountriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountriesPayload>[]
          }
          create: {
            args: Prisma.CountriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountriesPayload>
          }
          createMany: {
            args: Prisma.CountriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CountriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountriesPayload>
          }
          update: {
            args: Prisma.CountriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountriesPayload>
          }
          deleteMany: {
            args: Prisma.CountriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CountriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountriesPayload>
          }
          aggregate: {
            args: Prisma.CountriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountries>
          }
          groupBy: {
            args: Prisma.CountriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountriesCountArgs<ExtArgs>
            result: $Utils.Optional<CountriesCountAggregateOutputType> | number
          }
        }
      }
      Electricity: {
        payload: Prisma.$ElectricityPayload<ExtArgs>
        fields: Prisma.ElectricityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ElectricityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectricityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ElectricityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectricityPayload>
          }
          findFirst: {
            args: Prisma.ElectricityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectricityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ElectricityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectricityPayload>
          }
          findMany: {
            args: Prisma.ElectricityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectricityPayload>[]
          }
          create: {
            args: Prisma.ElectricityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectricityPayload>
          }
          createMany: {
            args: Prisma.ElectricityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ElectricityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectricityPayload>
          }
          update: {
            args: Prisma.ElectricityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectricityPayload>
          }
          deleteMany: {
            args: Prisma.ElectricityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ElectricityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ElectricityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectricityPayload>
          }
          aggregate: {
            args: Prisma.ElectricityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateElectricity>
          }
          groupBy: {
            args: Prisma.ElectricityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ElectricityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ElectricityCountArgs<ExtArgs>
            result: $Utils.Optional<ElectricityCountAggregateOutputType> | number
          }
        }
      }
      EmissionCategories: {
        payload: Prisma.$EmissionCategoriesPayload<ExtArgs>
        fields: Prisma.EmissionCategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmissionCategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionCategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmissionCategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionCategoriesPayload>
          }
          findFirst: {
            args: Prisma.EmissionCategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionCategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmissionCategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionCategoriesPayload>
          }
          findMany: {
            args: Prisma.EmissionCategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionCategoriesPayload>[]
          }
          create: {
            args: Prisma.EmissionCategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionCategoriesPayload>
          }
          createMany: {
            args: Prisma.EmissionCategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmissionCategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionCategoriesPayload>
          }
          update: {
            args: Prisma.EmissionCategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionCategoriesPayload>
          }
          deleteMany: {
            args: Prisma.EmissionCategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmissionCategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmissionCategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionCategoriesPayload>
          }
          aggregate: {
            args: Prisma.EmissionCategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmissionCategories>
          }
          groupBy: {
            args: Prisma.EmissionCategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmissionCategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmissionCategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<EmissionCategoriesCountAggregateOutputType> | number
          }
        }
      }
      EmissionFactors: {
        payload: Prisma.$EmissionFactorsPayload<ExtArgs>
        fields: Prisma.EmissionFactorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmissionFactorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionFactorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmissionFactorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionFactorsPayload>
          }
          findFirst: {
            args: Prisma.EmissionFactorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionFactorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmissionFactorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionFactorsPayload>
          }
          findMany: {
            args: Prisma.EmissionFactorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionFactorsPayload>[]
          }
          create: {
            args: Prisma.EmissionFactorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionFactorsPayload>
          }
          createMany: {
            args: Prisma.EmissionFactorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmissionFactorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionFactorsPayload>
          }
          update: {
            args: Prisma.EmissionFactorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionFactorsPayload>
          }
          deleteMany: {
            args: Prisma.EmissionFactorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmissionFactorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmissionFactorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionFactorsPayload>
          }
          aggregate: {
            args: Prisma.EmissionFactorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmissionFactors>
          }
          groupBy: {
            args: Prisma.EmissionFactorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmissionFactorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmissionFactorsCountArgs<ExtArgs>
            result: $Utils.Optional<EmissionFactorsCountAggregateOutputType> | number
          }
        }
      }
      Emissions: {
        payload: Prisma.$EmissionsPayload<ExtArgs>
        fields: Prisma.EmissionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmissionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmissionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionsPayload>
          }
          findFirst: {
            args: Prisma.EmissionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmissionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionsPayload>
          }
          findMany: {
            args: Prisma.EmissionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionsPayload>[]
          }
          create: {
            args: Prisma.EmissionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionsPayload>
          }
          createMany: {
            args: Prisma.EmissionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmissionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionsPayload>
          }
          update: {
            args: Prisma.EmissionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionsPayload>
          }
          deleteMany: {
            args: Prisma.EmissionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmissionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmissionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmissionsPayload>
          }
          aggregate: {
            args: Prisma.EmissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmissions>
          }
          groupBy: {
            args: Prisma.EmissionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmissionsCountArgs<ExtArgs>
            result: $Utils.Optional<EmissionsCountAggregateOutputType> | number
          }
        }
      }
      Fuel: {
        payload: Prisma.$FuelPayload<ExtArgs>
        fields: Prisma.FuelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FuelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FuelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelPayload>
          }
          findFirst: {
            args: Prisma.FuelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FuelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelPayload>
          }
          findMany: {
            args: Prisma.FuelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelPayload>[]
          }
          create: {
            args: Prisma.FuelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelPayload>
          }
          createMany: {
            args: Prisma.FuelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FuelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelPayload>
          }
          update: {
            args: Prisma.FuelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelPayload>
          }
          deleteMany: {
            args: Prisma.FuelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FuelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FuelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelPayload>
          }
          aggregate: {
            args: Prisma.FuelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuel>
          }
          groupBy: {
            args: Prisma.FuelGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuelGroupByOutputType>[]
          }
          count: {
            args: Prisma.FuelCountArgs<ExtArgs>
            result: $Utils.Optional<FuelCountAggregateOutputType> | number
          }
        }
      }
      Travel: {
        payload: Prisma.$TravelPayload<ExtArgs>
        fields: Prisma.TravelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TravelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TravelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          findFirst: {
            args: Prisma.TravelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TravelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          findMany: {
            args: Prisma.TravelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>[]
          }
          create: {
            args: Prisma.TravelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          createMany: {
            args: Prisma.TravelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TravelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          update: {
            args: Prisma.TravelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          deleteMany: {
            args: Prisma.TravelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TravelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TravelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          aggregate: {
            args: Prisma.TravelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTravel>
          }
          groupBy: {
            args: Prisma.TravelGroupByArgs<ExtArgs>
            result: $Utils.Optional<TravelGroupByOutputType>[]
          }
          count: {
            args: Prisma.TravelCountArgs<ExtArgs>
            result: $Utils.Optional<TravelCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Vehicle_Fuel_Relation: {
        payload: Prisma.$Vehicle_Fuel_RelationPayload<ExtArgs>
        fields: Prisma.Vehicle_Fuel_RelationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Vehicle_Fuel_RelationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_Fuel_RelationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Vehicle_Fuel_RelationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_Fuel_RelationPayload>
          }
          findFirst: {
            args: Prisma.Vehicle_Fuel_RelationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_Fuel_RelationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Vehicle_Fuel_RelationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_Fuel_RelationPayload>
          }
          findMany: {
            args: Prisma.Vehicle_Fuel_RelationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_Fuel_RelationPayload>[]
          }
          create: {
            args: Prisma.Vehicle_Fuel_RelationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_Fuel_RelationPayload>
          }
          createMany: {
            args: Prisma.Vehicle_Fuel_RelationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Vehicle_Fuel_RelationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_Fuel_RelationPayload>
          }
          update: {
            args: Prisma.Vehicle_Fuel_RelationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_Fuel_RelationPayload>
          }
          deleteMany: {
            args: Prisma.Vehicle_Fuel_RelationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Vehicle_Fuel_RelationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Vehicle_Fuel_RelationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_Fuel_RelationPayload>
          }
          aggregate: {
            args: Prisma.Vehicle_Fuel_RelationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle_Fuel_Relation>
          }
          groupBy: {
            args: Prisma.Vehicle_Fuel_RelationGroupByArgs<ExtArgs>
            result: $Utils.Optional<Vehicle_Fuel_RelationGroupByOutputType>[]
          }
          count: {
            args: Prisma.Vehicle_Fuel_RelationCountArgs<ExtArgs>
            result: $Utils.Optional<Vehicle_Fuel_RelationCountAggregateOutputType> | number
          }
        }
      }
      Water: {
        payload: Prisma.$WaterPayload<ExtArgs>
        fields: Prisma.WaterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterPayload>
          }
          findFirst: {
            args: Prisma.WaterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterPayload>
          }
          findMany: {
            args: Prisma.WaterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterPayload>[]
          }
          create: {
            args: Prisma.WaterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterPayload>
          }
          createMany: {
            args: Prisma.WaterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WaterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterPayload>
          }
          update: {
            args: Prisma.WaterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterPayload>
          }
          deleteMany: {
            args: Prisma.WaterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WaterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WaterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterPayload>
          }
          aggregate: {
            args: Prisma.WaterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWater>
          }
          groupBy: {
            args: Prisma.WaterGroupByArgs<ExtArgs>
            result: $Utils.Optional<WaterGroupByOutputType>[]
          }
          count: {
            args: Prisma.WaterCountArgs<ExtArgs>
            result: $Utils.Optional<WaterCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    calculations?: CalculationsOmit
    companyVehicles?: CompanyVehiclesOmit
    countries?: CountriesOmit
    electricity?: ElectricityOmit
    emissionCategories?: EmissionCategoriesOmit
    emissionFactors?: EmissionFactorsOmit
    emissions?: EmissionsOmit
    fuel?: FuelOmit
    travel?: TravelOmit
    users?: UsersOmit
    vehicle_Fuel_Relation?: Vehicle_Fuel_RelationOmit
    water?: WaterOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompanyVehiclesCountOutputType
   */

  export type CompanyVehiclesCountOutputType = {
    Vehicle_Fuel_Relation: number
  }

  export type CompanyVehiclesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Vehicle_Fuel_Relation?: boolean | CompanyVehiclesCountOutputTypeCountVehicle_Fuel_RelationArgs
  }

  // Custom InputTypes
  /**
   * CompanyVehiclesCountOutputType without action
   */
  export type CompanyVehiclesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyVehiclesCountOutputType
     */
    select?: CompanyVehiclesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyVehiclesCountOutputType without action
   */
  export type CompanyVehiclesCountOutputTypeCountVehicle_Fuel_RelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Vehicle_Fuel_RelationWhereInput
  }


  /**
   * Count Type CountriesCountOutputType
   */

  export type CountriesCountOutputType = {
    Calculations: number
    Electricity: number
    EmissionFactors: number
    Emissions: number
    Travel: number
    Users: number
    Water: number
  }

  export type CountriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Calculations?: boolean | CountriesCountOutputTypeCountCalculationsArgs
    Electricity?: boolean | CountriesCountOutputTypeCountElectricityArgs
    EmissionFactors?: boolean | CountriesCountOutputTypeCountEmissionFactorsArgs
    Emissions?: boolean | CountriesCountOutputTypeCountEmissionsArgs
    Travel?: boolean | CountriesCountOutputTypeCountTravelArgs
    Users?: boolean | CountriesCountOutputTypeCountUsersArgs
    Water?: boolean | CountriesCountOutputTypeCountWaterArgs
  }

  // Custom InputTypes
  /**
   * CountriesCountOutputType without action
   */
  export type CountriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountriesCountOutputType
     */
    select?: CountriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountriesCountOutputType without action
   */
  export type CountriesCountOutputTypeCountCalculationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalculationsWhereInput
  }

  /**
   * CountriesCountOutputType without action
   */
  export type CountriesCountOutputTypeCountElectricityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElectricityWhereInput
  }

  /**
   * CountriesCountOutputType without action
   */
  export type CountriesCountOutputTypeCountEmissionFactorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmissionFactorsWhereInput
  }

  /**
   * CountriesCountOutputType without action
   */
  export type CountriesCountOutputTypeCountEmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmissionsWhereInput
  }

  /**
   * CountriesCountOutputType without action
   */
  export type CountriesCountOutputTypeCountTravelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelWhereInput
  }

  /**
   * CountriesCountOutputType without action
   */
  export type CountriesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }

  /**
   * CountriesCountOutputType without action
   */
  export type CountriesCountOutputTypeCountWaterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaterWhereInput
  }


  /**
   * Count Type EmissionCategoriesCountOutputType
   */

  export type EmissionCategoriesCountOutputType = {
    Electricity: number
    EmissionFactors: number
    Emissions: number
    Fuel: number
    Travel: number
    Water: number
  }

  export type EmissionCategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Electricity?: boolean | EmissionCategoriesCountOutputTypeCountElectricityArgs
    EmissionFactors?: boolean | EmissionCategoriesCountOutputTypeCountEmissionFactorsArgs
    Emissions?: boolean | EmissionCategoriesCountOutputTypeCountEmissionsArgs
    Fuel?: boolean | EmissionCategoriesCountOutputTypeCountFuelArgs
    Travel?: boolean | EmissionCategoriesCountOutputTypeCountTravelArgs
    Water?: boolean | EmissionCategoriesCountOutputTypeCountWaterArgs
  }

  // Custom InputTypes
  /**
   * EmissionCategoriesCountOutputType without action
   */
  export type EmissionCategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionCategoriesCountOutputType
     */
    select?: EmissionCategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmissionCategoriesCountOutputType without action
   */
  export type EmissionCategoriesCountOutputTypeCountElectricityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElectricityWhereInput
  }

  /**
   * EmissionCategoriesCountOutputType without action
   */
  export type EmissionCategoriesCountOutputTypeCountEmissionFactorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmissionFactorsWhereInput
  }

  /**
   * EmissionCategoriesCountOutputType without action
   */
  export type EmissionCategoriesCountOutputTypeCountEmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmissionsWhereInput
  }

  /**
   * EmissionCategoriesCountOutputType without action
   */
  export type EmissionCategoriesCountOutputTypeCountFuelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuelWhereInput
  }

  /**
   * EmissionCategoriesCountOutputType without action
   */
  export type EmissionCategoriesCountOutputTypeCountTravelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelWhereInput
  }

  /**
   * EmissionCategoriesCountOutputType without action
   */
  export type EmissionCategoriesCountOutputTypeCountWaterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaterWhereInput
  }


  /**
   * Count Type EmissionFactorsCountOutputType
   */

  export type EmissionFactorsCountOutputType = {
    Calculations: number
    Electricity: number
    Travel: number
    Water: number
  }

  export type EmissionFactorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Calculations?: boolean | EmissionFactorsCountOutputTypeCountCalculationsArgs
    Electricity?: boolean | EmissionFactorsCountOutputTypeCountElectricityArgs
    Travel?: boolean | EmissionFactorsCountOutputTypeCountTravelArgs
    Water?: boolean | EmissionFactorsCountOutputTypeCountWaterArgs
  }

  // Custom InputTypes
  /**
   * EmissionFactorsCountOutputType without action
   */
  export type EmissionFactorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionFactorsCountOutputType
     */
    select?: EmissionFactorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmissionFactorsCountOutputType without action
   */
  export type EmissionFactorsCountOutputTypeCountCalculationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalculationsWhereInput
  }

  /**
   * EmissionFactorsCountOutputType without action
   */
  export type EmissionFactorsCountOutputTypeCountElectricityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElectricityWhereInput
  }

  /**
   * EmissionFactorsCountOutputType without action
   */
  export type EmissionFactorsCountOutputTypeCountTravelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelWhereInput
  }

  /**
   * EmissionFactorsCountOutputType without action
   */
  export type EmissionFactorsCountOutputTypeCountWaterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaterWhereInput
  }


  /**
   * Count Type FuelCountOutputType
   */

  export type FuelCountOutputType = {
    Vehicle_Fuel_Relation: number
  }

  export type FuelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Vehicle_Fuel_Relation?: boolean | FuelCountOutputTypeCountVehicle_Fuel_RelationArgs
  }

  // Custom InputTypes
  /**
   * FuelCountOutputType without action
   */
  export type FuelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelCountOutputType
     */
    select?: FuelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FuelCountOutputType without action
   */
  export type FuelCountOutputTypeCountVehicle_Fuel_RelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Vehicle_Fuel_RelationWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    Calculations: number
    CompanyVehicles: number
    Emissions: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Calculations?: boolean | UsersCountOutputTypeCountCalculationsArgs
    CompanyVehicles?: boolean | UsersCountOutputTypeCountCompanyVehiclesArgs
    Emissions?: boolean | UsersCountOutputTypeCountEmissionsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCalculationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalculationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCompanyVehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyVehiclesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountEmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmissionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Calculations
   */

  export type AggregateCalculations = {
    _count: CalculationsCountAggregateOutputType | null
    _avg: CalculationsAvgAggregateOutputType | null
    _sum: CalculationsSumAggregateOutputType | null
    _min: CalculationsMinAggregateOutputType | null
    _max: CalculationsMaxAggregateOutputType | null
  }

  export type CalculationsAvgAggregateOutputType = {
    user_id: number | null
    country_id: number | null
    factor_id: number | null
  }

  export type CalculationsSumAggregateOutputType = {
    user_id: number | null
    country_id: number | null
    factor_id: number | null
  }

  export type CalculationsMinAggregateOutputType = {
    user_id: number | null
    country_id: number | null
    factor_id: number | null
    calculation_id: string | null
  }

  export type CalculationsMaxAggregateOutputType = {
    user_id: number | null
    country_id: number | null
    factor_id: number | null
    calculation_id: string | null
  }

  export type CalculationsCountAggregateOutputType = {
    user_id: number
    country_id: number
    factor_id: number
    calculation_id: number
    _all: number
  }


  export type CalculationsAvgAggregateInputType = {
    user_id?: true
    country_id?: true
    factor_id?: true
  }

  export type CalculationsSumAggregateInputType = {
    user_id?: true
    country_id?: true
    factor_id?: true
  }

  export type CalculationsMinAggregateInputType = {
    user_id?: true
    country_id?: true
    factor_id?: true
    calculation_id?: true
  }

  export type CalculationsMaxAggregateInputType = {
    user_id?: true
    country_id?: true
    factor_id?: true
    calculation_id?: true
  }

  export type CalculationsCountAggregateInputType = {
    user_id?: true
    country_id?: true
    factor_id?: true
    calculation_id?: true
    _all?: true
  }

  export type CalculationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Calculations to aggregate.
     */
    where?: CalculationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calculations to fetch.
     */
    orderBy?: CalculationsOrderByWithRelationInput | CalculationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CalculationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calculations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calculations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Calculations
    **/
    _count?: true | CalculationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CalculationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CalculationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalculationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalculationsMaxAggregateInputType
  }

  export type GetCalculationsAggregateType<T extends CalculationsAggregateArgs> = {
        [P in keyof T & keyof AggregateCalculations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalculations[P]>
      : GetScalarType<T[P], AggregateCalculations[P]>
  }




  export type CalculationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalculationsWhereInput
    orderBy?: CalculationsOrderByWithAggregationInput | CalculationsOrderByWithAggregationInput[]
    by: CalculationsScalarFieldEnum[] | CalculationsScalarFieldEnum
    having?: CalculationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalculationsCountAggregateInputType | true
    _avg?: CalculationsAvgAggregateInputType
    _sum?: CalculationsSumAggregateInputType
    _min?: CalculationsMinAggregateInputType
    _max?: CalculationsMaxAggregateInputType
  }

  export type CalculationsGroupByOutputType = {
    user_id: number
    country_id: number
    factor_id: number
    calculation_id: string
    _count: CalculationsCountAggregateOutputType | null
    _avg: CalculationsAvgAggregateOutputType | null
    _sum: CalculationsSumAggregateOutputType | null
    _min: CalculationsMinAggregateOutputType | null
    _max: CalculationsMaxAggregateOutputType | null
  }

  type GetCalculationsGroupByPayload<T extends CalculationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CalculationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalculationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalculationsGroupByOutputType[P]>
            : GetScalarType<T[P], CalculationsGroupByOutputType[P]>
        }
      >
    >


  export type CalculationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    country_id?: boolean
    factor_id?: boolean
    calculation_id?: boolean
    Countries?: boolean | CountriesDefaultArgs<ExtArgs>
    EmissionFactors?: boolean | EmissionFactorsDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calculations"]>



  export type CalculationsSelectScalar = {
    user_id?: boolean
    country_id?: boolean
    factor_id?: boolean
    calculation_id?: boolean
  }

  export type CalculationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "country_id" | "factor_id" | "calculation_id", ExtArgs["result"]["calculations"]>
  export type CalculationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Countries?: boolean | CountriesDefaultArgs<ExtArgs>
    EmissionFactors?: boolean | EmissionFactorsDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $CalculationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Calculations"
    objects: {
      Countries: Prisma.$CountriesPayload<ExtArgs>
      EmissionFactors: Prisma.$EmissionFactorsPayload<ExtArgs>
      Users: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      country_id: number
      factor_id: number
      calculation_id: string
    }, ExtArgs["result"]["calculations"]>
    composites: {}
  }

  type CalculationsGetPayload<S extends boolean | null | undefined | CalculationsDefaultArgs> = $Result.GetResult<Prisma.$CalculationsPayload, S>

  type CalculationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CalculationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CalculationsCountAggregateInputType | true
    }

  export interface CalculationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Calculations'], meta: { name: 'Calculations' } }
    /**
     * Find zero or one Calculations that matches the filter.
     * @param {CalculationsFindUniqueArgs} args - Arguments to find a Calculations
     * @example
     * // Get one Calculations
     * const calculations = await prisma.calculations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CalculationsFindUniqueArgs>(args: SelectSubset<T, CalculationsFindUniqueArgs<ExtArgs>>): Prisma__CalculationsClient<$Result.GetResult<Prisma.$CalculationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Calculations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CalculationsFindUniqueOrThrowArgs} args - Arguments to find a Calculations
     * @example
     * // Get one Calculations
     * const calculations = await prisma.calculations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CalculationsFindUniqueOrThrowArgs>(args: SelectSubset<T, CalculationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CalculationsClient<$Result.GetResult<Prisma.$CalculationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Calculations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationsFindFirstArgs} args - Arguments to find a Calculations
     * @example
     * // Get one Calculations
     * const calculations = await prisma.calculations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CalculationsFindFirstArgs>(args?: SelectSubset<T, CalculationsFindFirstArgs<ExtArgs>>): Prisma__CalculationsClient<$Result.GetResult<Prisma.$CalculationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Calculations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationsFindFirstOrThrowArgs} args - Arguments to find a Calculations
     * @example
     * // Get one Calculations
     * const calculations = await prisma.calculations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CalculationsFindFirstOrThrowArgs>(args?: SelectSubset<T, CalculationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CalculationsClient<$Result.GetResult<Prisma.$CalculationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Calculations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Calculations
     * const calculations = await prisma.calculations.findMany()
     * 
     * // Get first 10 Calculations
     * const calculations = await prisma.calculations.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const calculationsWithUser_idOnly = await prisma.calculations.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends CalculationsFindManyArgs>(args?: SelectSubset<T, CalculationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalculationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Calculations.
     * @param {CalculationsCreateArgs} args - Arguments to create a Calculations.
     * @example
     * // Create one Calculations
     * const Calculations = await prisma.calculations.create({
     *   data: {
     *     // ... data to create a Calculations
     *   }
     * })
     * 
     */
    create<T extends CalculationsCreateArgs>(args: SelectSubset<T, CalculationsCreateArgs<ExtArgs>>): Prisma__CalculationsClient<$Result.GetResult<Prisma.$CalculationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Calculations.
     * @param {CalculationsCreateManyArgs} args - Arguments to create many Calculations.
     * @example
     * // Create many Calculations
     * const calculations = await prisma.calculations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CalculationsCreateManyArgs>(args?: SelectSubset<T, CalculationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Calculations.
     * @param {CalculationsDeleteArgs} args - Arguments to delete one Calculations.
     * @example
     * // Delete one Calculations
     * const Calculations = await prisma.calculations.delete({
     *   where: {
     *     // ... filter to delete one Calculations
     *   }
     * })
     * 
     */
    delete<T extends CalculationsDeleteArgs>(args: SelectSubset<T, CalculationsDeleteArgs<ExtArgs>>): Prisma__CalculationsClient<$Result.GetResult<Prisma.$CalculationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Calculations.
     * @param {CalculationsUpdateArgs} args - Arguments to update one Calculations.
     * @example
     * // Update one Calculations
     * const calculations = await prisma.calculations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CalculationsUpdateArgs>(args: SelectSubset<T, CalculationsUpdateArgs<ExtArgs>>): Prisma__CalculationsClient<$Result.GetResult<Prisma.$CalculationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Calculations.
     * @param {CalculationsDeleteManyArgs} args - Arguments to filter Calculations to delete.
     * @example
     * // Delete a few Calculations
     * const { count } = await prisma.calculations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CalculationsDeleteManyArgs>(args?: SelectSubset<T, CalculationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calculations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Calculations
     * const calculations = await prisma.calculations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CalculationsUpdateManyArgs>(args: SelectSubset<T, CalculationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Calculations.
     * @param {CalculationsUpsertArgs} args - Arguments to update or create a Calculations.
     * @example
     * // Update or create a Calculations
     * const calculations = await prisma.calculations.upsert({
     *   create: {
     *     // ... data to create a Calculations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Calculations we want to update
     *   }
     * })
     */
    upsert<T extends CalculationsUpsertArgs>(args: SelectSubset<T, CalculationsUpsertArgs<ExtArgs>>): Prisma__CalculationsClient<$Result.GetResult<Prisma.$CalculationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Calculations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationsCountArgs} args - Arguments to filter Calculations to count.
     * @example
     * // Count the number of Calculations
     * const count = await prisma.calculations.count({
     *   where: {
     *     // ... the filter for the Calculations we want to count
     *   }
     * })
    **/
    count<T extends CalculationsCountArgs>(
      args?: Subset<T, CalculationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalculationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Calculations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CalculationsAggregateArgs>(args: Subset<T, CalculationsAggregateArgs>): Prisma.PrismaPromise<GetCalculationsAggregateType<T>>

    /**
     * Group by Calculations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CalculationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CalculationsGroupByArgs['orderBy'] }
        : { orderBy?: CalculationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CalculationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalculationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Calculations model
   */
  readonly fields: CalculationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Calculations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CalculationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Countries<T extends CountriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountriesDefaultArgs<ExtArgs>>): Prisma__CountriesClient<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    EmissionFactors<T extends EmissionFactorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmissionFactorsDefaultArgs<ExtArgs>>): Prisma__EmissionFactorsClient<$Result.GetResult<Prisma.$EmissionFactorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Calculations model
   */
  interface CalculationsFieldRefs {
    readonly user_id: FieldRef<"Calculations", 'Int'>
    readonly country_id: FieldRef<"Calculations", 'Int'>
    readonly factor_id: FieldRef<"Calculations", 'Int'>
    readonly calculation_id: FieldRef<"Calculations", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Calculations findUnique
   */
  export type CalculationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calculations
     */
    select?: CalculationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calculations
     */
    omit?: CalculationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationsInclude<ExtArgs> | null
    /**
     * Filter, which Calculations to fetch.
     */
    where: CalculationsWhereUniqueInput
  }

  /**
   * Calculations findUniqueOrThrow
   */
  export type CalculationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calculations
     */
    select?: CalculationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calculations
     */
    omit?: CalculationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationsInclude<ExtArgs> | null
    /**
     * Filter, which Calculations to fetch.
     */
    where: CalculationsWhereUniqueInput
  }

  /**
   * Calculations findFirst
   */
  export type CalculationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calculations
     */
    select?: CalculationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calculations
     */
    omit?: CalculationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationsInclude<ExtArgs> | null
    /**
     * Filter, which Calculations to fetch.
     */
    where?: CalculationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calculations to fetch.
     */
    orderBy?: CalculationsOrderByWithRelationInput | CalculationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Calculations.
     */
    cursor?: CalculationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calculations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calculations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Calculations.
     */
    distinct?: CalculationsScalarFieldEnum | CalculationsScalarFieldEnum[]
  }

  /**
   * Calculations findFirstOrThrow
   */
  export type CalculationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calculations
     */
    select?: CalculationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calculations
     */
    omit?: CalculationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationsInclude<ExtArgs> | null
    /**
     * Filter, which Calculations to fetch.
     */
    where?: CalculationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calculations to fetch.
     */
    orderBy?: CalculationsOrderByWithRelationInput | CalculationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Calculations.
     */
    cursor?: CalculationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calculations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calculations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Calculations.
     */
    distinct?: CalculationsScalarFieldEnum | CalculationsScalarFieldEnum[]
  }

  /**
   * Calculations findMany
   */
  export type CalculationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calculations
     */
    select?: CalculationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calculations
     */
    omit?: CalculationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationsInclude<ExtArgs> | null
    /**
     * Filter, which Calculations to fetch.
     */
    where?: CalculationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calculations to fetch.
     */
    orderBy?: CalculationsOrderByWithRelationInput | CalculationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Calculations.
     */
    cursor?: CalculationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calculations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calculations.
     */
    skip?: number
    distinct?: CalculationsScalarFieldEnum | CalculationsScalarFieldEnum[]
  }

  /**
   * Calculations create
   */
  export type CalculationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calculations
     */
    select?: CalculationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calculations
     */
    omit?: CalculationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Calculations.
     */
    data: XOR<CalculationsCreateInput, CalculationsUncheckedCreateInput>
  }

  /**
   * Calculations createMany
   */
  export type CalculationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Calculations.
     */
    data: CalculationsCreateManyInput | CalculationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Calculations update
   */
  export type CalculationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calculations
     */
    select?: CalculationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calculations
     */
    omit?: CalculationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Calculations.
     */
    data: XOR<CalculationsUpdateInput, CalculationsUncheckedUpdateInput>
    /**
     * Choose, which Calculations to update.
     */
    where: CalculationsWhereUniqueInput
  }

  /**
   * Calculations updateMany
   */
  export type CalculationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Calculations.
     */
    data: XOR<CalculationsUpdateManyMutationInput, CalculationsUncheckedUpdateManyInput>
    /**
     * Filter which Calculations to update
     */
    where?: CalculationsWhereInput
    /**
     * Limit how many Calculations to update.
     */
    limit?: number
  }

  /**
   * Calculations upsert
   */
  export type CalculationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calculations
     */
    select?: CalculationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calculations
     */
    omit?: CalculationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Calculations to update in case it exists.
     */
    where: CalculationsWhereUniqueInput
    /**
     * In case the Calculations found by the `where` argument doesn't exist, create a new Calculations with this data.
     */
    create: XOR<CalculationsCreateInput, CalculationsUncheckedCreateInput>
    /**
     * In case the Calculations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CalculationsUpdateInput, CalculationsUncheckedUpdateInput>
  }

  /**
   * Calculations delete
   */
  export type CalculationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calculations
     */
    select?: CalculationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calculations
     */
    omit?: CalculationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationsInclude<ExtArgs> | null
    /**
     * Filter which Calculations to delete.
     */
    where: CalculationsWhereUniqueInput
  }

  /**
   * Calculations deleteMany
   */
  export type CalculationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Calculations to delete
     */
    where?: CalculationsWhereInput
    /**
     * Limit how many Calculations to delete.
     */
    limit?: number
  }

  /**
   * Calculations without action
   */
  export type CalculationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calculations
     */
    select?: CalculationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calculations
     */
    omit?: CalculationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationsInclude<ExtArgs> | null
  }


  /**
   * Model CompanyVehicles
   */

  export type AggregateCompanyVehicles = {
    _count: CompanyVehiclesCountAggregateOutputType | null
    _avg: CompanyVehiclesAvgAggregateOutputType | null
    _sum: CompanyVehiclesSumAggregateOutputType | null
    _min: CompanyVehiclesMinAggregateOutputType | null
    _max: CompanyVehiclesMaxAggregateOutputType | null
  }

  export type CompanyVehiclesAvgAggregateOutputType = {
    vehicle_id: number | null
    vehicle_mileage: number | null
    user_id: number | null
  }

  export type CompanyVehiclesSumAggregateOutputType = {
    vehicle_id: number | null
    vehicle_mileage: number | null
    user_id: number | null
  }

  export type CompanyVehiclesMinAggregateOutputType = {
    vehicle_id: number | null
    vehicle_type: string | null
    vehicle_model: string | null
    vehicle_mileage: number | null
    user_id: number | null
  }

  export type CompanyVehiclesMaxAggregateOutputType = {
    vehicle_id: number | null
    vehicle_type: string | null
    vehicle_model: string | null
    vehicle_mileage: number | null
    user_id: number | null
  }

  export type CompanyVehiclesCountAggregateOutputType = {
    vehicle_id: number
    vehicle_type: number
    vehicle_model: number
    vehicle_mileage: number
    user_id: number
    _all: number
  }


  export type CompanyVehiclesAvgAggregateInputType = {
    vehicle_id?: true
    vehicle_mileage?: true
    user_id?: true
  }

  export type CompanyVehiclesSumAggregateInputType = {
    vehicle_id?: true
    vehicle_mileage?: true
    user_id?: true
  }

  export type CompanyVehiclesMinAggregateInputType = {
    vehicle_id?: true
    vehicle_type?: true
    vehicle_model?: true
    vehicle_mileage?: true
    user_id?: true
  }

  export type CompanyVehiclesMaxAggregateInputType = {
    vehicle_id?: true
    vehicle_type?: true
    vehicle_model?: true
    vehicle_mileage?: true
    user_id?: true
  }

  export type CompanyVehiclesCountAggregateInputType = {
    vehicle_id?: true
    vehicle_type?: true
    vehicle_model?: true
    vehicle_mileage?: true
    user_id?: true
    _all?: true
  }

  export type CompanyVehiclesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyVehicles to aggregate.
     */
    where?: CompanyVehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyVehicles to fetch.
     */
    orderBy?: CompanyVehiclesOrderByWithRelationInput | CompanyVehiclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyVehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyVehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyVehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanyVehicles
    **/
    _count?: true | CompanyVehiclesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyVehiclesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanyVehiclesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyVehiclesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyVehiclesMaxAggregateInputType
  }

  export type GetCompanyVehiclesAggregateType<T extends CompanyVehiclesAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanyVehicles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanyVehicles[P]>
      : GetScalarType<T[P], AggregateCompanyVehicles[P]>
  }




  export type CompanyVehiclesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyVehiclesWhereInput
    orderBy?: CompanyVehiclesOrderByWithAggregationInput | CompanyVehiclesOrderByWithAggregationInput[]
    by: CompanyVehiclesScalarFieldEnum[] | CompanyVehiclesScalarFieldEnum
    having?: CompanyVehiclesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyVehiclesCountAggregateInputType | true
    _avg?: CompanyVehiclesAvgAggregateInputType
    _sum?: CompanyVehiclesSumAggregateInputType
    _min?: CompanyVehiclesMinAggregateInputType
    _max?: CompanyVehiclesMaxAggregateInputType
  }

  export type CompanyVehiclesGroupByOutputType = {
    vehicle_id: number
    vehicle_type: string
    vehicle_model: string
    vehicle_mileage: number
    user_id: number
    _count: CompanyVehiclesCountAggregateOutputType | null
    _avg: CompanyVehiclesAvgAggregateOutputType | null
    _sum: CompanyVehiclesSumAggregateOutputType | null
    _min: CompanyVehiclesMinAggregateOutputType | null
    _max: CompanyVehiclesMaxAggregateOutputType | null
  }

  type GetCompanyVehiclesGroupByPayload<T extends CompanyVehiclesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyVehiclesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyVehiclesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyVehiclesGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyVehiclesGroupByOutputType[P]>
        }
      >
    >


  export type CompanyVehiclesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vehicle_id?: boolean
    vehicle_type?: boolean
    vehicle_model?: boolean
    vehicle_mileage?: boolean
    user_id?: boolean
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    Vehicle_Fuel_Relation?: boolean | CompanyVehicles$Vehicle_Fuel_RelationArgs<ExtArgs>
    _count?: boolean | CompanyVehiclesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyVehicles"]>



  export type CompanyVehiclesSelectScalar = {
    vehicle_id?: boolean
    vehicle_type?: boolean
    vehicle_model?: boolean
    vehicle_mileage?: boolean
    user_id?: boolean
  }

  export type CompanyVehiclesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"vehicle_id" | "vehicle_type" | "vehicle_model" | "vehicle_mileage" | "user_id", ExtArgs["result"]["companyVehicles"]>
  export type CompanyVehiclesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    Vehicle_Fuel_Relation?: boolean | CompanyVehicles$Vehicle_Fuel_RelationArgs<ExtArgs>
    _count?: boolean | CompanyVehiclesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CompanyVehiclesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanyVehicles"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs>
      Vehicle_Fuel_Relation: Prisma.$Vehicle_Fuel_RelationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      vehicle_id: number
      vehicle_type: string
      vehicle_model: string
      vehicle_mileage: number
      user_id: number
    }, ExtArgs["result"]["companyVehicles"]>
    composites: {}
  }

  type CompanyVehiclesGetPayload<S extends boolean | null | undefined | CompanyVehiclesDefaultArgs> = $Result.GetResult<Prisma.$CompanyVehiclesPayload, S>

  type CompanyVehiclesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyVehiclesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyVehiclesCountAggregateInputType | true
    }

  export interface CompanyVehiclesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanyVehicles'], meta: { name: 'CompanyVehicles' } }
    /**
     * Find zero or one CompanyVehicles that matches the filter.
     * @param {CompanyVehiclesFindUniqueArgs} args - Arguments to find a CompanyVehicles
     * @example
     * // Get one CompanyVehicles
     * const companyVehicles = await prisma.companyVehicles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyVehiclesFindUniqueArgs>(args: SelectSubset<T, CompanyVehiclesFindUniqueArgs<ExtArgs>>): Prisma__CompanyVehiclesClient<$Result.GetResult<Prisma.$CompanyVehiclesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompanyVehicles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyVehiclesFindUniqueOrThrowArgs} args - Arguments to find a CompanyVehicles
     * @example
     * // Get one CompanyVehicles
     * const companyVehicles = await prisma.companyVehicles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyVehiclesFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyVehiclesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyVehiclesClient<$Result.GetResult<Prisma.$CompanyVehiclesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyVehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyVehiclesFindFirstArgs} args - Arguments to find a CompanyVehicles
     * @example
     * // Get one CompanyVehicles
     * const companyVehicles = await prisma.companyVehicles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyVehiclesFindFirstArgs>(args?: SelectSubset<T, CompanyVehiclesFindFirstArgs<ExtArgs>>): Prisma__CompanyVehiclesClient<$Result.GetResult<Prisma.$CompanyVehiclesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyVehicles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyVehiclesFindFirstOrThrowArgs} args - Arguments to find a CompanyVehicles
     * @example
     * // Get one CompanyVehicles
     * const companyVehicles = await prisma.companyVehicles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyVehiclesFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyVehiclesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyVehiclesClient<$Result.GetResult<Prisma.$CompanyVehiclesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompanyVehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyVehiclesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanyVehicles
     * const companyVehicles = await prisma.companyVehicles.findMany()
     * 
     * // Get first 10 CompanyVehicles
     * const companyVehicles = await prisma.companyVehicles.findMany({ take: 10 })
     * 
     * // Only select the `vehicle_id`
     * const companyVehiclesWithVehicle_idOnly = await prisma.companyVehicles.findMany({ select: { vehicle_id: true } })
     * 
     */
    findMany<T extends CompanyVehiclesFindManyArgs>(args?: SelectSubset<T, CompanyVehiclesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyVehiclesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompanyVehicles.
     * @param {CompanyVehiclesCreateArgs} args - Arguments to create a CompanyVehicles.
     * @example
     * // Create one CompanyVehicles
     * const CompanyVehicles = await prisma.companyVehicles.create({
     *   data: {
     *     // ... data to create a CompanyVehicles
     *   }
     * })
     * 
     */
    create<T extends CompanyVehiclesCreateArgs>(args: SelectSubset<T, CompanyVehiclesCreateArgs<ExtArgs>>): Prisma__CompanyVehiclesClient<$Result.GetResult<Prisma.$CompanyVehiclesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompanyVehicles.
     * @param {CompanyVehiclesCreateManyArgs} args - Arguments to create many CompanyVehicles.
     * @example
     * // Create many CompanyVehicles
     * const companyVehicles = await prisma.companyVehicles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyVehiclesCreateManyArgs>(args?: SelectSubset<T, CompanyVehiclesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CompanyVehicles.
     * @param {CompanyVehiclesDeleteArgs} args - Arguments to delete one CompanyVehicles.
     * @example
     * // Delete one CompanyVehicles
     * const CompanyVehicles = await prisma.companyVehicles.delete({
     *   where: {
     *     // ... filter to delete one CompanyVehicles
     *   }
     * })
     * 
     */
    delete<T extends CompanyVehiclesDeleteArgs>(args: SelectSubset<T, CompanyVehiclesDeleteArgs<ExtArgs>>): Prisma__CompanyVehiclesClient<$Result.GetResult<Prisma.$CompanyVehiclesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompanyVehicles.
     * @param {CompanyVehiclesUpdateArgs} args - Arguments to update one CompanyVehicles.
     * @example
     * // Update one CompanyVehicles
     * const companyVehicles = await prisma.companyVehicles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyVehiclesUpdateArgs>(args: SelectSubset<T, CompanyVehiclesUpdateArgs<ExtArgs>>): Prisma__CompanyVehiclesClient<$Result.GetResult<Prisma.$CompanyVehiclesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompanyVehicles.
     * @param {CompanyVehiclesDeleteManyArgs} args - Arguments to filter CompanyVehicles to delete.
     * @example
     * // Delete a few CompanyVehicles
     * const { count } = await prisma.companyVehicles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyVehiclesDeleteManyArgs>(args?: SelectSubset<T, CompanyVehiclesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyVehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyVehiclesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanyVehicles
     * const companyVehicles = await prisma.companyVehicles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyVehiclesUpdateManyArgs>(args: SelectSubset<T, CompanyVehiclesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CompanyVehicles.
     * @param {CompanyVehiclesUpsertArgs} args - Arguments to update or create a CompanyVehicles.
     * @example
     * // Update or create a CompanyVehicles
     * const companyVehicles = await prisma.companyVehicles.upsert({
     *   create: {
     *     // ... data to create a CompanyVehicles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanyVehicles we want to update
     *   }
     * })
     */
    upsert<T extends CompanyVehiclesUpsertArgs>(args: SelectSubset<T, CompanyVehiclesUpsertArgs<ExtArgs>>): Prisma__CompanyVehiclesClient<$Result.GetResult<Prisma.$CompanyVehiclesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompanyVehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyVehiclesCountArgs} args - Arguments to filter CompanyVehicles to count.
     * @example
     * // Count the number of CompanyVehicles
     * const count = await prisma.companyVehicles.count({
     *   where: {
     *     // ... the filter for the CompanyVehicles we want to count
     *   }
     * })
    **/
    count<T extends CompanyVehiclesCountArgs>(
      args?: Subset<T, CompanyVehiclesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyVehiclesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanyVehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyVehiclesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyVehiclesAggregateArgs>(args: Subset<T, CompanyVehiclesAggregateArgs>): Prisma.PrismaPromise<GetCompanyVehiclesAggregateType<T>>

    /**
     * Group by CompanyVehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyVehiclesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyVehiclesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyVehiclesGroupByArgs['orderBy'] }
        : { orderBy?: CompanyVehiclesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyVehiclesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyVehiclesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanyVehicles model
   */
  readonly fields: CompanyVehiclesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanyVehicles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyVehiclesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Vehicle_Fuel_Relation<T extends CompanyVehicles$Vehicle_Fuel_RelationArgs<ExtArgs> = {}>(args?: Subset<T, CompanyVehicles$Vehicle_Fuel_RelationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Vehicle_Fuel_RelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompanyVehicles model
   */
  interface CompanyVehiclesFieldRefs {
    readonly vehicle_id: FieldRef<"CompanyVehicles", 'Int'>
    readonly vehicle_type: FieldRef<"CompanyVehicles", 'String'>
    readonly vehicle_model: FieldRef<"CompanyVehicles", 'String'>
    readonly vehicle_mileage: FieldRef<"CompanyVehicles", 'Int'>
    readonly user_id: FieldRef<"CompanyVehicles", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CompanyVehicles findUnique
   */
  export type CompanyVehiclesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyVehicles
     */
    select?: CompanyVehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyVehicles
     */
    omit?: CompanyVehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyVehiclesInclude<ExtArgs> | null
    /**
     * Filter, which CompanyVehicles to fetch.
     */
    where: CompanyVehiclesWhereUniqueInput
  }

  /**
   * CompanyVehicles findUniqueOrThrow
   */
  export type CompanyVehiclesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyVehicles
     */
    select?: CompanyVehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyVehicles
     */
    omit?: CompanyVehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyVehiclesInclude<ExtArgs> | null
    /**
     * Filter, which CompanyVehicles to fetch.
     */
    where: CompanyVehiclesWhereUniqueInput
  }

  /**
   * CompanyVehicles findFirst
   */
  export type CompanyVehiclesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyVehicles
     */
    select?: CompanyVehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyVehicles
     */
    omit?: CompanyVehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyVehiclesInclude<ExtArgs> | null
    /**
     * Filter, which CompanyVehicles to fetch.
     */
    where?: CompanyVehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyVehicles to fetch.
     */
    orderBy?: CompanyVehiclesOrderByWithRelationInput | CompanyVehiclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyVehicles.
     */
    cursor?: CompanyVehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyVehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyVehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyVehicles.
     */
    distinct?: CompanyVehiclesScalarFieldEnum | CompanyVehiclesScalarFieldEnum[]
  }

  /**
   * CompanyVehicles findFirstOrThrow
   */
  export type CompanyVehiclesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyVehicles
     */
    select?: CompanyVehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyVehicles
     */
    omit?: CompanyVehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyVehiclesInclude<ExtArgs> | null
    /**
     * Filter, which CompanyVehicles to fetch.
     */
    where?: CompanyVehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyVehicles to fetch.
     */
    orderBy?: CompanyVehiclesOrderByWithRelationInput | CompanyVehiclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyVehicles.
     */
    cursor?: CompanyVehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyVehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyVehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyVehicles.
     */
    distinct?: CompanyVehiclesScalarFieldEnum | CompanyVehiclesScalarFieldEnum[]
  }

  /**
   * CompanyVehicles findMany
   */
  export type CompanyVehiclesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyVehicles
     */
    select?: CompanyVehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyVehicles
     */
    omit?: CompanyVehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyVehiclesInclude<ExtArgs> | null
    /**
     * Filter, which CompanyVehicles to fetch.
     */
    where?: CompanyVehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyVehicles to fetch.
     */
    orderBy?: CompanyVehiclesOrderByWithRelationInput | CompanyVehiclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanyVehicles.
     */
    cursor?: CompanyVehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyVehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyVehicles.
     */
    skip?: number
    distinct?: CompanyVehiclesScalarFieldEnum | CompanyVehiclesScalarFieldEnum[]
  }

  /**
   * CompanyVehicles create
   */
  export type CompanyVehiclesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyVehicles
     */
    select?: CompanyVehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyVehicles
     */
    omit?: CompanyVehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyVehiclesInclude<ExtArgs> | null
    /**
     * The data needed to create a CompanyVehicles.
     */
    data: XOR<CompanyVehiclesCreateInput, CompanyVehiclesUncheckedCreateInput>
  }

  /**
   * CompanyVehicles createMany
   */
  export type CompanyVehiclesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanyVehicles.
     */
    data: CompanyVehiclesCreateManyInput | CompanyVehiclesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanyVehicles update
   */
  export type CompanyVehiclesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyVehicles
     */
    select?: CompanyVehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyVehicles
     */
    omit?: CompanyVehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyVehiclesInclude<ExtArgs> | null
    /**
     * The data needed to update a CompanyVehicles.
     */
    data: XOR<CompanyVehiclesUpdateInput, CompanyVehiclesUncheckedUpdateInput>
    /**
     * Choose, which CompanyVehicles to update.
     */
    where: CompanyVehiclesWhereUniqueInput
  }

  /**
   * CompanyVehicles updateMany
   */
  export type CompanyVehiclesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanyVehicles.
     */
    data: XOR<CompanyVehiclesUpdateManyMutationInput, CompanyVehiclesUncheckedUpdateManyInput>
    /**
     * Filter which CompanyVehicles to update
     */
    where?: CompanyVehiclesWhereInput
    /**
     * Limit how many CompanyVehicles to update.
     */
    limit?: number
  }

  /**
   * CompanyVehicles upsert
   */
  export type CompanyVehiclesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyVehicles
     */
    select?: CompanyVehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyVehicles
     */
    omit?: CompanyVehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyVehiclesInclude<ExtArgs> | null
    /**
     * The filter to search for the CompanyVehicles to update in case it exists.
     */
    where: CompanyVehiclesWhereUniqueInput
    /**
     * In case the CompanyVehicles found by the `where` argument doesn't exist, create a new CompanyVehicles with this data.
     */
    create: XOR<CompanyVehiclesCreateInput, CompanyVehiclesUncheckedCreateInput>
    /**
     * In case the CompanyVehicles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyVehiclesUpdateInput, CompanyVehiclesUncheckedUpdateInput>
  }

  /**
   * CompanyVehicles delete
   */
  export type CompanyVehiclesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyVehicles
     */
    select?: CompanyVehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyVehicles
     */
    omit?: CompanyVehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyVehiclesInclude<ExtArgs> | null
    /**
     * Filter which CompanyVehicles to delete.
     */
    where: CompanyVehiclesWhereUniqueInput
  }

  /**
   * CompanyVehicles deleteMany
   */
  export type CompanyVehiclesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyVehicles to delete
     */
    where?: CompanyVehiclesWhereInput
    /**
     * Limit how many CompanyVehicles to delete.
     */
    limit?: number
  }

  /**
   * CompanyVehicles.Vehicle_Fuel_Relation
   */
  export type CompanyVehicles$Vehicle_Fuel_RelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Fuel_Relation
     */
    select?: Vehicle_Fuel_RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle_Fuel_Relation
     */
    omit?: Vehicle_Fuel_RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_Fuel_RelationInclude<ExtArgs> | null
    where?: Vehicle_Fuel_RelationWhereInput
    orderBy?: Vehicle_Fuel_RelationOrderByWithRelationInput | Vehicle_Fuel_RelationOrderByWithRelationInput[]
    cursor?: Vehicle_Fuel_RelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Vehicle_Fuel_RelationScalarFieldEnum | Vehicle_Fuel_RelationScalarFieldEnum[]
  }

  /**
   * CompanyVehicles without action
   */
  export type CompanyVehiclesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyVehicles
     */
    select?: CompanyVehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyVehicles
     */
    omit?: CompanyVehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyVehiclesInclude<ExtArgs> | null
  }


  /**
   * Model Countries
   */

  export type AggregateCountries = {
    _count: CountriesCountAggregateOutputType | null
    _avg: CountriesAvgAggregateOutputType | null
    _sum: CountriesSumAggregateOutputType | null
    _min: CountriesMinAggregateOutputType | null
    _max: CountriesMaxAggregateOutputType | null
  }

  export type CountriesAvgAggregateOutputType = {
    country_id: number | null
  }

  export type CountriesSumAggregateOutputType = {
    country_id: number | null
  }

  export type CountriesMinAggregateOutputType = {
    country_id: number | null
    country_name: string | null
  }

  export type CountriesMaxAggregateOutputType = {
    country_id: number | null
    country_name: string | null
  }

  export type CountriesCountAggregateOutputType = {
    country_id: number
    country_name: number
    _all: number
  }


  export type CountriesAvgAggregateInputType = {
    country_id?: true
  }

  export type CountriesSumAggregateInputType = {
    country_id?: true
  }

  export type CountriesMinAggregateInputType = {
    country_id?: true
    country_name?: true
  }

  export type CountriesMaxAggregateInputType = {
    country_id?: true
    country_name?: true
  }

  export type CountriesCountAggregateInputType = {
    country_id?: true
    country_name?: true
    _all?: true
  }

  export type CountriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to aggregate.
     */
    where?: CountriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountriesOrderByWithRelationInput | CountriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountriesMaxAggregateInputType
  }

  export type GetCountriesAggregateType<T extends CountriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCountries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountries[P]>
      : GetScalarType<T[P], AggregateCountries[P]>
  }




  export type CountriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountriesWhereInput
    orderBy?: CountriesOrderByWithAggregationInput | CountriesOrderByWithAggregationInput[]
    by: CountriesScalarFieldEnum[] | CountriesScalarFieldEnum
    having?: CountriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountriesCountAggregateInputType | true
    _avg?: CountriesAvgAggregateInputType
    _sum?: CountriesSumAggregateInputType
    _min?: CountriesMinAggregateInputType
    _max?: CountriesMaxAggregateInputType
  }

  export type CountriesGroupByOutputType = {
    country_id: number
    country_name: string
    _count: CountriesCountAggregateOutputType | null
    _avg: CountriesAvgAggregateOutputType | null
    _sum: CountriesSumAggregateOutputType | null
    _min: CountriesMinAggregateOutputType | null
    _max: CountriesMaxAggregateOutputType | null
  }

  type GetCountriesGroupByPayload<T extends CountriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountriesGroupByOutputType[P]>
            : GetScalarType<T[P], CountriesGroupByOutputType[P]>
        }
      >
    >


  export type CountriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    country_id?: boolean
    country_name?: boolean
    Calculations?: boolean | Countries$CalculationsArgs<ExtArgs>
    Electricity?: boolean | Countries$ElectricityArgs<ExtArgs>
    EmissionFactors?: boolean | Countries$EmissionFactorsArgs<ExtArgs>
    Emissions?: boolean | Countries$EmissionsArgs<ExtArgs>
    Travel?: boolean | Countries$TravelArgs<ExtArgs>
    Users?: boolean | Countries$UsersArgs<ExtArgs>
    Water?: boolean | Countries$WaterArgs<ExtArgs>
    _count?: boolean | CountriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["countries"]>



  export type CountriesSelectScalar = {
    country_id?: boolean
    country_name?: boolean
  }

  export type CountriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"country_id" | "country_name", ExtArgs["result"]["countries"]>
  export type CountriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Calculations?: boolean | Countries$CalculationsArgs<ExtArgs>
    Electricity?: boolean | Countries$ElectricityArgs<ExtArgs>
    EmissionFactors?: boolean | Countries$EmissionFactorsArgs<ExtArgs>
    Emissions?: boolean | Countries$EmissionsArgs<ExtArgs>
    Travel?: boolean | Countries$TravelArgs<ExtArgs>
    Users?: boolean | Countries$UsersArgs<ExtArgs>
    Water?: boolean | Countries$WaterArgs<ExtArgs>
    _count?: boolean | CountriesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CountriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Countries"
    objects: {
      Calculations: Prisma.$CalculationsPayload<ExtArgs>[]
      Electricity: Prisma.$ElectricityPayload<ExtArgs>[]
      EmissionFactors: Prisma.$EmissionFactorsPayload<ExtArgs>[]
      Emissions: Prisma.$EmissionsPayload<ExtArgs>[]
      Travel: Prisma.$TravelPayload<ExtArgs>[]
      Users: Prisma.$UsersPayload<ExtArgs>[]
      Water: Prisma.$WaterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      country_id: number
      country_name: string
    }, ExtArgs["result"]["countries"]>
    composites: {}
  }

  type CountriesGetPayload<S extends boolean | null | undefined | CountriesDefaultArgs> = $Result.GetResult<Prisma.$CountriesPayload, S>

  type CountriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CountriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountriesCountAggregateInputType | true
    }

  export interface CountriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Countries'], meta: { name: 'Countries' } }
    /**
     * Find zero or one Countries that matches the filter.
     * @param {CountriesFindUniqueArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountriesFindUniqueArgs>(args: SelectSubset<T, CountriesFindUniqueArgs<ExtArgs>>): Prisma__CountriesClient<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Countries that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CountriesFindUniqueOrThrowArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountriesFindUniqueOrThrowArgs>(args: SelectSubset<T, CountriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountriesClient<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesFindFirstArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountriesFindFirstArgs>(args?: SelectSubset<T, CountriesFindFirstArgs<ExtArgs>>): Prisma__CountriesClient<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Countries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesFindFirstOrThrowArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountriesFindFirstOrThrowArgs>(args?: SelectSubset<T, CountriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountriesClient<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.countries.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.countries.findMany({ take: 10 })
     * 
     * // Only select the `country_id`
     * const countriesWithCountry_idOnly = await prisma.countries.findMany({ select: { country_id: true } })
     * 
     */
    findMany<T extends CountriesFindManyArgs>(args?: SelectSubset<T, CountriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Countries.
     * @param {CountriesCreateArgs} args - Arguments to create a Countries.
     * @example
     * // Create one Countries
     * const Countries = await prisma.countries.create({
     *   data: {
     *     // ... data to create a Countries
     *   }
     * })
     * 
     */
    create<T extends CountriesCreateArgs>(args: SelectSubset<T, CountriesCreateArgs<ExtArgs>>): Prisma__CountriesClient<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Countries.
     * @param {CountriesCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const countries = await prisma.countries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountriesCreateManyArgs>(args?: SelectSubset<T, CountriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Countries.
     * @param {CountriesDeleteArgs} args - Arguments to delete one Countries.
     * @example
     * // Delete one Countries
     * const Countries = await prisma.countries.delete({
     *   where: {
     *     // ... filter to delete one Countries
     *   }
     * })
     * 
     */
    delete<T extends CountriesDeleteArgs>(args: SelectSubset<T, CountriesDeleteArgs<ExtArgs>>): Prisma__CountriesClient<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Countries.
     * @param {CountriesUpdateArgs} args - Arguments to update one Countries.
     * @example
     * // Update one Countries
     * const countries = await prisma.countries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountriesUpdateArgs>(args: SelectSubset<T, CountriesUpdateArgs<ExtArgs>>): Prisma__CountriesClient<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Countries.
     * @param {CountriesDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.countries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountriesDeleteManyArgs>(args?: SelectSubset<T, CountriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const countries = await prisma.countries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountriesUpdateManyArgs>(args: SelectSubset<T, CountriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Countries.
     * @param {CountriesUpsertArgs} args - Arguments to update or create a Countries.
     * @example
     * // Update or create a Countries
     * const countries = await prisma.countries.upsert({
     *   create: {
     *     // ... data to create a Countries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Countries we want to update
     *   }
     * })
     */
    upsert<T extends CountriesUpsertArgs>(args: SelectSubset<T, CountriesUpsertArgs<ExtArgs>>): Prisma__CountriesClient<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.countries.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountriesCountArgs>(
      args?: Subset<T, CountriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CountriesAggregateArgs>(args: Subset<T, CountriesAggregateArgs>): Prisma.PrismaPromise<GetCountriesAggregateType<T>>

    /**
     * Group by Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CountriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountriesGroupByArgs['orderBy'] }
        : { orderBy?: CountriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CountriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Countries model
   */
  readonly fields: CountriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Countries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Calculations<T extends Countries$CalculationsArgs<ExtArgs> = {}>(args?: Subset<T, Countries$CalculationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalculationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Electricity<T extends Countries$ElectricityArgs<ExtArgs> = {}>(args?: Subset<T, Countries$ElectricityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectricityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    EmissionFactors<T extends Countries$EmissionFactorsArgs<ExtArgs> = {}>(args?: Subset<T, Countries$EmissionFactorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmissionFactorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Emissions<T extends Countries$EmissionsArgs<ExtArgs> = {}>(args?: Subset<T, Countries$EmissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Travel<T extends Countries$TravelArgs<ExtArgs> = {}>(args?: Subset<T, Countries$TravelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Users<T extends Countries$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Countries$UsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Water<T extends Countries$WaterArgs<ExtArgs> = {}>(args?: Subset<T, Countries$WaterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Countries model
   */
  interface CountriesFieldRefs {
    readonly country_id: FieldRef<"Countries", 'Int'>
    readonly country_name: FieldRef<"Countries", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Countries findUnique
   */
  export type CountriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Countries
     */
    omit?: CountriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountriesInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where: CountriesWhereUniqueInput
  }

  /**
   * Countries findUniqueOrThrow
   */
  export type CountriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Countries
     */
    omit?: CountriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountriesInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where: CountriesWhereUniqueInput
  }

  /**
   * Countries findFirst
   */
  export type CountriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Countries
     */
    omit?: CountriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountriesInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountriesOrderByWithRelationInput | CountriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountriesScalarFieldEnum | CountriesScalarFieldEnum[]
  }

  /**
   * Countries findFirstOrThrow
   */
  export type CountriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Countries
     */
    omit?: CountriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountriesInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountriesOrderByWithRelationInput | CountriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountriesScalarFieldEnum | CountriesScalarFieldEnum[]
  }

  /**
   * Countries findMany
   */
  export type CountriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Countries
     */
    omit?: CountriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountriesInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountriesOrderByWithRelationInput | CountriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: CountriesScalarFieldEnum | CountriesScalarFieldEnum[]
  }

  /**
   * Countries create
   */
  export type CountriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Countries
     */
    omit?: CountriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Countries.
     */
    data: XOR<CountriesCreateInput, CountriesUncheckedCreateInput>
  }

  /**
   * Countries createMany
   */
  export type CountriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: CountriesCreateManyInput | CountriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Countries update
   */
  export type CountriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Countries
     */
    omit?: CountriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Countries.
     */
    data: XOR<CountriesUpdateInput, CountriesUncheckedUpdateInput>
    /**
     * Choose, which Countries to update.
     */
    where: CountriesWhereUniqueInput
  }

  /**
   * Countries updateMany
   */
  export type CountriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountriesUpdateManyMutationInput, CountriesUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountriesWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Countries upsert
   */
  export type CountriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Countries
     */
    omit?: CountriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Countries to update in case it exists.
     */
    where: CountriesWhereUniqueInput
    /**
     * In case the Countries found by the `where` argument doesn't exist, create a new Countries with this data.
     */
    create: XOR<CountriesCreateInput, CountriesUncheckedCreateInput>
    /**
     * In case the Countries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountriesUpdateInput, CountriesUncheckedUpdateInput>
  }

  /**
   * Countries delete
   */
  export type CountriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Countries
     */
    omit?: CountriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountriesInclude<ExtArgs> | null
    /**
     * Filter which Countries to delete.
     */
    where: CountriesWhereUniqueInput
  }

  /**
   * Countries deleteMany
   */
  export type CountriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountriesWhereInput
    /**
     * Limit how many Countries to delete.
     */
    limit?: number
  }

  /**
   * Countries.Calculations
   */
  export type Countries$CalculationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calculations
     */
    select?: CalculationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calculations
     */
    omit?: CalculationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationsInclude<ExtArgs> | null
    where?: CalculationsWhereInput
    orderBy?: CalculationsOrderByWithRelationInput | CalculationsOrderByWithRelationInput[]
    cursor?: CalculationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CalculationsScalarFieldEnum | CalculationsScalarFieldEnum[]
  }

  /**
   * Countries.Electricity
   */
  export type Countries$ElectricityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Electricity
     */
    select?: ElectricitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Electricity
     */
    omit?: ElectricityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectricityInclude<ExtArgs> | null
    where?: ElectricityWhereInput
    orderBy?: ElectricityOrderByWithRelationInput | ElectricityOrderByWithRelationInput[]
    cursor?: ElectricityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ElectricityScalarFieldEnum | ElectricityScalarFieldEnum[]
  }

  /**
   * Countries.EmissionFactors
   */
  export type Countries$EmissionFactorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionFactors
     */
    select?: EmissionFactorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionFactors
     */
    omit?: EmissionFactorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionFactorsInclude<ExtArgs> | null
    where?: EmissionFactorsWhereInput
    orderBy?: EmissionFactorsOrderByWithRelationInput | EmissionFactorsOrderByWithRelationInput[]
    cursor?: EmissionFactorsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmissionFactorsScalarFieldEnum | EmissionFactorsScalarFieldEnum[]
  }

  /**
   * Countries.Emissions
   */
  export type Countries$EmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emissions
     */
    select?: EmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emissions
     */
    omit?: EmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionsInclude<ExtArgs> | null
    where?: EmissionsWhereInput
    orderBy?: EmissionsOrderByWithRelationInput | EmissionsOrderByWithRelationInput[]
    cursor?: EmissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmissionsScalarFieldEnum | EmissionsScalarFieldEnum[]
  }

  /**
   * Countries.Travel
   */
  export type Countries$TravelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    where?: TravelWhereInput
    orderBy?: TravelOrderByWithRelationInput | TravelOrderByWithRelationInput[]
    cursor?: TravelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TravelScalarFieldEnum | TravelScalarFieldEnum[]
  }

  /**
   * Countries.Users
   */
  export type Countries$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Countries.Water
   */
  export type Countries$WaterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water
     */
    select?: WaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Water
     */
    omit?: WaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterInclude<ExtArgs> | null
    where?: WaterWhereInput
    orderBy?: WaterOrderByWithRelationInput | WaterOrderByWithRelationInput[]
    cursor?: WaterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaterScalarFieldEnum | WaterScalarFieldEnum[]
  }

  /**
   * Countries without action
   */
  export type CountriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Countries
     */
    omit?: CountriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountriesInclude<ExtArgs> | null
  }


  /**
   * Model Electricity
   */

  export type AggregateElectricity = {
    _count: ElectricityCountAggregateOutputType | null
    _avg: ElectricityAvgAggregateOutputType | null
    _sum: ElectricitySumAggregateOutputType | null
    _min: ElectricityMinAggregateOutputType | null
    _max: ElectricityMaxAggregateOutputType | null
  }

  export type ElectricityAvgAggregateOutputType = {
    electricity_id: number | null
    electricity_use: number | null
    country_id: number | null
    category_id: number | null
    factor_id: number | null
  }

  export type ElectricitySumAggregateOutputType = {
    electricity_id: number | null
    electricity_use: number | null
    country_id: number | null
    category_id: number | null
    factor_id: number | null
  }

  export type ElectricityMinAggregateOutputType = {
    electricity_id: number | null
    electricity_type: string | null
    electricity_use: number | null
    country_id: number | null
    category_id: number | null
    factor_id: number | null
  }

  export type ElectricityMaxAggregateOutputType = {
    electricity_id: number | null
    electricity_type: string | null
    electricity_use: number | null
    country_id: number | null
    category_id: number | null
    factor_id: number | null
  }

  export type ElectricityCountAggregateOutputType = {
    electricity_id: number
    electricity_type: number
    electricity_use: number
    country_id: number
    category_id: number
    factor_id: number
    _all: number
  }


  export type ElectricityAvgAggregateInputType = {
    electricity_id?: true
    electricity_use?: true
    country_id?: true
    category_id?: true
    factor_id?: true
  }

  export type ElectricitySumAggregateInputType = {
    electricity_id?: true
    electricity_use?: true
    country_id?: true
    category_id?: true
    factor_id?: true
  }

  export type ElectricityMinAggregateInputType = {
    electricity_id?: true
    electricity_type?: true
    electricity_use?: true
    country_id?: true
    category_id?: true
    factor_id?: true
  }

  export type ElectricityMaxAggregateInputType = {
    electricity_id?: true
    electricity_type?: true
    electricity_use?: true
    country_id?: true
    category_id?: true
    factor_id?: true
  }

  export type ElectricityCountAggregateInputType = {
    electricity_id?: true
    electricity_type?: true
    electricity_use?: true
    country_id?: true
    category_id?: true
    factor_id?: true
    _all?: true
  }

  export type ElectricityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Electricity to aggregate.
     */
    where?: ElectricityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Electricities to fetch.
     */
    orderBy?: ElectricityOrderByWithRelationInput | ElectricityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ElectricityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Electricities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Electricities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Electricities
    **/
    _count?: true | ElectricityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ElectricityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ElectricitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ElectricityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ElectricityMaxAggregateInputType
  }

  export type GetElectricityAggregateType<T extends ElectricityAggregateArgs> = {
        [P in keyof T & keyof AggregateElectricity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateElectricity[P]>
      : GetScalarType<T[P], AggregateElectricity[P]>
  }




  export type ElectricityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElectricityWhereInput
    orderBy?: ElectricityOrderByWithAggregationInput | ElectricityOrderByWithAggregationInput[]
    by: ElectricityScalarFieldEnum[] | ElectricityScalarFieldEnum
    having?: ElectricityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ElectricityCountAggregateInputType | true
    _avg?: ElectricityAvgAggregateInputType
    _sum?: ElectricitySumAggregateInputType
    _min?: ElectricityMinAggregateInputType
    _max?: ElectricityMaxAggregateInputType
  }

  export type ElectricityGroupByOutputType = {
    electricity_id: number
    electricity_type: string
    electricity_use: number
    country_id: number
    category_id: number
    factor_id: number
    _count: ElectricityCountAggregateOutputType | null
    _avg: ElectricityAvgAggregateOutputType | null
    _sum: ElectricitySumAggregateOutputType | null
    _min: ElectricityMinAggregateOutputType | null
    _max: ElectricityMaxAggregateOutputType | null
  }

  type GetElectricityGroupByPayload<T extends ElectricityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ElectricityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ElectricityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ElectricityGroupByOutputType[P]>
            : GetScalarType<T[P], ElectricityGroupByOutputType[P]>
        }
      >
    >


  export type ElectricitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    electricity_id?: boolean
    electricity_type?: boolean
    electricity_use?: boolean
    country_id?: boolean
    category_id?: boolean
    factor_id?: boolean
    Countries?: boolean | CountriesDefaultArgs<ExtArgs>
    EmissionCategories?: boolean | EmissionCategoriesDefaultArgs<ExtArgs>
    EmissionFactors?: boolean | EmissionFactorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["electricity"]>



  export type ElectricitySelectScalar = {
    electricity_id?: boolean
    electricity_type?: boolean
    electricity_use?: boolean
    country_id?: boolean
    category_id?: boolean
    factor_id?: boolean
  }

  export type ElectricityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"electricity_id" | "electricity_type" | "electricity_use" | "country_id" | "category_id" | "factor_id", ExtArgs["result"]["electricity"]>
  export type ElectricityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Countries?: boolean | CountriesDefaultArgs<ExtArgs>
    EmissionCategories?: boolean | EmissionCategoriesDefaultArgs<ExtArgs>
    EmissionFactors?: boolean | EmissionFactorsDefaultArgs<ExtArgs>
  }

  export type $ElectricityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Electricity"
    objects: {
      Countries: Prisma.$CountriesPayload<ExtArgs>
      EmissionCategories: Prisma.$EmissionCategoriesPayload<ExtArgs>
      EmissionFactors: Prisma.$EmissionFactorsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      electricity_id: number
      electricity_type: string
      electricity_use: number
      country_id: number
      category_id: number
      factor_id: number
    }, ExtArgs["result"]["electricity"]>
    composites: {}
  }

  type ElectricityGetPayload<S extends boolean | null | undefined | ElectricityDefaultArgs> = $Result.GetResult<Prisma.$ElectricityPayload, S>

  type ElectricityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ElectricityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ElectricityCountAggregateInputType | true
    }

  export interface ElectricityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Electricity'], meta: { name: 'Electricity' } }
    /**
     * Find zero or one Electricity that matches the filter.
     * @param {ElectricityFindUniqueArgs} args - Arguments to find a Electricity
     * @example
     * // Get one Electricity
     * const electricity = await prisma.electricity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ElectricityFindUniqueArgs>(args: SelectSubset<T, ElectricityFindUniqueArgs<ExtArgs>>): Prisma__ElectricityClient<$Result.GetResult<Prisma.$ElectricityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Electricity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ElectricityFindUniqueOrThrowArgs} args - Arguments to find a Electricity
     * @example
     * // Get one Electricity
     * const electricity = await prisma.electricity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ElectricityFindUniqueOrThrowArgs>(args: SelectSubset<T, ElectricityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ElectricityClient<$Result.GetResult<Prisma.$ElectricityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Electricity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectricityFindFirstArgs} args - Arguments to find a Electricity
     * @example
     * // Get one Electricity
     * const electricity = await prisma.electricity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ElectricityFindFirstArgs>(args?: SelectSubset<T, ElectricityFindFirstArgs<ExtArgs>>): Prisma__ElectricityClient<$Result.GetResult<Prisma.$ElectricityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Electricity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectricityFindFirstOrThrowArgs} args - Arguments to find a Electricity
     * @example
     * // Get one Electricity
     * const electricity = await prisma.electricity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ElectricityFindFirstOrThrowArgs>(args?: SelectSubset<T, ElectricityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ElectricityClient<$Result.GetResult<Prisma.$ElectricityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Electricities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectricityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Electricities
     * const electricities = await prisma.electricity.findMany()
     * 
     * // Get first 10 Electricities
     * const electricities = await prisma.electricity.findMany({ take: 10 })
     * 
     * // Only select the `electricity_id`
     * const electricityWithElectricity_idOnly = await prisma.electricity.findMany({ select: { electricity_id: true } })
     * 
     */
    findMany<T extends ElectricityFindManyArgs>(args?: SelectSubset<T, ElectricityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectricityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Electricity.
     * @param {ElectricityCreateArgs} args - Arguments to create a Electricity.
     * @example
     * // Create one Electricity
     * const Electricity = await prisma.electricity.create({
     *   data: {
     *     // ... data to create a Electricity
     *   }
     * })
     * 
     */
    create<T extends ElectricityCreateArgs>(args: SelectSubset<T, ElectricityCreateArgs<ExtArgs>>): Prisma__ElectricityClient<$Result.GetResult<Prisma.$ElectricityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Electricities.
     * @param {ElectricityCreateManyArgs} args - Arguments to create many Electricities.
     * @example
     * // Create many Electricities
     * const electricity = await prisma.electricity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ElectricityCreateManyArgs>(args?: SelectSubset<T, ElectricityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Electricity.
     * @param {ElectricityDeleteArgs} args - Arguments to delete one Electricity.
     * @example
     * // Delete one Electricity
     * const Electricity = await prisma.electricity.delete({
     *   where: {
     *     // ... filter to delete one Electricity
     *   }
     * })
     * 
     */
    delete<T extends ElectricityDeleteArgs>(args: SelectSubset<T, ElectricityDeleteArgs<ExtArgs>>): Prisma__ElectricityClient<$Result.GetResult<Prisma.$ElectricityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Electricity.
     * @param {ElectricityUpdateArgs} args - Arguments to update one Electricity.
     * @example
     * // Update one Electricity
     * const electricity = await prisma.electricity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ElectricityUpdateArgs>(args: SelectSubset<T, ElectricityUpdateArgs<ExtArgs>>): Prisma__ElectricityClient<$Result.GetResult<Prisma.$ElectricityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Electricities.
     * @param {ElectricityDeleteManyArgs} args - Arguments to filter Electricities to delete.
     * @example
     * // Delete a few Electricities
     * const { count } = await prisma.electricity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ElectricityDeleteManyArgs>(args?: SelectSubset<T, ElectricityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Electricities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectricityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Electricities
     * const electricity = await prisma.electricity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ElectricityUpdateManyArgs>(args: SelectSubset<T, ElectricityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Electricity.
     * @param {ElectricityUpsertArgs} args - Arguments to update or create a Electricity.
     * @example
     * // Update or create a Electricity
     * const electricity = await prisma.electricity.upsert({
     *   create: {
     *     // ... data to create a Electricity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Electricity we want to update
     *   }
     * })
     */
    upsert<T extends ElectricityUpsertArgs>(args: SelectSubset<T, ElectricityUpsertArgs<ExtArgs>>): Prisma__ElectricityClient<$Result.GetResult<Prisma.$ElectricityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Electricities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectricityCountArgs} args - Arguments to filter Electricities to count.
     * @example
     * // Count the number of Electricities
     * const count = await prisma.electricity.count({
     *   where: {
     *     // ... the filter for the Electricities we want to count
     *   }
     * })
    **/
    count<T extends ElectricityCountArgs>(
      args?: Subset<T, ElectricityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ElectricityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Electricity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectricityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ElectricityAggregateArgs>(args: Subset<T, ElectricityAggregateArgs>): Prisma.PrismaPromise<GetElectricityAggregateType<T>>

    /**
     * Group by Electricity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectricityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ElectricityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ElectricityGroupByArgs['orderBy'] }
        : { orderBy?: ElectricityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ElectricityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetElectricityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Electricity model
   */
  readonly fields: ElectricityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Electricity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ElectricityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Countries<T extends CountriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountriesDefaultArgs<ExtArgs>>): Prisma__CountriesClient<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    EmissionCategories<T extends EmissionCategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmissionCategoriesDefaultArgs<ExtArgs>>): Prisma__EmissionCategoriesClient<$Result.GetResult<Prisma.$EmissionCategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    EmissionFactors<T extends EmissionFactorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmissionFactorsDefaultArgs<ExtArgs>>): Prisma__EmissionFactorsClient<$Result.GetResult<Prisma.$EmissionFactorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Electricity model
   */
  interface ElectricityFieldRefs {
    readonly electricity_id: FieldRef<"Electricity", 'Int'>
    readonly electricity_type: FieldRef<"Electricity", 'String'>
    readonly electricity_use: FieldRef<"Electricity", 'Float'>
    readonly country_id: FieldRef<"Electricity", 'Int'>
    readonly category_id: FieldRef<"Electricity", 'Int'>
    readonly factor_id: FieldRef<"Electricity", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Electricity findUnique
   */
  export type ElectricityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Electricity
     */
    select?: ElectricitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Electricity
     */
    omit?: ElectricityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectricityInclude<ExtArgs> | null
    /**
     * Filter, which Electricity to fetch.
     */
    where: ElectricityWhereUniqueInput
  }

  /**
   * Electricity findUniqueOrThrow
   */
  export type ElectricityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Electricity
     */
    select?: ElectricitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Electricity
     */
    omit?: ElectricityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectricityInclude<ExtArgs> | null
    /**
     * Filter, which Electricity to fetch.
     */
    where: ElectricityWhereUniqueInput
  }

  /**
   * Electricity findFirst
   */
  export type ElectricityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Electricity
     */
    select?: ElectricitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Electricity
     */
    omit?: ElectricityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectricityInclude<ExtArgs> | null
    /**
     * Filter, which Electricity to fetch.
     */
    where?: ElectricityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Electricities to fetch.
     */
    orderBy?: ElectricityOrderByWithRelationInput | ElectricityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Electricities.
     */
    cursor?: ElectricityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Electricities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Electricities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Electricities.
     */
    distinct?: ElectricityScalarFieldEnum | ElectricityScalarFieldEnum[]
  }

  /**
   * Electricity findFirstOrThrow
   */
  export type ElectricityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Electricity
     */
    select?: ElectricitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Electricity
     */
    omit?: ElectricityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectricityInclude<ExtArgs> | null
    /**
     * Filter, which Electricity to fetch.
     */
    where?: ElectricityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Electricities to fetch.
     */
    orderBy?: ElectricityOrderByWithRelationInput | ElectricityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Electricities.
     */
    cursor?: ElectricityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Electricities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Electricities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Electricities.
     */
    distinct?: ElectricityScalarFieldEnum | ElectricityScalarFieldEnum[]
  }

  /**
   * Electricity findMany
   */
  export type ElectricityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Electricity
     */
    select?: ElectricitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Electricity
     */
    omit?: ElectricityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectricityInclude<ExtArgs> | null
    /**
     * Filter, which Electricities to fetch.
     */
    where?: ElectricityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Electricities to fetch.
     */
    orderBy?: ElectricityOrderByWithRelationInput | ElectricityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Electricities.
     */
    cursor?: ElectricityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Electricities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Electricities.
     */
    skip?: number
    distinct?: ElectricityScalarFieldEnum | ElectricityScalarFieldEnum[]
  }

  /**
   * Electricity create
   */
  export type ElectricityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Electricity
     */
    select?: ElectricitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Electricity
     */
    omit?: ElectricityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectricityInclude<ExtArgs> | null
    /**
     * The data needed to create a Electricity.
     */
    data: XOR<ElectricityCreateInput, ElectricityUncheckedCreateInput>
  }

  /**
   * Electricity createMany
   */
  export type ElectricityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Electricities.
     */
    data: ElectricityCreateManyInput | ElectricityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Electricity update
   */
  export type ElectricityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Electricity
     */
    select?: ElectricitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Electricity
     */
    omit?: ElectricityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectricityInclude<ExtArgs> | null
    /**
     * The data needed to update a Electricity.
     */
    data: XOR<ElectricityUpdateInput, ElectricityUncheckedUpdateInput>
    /**
     * Choose, which Electricity to update.
     */
    where: ElectricityWhereUniqueInput
  }

  /**
   * Electricity updateMany
   */
  export type ElectricityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Electricities.
     */
    data: XOR<ElectricityUpdateManyMutationInput, ElectricityUncheckedUpdateManyInput>
    /**
     * Filter which Electricities to update
     */
    where?: ElectricityWhereInput
    /**
     * Limit how many Electricities to update.
     */
    limit?: number
  }

  /**
   * Electricity upsert
   */
  export type ElectricityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Electricity
     */
    select?: ElectricitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Electricity
     */
    omit?: ElectricityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectricityInclude<ExtArgs> | null
    /**
     * The filter to search for the Electricity to update in case it exists.
     */
    where: ElectricityWhereUniqueInput
    /**
     * In case the Electricity found by the `where` argument doesn't exist, create a new Electricity with this data.
     */
    create: XOR<ElectricityCreateInput, ElectricityUncheckedCreateInput>
    /**
     * In case the Electricity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ElectricityUpdateInput, ElectricityUncheckedUpdateInput>
  }

  /**
   * Electricity delete
   */
  export type ElectricityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Electricity
     */
    select?: ElectricitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Electricity
     */
    omit?: ElectricityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectricityInclude<ExtArgs> | null
    /**
     * Filter which Electricity to delete.
     */
    where: ElectricityWhereUniqueInput
  }

  /**
   * Electricity deleteMany
   */
  export type ElectricityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Electricities to delete
     */
    where?: ElectricityWhereInput
    /**
     * Limit how many Electricities to delete.
     */
    limit?: number
  }

  /**
   * Electricity without action
   */
  export type ElectricityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Electricity
     */
    select?: ElectricitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Electricity
     */
    omit?: ElectricityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectricityInclude<ExtArgs> | null
  }


  /**
   * Model EmissionCategories
   */

  export type AggregateEmissionCategories = {
    _count: EmissionCategoriesCountAggregateOutputType | null
    _avg: EmissionCategoriesAvgAggregateOutputType | null
    _sum: EmissionCategoriesSumAggregateOutputType | null
    _min: EmissionCategoriesMinAggregateOutputType | null
    _max: EmissionCategoriesMaxAggregateOutputType | null
  }

  export type EmissionCategoriesAvgAggregateOutputType = {
    category_id: number | null
  }

  export type EmissionCategoriesSumAggregateOutputType = {
    category_id: number | null
  }

  export type EmissionCategoriesMinAggregateOutputType = {
    category_id: number | null
    category_name: string | null
  }

  export type EmissionCategoriesMaxAggregateOutputType = {
    category_id: number | null
    category_name: string | null
  }

  export type EmissionCategoriesCountAggregateOutputType = {
    category_id: number
    category_name: number
    _all: number
  }


  export type EmissionCategoriesAvgAggregateInputType = {
    category_id?: true
  }

  export type EmissionCategoriesSumAggregateInputType = {
    category_id?: true
  }

  export type EmissionCategoriesMinAggregateInputType = {
    category_id?: true
    category_name?: true
  }

  export type EmissionCategoriesMaxAggregateInputType = {
    category_id?: true
    category_name?: true
  }

  export type EmissionCategoriesCountAggregateInputType = {
    category_id?: true
    category_name?: true
    _all?: true
  }

  export type EmissionCategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmissionCategories to aggregate.
     */
    where?: EmissionCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmissionCategories to fetch.
     */
    orderBy?: EmissionCategoriesOrderByWithRelationInput | EmissionCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmissionCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmissionCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmissionCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmissionCategories
    **/
    _count?: true | EmissionCategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmissionCategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmissionCategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmissionCategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmissionCategoriesMaxAggregateInputType
  }

  export type GetEmissionCategoriesAggregateType<T extends EmissionCategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateEmissionCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmissionCategories[P]>
      : GetScalarType<T[P], AggregateEmissionCategories[P]>
  }




  export type EmissionCategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmissionCategoriesWhereInput
    orderBy?: EmissionCategoriesOrderByWithAggregationInput | EmissionCategoriesOrderByWithAggregationInput[]
    by: EmissionCategoriesScalarFieldEnum[] | EmissionCategoriesScalarFieldEnum
    having?: EmissionCategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmissionCategoriesCountAggregateInputType | true
    _avg?: EmissionCategoriesAvgAggregateInputType
    _sum?: EmissionCategoriesSumAggregateInputType
    _min?: EmissionCategoriesMinAggregateInputType
    _max?: EmissionCategoriesMaxAggregateInputType
  }

  export type EmissionCategoriesGroupByOutputType = {
    category_id: number
    category_name: string
    _count: EmissionCategoriesCountAggregateOutputType | null
    _avg: EmissionCategoriesAvgAggregateOutputType | null
    _sum: EmissionCategoriesSumAggregateOutputType | null
    _min: EmissionCategoriesMinAggregateOutputType | null
    _max: EmissionCategoriesMaxAggregateOutputType | null
  }

  type GetEmissionCategoriesGroupByPayload<T extends EmissionCategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmissionCategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmissionCategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmissionCategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], EmissionCategoriesGroupByOutputType[P]>
        }
      >
    >


  export type EmissionCategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    category_name?: boolean
    Electricity?: boolean | EmissionCategories$ElectricityArgs<ExtArgs>
    EmissionFactors?: boolean | EmissionCategories$EmissionFactorsArgs<ExtArgs>
    Emissions?: boolean | EmissionCategories$EmissionsArgs<ExtArgs>
    Fuel?: boolean | EmissionCategories$FuelArgs<ExtArgs>
    Travel?: boolean | EmissionCategories$TravelArgs<ExtArgs>
    Water?: boolean | EmissionCategories$WaterArgs<ExtArgs>
    _count?: boolean | EmissionCategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emissionCategories"]>



  export type EmissionCategoriesSelectScalar = {
    category_id?: boolean
    category_name?: boolean
  }

  export type EmissionCategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"category_id" | "category_name", ExtArgs["result"]["emissionCategories"]>
  export type EmissionCategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Electricity?: boolean | EmissionCategories$ElectricityArgs<ExtArgs>
    EmissionFactors?: boolean | EmissionCategories$EmissionFactorsArgs<ExtArgs>
    Emissions?: boolean | EmissionCategories$EmissionsArgs<ExtArgs>
    Fuel?: boolean | EmissionCategories$FuelArgs<ExtArgs>
    Travel?: boolean | EmissionCategories$TravelArgs<ExtArgs>
    Water?: boolean | EmissionCategories$WaterArgs<ExtArgs>
    _count?: boolean | EmissionCategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EmissionCategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmissionCategories"
    objects: {
      Electricity: Prisma.$ElectricityPayload<ExtArgs>[]
      EmissionFactors: Prisma.$EmissionFactorsPayload<ExtArgs>[]
      Emissions: Prisma.$EmissionsPayload<ExtArgs>[]
      Fuel: Prisma.$FuelPayload<ExtArgs>[]
      Travel: Prisma.$TravelPayload<ExtArgs>[]
      Water: Prisma.$WaterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      category_id: number
      category_name: string
    }, ExtArgs["result"]["emissionCategories"]>
    composites: {}
  }

  type EmissionCategoriesGetPayload<S extends boolean | null | undefined | EmissionCategoriesDefaultArgs> = $Result.GetResult<Prisma.$EmissionCategoriesPayload, S>

  type EmissionCategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmissionCategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmissionCategoriesCountAggregateInputType | true
    }

  export interface EmissionCategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmissionCategories'], meta: { name: 'EmissionCategories' } }
    /**
     * Find zero or one EmissionCategories that matches the filter.
     * @param {EmissionCategoriesFindUniqueArgs} args - Arguments to find a EmissionCategories
     * @example
     * // Get one EmissionCategories
     * const emissionCategories = await prisma.emissionCategories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmissionCategoriesFindUniqueArgs>(args: SelectSubset<T, EmissionCategoriesFindUniqueArgs<ExtArgs>>): Prisma__EmissionCategoriesClient<$Result.GetResult<Prisma.$EmissionCategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmissionCategories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmissionCategoriesFindUniqueOrThrowArgs} args - Arguments to find a EmissionCategories
     * @example
     * // Get one EmissionCategories
     * const emissionCategories = await prisma.emissionCategories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmissionCategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, EmissionCategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmissionCategoriesClient<$Result.GetResult<Prisma.$EmissionCategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmissionCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionCategoriesFindFirstArgs} args - Arguments to find a EmissionCategories
     * @example
     * // Get one EmissionCategories
     * const emissionCategories = await prisma.emissionCategories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmissionCategoriesFindFirstArgs>(args?: SelectSubset<T, EmissionCategoriesFindFirstArgs<ExtArgs>>): Prisma__EmissionCategoriesClient<$Result.GetResult<Prisma.$EmissionCategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmissionCategories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionCategoriesFindFirstOrThrowArgs} args - Arguments to find a EmissionCategories
     * @example
     * // Get one EmissionCategories
     * const emissionCategories = await prisma.emissionCategories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmissionCategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, EmissionCategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmissionCategoriesClient<$Result.GetResult<Prisma.$EmissionCategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmissionCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionCategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmissionCategories
     * const emissionCategories = await prisma.emissionCategories.findMany()
     * 
     * // Get first 10 EmissionCategories
     * const emissionCategories = await prisma.emissionCategories.findMany({ take: 10 })
     * 
     * // Only select the `category_id`
     * const emissionCategoriesWithCategory_idOnly = await prisma.emissionCategories.findMany({ select: { category_id: true } })
     * 
     */
    findMany<T extends EmissionCategoriesFindManyArgs>(args?: SelectSubset<T, EmissionCategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmissionCategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmissionCategories.
     * @param {EmissionCategoriesCreateArgs} args - Arguments to create a EmissionCategories.
     * @example
     * // Create one EmissionCategories
     * const EmissionCategories = await prisma.emissionCategories.create({
     *   data: {
     *     // ... data to create a EmissionCategories
     *   }
     * })
     * 
     */
    create<T extends EmissionCategoriesCreateArgs>(args: SelectSubset<T, EmissionCategoriesCreateArgs<ExtArgs>>): Prisma__EmissionCategoriesClient<$Result.GetResult<Prisma.$EmissionCategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmissionCategories.
     * @param {EmissionCategoriesCreateManyArgs} args - Arguments to create many EmissionCategories.
     * @example
     * // Create many EmissionCategories
     * const emissionCategories = await prisma.emissionCategories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmissionCategoriesCreateManyArgs>(args?: SelectSubset<T, EmissionCategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EmissionCategories.
     * @param {EmissionCategoriesDeleteArgs} args - Arguments to delete one EmissionCategories.
     * @example
     * // Delete one EmissionCategories
     * const EmissionCategories = await prisma.emissionCategories.delete({
     *   where: {
     *     // ... filter to delete one EmissionCategories
     *   }
     * })
     * 
     */
    delete<T extends EmissionCategoriesDeleteArgs>(args: SelectSubset<T, EmissionCategoriesDeleteArgs<ExtArgs>>): Prisma__EmissionCategoriesClient<$Result.GetResult<Prisma.$EmissionCategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmissionCategories.
     * @param {EmissionCategoriesUpdateArgs} args - Arguments to update one EmissionCategories.
     * @example
     * // Update one EmissionCategories
     * const emissionCategories = await prisma.emissionCategories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmissionCategoriesUpdateArgs>(args: SelectSubset<T, EmissionCategoriesUpdateArgs<ExtArgs>>): Prisma__EmissionCategoriesClient<$Result.GetResult<Prisma.$EmissionCategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmissionCategories.
     * @param {EmissionCategoriesDeleteManyArgs} args - Arguments to filter EmissionCategories to delete.
     * @example
     * // Delete a few EmissionCategories
     * const { count } = await prisma.emissionCategories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmissionCategoriesDeleteManyArgs>(args?: SelectSubset<T, EmissionCategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmissionCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionCategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmissionCategories
     * const emissionCategories = await prisma.emissionCategories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmissionCategoriesUpdateManyArgs>(args: SelectSubset<T, EmissionCategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EmissionCategories.
     * @param {EmissionCategoriesUpsertArgs} args - Arguments to update or create a EmissionCategories.
     * @example
     * // Update or create a EmissionCategories
     * const emissionCategories = await prisma.emissionCategories.upsert({
     *   create: {
     *     // ... data to create a EmissionCategories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmissionCategories we want to update
     *   }
     * })
     */
    upsert<T extends EmissionCategoriesUpsertArgs>(args: SelectSubset<T, EmissionCategoriesUpsertArgs<ExtArgs>>): Prisma__EmissionCategoriesClient<$Result.GetResult<Prisma.$EmissionCategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmissionCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionCategoriesCountArgs} args - Arguments to filter EmissionCategories to count.
     * @example
     * // Count the number of EmissionCategories
     * const count = await prisma.emissionCategories.count({
     *   where: {
     *     // ... the filter for the EmissionCategories we want to count
     *   }
     * })
    **/
    count<T extends EmissionCategoriesCountArgs>(
      args?: Subset<T, EmissionCategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmissionCategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmissionCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionCategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmissionCategoriesAggregateArgs>(args: Subset<T, EmissionCategoriesAggregateArgs>): Prisma.PrismaPromise<GetEmissionCategoriesAggregateType<T>>

    /**
     * Group by EmissionCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionCategoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmissionCategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmissionCategoriesGroupByArgs['orderBy'] }
        : { orderBy?: EmissionCategoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmissionCategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmissionCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmissionCategories model
   */
  readonly fields: EmissionCategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmissionCategories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmissionCategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Electricity<T extends EmissionCategories$ElectricityArgs<ExtArgs> = {}>(args?: Subset<T, EmissionCategories$ElectricityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectricityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    EmissionFactors<T extends EmissionCategories$EmissionFactorsArgs<ExtArgs> = {}>(args?: Subset<T, EmissionCategories$EmissionFactorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmissionFactorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Emissions<T extends EmissionCategories$EmissionsArgs<ExtArgs> = {}>(args?: Subset<T, EmissionCategories$EmissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Fuel<T extends EmissionCategories$FuelArgs<ExtArgs> = {}>(args?: Subset<T, EmissionCategories$FuelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Travel<T extends EmissionCategories$TravelArgs<ExtArgs> = {}>(args?: Subset<T, EmissionCategories$TravelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Water<T extends EmissionCategories$WaterArgs<ExtArgs> = {}>(args?: Subset<T, EmissionCategories$WaterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmissionCategories model
   */
  interface EmissionCategoriesFieldRefs {
    readonly category_id: FieldRef<"EmissionCategories", 'Int'>
    readonly category_name: FieldRef<"EmissionCategories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EmissionCategories findUnique
   */
  export type EmissionCategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionCategories
     */
    select?: EmissionCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionCategories
     */
    omit?: EmissionCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which EmissionCategories to fetch.
     */
    where: EmissionCategoriesWhereUniqueInput
  }

  /**
   * EmissionCategories findUniqueOrThrow
   */
  export type EmissionCategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionCategories
     */
    select?: EmissionCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionCategories
     */
    omit?: EmissionCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which EmissionCategories to fetch.
     */
    where: EmissionCategoriesWhereUniqueInput
  }

  /**
   * EmissionCategories findFirst
   */
  export type EmissionCategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionCategories
     */
    select?: EmissionCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionCategories
     */
    omit?: EmissionCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which EmissionCategories to fetch.
     */
    where?: EmissionCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmissionCategories to fetch.
     */
    orderBy?: EmissionCategoriesOrderByWithRelationInput | EmissionCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmissionCategories.
     */
    cursor?: EmissionCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmissionCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmissionCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmissionCategories.
     */
    distinct?: EmissionCategoriesScalarFieldEnum | EmissionCategoriesScalarFieldEnum[]
  }

  /**
   * EmissionCategories findFirstOrThrow
   */
  export type EmissionCategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionCategories
     */
    select?: EmissionCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionCategories
     */
    omit?: EmissionCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which EmissionCategories to fetch.
     */
    where?: EmissionCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmissionCategories to fetch.
     */
    orderBy?: EmissionCategoriesOrderByWithRelationInput | EmissionCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmissionCategories.
     */
    cursor?: EmissionCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmissionCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmissionCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmissionCategories.
     */
    distinct?: EmissionCategoriesScalarFieldEnum | EmissionCategoriesScalarFieldEnum[]
  }

  /**
   * EmissionCategories findMany
   */
  export type EmissionCategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionCategories
     */
    select?: EmissionCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionCategories
     */
    omit?: EmissionCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which EmissionCategories to fetch.
     */
    where?: EmissionCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmissionCategories to fetch.
     */
    orderBy?: EmissionCategoriesOrderByWithRelationInput | EmissionCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmissionCategories.
     */
    cursor?: EmissionCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmissionCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmissionCategories.
     */
    skip?: number
    distinct?: EmissionCategoriesScalarFieldEnum | EmissionCategoriesScalarFieldEnum[]
  }

  /**
   * EmissionCategories create
   */
  export type EmissionCategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionCategories
     */
    select?: EmissionCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionCategories
     */
    omit?: EmissionCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionCategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a EmissionCategories.
     */
    data: XOR<EmissionCategoriesCreateInput, EmissionCategoriesUncheckedCreateInput>
  }

  /**
   * EmissionCategories createMany
   */
  export type EmissionCategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmissionCategories.
     */
    data: EmissionCategoriesCreateManyInput | EmissionCategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmissionCategories update
   */
  export type EmissionCategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionCategories
     */
    select?: EmissionCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionCategories
     */
    omit?: EmissionCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionCategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a EmissionCategories.
     */
    data: XOR<EmissionCategoriesUpdateInput, EmissionCategoriesUncheckedUpdateInput>
    /**
     * Choose, which EmissionCategories to update.
     */
    where: EmissionCategoriesWhereUniqueInput
  }

  /**
   * EmissionCategories updateMany
   */
  export type EmissionCategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmissionCategories.
     */
    data: XOR<EmissionCategoriesUpdateManyMutationInput, EmissionCategoriesUncheckedUpdateManyInput>
    /**
     * Filter which EmissionCategories to update
     */
    where?: EmissionCategoriesWhereInput
    /**
     * Limit how many EmissionCategories to update.
     */
    limit?: number
  }

  /**
   * EmissionCategories upsert
   */
  export type EmissionCategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionCategories
     */
    select?: EmissionCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionCategories
     */
    omit?: EmissionCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionCategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the EmissionCategories to update in case it exists.
     */
    where: EmissionCategoriesWhereUniqueInput
    /**
     * In case the EmissionCategories found by the `where` argument doesn't exist, create a new EmissionCategories with this data.
     */
    create: XOR<EmissionCategoriesCreateInput, EmissionCategoriesUncheckedCreateInput>
    /**
     * In case the EmissionCategories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmissionCategoriesUpdateInput, EmissionCategoriesUncheckedUpdateInput>
  }

  /**
   * EmissionCategories delete
   */
  export type EmissionCategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionCategories
     */
    select?: EmissionCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionCategories
     */
    omit?: EmissionCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionCategoriesInclude<ExtArgs> | null
    /**
     * Filter which EmissionCategories to delete.
     */
    where: EmissionCategoriesWhereUniqueInput
  }

  /**
   * EmissionCategories deleteMany
   */
  export type EmissionCategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmissionCategories to delete
     */
    where?: EmissionCategoriesWhereInput
    /**
     * Limit how many EmissionCategories to delete.
     */
    limit?: number
  }

  /**
   * EmissionCategories.Electricity
   */
  export type EmissionCategories$ElectricityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Electricity
     */
    select?: ElectricitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Electricity
     */
    omit?: ElectricityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectricityInclude<ExtArgs> | null
    where?: ElectricityWhereInput
    orderBy?: ElectricityOrderByWithRelationInput | ElectricityOrderByWithRelationInput[]
    cursor?: ElectricityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ElectricityScalarFieldEnum | ElectricityScalarFieldEnum[]
  }

  /**
   * EmissionCategories.EmissionFactors
   */
  export type EmissionCategories$EmissionFactorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionFactors
     */
    select?: EmissionFactorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionFactors
     */
    omit?: EmissionFactorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionFactorsInclude<ExtArgs> | null
    where?: EmissionFactorsWhereInput
    orderBy?: EmissionFactorsOrderByWithRelationInput | EmissionFactorsOrderByWithRelationInput[]
    cursor?: EmissionFactorsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmissionFactorsScalarFieldEnum | EmissionFactorsScalarFieldEnum[]
  }

  /**
   * EmissionCategories.Emissions
   */
  export type EmissionCategories$EmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emissions
     */
    select?: EmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emissions
     */
    omit?: EmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionsInclude<ExtArgs> | null
    where?: EmissionsWhereInput
    orderBy?: EmissionsOrderByWithRelationInput | EmissionsOrderByWithRelationInput[]
    cursor?: EmissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmissionsScalarFieldEnum | EmissionsScalarFieldEnum[]
  }

  /**
   * EmissionCategories.Fuel
   */
  export type EmissionCategories$FuelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fuel
     */
    select?: FuelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fuel
     */
    omit?: FuelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelInclude<ExtArgs> | null
    where?: FuelWhereInput
    orderBy?: FuelOrderByWithRelationInput | FuelOrderByWithRelationInput[]
    cursor?: FuelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FuelScalarFieldEnum | FuelScalarFieldEnum[]
  }

  /**
   * EmissionCategories.Travel
   */
  export type EmissionCategories$TravelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    where?: TravelWhereInput
    orderBy?: TravelOrderByWithRelationInput | TravelOrderByWithRelationInput[]
    cursor?: TravelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TravelScalarFieldEnum | TravelScalarFieldEnum[]
  }

  /**
   * EmissionCategories.Water
   */
  export type EmissionCategories$WaterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water
     */
    select?: WaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Water
     */
    omit?: WaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterInclude<ExtArgs> | null
    where?: WaterWhereInput
    orderBy?: WaterOrderByWithRelationInput | WaterOrderByWithRelationInput[]
    cursor?: WaterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaterScalarFieldEnum | WaterScalarFieldEnum[]
  }

  /**
   * EmissionCategories without action
   */
  export type EmissionCategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionCategories
     */
    select?: EmissionCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionCategories
     */
    omit?: EmissionCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionCategoriesInclude<ExtArgs> | null
  }


  /**
   * Model EmissionFactors
   */

  export type AggregateEmissionFactors = {
    _count: EmissionFactorsCountAggregateOutputType | null
    _avg: EmissionFactorsAvgAggregateOutputType | null
    _sum: EmissionFactorsSumAggregateOutputType | null
    _min: EmissionFactorsMinAggregateOutputType | null
    _max: EmissionFactorsMaxAggregateOutputType | null
  }

  export type EmissionFactorsAvgAggregateOutputType = {
    factor_id: number | null
    category_id: number | null
    country_id: number | null
    factor_num: Decimal | null
  }

  export type EmissionFactorsSumAggregateOutputType = {
    factor_id: number | null
    category_id: number | null
    country_id: number | null
    factor_num: Decimal | null
  }

  export type EmissionFactorsMinAggregateOutputType = {
    factor_id: number | null
    category_id: number | null
    subcategory: string | null
    country_id: number | null
    factor_num: Decimal | null
  }

  export type EmissionFactorsMaxAggregateOutputType = {
    factor_id: number | null
    category_id: number | null
    subcategory: string | null
    country_id: number | null
    factor_num: Decimal | null
  }

  export type EmissionFactorsCountAggregateOutputType = {
    factor_id: number
    category_id: number
    subcategory: number
    country_id: number
    factor_num: number
    _all: number
  }


  export type EmissionFactorsAvgAggregateInputType = {
    factor_id?: true
    category_id?: true
    country_id?: true
    factor_num?: true
  }

  export type EmissionFactorsSumAggregateInputType = {
    factor_id?: true
    category_id?: true
    country_id?: true
    factor_num?: true
  }

  export type EmissionFactorsMinAggregateInputType = {
    factor_id?: true
    category_id?: true
    subcategory?: true
    country_id?: true
    factor_num?: true
  }

  export type EmissionFactorsMaxAggregateInputType = {
    factor_id?: true
    category_id?: true
    subcategory?: true
    country_id?: true
    factor_num?: true
  }

  export type EmissionFactorsCountAggregateInputType = {
    factor_id?: true
    category_id?: true
    subcategory?: true
    country_id?: true
    factor_num?: true
    _all?: true
  }

  export type EmissionFactorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmissionFactors to aggregate.
     */
    where?: EmissionFactorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmissionFactors to fetch.
     */
    orderBy?: EmissionFactorsOrderByWithRelationInput | EmissionFactorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmissionFactorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmissionFactors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmissionFactors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmissionFactors
    **/
    _count?: true | EmissionFactorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmissionFactorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmissionFactorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmissionFactorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmissionFactorsMaxAggregateInputType
  }

  export type GetEmissionFactorsAggregateType<T extends EmissionFactorsAggregateArgs> = {
        [P in keyof T & keyof AggregateEmissionFactors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmissionFactors[P]>
      : GetScalarType<T[P], AggregateEmissionFactors[P]>
  }




  export type EmissionFactorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmissionFactorsWhereInput
    orderBy?: EmissionFactorsOrderByWithAggregationInput | EmissionFactorsOrderByWithAggregationInput[]
    by: EmissionFactorsScalarFieldEnum[] | EmissionFactorsScalarFieldEnum
    having?: EmissionFactorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmissionFactorsCountAggregateInputType | true
    _avg?: EmissionFactorsAvgAggregateInputType
    _sum?: EmissionFactorsSumAggregateInputType
    _min?: EmissionFactorsMinAggregateInputType
    _max?: EmissionFactorsMaxAggregateInputType
  }

  export type EmissionFactorsGroupByOutputType = {
    factor_id: number
    category_id: number
    subcategory: string | null
    country_id: number
    factor_num: Decimal
    _count: EmissionFactorsCountAggregateOutputType | null
    _avg: EmissionFactorsAvgAggregateOutputType | null
    _sum: EmissionFactorsSumAggregateOutputType | null
    _min: EmissionFactorsMinAggregateOutputType | null
    _max: EmissionFactorsMaxAggregateOutputType | null
  }

  type GetEmissionFactorsGroupByPayload<T extends EmissionFactorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmissionFactorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmissionFactorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmissionFactorsGroupByOutputType[P]>
            : GetScalarType<T[P], EmissionFactorsGroupByOutputType[P]>
        }
      >
    >


  export type EmissionFactorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    factor_id?: boolean
    category_id?: boolean
    subcategory?: boolean
    country_id?: boolean
    factor_num?: boolean
    Calculations?: boolean | EmissionFactors$CalculationsArgs<ExtArgs>
    Electricity?: boolean | EmissionFactors$ElectricityArgs<ExtArgs>
    Countries?: boolean | CountriesDefaultArgs<ExtArgs>
    EmissionCategories?: boolean | EmissionCategoriesDefaultArgs<ExtArgs>
    Travel?: boolean | EmissionFactors$TravelArgs<ExtArgs>
    Water?: boolean | EmissionFactors$WaterArgs<ExtArgs>
    _count?: boolean | EmissionFactorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emissionFactors"]>



  export type EmissionFactorsSelectScalar = {
    factor_id?: boolean
    category_id?: boolean
    subcategory?: boolean
    country_id?: boolean
    factor_num?: boolean
  }

  export type EmissionFactorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"factor_id" | "category_id" | "subcategory" | "country_id" | "factor_num", ExtArgs["result"]["emissionFactors"]>
  export type EmissionFactorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Calculations?: boolean | EmissionFactors$CalculationsArgs<ExtArgs>
    Electricity?: boolean | EmissionFactors$ElectricityArgs<ExtArgs>
    Countries?: boolean | CountriesDefaultArgs<ExtArgs>
    EmissionCategories?: boolean | EmissionCategoriesDefaultArgs<ExtArgs>
    Travel?: boolean | EmissionFactors$TravelArgs<ExtArgs>
    Water?: boolean | EmissionFactors$WaterArgs<ExtArgs>
    _count?: boolean | EmissionFactorsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EmissionFactorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmissionFactors"
    objects: {
      Calculations: Prisma.$CalculationsPayload<ExtArgs>[]
      Electricity: Prisma.$ElectricityPayload<ExtArgs>[]
      Countries: Prisma.$CountriesPayload<ExtArgs>
      EmissionCategories: Prisma.$EmissionCategoriesPayload<ExtArgs>
      Travel: Prisma.$TravelPayload<ExtArgs>[]
      Water: Prisma.$WaterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      factor_id: number
      category_id: number
      subcategory: string | null
      country_id: number
      factor_num: Prisma.Decimal
    }, ExtArgs["result"]["emissionFactors"]>
    composites: {}
  }

  type EmissionFactorsGetPayload<S extends boolean | null | undefined | EmissionFactorsDefaultArgs> = $Result.GetResult<Prisma.$EmissionFactorsPayload, S>

  type EmissionFactorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmissionFactorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmissionFactorsCountAggregateInputType | true
    }

  export interface EmissionFactorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmissionFactors'], meta: { name: 'EmissionFactors' } }
    /**
     * Find zero or one EmissionFactors that matches the filter.
     * @param {EmissionFactorsFindUniqueArgs} args - Arguments to find a EmissionFactors
     * @example
     * // Get one EmissionFactors
     * const emissionFactors = await prisma.emissionFactors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmissionFactorsFindUniqueArgs>(args: SelectSubset<T, EmissionFactorsFindUniqueArgs<ExtArgs>>): Prisma__EmissionFactorsClient<$Result.GetResult<Prisma.$EmissionFactorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmissionFactors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmissionFactorsFindUniqueOrThrowArgs} args - Arguments to find a EmissionFactors
     * @example
     * // Get one EmissionFactors
     * const emissionFactors = await prisma.emissionFactors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmissionFactorsFindUniqueOrThrowArgs>(args: SelectSubset<T, EmissionFactorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmissionFactorsClient<$Result.GetResult<Prisma.$EmissionFactorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmissionFactors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionFactorsFindFirstArgs} args - Arguments to find a EmissionFactors
     * @example
     * // Get one EmissionFactors
     * const emissionFactors = await prisma.emissionFactors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmissionFactorsFindFirstArgs>(args?: SelectSubset<T, EmissionFactorsFindFirstArgs<ExtArgs>>): Prisma__EmissionFactorsClient<$Result.GetResult<Prisma.$EmissionFactorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmissionFactors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionFactorsFindFirstOrThrowArgs} args - Arguments to find a EmissionFactors
     * @example
     * // Get one EmissionFactors
     * const emissionFactors = await prisma.emissionFactors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmissionFactorsFindFirstOrThrowArgs>(args?: SelectSubset<T, EmissionFactorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmissionFactorsClient<$Result.GetResult<Prisma.$EmissionFactorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmissionFactors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionFactorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmissionFactors
     * const emissionFactors = await prisma.emissionFactors.findMany()
     * 
     * // Get first 10 EmissionFactors
     * const emissionFactors = await prisma.emissionFactors.findMany({ take: 10 })
     * 
     * // Only select the `factor_id`
     * const emissionFactorsWithFactor_idOnly = await prisma.emissionFactors.findMany({ select: { factor_id: true } })
     * 
     */
    findMany<T extends EmissionFactorsFindManyArgs>(args?: SelectSubset<T, EmissionFactorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmissionFactorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmissionFactors.
     * @param {EmissionFactorsCreateArgs} args - Arguments to create a EmissionFactors.
     * @example
     * // Create one EmissionFactors
     * const EmissionFactors = await prisma.emissionFactors.create({
     *   data: {
     *     // ... data to create a EmissionFactors
     *   }
     * })
     * 
     */
    create<T extends EmissionFactorsCreateArgs>(args: SelectSubset<T, EmissionFactorsCreateArgs<ExtArgs>>): Prisma__EmissionFactorsClient<$Result.GetResult<Prisma.$EmissionFactorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmissionFactors.
     * @param {EmissionFactorsCreateManyArgs} args - Arguments to create many EmissionFactors.
     * @example
     * // Create many EmissionFactors
     * const emissionFactors = await prisma.emissionFactors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmissionFactorsCreateManyArgs>(args?: SelectSubset<T, EmissionFactorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EmissionFactors.
     * @param {EmissionFactorsDeleteArgs} args - Arguments to delete one EmissionFactors.
     * @example
     * // Delete one EmissionFactors
     * const EmissionFactors = await prisma.emissionFactors.delete({
     *   where: {
     *     // ... filter to delete one EmissionFactors
     *   }
     * })
     * 
     */
    delete<T extends EmissionFactorsDeleteArgs>(args: SelectSubset<T, EmissionFactorsDeleteArgs<ExtArgs>>): Prisma__EmissionFactorsClient<$Result.GetResult<Prisma.$EmissionFactorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmissionFactors.
     * @param {EmissionFactorsUpdateArgs} args - Arguments to update one EmissionFactors.
     * @example
     * // Update one EmissionFactors
     * const emissionFactors = await prisma.emissionFactors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmissionFactorsUpdateArgs>(args: SelectSubset<T, EmissionFactorsUpdateArgs<ExtArgs>>): Prisma__EmissionFactorsClient<$Result.GetResult<Prisma.$EmissionFactorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmissionFactors.
     * @param {EmissionFactorsDeleteManyArgs} args - Arguments to filter EmissionFactors to delete.
     * @example
     * // Delete a few EmissionFactors
     * const { count } = await prisma.emissionFactors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmissionFactorsDeleteManyArgs>(args?: SelectSubset<T, EmissionFactorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmissionFactors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionFactorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmissionFactors
     * const emissionFactors = await prisma.emissionFactors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmissionFactorsUpdateManyArgs>(args: SelectSubset<T, EmissionFactorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EmissionFactors.
     * @param {EmissionFactorsUpsertArgs} args - Arguments to update or create a EmissionFactors.
     * @example
     * // Update or create a EmissionFactors
     * const emissionFactors = await prisma.emissionFactors.upsert({
     *   create: {
     *     // ... data to create a EmissionFactors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmissionFactors we want to update
     *   }
     * })
     */
    upsert<T extends EmissionFactorsUpsertArgs>(args: SelectSubset<T, EmissionFactorsUpsertArgs<ExtArgs>>): Prisma__EmissionFactorsClient<$Result.GetResult<Prisma.$EmissionFactorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmissionFactors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionFactorsCountArgs} args - Arguments to filter EmissionFactors to count.
     * @example
     * // Count the number of EmissionFactors
     * const count = await prisma.emissionFactors.count({
     *   where: {
     *     // ... the filter for the EmissionFactors we want to count
     *   }
     * })
    **/
    count<T extends EmissionFactorsCountArgs>(
      args?: Subset<T, EmissionFactorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmissionFactorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmissionFactors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionFactorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmissionFactorsAggregateArgs>(args: Subset<T, EmissionFactorsAggregateArgs>): Prisma.PrismaPromise<GetEmissionFactorsAggregateType<T>>

    /**
     * Group by EmissionFactors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionFactorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmissionFactorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmissionFactorsGroupByArgs['orderBy'] }
        : { orderBy?: EmissionFactorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmissionFactorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmissionFactorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmissionFactors model
   */
  readonly fields: EmissionFactorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmissionFactors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmissionFactorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Calculations<T extends EmissionFactors$CalculationsArgs<ExtArgs> = {}>(args?: Subset<T, EmissionFactors$CalculationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalculationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Electricity<T extends EmissionFactors$ElectricityArgs<ExtArgs> = {}>(args?: Subset<T, EmissionFactors$ElectricityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectricityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Countries<T extends CountriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountriesDefaultArgs<ExtArgs>>): Prisma__CountriesClient<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    EmissionCategories<T extends EmissionCategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmissionCategoriesDefaultArgs<ExtArgs>>): Prisma__EmissionCategoriesClient<$Result.GetResult<Prisma.$EmissionCategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Travel<T extends EmissionFactors$TravelArgs<ExtArgs> = {}>(args?: Subset<T, EmissionFactors$TravelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Water<T extends EmissionFactors$WaterArgs<ExtArgs> = {}>(args?: Subset<T, EmissionFactors$WaterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmissionFactors model
   */
  interface EmissionFactorsFieldRefs {
    readonly factor_id: FieldRef<"EmissionFactors", 'Int'>
    readonly category_id: FieldRef<"EmissionFactors", 'Int'>
    readonly subcategory: FieldRef<"EmissionFactors", 'String'>
    readonly country_id: FieldRef<"EmissionFactors", 'Int'>
    readonly factor_num: FieldRef<"EmissionFactors", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * EmissionFactors findUnique
   */
  export type EmissionFactorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionFactors
     */
    select?: EmissionFactorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionFactors
     */
    omit?: EmissionFactorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionFactorsInclude<ExtArgs> | null
    /**
     * Filter, which EmissionFactors to fetch.
     */
    where: EmissionFactorsWhereUniqueInput
  }

  /**
   * EmissionFactors findUniqueOrThrow
   */
  export type EmissionFactorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionFactors
     */
    select?: EmissionFactorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionFactors
     */
    omit?: EmissionFactorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionFactorsInclude<ExtArgs> | null
    /**
     * Filter, which EmissionFactors to fetch.
     */
    where: EmissionFactorsWhereUniqueInput
  }

  /**
   * EmissionFactors findFirst
   */
  export type EmissionFactorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionFactors
     */
    select?: EmissionFactorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionFactors
     */
    omit?: EmissionFactorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionFactorsInclude<ExtArgs> | null
    /**
     * Filter, which EmissionFactors to fetch.
     */
    where?: EmissionFactorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmissionFactors to fetch.
     */
    orderBy?: EmissionFactorsOrderByWithRelationInput | EmissionFactorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmissionFactors.
     */
    cursor?: EmissionFactorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmissionFactors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmissionFactors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmissionFactors.
     */
    distinct?: EmissionFactorsScalarFieldEnum | EmissionFactorsScalarFieldEnum[]
  }

  /**
   * EmissionFactors findFirstOrThrow
   */
  export type EmissionFactorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionFactors
     */
    select?: EmissionFactorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionFactors
     */
    omit?: EmissionFactorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionFactorsInclude<ExtArgs> | null
    /**
     * Filter, which EmissionFactors to fetch.
     */
    where?: EmissionFactorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmissionFactors to fetch.
     */
    orderBy?: EmissionFactorsOrderByWithRelationInput | EmissionFactorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmissionFactors.
     */
    cursor?: EmissionFactorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmissionFactors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmissionFactors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmissionFactors.
     */
    distinct?: EmissionFactorsScalarFieldEnum | EmissionFactorsScalarFieldEnum[]
  }

  /**
   * EmissionFactors findMany
   */
  export type EmissionFactorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionFactors
     */
    select?: EmissionFactorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionFactors
     */
    omit?: EmissionFactorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionFactorsInclude<ExtArgs> | null
    /**
     * Filter, which EmissionFactors to fetch.
     */
    where?: EmissionFactorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmissionFactors to fetch.
     */
    orderBy?: EmissionFactorsOrderByWithRelationInput | EmissionFactorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmissionFactors.
     */
    cursor?: EmissionFactorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmissionFactors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmissionFactors.
     */
    skip?: number
    distinct?: EmissionFactorsScalarFieldEnum | EmissionFactorsScalarFieldEnum[]
  }

  /**
   * EmissionFactors create
   */
  export type EmissionFactorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionFactors
     */
    select?: EmissionFactorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionFactors
     */
    omit?: EmissionFactorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionFactorsInclude<ExtArgs> | null
    /**
     * The data needed to create a EmissionFactors.
     */
    data: XOR<EmissionFactorsCreateInput, EmissionFactorsUncheckedCreateInput>
  }

  /**
   * EmissionFactors createMany
   */
  export type EmissionFactorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmissionFactors.
     */
    data: EmissionFactorsCreateManyInput | EmissionFactorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmissionFactors update
   */
  export type EmissionFactorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionFactors
     */
    select?: EmissionFactorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionFactors
     */
    omit?: EmissionFactorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionFactorsInclude<ExtArgs> | null
    /**
     * The data needed to update a EmissionFactors.
     */
    data: XOR<EmissionFactorsUpdateInput, EmissionFactorsUncheckedUpdateInput>
    /**
     * Choose, which EmissionFactors to update.
     */
    where: EmissionFactorsWhereUniqueInput
  }

  /**
   * EmissionFactors updateMany
   */
  export type EmissionFactorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmissionFactors.
     */
    data: XOR<EmissionFactorsUpdateManyMutationInput, EmissionFactorsUncheckedUpdateManyInput>
    /**
     * Filter which EmissionFactors to update
     */
    where?: EmissionFactorsWhereInput
    /**
     * Limit how many EmissionFactors to update.
     */
    limit?: number
  }

  /**
   * EmissionFactors upsert
   */
  export type EmissionFactorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionFactors
     */
    select?: EmissionFactorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionFactors
     */
    omit?: EmissionFactorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionFactorsInclude<ExtArgs> | null
    /**
     * The filter to search for the EmissionFactors to update in case it exists.
     */
    where: EmissionFactorsWhereUniqueInput
    /**
     * In case the EmissionFactors found by the `where` argument doesn't exist, create a new EmissionFactors with this data.
     */
    create: XOR<EmissionFactorsCreateInput, EmissionFactorsUncheckedCreateInput>
    /**
     * In case the EmissionFactors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmissionFactorsUpdateInput, EmissionFactorsUncheckedUpdateInput>
  }

  /**
   * EmissionFactors delete
   */
  export type EmissionFactorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionFactors
     */
    select?: EmissionFactorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionFactors
     */
    omit?: EmissionFactorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionFactorsInclude<ExtArgs> | null
    /**
     * Filter which EmissionFactors to delete.
     */
    where: EmissionFactorsWhereUniqueInput
  }

  /**
   * EmissionFactors deleteMany
   */
  export type EmissionFactorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmissionFactors to delete
     */
    where?: EmissionFactorsWhereInput
    /**
     * Limit how many EmissionFactors to delete.
     */
    limit?: number
  }

  /**
   * EmissionFactors.Calculations
   */
  export type EmissionFactors$CalculationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calculations
     */
    select?: CalculationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calculations
     */
    omit?: CalculationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationsInclude<ExtArgs> | null
    where?: CalculationsWhereInput
    orderBy?: CalculationsOrderByWithRelationInput | CalculationsOrderByWithRelationInput[]
    cursor?: CalculationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CalculationsScalarFieldEnum | CalculationsScalarFieldEnum[]
  }

  /**
   * EmissionFactors.Electricity
   */
  export type EmissionFactors$ElectricityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Electricity
     */
    select?: ElectricitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Electricity
     */
    omit?: ElectricityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectricityInclude<ExtArgs> | null
    where?: ElectricityWhereInput
    orderBy?: ElectricityOrderByWithRelationInput | ElectricityOrderByWithRelationInput[]
    cursor?: ElectricityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ElectricityScalarFieldEnum | ElectricityScalarFieldEnum[]
  }

  /**
   * EmissionFactors.Travel
   */
  export type EmissionFactors$TravelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    where?: TravelWhereInput
    orderBy?: TravelOrderByWithRelationInput | TravelOrderByWithRelationInput[]
    cursor?: TravelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TravelScalarFieldEnum | TravelScalarFieldEnum[]
  }

  /**
   * EmissionFactors.Water
   */
  export type EmissionFactors$WaterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water
     */
    select?: WaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Water
     */
    omit?: WaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterInclude<ExtArgs> | null
    where?: WaterWhereInput
    orderBy?: WaterOrderByWithRelationInput | WaterOrderByWithRelationInput[]
    cursor?: WaterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaterScalarFieldEnum | WaterScalarFieldEnum[]
  }

  /**
   * EmissionFactors without action
   */
  export type EmissionFactorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionFactors
     */
    select?: EmissionFactorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionFactors
     */
    omit?: EmissionFactorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionFactorsInclude<ExtArgs> | null
  }


  /**
   * Model Emissions
   */

  export type AggregateEmissions = {
    _count: EmissionsCountAggregateOutputType | null
    _avg: EmissionsAvgAggregateOutputType | null
    _sum: EmissionsSumAggregateOutputType | null
    _min: EmissionsMinAggregateOutputType | null
    _max: EmissionsMaxAggregateOutputType | null
  }

  export type EmissionsAvgAggregateOutputType = {
    emission_id: number | null
    user_id: number | null
    country_id: number | null
    category_id: number | null
    emission_value: Decimal | null
  }

  export type EmissionsSumAggregateOutputType = {
    emission_id: number | null
    user_id: number | null
    country_id: number | null
    category_id: number | null
    emission_value: Decimal | null
  }

  export type EmissionsMinAggregateOutputType = {
    emission_id: number | null
    user_id: number | null
    country_id: number | null
    category_id: number | null
    emission_value: Decimal | null
  }

  export type EmissionsMaxAggregateOutputType = {
    emission_id: number | null
    user_id: number | null
    country_id: number | null
    category_id: number | null
    emission_value: Decimal | null
  }

  export type EmissionsCountAggregateOutputType = {
    emission_id: number
    user_id: number
    country_id: number
    category_id: number
    emission_value: number
    _all: number
  }


  export type EmissionsAvgAggregateInputType = {
    emission_id?: true
    user_id?: true
    country_id?: true
    category_id?: true
    emission_value?: true
  }

  export type EmissionsSumAggregateInputType = {
    emission_id?: true
    user_id?: true
    country_id?: true
    category_id?: true
    emission_value?: true
  }

  export type EmissionsMinAggregateInputType = {
    emission_id?: true
    user_id?: true
    country_id?: true
    category_id?: true
    emission_value?: true
  }

  export type EmissionsMaxAggregateInputType = {
    emission_id?: true
    user_id?: true
    country_id?: true
    category_id?: true
    emission_value?: true
  }

  export type EmissionsCountAggregateInputType = {
    emission_id?: true
    user_id?: true
    country_id?: true
    category_id?: true
    emission_value?: true
    _all?: true
  }

  export type EmissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emissions to aggregate.
     */
    where?: EmissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emissions to fetch.
     */
    orderBy?: EmissionsOrderByWithRelationInput | EmissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Emissions
    **/
    _count?: true | EmissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmissionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmissionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmissionsMaxAggregateInputType
  }

  export type GetEmissionsAggregateType<T extends EmissionsAggregateArgs> = {
        [P in keyof T & keyof AggregateEmissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmissions[P]>
      : GetScalarType<T[P], AggregateEmissions[P]>
  }




  export type EmissionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmissionsWhereInput
    orderBy?: EmissionsOrderByWithAggregationInput | EmissionsOrderByWithAggregationInput[]
    by: EmissionsScalarFieldEnum[] | EmissionsScalarFieldEnum
    having?: EmissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmissionsCountAggregateInputType | true
    _avg?: EmissionsAvgAggregateInputType
    _sum?: EmissionsSumAggregateInputType
    _min?: EmissionsMinAggregateInputType
    _max?: EmissionsMaxAggregateInputType
  }

  export type EmissionsGroupByOutputType = {
    emission_id: number
    user_id: number
    country_id: number
    category_id: number
    emission_value: Decimal
    _count: EmissionsCountAggregateOutputType | null
    _avg: EmissionsAvgAggregateOutputType | null
    _sum: EmissionsSumAggregateOutputType | null
    _min: EmissionsMinAggregateOutputType | null
    _max: EmissionsMaxAggregateOutputType | null
  }

  type GetEmissionsGroupByPayload<T extends EmissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmissionsGroupByOutputType[P]>
            : GetScalarType<T[P], EmissionsGroupByOutputType[P]>
        }
      >
    >


  export type EmissionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    emission_id?: boolean
    user_id?: boolean
    country_id?: boolean
    category_id?: boolean
    emission_value?: boolean
    Countries?: boolean | CountriesDefaultArgs<ExtArgs>
    EmissionCategories?: boolean | EmissionCategoriesDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emissions"]>



  export type EmissionsSelectScalar = {
    emission_id?: boolean
    user_id?: boolean
    country_id?: boolean
    category_id?: boolean
    emission_value?: boolean
  }

  export type EmissionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"emission_id" | "user_id" | "country_id" | "category_id" | "emission_value", ExtArgs["result"]["emissions"]>
  export type EmissionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Countries?: boolean | CountriesDefaultArgs<ExtArgs>
    EmissionCategories?: boolean | EmissionCategoriesDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $EmissionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Emissions"
    objects: {
      Countries: Prisma.$CountriesPayload<ExtArgs>
      EmissionCategories: Prisma.$EmissionCategoriesPayload<ExtArgs>
      Users: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      emission_id: number
      user_id: number
      country_id: number
      category_id: number
      emission_value: Prisma.Decimal
    }, ExtArgs["result"]["emissions"]>
    composites: {}
  }

  type EmissionsGetPayload<S extends boolean | null | undefined | EmissionsDefaultArgs> = $Result.GetResult<Prisma.$EmissionsPayload, S>

  type EmissionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmissionsCountAggregateInputType | true
    }

  export interface EmissionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Emissions'], meta: { name: 'Emissions' } }
    /**
     * Find zero or one Emissions that matches the filter.
     * @param {EmissionsFindUniqueArgs} args - Arguments to find a Emissions
     * @example
     * // Get one Emissions
     * const emissions = await prisma.emissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmissionsFindUniqueArgs>(args: SelectSubset<T, EmissionsFindUniqueArgs<ExtArgs>>): Prisma__EmissionsClient<$Result.GetResult<Prisma.$EmissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Emissions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmissionsFindUniqueOrThrowArgs} args - Arguments to find a Emissions
     * @example
     * // Get one Emissions
     * const emissions = await prisma.emissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmissionsFindUniqueOrThrowArgs>(args: SelectSubset<T, EmissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmissionsClient<$Result.GetResult<Prisma.$EmissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionsFindFirstArgs} args - Arguments to find a Emissions
     * @example
     * // Get one Emissions
     * const emissions = await prisma.emissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmissionsFindFirstArgs>(args?: SelectSubset<T, EmissionsFindFirstArgs<ExtArgs>>): Prisma__EmissionsClient<$Result.GetResult<Prisma.$EmissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionsFindFirstOrThrowArgs} args - Arguments to find a Emissions
     * @example
     * // Get one Emissions
     * const emissions = await prisma.emissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmissionsFindFirstOrThrowArgs>(args?: SelectSubset<T, EmissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmissionsClient<$Result.GetResult<Prisma.$EmissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Emissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emissions
     * const emissions = await prisma.emissions.findMany()
     * 
     * // Get first 10 Emissions
     * const emissions = await prisma.emissions.findMany({ take: 10 })
     * 
     * // Only select the `emission_id`
     * const emissionsWithEmission_idOnly = await prisma.emissions.findMany({ select: { emission_id: true } })
     * 
     */
    findMany<T extends EmissionsFindManyArgs>(args?: SelectSubset<T, EmissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Emissions.
     * @param {EmissionsCreateArgs} args - Arguments to create a Emissions.
     * @example
     * // Create one Emissions
     * const Emissions = await prisma.emissions.create({
     *   data: {
     *     // ... data to create a Emissions
     *   }
     * })
     * 
     */
    create<T extends EmissionsCreateArgs>(args: SelectSubset<T, EmissionsCreateArgs<ExtArgs>>): Prisma__EmissionsClient<$Result.GetResult<Prisma.$EmissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Emissions.
     * @param {EmissionsCreateManyArgs} args - Arguments to create many Emissions.
     * @example
     * // Create many Emissions
     * const emissions = await prisma.emissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmissionsCreateManyArgs>(args?: SelectSubset<T, EmissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Emissions.
     * @param {EmissionsDeleteArgs} args - Arguments to delete one Emissions.
     * @example
     * // Delete one Emissions
     * const Emissions = await prisma.emissions.delete({
     *   where: {
     *     // ... filter to delete one Emissions
     *   }
     * })
     * 
     */
    delete<T extends EmissionsDeleteArgs>(args: SelectSubset<T, EmissionsDeleteArgs<ExtArgs>>): Prisma__EmissionsClient<$Result.GetResult<Prisma.$EmissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Emissions.
     * @param {EmissionsUpdateArgs} args - Arguments to update one Emissions.
     * @example
     * // Update one Emissions
     * const emissions = await prisma.emissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmissionsUpdateArgs>(args: SelectSubset<T, EmissionsUpdateArgs<ExtArgs>>): Prisma__EmissionsClient<$Result.GetResult<Prisma.$EmissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Emissions.
     * @param {EmissionsDeleteManyArgs} args - Arguments to filter Emissions to delete.
     * @example
     * // Delete a few Emissions
     * const { count } = await prisma.emissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmissionsDeleteManyArgs>(args?: SelectSubset<T, EmissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emissions
     * const emissions = await prisma.emissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmissionsUpdateManyArgs>(args: SelectSubset<T, EmissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Emissions.
     * @param {EmissionsUpsertArgs} args - Arguments to update or create a Emissions.
     * @example
     * // Update or create a Emissions
     * const emissions = await prisma.emissions.upsert({
     *   create: {
     *     // ... data to create a Emissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Emissions we want to update
     *   }
     * })
     */
    upsert<T extends EmissionsUpsertArgs>(args: SelectSubset<T, EmissionsUpsertArgs<ExtArgs>>): Prisma__EmissionsClient<$Result.GetResult<Prisma.$EmissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Emissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionsCountArgs} args - Arguments to filter Emissions to count.
     * @example
     * // Count the number of Emissions
     * const count = await prisma.emissions.count({
     *   where: {
     *     // ... the filter for the Emissions we want to count
     *   }
     * })
    **/
    count<T extends EmissionsCountArgs>(
      args?: Subset<T, EmissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Emissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmissionsAggregateArgs>(args: Subset<T, EmissionsAggregateArgs>): Prisma.PrismaPromise<GetEmissionsAggregateType<T>>

    /**
     * Group by Emissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmissionsGroupByArgs['orderBy'] }
        : { orderBy?: EmissionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Emissions model
   */
  readonly fields: EmissionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Emissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmissionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Countries<T extends CountriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountriesDefaultArgs<ExtArgs>>): Prisma__CountriesClient<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    EmissionCategories<T extends EmissionCategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmissionCategoriesDefaultArgs<ExtArgs>>): Prisma__EmissionCategoriesClient<$Result.GetResult<Prisma.$EmissionCategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Emissions model
   */
  interface EmissionsFieldRefs {
    readonly emission_id: FieldRef<"Emissions", 'Int'>
    readonly user_id: FieldRef<"Emissions", 'Int'>
    readonly country_id: FieldRef<"Emissions", 'Int'>
    readonly category_id: FieldRef<"Emissions", 'Int'>
    readonly emission_value: FieldRef<"Emissions", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Emissions findUnique
   */
  export type EmissionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emissions
     */
    select?: EmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emissions
     */
    omit?: EmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionsInclude<ExtArgs> | null
    /**
     * Filter, which Emissions to fetch.
     */
    where: EmissionsWhereUniqueInput
  }

  /**
   * Emissions findUniqueOrThrow
   */
  export type EmissionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emissions
     */
    select?: EmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emissions
     */
    omit?: EmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionsInclude<ExtArgs> | null
    /**
     * Filter, which Emissions to fetch.
     */
    where: EmissionsWhereUniqueInput
  }

  /**
   * Emissions findFirst
   */
  export type EmissionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emissions
     */
    select?: EmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emissions
     */
    omit?: EmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionsInclude<ExtArgs> | null
    /**
     * Filter, which Emissions to fetch.
     */
    where?: EmissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emissions to fetch.
     */
    orderBy?: EmissionsOrderByWithRelationInput | EmissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emissions.
     */
    cursor?: EmissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emissions.
     */
    distinct?: EmissionsScalarFieldEnum | EmissionsScalarFieldEnum[]
  }

  /**
   * Emissions findFirstOrThrow
   */
  export type EmissionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emissions
     */
    select?: EmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emissions
     */
    omit?: EmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionsInclude<ExtArgs> | null
    /**
     * Filter, which Emissions to fetch.
     */
    where?: EmissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emissions to fetch.
     */
    orderBy?: EmissionsOrderByWithRelationInput | EmissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emissions.
     */
    cursor?: EmissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emissions.
     */
    distinct?: EmissionsScalarFieldEnum | EmissionsScalarFieldEnum[]
  }

  /**
   * Emissions findMany
   */
  export type EmissionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emissions
     */
    select?: EmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emissions
     */
    omit?: EmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionsInclude<ExtArgs> | null
    /**
     * Filter, which Emissions to fetch.
     */
    where?: EmissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emissions to fetch.
     */
    orderBy?: EmissionsOrderByWithRelationInput | EmissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Emissions.
     */
    cursor?: EmissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emissions.
     */
    skip?: number
    distinct?: EmissionsScalarFieldEnum | EmissionsScalarFieldEnum[]
  }

  /**
   * Emissions create
   */
  export type EmissionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emissions
     */
    select?: EmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emissions
     */
    omit?: EmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Emissions.
     */
    data: XOR<EmissionsCreateInput, EmissionsUncheckedCreateInput>
  }

  /**
   * Emissions createMany
   */
  export type EmissionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Emissions.
     */
    data: EmissionsCreateManyInput | EmissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Emissions update
   */
  export type EmissionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emissions
     */
    select?: EmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emissions
     */
    omit?: EmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Emissions.
     */
    data: XOR<EmissionsUpdateInput, EmissionsUncheckedUpdateInput>
    /**
     * Choose, which Emissions to update.
     */
    where: EmissionsWhereUniqueInput
  }

  /**
   * Emissions updateMany
   */
  export type EmissionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Emissions.
     */
    data: XOR<EmissionsUpdateManyMutationInput, EmissionsUncheckedUpdateManyInput>
    /**
     * Filter which Emissions to update
     */
    where?: EmissionsWhereInput
    /**
     * Limit how many Emissions to update.
     */
    limit?: number
  }

  /**
   * Emissions upsert
   */
  export type EmissionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emissions
     */
    select?: EmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emissions
     */
    omit?: EmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Emissions to update in case it exists.
     */
    where: EmissionsWhereUniqueInput
    /**
     * In case the Emissions found by the `where` argument doesn't exist, create a new Emissions with this data.
     */
    create: XOR<EmissionsCreateInput, EmissionsUncheckedCreateInput>
    /**
     * In case the Emissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmissionsUpdateInput, EmissionsUncheckedUpdateInput>
  }

  /**
   * Emissions delete
   */
  export type EmissionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emissions
     */
    select?: EmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emissions
     */
    omit?: EmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionsInclude<ExtArgs> | null
    /**
     * Filter which Emissions to delete.
     */
    where: EmissionsWhereUniqueInput
  }

  /**
   * Emissions deleteMany
   */
  export type EmissionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emissions to delete
     */
    where?: EmissionsWhereInput
    /**
     * Limit how many Emissions to delete.
     */
    limit?: number
  }

  /**
   * Emissions without action
   */
  export type EmissionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emissions
     */
    select?: EmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emissions
     */
    omit?: EmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionsInclude<ExtArgs> | null
  }


  /**
   * Model Fuel
   */

  export type AggregateFuel = {
    _count: FuelCountAggregateOutputType | null
    _avg: FuelAvgAggregateOutputType | null
    _sum: FuelSumAggregateOutputType | null
    _min: FuelMinAggregateOutputType | null
    _max: FuelMaxAggregateOutputType | null
  }

  export type FuelAvgAggregateOutputType = {
    fuel_id: number | null
    category_id: number | null
  }

  export type FuelSumAggregateOutputType = {
    fuel_id: number | null
    category_id: number | null
  }

  export type FuelMinAggregateOutputType = {
    fuel_id: number | null
    fuel_name: string | null
    category_id: number | null
  }

  export type FuelMaxAggregateOutputType = {
    fuel_id: number | null
    fuel_name: string | null
    category_id: number | null
  }

  export type FuelCountAggregateOutputType = {
    fuel_id: number
    fuel_name: number
    category_id: number
    _all: number
  }


  export type FuelAvgAggregateInputType = {
    fuel_id?: true
    category_id?: true
  }

  export type FuelSumAggregateInputType = {
    fuel_id?: true
    category_id?: true
  }

  export type FuelMinAggregateInputType = {
    fuel_id?: true
    fuel_name?: true
    category_id?: true
  }

  export type FuelMaxAggregateInputType = {
    fuel_id?: true
    fuel_name?: true
    category_id?: true
  }

  export type FuelCountAggregateInputType = {
    fuel_id?: true
    fuel_name?: true
    category_id?: true
    _all?: true
  }

  export type FuelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fuel to aggregate.
     */
    where?: FuelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fuels to fetch.
     */
    orderBy?: FuelOrderByWithRelationInput | FuelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FuelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fuels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fuels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fuels
    **/
    _count?: true | FuelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FuelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FuelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuelMaxAggregateInputType
  }

  export type GetFuelAggregateType<T extends FuelAggregateArgs> = {
        [P in keyof T & keyof AggregateFuel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuel[P]>
      : GetScalarType<T[P], AggregateFuel[P]>
  }




  export type FuelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuelWhereInput
    orderBy?: FuelOrderByWithAggregationInput | FuelOrderByWithAggregationInput[]
    by: FuelScalarFieldEnum[] | FuelScalarFieldEnum
    having?: FuelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuelCountAggregateInputType | true
    _avg?: FuelAvgAggregateInputType
    _sum?: FuelSumAggregateInputType
    _min?: FuelMinAggregateInputType
    _max?: FuelMaxAggregateInputType
  }

  export type FuelGroupByOutputType = {
    fuel_id: number
    fuel_name: string
    category_id: number | null
    _count: FuelCountAggregateOutputType | null
    _avg: FuelAvgAggregateOutputType | null
    _sum: FuelSumAggregateOutputType | null
    _min: FuelMinAggregateOutputType | null
    _max: FuelMaxAggregateOutputType | null
  }

  type GetFuelGroupByPayload<T extends FuelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuelGroupByOutputType[P]>
            : GetScalarType<T[P], FuelGroupByOutputType[P]>
        }
      >
    >


  export type FuelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fuel_id?: boolean
    fuel_name?: boolean
    category_id?: boolean
    EmissionCategories?: boolean | Fuel$EmissionCategoriesArgs<ExtArgs>
    Vehicle_Fuel_Relation?: boolean | Fuel$Vehicle_Fuel_RelationArgs<ExtArgs>
    _count?: boolean | FuelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fuel"]>



  export type FuelSelectScalar = {
    fuel_id?: boolean
    fuel_name?: boolean
    category_id?: boolean
  }

  export type FuelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"fuel_id" | "fuel_name" | "category_id", ExtArgs["result"]["fuel"]>
  export type FuelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EmissionCategories?: boolean | Fuel$EmissionCategoriesArgs<ExtArgs>
    Vehicle_Fuel_Relation?: boolean | Fuel$Vehicle_Fuel_RelationArgs<ExtArgs>
    _count?: boolean | FuelCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FuelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fuel"
    objects: {
      EmissionCategories: Prisma.$EmissionCategoriesPayload<ExtArgs> | null
      Vehicle_Fuel_Relation: Prisma.$Vehicle_Fuel_RelationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      fuel_id: number
      fuel_name: string
      category_id: number | null
    }, ExtArgs["result"]["fuel"]>
    composites: {}
  }

  type FuelGetPayload<S extends boolean | null | undefined | FuelDefaultArgs> = $Result.GetResult<Prisma.$FuelPayload, S>

  type FuelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FuelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FuelCountAggregateInputType | true
    }

  export interface FuelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fuel'], meta: { name: 'Fuel' } }
    /**
     * Find zero or one Fuel that matches the filter.
     * @param {FuelFindUniqueArgs} args - Arguments to find a Fuel
     * @example
     * // Get one Fuel
     * const fuel = await prisma.fuel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FuelFindUniqueArgs>(args: SelectSubset<T, FuelFindUniqueArgs<ExtArgs>>): Prisma__FuelClient<$Result.GetResult<Prisma.$FuelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fuel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FuelFindUniqueOrThrowArgs} args - Arguments to find a Fuel
     * @example
     * // Get one Fuel
     * const fuel = await prisma.fuel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FuelFindUniqueOrThrowArgs>(args: SelectSubset<T, FuelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FuelClient<$Result.GetResult<Prisma.$FuelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fuel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelFindFirstArgs} args - Arguments to find a Fuel
     * @example
     * // Get one Fuel
     * const fuel = await prisma.fuel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FuelFindFirstArgs>(args?: SelectSubset<T, FuelFindFirstArgs<ExtArgs>>): Prisma__FuelClient<$Result.GetResult<Prisma.$FuelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fuel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelFindFirstOrThrowArgs} args - Arguments to find a Fuel
     * @example
     * // Get one Fuel
     * const fuel = await prisma.fuel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FuelFindFirstOrThrowArgs>(args?: SelectSubset<T, FuelFindFirstOrThrowArgs<ExtArgs>>): Prisma__FuelClient<$Result.GetResult<Prisma.$FuelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fuels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fuels
     * const fuels = await prisma.fuel.findMany()
     * 
     * // Get first 10 Fuels
     * const fuels = await prisma.fuel.findMany({ take: 10 })
     * 
     * // Only select the `fuel_id`
     * const fuelWithFuel_idOnly = await prisma.fuel.findMany({ select: { fuel_id: true } })
     * 
     */
    findMany<T extends FuelFindManyArgs>(args?: SelectSubset<T, FuelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fuel.
     * @param {FuelCreateArgs} args - Arguments to create a Fuel.
     * @example
     * // Create one Fuel
     * const Fuel = await prisma.fuel.create({
     *   data: {
     *     // ... data to create a Fuel
     *   }
     * })
     * 
     */
    create<T extends FuelCreateArgs>(args: SelectSubset<T, FuelCreateArgs<ExtArgs>>): Prisma__FuelClient<$Result.GetResult<Prisma.$FuelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fuels.
     * @param {FuelCreateManyArgs} args - Arguments to create many Fuels.
     * @example
     * // Create many Fuels
     * const fuel = await prisma.fuel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FuelCreateManyArgs>(args?: SelectSubset<T, FuelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fuel.
     * @param {FuelDeleteArgs} args - Arguments to delete one Fuel.
     * @example
     * // Delete one Fuel
     * const Fuel = await prisma.fuel.delete({
     *   where: {
     *     // ... filter to delete one Fuel
     *   }
     * })
     * 
     */
    delete<T extends FuelDeleteArgs>(args: SelectSubset<T, FuelDeleteArgs<ExtArgs>>): Prisma__FuelClient<$Result.GetResult<Prisma.$FuelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fuel.
     * @param {FuelUpdateArgs} args - Arguments to update one Fuel.
     * @example
     * // Update one Fuel
     * const fuel = await prisma.fuel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FuelUpdateArgs>(args: SelectSubset<T, FuelUpdateArgs<ExtArgs>>): Prisma__FuelClient<$Result.GetResult<Prisma.$FuelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fuels.
     * @param {FuelDeleteManyArgs} args - Arguments to filter Fuels to delete.
     * @example
     * // Delete a few Fuels
     * const { count } = await prisma.fuel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FuelDeleteManyArgs>(args?: SelectSubset<T, FuelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fuels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fuels
     * const fuel = await prisma.fuel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FuelUpdateManyArgs>(args: SelectSubset<T, FuelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fuel.
     * @param {FuelUpsertArgs} args - Arguments to update or create a Fuel.
     * @example
     * // Update or create a Fuel
     * const fuel = await prisma.fuel.upsert({
     *   create: {
     *     // ... data to create a Fuel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fuel we want to update
     *   }
     * })
     */
    upsert<T extends FuelUpsertArgs>(args: SelectSubset<T, FuelUpsertArgs<ExtArgs>>): Prisma__FuelClient<$Result.GetResult<Prisma.$FuelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fuels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelCountArgs} args - Arguments to filter Fuels to count.
     * @example
     * // Count the number of Fuels
     * const count = await prisma.fuel.count({
     *   where: {
     *     // ... the filter for the Fuels we want to count
     *   }
     * })
    **/
    count<T extends FuelCountArgs>(
      args?: Subset<T, FuelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fuel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FuelAggregateArgs>(args: Subset<T, FuelAggregateArgs>): Prisma.PrismaPromise<GetFuelAggregateType<T>>

    /**
     * Group by Fuel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FuelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FuelGroupByArgs['orderBy'] }
        : { orderBy?: FuelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FuelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fuel model
   */
  readonly fields: FuelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fuel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FuelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    EmissionCategories<T extends Fuel$EmissionCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Fuel$EmissionCategoriesArgs<ExtArgs>>): Prisma__EmissionCategoriesClient<$Result.GetResult<Prisma.$EmissionCategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Vehicle_Fuel_Relation<T extends Fuel$Vehicle_Fuel_RelationArgs<ExtArgs> = {}>(args?: Subset<T, Fuel$Vehicle_Fuel_RelationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Vehicle_Fuel_RelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fuel model
   */
  interface FuelFieldRefs {
    readonly fuel_id: FieldRef<"Fuel", 'Float'>
    readonly fuel_name: FieldRef<"Fuel", 'String'>
    readonly category_id: FieldRef<"Fuel", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Fuel findUnique
   */
  export type FuelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fuel
     */
    select?: FuelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fuel
     */
    omit?: FuelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelInclude<ExtArgs> | null
    /**
     * Filter, which Fuel to fetch.
     */
    where: FuelWhereUniqueInput
  }

  /**
   * Fuel findUniqueOrThrow
   */
  export type FuelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fuel
     */
    select?: FuelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fuel
     */
    omit?: FuelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelInclude<ExtArgs> | null
    /**
     * Filter, which Fuel to fetch.
     */
    where: FuelWhereUniqueInput
  }

  /**
   * Fuel findFirst
   */
  export type FuelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fuel
     */
    select?: FuelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fuel
     */
    omit?: FuelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelInclude<ExtArgs> | null
    /**
     * Filter, which Fuel to fetch.
     */
    where?: FuelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fuels to fetch.
     */
    orderBy?: FuelOrderByWithRelationInput | FuelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fuels.
     */
    cursor?: FuelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fuels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fuels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fuels.
     */
    distinct?: FuelScalarFieldEnum | FuelScalarFieldEnum[]
  }

  /**
   * Fuel findFirstOrThrow
   */
  export type FuelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fuel
     */
    select?: FuelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fuel
     */
    omit?: FuelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelInclude<ExtArgs> | null
    /**
     * Filter, which Fuel to fetch.
     */
    where?: FuelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fuels to fetch.
     */
    orderBy?: FuelOrderByWithRelationInput | FuelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fuels.
     */
    cursor?: FuelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fuels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fuels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fuels.
     */
    distinct?: FuelScalarFieldEnum | FuelScalarFieldEnum[]
  }

  /**
   * Fuel findMany
   */
  export type FuelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fuel
     */
    select?: FuelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fuel
     */
    omit?: FuelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelInclude<ExtArgs> | null
    /**
     * Filter, which Fuels to fetch.
     */
    where?: FuelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fuels to fetch.
     */
    orderBy?: FuelOrderByWithRelationInput | FuelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fuels.
     */
    cursor?: FuelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fuels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fuels.
     */
    skip?: number
    distinct?: FuelScalarFieldEnum | FuelScalarFieldEnum[]
  }

  /**
   * Fuel create
   */
  export type FuelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fuel
     */
    select?: FuelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fuel
     */
    omit?: FuelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelInclude<ExtArgs> | null
    /**
     * The data needed to create a Fuel.
     */
    data: XOR<FuelCreateInput, FuelUncheckedCreateInput>
  }

  /**
   * Fuel createMany
   */
  export type FuelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fuels.
     */
    data: FuelCreateManyInput | FuelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fuel update
   */
  export type FuelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fuel
     */
    select?: FuelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fuel
     */
    omit?: FuelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelInclude<ExtArgs> | null
    /**
     * The data needed to update a Fuel.
     */
    data: XOR<FuelUpdateInput, FuelUncheckedUpdateInput>
    /**
     * Choose, which Fuel to update.
     */
    where: FuelWhereUniqueInput
  }

  /**
   * Fuel updateMany
   */
  export type FuelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fuels.
     */
    data: XOR<FuelUpdateManyMutationInput, FuelUncheckedUpdateManyInput>
    /**
     * Filter which Fuels to update
     */
    where?: FuelWhereInput
    /**
     * Limit how many Fuels to update.
     */
    limit?: number
  }

  /**
   * Fuel upsert
   */
  export type FuelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fuel
     */
    select?: FuelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fuel
     */
    omit?: FuelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelInclude<ExtArgs> | null
    /**
     * The filter to search for the Fuel to update in case it exists.
     */
    where: FuelWhereUniqueInput
    /**
     * In case the Fuel found by the `where` argument doesn't exist, create a new Fuel with this data.
     */
    create: XOR<FuelCreateInput, FuelUncheckedCreateInput>
    /**
     * In case the Fuel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FuelUpdateInput, FuelUncheckedUpdateInput>
  }

  /**
   * Fuel delete
   */
  export type FuelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fuel
     */
    select?: FuelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fuel
     */
    omit?: FuelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelInclude<ExtArgs> | null
    /**
     * Filter which Fuel to delete.
     */
    where: FuelWhereUniqueInput
  }

  /**
   * Fuel deleteMany
   */
  export type FuelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fuels to delete
     */
    where?: FuelWhereInput
    /**
     * Limit how many Fuels to delete.
     */
    limit?: number
  }

  /**
   * Fuel.EmissionCategories
   */
  export type Fuel$EmissionCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionCategories
     */
    select?: EmissionCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmissionCategories
     */
    omit?: EmissionCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionCategoriesInclude<ExtArgs> | null
    where?: EmissionCategoriesWhereInput
  }

  /**
   * Fuel.Vehicle_Fuel_Relation
   */
  export type Fuel$Vehicle_Fuel_RelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Fuel_Relation
     */
    select?: Vehicle_Fuel_RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle_Fuel_Relation
     */
    omit?: Vehicle_Fuel_RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_Fuel_RelationInclude<ExtArgs> | null
    where?: Vehicle_Fuel_RelationWhereInput
    orderBy?: Vehicle_Fuel_RelationOrderByWithRelationInput | Vehicle_Fuel_RelationOrderByWithRelationInput[]
    cursor?: Vehicle_Fuel_RelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Vehicle_Fuel_RelationScalarFieldEnum | Vehicle_Fuel_RelationScalarFieldEnum[]
  }

  /**
   * Fuel without action
   */
  export type FuelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fuel
     */
    select?: FuelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fuel
     */
    omit?: FuelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelInclude<ExtArgs> | null
  }


  /**
   * Model Travel
   */

  export type AggregateTravel = {
    _count: TravelCountAggregateOutputType | null
    _avg: TravelAvgAggregateOutputType | null
    _sum: TravelSumAggregateOutputType | null
    _min: TravelMinAggregateOutputType | null
    _max: TravelMaxAggregateOutputType | null
  }

  export type TravelAvgAggregateOutputType = {
    travel_id: number | null
    travel_mileage: number | null
    country_id: number | null
    emission_id: number | null
    factor_id: number | null
  }

  export type TravelSumAggregateOutputType = {
    travel_id: number | null
    travel_mileage: number | null
    country_id: number | null
    emission_id: number | null
    factor_id: number | null
  }

  export type TravelMinAggregateOutputType = {
    travel_id: number | null
    travel_type: string | null
    travel_mileage: number | null
    country_id: number | null
    emission_id: number | null
    factor_id: number | null
  }

  export type TravelMaxAggregateOutputType = {
    travel_id: number | null
    travel_type: string | null
    travel_mileage: number | null
    country_id: number | null
    emission_id: number | null
    factor_id: number | null
  }

  export type TravelCountAggregateOutputType = {
    travel_id: number
    travel_type: number
    travel_mileage: number
    country_id: number
    emission_id: number
    factor_id: number
    _all: number
  }


  export type TravelAvgAggregateInputType = {
    travel_id?: true
    travel_mileage?: true
    country_id?: true
    emission_id?: true
    factor_id?: true
  }

  export type TravelSumAggregateInputType = {
    travel_id?: true
    travel_mileage?: true
    country_id?: true
    emission_id?: true
    factor_id?: true
  }

  export type TravelMinAggregateInputType = {
    travel_id?: true
    travel_type?: true
    travel_mileage?: true
    country_id?: true
    emission_id?: true
    factor_id?: true
  }

  export type TravelMaxAggregateInputType = {
    travel_id?: true
    travel_type?: true
    travel_mileage?: true
    country_id?: true
    emission_id?: true
    factor_id?: true
  }

  export type TravelCountAggregateInputType = {
    travel_id?: true
    travel_type?: true
    travel_mileage?: true
    country_id?: true
    emission_id?: true
    factor_id?: true
    _all?: true
  }

  export type TravelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Travel to aggregate.
     */
    where?: TravelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Travels to fetch.
     */
    orderBy?: TravelOrderByWithRelationInput | TravelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TravelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Travels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Travels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Travels
    **/
    _count?: true | TravelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TravelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TravelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TravelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TravelMaxAggregateInputType
  }

  export type GetTravelAggregateType<T extends TravelAggregateArgs> = {
        [P in keyof T & keyof AggregateTravel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTravel[P]>
      : GetScalarType<T[P], AggregateTravel[P]>
  }




  export type TravelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelWhereInput
    orderBy?: TravelOrderByWithAggregationInput | TravelOrderByWithAggregationInput[]
    by: TravelScalarFieldEnum[] | TravelScalarFieldEnum
    having?: TravelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TravelCountAggregateInputType | true
    _avg?: TravelAvgAggregateInputType
    _sum?: TravelSumAggregateInputType
    _min?: TravelMinAggregateInputType
    _max?: TravelMaxAggregateInputType
  }

  export type TravelGroupByOutputType = {
    travel_id: number
    travel_type: string
    travel_mileage: number
    country_id: number
    emission_id: number
    factor_id: number
    _count: TravelCountAggregateOutputType | null
    _avg: TravelAvgAggregateOutputType | null
    _sum: TravelSumAggregateOutputType | null
    _min: TravelMinAggregateOutputType | null
    _max: TravelMaxAggregateOutputType | null
  }

  type GetTravelGroupByPayload<T extends TravelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TravelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TravelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TravelGroupByOutputType[P]>
            : GetScalarType<T[P], TravelGroupByOutputType[P]>
        }
      >
    >


  export type TravelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    travel_id?: boolean
    travel_type?: boolean
    travel_mileage?: boolean
    country_id?: boolean
    emission_id?: boolean
    factor_id?: boolean
    Countries?: boolean | CountriesDefaultArgs<ExtArgs>
    EmissionCategories?: boolean | EmissionCategoriesDefaultArgs<ExtArgs>
    EmissionFactors?: boolean | EmissionFactorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travel"]>



  export type TravelSelectScalar = {
    travel_id?: boolean
    travel_type?: boolean
    travel_mileage?: boolean
    country_id?: boolean
    emission_id?: boolean
    factor_id?: boolean
  }

  export type TravelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"travel_id" | "travel_type" | "travel_mileage" | "country_id" | "emission_id" | "factor_id", ExtArgs["result"]["travel"]>
  export type TravelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Countries?: boolean | CountriesDefaultArgs<ExtArgs>
    EmissionCategories?: boolean | EmissionCategoriesDefaultArgs<ExtArgs>
    EmissionFactors?: boolean | EmissionFactorsDefaultArgs<ExtArgs>
  }

  export type $TravelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Travel"
    objects: {
      Countries: Prisma.$CountriesPayload<ExtArgs>
      EmissionCategories: Prisma.$EmissionCategoriesPayload<ExtArgs>
      EmissionFactors: Prisma.$EmissionFactorsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      travel_id: number
      travel_type: string
      travel_mileage: number
      country_id: number
      emission_id: number
      factor_id: number
    }, ExtArgs["result"]["travel"]>
    composites: {}
  }

  type TravelGetPayload<S extends boolean | null | undefined | TravelDefaultArgs> = $Result.GetResult<Prisma.$TravelPayload, S>

  type TravelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TravelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TravelCountAggregateInputType | true
    }

  export interface TravelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Travel'], meta: { name: 'Travel' } }
    /**
     * Find zero or one Travel that matches the filter.
     * @param {TravelFindUniqueArgs} args - Arguments to find a Travel
     * @example
     * // Get one Travel
     * const travel = await prisma.travel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TravelFindUniqueArgs>(args: SelectSubset<T, TravelFindUniqueArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Travel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TravelFindUniqueOrThrowArgs} args - Arguments to find a Travel
     * @example
     * // Get one Travel
     * const travel = await prisma.travel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TravelFindUniqueOrThrowArgs>(args: SelectSubset<T, TravelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Travel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelFindFirstArgs} args - Arguments to find a Travel
     * @example
     * // Get one Travel
     * const travel = await prisma.travel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TravelFindFirstArgs>(args?: SelectSubset<T, TravelFindFirstArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Travel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelFindFirstOrThrowArgs} args - Arguments to find a Travel
     * @example
     * // Get one Travel
     * const travel = await prisma.travel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TravelFindFirstOrThrowArgs>(args?: SelectSubset<T, TravelFindFirstOrThrowArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Travels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Travels
     * const travels = await prisma.travel.findMany()
     * 
     * // Get first 10 Travels
     * const travels = await prisma.travel.findMany({ take: 10 })
     * 
     * // Only select the `travel_id`
     * const travelWithTravel_idOnly = await prisma.travel.findMany({ select: { travel_id: true } })
     * 
     */
    findMany<T extends TravelFindManyArgs>(args?: SelectSubset<T, TravelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Travel.
     * @param {TravelCreateArgs} args - Arguments to create a Travel.
     * @example
     * // Create one Travel
     * const Travel = await prisma.travel.create({
     *   data: {
     *     // ... data to create a Travel
     *   }
     * })
     * 
     */
    create<T extends TravelCreateArgs>(args: SelectSubset<T, TravelCreateArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Travels.
     * @param {TravelCreateManyArgs} args - Arguments to create many Travels.
     * @example
     * // Create many Travels
     * const travel = await prisma.travel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TravelCreateManyArgs>(args?: SelectSubset<T, TravelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Travel.
     * @param {TravelDeleteArgs} args - Arguments to delete one Travel.
     * @example
     * // Delete one Travel
     * const Travel = await prisma.travel.delete({
     *   where: {
     *     // ... filter to delete one Travel
     *   }
     * })
     * 
     */
    delete<T extends TravelDeleteArgs>(args: SelectSubset<T, TravelDeleteArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Travel.
     * @param {TravelUpdateArgs} args - Arguments to update one Travel.
     * @example
     * // Update one Travel
     * const travel = await prisma.travel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TravelUpdateArgs>(args: SelectSubset<T, TravelUpdateArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Travels.
     * @param {TravelDeleteManyArgs} args - Arguments to filter Travels to delete.
     * @example
     * // Delete a few Travels
     * const { count } = await prisma.travel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TravelDeleteManyArgs>(args?: SelectSubset<T, TravelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Travels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Travels
     * const travel = await prisma.travel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TravelUpdateManyArgs>(args: SelectSubset<T, TravelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Travel.
     * @param {TravelUpsertArgs} args - Arguments to update or create a Travel.
     * @example
     * // Update or create a Travel
     * const travel = await prisma.travel.upsert({
     *   create: {
     *     // ... data to create a Travel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Travel we want to update
     *   }
     * })
     */
    upsert<T extends TravelUpsertArgs>(args: SelectSubset<T, TravelUpsertArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Travels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelCountArgs} args - Arguments to filter Travels to count.
     * @example
     * // Count the number of Travels
     * const count = await prisma.travel.count({
     *   where: {
     *     // ... the filter for the Travels we want to count
     *   }
     * })
    **/
    count<T extends TravelCountArgs>(
      args?: Subset<T, TravelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TravelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Travel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TravelAggregateArgs>(args: Subset<T, TravelAggregateArgs>): Prisma.PrismaPromise<GetTravelAggregateType<T>>

    /**
     * Group by Travel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TravelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TravelGroupByArgs['orderBy'] }
        : { orderBy?: TravelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TravelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTravelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Travel model
   */
  readonly fields: TravelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Travel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TravelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Countries<T extends CountriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountriesDefaultArgs<ExtArgs>>): Prisma__CountriesClient<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    EmissionCategories<T extends EmissionCategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmissionCategoriesDefaultArgs<ExtArgs>>): Prisma__EmissionCategoriesClient<$Result.GetResult<Prisma.$EmissionCategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    EmissionFactors<T extends EmissionFactorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmissionFactorsDefaultArgs<ExtArgs>>): Prisma__EmissionFactorsClient<$Result.GetResult<Prisma.$EmissionFactorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Travel model
   */
  interface TravelFieldRefs {
    readonly travel_id: FieldRef<"Travel", 'Int'>
    readonly travel_type: FieldRef<"Travel", 'String'>
    readonly travel_mileage: FieldRef<"Travel", 'Int'>
    readonly country_id: FieldRef<"Travel", 'Int'>
    readonly emission_id: FieldRef<"Travel", 'Int'>
    readonly factor_id: FieldRef<"Travel", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Travel findUnique
   */
  export type TravelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter, which Travel to fetch.
     */
    where: TravelWhereUniqueInput
  }

  /**
   * Travel findUniqueOrThrow
   */
  export type TravelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter, which Travel to fetch.
     */
    where: TravelWhereUniqueInput
  }

  /**
   * Travel findFirst
   */
  export type TravelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter, which Travel to fetch.
     */
    where?: TravelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Travels to fetch.
     */
    orderBy?: TravelOrderByWithRelationInput | TravelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Travels.
     */
    cursor?: TravelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Travels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Travels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Travels.
     */
    distinct?: TravelScalarFieldEnum | TravelScalarFieldEnum[]
  }

  /**
   * Travel findFirstOrThrow
   */
  export type TravelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter, which Travel to fetch.
     */
    where?: TravelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Travels to fetch.
     */
    orderBy?: TravelOrderByWithRelationInput | TravelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Travels.
     */
    cursor?: TravelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Travels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Travels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Travels.
     */
    distinct?: TravelScalarFieldEnum | TravelScalarFieldEnum[]
  }

  /**
   * Travel findMany
   */
  export type TravelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter, which Travels to fetch.
     */
    where?: TravelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Travels to fetch.
     */
    orderBy?: TravelOrderByWithRelationInput | TravelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Travels.
     */
    cursor?: TravelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Travels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Travels.
     */
    skip?: number
    distinct?: TravelScalarFieldEnum | TravelScalarFieldEnum[]
  }

  /**
   * Travel create
   */
  export type TravelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * The data needed to create a Travel.
     */
    data: XOR<TravelCreateInput, TravelUncheckedCreateInput>
  }

  /**
   * Travel createMany
   */
  export type TravelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Travels.
     */
    data: TravelCreateManyInput | TravelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Travel update
   */
  export type TravelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * The data needed to update a Travel.
     */
    data: XOR<TravelUpdateInput, TravelUncheckedUpdateInput>
    /**
     * Choose, which Travel to update.
     */
    where: TravelWhereUniqueInput
  }

  /**
   * Travel updateMany
   */
  export type TravelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Travels.
     */
    data: XOR<TravelUpdateManyMutationInput, TravelUncheckedUpdateManyInput>
    /**
     * Filter which Travels to update
     */
    where?: TravelWhereInput
    /**
     * Limit how many Travels to update.
     */
    limit?: number
  }

  /**
   * Travel upsert
   */
  export type TravelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * The filter to search for the Travel to update in case it exists.
     */
    where: TravelWhereUniqueInput
    /**
     * In case the Travel found by the `where` argument doesn't exist, create a new Travel with this data.
     */
    create: XOR<TravelCreateInput, TravelUncheckedCreateInput>
    /**
     * In case the Travel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TravelUpdateInput, TravelUncheckedUpdateInput>
  }

  /**
   * Travel delete
   */
  export type TravelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter which Travel to delete.
     */
    where: TravelWhereUniqueInput
  }

  /**
   * Travel deleteMany
   */
  export type TravelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Travels to delete
     */
    where?: TravelWhereInput
    /**
     * Limit how many Travels to delete.
     */
    limit?: number
  }

  /**
   * Travel without action
   */
  export type TravelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    user_id: number | null
    country_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    user_id: number | null
    country_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: number | null
    user_name: string | null
    user_company: string | null
    user_email: string | null
    country_id: number | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: number | null
    user_name: string | null
    user_company: string | null
    user_email: string | null
    country_id: number | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    user_name: number
    user_company: number
    user_email: number
    country_id: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    user_id?: true
    country_id?: true
  }

  export type UsersSumAggregateInputType = {
    user_id?: true
    country_id?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    user_name?: true
    user_company?: true
    user_email?: true
    country_id?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    user_name?: true
    user_company?: true
    user_email?: true
    country_id?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    user_name?: true
    user_company?: true
    user_email?: true
    country_id?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: number
    user_name: string
    user_company: string
    user_email: string
    country_id: number
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    user_name?: boolean
    user_company?: boolean
    user_email?: boolean
    country_id?: boolean
    Calculations?: boolean | Users$CalculationsArgs<ExtArgs>
    CompanyVehicles?: boolean | Users$CompanyVehiclesArgs<ExtArgs>
    Emissions?: boolean | Users$EmissionsArgs<ExtArgs>
    Countries?: boolean | CountriesDefaultArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    user_id?: boolean
    user_name?: boolean
    user_company?: boolean
    user_email?: boolean
    country_id?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "user_name" | "user_company" | "user_email" | "country_id", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Calculations?: boolean | Users$CalculationsArgs<ExtArgs>
    CompanyVehicles?: boolean | Users$CompanyVehiclesArgs<ExtArgs>
    Emissions?: boolean | Users$EmissionsArgs<ExtArgs>
    Countries?: boolean | CountriesDefaultArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      Calculations: Prisma.$CalculationsPayload<ExtArgs>[]
      CompanyVehicles: Prisma.$CompanyVehiclesPayload<ExtArgs>[]
      Emissions: Prisma.$EmissionsPayload<ExtArgs>[]
      Countries: Prisma.$CountriesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      user_name: string
      user_company: string
      user_email: string
      country_id: number
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Calculations<T extends Users$CalculationsArgs<ExtArgs> = {}>(args?: Subset<T, Users$CalculationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalculationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CompanyVehicles<T extends Users$CompanyVehiclesArgs<ExtArgs> = {}>(args?: Subset<T, Users$CompanyVehiclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyVehiclesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Emissions<T extends Users$EmissionsArgs<ExtArgs> = {}>(args?: Subset<T, Users$EmissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Countries<T extends CountriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountriesDefaultArgs<ExtArgs>>): Prisma__CountriesClient<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly user_id: FieldRef<"Users", 'Int'>
    readonly user_name: FieldRef<"Users", 'String'>
    readonly user_company: FieldRef<"Users", 'String'>
    readonly user_email: FieldRef<"Users", 'String'>
    readonly country_id: FieldRef<"Users", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.Calculations
   */
  export type Users$CalculationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calculations
     */
    select?: CalculationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calculations
     */
    omit?: CalculationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationsInclude<ExtArgs> | null
    where?: CalculationsWhereInput
    orderBy?: CalculationsOrderByWithRelationInput | CalculationsOrderByWithRelationInput[]
    cursor?: CalculationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CalculationsScalarFieldEnum | CalculationsScalarFieldEnum[]
  }

  /**
   * Users.CompanyVehicles
   */
  export type Users$CompanyVehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyVehicles
     */
    select?: CompanyVehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyVehicles
     */
    omit?: CompanyVehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyVehiclesInclude<ExtArgs> | null
    where?: CompanyVehiclesWhereInput
    orderBy?: CompanyVehiclesOrderByWithRelationInput | CompanyVehiclesOrderByWithRelationInput[]
    cursor?: CompanyVehiclesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyVehiclesScalarFieldEnum | CompanyVehiclesScalarFieldEnum[]
  }

  /**
   * Users.Emissions
   */
  export type Users$EmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emissions
     */
    select?: EmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emissions
     */
    omit?: EmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmissionsInclude<ExtArgs> | null
    where?: EmissionsWhereInput
    orderBy?: EmissionsOrderByWithRelationInput | EmissionsOrderByWithRelationInput[]
    cursor?: EmissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmissionsScalarFieldEnum | EmissionsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle_Fuel_Relation
   */

  export type AggregateVehicle_Fuel_Relation = {
    _count: Vehicle_Fuel_RelationCountAggregateOutputType | null
    _avg: Vehicle_Fuel_RelationAvgAggregateOutputType | null
    _sum: Vehicle_Fuel_RelationSumAggregateOutputType | null
    _min: Vehicle_Fuel_RelationMinAggregateOutputType | null
    _max: Vehicle_Fuel_RelationMaxAggregateOutputType | null
  }

  export type Vehicle_Fuel_RelationAvgAggregateOutputType = {
    vehicle_id: number | null
    fuel_id: number | null
  }

  export type Vehicle_Fuel_RelationSumAggregateOutputType = {
    vehicle_id: number | null
    fuel_id: number | null
  }

  export type Vehicle_Fuel_RelationMinAggregateOutputType = {
    vehicle_id: number | null
    fuel_id: number | null
    vehicle_fuel_relation_id: string | null
  }

  export type Vehicle_Fuel_RelationMaxAggregateOutputType = {
    vehicle_id: number | null
    fuel_id: number | null
    vehicle_fuel_relation_id: string | null
  }

  export type Vehicle_Fuel_RelationCountAggregateOutputType = {
    vehicle_id: number
    fuel_id: number
    vehicle_fuel_relation_id: number
    _all: number
  }


  export type Vehicle_Fuel_RelationAvgAggregateInputType = {
    vehicle_id?: true
    fuel_id?: true
  }

  export type Vehicle_Fuel_RelationSumAggregateInputType = {
    vehicle_id?: true
    fuel_id?: true
  }

  export type Vehicle_Fuel_RelationMinAggregateInputType = {
    vehicle_id?: true
    fuel_id?: true
    vehicle_fuel_relation_id?: true
  }

  export type Vehicle_Fuel_RelationMaxAggregateInputType = {
    vehicle_id?: true
    fuel_id?: true
    vehicle_fuel_relation_id?: true
  }

  export type Vehicle_Fuel_RelationCountAggregateInputType = {
    vehicle_id?: true
    fuel_id?: true
    vehicle_fuel_relation_id?: true
    _all?: true
  }

  export type Vehicle_Fuel_RelationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle_Fuel_Relation to aggregate.
     */
    where?: Vehicle_Fuel_RelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicle_Fuel_Relations to fetch.
     */
    orderBy?: Vehicle_Fuel_RelationOrderByWithRelationInput | Vehicle_Fuel_RelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Vehicle_Fuel_RelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicle_Fuel_Relations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicle_Fuel_Relations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicle_Fuel_Relations
    **/
    _count?: true | Vehicle_Fuel_RelationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Vehicle_Fuel_RelationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Vehicle_Fuel_RelationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Vehicle_Fuel_RelationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Vehicle_Fuel_RelationMaxAggregateInputType
  }

  export type GetVehicle_Fuel_RelationAggregateType<T extends Vehicle_Fuel_RelationAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle_Fuel_Relation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle_Fuel_Relation[P]>
      : GetScalarType<T[P], AggregateVehicle_Fuel_Relation[P]>
  }




  export type Vehicle_Fuel_RelationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Vehicle_Fuel_RelationWhereInput
    orderBy?: Vehicle_Fuel_RelationOrderByWithAggregationInput | Vehicle_Fuel_RelationOrderByWithAggregationInput[]
    by: Vehicle_Fuel_RelationScalarFieldEnum[] | Vehicle_Fuel_RelationScalarFieldEnum
    having?: Vehicle_Fuel_RelationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Vehicle_Fuel_RelationCountAggregateInputType | true
    _avg?: Vehicle_Fuel_RelationAvgAggregateInputType
    _sum?: Vehicle_Fuel_RelationSumAggregateInputType
    _min?: Vehicle_Fuel_RelationMinAggregateInputType
    _max?: Vehicle_Fuel_RelationMaxAggregateInputType
  }

  export type Vehicle_Fuel_RelationGroupByOutputType = {
    vehicle_id: number
    fuel_id: number
    vehicle_fuel_relation_id: string
    _count: Vehicle_Fuel_RelationCountAggregateOutputType | null
    _avg: Vehicle_Fuel_RelationAvgAggregateOutputType | null
    _sum: Vehicle_Fuel_RelationSumAggregateOutputType | null
    _min: Vehicle_Fuel_RelationMinAggregateOutputType | null
    _max: Vehicle_Fuel_RelationMaxAggregateOutputType | null
  }

  type GetVehicle_Fuel_RelationGroupByPayload<T extends Vehicle_Fuel_RelationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Vehicle_Fuel_RelationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Vehicle_Fuel_RelationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Vehicle_Fuel_RelationGroupByOutputType[P]>
            : GetScalarType<T[P], Vehicle_Fuel_RelationGroupByOutputType[P]>
        }
      >
    >


  export type Vehicle_Fuel_RelationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vehicle_id?: boolean
    fuel_id?: boolean
    vehicle_fuel_relation_id?: boolean
    CompanyVehicles?: boolean | CompanyVehiclesDefaultArgs<ExtArgs>
    Fuel?: boolean | FuelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle_Fuel_Relation"]>



  export type Vehicle_Fuel_RelationSelectScalar = {
    vehicle_id?: boolean
    fuel_id?: boolean
    vehicle_fuel_relation_id?: boolean
  }

  export type Vehicle_Fuel_RelationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"vehicle_id" | "fuel_id" | "vehicle_fuel_relation_id", ExtArgs["result"]["vehicle_Fuel_Relation"]>
  export type Vehicle_Fuel_RelationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CompanyVehicles?: boolean | CompanyVehiclesDefaultArgs<ExtArgs>
    Fuel?: boolean | FuelDefaultArgs<ExtArgs>
  }

  export type $Vehicle_Fuel_RelationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle_Fuel_Relation"
    objects: {
      CompanyVehicles: Prisma.$CompanyVehiclesPayload<ExtArgs>
      Fuel: Prisma.$FuelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      vehicle_id: number
      fuel_id: number
      vehicle_fuel_relation_id: string
    }, ExtArgs["result"]["vehicle_Fuel_Relation"]>
    composites: {}
  }

  type Vehicle_Fuel_RelationGetPayload<S extends boolean | null | undefined | Vehicle_Fuel_RelationDefaultArgs> = $Result.GetResult<Prisma.$Vehicle_Fuel_RelationPayload, S>

  type Vehicle_Fuel_RelationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Vehicle_Fuel_RelationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Vehicle_Fuel_RelationCountAggregateInputType | true
    }

  export interface Vehicle_Fuel_RelationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle_Fuel_Relation'], meta: { name: 'Vehicle_Fuel_Relation' } }
    /**
     * Find zero or one Vehicle_Fuel_Relation that matches the filter.
     * @param {Vehicle_Fuel_RelationFindUniqueArgs} args - Arguments to find a Vehicle_Fuel_Relation
     * @example
     * // Get one Vehicle_Fuel_Relation
     * const vehicle_Fuel_Relation = await prisma.vehicle_Fuel_Relation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Vehicle_Fuel_RelationFindUniqueArgs>(args: SelectSubset<T, Vehicle_Fuel_RelationFindUniqueArgs<ExtArgs>>): Prisma__Vehicle_Fuel_RelationClient<$Result.GetResult<Prisma.$Vehicle_Fuel_RelationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle_Fuel_Relation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Vehicle_Fuel_RelationFindUniqueOrThrowArgs} args - Arguments to find a Vehicle_Fuel_Relation
     * @example
     * // Get one Vehicle_Fuel_Relation
     * const vehicle_Fuel_Relation = await prisma.vehicle_Fuel_Relation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Vehicle_Fuel_RelationFindUniqueOrThrowArgs>(args: SelectSubset<T, Vehicle_Fuel_RelationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Vehicle_Fuel_RelationClient<$Result.GetResult<Prisma.$Vehicle_Fuel_RelationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle_Fuel_Relation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_Fuel_RelationFindFirstArgs} args - Arguments to find a Vehicle_Fuel_Relation
     * @example
     * // Get one Vehicle_Fuel_Relation
     * const vehicle_Fuel_Relation = await prisma.vehicle_Fuel_Relation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Vehicle_Fuel_RelationFindFirstArgs>(args?: SelectSubset<T, Vehicle_Fuel_RelationFindFirstArgs<ExtArgs>>): Prisma__Vehicle_Fuel_RelationClient<$Result.GetResult<Prisma.$Vehicle_Fuel_RelationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle_Fuel_Relation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_Fuel_RelationFindFirstOrThrowArgs} args - Arguments to find a Vehicle_Fuel_Relation
     * @example
     * // Get one Vehicle_Fuel_Relation
     * const vehicle_Fuel_Relation = await prisma.vehicle_Fuel_Relation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Vehicle_Fuel_RelationFindFirstOrThrowArgs>(args?: SelectSubset<T, Vehicle_Fuel_RelationFindFirstOrThrowArgs<ExtArgs>>): Prisma__Vehicle_Fuel_RelationClient<$Result.GetResult<Prisma.$Vehicle_Fuel_RelationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicle_Fuel_Relations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_Fuel_RelationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicle_Fuel_Relations
     * const vehicle_Fuel_Relations = await prisma.vehicle_Fuel_Relation.findMany()
     * 
     * // Get first 10 Vehicle_Fuel_Relations
     * const vehicle_Fuel_Relations = await prisma.vehicle_Fuel_Relation.findMany({ take: 10 })
     * 
     * // Only select the `vehicle_id`
     * const vehicle_Fuel_RelationWithVehicle_idOnly = await prisma.vehicle_Fuel_Relation.findMany({ select: { vehicle_id: true } })
     * 
     */
    findMany<T extends Vehicle_Fuel_RelationFindManyArgs>(args?: SelectSubset<T, Vehicle_Fuel_RelationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Vehicle_Fuel_RelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle_Fuel_Relation.
     * @param {Vehicle_Fuel_RelationCreateArgs} args - Arguments to create a Vehicle_Fuel_Relation.
     * @example
     * // Create one Vehicle_Fuel_Relation
     * const Vehicle_Fuel_Relation = await prisma.vehicle_Fuel_Relation.create({
     *   data: {
     *     // ... data to create a Vehicle_Fuel_Relation
     *   }
     * })
     * 
     */
    create<T extends Vehicle_Fuel_RelationCreateArgs>(args: SelectSubset<T, Vehicle_Fuel_RelationCreateArgs<ExtArgs>>): Prisma__Vehicle_Fuel_RelationClient<$Result.GetResult<Prisma.$Vehicle_Fuel_RelationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicle_Fuel_Relations.
     * @param {Vehicle_Fuel_RelationCreateManyArgs} args - Arguments to create many Vehicle_Fuel_Relations.
     * @example
     * // Create many Vehicle_Fuel_Relations
     * const vehicle_Fuel_Relation = await prisma.vehicle_Fuel_Relation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Vehicle_Fuel_RelationCreateManyArgs>(args?: SelectSubset<T, Vehicle_Fuel_RelationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vehicle_Fuel_Relation.
     * @param {Vehicle_Fuel_RelationDeleteArgs} args - Arguments to delete one Vehicle_Fuel_Relation.
     * @example
     * // Delete one Vehicle_Fuel_Relation
     * const Vehicle_Fuel_Relation = await prisma.vehicle_Fuel_Relation.delete({
     *   where: {
     *     // ... filter to delete one Vehicle_Fuel_Relation
     *   }
     * })
     * 
     */
    delete<T extends Vehicle_Fuel_RelationDeleteArgs>(args: SelectSubset<T, Vehicle_Fuel_RelationDeleteArgs<ExtArgs>>): Prisma__Vehicle_Fuel_RelationClient<$Result.GetResult<Prisma.$Vehicle_Fuel_RelationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle_Fuel_Relation.
     * @param {Vehicle_Fuel_RelationUpdateArgs} args - Arguments to update one Vehicle_Fuel_Relation.
     * @example
     * // Update one Vehicle_Fuel_Relation
     * const vehicle_Fuel_Relation = await prisma.vehicle_Fuel_Relation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Vehicle_Fuel_RelationUpdateArgs>(args: SelectSubset<T, Vehicle_Fuel_RelationUpdateArgs<ExtArgs>>): Prisma__Vehicle_Fuel_RelationClient<$Result.GetResult<Prisma.$Vehicle_Fuel_RelationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicle_Fuel_Relations.
     * @param {Vehicle_Fuel_RelationDeleteManyArgs} args - Arguments to filter Vehicle_Fuel_Relations to delete.
     * @example
     * // Delete a few Vehicle_Fuel_Relations
     * const { count } = await prisma.vehicle_Fuel_Relation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Vehicle_Fuel_RelationDeleteManyArgs>(args?: SelectSubset<T, Vehicle_Fuel_RelationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicle_Fuel_Relations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_Fuel_RelationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicle_Fuel_Relations
     * const vehicle_Fuel_Relation = await prisma.vehicle_Fuel_Relation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Vehicle_Fuel_RelationUpdateManyArgs>(args: SelectSubset<T, Vehicle_Fuel_RelationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vehicle_Fuel_Relation.
     * @param {Vehicle_Fuel_RelationUpsertArgs} args - Arguments to update or create a Vehicle_Fuel_Relation.
     * @example
     * // Update or create a Vehicle_Fuel_Relation
     * const vehicle_Fuel_Relation = await prisma.vehicle_Fuel_Relation.upsert({
     *   create: {
     *     // ... data to create a Vehicle_Fuel_Relation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle_Fuel_Relation we want to update
     *   }
     * })
     */
    upsert<T extends Vehicle_Fuel_RelationUpsertArgs>(args: SelectSubset<T, Vehicle_Fuel_RelationUpsertArgs<ExtArgs>>): Prisma__Vehicle_Fuel_RelationClient<$Result.GetResult<Prisma.$Vehicle_Fuel_RelationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicle_Fuel_Relations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_Fuel_RelationCountArgs} args - Arguments to filter Vehicle_Fuel_Relations to count.
     * @example
     * // Count the number of Vehicle_Fuel_Relations
     * const count = await prisma.vehicle_Fuel_Relation.count({
     *   where: {
     *     // ... the filter for the Vehicle_Fuel_Relations we want to count
     *   }
     * })
    **/
    count<T extends Vehicle_Fuel_RelationCountArgs>(
      args?: Subset<T, Vehicle_Fuel_RelationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Vehicle_Fuel_RelationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle_Fuel_Relation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_Fuel_RelationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Vehicle_Fuel_RelationAggregateArgs>(args: Subset<T, Vehicle_Fuel_RelationAggregateArgs>): Prisma.PrismaPromise<GetVehicle_Fuel_RelationAggregateType<T>>

    /**
     * Group by Vehicle_Fuel_Relation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_Fuel_RelationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Vehicle_Fuel_RelationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Vehicle_Fuel_RelationGroupByArgs['orderBy'] }
        : { orderBy?: Vehicle_Fuel_RelationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Vehicle_Fuel_RelationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicle_Fuel_RelationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle_Fuel_Relation model
   */
  readonly fields: Vehicle_Fuel_RelationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle_Fuel_Relation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Vehicle_Fuel_RelationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CompanyVehicles<T extends CompanyVehiclesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyVehiclesDefaultArgs<ExtArgs>>): Prisma__CompanyVehiclesClient<$Result.GetResult<Prisma.$CompanyVehiclesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Fuel<T extends FuelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FuelDefaultArgs<ExtArgs>>): Prisma__FuelClient<$Result.GetResult<Prisma.$FuelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehicle_Fuel_Relation model
   */
  interface Vehicle_Fuel_RelationFieldRefs {
    readonly vehicle_id: FieldRef<"Vehicle_Fuel_Relation", 'Int'>
    readonly fuel_id: FieldRef<"Vehicle_Fuel_Relation", 'Float'>
    readonly vehicle_fuel_relation_id: FieldRef<"Vehicle_Fuel_Relation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle_Fuel_Relation findUnique
   */
  export type Vehicle_Fuel_RelationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Fuel_Relation
     */
    select?: Vehicle_Fuel_RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle_Fuel_Relation
     */
    omit?: Vehicle_Fuel_RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_Fuel_RelationInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_Fuel_Relation to fetch.
     */
    where: Vehicle_Fuel_RelationWhereUniqueInput
  }

  /**
   * Vehicle_Fuel_Relation findUniqueOrThrow
   */
  export type Vehicle_Fuel_RelationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Fuel_Relation
     */
    select?: Vehicle_Fuel_RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle_Fuel_Relation
     */
    omit?: Vehicle_Fuel_RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_Fuel_RelationInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_Fuel_Relation to fetch.
     */
    where: Vehicle_Fuel_RelationWhereUniqueInput
  }

  /**
   * Vehicle_Fuel_Relation findFirst
   */
  export type Vehicle_Fuel_RelationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Fuel_Relation
     */
    select?: Vehicle_Fuel_RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle_Fuel_Relation
     */
    omit?: Vehicle_Fuel_RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_Fuel_RelationInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_Fuel_Relation to fetch.
     */
    where?: Vehicle_Fuel_RelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicle_Fuel_Relations to fetch.
     */
    orderBy?: Vehicle_Fuel_RelationOrderByWithRelationInput | Vehicle_Fuel_RelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicle_Fuel_Relations.
     */
    cursor?: Vehicle_Fuel_RelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicle_Fuel_Relations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicle_Fuel_Relations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicle_Fuel_Relations.
     */
    distinct?: Vehicle_Fuel_RelationScalarFieldEnum | Vehicle_Fuel_RelationScalarFieldEnum[]
  }

  /**
   * Vehicle_Fuel_Relation findFirstOrThrow
   */
  export type Vehicle_Fuel_RelationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Fuel_Relation
     */
    select?: Vehicle_Fuel_RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle_Fuel_Relation
     */
    omit?: Vehicle_Fuel_RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_Fuel_RelationInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_Fuel_Relation to fetch.
     */
    where?: Vehicle_Fuel_RelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicle_Fuel_Relations to fetch.
     */
    orderBy?: Vehicle_Fuel_RelationOrderByWithRelationInput | Vehicle_Fuel_RelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicle_Fuel_Relations.
     */
    cursor?: Vehicle_Fuel_RelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicle_Fuel_Relations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicle_Fuel_Relations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicle_Fuel_Relations.
     */
    distinct?: Vehicle_Fuel_RelationScalarFieldEnum | Vehicle_Fuel_RelationScalarFieldEnum[]
  }

  /**
   * Vehicle_Fuel_Relation findMany
   */
  export type Vehicle_Fuel_RelationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Fuel_Relation
     */
    select?: Vehicle_Fuel_RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle_Fuel_Relation
     */
    omit?: Vehicle_Fuel_RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_Fuel_RelationInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_Fuel_Relations to fetch.
     */
    where?: Vehicle_Fuel_RelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicle_Fuel_Relations to fetch.
     */
    orderBy?: Vehicle_Fuel_RelationOrderByWithRelationInput | Vehicle_Fuel_RelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicle_Fuel_Relations.
     */
    cursor?: Vehicle_Fuel_RelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicle_Fuel_Relations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicle_Fuel_Relations.
     */
    skip?: number
    distinct?: Vehicle_Fuel_RelationScalarFieldEnum | Vehicle_Fuel_RelationScalarFieldEnum[]
  }

  /**
   * Vehicle_Fuel_Relation create
   */
  export type Vehicle_Fuel_RelationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Fuel_Relation
     */
    select?: Vehicle_Fuel_RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle_Fuel_Relation
     */
    omit?: Vehicle_Fuel_RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_Fuel_RelationInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle_Fuel_Relation.
     */
    data: XOR<Vehicle_Fuel_RelationCreateInput, Vehicle_Fuel_RelationUncheckedCreateInput>
  }

  /**
   * Vehicle_Fuel_Relation createMany
   */
  export type Vehicle_Fuel_RelationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicle_Fuel_Relations.
     */
    data: Vehicle_Fuel_RelationCreateManyInput | Vehicle_Fuel_RelationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle_Fuel_Relation update
   */
  export type Vehicle_Fuel_RelationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Fuel_Relation
     */
    select?: Vehicle_Fuel_RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle_Fuel_Relation
     */
    omit?: Vehicle_Fuel_RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_Fuel_RelationInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle_Fuel_Relation.
     */
    data: XOR<Vehicle_Fuel_RelationUpdateInput, Vehicle_Fuel_RelationUncheckedUpdateInput>
    /**
     * Choose, which Vehicle_Fuel_Relation to update.
     */
    where: Vehicle_Fuel_RelationWhereUniqueInput
  }

  /**
   * Vehicle_Fuel_Relation updateMany
   */
  export type Vehicle_Fuel_RelationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicle_Fuel_Relations.
     */
    data: XOR<Vehicle_Fuel_RelationUpdateManyMutationInput, Vehicle_Fuel_RelationUncheckedUpdateManyInput>
    /**
     * Filter which Vehicle_Fuel_Relations to update
     */
    where?: Vehicle_Fuel_RelationWhereInput
    /**
     * Limit how many Vehicle_Fuel_Relations to update.
     */
    limit?: number
  }

  /**
   * Vehicle_Fuel_Relation upsert
   */
  export type Vehicle_Fuel_RelationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Fuel_Relation
     */
    select?: Vehicle_Fuel_RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle_Fuel_Relation
     */
    omit?: Vehicle_Fuel_RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_Fuel_RelationInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle_Fuel_Relation to update in case it exists.
     */
    where: Vehicle_Fuel_RelationWhereUniqueInput
    /**
     * In case the Vehicle_Fuel_Relation found by the `where` argument doesn't exist, create a new Vehicle_Fuel_Relation with this data.
     */
    create: XOR<Vehicle_Fuel_RelationCreateInput, Vehicle_Fuel_RelationUncheckedCreateInput>
    /**
     * In case the Vehicle_Fuel_Relation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Vehicle_Fuel_RelationUpdateInput, Vehicle_Fuel_RelationUncheckedUpdateInput>
  }

  /**
   * Vehicle_Fuel_Relation delete
   */
  export type Vehicle_Fuel_RelationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Fuel_Relation
     */
    select?: Vehicle_Fuel_RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle_Fuel_Relation
     */
    omit?: Vehicle_Fuel_RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_Fuel_RelationInclude<ExtArgs> | null
    /**
     * Filter which Vehicle_Fuel_Relation to delete.
     */
    where: Vehicle_Fuel_RelationWhereUniqueInput
  }

  /**
   * Vehicle_Fuel_Relation deleteMany
   */
  export type Vehicle_Fuel_RelationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle_Fuel_Relations to delete
     */
    where?: Vehicle_Fuel_RelationWhereInput
    /**
     * Limit how many Vehicle_Fuel_Relations to delete.
     */
    limit?: number
  }

  /**
   * Vehicle_Fuel_Relation without action
   */
  export type Vehicle_Fuel_RelationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Fuel_Relation
     */
    select?: Vehicle_Fuel_RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle_Fuel_Relation
     */
    omit?: Vehicle_Fuel_RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_Fuel_RelationInclude<ExtArgs> | null
  }


  /**
   * Model Water
   */

  export type AggregateWater = {
    _count: WaterCountAggregateOutputType | null
    _avg: WaterAvgAggregateOutputType | null
    _sum: WaterSumAggregateOutputType | null
    _min: WaterMinAggregateOutputType | null
    _max: WaterMaxAggregateOutputType | null
  }

  export type WaterAvgAggregateOutputType = {
    water_id: number | null
    water_use: number | null
    country_id: number | null
    emission_id: number | null
    factor_id: number | null
  }

  export type WaterSumAggregateOutputType = {
    water_id: number | null
    water_use: number | null
    country_id: number | null
    emission_id: number | null
    factor_id: number | null
  }

  export type WaterMinAggregateOutputType = {
    water_id: number | null
    water_use: number | null
    country_id: number | null
    emission_id: number | null
    factor_id: number | null
  }

  export type WaterMaxAggregateOutputType = {
    water_id: number | null
    water_use: number | null
    country_id: number | null
    emission_id: number | null
    factor_id: number | null
  }

  export type WaterCountAggregateOutputType = {
    water_id: number
    water_use: number
    country_id: number
    emission_id: number
    factor_id: number
    _all: number
  }


  export type WaterAvgAggregateInputType = {
    water_id?: true
    water_use?: true
    country_id?: true
    emission_id?: true
    factor_id?: true
  }

  export type WaterSumAggregateInputType = {
    water_id?: true
    water_use?: true
    country_id?: true
    emission_id?: true
    factor_id?: true
  }

  export type WaterMinAggregateInputType = {
    water_id?: true
    water_use?: true
    country_id?: true
    emission_id?: true
    factor_id?: true
  }

  export type WaterMaxAggregateInputType = {
    water_id?: true
    water_use?: true
    country_id?: true
    emission_id?: true
    factor_id?: true
  }

  export type WaterCountAggregateInputType = {
    water_id?: true
    water_use?: true
    country_id?: true
    emission_id?: true
    factor_id?: true
    _all?: true
  }

  export type WaterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Water to aggregate.
     */
    where?: WaterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waters to fetch.
     */
    orderBy?: WaterOrderByWithRelationInput | WaterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Waters
    **/
    _count?: true | WaterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WaterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WaterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaterMaxAggregateInputType
  }

  export type GetWaterAggregateType<T extends WaterAggregateArgs> = {
        [P in keyof T & keyof AggregateWater]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWater[P]>
      : GetScalarType<T[P], AggregateWater[P]>
  }




  export type WaterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaterWhereInput
    orderBy?: WaterOrderByWithAggregationInput | WaterOrderByWithAggregationInput[]
    by: WaterScalarFieldEnum[] | WaterScalarFieldEnum
    having?: WaterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaterCountAggregateInputType | true
    _avg?: WaterAvgAggregateInputType
    _sum?: WaterSumAggregateInputType
    _min?: WaterMinAggregateInputType
    _max?: WaterMaxAggregateInputType
  }

  export type WaterGroupByOutputType = {
    water_id: number | null
    water_use: number
    country_id: number
    emission_id: number
    factor_id: number
    _count: WaterCountAggregateOutputType | null
    _avg: WaterAvgAggregateOutputType | null
    _sum: WaterSumAggregateOutputType | null
    _min: WaterMinAggregateOutputType | null
    _max: WaterMaxAggregateOutputType | null
  }

  type GetWaterGroupByPayload<T extends WaterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaterGroupByOutputType[P]>
            : GetScalarType<T[P], WaterGroupByOutputType[P]>
        }
      >
    >


  export type WaterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    water_id?: boolean
    water_use?: boolean
    country_id?: boolean
    emission_id?: boolean
    factor_id?: boolean
    Countries?: boolean | CountriesDefaultArgs<ExtArgs>
    EmissionCategories?: boolean | EmissionCategoriesDefaultArgs<ExtArgs>
    EmissionFactors?: boolean | EmissionFactorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["water"]>



  export type WaterSelectScalar = {
    water_id?: boolean
    water_use?: boolean
    country_id?: boolean
    emission_id?: boolean
    factor_id?: boolean
  }

  export type WaterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"water_id" | "water_use" | "country_id" | "emission_id" | "factor_id", ExtArgs["result"]["water"]>
  export type WaterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Countries?: boolean | CountriesDefaultArgs<ExtArgs>
    EmissionCategories?: boolean | EmissionCategoriesDefaultArgs<ExtArgs>
    EmissionFactors?: boolean | EmissionFactorsDefaultArgs<ExtArgs>
  }

  export type $WaterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Water"
    objects: {
      Countries: Prisma.$CountriesPayload<ExtArgs>
      EmissionCategories: Prisma.$EmissionCategoriesPayload<ExtArgs>
      EmissionFactors: Prisma.$EmissionFactorsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      water_id: number | null
      water_use: number
      country_id: number
      emission_id: number
      factor_id: number
    }, ExtArgs["result"]["water"]>
    composites: {}
  }

  type WaterGetPayload<S extends boolean | null | undefined | WaterDefaultArgs> = $Result.GetResult<Prisma.$WaterPayload, S>

  type WaterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WaterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WaterCountAggregateInputType | true
    }

  export interface WaterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Water'], meta: { name: 'Water' } }
    /**
     * Find zero or one Water that matches the filter.
     * @param {WaterFindUniqueArgs} args - Arguments to find a Water
     * @example
     * // Get one Water
     * const water = await prisma.water.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WaterFindUniqueArgs>(args: SelectSubset<T, WaterFindUniqueArgs<ExtArgs>>): Prisma__WaterClient<$Result.GetResult<Prisma.$WaterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Water that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WaterFindUniqueOrThrowArgs} args - Arguments to find a Water
     * @example
     * // Get one Water
     * const water = await prisma.water.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WaterFindUniqueOrThrowArgs>(args: SelectSubset<T, WaterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WaterClient<$Result.GetResult<Prisma.$WaterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Water that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterFindFirstArgs} args - Arguments to find a Water
     * @example
     * // Get one Water
     * const water = await prisma.water.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WaterFindFirstArgs>(args?: SelectSubset<T, WaterFindFirstArgs<ExtArgs>>): Prisma__WaterClient<$Result.GetResult<Prisma.$WaterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Water that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterFindFirstOrThrowArgs} args - Arguments to find a Water
     * @example
     * // Get one Water
     * const water = await prisma.water.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WaterFindFirstOrThrowArgs>(args?: SelectSubset<T, WaterFindFirstOrThrowArgs<ExtArgs>>): Prisma__WaterClient<$Result.GetResult<Prisma.$WaterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Waters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Waters
     * const waters = await prisma.water.findMany()
     * 
     * // Get first 10 Waters
     * const waters = await prisma.water.findMany({ take: 10 })
     * 
     * // Only select the `water_id`
     * const waterWithWater_idOnly = await prisma.water.findMany({ select: { water_id: true } })
     * 
     */
    findMany<T extends WaterFindManyArgs>(args?: SelectSubset<T, WaterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Water.
     * @param {WaterCreateArgs} args - Arguments to create a Water.
     * @example
     * // Create one Water
     * const Water = await prisma.water.create({
     *   data: {
     *     // ... data to create a Water
     *   }
     * })
     * 
     */
    create<T extends WaterCreateArgs>(args: SelectSubset<T, WaterCreateArgs<ExtArgs>>): Prisma__WaterClient<$Result.GetResult<Prisma.$WaterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Waters.
     * @param {WaterCreateManyArgs} args - Arguments to create many Waters.
     * @example
     * // Create many Waters
     * const water = await prisma.water.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WaterCreateManyArgs>(args?: SelectSubset<T, WaterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Water.
     * @param {WaterDeleteArgs} args - Arguments to delete one Water.
     * @example
     * // Delete one Water
     * const Water = await prisma.water.delete({
     *   where: {
     *     // ... filter to delete one Water
     *   }
     * })
     * 
     */
    delete<T extends WaterDeleteArgs>(args: SelectSubset<T, WaterDeleteArgs<ExtArgs>>): Prisma__WaterClient<$Result.GetResult<Prisma.$WaterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Water.
     * @param {WaterUpdateArgs} args - Arguments to update one Water.
     * @example
     * // Update one Water
     * const water = await prisma.water.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WaterUpdateArgs>(args: SelectSubset<T, WaterUpdateArgs<ExtArgs>>): Prisma__WaterClient<$Result.GetResult<Prisma.$WaterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Waters.
     * @param {WaterDeleteManyArgs} args - Arguments to filter Waters to delete.
     * @example
     * // Delete a few Waters
     * const { count } = await prisma.water.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WaterDeleteManyArgs>(args?: SelectSubset<T, WaterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Waters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Waters
     * const water = await prisma.water.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WaterUpdateManyArgs>(args: SelectSubset<T, WaterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Water.
     * @param {WaterUpsertArgs} args - Arguments to update or create a Water.
     * @example
     * // Update or create a Water
     * const water = await prisma.water.upsert({
     *   create: {
     *     // ... data to create a Water
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Water we want to update
     *   }
     * })
     */
    upsert<T extends WaterUpsertArgs>(args: SelectSubset<T, WaterUpsertArgs<ExtArgs>>): Prisma__WaterClient<$Result.GetResult<Prisma.$WaterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Waters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterCountArgs} args - Arguments to filter Waters to count.
     * @example
     * // Count the number of Waters
     * const count = await prisma.water.count({
     *   where: {
     *     // ... the filter for the Waters we want to count
     *   }
     * })
    **/
    count<T extends WaterCountArgs>(
      args?: Subset<T, WaterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Water.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WaterAggregateArgs>(args: Subset<T, WaterAggregateArgs>): Prisma.PrismaPromise<GetWaterAggregateType<T>>

    /**
     * Group by Water.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WaterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaterGroupByArgs['orderBy'] }
        : { orderBy?: WaterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WaterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Water model
   */
  readonly fields: WaterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Water.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Countries<T extends CountriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountriesDefaultArgs<ExtArgs>>): Prisma__CountriesClient<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    EmissionCategories<T extends EmissionCategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmissionCategoriesDefaultArgs<ExtArgs>>): Prisma__EmissionCategoriesClient<$Result.GetResult<Prisma.$EmissionCategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    EmissionFactors<T extends EmissionFactorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmissionFactorsDefaultArgs<ExtArgs>>): Prisma__EmissionFactorsClient<$Result.GetResult<Prisma.$EmissionFactorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Water model
   */
  interface WaterFieldRefs {
    readonly water_id: FieldRef<"Water", 'Int'>
    readonly water_use: FieldRef<"Water", 'Int'>
    readonly country_id: FieldRef<"Water", 'Int'>
    readonly emission_id: FieldRef<"Water", 'Int'>
    readonly factor_id: FieldRef<"Water", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Water findUnique
   */
  export type WaterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water
     */
    select?: WaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Water
     */
    omit?: WaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterInclude<ExtArgs> | null
    /**
     * Filter, which Water to fetch.
     */
    where: WaterWhereUniqueInput
  }

  /**
   * Water findUniqueOrThrow
   */
  export type WaterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water
     */
    select?: WaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Water
     */
    omit?: WaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterInclude<ExtArgs> | null
    /**
     * Filter, which Water to fetch.
     */
    where: WaterWhereUniqueInput
  }

  /**
   * Water findFirst
   */
  export type WaterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water
     */
    select?: WaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Water
     */
    omit?: WaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterInclude<ExtArgs> | null
    /**
     * Filter, which Water to fetch.
     */
    where?: WaterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waters to fetch.
     */
    orderBy?: WaterOrderByWithRelationInput | WaterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Waters.
     */
    cursor?: WaterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Waters.
     */
    distinct?: WaterScalarFieldEnum | WaterScalarFieldEnum[]
  }

  /**
   * Water findFirstOrThrow
   */
  export type WaterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water
     */
    select?: WaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Water
     */
    omit?: WaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterInclude<ExtArgs> | null
    /**
     * Filter, which Water to fetch.
     */
    where?: WaterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waters to fetch.
     */
    orderBy?: WaterOrderByWithRelationInput | WaterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Waters.
     */
    cursor?: WaterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Waters.
     */
    distinct?: WaterScalarFieldEnum | WaterScalarFieldEnum[]
  }

  /**
   * Water findMany
   */
  export type WaterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water
     */
    select?: WaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Water
     */
    omit?: WaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterInclude<ExtArgs> | null
    /**
     * Filter, which Waters to fetch.
     */
    where?: WaterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waters to fetch.
     */
    orderBy?: WaterOrderByWithRelationInput | WaterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Waters.
     */
    cursor?: WaterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waters.
     */
    skip?: number
    distinct?: WaterScalarFieldEnum | WaterScalarFieldEnum[]
  }

  /**
   * Water create
   */
  export type WaterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water
     */
    select?: WaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Water
     */
    omit?: WaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterInclude<ExtArgs> | null
    /**
     * The data needed to create a Water.
     */
    data: XOR<WaterCreateInput, WaterUncheckedCreateInput>
  }

  /**
   * Water createMany
   */
  export type WaterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Waters.
     */
    data: WaterCreateManyInput | WaterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Water update
   */
  export type WaterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water
     */
    select?: WaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Water
     */
    omit?: WaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterInclude<ExtArgs> | null
    /**
     * The data needed to update a Water.
     */
    data: XOR<WaterUpdateInput, WaterUncheckedUpdateInput>
    /**
     * Choose, which Water to update.
     */
    where: WaterWhereUniqueInput
  }

  /**
   * Water updateMany
   */
  export type WaterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Waters.
     */
    data: XOR<WaterUpdateManyMutationInput, WaterUncheckedUpdateManyInput>
    /**
     * Filter which Waters to update
     */
    where?: WaterWhereInput
    /**
     * Limit how many Waters to update.
     */
    limit?: number
  }

  /**
   * Water upsert
   */
  export type WaterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water
     */
    select?: WaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Water
     */
    omit?: WaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterInclude<ExtArgs> | null
    /**
     * The filter to search for the Water to update in case it exists.
     */
    where: WaterWhereUniqueInput
    /**
     * In case the Water found by the `where` argument doesn't exist, create a new Water with this data.
     */
    create: XOR<WaterCreateInput, WaterUncheckedCreateInput>
    /**
     * In case the Water was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaterUpdateInput, WaterUncheckedUpdateInput>
  }

  /**
   * Water delete
   */
  export type WaterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water
     */
    select?: WaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Water
     */
    omit?: WaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterInclude<ExtArgs> | null
    /**
     * Filter which Water to delete.
     */
    where: WaterWhereUniqueInput
  }

  /**
   * Water deleteMany
   */
  export type WaterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Waters to delete
     */
    where?: WaterWhereInput
    /**
     * Limit how many Waters to delete.
     */
    limit?: number
  }

  /**
   * Water without action
   */
  export type WaterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water
     */
    select?: WaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Water
     */
    omit?: WaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CalculationsScalarFieldEnum: {
    user_id: 'user_id',
    country_id: 'country_id',
    factor_id: 'factor_id',
    calculation_id: 'calculation_id'
  };

  export type CalculationsScalarFieldEnum = (typeof CalculationsScalarFieldEnum)[keyof typeof CalculationsScalarFieldEnum]


  export const CompanyVehiclesScalarFieldEnum: {
    vehicle_id: 'vehicle_id',
    vehicle_type: 'vehicle_type',
    vehicle_model: 'vehicle_model',
    vehicle_mileage: 'vehicle_mileage',
    user_id: 'user_id'
  };

  export type CompanyVehiclesScalarFieldEnum = (typeof CompanyVehiclesScalarFieldEnum)[keyof typeof CompanyVehiclesScalarFieldEnum]


  export const CountriesScalarFieldEnum: {
    country_id: 'country_id',
    country_name: 'country_name'
  };

  export type CountriesScalarFieldEnum = (typeof CountriesScalarFieldEnum)[keyof typeof CountriesScalarFieldEnum]


  export const ElectricityScalarFieldEnum: {
    electricity_id: 'electricity_id',
    electricity_type: 'electricity_type',
    electricity_use: 'electricity_use',
    country_id: 'country_id',
    category_id: 'category_id',
    factor_id: 'factor_id'
  };

  export type ElectricityScalarFieldEnum = (typeof ElectricityScalarFieldEnum)[keyof typeof ElectricityScalarFieldEnum]


  export const EmissionCategoriesScalarFieldEnum: {
    category_id: 'category_id',
    category_name: 'category_name'
  };

  export type EmissionCategoriesScalarFieldEnum = (typeof EmissionCategoriesScalarFieldEnum)[keyof typeof EmissionCategoriesScalarFieldEnum]


  export const EmissionFactorsScalarFieldEnum: {
    factor_id: 'factor_id',
    category_id: 'category_id',
    subcategory: 'subcategory',
    country_id: 'country_id',
    factor_num: 'factor_num'
  };

  export type EmissionFactorsScalarFieldEnum = (typeof EmissionFactorsScalarFieldEnum)[keyof typeof EmissionFactorsScalarFieldEnum]


  export const EmissionsScalarFieldEnum: {
    emission_id: 'emission_id',
    user_id: 'user_id',
    country_id: 'country_id',
    category_id: 'category_id',
    emission_value: 'emission_value'
  };

  export type EmissionsScalarFieldEnum = (typeof EmissionsScalarFieldEnum)[keyof typeof EmissionsScalarFieldEnum]


  export const FuelScalarFieldEnum: {
    fuel_id: 'fuel_id',
    fuel_name: 'fuel_name',
    category_id: 'category_id'
  };

  export type FuelScalarFieldEnum = (typeof FuelScalarFieldEnum)[keyof typeof FuelScalarFieldEnum]


  export const TravelScalarFieldEnum: {
    travel_id: 'travel_id',
    travel_type: 'travel_type',
    travel_mileage: 'travel_mileage',
    country_id: 'country_id',
    emission_id: 'emission_id',
    factor_id: 'factor_id'
  };

  export type TravelScalarFieldEnum = (typeof TravelScalarFieldEnum)[keyof typeof TravelScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    user_name: 'user_name',
    user_company: 'user_company',
    user_email: 'user_email',
    country_id: 'country_id'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Vehicle_Fuel_RelationScalarFieldEnum: {
    vehicle_id: 'vehicle_id',
    fuel_id: 'fuel_id',
    vehicle_fuel_relation_id: 'vehicle_fuel_relation_id'
  };

  export type Vehicle_Fuel_RelationScalarFieldEnum = (typeof Vehicle_Fuel_RelationScalarFieldEnum)[keyof typeof Vehicle_Fuel_RelationScalarFieldEnum]


  export const WaterScalarFieldEnum: {
    water_id: 'water_id',
    water_use: 'water_use',
    country_id: 'country_id',
    emission_id: 'emission_id',
    factor_id: 'factor_id'
  };

  export type WaterScalarFieldEnum = (typeof WaterScalarFieldEnum)[keyof typeof WaterScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const CalculationsOrderByRelevanceFieldEnum: {
    calculation_id: 'calculation_id'
  };

  export type CalculationsOrderByRelevanceFieldEnum = (typeof CalculationsOrderByRelevanceFieldEnum)[keyof typeof CalculationsOrderByRelevanceFieldEnum]


  export const CompanyVehiclesOrderByRelevanceFieldEnum: {
    vehicle_type: 'vehicle_type',
    vehicle_model: 'vehicle_model'
  };

  export type CompanyVehiclesOrderByRelevanceFieldEnum = (typeof CompanyVehiclesOrderByRelevanceFieldEnum)[keyof typeof CompanyVehiclesOrderByRelevanceFieldEnum]


  export const CountriesOrderByRelevanceFieldEnum: {
    country_name: 'country_name'
  };

  export type CountriesOrderByRelevanceFieldEnum = (typeof CountriesOrderByRelevanceFieldEnum)[keyof typeof CountriesOrderByRelevanceFieldEnum]


  export const ElectricityOrderByRelevanceFieldEnum: {
    electricity_type: 'electricity_type'
  };

  export type ElectricityOrderByRelevanceFieldEnum = (typeof ElectricityOrderByRelevanceFieldEnum)[keyof typeof ElectricityOrderByRelevanceFieldEnum]


  export const EmissionCategoriesOrderByRelevanceFieldEnum: {
    category_name: 'category_name'
  };

  export type EmissionCategoriesOrderByRelevanceFieldEnum = (typeof EmissionCategoriesOrderByRelevanceFieldEnum)[keyof typeof EmissionCategoriesOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const EmissionFactorsOrderByRelevanceFieldEnum: {
    subcategory: 'subcategory'
  };

  export type EmissionFactorsOrderByRelevanceFieldEnum = (typeof EmissionFactorsOrderByRelevanceFieldEnum)[keyof typeof EmissionFactorsOrderByRelevanceFieldEnum]


  export const FuelOrderByRelevanceFieldEnum: {
    fuel_name: 'fuel_name'
  };

  export type FuelOrderByRelevanceFieldEnum = (typeof FuelOrderByRelevanceFieldEnum)[keyof typeof FuelOrderByRelevanceFieldEnum]


  export const TravelOrderByRelevanceFieldEnum: {
    travel_type: 'travel_type'
  };

  export type TravelOrderByRelevanceFieldEnum = (typeof TravelOrderByRelevanceFieldEnum)[keyof typeof TravelOrderByRelevanceFieldEnum]


  export const UsersOrderByRelevanceFieldEnum: {
    user_name: 'user_name',
    user_company: 'user_company',
    user_email: 'user_email'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  export const Vehicle_Fuel_RelationOrderByRelevanceFieldEnum: {
    vehicle_fuel_relation_id: 'vehicle_fuel_relation_id'
  };

  export type Vehicle_Fuel_RelationOrderByRelevanceFieldEnum = (typeof Vehicle_Fuel_RelationOrderByRelevanceFieldEnum)[keyof typeof Vehicle_Fuel_RelationOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    
  /**
   * Deep Input Types
   */


  export type CalculationsWhereInput = {
    AND?: CalculationsWhereInput | CalculationsWhereInput[]
    OR?: CalculationsWhereInput[]
    NOT?: CalculationsWhereInput | CalculationsWhereInput[]
    user_id?: IntFilter<"Calculations"> | number
    country_id?: IntFilter<"Calculations"> | number
    factor_id?: IntFilter<"Calculations"> | number
    calculation_id?: StringFilter<"Calculations"> | string
    Countries?: XOR<CountriesScalarRelationFilter, CountriesWhereInput>
    EmissionFactors?: XOR<EmissionFactorsScalarRelationFilter, EmissionFactorsWhereInput>
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type CalculationsOrderByWithRelationInput = {
    user_id?: SortOrder
    country_id?: SortOrder
    factor_id?: SortOrder
    calculation_id?: SortOrder
    Countries?: CountriesOrderByWithRelationInput
    EmissionFactors?: EmissionFactorsOrderByWithRelationInput
    Users?: UsersOrderByWithRelationInput
    _relevance?: CalculationsOrderByRelevanceInput
  }

  export type CalculationsWhereUniqueInput = Prisma.AtLeast<{
    calculation_id?: string
    AND?: CalculationsWhereInput | CalculationsWhereInput[]
    OR?: CalculationsWhereInput[]
    NOT?: CalculationsWhereInput | CalculationsWhereInput[]
    user_id?: IntFilter<"Calculations"> | number
    country_id?: IntFilter<"Calculations"> | number
    factor_id?: IntFilter<"Calculations"> | number
    Countries?: XOR<CountriesScalarRelationFilter, CountriesWhereInput>
    EmissionFactors?: XOR<EmissionFactorsScalarRelationFilter, EmissionFactorsWhereInput>
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "calculation_id">

  export type CalculationsOrderByWithAggregationInput = {
    user_id?: SortOrder
    country_id?: SortOrder
    factor_id?: SortOrder
    calculation_id?: SortOrder
    _count?: CalculationsCountOrderByAggregateInput
    _avg?: CalculationsAvgOrderByAggregateInput
    _max?: CalculationsMaxOrderByAggregateInput
    _min?: CalculationsMinOrderByAggregateInput
    _sum?: CalculationsSumOrderByAggregateInput
  }

  export type CalculationsScalarWhereWithAggregatesInput = {
    AND?: CalculationsScalarWhereWithAggregatesInput | CalculationsScalarWhereWithAggregatesInput[]
    OR?: CalculationsScalarWhereWithAggregatesInput[]
    NOT?: CalculationsScalarWhereWithAggregatesInput | CalculationsScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"Calculations"> | number
    country_id?: IntWithAggregatesFilter<"Calculations"> | number
    factor_id?: IntWithAggregatesFilter<"Calculations"> | number
    calculation_id?: StringWithAggregatesFilter<"Calculations"> | string
  }

  export type CompanyVehiclesWhereInput = {
    AND?: CompanyVehiclesWhereInput | CompanyVehiclesWhereInput[]
    OR?: CompanyVehiclesWhereInput[]
    NOT?: CompanyVehiclesWhereInput | CompanyVehiclesWhereInput[]
    vehicle_id?: IntFilter<"CompanyVehicles"> | number
    vehicle_type?: StringFilter<"CompanyVehicles"> | string
    vehicle_model?: StringFilter<"CompanyVehicles"> | string
    vehicle_mileage?: IntFilter<"CompanyVehicles"> | number
    user_id?: IntFilter<"CompanyVehicles"> | number
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Vehicle_Fuel_Relation?: Vehicle_Fuel_RelationListRelationFilter
  }

  export type CompanyVehiclesOrderByWithRelationInput = {
    vehicle_id?: SortOrder
    vehicle_type?: SortOrder
    vehicle_model?: SortOrder
    vehicle_mileage?: SortOrder
    user_id?: SortOrder
    Users?: UsersOrderByWithRelationInput
    Vehicle_Fuel_Relation?: Vehicle_Fuel_RelationOrderByRelationAggregateInput
    _relevance?: CompanyVehiclesOrderByRelevanceInput
  }

  export type CompanyVehiclesWhereUniqueInput = Prisma.AtLeast<{
    vehicle_id?: number
    AND?: CompanyVehiclesWhereInput | CompanyVehiclesWhereInput[]
    OR?: CompanyVehiclesWhereInput[]
    NOT?: CompanyVehiclesWhereInput | CompanyVehiclesWhereInput[]
    vehicle_type?: StringFilter<"CompanyVehicles"> | string
    vehicle_model?: StringFilter<"CompanyVehicles"> | string
    vehicle_mileage?: IntFilter<"CompanyVehicles"> | number
    user_id?: IntFilter<"CompanyVehicles"> | number
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Vehicle_Fuel_Relation?: Vehicle_Fuel_RelationListRelationFilter
  }, "vehicle_id">

  export type CompanyVehiclesOrderByWithAggregationInput = {
    vehicle_id?: SortOrder
    vehicle_type?: SortOrder
    vehicle_model?: SortOrder
    vehicle_mileage?: SortOrder
    user_id?: SortOrder
    _count?: CompanyVehiclesCountOrderByAggregateInput
    _avg?: CompanyVehiclesAvgOrderByAggregateInput
    _max?: CompanyVehiclesMaxOrderByAggregateInput
    _min?: CompanyVehiclesMinOrderByAggregateInput
    _sum?: CompanyVehiclesSumOrderByAggregateInput
  }

  export type CompanyVehiclesScalarWhereWithAggregatesInput = {
    AND?: CompanyVehiclesScalarWhereWithAggregatesInput | CompanyVehiclesScalarWhereWithAggregatesInput[]
    OR?: CompanyVehiclesScalarWhereWithAggregatesInput[]
    NOT?: CompanyVehiclesScalarWhereWithAggregatesInput | CompanyVehiclesScalarWhereWithAggregatesInput[]
    vehicle_id?: IntWithAggregatesFilter<"CompanyVehicles"> | number
    vehicle_type?: StringWithAggregatesFilter<"CompanyVehicles"> | string
    vehicle_model?: StringWithAggregatesFilter<"CompanyVehicles"> | string
    vehicle_mileage?: IntWithAggregatesFilter<"CompanyVehicles"> | number
    user_id?: IntWithAggregatesFilter<"CompanyVehicles"> | number
  }

  export type CountriesWhereInput = {
    AND?: CountriesWhereInput | CountriesWhereInput[]
    OR?: CountriesWhereInput[]
    NOT?: CountriesWhereInput | CountriesWhereInput[]
    country_id?: IntFilter<"Countries"> | number
    country_name?: StringFilter<"Countries"> | string
    Calculations?: CalculationsListRelationFilter
    Electricity?: ElectricityListRelationFilter
    EmissionFactors?: EmissionFactorsListRelationFilter
    Emissions?: EmissionsListRelationFilter
    Travel?: TravelListRelationFilter
    Users?: UsersListRelationFilter
    Water?: WaterListRelationFilter
  }

  export type CountriesOrderByWithRelationInput = {
    country_id?: SortOrder
    country_name?: SortOrder
    Calculations?: CalculationsOrderByRelationAggregateInput
    Electricity?: ElectricityOrderByRelationAggregateInput
    EmissionFactors?: EmissionFactorsOrderByRelationAggregateInput
    Emissions?: EmissionsOrderByRelationAggregateInput
    Travel?: TravelOrderByRelationAggregateInput
    Users?: UsersOrderByRelationAggregateInput
    Water?: WaterOrderByRelationAggregateInput
    _relevance?: CountriesOrderByRelevanceInput
  }

  export type CountriesWhereUniqueInput = Prisma.AtLeast<{
    country_id?: number
    AND?: CountriesWhereInput | CountriesWhereInput[]
    OR?: CountriesWhereInput[]
    NOT?: CountriesWhereInput | CountriesWhereInput[]
    country_name?: StringFilter<"Countries"> | string
    Calculations?: CalculationsListRelationFilter
    Electricity?: ElectricityListRelationFilter
    EmissionFactors?: EmissionFactorsListRelationFilter
    Emissions?: EmissionsListRelationFilter
    Travel?: TravelListRelationFilter
    Users?: UsersListRelationFilter
    Water?: WaterListRelationFilter
  }, "country_id">

  export type CountriesOrderByWithAggregationInput = {
    country_id?: SortOrder
    country_name?: SortOrder
    _count?: CountriesCountOrderByAggregateInput
    _avg?: CountriesAvgOrderByAggregateInput
    _max?: CountriesMaxOrderByAggregateInput
    _min?: CountriesMinOrderByAggregateInput
    _sum?: CountriesSumOrderByAggregateInput
  }

  export type CountriesScalarWhereWithAggregatesInput = {
    AND?: CountriesScalarWhereWithAggregatesInput | CountriesScalarWhereWithAggregatesInput[]
    OR?: CountriesScalarWhereWithAggregatesInput[]
    NOT?: CountriesScalarWhereWithAggregatesInput | CountriesScalarWhereWithAggregatesInput[]
    country_id?: IntWithAggregatesFilter<"Countries"> | number
    country_name?: StringWithAggregatesFilter<"Countries"> | string
  }

  export type ElectricityWhereInput = {
    AND?: ElectricityWhereInput | ElectricityWhereInput[]
    OR?: ElectricityWhereInput[]
    NOT?: ElectricityWhereInput | ElectricityWhereInput[]
    electricity_id?: IntFilter<"Electricity"> | number
    electricity_type?: StringFilter<"Electricity"> | string
    electricity_use?: FloatFilter<"Electricity"> | number
    country_id?: IntFilter<"Electricity"> | number
    category_id?: IntFilter<"Electricity"> | number
    factor_id?: IntFilter<"Electricity"> | number
    Countries?: XOR<CountriesScalarRelationFilter, CountriesWhereInput>
    EmissionCategories?: XOR<EmissionCategoriesScalarRelationFilter, EmissionCategoriesWhereInput>
    EmissionFactors?: XOR<EmissionFactorsScalarRelationFilter, EmissionFactorsWhereInput>
  }

  export type ElectricityOrderByWithRelationInput = {
    electricity_id?: SortOrder
    electricity_type?: SortOrder
    electricity_use?: SortOrder
    country_id?: SortOrder
    category_id?: SortOrder
    factor_id?: SortOrder
    Countries?: CountriesOrderByWithRelationInput
    EmissionCategories?: EmissionCategoriesOrderByWithRelationInput
    EmissionFactors?: EmissionFactorsOrderByWithRelationInput
    _relevance?: ElectricityOrderByRelevanceInput
  }

  export type ElectricityWhereUniqueInput = Prisma.AtLeast<{
    electricity_id?: number
    AND?: ElectricityWhereInput | ElectricityWhereInput[]
    OR?: ElectricityWhereInput[]
    NOT?: ElectricityWhereInput | ElectricityWhereInput[]
    electricity_type?: StringFilter<"Electricity"> | string
    electricity_use?: FloatFilter<"Electricity"> | number
    country_id?: IntFilter<"Electricity"> | number
    category_id?: IntFilter<"Electricity"> | number
    factor_id?: IntFilter<"Electricity"> | number
    Countries?: XOR<CountriesScalarRelationFilter, CountriesWhereInput>
    EmissionCategories?: XOR<EmissionCategoriesScalarRelationFilter, EmissionCategoriesWhereInput>
    EmissionFactors?: XOR<EmissionFactorsScalarRelationFilter, EmissionFactorsWhereInput>
  }, "electricity_id">

  export type ElectricityOrderByWithAggregationInput = {
    electricity_id?: SortOrder
    electricity_type?: SortOrder
    electricity_use?: SortOrder
    country_id?: SortOrder
    category_id?: SortOrder
    factor_id?: SortOrder
    _count?: ElectricityCountOrderByAggregateInput
    _avg?: ElectricityAvgOrderByAggregateInput
    _max?: ElectricityMaxOrderByAggregateInput
    _min?: ElectricityMinOrderByAggregateInput
    _sum?: ElectricitySumOrderByAggregateInput
  }

  export type ElectricityScalarWhereWithAggregatesInput = {
    AND?: ElectricityScalarWhereWithAggregatesInput | ElectricityScalarWhereWithAggregatesInput[]
    OR?: ElectricityScalarWhereWithAggregatesInput[]
    NOT?: ElectricityScalarWhereWithAggregatesInput | ElectricityScalarWhereWithAggregatesInput[]
    electricity_id?: IntWithAggregatesFilter<"Electricity"> | number
    electricity_type?: StringWithAggregatesFilter<"Electricity"> | string
    electricity_use?: FloatWithAggregatesFilter<"Electricity"> | number
    country_id?: IntWithAggregatesFilter<"Electricity"> | number
    category_id?: IntWithAggregatesFilter<"Electricity"> | number
    factor_id?: IntWithAggregatesFilter<"Electricity"> | number
  }

  export type EmissionCategoriesWhereInput = {
    AND?: EmissionCategoriesWhereInput | EmissionCategoriesWhereInput[]
    OR?: EmissionCategoriesWhereInput[]
    NOT?: EmissionCategoriesWhereInput | EmissionCategoriesWhereInput[]
    category_id?: IntFilter<"EmissionCategories"> | number
    category_name?: StringFilter<"EmissionCategories"> | string
    Electricity?: ElectricityListRelationFilter
    EmissionFactors?: EmissionFactorsListRelationFilter
    Emissions?: EmissionsListRelationFilter
    Fuel?: FuelListRelationFilter
    Travel?: TravelListRelationFilter
    Water?: WaterListRelationFilter
  }

  export type EmissionCategoriesOrderByWithRelationInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    Electricity?: ElectricityOrderByRelationAggregateInput
    EmissionFactors?: EmissionFactorsOrderByRelationAggregateInput
    Emissions?: EmissionsOrderByRelationAggregateInput
    Fuel?: FuelOrderByRelationAggregateInput
    Travel?: TravelOrderByRelationAggregateInput
    Water?: WaterOrderByRelationAggregateInput
    _relevance?: EmissionCategoriesOrderByRelevanceInput
  }

  export type EmissionCategoriesWhereUniqueInput = Prisma.AtLeast<{
    category_id?: number
    AND?: EmissionCategoriesWhereInput | EmissionCategoriesWhereInput[]
    OR?: EmissionCategoriesWhereInput[]
    NOT?: EmissionCategoriesWhereInput | EmissionCategoriesWhereInput[]
    category_name?: StringFilter<"EmissionCategories"> | string
    Electricity?: ElectricityListRelationFilter
    EmissionFactors?: EmissionFactorsListRelationFilter
    Emissions?: EmissionsListRelationFilter
    Fuel?: FuelListRelationFilter
    Travel?: TravelListRelationFilter
    Water?: WaterListRelationFilter
  }, "category_id">

  export type EmissionCategoriesOrderByWithAggregationInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    _count?: EmissionCategoriesCountOrderByAggregateInput
    _avg?: EmissionCategoriesAvgOrderByAggregateInput
    _max?: EmissionCategoriesMaxOrderByAggregateInput
    _min?: EmissionCategoriesMinOrderByAggregateInput
    _sum?: EmissionCategoriesSumOrderByAggregateInput
  }

  export type EmissionCategoriesScalarWhereWithAggregatesInput = {
    AND?: EmissionCategoriesScalarWhereWithAggregatesInput | EmissionCategoriesScalarWhereWithAggregatesInput[]
    OR?: EmissionCategoriesScalarWhereWithAggregatesInput[]
    NOT?: EmissionCategoriesScalarWhereWithAggregatesInput | EmissionCategoriesScalarWhereWithAggregatesInput[]
    category_id?: IntWithAggregatesFilter<"EmissionCategories"> | number
    category_name?: StringWithAggregatesFilter<"EmissionCategories"> | string
  }

  export type EmissionFactorsWhereInput = {
    AND?: EmissionFactorsWhereInput | EmissionFactorsWhereInput[]
    OR?: EmissionFactorsWhereInput[]
    NOT?: EmissionFactorsWhereInput | EmissionFactorsWhereInput[]
    factor_id?: IntFilter<"EmissionFactors"> | number
    category_id?: IntFilter<"EmissionFactors"> | number
    subcategory?: StringNullableFilter<"EmissionFactors"> | string | null
    country_id?: IntFilter<"EmissionFactors"> | number
    factor_num?: DecimalFilter<"EmissionFactors"> | Decimal | DecimalJsLike | number | string
    Calculations?: CalculationsListRelationFilter
    Electricity?: ElectricityListRelationFilter
    Countries?: XOR<CountriesScalarRelationFilter, CountriesWhereInput>
    EmissionCategories?: XOR<EmissionCategoriesScalarRelationFilter, EmissionCategoriesWhereInput>
    Travel?: TravelListRelationFilter
    Water?: WaterListRelationFilter
  }

  export type EmissionFactorsOrderByWithRelationInput = {
    factor_id?: SortOrder
    category_id?: SortOrder
    subcategory?: SortOrderInput | SortOrder
    country_id?: SortOrder
    factor_num?: SortOrder
    Calculations?: CalculationsOrderByRelationAggregateInput
    Electricity?: ElectricityOrderByRelationAggregateInput
    Countries?: CountriesOrderByWithRelationInput
    EmissionCategories?: EmissionCategoriesOrderByWithRelationInput
    Travel?: TravelOrderByRelationAggregateInput
    Water?: WaterOrderByRelationAggregateInput
    _relevance?: EmissionFactorsOrderByRelevanceInput
  }

  export type EmissionFactorsWhereUniqueInput = Prisma.AtLeast<{
    factor_id?: number
    AND?: EmissionFactorsWhereInput | EmissionFactorsWhereInput[]
    OR?: EmissionFactorsWhereInput[]
    NOT?: EmissionFactorsWhereInput | EmissionFactorsWhereInput[]
    category_id?: IntFilter<"EmissionFactors"> | number
    subcategory?: StringNullableFilter<"EmissionFactors"> | string | null
    country_id?: IntFilter<"EmissionFactors"> | number
    factor_num?: DecimalFilter<"EmissionFactors"> | Decimal | DecimalJsLike | number | string
    Calculations?: CalculationsListRelationFilter
    Electricity?: ElectricityListRelationFilter
    Countries?: XOR<CountriesScalarRelationFilter, CountriesWhereInput>
    EmissionCategories?: XOR<EmissionCategoriesScalarRelationFilter, EmissionCategoriesWhereInput>
    Travel?: TravelListRelationFilter
    Water?: WaterListRelationFilter
  }, "factor_id">

  export type EmissionFactorsOrderByWithAggregationInput = {
    factor_id?: SortOrder
    category_id?: SortOrder
    subcategory?: SortOrderInput | SortOrder
    country_id?: SortOrder
    factor_num?: SortOrder
    _count?: EmissionFactorsCountOrderByAggregateInput
    _avg?: EmissionFactorsAvgOrderByAggregateInput
    _max?: EmissionFactorsMaxOrderByAggregateInput
    _min?: EmissionFactorsMinOrderByAggregateInput
    _sum?: EmissionFactorsSumOrderByAggregateInput
  }

  export type EmissionFactorsScalarWhereWithAggregatesInput = {
    AND?: EmissionFactorsScalarWhereWithAggregatesInput | EmissionFactorsScalarWhereWithAggregatesInput[]
    OR?: EmissionFactorsScalarWhereWithAggregatesInput[]
    NOT?: EmissionFactorsScalarWhereWithAggregatesInput | EmissionFactorsScalarWhereWithAggregatesInput[]
    factor_id?: IntWithAggregatesFilter<"EmissionFactors"> | number
    category_id?: IntWithAggregatesFilter<"EmissionFactors"> | number
    subcategory?: StringNullableWithAggregatesFilter<"EmissionFactors"> | string | null
    country_id?: IntWithAggregatesFilter<"EmissionFactors"> | number
    factor_num?: DecimalWithAggregatesFilter<"EmissionFactors"> | Decimal | DecimalJsLike | number | string
  }

  export type EmissionsWhereInput = {
    AND?: EmissionsWhereInput | EmissionsWhereInput[]
    OR?: EmissionsWhereInput[]
    NOT?: EmissionsWhereInput | EmissionsWhereInput[]
    emission_id?: IntFilter<"Emissions"> | number
    user_id?: IntFilter<"Emissions"> | number
    country_id?: IntFilter<"Emissions"> | number
    category_id?: IntFilter<"Emissions"> | number
    emission_value?: DecimalFilter<"Emissions"> | Decimal | DecimalJsLike | number | string
    Countries?: XOR<CountriesScalarRelationFilter, CountriesWhereInput>
    EmissionCategories?: XOR<EmissionCategoriesScalarRelationFilter, EmissionCategoriesWhereInput>
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type EmissionsOrderByWithRelationInput = {
    emission_id?: SortOrder
    user_id?: SortOrder
    country_id?: SortOrder
    category_id?: SortOrder
    emission_value?: SortOrder
    Countries?: CountriesOrderByWithRelationInput
    EmissionCategories?: EmissionCategoriesOrderByWithRelationInput
    Users?: UsersOrderByWithRelationInput
  }

  export type EmissionsWhereUniqueInput = Prisma.AtLeast<{
    emission_id?: number
    AND?: EmissionsWhereInput | EmissionsWhereInput[]
    OR?: EmissionsWhereInput[]
    NOT?: EmissionsWhereInput | EmissionsWhereInput[]
    user_id?: IntFilter<"Emissions"> | number
    country_id?: IntFilter<"Emissions"> | number
    category_id?: IntFilter<"Emissions"> | number
    emission_value?: DecimalFilter<"Emissions"> | Decimal | DecimalJsLike | number | string
    Countries?: XOR<CountriesScalarRelationFilter, CountriesWhereInput>
    EmissionCategories?: XOR<EmissionCategoriesScalarRelationFilter, EmissionCategoriesWhereInput>
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "emission_id">

  export type EmissionsOrderByWithAggregationInput = {
    emission_id?: SortOrder
    user_id?: SortOrder
    country_id?: SortOrder
    category_id?: SortOrder
    emission_value?: SortOrder
    _count?: EmissionsCountOrderByAggregateInput
    _avg?: EmissionsAvgOrderByAggregateInput
    _max?: EmissionsMaxOrderByAggregateInput
    _min?: EmissionsMinOrderByAggregateInput
    _sum?: EmissionsSumOrderByAggregateInput
  }

  export type EmissionsScalarWhereWithAggregatesInput = {
    AND?: EmissionsScalarWhereWithAggregatesInput | EmissionsScalarWhereWithAggregatesInput[]
    OR?: EmissionsScalarWhereWithAggregatesInput[]
    NOT?: EmissionsScalarWhereWithAggregatesInput | EmissionsScalarWhereWithAggregatesInput[]
    emission_id?: IntWithAggregatesFilter<"Emissions"> | number
    user_id?: IntWithAggregatesFilter<"Emissions"> | number
    country_id?: IntWithAggregatesFilter<"Emissions"> | number
    category_id?: IntWithAggregatesFilter<"Emissions"> | number
    emission_value?: DecimalWithAggregatesFilter<"Emissions"> | Decimal | DecimalJsLike | number | string
  }

  export type FuelWhereInput = {
    AND?: FuelWhereInput | FuelWhereInput[]
    OR?: FuelWhereInput[]
    NOT?: FuelWhereInput | FuelWhereInput[]
    fuel_id?: FloatFilter<"Fuel"> | number
    fuel_name?: StringFilter<"Fuel"> | string
    category_id?: IntNullableFilter<"Fuel"> | number | null
    EmissionCategories?: XOR<EmissionCategoriesNullableScalarRelationFilter, EmissionCategoriesWhereInput> | null
    Vehicle_Fuel_Relation?: Vehicle_Fuel_RelationListRelationFilter
  }

  export type FuelOrderByWithRelationInput = {
    fuel_id?: SortOrder
    fuel_name?: SortOrder
    category_id?: SortOrderInput | SortOrder
    EmissionCategories?: EmissionCategoriesOrderByWithRelationInput
    Vehicle_Fuel_Relation?: Vehicle_Fuel_RelationOrderByRelationAggregateInput
    _relevance?: FuelOrderByRelevanceInput
  }

  export type FuelWhereUniqueInput = Prisma.AtLeast<{
    fuel_id?: number
    AND?: FuelWhereInput | FuelWhereInput[]
    OR?: FuelWhereInput[]
    NOT?: FuelWhereInput | FuelWhereInput[]
    fuel_name?: StringFilter<"Fuel"> | string
    category_id?: IntNullableFilter<"Fuel"> | number | null
    EmissionCategories?: XOR<EmissionCategoriesNullableScalarRelationFilter, EmissionCategoriesWhereInput> | null
    Vehicle_Fuel_Relation?: Vehicle_Fuel_RelationListRelationFilter
  }, "fuel_id">

  export type FuelOrderByWithAggregationInput = {
    fuel_id?: SortOrder
    fuel_name?: SortOrder
    category_id?: SortOrderInput | SortOrder
    _count?: FuelCountOrderByAggregateInput
    _avg?: FuelAvgOrderByAggregateInput
    _max?: FuelMaxOrderByAggregateInput
    _min?: FuelMinOrderByAggregateInput
    _sum?: FuelSumOrderByAggregateInput
  }

  export type FuelScalarWhereWithAggregatesInput = {
    AND?: FuelScalarWhereWithAggregatesInput | FuelScalarWhereWithAggregatesInput[]
    OR?: FuelScalarWhereWithAggregatesInput[]
    NOT?: FuelScalarWhereWithAggregatesInput | FuelScalarWhereWithAggregatesInput[]
    fuel_id?: FloatWithAggregatesFilter<"Fuel"> | number
    fuel_name?: StringWithAggregatesFilter<"Fuel"> | string
    category_id?: IntNullableWithAggregatesFilter<"Fuel"> | number | null
  }

  export type TravelWhereInput = {
    AND?: TravelWhereInput | TravelWhereInput[]
    OR?: TravelWhereInput[]
    NOT?: TravelWhereInput | TravelWhereInput[]
    travel_id?: IntFilter<"Travel"> | number
    travel_type?: StringFilter<"Travel"> | string
    travel_mileage?: IntFilter<"Travel"> | number
    country_id?: IntFilter<"Travel"> | number
    emission_id?: IntFilter<"Travel"> | number
    factor_id?: IntFilter<"Travel"> | number
    Countries?: XOR<CountriesScalarRelationFilter, CountriesWhereInput>
    EmissionCategories?: XOR<EmissionCategoriesScalarRelationFilter, EmissionCategoriesWhereInput>
    EmissionFactors?: XOR<EmissionFactorsScalarRelationFilter, EmissionFactorsWhereInput>
  }

  export type TravelOrderByWithRelationInput = {
    travel_id?: SortOrder
    travel_type?: SortOrder
    travel_mileage?: SortOrder
    country_id?: SortOrder
    emission_id?: SortOrder
    factor_id?: SortOrder
    Countries?: CountriesOrderByWithRelationInput
    EmissionCategories?: EmissionCategoriesOrderByWithRelationInput
    EmissionFactors?: EmissionFactorsOrderByWithRelationInput
    _relevance?: TravelOrderByRelevanceInput
  }

  export type TravelWhereUniqueInput = Prisma.AtLeast<{
    travel_id?: number
    AND?: TravelWhereInput | TravelWhereInput[]
    OR?: TravelWhereInput[]
    NOT?: TravelWhereInput | TravelWhereInput[]
    travel_type?: StringFilter<"Travel"> | string
    travel_mileage?: IntFilter<"Travel"> | number
    country_id?: IntFilter<"Travel"> | number
    emission_id?: IntFilter<"Travel"> | number
    factor_id?: IntFilter<"Travel"> | number
    Countries?: XOR<CountriesScalarRelationFilter, CountriesWhereInput>
    EmissionCategories?: XOR<EmissionCategoriesScalarRelationFilter, EmissionCategoriesWhereInput>
    EmissionFactors?: XOR<EmissionFactorsScalarRelationFilter, EmissionFactorsWhereInput>
  }, "travel_id">

  export type TravelOrderByWithAggregationInput = {
    travel_id?: SortOrder
    travel_type?: SortOrder
    travel_mileage?: SortOrder
    country_id?: SortOrder
    emission_id?: SortOrder
    factor_id?: SortOrder
    _count?: TravelCountOrderByAggregateInput
    _avg?: TravelAvgOrderByAggregateInput
    _max?: TravelMaxOrderByAggregateInput
    _min?: TravelMinOrderByAggregateInput
    _sum?: TravelSumOrderByAggregateInput
  }

  export type TravelScalarWhereWithAggregatesInput = {
    AND?: TravelScalarWhereWithAggregatesInput | TravelScalarWhereWithAggregatesInput[]
    OR?: TravelScalarWhereWithAggregatesInput[]
    NOT?: TravelScalarWhereWithAggregatesInput | TravelScalarWhereWithAggregatesInput[]
    travel_id?: IntWithAggregatesFilter<"Travel"> | number
    travel_type?: StringWithAggregatesFilter<"Travel"> | string
    travel_mileage?: IntWithAggregatesFilter<"Travel"> | number
    country_id?: IntWithAggregatesFilter<"Travel"> | number
    emission_id?: IntWithAggregatesFilter<"Travel"> | number
    factor_id?: IntWithAggregatesFilter<"Travel"> | number
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    user_id?: IntFilter<"Users"> | number
    user_name?: StringFilter<"Users"> | string
    user_company?: StringFilter<"Users"> | string
    user_email?: StringFilter<"Users"> | string
    country_id?: IntFilter<"Users"> | number
    Calculations?: CalculationsListRelationFilter
    CompanyVehicles?: CompanyVehiclesListRelationFilter
    Emissions?: EmissionsListRelationFilter
    Countries?: XOR<CountriesScalarRelationFilter, CountriesWhereInput>
  }

  export type UsersOrderByWithRelationInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    user_company?: SortOrder
    user_email?: SortOrder
    country_id?: SortOrder
    Calculations?: CalculationsOrderByRelationAggregateInput
    CompanyVehicles?: CompanyVehiclesOrderByRelationAggregateInput
    Emissions?: EmissionsOrderByRelationAggregateInput
    Countries?: CountriesOrderByWithRelationInput
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    user_name?: StringFilter<"Users"> | string
    user_company?: StringFilter<"Users"> | string
    user_email?: StringFilter<"Users"> | string
    country_id?: IntFilter<"Users"> | number
    Calculations?: CalculationsListRelationFilter
    CompanyVehicles?: CompanyVehiclesListRelationFilter
    Emissions?: EmissionsListRelationFilter
    Countries?: XOR<CountriesScalarRelationFilter, CountriesWhereInput>
  }, "user_id">

  export type UsersOrderByWithAggregationInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    user_company?: SortOrder
    user_email?: SortOrder
    country_id?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"Users"> | number
    user_name?: StringWithAggregatesFilter<"Users"> | string
    user_company?: StringWithAggregatesFilter<"Users"> | string
    user_email?: StringWithAggregatesFilter<"Users"> | string
    country_id?: IntWithAggregatesFilter<"Users"> | number
  }

  export type Vehicle_Fuel_RelationWhereInput = {
    AND?: Vehicle_Fuel_RelationWhereInput | Vehicle_Fuel_RelationWhereInput[]
    OR?: Vehicle_Fuel_RelationWhereInput[]
    NOT?: Vehicle_Fuel_RelationWhereInput | Vehicle_Fuel_RelationWhereInput[]
    vehicle_id?: IntFilter<"Vehicle_Fuel_Relation"> | number
    fuel_id?: FloatFilter<"Vehicle_Fuel_Relation"> | number
    vehicle_fuel_relation_id?: StringFilter<"Vehicle_Fuel_Relation"> | string
    CompanyVehicles?: XOR<CompanyVehiclesScalarRelationFilter, CompanyVehiclesWhereInput>
    Fuel?: XOR<FuelScalarRelationFilter, FuelWhereInput>
  }

  export type Vehicle_Fuel_RelationOrderByWithRelationInput = {
    vehicle_id?: SortOrder
    fuel_id?: SortOrder
    vehicle_fuel_relation_id?: SortOrder
    CompanyVehicles?: CompanyVehiclesOrderByWithRelationInput
    Fuel?: FuelOrderByWithRelationInput
    _relevance?: Vehicle_Fuel_RelationOrderByRelevanceInput
  }

  export type Vehicle_Fuel_RelationWhereUniqueInput = Prisma.AtLeast<{
    vehicle_fuel_relation_id?: string
    AND?: Vehicle_Fuel_RelationWhereInput | Vehicle_Fuel_RelationWhereInput[]
    OR?: Vehicle_Fuel_RelationWhereInput[]
    NOT?: Vehicle_Fuel_RelationWhereInput | Vehicle_Fuel_RelationWhereInput[]
    vehicle_id?: IntFilter<"Vehicle_Fuel_Relation"> | number
    fuel_id?: FloatFilter<"Vehicle_Fuel_Relation"> | number
    CompanyVehicles?: XOR<CompanyVehiclesScalarRelationFilter, CompanyVehiclesWhereInput>
    Fuel?: XOR<FuelScalarRelationFilter, FuelWhereInput>
  }, "vehicle_fuel_relation_id">

  export type Vehicle_Fuel_RelationOrderByWithAggregationInput = {
    vehicle_id?: SortOrder
    fuel_id?: SortOrder
    vehicle_fuel_relation_id?: SortOrder
    _count?: Vehicle_Fuel_RelationCountOrderByAggregateInput
    _avg?: Vehicle_Fuel_RelationAvgOrderByAggregateInput
    _max?: Vehicle_Fuel_RelationMaxOrderByAggregateInput
    _min?: Vehicle_Fuel_RelationMinOrderByAggregateInput
    _sum?: Vehicle_Fuel_RelationSumOrderByAggregateInput
  }

  export type Vehicle_Fuel_RelationScalarWhereWithAggregatesInput = {
    AND?: Vehicle_Fuel_RelationScalarWhereWithAggregatesInput | Vehicle_Fuel_RelationScalarWhereWithAggregatesInput[]
    OR?: Vehicle_Fuel_RelationScalarWhereWithAggregatesInput[]
    NOT?: Vehicle_Fuel_RelationScalarWhereWithAggregatesInput | Vehicle_Fuel_RelationScalarWhereWithAggregatesInput[]
    vehicle_id?: IntWithAggregatesFilter<"Vehicle_Fuel_Relation"> | number
    fuel_id?: FloatWithAggregatesFilter<"Vehicle_Fuel_Relation"> | number
    vehicle_fuel_relation_id?: StringWithAggregatesFilter<"Vehicle_Fuel_Relation"> | string
  }

  export type WaterWhereInput = {
    AND?: WaterWhereInput | WaterWhereInput[]
    OR?: WaterWhereInput[]
    NOT?: WaterWhereInput | WaterWhereInput[]
    water_id?: IntNullableFilter<"Water"> | number | null
    water_use?: IntFilter<"Water"> | number
    country_id?: IntFilter<"Water"> | number
    emission_id?: IntFilter<"Water"> | number
    factor_id?: IntFilter<"Water"> | number
    Countries?: XOR<CountriesScalarRelationFilter, CountriesWhereInput>
    EmissionCategories?: XOR<EmissionCategoriesScalarRelationFilter, EmissionCategoriesWhereInput>
    EmissionFactors?: XOR<EmissionFactorsScalarRelationFilter, EmissionFactorsWhereInput>
  }

  export type WaterOrderByWithRelationInput = {
    water_id?: SortOrderInput | SortOrder
    water_use?: SortOrder
    country_id?: SortOrder
    emission_id?: SortOrder
    factor_id?: SortOrder
    Countries?: CountriesOrderByWithRelationInput
    EmissionCategories?: EmissionCategoriesOrderByWithRelationInput
    EmissionFactors?: EmissionFactorsOrderByWithRelationInput
  }

  export type WaterWhereUniqueInput = Prisma.AtLeast<{
    water_use?: number
    AND?: WaterWhereInput | WaterWhereInput[]
    OR?: WaterWhereInput[]
    NOT?: WaterWhereInput | WaterWhereInput[]
    water_id?: IntNullableFilter<"Water"> | number | null
    country_id?: IntFilter<"Water"> | number
    emission_id?: IntFilter<"Water"> | number
    factor_id?: IntFilter<"Water"> | number
    Countries?: XOR<CountriesScalarRelationFilter, CountriesWhereInput>
    EmissionCategories?: XOR<EmissionCategoriesScalarRelationFilter, EmissionCategoriesWhereInput>
    EmissionFactors?: XOR<EmissionFactorsScalarRelationFilter, EmissionFactorsWhereInput>
  }, "water_use">

  export type WaterOrderByWithAggregationInput = {
    water_id?: SortOrderInput | SortOrder
    water_use?: SortOrder
    country_id?: SortOrder
    emission_id?: SortOrder
    factor_id?: SortOrder
    _count?: WaterCountOrderByAggregateInput
    _avg?: WaterAvgOrderByAggregateInput
    _max?: WaterMaxOrderByAggregateInput
    _min?: WaterMinOrderByAggregateInput
    _sum?: WaterSumOrderByAggregateInput
  }

  export type WaterScalarWhereWithAggregatesInput = {
    AND?: WaterScalarWhereWithAggregatesInput | WaterScalarWhereWithAggregatesInput[]
    OR?: WaterScalarWhereWithAggregatesInput[]
    NOT?: WaterScalarWhereWithAggregatesInput | WaterScalarWhereWithAggregatesInput[]
    water_id?: IntNullableWithAggregatesFilter<"Water"> | number | null
    water_use?: IntWithAggregatesFilter<"Water"> | number
    country_id?: IntWithAggregatesFilter<"Water"> | number
    emission_id?: IntWithAggregatesFilter<"Water"> | number
    factor_id?: IntWithAggregatesFilter<"Water"> | number
  }

  export type CalculationsCreateInput = {
    calculation_id: string
    Countries: CountriesCreateNestedOneWithoutCalculationsInput
    EmissionFactors: EmissionFactorsCreateNestedOneWithoutCalculationsInput
    Users: UsersCreateNestedOneWithoutCalculationsInput
  }

  export type CalculationsUncheckedCreateInput = {
    user_id: number
    country_id: number
    factor_id: number
    calculation_id: string
  }

  export type CalculationsUpdateInput = {
    calculation_id?: StringFieldUpdateOperationsInput | string
    Countries?: CountriesUpdateOneRequiredWithoutCalculationsNestedInput
    EmissionFactors?: EmissionFactorsUpdateOneRequiredWithoutCalculationsNestedInput
    Users?: UsersUpdateOneRequiredWithoutCalculationsNestedInput
  }

  export type CalculationsUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    factor_id?: IntFieldUpdateOperationsInput | number
    calculation_id?: StringFieldUpdateOperationsInput | string
  }

  export type CalculationsCreateManyInput = {
    user_id: number
    country_id: number
    factor_id: number
    calculation_id: string
  }

  export type CalculationsUpdateManyMutationInput = {
    calculation_id?: StringFieldUpdateOperationsInput | string
  }

  export type CalculationsUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    factor_id?: IntFieldUpdateOperationsInput | number
    calculation_id?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyVehiclesCreateInput = {
    vehicle_id: number
    vehicle_type: string
    vehicle_model: string
    vehicle_mileage: number
    Users: UsersCreateNestedOneWithoutCompanyVehiclesInput
    Vehicle_Fuel_Relation?: Vehicle_Fuel_RelationCreateNestedManyWithoutCompanyVehiclesInput
  }

  export type CompanyVehiclesUncheckedCreateInput = {
    vehicle_id: number
    vehicle_type: string
    vehicle_model: string
    vehicle_mileage: number
    user_id: number
    Vehicle_Fuel_Relation?: Vehicle_Fuel_RelationUncheckedCreateNestedManyWithoutCompanyVehiclesInput
  }

  export type CompanyVehiclesUpdateInput = {
    vehicle_id?: IntFieldUpdateOperationsInput | number
    vehicle_type?: StringFieldUpdateOperationsInput | string
    vehicle_model?: StringFieldUpdateOperationsInput | string
    vehicle_mileage?: IntFieldUpdateOperationsInput | number
    Users?: UsersUpdateOneRequiredWithoutCompanyVehiclesNestedInput
    Vehicle_Fuel_Relation?: Vehicle_Fuel_RelationUpdateManyWithoutCompanyVehiclesNestedInput
  }

  export type CompanyVehiclesUncheckedUpdateInput = {
    vehicle_id?: IntFieldUpdateOperationsInput | number
    vehicle_type?: StringFieldUpdateOperationsInput | string
    vehicle_model?: StringFieldUpdateOperationsInput | string
    vehicle_mileage?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    Vehicle_Fuel_Relation?: Vehicle_Fuel_RelationUncheckedUpdateManyWithoutCompanyVehiclesNestedInput
  }

  export type CompanyVehiclesCreateManyInput = {
    vehicle_id: number
    vehicle_type: string
    vehicle_model: string
    vehicle_mileage: number
    user_id: number
  }

  export type CompanyVehiclesUpdateManyMutationInput = {
    vehicle_id?: IntFieldUpdateOperationsInput | number
    vehicle_type?: StringFieldUpdateOperationsInput | string
    vehicle_model?: StringFieldUpdateOperationsInput | string
    vehicle_mileage?: IntFieldUpdateOperationsInput | number
  }

  export type CompanyVehiclesUncheckedUpdateManyInput = {
    vehicle_id?: IntFieldUpdateOperationsInput | number
    vehicle_type?: StringFieldUpdateOperationsInput | string
    vehicle_model?: StringFieldUpdateOperationsInput | string
    vehicle_mileage?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type CountriesCreateInput = {
    country_id: number
    country_name: string
    Calculations?: CalculationsCreateNestedManyWithoutCountriesInput
    Electricity?: ElectricityCreateNestedManyWithoutCountriesInput
    EmissionFactors?: EmissionFactorsCreateNestedManyWithoutCountriesInput
    Emissions?: EmissionsCreateNestedManyWithoutCountriesInput
    Travel?: TravelCreateNestedManyWithoutCountriesInput
    Users?: UsersCreateNestedManyWithoutCountriesInput
    Water?: WaterCreateNestedManyWithoutCountriesInput
  }

  export type CountriesUncheckedCreateInput = {
    country_id: number
    country_name: string
    Calculations?: CalculationsUncheckedCreateNestedManyWithoutCountriesInput
    Electricity?: ElectricityUncheckedCreateNestedManyWithoutCountriesInput
    EmissionFactors?: EmissionFactorsUncheckedCreateNestedManyWithoutCountriesInput
    Emissions?: EmissionsUncheckedCreateNestedManyWithoutCountriesInput
    Travel?: TravelUncheckedCreateNestedManyWithoutCountriesInput
    Users?: UsersUncheckedCreateNestedManyWithoutCountriesInput
    Water?: WaterUncheckedCreateNestedManyWithoutCountriesInput
  }

  export type CountriesUpdateInput = {
    country_id?: IntFieldUpdateOperationsInput | number
    country_name?: StringFieldUpdateOperationsInput | string
    Calculations?: CalculationsUpdateManyWithoutCountriesNestedInput
    Electricity?: ElectricityUpdateManyWithoutCountriesNestedInput
    EmissionFactors?: EmissionFactorsUpdateManyWithoutCountriesNestedInput
    Emissions?: EmissionsUpdateManyWithoutCountriesNestedInput
    Travel?: TravelUpdateManyWithoutCountriesNestedInput
    Users?: UsersUpdateManyWithoutCountriesNestedInput
    Water?: WaterUpdateManyWithoutCountriesNestedInput
  }

  export type CountriesUncheckedUpdateInput = {
    country_id?: IntFieldUpdateOperationsInput | number
    country_name?: StringFieldUpdateOperationsInput | string
    Calculations?: CalculationsUncheckedUpdateManyWithoutCountriesNestedInput
    Electricity?: ElectricityUncheckedUpdateManyWithoutCountriesNestedInput
    EmissionFactors?: EmissionFactorsUncheckedUpdateManyWithoutCountriesNestedInput
    Emissions?: EmissionsUncheckedUpdateManyWithoutCountriesNestedInput
    Travel?: TravelUncheckedUpdateManyWithoutCountriesNestedInput
    Users?: UsersUncheckedUpdateManyWithoutCountriesNestedInput
    Water?: WaterUncheckedUpdateManyWithoutCountriesNestedInput
  }

  export type CountriesCreateManyInput = {
    country_id: number
    country_name: string
  }

  export type CountriesUpdateManyMutationInput = {
    country_id?: IntFieldUpdateOperationsInput | number
    country_name?: StringFieldUpdateOperationsInput | string
  }

  export type CountriesUncheckedUpdateManyInput = {
    country_id?: IntFieldUpdateOperationsInput | number
    country_name?: StringFieldUpdateOperationsInput | string
  }

  export type ElectricityCreateInput = {
    electricity_id: number
    electricity_type: string
    electricity_use: number
    Countries: CountriesCreateNestedOneWithoutElectricityInput
    EmissionCategories: EmissionCategoriesCreateNestedOneWithoutElectricityInput
    EmissionFactors: EmissionFactorsCreateNestedOneWithoutElectricityInput
  }

  export type ElectricityUncheckedCreateInput = {
    electricity_id: number
    electricity_type: string
    electricity_use: number
    country_id: number
    category_id: number
    factor_id: number
  }

  export type ElectricityUpdateInput = {
    electricity_id?: IntFieldUpdateOperationsInput | number
    electricity_type?: StringFieldUpdateOperationsInput | string
    electricity_use?: FloatFieldUpdateOperationsInput | number
    Countries?: CountriesUpdateOneRequiredWithoutElectricityNestedInput
    EmissionCategories?: EmissionCategoriesUpdateOneRequiredWithoutElectricityNestedInput
    EmissionFactors?: EmissionFactorsUpdateOneRequiredWithoutElectricityNestedInput
  }

  export type ElectricityUncheckedUpdateInput = {
    electricity_id?: IntFieldUpdateOperationsInput | number
    electricity_type?: StringFieldUpdateOperationsInput | string
    electricity_use?: FloatFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    factor_id?: IntFieldUpdateOperationsInput | number
  }

  export type ElectricityCreateManyInput = {
    electricity_id: number
    electricity_type: string
    electricity_use: number
    country_id: number
    category_id: number
    factor_id: number
  }

  export type ElectricityUpdateManyMutationInput = {
    electricity_id?: IntFieldUpdateOperationsInput | number
    electricity_type?: StringFieldUpdateOperationsInput | string
    electricity_use?: FloatFieldUpdateOperationsInput | number
  }

  export type ElectricityUncheckedUpdateManyInput = {
    electricity_id?: IntFieldUpdateOperationsInput | number
    electricity_type?: StringFieldUpdateOperationsInput | string
    electricity_use?: FloatFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    factor_id?: IntFieldUpdateOperationsInput | number
  }

  export type EmissionCategoriesCreateInput = {
    category_id: number
    category_name: string
    Electricity?: ElectricityCreateNestedManyWithoutEmissionCategoriesInput
    EmissionFactors?: EmissionFactorsCreateNestedManyWithoutEmissionCategoriesInput
    Emissions?: EmissionsCreateNestedManyWithoutEmissionCategoriesInput
    Fuel?: FuelCreateNestedManyWithoutEmissionCategoriesInput
    Travel?: TravelCreateNestedManyWithoutEmissionCategoriesInput
    Water?: WaterCreateNestedManyWithoutEmissionCategoriesInput
  }

  export type EmissionCategoriesUncheckedCreateInput = {
    category_id: number
    category_name: string
    Electricity?: ElectricityUncheckedCreateNestedManyWithoutEmissionCategoriesInput
    EmissionFactors?: EmissionFactorsUncheckedCreateNestedManyWithoutEmissionCategoriesInput
    Emissions?: EmissionsUncheckedCreateNestedManyWithoutEmissionCategoriesInput
    Fuel?: FuelUncheckedCreateNestedManyWithoutEmissionCategoriesInput
    Travel?: TravelUncheckedCreateNestedManyWithoutEmissionCategoriesInput
    Water?: WaterUncheckedCreateNestedManyWithoutEmissionCategoriesInput
  }

  export type EmissionCategoriesUpdateInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    Electricity?: ElectricityUpdateManyWithoutEmissionCategoriesNestedInput
    EmissionFactors?: EmissionFactorsUpdateManyWithoutEmissionCategoriesNestedInput
    Emissions?: EmissionsUpdateManyWithoutEmissionCategoriesNestedInput
    Fuel?: FuelUpdateManyWithoutEmissionCategoriesNestedInput
    Travel?: TravelUpdateManyWithoutEmissionCategoriesNestedInput
    Water?: WaterUpdateManyWithoutEmissionCategoriesNestedInput
  }

  export type EmissionCategoriesUncheckedUpdateInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    Electricity?: ElectricityUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
    EmissionFactors?: EmissionFactorsUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
    Emissions?: EmissionsUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
    Fuel?: FuelUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
    Travel?: TravelUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
    Water?: WaterUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
  }

  export type EmissionCategoriesCreateManyInput = {
    category_id: number
    category_name: string
  }

  export type EmissionCategoriesUpdateManyMutationInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
  }

  export type EmissionCategoriesUncheckedUpdateManyInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
  }

  export type EmissionFactorsCreateInput = {
    factor_id: number
    subcategory?: string | null
    factor_num: Decimal | DecimalJsLike | number | string
    Calculations?: CalculationsCreateNestedManyWithoutEmissionFactorsInput
    Electricity?: ElectricityCreateNestedManyWithoutEmissionFactorsInput
    Countries: CountriesCreateNestedOneWithoutEmissionFactorsInput
    EmissionCategories: EmissionCategoriesCreateNestedOneWithoutEmissionFactorsInput
    Travel?: TravelCreateNestedManyWithoutEmissionFactorsInput
    Water?: WaterCreateNestedManyWithoutEmissionFactorsInput
  }

  export type EmissionFactorsUncheckedCreateInput = {
    factor_id: number
    category_id: number
    subcategory?: string | null
    country_id: number
    factor_num: Decimal | DecimalJsLike | number | string
    Calculations?: CalculationsUncheckedCreateNestedManyWithoutEmissionFactorsInput
    Electricity?: ElectricityUncheckedCreateNestedManyWithoutEmissionFactorsInput
    Travel?: TravelUncheckedCreateNestedManyWithoutEmissionFactorsInput
    Water?: WaterUncheckedCreateNestedManyWithoutEmissionFactorsInput
  }

  export type EmissionFactorsUpdateInput = {
    factor_id?: IntFieldUpdateOperationsInput | number
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    factor_num?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Calculations?: CalculationsUpdateManyWithoutEmissionFactorsNestedInput
    Electricity?: ElectricityUpdateManyWithoutEmissionFactorsNestedInput
    Countries?: CountriesUpdateOneRequiredWithoutEmissionFactorsNestedInput
    EmissionCategories?: EmissionCategoriesUpdateOneRequiredWithoutEmissionFactorsNestedInput
    Travel?: TravelUpdateManyWithoutEmissionFactorsNestedInput
    Water?: WaterUpdateManyWithoutEmissionFactorsNestedInput
  }

  export type EmissionFactorsUncheckedUpdateInput = {
    factor_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    country_id?: IntFieldUpdateOperationsInput | number
    factor_num?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Calculations?: CalculationsUncheckedUpdateManyWithoutEmissionFactorsNestedInput
    Electricity?: ElectricityUncheckedUpdateManyWithoutEmissionFactorsNestedInput
    Travel?: TravelUncheckedUpdateManyWithoutEmissionFactorsNestedInput
    Water?: WaterUncheckedUpdateManyWithoutEmissionFactorsNestedInput
  }

  export type EmissionFactorsCreateManyInput = {
    factor_id: number
    category_id: number
    subcategory?: string | null
    country_id: number
    factor_num: Decimal | DecimalJsLike | number | string
  }

  export type EmissionFactorsUpdateManyMutationInput = {
    factor_id?: IntFieldUpdateOperationsInput | number
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    factor_num?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type EmissionFactorsUncheckedUpdateManyInput = {
    factor_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    country_id?: IntFieldUpdateOperationsInput | number
    factor_num?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type EmissionsCreateInput = {
    emission_value: Decimal | DecimalJsLike | number | string
    Countries: CountriesCreateNestedOneWithoutEmissionsInput
    EmissionCategories: EmissionCategoriesCreateNestedOneWithoutEmissionsInput
    Users: UsersCreateNestedOneWithoutEmissionsInput
  }

  export type EmissionsUncheckedCreateInput = {
    emission_id?: number
    user_id: number
    country_id: number
    category_id: number
    emission_value: Decimal | DecimalJsLike | number | string
  }

  export type EmissionsUpdateInput = {
    emission_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Countries?: CountriesUpdateOneRequiredWithoutEmissionsNestedInput
    EmissionCategories?: EmissionCategoriesUpdateOneRequiredWithoutEmissionsNestedInput
    Users?: UsersUpdateOneRequiredWithoutEmissionsNestedInput
  }

  export type EmissionsUncheckedUpdateInput = {
    emission_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    emission_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type EmissionsCreateManyInput = {
    emission_id?: number
    user_id: number
    country_id: number
    category_id: number
    emission_value: Decimal | DecimalJsLike | number | string
  }

  export type EmissionsUpdateManyMutationInput = {
    emission_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type EmissionsUncheckedUpdateManyInput = {
    emission_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    emission_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type FuelCreateInput = {
    fuel_id: number
    fuel_name: string
    EmissionCategories?: EmissionCategoriesCreateNestedOneWithoutFuelInput
    Vehicle_Fuel_Relation?: Vehicle_Fuel_RelationCreateNestedManyWithoutFuelInput
  }

  export type FuelUncheckedCreateInput = {
    fuel_id: number
    fuel_name: string
    category_id?: number | null
    Vehicle_Fuel_Relation?: Vehicle_Fuel_RelationUncheckedCreateNestedManyWithoutFuelInput
  }

  export type FuelUpdateInput = {
    fuel_id?: FloatFieldUpdateOperationsInput | number
    fuel_name?: StringFieldUpdateOperationsInput | string
    EmissionCategories?: EmissionCategoriesUpdateOneWithoutFuelNestedInput
    Vehicle_Fuel_Relation?: Vehicle_Fuel_RelationUpdateManyWithoutFuelNestedInput
  }

  export type FuelUncheckedUpdateInput = {
    fuel_id?: FloatFieldUpdateOperationsInput | number
    fuel_name?: StringFieldUpdateOperationsInput | string
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    Vehicle_Fuel_Relation?: Vehicle_Fuel_RelationUncheckedUpdateManyWithoutFuelNestedInput
  }

  export type FuelCreateManyInput = {
    fuel_id: number
    fuel_name: string
    category_id?: number | null
  }

  export type FuelUpdateManyMutationInput = {
    fuel_id?: FloatFieldUpdateOperationsInput | number
    fuel_name?: StringFieldUpdateOperationsInput | string
  }

  export type FuelUncheckedUpdateManyInput = {
    fuel_id?: FloatFieldUpdateOperationsInput | number
    fuel_name?: StringFieldUpdateOperationsInput | string
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TravelCreateInput = {
    travel_id: number
    travel_type: string
    travel_mileage: number
    Countries: CountriesCreateNestedOneWithoutTravelInput
    EmissionCategories: EmissionCategoriesCreateNestedOneWithoutTravelInput
    EmissionFactors: EmissionFactorsCreateNestedOneWithoutTravelInput
  }

  export type TravelUncheckedCreateInput = {
    travel_id: number
    travel_type: string
    travel_mileage: number
    country_id: number
    emission_id: number
    factor_id: number
  }

  export type TravelUpdateInput = {
    travel_id?: IntFieldUpdateOperationsInput | number
    travel_type?: StringFieldUpdateOperationsInput | string
    travel_mileage?: IntFieldUpdateOperationsInput | number
    Countries?: CountriesUpdateOneRequiredWithoutTravelNestedInput
    EmissionCategories?: EmissionCategoriesUpdateOneRequiredWithoutTravelNestedInput
    EmissionFactors?: EmissionFactorsUpdateOneRequiredWithoutTravelNestedInput
  }

  export type TravelUncheckedUpdateInput = {
    travel_id?: IntFieldUpdateOperationsInput | number
    travel_type?: StringFieldUpdateOperationsInput | string
    travel_mileage?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    emission_id?: IntFieldUpdateOperationsInput | number
    factor_id?: IntFieldUpdateOperationsInput | number
  }

  export type TravelCreateManyInput = {
    travel_id: number
    travel_type: string
    travel_mileage: number
    country_id: number
    emission_id: number
    factor_id: number
  }

  export type TravelUpdateManyMutationInput = {
    travel_id?: IntFieldUpdateOperationsInput | number
    travel_type?: StringFieldUpdateOperationsInput | string
    travel_mileage?: IntFieldUpdateOperationsInput | number
  }

  export type TravelUncheckedUpdateManyInput = {
    travel_id?: IntFieldUpdateOperationsInput | number
    travel_type?: StringFieldUpdateOperationsInput | string
    travel_mileage?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    emission_id?: IntFieldUpdateOperationsInput | number
    factor_id?: IntFieldUpdateOperationsInput | number
  }

  export type UsersCreateInput = {
    user_id: number
    user_name: string
    user_company: string
    user_email: string
    Calculations?: CalculationsCreateNestedManyWithoutUsersInput
    CompanyVehicles?: CompanyVehiclesCreateNestedManyWithoutUsersInput
    Emissions?: EmissionsCreateNestedManyWithoutUsersInput
    Countries: CountriesCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    user_id: number
    user_name: string
    user_company: string
    user_email: string
    country_id: number
    Calculations?: CalculationsUncheckedCreateNestedManyWithoutUsersInput
    CompanyVehicles?: CompanyVehiclesUncheckedCreateNestedManyWithoutUsersInput
    Emissions?: EmissionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_company?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    Calculations?: CalculationsUpdateManyWithoutUsersNestedInput
    CompanyVehicles?: CompanyVehiclesUpdateManyWithoutUsersNestedInput
    Emissions?: EmissionsUpdateManyWithoutUsersNestedInput
    Countries?: CountriesUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_company?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    country_id?: IntFieldUpdateOperationsInput | number
    Calculations?: CalculationsUncheckedUpdateManyWithoutUsersNestedInput
    CompanyVehicles?: CompanyVehiclesUncheckedUpdateManyWithoutUsersNestedInput
    Emissions?: EmissionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    user_id: number
    user_name: string
    user_company: string
    user_email: string
    country_id: number
  }

  export type UsersUpdateManyMutationInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_company?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_company?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    country_id?: IntFieldUpdateOperationsInput | number
  }

  export type Vehicle_Fuel_RelationCreateInput = {
    vehicle_fuel_relation_id: string
    CompanyVehicles: CompanyVehiclesCreateNestedOneWithoutVehicle_Fuel_RelationInput
    Fuel: FuelCreateNestedOneWithoutVehicle_Fuel_RelationInput
  }

  export type Vehicle_Fuel_RelationUncheckedCreateInput = {
    vehicle_id: number
    fuel_id: number
    vehicle_fuel_relation_id: string
  }

  export type Vehicle_Fuel_RelationUpdateInput = {
    vehicle_fuel_relation_id?: StringFieldUpdateOperationsInput | string
    CompanyVehicles?: CompanyVehiclesUpdateOneRequiredWithoutVehicle_Fuel_RelationNestedInput
    Fuel?: FuelUpdateOneRequiredWithoutVehicle_Fuel_RelationNestedInput
  }

  export type Vehicle_Fuel_RelationUncheckedUpdateInput = {
    vehicle_id?: IntFieldUpdateOperationsInput | number
    fuel_id?: FloatFieldUpdateOperationsInput | number
    vehicle_fuel_relation_id?: StringFieldUpdateOperationsInput | string
  }

  export type Vehicle_Fuel_RelationCreateManyInput = {
    vehicle_id: number
    fuel_id: number
    vehicle_fuel_relation_id: string
  }

  export type Vehicle_Fuel_RelationUpdateManyMutationInput = {
    vehicle_fuel_relation_id?: StringFieldUpdateOperationsInput | string
  }

  export type Vehicle_Fuel_RelationUncheckedUpdateManyInput = {
    vehicle_id?: IntFieldUpdateOperationsInput | number
    fuel_id?: FloatFieldUpdateOperationsInput | number
    vehicle_fuel_relation_id?: StringFieldUpdateOperationsInput | string
  }

  export type WaterCreateInput = {
    water_id?: number | null
    water_use: number
    Countries: CountriesCreateNestedOneWithoutWaterInput
    EmissionCategories: EmissionCategoriesCreateNestedOneWithoutWaterInput
    EmissionFactors: EmissionFactorsCreateNestedOneWithoutWaterInput
  }

  export type WaterUncheckedCreateInput = {
    water_id?: number | null
    water_use: number
    country_id: number
    emission_id: number
    factor_id: number
  }

  export type WaterUpdateInput = {
    water_id?: NullableIntFieldUpdateOperationsInput | number | null
    water_use?: IntFieldUpdateOperationsInput | number
    Countries?: CountriesUpdateOneRequiredWithoutWaterNestedInput
    EmissionCategories?: EmissionCategoriesUpdateOneRequiredWithoutWaterNestedInput
    EmissionFactors?: EmissionFactorsUpdateOneRequiredWithoutWaterNestedInput
  }

  export type WaterUncheckedUpdateInput = {
    water_id?: NullableIntFieldUpdateOperationsInput | number | null
    water_use?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    emission_id?: IntFieldUpdateOperationsInput | number
    factor_id?: IntFieldUpdateOperationsInput | number
  }

  export type WaterCreateManyInput = {
    water_id?: number | null
    water_use: number
    country_id: number
    emission_id: number
    factor_id: number
  }

  export type WaterUpdateManyMutationInput = {
    water_id?: NullableIntFieldUpdateOperationsInput | number | null
    water_use?: IntFieldUpdateOperationsInput | number
  }

  export type WaterUncheckedUpdateManyInput = {
    water_id?: NullableIntFieldUpdateOperationsInput | number | null
    water_use?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    emission_id?: IntFieldUpdateOperationsInput | number
    factor_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CountriesScalarRelationFilter = {
    is?: CountriesWhereInput
    isNot?: CountriesWhereInput
  }

  export type EmissionFactorsScalarRelationFilter = {
    is?: EmissionFactorsWhereInput
    isNot?: EmissionFactorsWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type CalculationsOrderByRelevanceInput = {
    fields: CalculationsOrderByRelevanceFieldEnum | CalculationsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CalculationsCountOrderByAggregateInput = {
    user_id?: SortOrder
    country_id?: SortOrder
    factor_id?: SortOrder
    calculation_id?: SortOrder
  }

  export type CalculationsAvgOrderByAggregateInput = {
    user_id?: SortOrder
    country_id?: SortOrder
    factor_id?: SortOrder
  }

  export type CalculationsMaxOrderByAggregateInput = {
    user_id?: SortOrder
    country_id?: SortOrder
    factor_id?: SortOrder
    calculation_id?: SortOrder
  }

  export type CalculationsMinOrderByAggregateInput = {
    user_id?: SortOrder
    country_id?: SortOrder
    factor_id?: SortOrder
    calculation_id?: SortOrder
  }

  export type CalculationsSumOrderByAggregateInput = {
    user_id?: SortOrder
    country_id?: SortOrder
    factor_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Vehicle_Fuel_RelationListRelationFilter = {
    every?: Vehicle_Fuel_RelationWhereInput
    some?: Vehicle_Fuel_RelationWhereInput
    none?: Vehicle_Fuel_RelationWhereInput
  }

  export type Vehicle_Fuel_RelationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyVehiclesOrderByRelevanceInput = {
    fields: CompanyVehiclesOrderByRelevanceFieldEnum | CompanyVehiclesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CompanyVehiclesCountOrderByAggregateInput = {
    vehicle_id?: SortOrder
    vehicle_type?: SortOrder
    vehicle_model?: SortOrder
    vehicle_mileage?: SortOrder
    user_id?: SortOrder
  }

  export type CompanyVehiclesAvgOrderByAggregateInput = {
    vehicle_id?: SortOrder
    vehicle_mileage?: SortOrder
    user_id?: SortOrder
  }

  export type CompanyVehiclesMaxOrderByAggregateInput = {
    vehicle_id?: SortOrder
    vehicle_type?: SortOrder
    vehicle_model?: SortOrder
    vehicle_mileage?: SortOrder
    user_id?: SortOrder
  }

  export type CompanyVehiclesMinOrderByAggregateInput = {
    vehicle_id?: SortOrder
    vehicle_type?: SortOrder
    vehicle_model?: SortOrder
    vehicle_mileage?: SortOrder
    user_id?: SortOrder
  }

  export type CompanyVehiclesSumOrderByAggregateInput = {
    vehicle_id?: SortOrder
    vehicle_mileage?: SortOrder
    user_id?: SortOrder
  }

  export type CalculationsListRelationFilter = {
    every?: CalculationsWhereInput
    some?: CalculationsWhereInput
    none?: CalculationsWhereInput
  }

  export type ElectricityListRelationFilter = {
    every?: ElectricityWhereInput
    some?: ElectricityWhereInput
    none?: ElectricityWhereInput
  }

  export type EmissionFactorsListRelationFilter = {
    every?: EmissionFactorsWhereInput
    some?: EmissionFactorsWhereInput
    none?: EmissionFactorsWhereInput
  }

  export type EmissionsListRelationFilter = {
    every?: EmissionsWhereInput
    some?: EmissionsWhereInput
    none?: EmissionsWhereInput
  }

  export type TravelListRelationFilter = {
    every?: TravelWhereInput
    some?: TravelWhereInput
    none?: TravelWhereInput
  }

  export type UsersListRelationFilter = {
    every?: UsersWhereInput
    some?: UsersWhereInput
    none?: UsersWhereInput
  }

  export type WaterListRelationFilter = {
    every?: WaterWhereInput
    some?: WaterWhereInput
    none?: WaterWhereInput
  }

  export type CalculationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ElectricityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmissionFactorsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmissionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TravelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WaterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountriesOrderByRelevanceInput = {
    fields: CountriesOrderByRelevanceFieldEnum | CountriesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CountriesCountOrderByAggregateInput = {
    country_id?: SortOrder
    country_name?: SortOrder
  }

  export type CountriesAvgOrderByAggregateInput = {
    country_id?: SortOrder
  }

  export type CountriesMaxOrderByAggregateInput = {
    country_id?: SortOrder
    country_name?: SortOrder
  }

  export type CountriesMinOrderByAggregateInput = {
    country_id?: SortOrder
    country_name?: SortOrder
  }

  export type CountriesSumOrderByAggregateInput = {
    country_id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EmissionCategoriesScalarRelationFilter = {
    is?: EmissionCategoriesWhereInput
    isNot?: EmissionCategoriesWhereInput
  }

  export type ElectricityOrderByRelevanceInput = {
    fields: ElectricityOrderByRelevanceFieldEnum | ElectricityOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ElectricityCountOrderByAggregateInput = {
    electricity_id?: SortOrder
    electricity_type?: SortOrder
    electricity_use?: SortOrder
    country_id?: SortOrder
    category_id?: SortOrder
    factor_id?: SortOrder
  }

  export type ElectricityAvgOrderByAggregateInput = {
    electricity_id?: SortOrder
    electricity_use?: SortOrder
    country_id?: SortOrder
    category_id?: SortOrder
    factor_id?: SortOrder
  }

  export type ElectricityMaxOrderByAggregateInput = {
    electricity_id?: SortOrder
    electricity_type?: SortOrder
    electricity_use?: SortOrder
    country_id?: SortOrder
    category_id?: SortOrder
    factor_id?: SortOrder
  }

  export type ElectricityMinOrderByAggregateInput = {
    electricity_id?: SortOrder
    electricity_type?: SortOrder
    electricity_use?: SortOrder
    country_id?: SortOrder
    category_id?: SortOrder
    factor_id?: SortOrder
  }

  export type ElectricitySumOrderByAggregateInput = {
    electricity_id?: SortOrder
    electricity_use?: SortOrder
    country_id?: SortOrder
    category_id?: SortOrder
    factor_id?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FuelListRelationFilter = {
    every?: FuelWhereInput
    some?: FuelWhereInput
    none?: FuelWhereInput
  }

  export type FuelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmissionCategoriesOrderByRelevanceInput = {
    fields: EmissionCategoriesOrderByRelevanceFieldEnum | EmissionCategoriesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EmissionCategoriesCountOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
  }

  export type EmissionCategoriesAvgOrderByAggregateInput = {
    category_id?: SortOrder
  }

  export type EmissionCategoriesMaxOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
  }

  export type EmissionCategoriesMinOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
  }

  export type EmissionCategoriesSumOrderByAggregateInput = {
    category_id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmissionFactorsOrderByRelevanceInput = {
    fields: EmissionFactorsOrderByRelevanceFieldEnum | EmissionFactorsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EmissionFactorsCountOrderByAggregateInput = {
    factor_id?: SortOrder
    category_id?: SortOrder
    subcategory?: SortOrder
    country_id?: SortOrder
    factor_num?: SortOrder
  }

  export type EmissionFactorsAvgOrderByAggregateInput = {
    factor_id?: SortOrder
    category_id?: SortOrder
    country_id?: SortOrder
    factor_num?: SortOrder
  }

  export type EmissionFactorsMaxOrderByAggregateInput = {
    factor_id?: SortOrder
    category_id?: SortOrder
    subcategory?: SortOrder
    country_id?: SortOrder
    factor_num?: SortOrder
  }

  export type EmissionFactorsMinOrderByAggregateInput = {
    factor_id?: SortOrder
    category_id?: SortOrder
    subcategory?: SortOrder
    country_id?: SortOrder
    factor_num?: SortOrder
  }

  export type EmissionFactorsSumOrderByAggregateInput = {
    factor_id?: SortOrder
    category_id?: SortOrder
    country_id?: SortOrder
    factor_num?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EmissionsCountOrderByAggregateInput = {
    emission_id?: SortOrder
    user_id?: SortOrder
    country_id?: SortOrder
    category_id?: SortOrder
    emission_value?: SortOrder
  }

  export type EmissionsAvgOrderByAggregateInput = {
    emission_id?: SortOrder
    user_id?: SortOrder
    country_id?: SortOrder
    category_id?: SortOrder
    emission_value?: SortOrder
  }

  export type EmissionsMaxOrderByAggregateInput = {
    emission_id?: SortOrder
    user_id?: SortOrder
    country_id?: SortOrder
    category_id?: SortOrder
    emission_value?: SortOrder
  }

  export type EmissionsMinOrderByAggregateInput = {
    emission_id?: SortOrder
    user_id?: SortOrder
    country_id?: SortOrder
    category_id?: SortOrder
    emission_value?: SortOrder
  }

  export type EmissionsSumOrderByAggregateInput = {
    emission_id?: SortOrder
    user_id?: SortOrder
    country_id?: SortOrder
    category_id?: SortOrder
    emission_value?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EmissionCategoriesNullableScalarRelationFilter = {
    is?: EmissionCategoriesWhereInput | null
    isNot?: EmissionCategoriesWhereInput | null
  }

  export type FuelOrderByRelevanceInput = {
    fields: FuelOrderByRelevanceFieldEnum | FuelOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FuelCountOrderByAggregateInput = {
    fuel_id?: SortOrder
    fuel_name?: SortOrder
    category_id?: SortOrder
  }

  export type FuelAvgOrderByAggregateInput = {
    fuel_id?: SortOrder
    category_id?: SortOrder
  }

  export type FuelMaxOrderByAggregateInput = {
    fuel_id?: SortOrder
    fuel_name?: SortOrder
    category_id?: SortOrder
  }

  export type FuelMinOrderByAggregateInput = {
    fuel_id?: SortOrder
    fuel_name?: SortOrder
    category_id?: SortOrder
  }

  export type FuelSumOrderByAggregateInput = {
    fuel_id?: SortOrder
    category_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type TravelOrderByRelevanceInput = {
    fields: TravelOrderByRelevanceFieldEnum | TravelOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TravelCountOrderByAggregateInput = {
    travel_id?: SortOrder
    travel_type?: SortOrder
    travel_mileage?: SortOrder
    country_id?: SortOrder
    emission_id?: SortOrder
    factor_id?: SortOrder
  }

  export type TravelAvgOrderByAggregateInput = {
    travel_id?: SortOrder
    travel_mileage?: SortOrder
    country_id?: SortOrder
    emission_id?: SortOrder
    factor_id?: SortOrder
  }

  export type TravelMaxOrderByAggregateInput = {
    travel_id?: SortOrder
    travel_type?: SortOrder
    travel_mileage?: SortOrder
    country_id?: SortOrder
    emission_id?: SortOrder
    factor_id?: SortOrder
  }

  export type TravelMinOrderByAggregateInput = {
    travel_id?: SortOrder
    travel_type?: SortOrder
    travel_mileage?: SortOrder
    country_id?: SortOrder
    emission_id?: SortOrder
    factor_id?: SortOrder
  }

  export type TravelSumOrderByAggregateInput = {
    travel_id?: SortOrder
    travel_mileage?: SortOrder
    country_id?: SortOrder
    emission_id?: SortOrder
    factor_id?: SortOrder
  }

  export type CompanyVehiclesListRelationFilter = {
    every?: CompanyVehiclesWhereInput
    some?: CompanyVehiclesWhereInput
    none?: CompanyVehiclesWhereInput
  }

  export type CompanyVehiclesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    user_company?: SortOrder
    user_email?: SortOrder
    country_id?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    user_id?: SortOrder
    country_id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    user_company?: SortOrder
    user_email?: SortOrder
    country_id?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    user_company?: SortOrder
    user_email?: SortOrder
    country_id?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    user_id?: SortOrder
    country_id?: SortOrder
  }

  export type CompanyVehiclesScalarRelationFilter = {
    is?: CompanyVehiclesWhereInput
    isNot?: CompanyVehiclesWhereInput
  }

  export type FuelScalarRelationFilter = {
    is?: FuelWhereInput
    isNot?: FuelWhereInput
  }

  export type Vehicle_Fuel_RelationOrderByRelevanceInput = {
    fields: Vehicle_Fuel_RelationOrderByRelevanceFieldEnum | Vehicle_Fuel_RelationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Vehicle_Fuel_RelationCountOrderByAggregateInput = {
    vehicle_id?: SortOrder
    fuel_id?: SortOrder
    vehicle_fuel_relation_id?: SortOrder
  }

  export type Vehicle_Fuel_RelationAvgOrderByAggregateInput = {
    vehicle_id?: SortOrder
    fuel_id?: SortOrder
  }

  export type Vehicle_Fuel_RelationMaxOrderByAggregateInput = {
    vehicle_id?: SortOrder
    fuel_id?: SortOrder
    vehicle_fuel_relation_id?: SortOrder
  }

  export type Vehicle_Fuel_RelationMinOrderByAggregateInput = {
    vehicle_id?: SortOrder
    fuel_id?: SortOrder
    vehicle_fuel_relation_id?: SortOrder
  }

  export type Vehicle_Fuel_RelationSumOrderByAggregateInput = {
    vehicle_id?: SortOrder
    fuel_id?: SortOrder
  }

  export type WaterCountOrderByAggregateInput = {
    water_id?: SortOrder
    water_use?: SortOrder
    country_id?: SortOrder
    emission_id?: SortOrder
    factor_id?: SortOrder
  }

  export type WaterAvgOrderByAggregateInput = {
    water_id?: SortOrder
    water_use?: SortOrder
    country_id?: SortOrder
    emission_id?: SortOrder
    factor_id?: SortOrder
  }

  export type WaterMaxOrderByAggregateInput = {
    water_id?: SortOrder
    water_use?: SortOrder
    country_id?: SortOrder
    emission_id?: SortOrder
    factor_id?: SortOrder
  }

  export type WaterMinOrderByAggregateInput = {
    water_id?: SortOrder
    water_use?: SortOrder
    country_id?: SortOrder
    emission_id?: SortOrder
    factor_id?: SortOrder
  }

  export type WaterSumOrderByAggregateInput = {
    water_id?: SortOrder
    water_use?: SortOrder
    country_id?: SortOrder
    emission_id?: SortOrder
    factor_id?: SortOrder
  }

  export type CountriesCreateNestedOneWithoutCalculationsInput = {
    create?: XOR<CountriesCreateWithoutCalculationsInput, CountriesUncheckedCreateWithoutCalculationsInput>
    connectOrCreate?: CountriesCreateOrConnectWithoutCalculationsInput
    connect?: CountriesWhereUniqueInput
  }

  export type EmissionFactorsCreateNestedOneWithoutCalculationsInput = {
    create?: XOR<EmissionFactorsCreateWithoutCalculationsInput, EmissionFactorsUncheckedCreateWithoutCalculationsInput>
    connectOrCreate?: EmissionFactorsCreateOrConnectWithoutCalculationsInput
    connect?: EmissionFactorsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutCalculationsInput = {
    create?: XOR<UsersCreateWithoutCalculationsInput, UsersUncheckedCreateWithoutCalculationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCalculationsInput
    connect?: UsersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CountriesUpdateOneRequiredWithoutCalculationsNestedInput = {
    create?: XOR<CountriesCreateWithoutCalculationsInput, CountriesUncheckedCreateWithoutCalculationsInput>
    connectOrCreate?: CountriesCreateOrConnectWithoutCalculationsInput
    upsert?: CountriesUpsertWithoutCalculationsInput
    connect?: CountriesWhereUniqueInput
    update?: XOR<XOR<CountriesUpdateToOneWithWhereWithoutCalculationsInput, CountriesUpdateWithoutCalculationsInput>, CountriesUncheckedUpdateWithoutCalculationsInput>
  }

  export type EmissionFactorsUpdateOneRequiredWithoutCalculationsNestedInput = {
    create?: XOR<EmissionFactorsCreateWithoutCalculationsInput, EmissionFactorsUncheckedCreateWithoutCalculationsInput>
    connectOrCreate?: EmissionFactorsCreateOrConnectWithoutCalculationsInput
    upsert?: EmissionFactorsUpsertWithoutCalculationsInput
    connect?: EmissionFactorsWhereUniqueInput
    update?: XOR<XOR<EmissionFactorsUpdateToOneWithWhereWithoutCalculationsInput, EmissionFactorsUpdateWithoutCalculationsInput>, EmissionFactorsUncheckedUpdateWithoutCalculationsInput>
  }

  export type UsersUpdateOneRequiredWithoutCalculationsNestedInput = {
    create?: XOR<UsersCreateWithoutCalculationsInput, UsersUncheckedCreateWithoutCalculationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCalculationsInput
    upsert?: UsersUpsertWithoutCalculationsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCalculationsInput, UsersUpdateWithoutCalculationsInput>, UsersUncheckedUpdateWithoutCalculationsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsersCreateNestedOneWithoutCompanyVehiclesInput = {
    create?: XOR<UsersCreateWithoutCompanyVehiclesInput, UsersUncheckedCreateWithoutCompanyVehiclesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCompanyVehiclesInput
    connect?: UsersWhereUniqueInput
  }

  export type Vehicle_Fuel_RelationCreateNestedManyWithoutCompanyVehiclesInput = {
    create?: XOR<Vehicle_Fuel_RelationCreateWithoutCompanyVehiclesInput, Vehicle_Fuel_RelationUncheckedCreateWithoutCompanyVehiclesInput> | Vehicle_Fuel_RelationCreateWithoutCompanyVehiclesInput[] | Vehicle_Fuel_RelationUncheckedCreateWithoutCompanyVehiclesInput[]
    connectOrCreate?: Vehicle_Fuel_RelationCreateOrConnectWithoutCompanyVehiclesInput | Vehicle_Fuel_RelationCreateOrConnectWithoutCompanyVehiclesInput[]
    createMany?: Vehicle_Fuel_RelationCreateManyCompanyVehiclesInputEnvelope
    connect?: Vehicle_Fuel_RelationWhereUniqueInput | Vehicle_Fuel_RelationWhereUniqueInput[]
  }

  export type Vehicle_Fuel_RelationUncheckedCreateNestedManyWithoutCompanyVehiclesInput = {
    create?: XOR<Vehicle_Fuel_RelationCreateWithoutCompanyVehiclesInput, Vehicle_Fuel_RelationUncheckedCreateWithoutCompanyVehiclesInput> | Vehicle_Fuel_RelationCreateWithoutCompanyVehiclesInput[] | Vehicle_Fuel_RelationUncheckedCreateWithoutCompanyVehiclesInput[]
    connectOrCreate?: Vehicle_Fuel_RelationCreateOrConnectWithoutCompanyVehiclesInput | Vehicle_Fuel_RelationCreateOrConnectWithoutCompanyVehiclesInput[]
    createMany?: Vehicle_Fuel_RelationCreateManyCompanyVehiclesInputEnvelope
    connect?: Vehicle_Fuel_RelationWhereUniqueInput | Vehicle_Fuel_RelationWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutCompanyVehiclesNestedInput = {
    create?: XOR<UsersCreateWithoutCompanyVehiclesInput, UsersUncheckedCreateWithoutCompanyVehiclesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCompanyVehiclesInput
    upsert?: UsersUpsertWithoutCompanyVehiclesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCompanyVehiclesInput, UsersUpdateWithoutCompanyVehiclesInput>, UsersUncheckedUpdateWithoutCompanyVehiclesInput>
  }

  export type Vehicle_Fuel_RelationUpdateManyWithoutCompanyVehiclesNestedInput = {
    create?: XOR<Vehicle_Fuel_RelationCreateWithoutCompanyVehiclesInput, Vehicle_Fuel_RelationUncheckedCreateWithoutCompanyVehiclesInput> | Vehicle_Fuel_RelationCreateWithoutCompanyVehiclesInput[] | Vehicle_Fuel_RelationUncheckedCreateWithoutCompanyVehiclesInput[]
    connectOrCreate?: Vehicle_Fuel_RelationCreateOrConnectWithoutCompanyVehiclesInput | Vehicle_Fuel_RelationCreateOrConnectWithoutCompanyVehiclesInput[]
    upsert?: Vehicle_Fuel_RelationUpsertWithWhereUniqueWithoutCompanyVehiclesInput | Vehicle_Fuel_RelationUpsertWithWhereUniqueWithoutCompanyVehiclesInput[]
    createMany?: Vehicle_Fuel_RelationCreateManyCompanyVehiclesInputEnvelope
    set?: Vehicle_Fuel_RelationWhereUniqueInput | Vehicle_Fuel_RelationWhereUniqueInput[]
    disconnect?: Vehicle_Fuel_RelationWhereUniqueInput | Vehicle_Fuel_RelationWhereUniqueInput[]
    delete?: Vehicle_Fuel_RelationWhereUniqueInput | Vehicle_Fuel_RelationWhereUniqueInput[]
    connect?: Vehicle_Fuel_RelationWhereUniqueInput | Vehicle_Fuel_RelationWhereUniqueInput[]
    update?: Vehicle_Fuel_RelationUpdateWithWhereUniqueWithoutCompanyVehiclesInput | Vehicle_Fuel_RelationUpdateWithWhereUniqueWithoutCompanyVehiclesInput[]
    updateMany?: Vehicle_Fuel_RelationUpdateManyWithWhereWithoutCompanyVehiclesInput | Vehicle_Fuel_RelationUpdateManyWithWhereWithoutCompanyVehiclesInput[]
    deleteMany?: Vehicle_Fuel_RelationScalarWhereInput | Vehicle_Fuel_RelationScalarWhereInput[]
  }

  export type Vehicle_Fuel_RelationUncheckedUpdateManyWithoutCompanyVehiclesNestedInput = {
    create?: XOR<Vehicle_Fuel_RelationCreateWithoutCompanyVehiclesInput, Vehicle_Fuel_RelationUncheckedCreateWithoutCompanyVehiclesInput> | Vehicle_Fuel_RelationCreateWithoutCompanyVehiclesInput[] | Vehicle_Fuel_RelationUncheckedCreateWithoutCompanyVehiclesInput[]
    connectOrCreate?: Vehicle_Fuel_RelationCreateOrConnectWithoutCompanyVehiclesInput | Vehicle_Fuel_RelationCreateOrConnectWithoutCompanyVehiclesInput[]
    upsert?: Vehicle_Fuel_RelationUpsertWithWhereUniqueWithoutCompanyVehiclesInput | Vehicle_Fuel_RelationUpsertWithWhereUniqueWithoutCompanyVehiclesInput[]
    createMany?: Vehicle_Fuel_RelationCreateManyCompanyVehiclesInputEnvelope
    set?: Vehicle_Fuel_RelationWhereUniqueInput | Vehicle_Fuel_RelationWhereUniqueInput[]
    disconnect?: Vehicle_Fuel_RelationWhereUniqueInput | Vehicle_Fuel_RelationWhereUniqueInput[]
    delete?: Vehicle_Fuel_RelationWhereUniqueInput | Vehicle_Fuel_RelationWhereUniqueInput[]
    connect?: Vehicle_Fuel_RelationWhereUniqueInput | Vehicle_Fuel_RelationWhereUniqueInput[]
    update?: Vehicle_Fuel_RelationUpdateWithWhereUniqueWithoutCompanyVehiclesInput | Vehicle_Fuel_RelationUpdateWithWhereUniqueWithoutCompanyVehiclesInput[]
    updateMany?: Vehicle_Fuel_RelationUpdateManyWithWhereWithoutCompanyVehiclesInput | Vehicle_Fuel_RelationUpdateManyWithWhereWithoutCompanyVehiclesInput[]
    deleteMany?: Vehicle_Fuel_RelationScalarWhereInput | Vehicle_Fuel_RelationScalarWhereInput[]
  }

  export type CalculationsCreateNestedManyWithoutCountriesInput = {
    create?: XOR<CalculationsCreateWithoutCountriesInput, CalculationsUncheckedCreateWithoutCountriesInput> | CalculationsCreateWithoutCountriesInput[] | CalculationsUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: CalculationsCreateOrConnectWithoutCountriesInput | CalculationsCreateOrConnectWithoutCountriesInput[]
    createMany?: CalculationsCreateManyCountriesInputEnvelope
    connect?: CalculationsWhereUniqueInput | CalculationsWhereUniqueInput[]
  }

  export type ElectricityCreateNestedManyWithoutCountriesInput = {
    create?: XOR<ElectricityCreateWithoutCountriesInput, ElectricityUncheckedCreateWithoutCountriesInput> | ElectricityCreateWithoutCountriesInput[] | ElectricityUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: ElectricityCreateOrConnectWithoutCountriesInput | ElectricityCreateOrConnectWithoutCountriesInput[]
    createMany?: ElectricityCreateManyCountriesInputEnvelope
    connect?: ElectricityWhereUniqueInput | ElectricityWhereUniqueInput[]
  }

  export type EmissionFactorsCreateNestedManyWithoutCountriesInput = {
    create?: XOR<EmissionFactorsCreateWithoutCountriesInput, EmissionFactorsUncheckedCreateWithoutCountriesInput> | EmissionFactorsCreateWithoutCountriesInput[] | EmissionFactorsUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: EmissionFactorsCreateOrConnectWithoutCountriesInput | EmissionFactorsCreateOrConnectWithoutCountriesInput[]
    createMany?: EmissionFactorsCreateManyCountriesInputEnvelope
    connect?: EmissionFactorsWhereUniqueInput | EmissionFactorsWhereUniqueInput[]
  }

  export type EmissionsCreateNestedManyWithoutCountriesInput = {
    create?: XOR<EmissionsCreateWithoutCountriesInput, EmissionsUncheckedCreateWithoutCountriesInput> | EmissionsCreateWithoutCountriesInput[] | EmissionsUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: EmissionsCreateOrConnectWithoutCountriesInput | EmissionsCreateOrConnectWithoutCountriesInput[]
    createMany?: EmissionsCreateManyCountriesInputEnvelope
    connect?: EmissionsWhereUniqueInput | EmissionsWhereUniqueInput[]
  }

  export type TravelCreateNestedManyWithoutCountriesInput = {
    create?: XOR<TravelCreateWithoutCountriesInput, TravelUncheckedCreateWithoutCountriesInput> | TravelCreateWithoutCountriesInput[] | TravelUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: TravelCreateOrConnectWithoutCountriesInput | TravelCreateOrConnectWithoutCountriesInput[]
    createMany?: TravelCreateManyCountriesInputEnvelope
    connect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
  }

  export type UsersCreateNestedManyWithoutCountriesInput = {
    create?: XOR<UsersCreateWithoutCountriesInput, UsersUncheckedCreateWithoutCountriesInput> | UsersCreateWithoutCountriesInput[] | UsersUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutCountriesInput | UsersCreateOrConnectWithoutCountriesInput[]
    createMany?: UsersCreateManyCountriesInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type WaterCreateNestedManyWithoutCountriesInput = {
    create?: XOR<WaterCreateWithoutCountriesInput, WaterUncheckedCreateWithoutCountriesInput> | WaterCreateWithoutCountriesInput[] | WaterUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: WaterCreateOrConnectWithoutCountriesInput | WaterCreateOrConnectWithoutCountriesInput[]
    createMany?: WaterCreateManyCountriesInputEnvelope
    connect?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
  }

  export type CalculationsUncheckedCreateNestedManyWithoutCountriesInput = {
    create?: XOR<CalculationsCreateWithoutCountriesInput, CalculationsUncheckedCreateWithoutCountriesInput> | CalculationsCreateWithoutCountriesInput[] | CalculationsUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: CalculationsCreateOrConnectWithoutCountriesInput | CalculationsCreateOrConnectWithoutCountriesInput[]
    createMany?: CalculationsCreateManyCountriesInputEnvelope
    connect?: CalculationsWhereUniqueInput | CalculationsWhereUniqueInput[]
  }

  export type ElectricityUncheckedCreateNestedManyWithoutCountriesInput = {
    create?: XOR<ElectricityCreateWithoutCountriesInput, ElectricityUncheckedCreateWithoutCountriesInput> | ElectricityCreateWithoutCountriesInput[] | ElectricityUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: ElectricityCreateOrConnectWithoutCountriesInput | ElectricityCreateOrConnectWithoutCountriesInput[]
    createMany?: ElectricityCreateManyCountriesInputEnvelope
    connect?: ElectricityWhereUniqueInput | ElectricityWhereUniqueInput[]
  }

  export type EmissionFactorsUncheckedCreateNestedManyWithoutCountriesInput = {
    create?: XOR<EmissionFactorsCreateWithoutCountriesInput, EmissionFactorsUncheckedCreateWithoutCountriesInput> | EmissionFactorsCreateWithoutCountriesInput[] | EmissionFactorsUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: EmissionFactorsCreateOrConnectWithoutCountriesInput | EmissionFactorsCreateOrConnectWithoutCountriesInput[]
    createMany?: EmissionFactorsCreateManyCountriesInputEnvelope
    connect?: EmissionFactorsWhereUniqueInput | EmissionFactorsWhereUniqueInput[]
  }

  export type EmissionsUncheckedCreateNestedManyWithoutCountriesInput = {
    create?: XOR<EmissionsCreateWithoutCountriesInput, EmissionsUncheckedCreateWithoutCountriesInput> | EmissionsCreateWithoutCountriesInput[] | EmissionsUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: EmissionsCreateOrConnectWithoutCountriesInput | EmissionsCreateOrConnectWithoutCountriesInput[]
    createMany?: EmissionsCreateManyCountriesInputEnvelope
    connect?: EmissionsWhereUniqueInput | EmissionsWhereUniqueInput[]
  }

  export type TravelUncheckedCreateNestedManyWithoutCountriesInput = {
    create?: XOR<TravelCreateWithoutCountriesInput, TravelUncheckedCreateWithoutCountriesInput> | TravelCreateWithoutCountriesInput[] | TravelUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: TravelCreateOrConnectWithoutCountriesInput | TravelCreateOrConnectWithoutCountriesInput[]
    createMany?: TravelCreateManyCountriesInputEnvelope
    connect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutCountriesInput = {
    create?: XOR<UsersCreateWithoutCountriesInput, UsersUncheckedCreateWithoutCountriesInput> | UsersCreateWithoutCountriesInput[] | UsersUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutCountriesInput | UsersCreateOrConnectWithoutCountriesInput[]
    createMany?: UsersCreateManyCountriesInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type WaterUncheckedCreateNestedManyWithoutCountriesInput = {
    create?: XOR<WaterCreateWithoutCountriesInput, WaterUncheckedCreateWithoutCountriesInput> | WaterCreateWithoutCountriesInput[] | WaterUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: WaterCreateOrConnectWithoutCountriesInput | WaterCreateOrConnectWithoutCountriesInput[]
    createMany?: WaterCreateManyCountriesInputEnvelope
    connect?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
  }

  export type CalculationsUpdateManyWithoutCountriesNestedInput = {
    create?: XOR<CalculationsCreateWithoutCountriesInput, CalculationsUncheckedCreateWithoutCountriesInput> | CalculationsCreateWithoutCountriesInput[] | CalculationsUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: CalculationsCreateOrConnectWithoutCountriesInput | CalculationsCreateOrConnectWithoutCountriesInput[]
    upsert?: CalculationsUpsertWithWhereUniqueWithoutCountriesInput | CalculationsUpsertWithWhereUniqueWithoutCountriesInput[]
    createMany?: CalculationsCreateManyCountriesInputEnvelope
    set?: CalculationsWhereUniqueInput | CalculationsWhereUniqueInput[]
    disconnect?: CalculationsWhereUniqueInput | CalculationsWhereUniqueInput[]
    delete?: CalculationsWhereUniqueInput | CalculationsWhereUniqueInput[]
    connect?: CalculationsWhereUniqueInput | CalculationsWhereUniqueInput[]
    update?: CalculationsUpdateWithWhereUniqueWithoutCountriesInput | CalculationsUpdateWithWhereUniqueWithoutCountriesInput[]
    updateMany?: CalculationsUpdateManyWithWhereWithoutCountriesInput | CalculationsUpdateManyWithWhereWithoutCountriesInput[]
    deleteMany?: CalculationsScalarWhereInput | CalculationsScalarWhereInput[]
  }

  export type ElectricityUpdateManyWithoutCountriesNestedInput = {
    create?: XOR<ElectricityCreateWithoutCountriesInput, ElectricityUncheckedCreateWithoutCountriesInput> | ElectricityCreateWithoutCountriesInput[] | ElectricityUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: ElectricityCreateOrConnectWithoutCountriesInput | ElectricityCreateOrConnectWithoutCountriesInput[]
    upsert?: ElectricityUpsertWithWhereUniqueWithoutCountriesInput | ElectricityUpsertWithWhereUniqueWithoutCountriesInput[]
    createMany?: ElectricityCreateManyCountriesInputEnvelope
    set?: ElectricityWhereUniqueInput | ElectricityWhereUniqueInput[]
    disconnect?: ElectricityWhereUniqueInput | ElectricityWhereUniqueInput[]
    delete?: ElectricityWhereUniqueInput | ElectricityWhereUniqueInput[]
    connect?: ElectricityWhereUniqueInput | ElectricityWhereUniqueInput[]
    update?: ElectricityUpdateWithWhereUniqueWithoutCountriesInput | ElectricityUpdateWithWhereUniqueWithoutCountriesInput[]
    updateMany?: ElectricityUpdateManyWithWhereWithoutCountriesInput | ElectricityUpdateManyWithWhereWithoutCountriesInput[]
    deleteMany?: ElectricityScalarWhereInput | ElectricityScalarWhereInput[]
  }

  export type EmissionFactorsUpdateManyWithoutCountriesNestedInput = {
    create?: XOR<EmissionFactorsCreateWithoutCountriesInput, EmissionFactorsUncheckedCreateWithoutCountriesInput> | EmissionFactorsCreateWithoutCountriesInput[] | EmissionFactorsUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: EmissionFactorsCreateOrConnectWithoutCountriesInput | EmissionFactorsCreateOrConnectWithoutCountriesInput[]
    upsert?: EmissionFactorsUpsertWithWhereUniqueWithoutCountriesInput | EmissionFactorsUpsertWithWhereUniqueWithoutCountriesInput[]
    createMany?: EmissionFactorsCreateManyCountriesInputEnvelope
    set?: EmissionFactorsWhereUniqueInput | EmissionFactorsWhereUniqueInput[]
    disconnect?: EmissionFactorsWhereUniqueInput | EmissionFactorsWhereUniqueInput[]
    delete?: EmissionFactorsWhereUniqueInput | EmissionFactorsWhereUniqueInput[]
    connect?: EmissionFactorsWhereUniqueInput | EmissionFactorsWhereUniqueInput[]
    update?: EmissionFactorsUpdateWithWhereUniqueWithoutCountriesInput | EmissionFactorsUpdateWithWhereUniqueWithoutCountriesInput[]
    updateMany?: EmissionFactorsUpdateManyWithWhereWithoutCountriesInput | EmissionFactorsUpdateManyWithWhereWithoutCountriesInput[]
    deleteMany?: EmissionFactorsScalarWhereInput | EmissionFactorsScalarWhereInput[]
  }

  export type EmissionsUpdateManyWithoutCountriesNestedInput = {
    create?: XOR<EmissionsCreateWithoutCountriesInput, EmissionsUncheckedCreateWithoutCountriesInput> | EmissionsCreateWithoutCountriesInput[] | EmissionsUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: EmissionsCreateOrConnectWithoutCountriesInput | EmissionsCreateOrConnectWithoutCountriesInput[]
    upsert?: EmissionsUpsertWithWhereUniqueWithoutCountriesInput | EmissionsUpsertWithWhereUniqueWithoutCountriesInput[]
    createMany?: EmissionsCreateManyCountriesInputEnvelope
    set?: EmissionsWhereUniqueInput | EmissionsWhereUniqueInput[]
    disconnect?: EmissionsWhereUniqueInput | EmissionsWhereUniqueInput[]
    delete?: EmissionsWhereUniqueInput | EmissionsWhereUniqueInput[]
    connect?: EmissionsWhereUniqueInput | EmissionsWhereUniqueInput[]
    update?: EmissionsUpdateWithWhereUniqueWithoutCountriesInput | EmissionsUpdateWithWhereUniqueWithoutCountriesInput[]
    updateMany?: EmissionsUpdateManyWithWhereWithoutCountriesInput | EmissionsUpdateManyWithWhereWithoutCountriesInput[]
    deleteMany?: EmissionsScalarWhereInput | EmissionsScalarWhereInput[]
  }

  export type TravelUpdateManyWithoutCountriesNestedInput = {
    create?: XOR<TravelCreateWithoutCountriesInput, TravelUncheckedCreateWithoutCountriesInput> | TravelCreateWithoutCountriesInput[] | TravelUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: TravelCreateOrConnectWithoutCountriesInput | TravelCreateOrConnectWithoutCountriesInput[]
    upsert?: TravelUpsertWithWhereUniqueWithoutCountriesInput | TravelUpsertWithWhereUniqueWithoutCountriesInput[]
    createMany?: TravelCreateManyCountriesInputEnvelope
    set?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    disconnect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    delete?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    connect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    update?: TravelUpdateWithWhereUniqueWithoutCountriesInput | TravelUpdateWithWhereUniqueWithoutCountriesInput[]
    updateMany?: TravelUpdateManyWithWhereWithoutCountriesInput | TravelUpdateManyWithWhereWithoutCountriesInput[]
    deleteMany?: TravelScalarWhereInput | TravelScalarWhereInput[]
  }

  export type UsersUpdateManyWithoutCountriesNestedInput = {
    create?: XOR<UsersCreateWithoutCountriesInput, UsersUncheckedCreateWithoutCountriesInput> | UsersCreateWithoutCountriesInput[] | UsersUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutCountriesInput | UsersCreateOrConnectWithoutCountriesInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutCountriesInput | UsersUpsertWithWhereUniqueWithoutCountriesInput[]
    createMany?: UsersCreateManyCountriesInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutCountriesInput | UsersUpdateWithWhereUniqueWithoutCountriesInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutCountriesInput | UsersUpdateManyWithWhereWithoutCountriesInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type WaterUpdateManyWithoutCountriesNestedInput = {
    create?: XOR<WaterCreateWithoutCountriesInput, WaterUncheckedCreateWithoutCountriesInput> | WaterCreateWithoutCountriesInput[] | WaterUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: WaterCreateOrConnectWithoutCountriesInput | WaterCreateOrConnectWithoutCountriesInput[]
    upsert?: WaterUpsertWithWhereUniqueWithoutCountriesInput | WaterUpsertWithWhereUniqueWithoutCountriesInput[]
    createMany?: WaterCreateManyCountriesInputEnvelope
    set?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
    disconnect?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
    delete?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
    connect?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
    update?: WaterUpdateWithWhereUniqueWithoutCountriesInput | WaterUpdateWithWhereUniqueWithoutCountriesInput[]
    updateMany?: WaterUpdateManyWithWhereWithoutCountriesInput | WaterUpdateManyWithWhereWithoutCountriesInput[]
    deleteMany?: WaterScalarWhereInput | WaterScalarWhereInput[]
  }

  export type CalculationsUncheckedUpdateManyWithoutCountriesNestedInput = {
    create?: XOR<CalculationsCreateWithoutCountriesInput, CalculationsUncheckedCreateWithoutCountriesInput> | CalculationsCreateWithoutCountriesInput[] | CalculationsUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: CalculationsCreateOrConnectWithoutCountriesInput | CalculationsCreateOrConnectWithoutCountriesInput[]
    upsert?: CalculationsUpsertWithWhereUniqueWithoutCountriesInput | CalculationsUpsertWithWhereUniqueWithoutCountriesInput[]
    createMany?: CalculationsCreateManyCountriesInputEnvelope
    set?: CalculationsWhereUniqueInput | CalculationsWhereUniqueInput[]
    disconnect?: CalculationsWhereUniqueInput | CalculationsWhereUniqueInput[]
    delete?: CalculationsWhereUniqueInput | CalculationsWhereUniqueInput[]
    connect?: CalculationsWhereUniqueInput | CalculationsWhereUniqueInput[]
    update?: CalculationsUpdateWithWhereUniqueWithoutCountriesInput | CalculationsUpdateWithWhereUniqueWithoutCountriesInput[]
    updateMany?: CalculationsUpdateManyWithWhereWithoutCountriesInput | CalculationsUpdateManyWithWhereWithoutCountriesInput[]
    deleteMany?: CalculationsScalarWhereInput | CalculationsScalarWhereInput[]
  }

  export type ElectricityUncheckedUpdateManyWithoutCountriesNestedInput = {
    create?: XOR<ElectricityCreateWithoutCountriesInput, ElectricityUncheckedCreateWithoutCountriesInput> | ElectricityCreateWithoutCountriesInput[] | ElectricityUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: ElectricityCreateOrConnectWithoutCountriesInput | ElectricityCreateOrConnectWithoutCountriesInput[]
    upsert?: ElectricityUpsertWithWhereUniqueWithoutCountriesInput | ElectricityUpsertWithWhereUniqueWithoutCountriesInput[]
    createMany?: ElectricityCreateManyCountriesInputEnvelope
    set?: ElectricityWhereUniqueInput | ElectricityWhereUniqueInput[]
    disconnect?: ElectricityWhereUniqueInput | ElectricityWhereUniqueInput[]
    delete?: ElectricityWhereUniqueInput | ElectricityWhereUniqueInput[]
    connect?: ElectricityWhereUniqueInput | ElectricityWhereUniqueInput[]
    update?: ElectricityUpdateWithWhereUniqueWithoutCountriesInput | ElectricityUpdateWithWhereUniqueWithoutCountriesInput[]
    updateMany?: ElectricityUpdateManyWithWhereWithoutCountriesInput | ElectricityUpdateManyWithWhereWithoutCountriesInput[]
    deleteMany?: ElectricityScalarWhereInput | ElectricityScalarWhereInput[]
  }

  export type EmissionFactorsUncheckedUpdateManyWithoutCountriesNestedInput = {
    create?: XOR<EmissionFactorsCreateWithoutCountriesInput, EmissionFactorsUncheckedCreateWithoutCountriesInput> | EmissionFactorsCreateWithoutCountriesInput[] | EmissionFactorsUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: EmissionFactorsCreateOrConnectWithoutCountriesInput | EmissionFactorsCreateOrConnectWithoutCountriesInput[]
    upsert?: EmissionFactorsUpsertWithWhereUniqueWithoutCountriesInput | EmissionFactorsUpsertWithWhereUniqueWithoutCountriesInput[]
    createMany?: EmissionFactorsCreateManyCountriesInputEnvelope
    set?: EmissionFactorsWhereUniqueInput | EmissionFactorsWhereUniqueInput[]
    disconnect?: EmissionFactorsWhereUniqueInput | EmissionFactorsWhereUniqueInput[]
    delete?: EmissionFactorsWhereUniqueInput | EmissionFactorsWhereUniqueInput[]
    connect?: EmissionFactorsWhereUniqueInput | EmissionFactorsWhereUniqueInput[]
    update?: EmissionFactorsUpdateWithWhereUniqueWithoutCountriesInput | EmissionFactorsUpdateWithWhereUniqueWithoutCountriesInput[]
    updateMany?: EmissionFactorsUpdateManyWithWhereWithoutCountriesInput | EmissionFactorsUpdateManyWithWhereWithoutCountriesInput[]
    deleteMany?: EmissionFactorsScalarWhereInput | EmissionFactorsScalarWhereInput[]
  }

  export type EmissionsUncheckedUpdateManyWithoutCountriesNestedInput = {
    create?: XOR<EmissionsCreateWithoutCountriesInput, EmissionsUncheckedCreateWithoutCountriesInput> | EmissionsCreateWithoutCountriesInput[] | EmissionsUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: EmissionsCreateOrConnectWithoutCountriesInput | EmissionsCreateOrConnectWithoutCountriesInput[]
    upsert?: EmissionsUpsertWithWhereUniqueWithoutCountriesInput | EmissionsUpsertWithWhereUniqueWithoutCountriesInput[]
    createMany?: EmissionsCreateManyCountriesInputEnvelope
    set?: EmissionsWhereUniqueInput | EmissionsWhereUniqueInput[]
    disconnect?: EmissionsWhereUniqueInput | EmissionsWhereUniqueInput[]
    delete?: EmissionsWhereUniqueInput | EmissionsWhereUniqueInput[]
    connect?: EmissionsWhereUniqueInput | EmissionsWhereUniqueInput[]
    update?: EmissionsUpdateWithWhereUniqueWithoutCountriesInput | EmissionsUpdateWithWhereUniqueWithoutCountriesInput[]
    updateMany?: EmissionsUpdateManyWithWhereWithoutCountriesInput | EmissionsUpdateManyWithWhereWithoutCountriesInput[]
    deleteMany?: EmissionsScalarWhereInput | EmissionsScalarWhereInput[]
  }

  export type TravelUncheckedUpdateManyWithoutCountriesNestedInput = {
    create?: XOR<TravelCreateWithoutCountriesInput, TravelUncheckedCreateWithoutCountriesInput> | TravelCreateWithoutCountriesInput[] | TravelUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: TravelCreateOrConnectWithoutCountriesInput | TravelCreateOrConnectWithoutCountriesInput[]
    upsert?: TravelUpsertWithWhereUniqueWithoutCountriesInput | TravelUpsertWithWhereUniqueWithoutCountriesInput[]
    createMany?: TravelCreateManyCountriesInputEnvelope
    set?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    disconnect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    delete?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    connect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    update?: TravelUpdateWithWhereUniqueWithoutCountriesInput | TravelUpdateWithWhereUniqueWithoutCountriesInput[]
    updateMany?: TravelUpdateManyWithWhereWithoutCountriesInput | TravelUpdateManyWithWhereWithoutCountriesInput[]
    deleteMany?: TravelScalarWhereInput | TravelScalarWhereInput[]
  }

  export type UsersUncheckedUpdateManyWithoutCountriesNestedInput = {
    create?: XOR<UsersCreateWithoutCountriesInput, UsersUncheckedCreateWithoutCountriesInput> | UsersCreateWithoutCountriesInput[] | UsersUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutCountriesInput | UsersCreateOrConnectWithoutCountriesInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutCountriesInput | UsersUpsertWithWhereUniqueWithoutCountriesInput[]
    createMany?: UsersCreateManyCountriesInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutCountriesInput | UsersUpdateWithWhereUniqueWithoutCountriesInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutCountriesInput | UsersUpdateManyWithWhereWithoutCountriesInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type WaterUncheckedUpdateManyWithoutCountriesNestedInput = {
    create?: XOR<WaterCreateWithoutCountriesInput, WaterUncheckedCreateWithoutCountriesInput> | WaterCreateWithoutCountriesInput[] | WaterUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: WaterCreateOrConnectWithoutCountriesInput | WaterCreateOrConnectWithoutCountriesInput[]
    upsert?: WaterUpsertWithWhereUniqueWithoutCountriesInput | WaterUpsertWithWhereUniqueWithoutCountriesInput[]
    createMany?: WaterCreateManyCountriesInputEnvelope
    set?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
    disconnect?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
    delete?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
    connect?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
    update?: WaterUpdateWithWhereUniqueWithoutCountriesInput | WaterUpdateWithWhereUniqueWithoutCountriesInput[]
    updateMany?: WaterUpdateManyWithWhereWithoutCountriesInput | WaterUpdateManyWithWhereWithoutCountriesInput[]
    deleteMany?: WaterScalarWhereInput | WaterScalarWhereInput[]
  }

  export type CountriesCreateNestedOneWithoutElectricityInput = {
    create?: XOR<CountriesCreateWithoutElectricityInput, CountriesUncheckedCreateWithoutElectricityInput>
    connectOrCreate?: CountriesCreateOrConnectWithoutElectricityInput
    connect?: CountriesWhereUniqueInput
  }

  export type EmissionCategoriesCreateNestedOneWithoutElectricityInput = {
    create?: XOR<EmissionCategoriesCreateWithoutElectricityInput, EmissionCategoriesUncheckedCreateWithoutElectricityInput>
    connectOrCreate?: EmissionCategoriesCreateOrConnectWithoutElectricityInput
    connect?: EmissionCategoriesWhereUniqueInput
  }

  export type EmissionFactorsCreateNestedOneWithoutElectricityInput = {
    create?: XOR<EmissionFactorsCreateWithoutElectricityInput, EmissionFactorsUncheckedCreateWithoutElectricityInput>
    connectOrCreate?: EmissionFactorsCreateOrConnectWithoutElectricityInput
    connect?: EmissionFactorsWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CountriesUpdateOneRequiredWithoutElectricityNestedInput = {
    create?: XOR<CountriesCreateWithoutElectricityInput, CountriesUncheckedCreateWithoutElectricityInput>
    connectOrCreate?: CountriesCreateOrConnectWithoutElectricityInput
    upsert?: CountriesUpsertWithoutElectricityInput
    connect?: CountriesWhereUniqueInput
    update?: XOR<XOR<CountriesUpdateToOneWithWhereWithoutElectricityInput, CountriesUpdateWithoutElectricityInput>, CountriesUncheckedUpdateWithoutElectricityInput>
  }

  export type EmissionCategoriesUpdateOneRequiredWithoutElectricityNestedInput = {
    create?: XOR<EmissionCategoriesCreateWithoutElectricityInput, EmissionCategoriesUncheckedCreateWithoutElectricityInput>
    connectOrCreate?: EmissionCategoriesCreateOrConnectWithoutElectricityInput
    upsert?: EmissionCategoriesUpsertWithoutElectricityInput
    connect?: EmissionCategoriesWhereUniqueInput
    update?: XOR<XOR<EmissionCategoriesUpdateToOneWithWhereWithoutElectricityInput, EmissionCategoriesUpdateWithoutElectricityInput>, EmissionCategoriesUncheckedUpdateWithoutElectricityInput>
  }

  export type EmissionFactorsUpdateOneRequiredWithoutElectricityNestedInput = {
    create?: XOR<EmissionFactorsCreateWithoutElectricityInput, EmissionFactorsUncheckedCreateWithoutElectricityInput>
    connectOrCreate?: EmissionFactorsCreateOrConnectWithoutElectricityInput
    upsert?: EmissionFactorsUpsertWithoutElectricityInput
    connect?: EmissionFactorsWhereUniqueInput
    update?: XOR<XOR<EmissionFactorsUpdateToOneWithWhereWithoutElectricityInput, EmissionFactorsUpdateWithoutElectricityInput>, EmissionFactorsUncheckedUpdateWithoutElectricityInput>
  }

  export type ElectricityCreateNestedManyWithoutEmissionCategoriesInput = {
    create?: XOR<ElectricityCreateWithoutEmissionCategoriesInput, ElectricityUncheckedCreateWithoutEmissionCategoriesInput> | ElectricityCreateWithoutEmissionCategoriesInput[] | ElectricityUncheckedCreateWithoutEmissionCategoriesInput[]
    connectOrCreate?: ElectricityCreateOrConnectWithoutEmissionCategoriesInput | ElectricityCreateOrConnectWithoutEmissionCategoriesInput[]
    createMany?: ElectricityCreateManyEmissionCategoriesInputEnvelope
    connect?: ElectricityWhereUniqueInput | ElectricityWhereUniqueInput[]
  }

  export type EmissionFactorsCreateNestedManyWithoutEmissionCategoriesInput = {
    create?: XOR<EmissionFactorsCreateWithoutEmissionCategoriesInput, EmissionFactorsUncheckedCreateWithoutEmissionCategoriesInput> | EmissionFactorsCreateWithoutEmissionCategoriesInput[] | EmissionFactorsUncheckedCreateWithoutEmissionCategoriesInput[]
    connectOrCreate?: EmissionFactorsCreateOrConnectWithoutEmissionCategoriesInput | EmissionFactorsCreateOrConnectWithoutEmissionCategoriesInput[]
    createMany?: EmissionFactorsCreateManyEmissionCategoriesInputEnvelope
    connect?: EmissionFactorsWhereUniqueInput | EmissionFactorsWhereUniqueInput[]
  }

  export type EmissionsCreateNestedManyWithoutEmissionCategoriesInput = {
    create?: XOR<EmissionsCreateWithoutEmissionCategoriesInput, EmissionsUncheckedCreateWithoutEmissionCategoriesInput> | EmissionsCreateWithoutEmissionCategoriesInput[] | EmissionsUncheckedCreateWithoutEmissionCategoriesInput[]
    connectOrCreate?: EmissionsCreateOrConnectWithoutEmissionCategoriesInput | EmissionsCreateOrConnectWithoutEmissionCategoriesInput[]
    createMany?: EmissionsCreateManyEmissionCategoriesInputEnvelope
    connect?: EmissionsWhereUniqueInput | EmissionsWhereUniqueInput[]
  }

  export type FuelCreateNestedManyWithoutEmissionCategoriesInput = {
    create?: XOR<FuelCreateWithoutEmissionCategoriesInput, FuelUncheckedCreateWithoutEmissionCategoriesInput> | FuelCreateWithoutEmissionCategoriesInput[] | FuelUncheckedCreateWithoutEmissionCategoriesInput[]
    connectOrCreate?: FuelCreateOrConnectWithoutEmissionCategoriesInput | FuelCreateOrConnectWithoutEmissionCategoriesInput[]
    createMany?: FuelCreateManyEmissionCategoriesInputEnvelope
    connect?: FuelWhereUniqueInput | FuelWhereUniqueInput[]
  }

  export type TravelCreateNestedManyWithoutEmissionCategoriesInput = {
    create?: XOR<TravelCreateWithoutEmissionCategoriesInput, TravelUncheckedCreateWithoutEmissionCategoriesInput> | TravelCreateWithoutEmissionCategoriesInput[] | TravelUncheckedCreateWithoutEmissionCategoriesInput[]
    connectOrCreate?: TravelCreateOrConnectWithoutEmissionCategoriesInput | TravelCreateOrConnectWithoutEmissionCategoriesInput[]
    createMany?: TravelCreateManyEmissionCategoriesInputEnvelope
    connect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
  }

  export type WaterCreateNestedManyWithoutEmissionCategoriesInput = {
    create?: XOR<WaterCreateWithoutEmissionCategoriesInput, WaterUncheckedCreateWithoutEmissionCategoriesInput> | WaterCreateWithoutEmissionCategoriesInput[] | WaterUncheckedCreateWithoutEmissionCategoriesInput[]
    connectOrCreate?: WaterCreateOrConnectWithoutEmissionCategoriesInput | WaterCreateOrConnectWithoutEmissionCategoriesInput[]
    createMany?: WaterCreateManyEmissionCategoriesInputEnvelope
    connect?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
  }

  export type ElectricityUncheckedCreateNestedManyWithoutEmissionCategoriesInput = {
    create?: XOR<ElectricityCreateWithoutEmissionCategoriesInput, ElectricityUncheckedCreateWithoutEmissionCategoriesInput> | ElectricityCreateWithoutEmissionCategoriesInput[] | ElectricityUncheckedCreateWithoutEmissionCategoriesInput[]
    connectOrCreate?: ElectricityCreateOrConnectWithoutEmissionCategoriesInput | ElectricityCreateOrConnectWithoutEmissionCategoriesInput[]
    createMany?: ElectricityCreateManyEmissionCategoriesInputEnvelope
    connect?: ElectricityWhereUniqueInput | ElectricityWhereUniqueInput[]
  }

  export type EmissionFactorsUncheckedCreateNestedManyWithoutEmissionCategoriesInput = {
    create?: XOR<EmissionFactorsCreateWithoutEmissionCategoriesInput, EmissionFactorsUncheckedCreateWithoutEmissionCategoriesInput> | EmissionFactorsCreateWithoutEmissionCategoriesInput[] | EmissionFactorsUncheckedCreateWithoutEmissionCategoriesInput[]
    connectOrCreate?: EmissionFactorsCreateOrConnectWithoutEmissionCategoriesInput | EmissionFactorsCreateOrConnectWithoutEmissionCategoriesInput[]
    createMany?: EmissionFactorsCreateManyEmissionCategoriesInputEnvelope
    connect?: EmissionFactorsWhereUniqueInput | EmissionFactorsWhereUniqueInput[]
  }

  export type EmissionsUncheckedCreateNestedManyWithoutEmissionCategoriesInput = {
    create?: XOR<EmissionsCreateWithoutEmissionCategoriesInput, EmissionsUncheckedCreateWithoutEmissionCategoriesInput> | EmissionsCreateWithoutEmissionCategoriesInput[] | EmissionsUncheckedCreateWithoutEmissionCategoriesInput[]
    connectOrCreate?: EmissionsCreateOrConnectWithoutEmissionCategoriesInput | EmissionsCreateOrConnectWithoutEmissionCategoriesInput[]
    createMany?: EmissionsCreateManyEmissionCategoriesInputEnvelope
    connect?: EmissionsWhereUniqueInput | EmissionsWhereUniqueInput[]
  }

  export type FuelUncheckedCreateNestedManyWithoutEmissionCategoriesInput = {
    create?: XOR<FuelCreateWithoutEmissionCategoriesInput, FuelUncheckedCreateWithoutEmissionCategoriesInput> | FuelCreateWithoutEmissionCategoriesInput[] | FuelUncheckedCreateWithoutEmissionCategoriesInput[]
    connectOrCreate?: FuelCreateOrConnectWithoutEmissionCategoriesInput | FuelCreateOrConnectWithoutEmissionCategoriesInput[]
    createMany?: FuelCreateManyEmissionCategoriesInputEnvelope
    connect?: FuelWhereUniqueInput | FuelWhereUniqueInput[]
  }

  export type TravelUncheckedCreateNestedManyWithoutEmissionCategoriesInput = {
    create?: XOR<TravelCreateWithoutEmissionCategoriesInput, TravelUncheckedCreateWithoutEmissionCategoriesInput> | TravelCreateWithoutEmissionCategoriesInput[] | TravelUncheckedCreateWithoutEmissionCategoriesInput[]
    connectOrCreate?: TravelCreateOrConnectWithoutEmissionCategoriesInput | TravelCreateOrConnectWithoutEmissionCategoriesInput[]
    createMany?: TravelCreateManyEmissionCategoriesInputEnvelope
    connect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
  }

  export type WaterUncheckedCreateNestedManyWithoutEmissionCategoriesInput = {
    create?: XOR<WaterCreateWithoutEmissionCategoriesInput, WaterUncheckedCreateWithoutEmissionCategoriesInput> | WaterCreateWithoutEmissionCategoriesInput[] | WaterUncheckedCreateWithoutEmissionCategoriesInput[]
    connectOrCreate?: WaterCreateOrConnectWithoutEmissionCategoriesInput | WaterCreateOrConnectWithoutEmissionCategoriesInput[]
    createMany?: WaterCreateManyEmissionCategoriesInputEnvelope
    connect?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
  }

  export type ElectricityUpdateManyWithoutEmissionCategoriesNestedInput = {
    create?: XOR<ElectricityCreateWithoutEmissionCategoriesInput, ElectricityUncheckedCreateWithoutEmissionCategoriesInput> | ElectricityCreateWithoutEmissionCategoriesInput[] | ElectricityUncheckedCreateWithoutEmissionCategoriesInput[]
    connectOrCreate?: ElectricityCreateOrConnectWithoutEmissionCategoriesInput | ElectricityCreateOrConnectWithoutEmissionCategoriesInput[]
    upsert?: ElectricityUpsertWithWhereUniqueWithoutEmissionCategoriesInput | ElectricityUpsertWithWhereUniqueWithoutEmissionCategoriesInput[]
    createMany?: ElectricityCreateManyEmissionCategoriesInputEnvelope
    set?: ElectricityWhereUniqueInput | ElectricityWhereUniqueInput[]
    disconnect?: ElectricityWhereUniqueInput | ElectricityWhereUniqueInput[]
    delete?: ElectricityWhereUniqueInput | ElectricityWhereUniqueInput[]
    connect?: ElectricityWhereUniqueInput | ElectricityWhereUniqueInput[]
    update?: ElectricityUpdateWithWhereUniqueWithoutEmissionCategoriesInput | ElectricityUpdateWithWhereUniqueWithoutEmissionCategoriesInput[]
    updateMany?: ElectricityUpdateManyWithWhereWithoutEmissionCategoriesInput | ElectricityUpdateManyWithWhereWithoutEmissionCategoriesInput[]
    deleteMany?: ElectricityScalarWhereInput | ElectricityScalarWhereInput[]
  }

  export type EmissionFactorsUpdateManyWithoutEmissionCategoriesNestedInput = {
    create?: XOR<EmissionFactorsCreateWithoutEmissionCategoriesInput, EmissionFactorsUncheckedCreateWithoutEmissionCategoriesInput> | EmissionFactorsCreateWithoutEmissionCategoriesInput[] | EmissionFactorsUncheckedCreateWithoutEmissionCategoriesInput[]
    connectOrCreate?: EmissionFactorsCreateOrConnectWithoutEmissionCategoriesInput | EmissionFactorsCreateOrConnectWithoutEmissionCategoriesInput[]
    upsert?: EmissionFactorsUpsertWithWhereUniqueWithoutEmissionCategoriesInput | EmissionFactorsUpsertWithWhereUniqueWithoutEmissionCategoriesInput[]
    createMany?: EmissionFactorsCreateManyEmissionCategoriesInputEnvelope
    set?: EmissionFactorsWhereUniqueInput | EmissionFactorsWhereUniqueInput[]
    disconnect?: EmissionFactorsWhereUniqueInput | EmissionFactorsWhereUniqueInput[]
    delete?: EmissionFactorsWhereUniqueInput | EmissionFactorsWhereUniqueInput[]
    connect?: EmissionFactorsWhereUniqueInput | EmissionFactorsWhereUniqueInput[]
    update?: EmissionFactorsUpdateWithWhereUniqueWithoutEmissionCategoriesInput | EmissionFactorsUpdateWithWhereUniqueWithoutEmissionCategoriesInput[]
    updateMany?: EmissionFactorsUpdateManyWithWhereWithoutEmissionCategoriesInput | EmissionFactorsUpdateManyWithWhereWithoutEmissionCategoriesInput[]
    deleteMany?: EmissionFactorsScalarWhereInput | EmissionFactorsScalarWhereInput[]
  }

  export type EmissionsUpdateManyWithoutEmissionCategoriesNestedInput = {
    create?: XOR<EmissionsCreateWithoutEmissionCategoriesInput, EmissionsUncheckedCreateWithoutEmissionCategoriesInput> | EmissionsCreateWithoutEmissionCategoriesInput[] | EmissionsUncheckedCreateWithoutEmissionCategoriesInput[]
    connectOrCreate?: EmissionsCreateOrConnectWithoutEmissionCategoriesInput | EmissionsCreateOrConnectWithoutEmissionCategoriesInput[]
    upsert?: EmissionsUpsertWithWhereUniqueWithoutEmissionCategoriesInput | EmissionsUpsertWithWhereUniqueWithoutEmissionCategoriesInput[]
    createMany?: EmissionsCreateManyEmissionCategoriesInputEnvelope
    set?: EmissionsWhereUniqueInput | EmissionsWhereUniqueInput[]
    disconnect?: EmissionsWhereUniqueInput | EmissionsWhereUniqueInput[]
    delete?: EmissionsWhereUniqueInput | EmissionsWhereUniqueInput[]
    connect?: EmissionsWhereUniqueInput | EmissionsWhereUniqueInput[]
    update?: EmissionsUpdateWithWhereUniqueWithoutEmissionCategoriesInput | EmissionsUpdateWithWhereUniqueWithoutEmissionCategoriesInput[]
    updateMany?: EmissionsUpdateManyWithWhereWithoutEmissionCategoriesInput | EmissionsUpdateManyWithWhereWithoutEmissionCategoriesInput[]
    deleteMany?: EmissionsScalarWhereInput | EmissionsScalarWhereInput[]
  }

  export type FuelUpdateManyWithoutEmissionCategoriesNestedInput = {
    create?: XOR<FuelCreateWithoutEmissionCategoriesInput, FuelUncheckedCreateWithoutEmissionCategoriesInput> | FuelCreateWithoutEmissionCategoriesInput[] | FuelUncheckedCreateWithoutEmissionCategoriesInput[]
    connectOrCreate?: FuelCreateOrConnectWithoutEmissionCategoriesInput | FuelCreateOrConnectWithoutEmissionCategoriesInput[]
    upsert?: FuelUpsertWithWhereUniqueWithoutEmissionCategoriesInput | FuelUpsertWithWhereUniqueWithoutEmissionCategoriesInput[]
    createMany?: FuelCreateManyEmissionCategoriesInputEnvelope
    set?: FuelWhereUniqueInput | FuelWhereUniqueInput[]
    disconnect?: FuelWhereUniqueInput | FuelWhereUniqueInput[]
    delete?: FuelWhereUniqueInput | FuelWhereUniqueInput[]
    connect?: FuelWhereUniqueInput | FuelWhereUniqueInput[]
    update?: FuelUpdateWithWhereUniqueWithoutEmissionCategoriesInput | FuelUpdateWithWhereUniqueWithoutEmissionCategoriesInput[]
    updateMany?: FuelUpdateManyWithWhereWithoutEmissionCategoriesInput | FuelUpdateManyWithWhereWithoutEmissionCategoriesInput[]
    deleteMany?: FuelScalarWhereInput | FuelScalarWhereInput[]
  }

  export type TravelUpdateManyWithoutEmissionCategoriesNestedInput = {
    create?: XOR<TravelCreateWithoutEmissionCategoriesInput, TravelUncheckedCreateWithoutEmissionCategoriesInput> | TravelCreateWithoutEmissionCategoriesInput[] | TravelUncheckedCreateWithoutEmissionCategoriesInput[]
    connectOrCreate?: TravelCreateOrConnectWithoutEmissionCategoriesInput | TravelCreateOrConnectWithoutEmissionCategoriesInput[]
    upsert?: TravelUpsertWithWhereUniqueWithoutEmissionCategoriesInput | TravelUpsertWithWhereUniqueWithoutEmissionCategoriesInput[]
    createMany?: TravelCreateManyEmissionCategoriesInputEnvelope
    set?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    disconnect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    delete?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    connect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    update?: TravelUpdateWithWhereUniqueWithoutEmissionCategoriesInput | TravelUpdateWithWhereUniqueWithoutEmissionCategoriesInput[]
    updateMany?: TravelUpdateManyWithWhereWithoutEmissionCategoriesInput | TravelUpdateManyWithWhereWithoutEmissionCategoriesInput[]
    deleteMany?: TravelScalarWhereInput | TravelScalarWhereInput[]
  }

  export type WaterUpdateManyWithoutEmissionCategoriesNestedInput = {
    create?: XOR<WaterCreateWithoutEmissionCategoriesInput, WaterUncheckedCreateWithoutEmissionCategoriesInput> | WaterCreateWithoutEmissionCategoriesInput[] | WaterUncheckedCreateWithoutEmissionCategoriesInput[]
    connectOrCreate?: WaterCreateOrConnectWithoutEmissionCategoriesInput | WaterCreateOrConnectWithoutEmissionCategoriesInput[]
    upsert?: WaterUpsertWithWhereUniqueWithoutEmissionCategoriesInput | WaterUpsertWithWhereUniqueWithoutEmissionCategoriesInput[]
    createMany?: WaterCreateManyEmissionCategoriesInputEnvelope
    set?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
    disconnect?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
    delete?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
    connect?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
    update?: WaterUpdateWithWhereUniqueWithoutEmissionCategoriesInput | WaterUpdateWithWhereUniqueWithoutEmissionCategoriesInput[]
    updateMany?: WaterUpdateManyWithWhereWithoutEmissionCategoriesInput | WaterUpdateManyWithWhereWithoutEmissionCategoriesInput[]
    deleteMany?: WaterScalarWhereInput | WaterScalarWhereInput[]
  }

  export type ElectricityUncheckedUpdateManyWithoutEmissionCategoriesNestedInput = {
    create?: XOR<ElectricityCreateWithoutEmissionCategoriesInput, ElectricityUncheckedCreateWithoutEmissionCategoriesInput> | ElectricityCreateWithoutEmissionCategoriesInput[] | ElectricityUncheckedCreateWithoutEmissionCategoriesInput[]
    connectOrCreate?: ElectricityCreateOrConnectWithoutEmissionCategoriesInput | ElectricityCreateOrConnectWithoutEmissionCategoriesInput[]
    upsert?: ElectricityUpsertWithWhereUniqueWithoutEmissionCategoriesInput | ElectricityUpsertWithWhereUniqueWithoutEmissionCategoriesInput[]
    createMany?: ElectricityCreateManyEmissionCategoriesInputEnvelope
    set?: ElectricityWhereUniqueInput | ElectricityWhereUniqueInput[]
    disconnect?: ElectricityWhereUniqueInput | ElectricityWhereUniqueInput[]
    delete?: ElectricityWhereUniqueInput | ElectricityWhereUniqueInput[]
    connect?: ElectricityWhereUniqueInput | ElectricityWhereUniqueInput[]
    update?: ElectricityUpdateWithWhereUniqueWithoutEmissionCategoriesInput | ElectricityUpdateWithWhereUniqueWithoutEmissionCategoriesInput[]
    updateMany?: ElectricityUpdateManyWithWhereWithoutEmissionCategoriesInput | ElectricityUpdateManyWithWhereWithoutEmissionCategoriesInput[]
    deleteMany?: ElectricityScalarWhereInput | ElectricityScalarWhereInput[]
  }

  export type EmissionFactorsUncheckedUpdateManyWithoutEmissionCategoriesNestedInput = {
    create?: XOR<EmissionFactorsCreateWithoutEmissionCategoriesInput, EmissionFactorsUncheckedCreateWithoutEmissionCategoriesInput> | EmissionFactorsCreateWithoutEmissionCategoriesInput[] | EmissionFactorsUncheckedCreateWithoutEmissionCategoriesInput[]
    connectOrCreate?: EmissionFactorsCreateOrConnectWithoutEmissionCategoriesInput | EmissionFactorsCreateOrConnectWithoutEmissionCategoriesInput[]
    upsert?: EmissionFactorsUpsertWithWhereUniqueWithoutEmissionCategoriesInput | EmissionFactorsUpsertWithWhereUniqueWithoutEmissionCategoriesInput[]
    createMany?: EmissionFactorsCreateManyEmissionCategoriesInputEnvelope
    set?: EmissionFactorsWhereUniqueInput | EmissionFactorsWhereUniqueInput[]
    disconnect?: EmissionFactorsWhereUniqueInput | EmissionFactorsWhereUniqueInput[]
    delete?: EmissionFactorsWhereUniqueInput | EmissionFactorsWhereUniqueInput[]
    connect?: EmissionFactorsWhereUniqueInput | EmissionFactorsWhereUniqueInput[]
    update?: EmissionFactorsUpdateWithWhereUniqueWithoutEmissionCategoriesInput | EmissionFactorsUpdateWithWhereUniqueWithoutEmissionCategoriesInput[]
    updateMany?: EmissionFactorsUpdateManyWithWhereWithoutEmissionCategoriesInput | EmissionFactorsUpdateManyWithWhereWithoutEmissionCategoriesInput[]
    deleteMany?: EmissionFactorsScalarWhereInput | EmissionFactorsScalarWhereInput[]
  }

  export type EmissionsUncheckedUpdateManyWithoutEmissionCategoriesNestedInput = {
    create?: XOR<EmissionsCreateWithoutEmissionCategoriesInput, EmissionsUncheckedCreateWithoutEmissionCategoriesInput> | EmissionsCreateWithoutEmissionCategoriesInput[] | EmissionsUncheckedCreateWithoutEmissionCategoriesInput[]
    connectOrCreate?: EmissionsCreateOrConnectWithoutEmissionCategoriesInput | EmissionsCreateOrConnectWithoutEmissionCategoriesInput[]
    upsert?: EmissionsUpsertWithWhereUniqueWithoutEmissionCategoriesInput | EmissionsUpsertWithWhereUniqueWithoutEmissionCategoriesInput[]
    createMany?: EmissionsCreateManyEmissionCategoriesInputEnvelope
    set?: EmissionsWhereUniqueInput | EmissionsWhereUniqueInput[]
    disconnect?: EmissionsWhereUniqueInput | EmissionsWhereUniqueInput[]
    delete?: EmissionsWhereUniqueInput | EmissionsWhereUniqueInput[]
    connect?: EmissionsWhereUniqueInput | EmissionsWhereUniqueInput[]
    update?: EmissionsUpdateWithWhereUniqueWithoutEmissionCategoriesInput | EmissionsUpdateWithWhereUniqueWithoutEmissionCategoriesInput[]
    updateMany?: EmissionsUpdateManyWithWhereWithoutEmissionCategoriesInput | EmissionsUpdateManyWithWhereWithoutEmissionCategoriesInput[]
    deleteMany?: EmissionsScalarWhereInput | EmissionsScalarWhereInput[]
  }

  export type FuelUncheckedUpdateManyWithoutEmissionCategoriesNestedInput = {
    create?: XOR<FuelCreateWithoutEmissionCategoriesInput, FuelUncheckedCreateWithoutEmissionCategoriesInput> | FuelCreateWithoutEmissionCategoriesInput[] | FuelUncheckedCreateWithoutEmissionCategoriesInput[]
    connectOrCreate?: FuelCreateOrConnectWithoutEmissionCategoriesInput | FuelCreateOrConnectWithoutEmissionCategoriesInput[]
    upsert?: FuelUpsertWithWhereUniqueWithoutEmissionCategoriesInput | FuelUpsertWithWhereUniqueWithoutEmissionCategoriesInput[]
    createMany?: FuelCreateManyEmissionCategoriesInputEnvelope
    set?: FuelWhereUniqueInput | FuelWhereUniqueInput[]
    disconnect?: FuelWhereUniqueInput | FuelWhereUniqueInput[]
    delete?: FuelWhereUniqueInput | FuelWhereUniqueInput[]
    connect?: FuelWhereUniqueInput | FuelWhereUniqueInput[]
    update?: FuelUpdateWithWhereUniqueWithoutEmissionCategoriesInput | FuelUpdateWithWhereUniqueWithoutEmissionCategoriesInput[]
    updateMany?: FuelUpdateManyWithWhereWithoutEmissionCategoriesInput | FuelUpdateManyWithWhereWithoutEmissionCategoriesInput[]
    deleteMany?: FuelScalarWhereInput | FuelScalarWhereInput[]
  }

  export type TravelUncheckedUpdateManyWithoutEmissionCategoriesNestedInput = {
    create?: XOR<TravelCreateWithoutEmissionCategoriesInput, TravelUncheckedCreateWithoutEmissionCategoriesInput> | TravelCreateWithoutEmissionCategoriesInput[] | TravelUncheckedCreateWithoutEmissionCategoriesInput[]
    connectOrCreate?: TravelCreateOrConnectWithoutEmissionCategoriesInput | TravelCreateOrConnectWithoutEmissionCategoriesInput[]
    upsert?: TravelUpsertWithWhereUniqueWithoutEmissionCategoriesInput | TravelUpsertWithWhereUniqueWithoutEmissionCategoriesInput[]
    createMany?: TravelCreateManyEmissionCategoriesInputEnvelope
    set?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    disconnect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    delete?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    connect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    update?: TravelUpdateWithWhereUniqueWithoutEmissionCategoriesInput | TravelUpdateWithWhereUniqueWithoutEmissionCategoriesInput[]
    updateMany?: TravelUpdateManyWithWhereWithoutEmissionCategoriesInput | TravelUpdateManyWithWhereWithoutEmissionCategoriesInput[]
    deleteMany?: TravelScalarWhereInput | TravelScalarWhereInput[]
  }

  export type WaterUncheckedUpdateManyWithoutEmissionCategoriesNestedInput = {
    create?: XOR<WaterCreateWithoutEmissionCategoriesInput, WaterUncheckedCreateWithoutEmissionCategoriesInput> | WaterCreateWithoutEmissionCategoriesInput[] | WaterUncheckedCreateWithoutEmissionCategoriesInput[]
    connectOrCreate?: WaterCreateOrConnectWithoutEmissionCategoriesInput | WaterCreateOrConnectWithoutEmissionCategoriesInput[]
    upsert?: WaterUpsertWithWhereUniqueWithoutEmissionCategoriesInput | WaterUpsertWithWhereUniqueWithoutEmissionCategoriesInput[]
    createMany?: WaterCreateManyEmissionCategoriesInputEnvelope
    set?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
    disconnect?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
    delete?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
    connect?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
    update?: WaterUpdateWithWhereUniqueWithoutEmissionCategoriesInput | WaterUpdateWithWhereUniqueWithoutEmissionCategoriesInput[]
    updateMany?: WaterUpdateManyWithWhereWithoutEmissionCategoriesInput | WaterUpdateManyWithWhereWithoutEmissionCategoriesInput[]
    deleteMany?: WaterScalarWhereInput | WaterScalarWhereInput[]
  }

  export type CalculationsCreateNestedManyWithoutEmissionFactorsInput = {
    create?: XOR<CalculationsCreateWithoutEmissionFactorsInput, CalculationsUncheckedCreateWithoutEmissionFactorsInput> | CalculationsCreateWithoutEmissionFactorsInput[] | CalculationsUncheckedCreateWithoutEmissionFactorsInput[]
    connectOrCreate?: CalculationsCreateOrConnectWithoutEmissionFactorsInput | CalculationsCreateOrConnectWithoutEmissionFactorsInput[]
    createMany?: CalculationsCreateManyEmissionFactorsInputEnvelope
    connect?: CalculationsWhereUniqueInput | CalculationsWhereUniqueInput[]
  }

  export type ElectricityCreateNestedManyWithoutEmissionFactorsInput = {
    create?: XOR<ElectricityCreateWithoutEmissionFactorsInput, ElectricityUncheckedCreateWithoutEmissionFactorsInput> | ElectricityCreateWithoutEmissionFactorsInput[] | ElectricityUncheckedCreateWithoutEmissionFactorsInput[]
    connectOrCreate?: ElectricityCreateOrConnectWithoutEmissionFactorsInput | ElectricityCreateOrConnectWithoutEmissionFactorsInput[]
    createMany?: ElectricityCreateManyEmissionFactorsInputEnvelope
    connect?: ElectricityWhereUniqueInput | ElectricityWhereUniqueInput[]
  }

  export type CountriesCreateNestedOneWithoutEmissionFactorsInput = {
    create?: XOR<CountriesCreateWithoutEmissionFactorsInput, CountriesUncheckedCreateWithoutEmissionFactorsInput>
    connectOrCreate?: CountriesCreateOrConnectWithoutEmissionFactorsInput
    connect?: CountriesWhereUniqueInput
  }

  export type EmissionCategoriesCreateNestedOneWithoutEmissionFactorsInput = {
    create?: XOR<EmissionCategoriesCreateWithoutEmissionFactorsInput, EmissionCategoriesUncheckedCreateWithoutEmissionFactorsInput>
    connectOrCreate?: EmissionCategoriesCreateOrConnectWithoutEmissionFactorsInput
    connect?: EmissionCategoriesWhereUniqueInput
  }

  export type TravelCreateNestedManyWithoutEmissionFactorsInput = {
    create?: XOR<TravelCreateWithoutEmissionFactorsInput, TravelUncheckedCreateWithoutEmissionFactorsInput> | TravelCreateWithoutEmissionFactorsInput[] | TravelUncheckedCreateWithoutEmissionFactorsInput[]
    connectOrCreate?: TravelCreateOrConnectWithoutEmissionFactorsInput | TravelCreateOrConnectWithoutEmissionFactorsInput[]
    createMany?: TravelCreateManyEmissionFactorsInputEnvelope
    connect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
  }

  export type WaterCreateNestedManyWithoutEmissionFactorsInput = {
    create?: XOR<WaterCreateWithoutEmissionFactorsInput, WaterUncheckedCreateWithoutEmissionFactorsInput> | WaterCreateWithoutEmissionFactorsInput[] | WaterUncheckedCreateWithoutEmissionFactorsInput[]
    connectOrCreate?: WaterCreateOrConnectWithoutEmissionFactorsInput | WaterCreateOrConnectWithoutEmissionFactorsInput[]
    createMany?: WaterCreateManyEmissionFactorsInputEnvelope
    connect?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
  }

  export type CalculationsUncheckedCreateNestedManyWithoutEmissionFactorsInput = {
    create?: XOR<CalculationsCreateWithoutEmissionFactorsInput, CalculationsUncheckedCreateWithoutEmissionFactorsInput> | CalculationsCreateWithoutEmissionFactorsInput[] | CalculationsUncheckedCreateWithoutEmissionFactorsInput[]
    connectOrCreate?: CalculationsCreateOrConnectWithoutEmissionFactorsInput | CalculationsCreateOrConnectWithoutEmissionFactorsInput[]
    createMany?: CalculationsCreateManyEmissionFactorsInputEnvelope
    connect?: CalculationsWhereUniqueInput | CalculationsWhereUniqueInput[]
  }

  export type ElectricityUncheckedCreateNestedManyWithoutEmissionFactorsInput = {
    create?: XOR<ElectricityCreateWithoutEmissionFactorsInput, ElectricityUncheckedCreateWithoutEmissionFactorsInput> | ElectricityCreateWithoutEmissionFactorsInput[] | ElectricityUncheckedCreateWithoutEmissionFactorsInput[]
    connectOrCreate?: ElectricityCreateOrConnectWithoutEmissionFactorsInput | ElectricityCreateOrConnectWithoutEmissionFactorsInput[]
    createMany?: ElectricityCreateManyEmissionFactorsInputEnvelope
    connect?: ElectricityWhereUniqueInput | ElectricityWhereUniqueInput[]
  }

  export type TravelUncheckedCreateNestedManyWithoutEmissionFactorsInput = {
    create?: XOR<TravelCreateWithoutEmissionFactorsInput, TravelUncheckedCreateWithoutEmissionFactorsInput> | TravelCreateWithoutEmissionFactorsInput[] | TravelUncheckedCreateWithoutEmissionFactorsInput[]
    connectOrCreate?: TravelCreateOrConnectWithoutEmissionFactorsInput | TravelCreateOrConnectWithoutEmissionFactorsInput[]
    createMany?: TravelCreateManyEmissionFactorsInputEnvelope
    connect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
  }

  export type WaterUncheckedCreateNestedManyWithoutEmissionFactorsInput = {
    create?: XOR<WaterCreateWithoutEmissionFactorsInput, WaterUncheckedCreateWithoutEmissionFactorsInput> | WaterCreateWithoutEmissionFactorsInput[] | WaterUncheckedCreateWithoutEmissionFactorsInput[]
    connectOrCreate?: WaterCreateOrConnectWithoutEmissionFactorsInput | WaterCreateOrConnectWithoutEmissionFactorsInput[]
    createMany?: WaterCreateManyEmissionFactorsInputEnvelope
    connect?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CalculationsUpdateManyWithoutEmissionFactorsNestedInput = {
    create?: XOR<CalculationsCreateWithoutEmissionFactorsInput, CalculationsUncheckedCreateWithoutEmissionFactorsInput> | CalculationsCreateWithoutEmissionFactorsInput[] | CalculationsUncheckedCreateWithoutEmissionFactorsInput[]
    connectOrCreate?: CalculationsCreateOrConnectWithoutEmissionFactorsInput | CalculationsCreateOrConnectWithoutEmissionFactorsInput[]
    upsert?: CalculationsUpsertWithWhereUniqueWithoutEmissionFactorsInput | CalculationsUpsertWithWhereUniqueWithoutEmissionFactorsInput[]
    createMany?: CalculationsCreateManyEmissionFactorsInputEnvelope
    set?: CalculationsWhereUniqueInput | CalculationsWhereUniqueInput[]
    disconnect?: CalculationsWhereUniqueInput | CalculationsWhereUniqueInput[]
    delete?: CalculationsWhereUniqueInput | CalculationsWhereUniqueInput[]
    connect?: CalculationsWhereUniqueInput | CalculationsWhereUniqueInput[]
    update?: CalculationsUpdateWithWhereUniqueWithoutEmissionFactorsInput | CalculationsUpdateWithWhereUniqueWithoutEmissionFactorsInput[]
    updateMany?: CalculationsUpdateManyWithWhereWithoutEmissionFactorsInput | CalculationsUpdateManyWithWhereWithoutEmissionFactorsInput[]
    deleteMany?: CalculationsScalarWhereInput | CalculationsScalarWhereInput[]
  }

  export type ElectricityUpdateManyWithoutEmissionFactorsNestedInput = {
    create?: XOR<ElectricityCreateWithoutEmissionFactorsInput, ElectricityUncheckedCreateWithoutEmissionFactorsInput> | ElectricityCreateWithoutEmissionFactorsInput[] | ElectricityUncheckedCreateWithoutEmissionFactorsInput[]
    connectOrCreate?: ElectricityCreateOrConnectWithoutEmissionFactorsInput | ElectricityCreateOrConnectWithoutEmissionFactorsInput[]
    upsert?: ElectricityUpsertWithWhereUniqueWithoutEmissionFactorsInput | ElectricityUpsertWithWhereUniqueWithoutEmissionFactorsInput[]
    createMany?: ElectricityCreateManyEmissionFactorsInputEnvelope
    set?: ElectricityWhereUniqueInput | ElectricityWhereUniqueInput[]
    disconnect?: ElectricityWhereUniqueInput | ElectricityWhereUniqueInput[]
    delete?: ElectricityWhereUniqueInput | ElectricityWhereUniqueInput[]
    connect?: ElectricityWhereUniqueInput | ElectricityWhereUniqueInput[]
    update?: ElectricityUpdateWithWhereUniqueWithoutEmissionFactorsInput | ElectricityUpdateWithWhereUniqueWithoutEmissionFactorsInput[]
    updateMany?: ElectricityUpdateManyWithWhereWithoutEmissionFactorsInput | ElectricityUpdateManyWithWhereWithoutEmissionFactorsInput[]
    deleteMany?: ElectricityScalarWhereInput | ElectricityScalarWhereInput[]
  }

  export type CountriesUpdateOneRequiredWithoutEmissionFactorsNestedInput = {
    create?: XOR<CountriesCreateWithoutEmissionFactorsInput, CountriesUncheckedCreateWithoutEmissionFactorsInput>
    connectOrCreate?: CountriesCreateOrConnectWithoutEmissionFactorsInput
    upsert?: CountriesUpsertWithoutEmissionFactorsInput
    connect?: CountriesWhereUniqueInput
    update?: XOR<XOR<CountriesUpdateToOneWithWhereWithoutEmissionFactorsInput, CountriesUpdateWithoutEmissionFactorsInput>, CountriesUncheckedUpdateWithoutEmissionFactorsInput>
  }

  export type EmissionCategoriesUpdateOneRequiredWithoutEmissionFactorsNestedInput = {
    create?: XOR<EmissionCategoriesCreateWithoutEmissionFactorsInput, EmissionCategoriesUncheckedCreateWithoutEmissionFactorsInput>
    connectOrCreate?: EmissionCategoriesCreateOrConnectWithoutEmissionFactorsInput
    upsert?: EmissionCategoriesUpsertWithoutEmissionFactorsInput
    connect?: EmissionCategoriesWhereUniqueInput
    update?: XOR<XOR<EmissionCategoriesUpdateToOneWithWhereWithoutEmissionFactorsInput, EmissionCategoriesUpdateWithoutEmissionFactorsInput>, EmissionCategoriesUncheckedUpdateWithoutEmissionFactorsInput>
  }

  export type TravelUpdateManyWithoutEmissionFactorsNestedInput = {
    create?: XOR<TravelCreateWithoutEmissionFactorsInput, TravelUncheckedCreateWithoutEmissionFactorsInput> | TravelCreateWithoutEmissionFactorsInput[] | TravelUncheckedCreateWithoutEmissionFactorsInput[]
    connectOrCreate?: TravelCreateOrConnectWithoutEmissionFactorsInput | TravelCreateOrConnectWithoutEmissionFactorsInput[]
    upsert?: TravelUpsertWithWhereUniqueWithoutEmissionFactorsInput | TravelUpsertWithWhereUniqueWithoutEmissionFactorsInput[]
    createMany?: TravelCreateManyEmissionFactorsInputEnvelope
    set?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    disconnect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    delete?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    connect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    update?: TravelUpdateWithWhereUniqueWithoutEmissionFactorsInput | TravelUpdateWithWhereUniqueWithoutEmissionFactorsInput[]
    updateMany?: TravelUpdateManyWithWhereWithoutEmissionFactorsInput | TravelUpdateManyWithWhereWithoutEmissionFactorsInput[]
    deleteMany?: TravelScalarWhereInput | TravelScalarWhereInput[]
  }

  export type WaterUpdateManyWithoutEmissionFactorsNestedInput = {
    create?: XOR<WaterCreateWithoutEmissionFactorsInput, WaterUncheckedCreateWithoutEmissionFactorsInput> | WaterCreateWithoutEmissionFactorsInput[] | WaterUncheckedCreateWithoutEmissionFactorsInput[]
    connectOrCreate?: WaterCreateOrConnectWithoutEmissionFactorsInput | WaterCreateOrConnectWithoutEmissionFactorsInput[]
    upsert?: WaterUpsertWithWhereUniqueWithoutEmissionFactorsInput | WaterUpsertWithWhereUniqueWithoutEmissionFactorsInput[]
    createMany?: WaterCreateManyEmissionFactorsInputEnvelope
    set?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
    disconnect?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
    delete?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
    connect?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
    update?: WaterUpdateWithWhereUniqueWithoutEmissionFactorsInput | WaterUpdateWithWhereUniqueWithoutEmissionFactorsInput[]
    updateMany?: WaterUpdateManyWithWhereWithoutEmissionFactorsInput | WaterUpdateManyWithWhereWithoutEmissionFactorsInput[]
    deleteMany?: WaterScalarWhereInput | WaterScalarWhereInput[]
  }

  export type CalculationsUncheckedUpdateManyWithoutEmissionFactorsNestedInput = {
    create?: XOR<CalculationsCreateWithoutEmissionFactorsInput, CalculationsUncheckedCreateWithoutEmissionFactorsInput> | CalculationsCreateWithoutEmissionFactorsInput[] | CalculationsUncheckedCreateWithoutEmissionFactorsInput[]
    connectOrCreate?: CalculationsCreateOrConnectWithoutEmissionFactorsInput | CalculationsCreateOrConnectWithoutEmissionFactorsInput[]
    upsert?: CalculationsUpsertWithWhereUniqueWithoutEmissionFactorsInput | CalculationsUpsertWithWhereUniqueWithoutEmissionFactorsInput[]
    createMany?: CalculationsCreateManyEmissionFactorsInputEnvelope
    set?: CalculationsWhereUniqueInput | CalculationsWhereUniqueInput[]
    disconnect?: CalculationsWhereUniqueInput | CalculationsWhereUniqueInput[]
    delete?: CalculationsWhereUniqueInput | CalculationsWhereUniqueInput[]
    connect?: CalculationsWhereUniqueInput | CalculationsWhereUniqueInput[]
    update?: CalculationsUpdateWithWhereUniqueWithoutEmissionFactorsInput | CalculationsUpdateWithWhereUniqueWithoutEmissionFactorsInput[]
    updateMany?: CalculationsUpdateManyWithWhereWithoutEmissionFactorsInput | CalculationsUpdateManyWithWhereWithoutEmissionFactorsInput[]
    deleteMany?: CalculationsScalarWhereInput | CalculationsScalarWhereInput[]
  }

  export type ElectricityUncheckedUpdateManyWithoutEmissionFactorsNestedInput = {
    create?: XOR<ElectricityCreateWithoutEmissionFactorsInput, ElectricityUncheckedCreateWithoutEmissionFactorsInput> | ElectricityCreateWithoutEmissionFactorsInput[] | ElectricityUncheckedCreateWithoutEmissionFactorsInput[]
    connectOrCreate?: ElectricityCreateOrConnectWithoutEmissionFactorsInput | ElectricityCreateOrConnectWithoutEmissionFactorsInput[]
    upsert?: ElectricityUpsertWithWhereUniqueWithoutEmissionFactorsInput | ElectricityUpsertWithWhereUniqueWithoutEmissionFactorsInput[]
    createMany?: ElectricityCreateManyEmissionFactorsInputEnvelope
    set?: ElectricityWhereUniqueInput | ElectricityWhereUniqueInput[]
    disconnect?: ElectricityWhereUniqueInput | ElectricityWhereUniqueInput[]
    delete?: ElectricityWhereUniqueInput | ElectricityWhereUniqueInput[]
    connect?: ElectricityWhereUniqueInput | ElectricityWhereUniqueInput[]
    update?: ElectricityUpdateWithWhereUniqueWithoutEmissionFactorsInput | ElectricityUpdateWithWhereUniqueWithoutEmissionFactorsInput[]
    updateMany?: ElectricityUpdateManyWithWhereWithoutEmissionFactorsInput | ElectricityUpdateManyWithWhereWithoutEmissionFactorsInput[]
    deleteMany?: ElectricityScalarWhereInput | ElectricityScalarWhereInput[]
  }

  export type TravelUncheckedUpdateManyWithoutEmissionFactorsNestedInput = {
    create?: XOR<TravelCreateWithoutEmissionFactorsInput, TravelUncheckedCreateWithoutEmissionFactorsInput> | TravelCreateWithoutEmissionFactorsInput[] | TravelUncheckedCreateWithoutEmissionFactorsInput[]
    connectOrCreate?: TravelCreateOrConnectWithoutEmissionFactorsInput | TravelCreateOrConnectWithoutEmissionFactorsInput[]
    upsert?: TravelUpsertWithWhereUniqueWithoutEmissionFactorsInput | TravelUpsertWithWhereUniqueWithoutEmissionFactorsInput[]
    createMany?: TravelCreateManyEmissionFactorsInputEnvelope
    set?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    disconnect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    delete?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    connect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    update?: TravelUpdateWithWhereUniqueWithoutEmissionFactorsInput | TravelUpdateWithWhereUniqueWithoutEmissionFactorsInput[]
    updateMany?: TravelUpdateManyWithWhereWithoutEmissionFactorsInput | TravelUpdateManyWithWhereWithoutEmissionFactorsInput[]
    deleteMany?: TravelScalarWhereInput | TravelScalarWhereInput[]
  }

  export type WaterUncheckedUpdateManyWithoutEmissionFactorsNestedInput = {
    create?: XOR<WaterCreateWithoutEmissionFactorsInput, WaterUncheckedCreateWithoutEmissionFactorsInput> | WaterCreateWithoutEmissionFactorsInput[] | WaterUncheckedCreateWithoutEmissionFactorsInput[]
    connectOrCreate?: WaterCreateOrConnectWithoutEmissionFactorsInput | WaterCreateOrConnectWithoutEmissionFactorsInput[]
    upsert?: WaterUpsertWithWhereUniqueWithoutEmissionFactorsInput | WaterUpsertWithWhereUniqueWithoutEmissionFactorsInput[]
    createMany?: WaterCreateManyEmissionFactorsInputEnvelope
    set?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
    disconnect?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
    delete?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
    connect?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
    update?: WaterUpdateWithWhereUniqueWithoutEmissionFactorsInput | WaterUpdateWithWhereUniqueWithoutEmissionFactorsInput[]
    updateMany?: WaterUpdateManyWithWhereWithoutEmissionFactorsInput | WaterUpdateManyWithWhereWithoutEmissionFactorsInput[]
    deleteMany?: WaterScalarWhereInput | WaterScalarWhereInput[]
  }

  export type CountriesCreateNestedOneWithoutEmissionsInput = {
    create?: XOR<CountriesCreateWithoutEmissionsInput, CountriesUncheckedCreateWithoutEmissionsInput>
    connectOrCreate?: CountriesCreateOrConnectWithoutEmissionsInput
    connect?: CountriesWhereUniqueInput
  }

  export type EmissionCategoriesCreateNestedOneWithoutEmissionsInput = {
    create?: XOR<EmissionCategoriesCreateWithoutEmissionsInput, EmissionCategoriesUncheckedCreateWithoutEmissionsInput>
    connectOrCreate?: EmissionCategoriesCreateOrConnectWithoutEmissionsInput
    connect?: EmissionCategoriesWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutEmissionsInput = {
    create?: XOR<UsersCreateWithoutEmissionsInput, UsersUncheckedCreateWithoutEmissionsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutEmissionsInput
    connect?: UsersWhereUniqueInput
  }

  export type CountriesUpdateOneRequiredWithoutEmissionsNestedInput = {
    create?: XOR<CountriesCreateWithoutEmissionsInput, CountriesUncheckedCreateWithoutEmissionsInput>
    connectOrCreate?: CountriesCreateOrConnectWithoutEmissionsInput
    upsert?: CountriesUpsertWithoutEmissionsInput
    connect?: CountriesWhereUniqueInput
    update?: XOR<XOR<CountriesUpdateToOneWithWhereWithoutEmissionsInput, CountriesUpdateWithoutEmissionsInput>, CountriesUncheckedUpdateWithoutEmissionsInput>
  }

  export type EmissionCategoriesUpdateOneRequiredWithoutEmissionsNestedInput = {
    create?: XOR<EmissionCategoriesCreateWithoutEmissionsInput, EmissionCategoriesUncheckedCreateWithoutEmissionsInput>
    connectOrCreate?: EmissionCategoriesCreateOrConnectWithoutEmissionsInput
    upsert?: EmissionCategoriesUpsertWithoutEmissionsInput
    connect?: EmissionCategoriesWhereUniqueInput
    update?: XOR<XOR<EmissionCategoriesUpdateToOneWithWhereWithoutEmissionsInput, EmissionCategoriesUpdateWithoutEmissionsInput>, EmissionCategoriesUncheckedUpdateWithoutEmissionsInput>
  }

  export type UsersUpdateOneRequiredWithoutEmissionsNestedInput = {
    create?: XOR<UsersCreateWithoutEmissionsInput, UsersUncheckedCreateWithoutEmissionsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutEmissionsInput
    upsert?: UsersUpsertWithoutEmissionsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutEmissionsInput, UsersUpdateWithoutEmissionsInput>, UsersUncheckedUpdateWithoutEmissionsInput>
  }

  export type EmissionCategoriesCreateNestedOneWithoutFuelInput = {
    create?: XOR<EmissionCategoriesCreateWithoutFuelInput, EmissionCategoriesUncheckedCreateWithoutFuelInput>
    connectOrCreate?: EmissionCategoriesCreateOrConnectWithoutFuelInput
    connect?: EmissionCategoriesWhereUniqueInput
  }

  export type Vehicle_Fuel_RelationCreateNestedManyWithoutFuelInput = {
    create?: XOR<Vehicle_Fuel_RelationCreateWithoutFuelInput, Vehicle_Fuel_RelationUncheckedCreateWithoutFuelInput> | Vehicle_Fuel_RelationCreateWithoutFuelInput[] | Vehicle_Fuel_RelationUncheckedCreateWithoutFuelInput[]
    connectOrCreate?: Vehicle_Fuel_RelationCreateOrConnectWithoutFuelInput | Vehicle_Fuel_RelationCreateOrConnectWithoutFuelInput[]
    createMany?: Vehicle_Fuel_RelationCreateManyFuelInputEnvelope
    connect?: Vehicle_Fuel_RelationWhereUniqueInput | Vehicle_Fuel_RelationWhereUniqueInput[]
  }

  export type Vehicle_Fuel_RelationUncheckedCreateNestedManyWithoutFuelInput = {
    create?: XOR<Vehicle_Fuel_RelationCreateWithoutFuelInput, Vehicle_Fuel_RelationUncheckedCreateWithoutFuelInput> | Vehicle_Fuel_RelationCreateWithoutFuelInput[] | Vehicle_Fuel_RelationUncheckedCreateWithoutFuelInput[]
    connectOrCreate?: Vehicle_Fuel_RelationCreateOrConnectWithoutFuelInput | Vehicle_Fuel_RelationCreateOrConnectWithoutFuelInput[]
    createMany?: Vehicle_Fuel_RelationCreateManyFuelInputEnvelope
    connect?: Vehicle_Fuel_RelationWhereUniqueInput | Vehicle_Fuel_RelationWhereUniqueInput[]
  }

  export type EmissionCategoriesUpdateOneWithoutFuelNestedInput = {
    create?: XOR<EmissionCategoriesCreateWithoutFuelInput, EmissionCategoriesUncheckedCreateWithoutFuelInput>
    connectOrCreate?: EmissionCategoriesCreateOrConnectWithoutFuelInput
    upsert?: EmissionCategoriesUpsertWithoutFuelInput
    disconnect?: EmissionCategoriesWhereInput | boolean
    delete?: EmissionCategoriesWhereInput | boolean
    connect?: EmissionCategoriesWhereUniqueInput
    update?: XOR<XOR<EmissionCategoriesUpdateToOneWithWhereWithoutFuelInput, EmissionCategoriesUpdateWithoutFuelInput>, EmissionCategoriesUncheckedUpdateWithoutFuelInput>
  }

  export type Vehicle_Fuel_RelationUpdateManyWithoutFuelNestedInput = {
    create?: XOR<Vehicle_Fuel_RelationCreateWithoutFuelInput, Vehicle_Fuel_RelationUncheckedCreateWithoutFuelInput> | Vehicle_Fuel_RelationCreateWithoutFuelInput[] | Vehicle_Fuel_RelationUncheckedCreateWithoutFuelInput[]
    connectOrCreate?: Vehicle_Fuel_RelationCreateOrConnectWithoutFuelInput | Vehicle_Fuel_RelationCreateOrConnectWithoutFuelInput[]
    upsert?: Vehicle_Fuel_RelationUpsertWithWhereUniqueWithoutFuelInput | Vehicle_Fuel_RelationUpsertWithWhereUniqueWithoutFuelInput[]
    createMany?: Vehicle_Fuel_RelationCreateManyFuelInputEnvelope
    set?: Vehicle_Fuel_RelationWhereUniqueInput | Vehicle_Fuel_RelationWhereUniqueInput[]
    disconnect?: Vehicle_Fuel_RelationWhereUniqueInput | Vehicle_Fuel_RelationWhereUniqueInput[]
    delete?: Vehicle_Fuel_RelationWhereUniqueInput | Vehicle_Fuel_RelationWhereUniqueInput[]
    connect?: Vehicle_Fuel_RelationWhereUniqueInput | Vehicle_Fuel_RelationWhereUniqueInput[]
    update?: Vehicle_Fuel_RelationUpdateWithWhereUniqueWithoutFuelInput | Vehicle_Fuel_RelationUpdateWithWhereUniqueWithoutFuelInput[]
    updateMany?: Vehicle_Fuel_RelationUpdateManyWithWhereWithoutFuelInput | Vehicle_Fuel_RelationUpdateManyWithWhereWithoutFuelInput[]
    deleteMany?: Vehicle_Fuel_RelationScalarWhereInput | Vehicle_Fuel_RelationScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Vehicle_Fuel_RelationUncheckedUpdateManyWithoutFuelNestedInput = {
    create?: XOR<Vehicle_Fuel_RelationCreateWithoutFuelInput, Vehicle_Fuel_RelationUncheckedCreateWithoutFuelInput> | Vehicle_Fuel_RelationCreateWithoutFuelInput[] | Vehicle_Fuel_RelationUncheckedCreateWithoutFuelInput[]
    connectOrCreate?: Vehicle_Fuel_RelationCreateOrConnectWithoutFuelInput | Vehicle_Fuel_RelationCreateOrConnectWithoutFuelInput[]
    upsert?: Vehicle_Fuel_RelationUpsertWithWhereUniqueWithoutFuelInput | Vehicle_Fuel_RelationUpsertWithWhereUniqueWithoutFuelInput[]
    createMany?: Vehicle_Fuel_RelationCreateManyFuelInputEnvelope
    set?: Vehicle_Fuel_RelationWhereUniqueInput | Vehicle_Fuel_RelationWhereUniqueInput[]
    disconnect?: Vehicle_Fuel_RelationWhereUniqueInput | Vehicle_Fuel_RelationWhereUniqueInput[]
    delete?: Vehicle_Fuel_RelationWhereUniqueInput | Vehicle_Fuel_RelationWhereUniqueInput[]
    connect?: Vehicle_Fuel_RelationWhereUniqueInput | Vehicle_Fuel_RelationWhereUniqueInput[]
    update?: Vehicle_Fuel_RelationUpdateWithWhereUniqueWithoutFuelInput | Vehicle_Fuel_RelationUpdateWithWhereUniqueWithoutFuelInput[]
    updateMany?: Vehicle_Fuel_RelationUpdateManyWithWhereWithoutFuelInput | Vehicle_Fuel_RelationUpdateManyWithWhereWithoutFuelInput[]
    deleteMany?: Vehicle_Fuel_RelationScalarWhereInput | Vehicle_Fuel_RelationScalarWhereInput[]
  }

  export type CountriesCreateNestedOneWithoutTravelInput = {
    create?: XOR<CountriesCreateWithoutTravelInput, CountriesUncheckedCreateWithoutTravelInput>
    connectOrCreate?: CountriesCreateOrConnectWithoutTravelInput
    connect?: CountriesWhereUniqueInput
  }

  export type EmissionCategoriesCreateNestedOneWithoutTravelInput = {
    create?: XOR<EmissionCategoriesCreateWithoutTravelInput, EmissionCategoriesUncheckedCreateWithoutTravelInput>
    connectOrCreate?: EmissionCategoriesCreateOrConnectWithoutTravelInput
    connect?: EmissionCategoriesWhereUniqueInput
  }

  export type EmissionFactorsCreateNestedOneWithoutTravelInput = {
    create?: XOR<EmissionFactorsCreateWithoutTravelInput, EmissionFactorsUncheckedCreateWithoutTravelInput>
    connectOrCreate?: EmissionFactorsCreateOrConnectWithoutTravelInput
    connect?: EmissionFactorsWhereUniqueInput
  }

  export type CountriesUpdateOneRequiredWithoutTravelNestedInput = {
    create?: XOR<CountriesCreateWithoutTravelInput, CountriesUncheckedCreateWithoutTravelInput>
    connectOrCreate?: CountriesCreateOrConnectWithoutTravelInput
    upsert?: CountriesUpsertWithoutTravelInput
    connect?: CountriesWhereUniqueInput
    update?: XOR<XOR<CountriesUpdateToOneWithWhereWithoutTravelInput, CountriesUpdateWithoutTravelInput>, CountriesUncheckedUpdateWithoutTravelInput>
  }

  export type EmissionCategoriesUpdateOneRequiredWithoutTravelNestedInput = {
    create?: XOR<EmissionCategoriesCreateWithoutTravelInput, EmissionCategoriesUncheckedCreateWithoutTravelInput>
    connectOrCreate?: EmissionCategoriesCreateOrConnectWithoutTravelInput
    upsert?: EmissionCategoriesUpsertWithoutTravelInput
    connect?: EmissionCategoriesWhereUniqueInput
    update?: XOR<XOR<EmissionCategoriesUpdateToOneWithWhereWithoutTravelInput, EmissionCategoriesUpdateWithoutTravelInput>, EmissionCategoriesUncheckedUpdateWithoutTravelInput>
  }

  export type EmissionFactorsUpdateOneRequiredWithoutTravelNestedInput = {
    create?: XOR<EmissionFactorsCreateWithoutTravelInput, EmissionFactorsUncheckedCreateWithoutTravelInput>
    connectOrCreate?: EmissionFactorsCreateOrConnectWithoutTravelInput
    upsert?: EmissionFactorsUpsertWithoutTravelInput
    connect?: EmissionFactorsWhereUniqueInput
    update?: XOR<XOR<EmissionFactorsUpdateToOneWithWhereWithoutTravelInput, EmissionFactorsUpdateWithoutTravelInput>, EmissionFactorsUncheckedUpdateWithoutTravelInput>
  }

  export type CalculationsCreateNestedManyWithoutUsersInput = {
    create?: XOR<CalculationsCreateWithoutUsersInput, CalculationsUncheckedCreateWithoutUsersInput> | CalculationsCreateWithoutUsersInput[] | CalculationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CalculationsCreateOrConnectWithoutUsersInput | CalculationsCreateOrConnectWithoutUsersInput[]
    createMany?: CalculationsCreateManyUsersInputEnvelope
    connect?: CalculationsWhereUniqueInput | CalculationsWhereUniqueInput[]
  }

  export type CompanyVehiclesCreateNestedManyWithoutUsersInput = {
    create?: XOR<CompanyVehiclesCreateWithoutUsersInput, CompanyVehiclesUncheckedCreateWithoutUsersInput> | CompanyVehiclesCreateWithoutUsersInput[] | CompanyVehiclesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CompanyVehiclesCreateOrConnectWithoutUsersInput | CompanyVehiclesCreateOrConnectWithoutUsersInput[]
    createMany?: CompanyVehiclesCreateManyUsersInputEnvelope
    connect?: CompanyVehiclesWhereUniqueInput | CompanyVehiclesWhereUniqueInput[]
  }

  export type EmissionsCreateNestedManyWithoutUsersInput = {
    create?: XOR<EmissionsCreateWithoutUsersInput, EmissionsUncheckedCreateWithoutUsersInput> | EmissionsCreateWithoutUsersInput[] | EmissionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: EmissionsCreateOrConnectWithoutUsersInput | EmissionsCreateOrConnectWithoutUsersInput[]
    createMany?: EmissionsCreateManyUsersInputEnvelope
    connect?: EmissionsWhereUniqueInput | EmissionsWhereUniqueInput[]
  }

  export type CountriesCreateNestedOneWithoutUsersInput = {
    create?: XOR<CountriesCreateWithoutUsersInput, CountriesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CountriesCreateOrConnectWithoutUsersInput
    connect?: CountriesWhereUniqueInput
  }

  export type CalculationsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<CalculationsCreateWithoutUsersInput, CalculationsUncheckedCreateWithoutUsersInput> | CalculationsCreateWithoutUsersInput[] | CalculationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CalculationsCreateOrConnectWithoutUsersInput | CalculationsCreateOrConnectWithoutUsersInput[]
    createMany?: CalculationsCreateManyUsersInputEnvelope
    connect?: CalculationsWhereUniqueInput | CalculationsWhereUniqueInput[]
  }

  export type CompanyVehiclesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<CompanyVehiclesCreateWithoutUsersInput, CompanyVehiclesUncheckedCreateWithoutUsersInput> | CompanyVehiclesCreateWithoutUsersInput[] | CompanyVehiclesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CompanyVehiclesCreateOrConnectWithoutUsersInput | CompanyVehiclesCreateOrConnectWithoutUsersInput[]
    createMany?: CompanyVehiclesCreateManyUsersInputEnvelope
    connect?: CompanyVehiclesWhereUniqueInput | CompanyVehiclesWhereUniqueInput[]
  }

  export type EmissionsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<EmissionsCreateWithoutUsersInput, EmissionsUncheckedCreateWithoutUsersInput> | EmissionsCreateWithoutUsersInput[] | EmissionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: EmissionsCreateOrConnectWithoutUsersInput | EmissionsCreateOrConnectWithoutUsersInput[]
    createMany?: EmissionsCreateManyUsersInputEnvelope
    connect?: EmissionsWhereUniqueInput | EmissionsWhereUniqueInput[]
  }

  export type CalculationsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CalculationsCreateWithoutUsersInput, CalculationsUncheckedCreateWithoutUsersInput> | CalculationsCreateWithoutUsersInput[] | CalculationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CalculationsCreateOrConnectWithoutUsersInput | CalculationsCreateOrConnectWithoutUsersInput[]
    upsert?: CalculationsUpsertWithWhereUniqueWithoutUsersInput | CalculationsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: CalculationsCreateManyUsersInputEnvelope
    set?: CalculationsWhereUniqueInput | CalculationsWhereUniqueInput[]
    disconnect?: CalculationsWhereUniqueInput | CalculationsWhereUniqueInput[]
    delete?: CalculationsWhereUniqueInput | CalculationsWhereUniqueInput[]
    connect?: CalculationsWhereUniqueInput | CalculationsWhereUniqueInput[]
    update?: CalculationsUpdateWithWhereUniqueWithoutUsersInput | CalculationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CalculationsUpdateManyWithWhereWithoutUsersInput | CalculationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CalculationsScalarWhereInput | CalculationsScalarWhereInput[]
  }

  export type CompanyVehiclesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CompanyVehiclesCreateWithoutUsersInput, CompanyVehiclesUncheckedCreateWithoutUsersInput> | CompanyVehiclesCreateWithoutUsersInput[] | CompanyVehiclesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CompanyVehiclesCreateOrConnectWithoutUsersInput | CompanyVehiclesCreateOrConnectWithoutUsersInput[]
    upsert?: CompanyVehiclesUpsertWithWhereUniqueWithoutUsersInput | CompanyVehiclesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: CompanyVehiclesCreateManyUsersInputEnvelope
    set?: CompanyVehiclesWhereUniqueInput | CompanyVehiclesWhereUniqueInput[]
    disconnect?: CompanyVehiclesWhereUniqueInput | CompanyVehiclesWhereUniqueInput[]
    delete?: CompanyVehiclesWhereUniqueInput | CompanyVehiclesWhereUniqueInput[]
    connect?: CompanyVehiclesWhereUniqueInput | CompanyVehiclesWhereUniqueInput[]
    update?: CompanyVehiclesUpdateWithWhereUniqueWithoutUsersInput | CompanyVehiclesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CompanyVehiclesUpdateManyWithWhereWithoutUsersInput | CompanyVehiclesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CompanyVehiclesScalarWhereInput | CompanyVehiclesScalarWhereInput[]
  }

  export type EmissionsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<EmissionsCreateWithoutUsersInput, EmissionsUncheckedCreateWithoutUsersInput> | EmissionsCreateWithoutUsersInput[] | EmissionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: EmissionsCreateOrConnectWithoutUsersInput | EmissionsCreateOrConnectWithoutUsersInput[]
    upsert?: EmissionsUpsertWithWhereUniqueWithoutUsersInput | EmissionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: EmissionsCreateManyUsersInputEnvelope
    set?: EmissionsWhereUniqueInput | EmissionsWhereUniqueInput[]
    disconnect?: EmissionsWhereUniqueInput | EmissionsWhereUniqueInput[]
    delete?: EmissionsWhereUniqueInput | EmissionsWhereUniqueInput[]
    connect?: EmissionsWhereUniqueInput | EmissionsWhereUniqueInput[]
    update?: EmissionsUpdateWithWhereUniqueWithoutUsersInput | EmissionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: EmissionsUpdateManyWithWhereWithoutUsersInput | EmissionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: EmissionsScalarWhereInput | EmissionsScalarWhereInput[]
  }

  export type CountriesUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<CountriesCreateWithoutUsersInput, CountriesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CountriesCreateOrConnectWithoutUsersInput
    upsert?: CountriesUpsertWithoutUsersInput
    connect?: CountriesWhereUniqueInput
    update?: XOR<XOR<CountriesUpdateToOneWithWhereWithoutUsersInput, CountriesUpdateWithoutUsersInput>, CountriesUncheckedUpdateWithoutUsersInput>
  }

  export type CalculationsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CalculationsCreateWithoutUsersInput, CalculationsUncheckedCreateWithoutUsersInput> | CalculationsCreateWithoutUsersInput[] | CalculationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CalculationsCreateOrConnectWithoutUsersInput | CalculationsCreateOrConnectWithoutUsersInput[]
    upsert?: CalculationsUpsertWithWhereUniqueWithoutUsersInput | CalculationsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: CalculationsCreateManyUsersInputEnvelope
    set?: CalculationsWhereUniqueInput | CalculationsWhereUniqueInput[]
    disconnect?: CalculationsWhereUniqueInput | CalculationsWhereUniqueInput[]
    delete?: CalculationsWhereUniqueInput | CalculationsWhereUniqueInput[]
    connect?: CalculationsWhereUniqueInput | CalculationsWhereUniqueInput[]
    update?: CalculationsUpdateWithWhereUniqueWithoutUsersInput | CalculationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CalculationsUpdateManyWithWhereWithoutUsersInput | CalculationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CalculationsScalarWhereInput | CalculationsScalarWhereInput[]
  }

  export type CompanyVehiclesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CompanyVehiclesCreateWithoutUsersInput, CompanyVehiclesUncheckedCreateWithoutUsersInput> | CompanyVehiclesCreateWithoutUsersInput[] | CompanyVehiclesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CompanyVehiclesCreateOrConnectWithoutUsersInput | CompanyVehiclesCreateOrConnectWithoutUsersInput[]
    upsert?: CompanyVehiclesUpsertWithWhereUniqueWithoutUsersInput | CompanyVehiclesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: CompanyVehiclesCreateManyUsersInputEnvelope
    set?: CompanyVehiclesWhereUniqueInput | CompanyVehiclesWhereUniqueInput[]
    disconnect?: CompanyVehiclesWhereUniqueInput | CompanyVehiclesWhereUniqueInput[]
    delete?: CompanyVehiclesWhereUniqueInput | CompanyVehiclesWhereUniqueInput[]
    connect?: CompanyVehiclesWhereUniqueInput | CompanyVehiclesWhereUniqueInput[]
    update?: CompanyVehiclesUpdateWithWhereUniqueWithoutUsersInput | CompanyVehiclesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CompanyVehiclesUpdateManyWithWhereWithoutUsersInput | CompanyVehiclesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CompanyVehiclesScalarWhereInput | CompanyVehiclesScalarWhereInput[]
  }

  export type EmissionsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<EmissionsCreateWithoutUsersInput, EmissionsUncheckedCreateWithoutUsersInput> | EmissionsCreateWithoutUsersInput[] | EmissionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: EmissionsCreateOrConnectWithoutUsersInput | EmissionsCreateOrConnectWithoutUsersInput[]
    upsert?: EmissionsUpsertWithWhereUniqueWithoutUsersInput | EmissionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: EmissionsCreateManyUsersInputEnvelope
    set?: EmissionsWhereUniqueInput | EmissionsWhereUniqueInput[]
    disconnect?: EmissionsWhereUniqueInput | EmissionsWhereUniqueInput[]
    delete?: EmissionsWhereUniqueInput | EmissionsWhereUniqueInput[]
    connect?: EmissionsWhereUniqueInput | EmissionsWhereUniqueInput[]
    update?: EmissionsUpdateWithWhereUniqueWithoutUsersInput | EmissionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: EmissionsUpdateManyWithWhereWithoutUsersInput | EmissionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: EmissionsScalarWhereInput | EmissionsScalarWhereInput[]
  }

  export type CompanyVehiclesCreateNestedOneWithoutVehicle_Fuel_RelationInput = {
    create?: XOR<CompanyVehiclesCreateWithoutVehicle_Fuel_RelationInput, CompanyVehiclesUncheckedCreateWithoutVehicle_Fuel_RelationInput>
    connectOrCreate?: CompanyVehiclesCreateOrConnectWithoutVehicle_Fuel_RelationInput
    connect?: CompanyVehiclesWhereUniqueInput
  }

  export type FuelCreateNestedOneWithoutVehicle_Fuel_RelationInput = {
    create?: XOR<FuelCreateWithoutVehicle_Fuel_RelationInput, FuelUncheckedCreateWithoutVehicle_Fuel_RelationInput>
    connectOrCreate?: FuelCreateOrConnectWithoutVehicle_Fuel_RelationInput
    connect?: FuelWhereUniqueInput
  }

  export type CompanyVehiclesUpdateOneRequiredWithoutVehicle_Fuel_RelationNestedInput = {
    create?: XOR<CompanyVehiclesCreateWithoutVehicle_Fuel_RelationInput, CompanyVehiclesUncheckedCreateWithoutVehicle_Fuel_RelationInput>
    connectOrCreate?: CompanyVehiclesCreateOrConnectWithoutVehicle_Fuel_RelationInput
    upsert?: CompanyVehiclesUpsertWithoutVehicle_Fuel_RelationInput
    connect?: CompanyVehiclesWhereUniqueInput
    update?: XOR<XOR<CompanyVehiclesUpdateToOneWithWhereWithoutVehicle_Fuel_RelationInput, CompanyVehiclesUpdateWithoutVehicle_Fuel_RelationInput>, CompanyVehiclesUncheckedUpdateWithoutVehicle_Fuel_RelationInput>
  }

  export type FuelUpdateOneRequiredWithoutVehicle_Fuel_RelationNestedInput = {
    create?: XOR<FuelCreateWithoutVehicle_Fuel_RelationInput, FuelUncheckedCreateWithoutVehicle_Fuel_RelationInput>
    connectOrCreate?: FuelCreateOrConnectWithoutVehicle_Fuel_RelationInput
    upsert?: FuelUpsertWithoutVehicle_Fuel_RelationInput
    connect?: FuelWhereUniqueInput
    update?: XOR<XOR<FuelUpdateToOneWithWhereWithoutVehicle_Fuel_RelationInput, FuelUpdateWithoutVehicle_Fuel_RelationInput>, FuelUncheckedUpdateWithoutVehicle_Fuel_RelationInput>
  }

  export type CountriesCreateNestedOneWithoutWaterInput = {
    create?: XOR<CountriesCreateWithoutWaterInput, CountriesUncheckedCreateWithoutWaterInput>
    connectOrCreate?: CountriesCreateOrConnectWithoutWaterInput
    connect?: CountriesWhereUniqueInput
  }

  export type EmissionCategoriesCreateNestedOneWithoutWaterInput = {
    create?: XOR<EmissionCategoriesCreateWithoutWaterInput, EmissionCategoriesUncheckedCreateWithoutWaterInput>
    connectOrCreate?: EmissionCategoriesCreateOrConnectWithoutWaterInput
    connect?: EmissionCategoriesWhereUniqueInput
  }

  export type EmissionFactorsCreateNestedOneWithoutWaterInput = {
    create?: XOR<EmissionFactorsCreateWithoutWaterInput, EmissionFactorsUncheckedCreateWithoutWaterInput>
    connectOrCreate?: EmissionFactorsCreateOrConnectWithoutWaterInput
    connect?: EmissionFactorsWhereUniqueInput
  }

  export type CountriesUpdateOneRequiredWithoutWaterNestedInput = {
    create?: XOR<CountriesCreateWithoutWaterInput, CountriesUncheckedCreateWithoutWaterInput>
    connectOrCreate?: CountriesCreateOrConnectWithoutWaterInput
    upsert?: CountriesUpsertWithoutWaterInput
    connect?: CountriesWhereUniqueInput
    update?: XOR<XOR<CountriesUpdateToOneWithWhereWithoutWaterInput, CountriesUpdateWithoutWaterInput>, CountriesUncheckedUpdateWithoutWaterInput>
  }

  export type EmissionCategoriesUpdateOneRequiredWithoutWaterNestedInput = {
    create?: XOR<EmissionCategoriesCreateWithoutWaterInput, EmissionCategoriesUncheckedCreateWithoutWaterInput>
    connectOrCreate?: EmissionCategoriesCreateOrConnectWithoutWaterInput
    upsert?: EmissionCategoriesUpsertWithoutWaterInput
    connect?: EmissionCategoriesWhereUniqueInput
    update?: XOR<XOR<EmissionCategoriesUpdateToOneWithWhereWithoutWaterInput, EmissionCategoriesUpdateWithoutWaterInput>, EmissionCategoriesUncheckedUpdateWithoutWaterInput>
  }

  export type EmissionFactorsUpdateOneRequiredWithoutWaterNestedInput = {
    create?: XOR<EmissionFactorsCreateWithoutWaterInput, EmissionFactorsUncheckedCreateWithoutWaterInput>
    connectOrCreate?: EmissionFactorsCreateOrConnectWithoutWaterInput
    upsert?: EmissionFactorsUpsertWithoutWaterInput
    connect?: EmissionFactorsWhereUniqueInput
    update?: XOR<XOR<EmissionFactorsUpdateToOneWithWhereWithoutWaterInput, EmissionFactorsUpdateWithoutWaterInput>, EmissionFactorsUncheckedUpdateWithoutWaterInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CountriesCreateWithoutCalculationsInput = {
    country_id: number
    country_name: string
    Electricity?: ElectricityCreateNestedManyWithoutCountriesInput
    EmissionFactors?: EmissionFactorsCreateNestedManyWithoutCountriesInput
    Emissions?: EmissionsCreateNestedManyWithoutCountriesInput
    Travel?: TravelCreateNestedManyWithoutCountriesInput
    Users?: UsersCreateNestedManyWithoutCountriesInput
    Water?: WaterCreateNestedManyWithoutCountriesInput
  }

  export type CountriesUncheckedCreateWithoutCalculationsInput = {
    country_id: number
    country_name: string
    Electricity?: ElectricityUncheckedCreateNestedManyWithoutCountriesInput
    EmissionFactors?: EmissionFactorsUncheckedCreateNestedManyWithoutCountriesInput
    Emissions?: EmissionsUncheckedCreateNestedManyWithoutCountriesInput
    Travel?: TravelUncheckedCreateNestedManyWithoutCountriesInput
    Users?: UsersUncheckedCreateNestedManyWithoutCountriesInput
    Water?: WaterUncheckedCreateNestedManyWithoutCountriesInput
  }

  export type CountriesCreateOrConnectWithoutCalculationsInput = {
    where: CountriesWhereUniqueInput
    create: XOR<CountriesCreateWithoutCalculationsInput, CountriesUncheckedCreateWithoutCalculationsInput>
  }

  export type EmissionFactorsCreateWithoutCalculationsInput = {
    factor_id: number
    subcategory?: string | null
    factor_num: Decimal | DecimalJsLike | number | string
    Electricity?: ElectricityCreateNestedManyWithoutEmissionFactorsInput
    Countries: CountriesCreateNestedOneWithoutEmissionFactorsInput
    EmissionCategories: EmissionCategoriesCreateNestedOneWithoutEmissionFactorsInput
    Travel?: TravelCreateNestedManyWithoutEmissionFactorsInput
    Water?: WaterCreateNestedManyWithoutEmissionFactorsInput
  }

  export type EmissionFactorsUncheckedCreateWithoutCalculationsInput = {
    factor_id: number
    category_id: number
    subcategory?: string | null
    country_id: number
    factor_num: Decimal | DecimalJsLike | number | string
    Electricity?: ElectricityUncheckedCreateNestedManyWithoutEmissionFactorsInput
    Travel?: TravelUncheckedCreateNestedManyWithoutEmissionFactorsInput
    Water?: WaterUncheckedCreateNestedManyWithoutEmissionFactorsInput
  }

  export type EmissionFactorsCreateOrConnectWithoutCalculationsInput = {
    where: EmissionFactorsWhereUniqueInput
    create: XOR<EmissionFactorsCreateWithoutCalculationsInput, EmissionFactorsUncheckedCreateWithoutCalculationsInput>
  }

  export type UsersCreateWithoutCalculationsInput = {
    user_id: number
    user_name: string
    user_company: string
    user_email: string
    CompanyVehicles?: CompanyVehiclesCreateNestedManyWithoutUsersInput
    Emissions?: EmissionsCreateNestedManyWithoutUsersInput
    Countries: CountriesCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutCalculationsInput = {
    user_id: number
    user_name: string
    user_company: string
    user_email: string
    country_id: number
    CompanyVehicles?: CompanyVehiclesUncheckedCreateNestedManyWithoutUsersInput
    Emissions?: EmissionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutCalculationsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCalculationsInput, UsersUncheckedCreateWithoutCalculationsInput>
  }

  export type CountriesUpsertWithoutCalculationsInput = {
    update: XOR<CountriesUpdateWithoutCalculationsInput, CountriesUncheckedUpdateWithoutCalculationsInput>
    create: XOR<CountriesCreateWithoutCalculationsInput, CountriesUncheckedCreateWithoutCalculationsInput>
    where?: CountriesWhereInput
  }

  export type CountriesUpdateToOneWithWhereWithoutCalculationsInput = {
    where?: CountriesWhereInput
    data: XOR<CountriesUpdateWithoutCalculationsInput, CountriesUncheckedUpdateWithoutCalculationsInput>
  }

  export type CountriesUpdateWithoutCalculationsInput = {
    country_id?: IntFieldUpdateOperationsInput | number
    country_name?: StringFieldUpdateOperationsInput | string
    Electricity?: ElectricityUpdateManyWithoutCountriesNestedInput
    EmissionFactors?: EmissionFactorsUpdateManyWithoutCountriesNestedInput
    Emissions?: EmissionsUpdateManyWithoutCountriesNestedInput
    Travel?: TravelUpdateManyWithoutCountriesNestedInput
    Users?: UsersUpdateManyWithoutCountriesNestedInput
    Water?: WaterUpdateManyWithoutCountriesNestedInput
  }

  export type CountriesUncheckedUpdateWithoutCalculationsInput = {
    country_id?: IntFieldUpdateOperationsInput | number
    country_name?: StringFieldUpdateOperationsInput | string
    Electricity?: ElectricityUncheckedUpdateManyWithoutCountriesNestedInput
    EmissionFactors?: EmissionFactorsUncheckedUpdateManyWithoutCountriesNestedInput
    Emissions?: EmissionsUncheckedUpdateManyWithoutCountriesNestedInput
    Travel?: TravelUncheckedUpdateManyWithoutCountriesNestedInput
    Users?: UsersUncheckedUpdateManyWithoutCountriesNestedInput
    Water?: WaterUncheckedUpdateManyWithoutCountriesNestedInput
  }

  export type EmissionFactorsUpsertWithoutCalculationsInput = {
    update: XOR<EmissionFactorsUpdateWithoutCalculationsInput, EmissionFactorsUncheckedUpdateWithoutCalculationsInput>
    create: XOR<EmissionFactorsCreateWithoutCalculationsInput, EmissionFactorsUncheckedCreateWithoutCalculationsInput>
    where?: EmissionFactorsWhereInput
  }

  export type EmissionFactorsUpdateToOneWithWhereWithoutCalculationsInput = {
    where?: EmissionFactorsWhereInput
    data: XOR<EmissionFactorsUpdateWithoutCalculationsInput, EmissionFactorsUncheckedUpdateWithoutCalculationsInput>
  }

  export type EmissionFactorsUpdateWithoutCalculationsInput = {
    factor_id?: IntFieldUpdateOperationsInput | number
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    factor_num?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Electricity?: ElectricityUpdateManyWithoutEmissionFactorsNestedInput
    Countries?: CountriesUpdateOneRequiredWithoutEmissionFactorsNestedInput
    EmissionCategories?: EmissionCategoriesUpdateOneRequiredWithoutEmissionFactorsNestedInput
    Travel?: TravelUpdateManyWithoutEmissionFactorsNestedInput
    Water?: WaterUpdateManyWithoutEmissionFactorsNestedInput
  }

  export type EmissionFactorsUncheckedUpdateWithoutCalculationsInput = {
    factor_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    country_id?: IntFieldUpdateOperationsInput | number
    factor_num?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Electricity?: ElectricityUncheckedUpdateManyWithoutEmissionFactorsNestedInput
    Travel?: TravelUncheckedUpdateManyWithoutEmissionFactorsNestedInput
    Water?: WaterUncheckedUpdateManyWithoutEmissionFactorsNestedInput
  }

  export type UsersUpsertWithoutCalculationsInput = {
    update: XOR<UsersUpdateWithoutCalculationsInput, UsersUncheckedUpdateWithoutCalculationsInput>
    create: XOR<UsersCreateWithoutCalculationsInput, UsersUncheckedCreateWithoutCalculationsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCalculationsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCalculationsInput, UsersUncheckedUpdateWithoutCalculationsInput>
  }

  export type UsersUpdateWithoutCalculationsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_company?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    CompanyVehicles?: CompanyVehiclesUpdateManyWithoutUsersNestedInput
    Emissions?: EmissionsUpdateManyWithoutUsersNestedInput
    Countries?: CountriesUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutCalculationsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_company?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    country_id?: IntFieldUpdateOperationsInput | number
    CompanyVehicles?: CompanyVehiclesUncheckedUpdateManyWithoutUsersNestedInput
    Emissions?: EmissionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateWithoutCompanyVehiclesInput = {
    user_id: number
    user_name: string
    user_company: string
    user_email: string
    Calculations?: CalculationsCreateNestedManyWithoutUsersInput
    Emissions?: EmissionsCreateNestedManyWithoutUsersInput
    Countries: CountriesCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutCompanyVehiclesInput = {
    user_id: number
    user_name: string
    user_company: string
    user_email: string
    country_id: number
    Calculations?: CalculationsUncheckedCreateNestedManyWithoutUsersInput
    Emissions?: EmissionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutCompanyVehiclesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCompanyVehiclesInput, UsersUncheckedCreateWithoutCompanyVehiclesInput>
  }

  export type Vehicle_Fuel_RelationCreateWithoutCompanyVehiclesInput = {
    vehicle_fuel_relation_id: string
    Fuel: FuelCreateNestedOneWithoutVehicle_Fuel_RelationInput
  }

  export type Vehicle_Fuel_RelationUncheckedCreateWithoutCompanyVehiclesInput = {
    fuel_id: number
    vehicle_fuel_relation_id: string
  }

  export type Vehicle_Fuel_RelationCreateOrConnectWithoutCompanyVehiclesInput = {
    where: Vehicle_Fuel_RelationWhereUniqueInput
    create: XOR<Vehicle_Fuel_RelationCreateWithoutCompanyVehiclesInput, Vehicle_Fuel_RelationUncheckedCreateWithoutCompanyVehiclesInput>
  }

  export type Vehicle_Fuel_RelationCreateManyCompanyVehiclesInputEnvelope = {
    data: Vehicle_Fuel_RelationCreateManyCompanyVehiclesInput | Vehicle_Fuel_RelationCreateManyCompanyVehiclesInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutCompanyVehiclesInput = {
    update: XOR<UsersUpdateWithoutCompanyVehiclesInput, UsersUncheckedUpdateWithoutCompanyVehiclesInput>
    create: XOR<UsersCreateWithoutCompanyVehiclesInput, UsersUncheckedCreateWithoutCompanyVehiclesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCompanyVehiclesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCompanyVehiclesInput, UsersUncheckedUpdateWithoutCompanyVehiclesInput>
  }

  export type UsersUpdateWithoutCompanyVehiclesInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_company?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    Calculations?: CalculationsUpdateManyWithoutUsersNestedInput
    Emissions?: EmissionsUpdateManyWithoutUsersNestedInput
    Countries?: CountriesUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutCompanyVehiclesInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_company?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    country_id?: IntFieldUpdateOperationsInput | number
    Calculations?: CalculationsUncheckedUpdateManyWithoutUsersNestedInput
    Emissions?: EmissionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type Vehicle_Fuel_RelationUpsertWithWhereUniqueWithoutCompanyVehiclesInput = {
    where: Vehicle_Fuel_RelationWhereUniqueInput
    update: XOR<Vehicle_Fuel_RelationUpdateWithoutCompanyVehiclesInput, Vehicle_Fuel_RelationUncheckedUpdateWithoutCompanyVehiclesInput>
    create: XOR<Vehicle_Fuel_RelationCreateWithoutCompanyVehiclesInput, Vehicle_Fuel_RelationUncheckedCreateWithoutCompanyVehiclesInput>
  }

  export type Vehicle_Fuel_RelationUpdateWithWhereUniqueWithoutCompanyVehiclesInput = {
    where: Vehicle_Fuel_RelationWhereUniqueInput
    data: XOR<Vehicle_Fuel_RelationUpdateWithoutCompanyVehiclesInput, Vehicle_Fuel_RelationUncheckedUpdateWithoutCompanyVehiclesInput>
  }

  export type Vehicle_Fuel_RelationUpdateManyWithWhereWithoutCompanyVehiclesInput = {
    where: Vehicle_Fuel_RelationScalarWhereInput
    data: XOR<Vehicle_Fuel_RelationUpdateManyMutationInput, Vehicle_Fuel_RelationUncheckedUpdateManyWithoutCompanyVehiclesInput>
  }

  export type Vehicle_Fuel_RelationScalarWhereInput = {
    AND?: Vehicle_Fuel_RelationScalarWhereInput | Vehicle_Fuel_RelationScalarWhereInput[]
    OR?: Vehicle_Fuel_RelationScalarWhereInput[]
    NOT?: Vehicle_Fuel_RelationScalarWhereInput | Vehicle_Fuel_RelationScalarWhereInput[]
    vehicle_id?: IntFilter<"Vehicle_Fuel_Relation"> | number
    fuel_id?: FloatFilter<"Vehicle_Fuel_Relation"> | number
    vehicle_fuel_relation_id?: StringFilter<"Vehicle_Fuel_Relation"> | string
  }

  export type CalculationsCreateWithoutCountriesInput = {
    calculation_id: string
    EmissionFactors: EmissionFactorsCreateNestedOneWithoutCalculationsInput
    Users: UsersCreateNestedOneWithoutCalculationsInput
  }

  export type CalculationsUncheckedCreateWithoutCountriesInput = {
    user_id: number
    factor_id: number
    calculation_id: string
  }

  export type CalculationsCreateOrConnectWithoutCountriesInput = {
    where: CalculationsWhereUniqueInput
    create: XOR<CalculationsCreateWithoutCountriesInput, CalculationsUncheckedCreateWithoutCountriesInput>
  }

  export type CalculationsCreateManyCountriesInputEnvelope = {
    data: CalculationsCreateManyCountriesInput | CalculationsCreateManyCountriesInput[]
    skipDuplicates?: boolean
  }

  export type ElectricityCreateWithoutCountriesInput = {
    electricity_id: number
    electricity_type: string
    electricity_use: number
    EmissionCategories: EmissionCategoriesCreateNestedOneWithoutElectricityInput
    EmissionFactors: EmissionFactorsCreateNestedOneWithoutElectricityInput
  }

  export type ElectricityUncheckedCreateWithoutCountriesInput = {
    electricity_id: number
    electricity_type: string
    electricity_use: number
    category_id: number
    factor_id: number
  }

  export type ElectricityCreateOrConnectWithoutCountriesInput = {
    where: ElectricityWhereUniqueInput
    create: XOR<ElectricityCreateWithoutCountriesInput, ElectricityUncheckedCreateWithoutCountriesInput>
  }

  export type ElectricityCreateManyCountriesInputEnvelope = {
    data: ElectricityCreateManyCountriesInput | ElectricityCreateManyCountriesInput[]
    skipDuplicates?: boolean
  }

  export type EmissionFactorsCreateWithoutCountriesInput = {
    factor_id: number
    subcategory?: string | null
    factor_num: Decimal | DecimalJsLike | number | string
    Calculations?: CalculationsCreateNestedManyWithoutEmissionFactorsInput
    Electricity?: ElectricityCreateNestedManyWithoutEmissionFactorsInput
    EmissionCategories: EmissionCategoriesCreateNestedOneWithoutEmissionFactorsInput
    Travel?: TravelCreateNestedManyWithoutEmissionFactorsInput
    Water?: WaterCreateNestedManyWithoutEmissionFactorsInput
  }

  export type EmissionFactorsUncheckedCreateWithoutCountriesInput = {
    factor_id: number
    category_id: number
    subcategory?: string | null
    factor_num: Decimal | DecimalJsLike | number | string
    Calculations?: CalculationsUncheckedCreateNestedManyWithoutEmissionFactorsInput
    Electricity?: ElectricityUncheckedCreateNestedManyWithoutEmissionFactorsInput
    Travel?: TravelUncheckedCreateNestedManyWithoutEmissionFactorsInput
    Water?: WaterUncheckedCreateNestedManyWithoutEmissionFactorsInput
  }

  export type EmissionFactorsCreateOrConnectWithoutCountriesInput = {
    where: EmissionFactorsWhereUniqueInput
    create: XOR<EmissionFactorsCreateWithoutCountriesInput, EmissionFactorsUncheckedCreateWithoutCountriesInput>
  }

  export type EmissionFactorsCreateManyCountriesInputEnvelope = {
    data: EmissionFactorsCreateManyCountriesInput | EmissionFactorsCreateManyCountriesInput[]
    skipDuplicates?: boolean
  }

  export type EmissionsCreateWithoutCountriesInput = {
    emission_value: Decimal | DecimalJsLike | number | string
    EmissionCategories: EmissionCategoriesCreateNestedOneWithoutEmissionsInput
    Users: UsersCreateNestedOneWithoutEmissionsInput
  }

  export type EmissionsUncheckedCreateWithoutCountriesInput = {
    emission_id?: number
    user_id: number
    category_id: number
    emission_value: Decimal | DecimalJsLike | number | string
  }

  export type EmissionsCreateOrConnectWithoutCountriesInput = {
    where: EmissionsWhereUniqueInput
    create: XOR<EmissionsCreateWithoutCountriesInput, EmissionsUncheckedCreateWithoutCountriesInput>
  }

  export type EmissionsCreateManyCountriesInputEnvelope = {
    data: EmissionsCreateManyCountriesInput | EmissionsCreateManyCountriesInput[]
    skipDuplicates?: boolean
  }

  export type TravelCreateWithoutCountriesInput = {
    travel_id: number
    travel_type: string
    travel_mileage: number
    EmissionCategories: EmissionCategoriesCreateNestedOneWithoutTravelInput
    EmissionFactors: EmissionFactorsCreateNestedOneWithoutTravelInput
  }

  export type TravelUncheckedCreateWithoutCountriesInput = {
    travel_id: number
    travel_type: string
    travel_mileage: number
    emission_id: number
    factor_id: number
  }

  export type TravelCreateOrConnectWithoutCountriesInput = {
    where: TravelWhereUniqueInput
    create: XOR<TravelCreateWithoutCountriesInput, TravelUncheckedCreateWithoutCountriesInput>
  }

  export type TravelCreateManyCountriesInputEnvelope = {
    data: TravelCreateManyCountriesInput | TravelCreateManyCountriesInput[]
    skipDuplicates?: boolean
  }

  export type UsersCreateWithoutCountriesInput = {
    user_id: number
    user_name: string
    user_company: string
    user_email: string
    Calculations?: CalculationsCreateNestedManyWithoutUsersInput
    CompanyVehicles?: CompanyVehiclesCreateNestedManyWithoutUsersInput
    Emissions?: EmissionsCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutCountriesInput = {
    user_id: number
    user_name: string
    user_company: string
    user_email: string
    Calculations?: CalculationsUncheckedCreateNestedManyWithoutUsersInput
    CompanyVehicles?: CompanyVehiclesUncheckedCreateNestedManyWithoutUsersInput
    Emissions?: EmissionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutCountriesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCountriesInput, UsersUncheckedCreateWithoutCountriesInput>
  }

  export type UsersCreateManyCountriesInputEnvelope = {
    data: UsersCreateManyCountriesInput | UsersCreateManyCountriesInput[]
    skipDuplicates?: boolean
  }

  export type WaterCreateWithoutCountriesInput = {
    water_id?: number | null
    water_use: number
    EmissionCategories: EmissionCategoriesCreateNestedOneWithoutWaterInput
    EmissionFactors: EmissionFactorsCreateNestedOneWithoutWaterInput
  }

  export type WaterUncheckedCreateWithoutCountriesInput = {
    water_id?: number | null
    water_use: number
    emission_id: number
    factor_id: number
  }

  export type WaterCreateOrConnectWithoutCountriesInput = {
    where: WaterWhereUniqueInput
    create: XOR<WaterCreateWithoutCountriesInput, WaterUncheckedCreateWithoutCountriesInput>
  }

  export type WaterCreateManyCountriesInputEnvelope = {
    data: WaterCreateManyCountriesInput | WaterCreateManyCountriesInput[]
    skipDuplicates?: boolean
  }

  export type CalculationsUpsertWithWhereUniqueWithoutCountriesInput = {
    where: CalculationsWhereUniqueInput
    update: XOR<CalculationsUpdateWithoutCountriesInput, CalculationsUncheckedUpdateWithoutCountriesInput>
    create: XOR<CalculationsCreateWithoutCountriesInput, CalculationsUncheckedCreateWithoutCountriesInput>
  }

  export type CalculationsUpdateWithWhereUniqueWithoutCountriesInput = {
    where: CalculationsWhereUniqueInput
    data: XOR<CalculationsUpdateWithoutCountriesInput, CalculationsUncheckedUpdateWithoutCountriesInput>
  }

  export type CalculationsUpdateManyWithWhereWithoutCountriesInput = {
    where: CalculationsScalarWhereInput
    data: XOR<CalculationsUpdateManyMutationInput, CalculationsUncheckedUpdateManyWithoutCountriesInput>
  }

  export type CalculationsScalarWhereInput = {
    AND?: CalculationsScalarWhereInput | CalculationsScalarWhereInput[]
    OR?: CalculationsScalarWhereInput[]
    NOT?: CalculationsScalarWhereInput | CalculationsScalarWhereInput[]
    user_id?: IntFilter<"Calculations"> | number
    country_id?: IntFilter<"Calculations"> | number
    factor_id?: IntFilter<"Calculations"> | number
    calculation_id?: StringFilter<"Calculations"> | string
  }

  export type ElectricityUpsertWithWhereUniqueWithoutCountriesInput = {
    where: ElectricityWhereUniqueInput
    update: XOR<ElectricityUpdateWithoutCountriesInput, ElectricityUncheckedUpdateWithoutCountriesInput>
    create: XOR<ElectricityCreateWithoutCountriesInput, ElectricityUncheckedCreateWithoutCountriesInput>
  }

  export type ElectricityUpdateWithWhereUniqueWithoutCountriesInput = {
    where: ElectricityWhereUniqueInput
    data: XOR<ElectricityUpdateWithoutCountriesInput, ElectricityUncheckedUpdateWithoutCountriesInput>
  }

  export type ElectricityUpdateManyWithWhereWithoutCountriesInput = {
    where: ElectricityScalarWhereInput
    data: XOR<ElectricityUpdateManyMutationInput, ElectricityUncheckedUpdateManyWithoutCountriesInput>
  }

  export type ElectricityScalarWhereInput = {
    AND?: ElectricityScalarWhereInput | ElectricityScalarWhereInput[]
    OR?: ElectricityScalarWhereInput[]
    NOT?: ElectricityScalarWhereInput | ElectricityScalarWhereInput[]
    electricity_id?: IntFilter<"Electricity"> | number
    electricity_type?: StringFilter<"Electricity"> | string
    electricity_use?: FloatFilter<"Electricity"> | number
    country_id?: IntFilter<"Electricity"> | number
    category_id?: IntFilter<"Electricity"> | number
    factor_id?: IntFilter<"Electricity"> | number
  }

  export type EmissionFactorsUpsertWithWhereUniqueWithoutCountriesInput = {
    where: EmissionFactorsWhereUniqueInput
    update: XOR<EmissionFactorsUpdateWithoutCountriesInput, EmissionFactorsUncheckedUpdateWithoutCountriesInput>
    create: XOR<EmissionFactorsCreateWithoutCountriesInput, EmissionFactorsUncheckedCreateWithoutCountriesInput>
  }

  export type EmissionFactorsUpdateWithWhereUniqueWithoutCountriesInput = {
    where: EmissionFactorsWhereUniqueInput
    data: XOR<EmissionFactorsUpdateWithoutCountriesInput, EmissionFactorsUncheckedUpdateWithoutCountriesInput>
  }

  export type EmissionFactorsUpdateManyWithWhereWithoutCountriesInput = {
    where: EmissionFactorsScalarWhereInput
    data: XOR<EmissionFactorsUpdateManyMutationInput, EmissionFactorsUncheckedUpdateManyWithoutCountriesInput>
  }

  export type EmissionFactorsScalarWhereInput = {
    AND?: EmissionFactorsScalarWhereInput | EmissionFactorsScalarWhereInput[]
    OR?: EmissionFactorsScalarWhereInput[]
    NOT?: EmissionFactorsScalarWhereInput | EmissionFactorsScalarWhereInput[]
    factor_id?: IntFilter<"EmissionFactors"> | number
    category_id?: IntFilter<"EmissionFactors"> | number
    subcategory?: StringNullableFilter<"EmissionFactors"> | string | null
    country_id?: IntFilter<"EmissionFactors"> | number
    factor_num?: DecimalFilter<"EmissionFactors"> | Decimal | DecimalJsLike | number | string
  }

  export type EmissionsUpsertWithWhereUniqueWithoutCountriesInput = {
    where: EmissionsWhereUniqueInput
    update: XOR<EmissionsUpdateWithoutCountriesInput, EmissionsUncheckedUpdateWithoutCountriesInput>
    create: XOR<EmissionsCreateWithoutCountriesInput, EmissionsUncheckedCreateWithoutCountriesInput>
  }

  export type EmissionsUpdateWithWhereUniqueWithoutCountriesInput = {
    where: EmissionsWhereUniqueInput
    data: XOR<EmissionsUpdateWithoutCountriesInput, EmissionsUncheckedUpdateWithoutCountriesInput>
  }

  export type EmissionsUpdateManyWithWhereWithoutCountriesInput = {
    where: EmissionsScalarWhereInput
    data: XOR<EmissionsUpdateManyMutationInput, EmissionsUncheckedUpdateManyWithoutCountriesInput>
  }

  export type EmissionsScalarWhereInput = {
    AND?: EmissionsScalarWhereInput | EmissionsScalarWhereInput[]
    OR?: EmissionsScalarWhereInput[]
    NOT?: EmissionsScalarWhereInput | EmissionsScalarWhereInput[]
    emission_id?: IntFilter<"Emissions"> | number
    user_id?: IntFilter<"Emissions"> | number
    country_id?: IntFilter<"Emissions"> | number
    category_id?: IntFilter<"Emissions"> | number
    emission_value?: DecimalFilter<"Emissions"> | Decimal | DecimalJsLike | number | string
  }

  export type TravelUpsertWithWhereUniqueWithoutCountriesInput = {
    where: TravelWhereUniqueInput
    update: XOR<TravelUpdateWithoutCountriesInput, TravelUncheckedUpdateWithoutCountriesInput>
    create: XOR<TravelCreateWithoutCountriesInput, TravelUncheckedCreateWithoutCountriesInput>
  }

  export type TravelUpdateWithWhereUniqueWithoutCountriesInput = {
    where: TravelWhereUniqueInput
    data: XOR<TravelUpdateWithoutCountriesInput, TravelUncheckedUpdateWithoutCountriesInput>
  }

  export type TravelUpdateManyWithWhereWithoutCountriesInput = {
    where: TravelScalarWhereInput
    data: XOR<TravelUpdateManyMutationInput, TravelUncheckedUpdateManyWithoutCountriesInput>
  }

  export type TravelScalarWhereInput = {
    AND?: TravelScalarWhereInput | TravelScalarWhereInput[]
    OR?: TravelScalarWhereInput[]
    NOT?: TravelScalarWhereInput | TravelScalarWhereInput[]
    travel_id?: IntFilter<"Travel"> | number
    travel_type?: StringFilter<"Travel"> | string
    travel_mileage?: IntFilter<"Travel"> | number
    country_id?: IntFilter<"Travel"> | number
    emission_id?: IntFilter<"Travel"> | number
    factor_id?: IntFilter<"Travel"> | number
  }

  export type UsersUpsertWithWhereUniqueWithoutCountriesInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutCountriesInput, UsersUncheckedUpdateWithoutCountriesInput>
    create: XOR<UsersCreateWithoutCountriesInput, UsersUncheckedCreateWithoutCountriesInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutCountriesInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutCountriesInput, UsersUncheckedUpdateWithoutCountriesInput>
  }

  export type UsersUpdateManyWithWhereWithoutCountriesInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutCountriesInput>
  }

  export type UsersScalarWhereInput = {
    AND?: UsersScalarWhereInput | UsersScalarWhereInput[]
    OR?: UsersScalarWhereInput[]
    NOT?: UsersScalarWhereInput | UsersScalarWhereInput[]
    user_id?: IntFilter<"Users"> | number
    user_name?: StringFilter<"Users"> | string
    user_company?: StringFilter<"Users"> | string
    user_email?: StringFilter<"Users"> | string
    country_id?: IntFilter<"Users"> | number
  }

  export type WaterUpsertWithWhereUniqueWithoutCountriesInput = {
    where: WaterWhereUniqueInput
    update: XOR<WaterUpdateWithoutCountriesInput, WaterUncheckedUpdateWithoutCountriesInput>
    create: XOR<WaterCreateWithoutCountriesInput, WaterUncheckedCreateWithoutCountriesInput>
  }

  export type WaterUpdateWithWhereUniqueWithoutCountriesInput = {
    where: WaterWhereUniqueInput
    data: XOR<WaterUpdateWithoutCountriesInput, WaterUncheckedUpdateWithoutCountriesInput>
  }

  export type WaterUpdateManyWithWhereWithoutCountriesInput = {
    where: WaterScalarWhereInput
    data: XOR<WaterUpdateManyMutationInput, WaterUncheckedUpdateManyWithoutCountriesInput>
  }

  export type WaterScalarWhereInput = {
    AND?: WaterScalarWhereInput | WaterScalarWhereInput[]
    OR?: WaterScalarWhereInput[]
    NOT?: WaterScalarWhereInput | WaterScalarWhereInput[]
    water_id?: IntNullableFilter<"Water"> | number | null
    water_use?: IntFilter<"Water"> | number
    country_id?: IntFilter<"Water"> | number
    emission_id?: IntFilter<"Water"> | number
    factor_id?: IntFilter<"Water"> | number
  }

  export type CountriesCreateWithoutElectricityInput = {
    country_id: number
    country_name: string
    Calculations?: CalculationsCreateNestedManyWithoutCountriesInput
    EmissionFactors?: EmissionFactorsCreateNestedManyWithoutCountriesInput
    Emissions?: EmissionsCreateNestedManyWithoutCountriesInput
    Travel?: TravelCreateNestedManyWithoutCountriesInput
    Users?: UsersCreateNestedManyWithoutCountriesInput
    Water?: WaterCreateNestedManyWithoutCountriesInput
  }

  export type CountriesUncheckedCreateWithoutElectricityInput = {
    country_id: number
    country_name: string
    Calculations?: CalculationsUncheckedCreateNestedManyWithoutCountriesInput
    EmissionFactors?: EmissionFactorsUncheckedCreateNestedManyWithoutCountriesInput
    Emissions?: EmissionsUncheckedCreateNestedManyWithoutCountriesInput
    Travel?: TravelUncheckedCreateNestedManyWithoutCountriesInput
    Users?: UsersUncheckedCreateNestedManyWithoutCountriesInput
    Water?: WaterUncheckedCreateNestedManyWithoutCountriesInput
  }

  export type CountriesCreateOrConnectWithoutElectricityInput = {
    where: CountriesWhereUniqueInput
    create: XOR<CountriesCreateWithoutElectricityInput, CountriesUncheckedCreateWithoutElectricityInput>
  }

  export type EmissionCategoriesCreateWithoutElectricityInput = {
    category_id: number
    category_name: string
    EmissionFactors?: EmissionFactorsCreateNestedManyWithoutEmissionCategoriesInput
    Emissions?: EmissionsCreateNestedManyWithoutEmissionCategoriesInput
    Fuel?: FuelCreateNestedManyWithoutEmissionCategoriesInput
    Travel?: TravelCreateNestedManyWithoutEmissionCategoriesInput
    Water?: WaterCreateNestedManyWithoutEmissionCategoriesInput
  }

  export type EmissionCategoriesUncheckedCreateWithoutElectricityInput = {
    category_id: number
    category_name: string
    EmissionFactors?: EmissionFactorsUncheckedCreateNestedManyWithoutEmissionCategoriesInput
    Emissions?: EmissionsUncheckedCreateNestedManyWithoutEmissionCategoriesInput
    Fuel?: FuelUncheckedCreateNestedManyWithoutEmissionCategoriesInput
    Travel?: TravelUncheckedCreateNestedManyWithoutEmissionCategoriesInput
    Water?: WaterUncheckedCreateNestedManyWithoutEmissionCategoriesInput
  }

  export type EmissionCategoriesCreateOrConnectWithoutElectricityInput = {
    where: EmissionCategoriesWhereUniqueInput
    create: XOR<EmissionCategoriesCreateWithoutElectricityInput, EmissionCategoriesUncheckedCreateWithoutElectricityInput>
  }

  export type EmissionFactorsCreateWithoutElectricityInput = {
    factor_id: number
    subcategory?: string | null
    factor_num: Decimal | DecimalJsLike | number | string
    Calculations?: CalculationsCreateNestedManyWithoutEmissionFactorsInput
    Countries: CountriesCreateNestedOneWithoutEmissionFactorsInput
    EmissionCategories: EmissionCategoriesCreateNestedOneWithoutEmissionFactorsInput
    Travel?: TravelCreateNestedManyWithoutEmissionFactorsInput
    Water?: WaterCreateNestedManyWithoutEmissionFactorsInput
  }

  export type EmissionFactorsUncheckedCreateWithoutElectricityInput = {
    factor_id: number
    category_id: number
    subcategory?: string | null
    country_id: number
    factor_num: Decimal | DecimalJsLike | number | string
    Calculations?: CalculationsUncheckedCreateNestedManyWithoutEmissionFactorsInput
    Travel?: TravelUncheckedCreateNestedManyWithoutEmissionFactorsInput
    Water?: WaterUncheckedCreateNestedManyWithoutEmissionFactorsInput
  }

  export type EmissionFactorsCreateOrConnectWithoutElectricityInput = {
    where: EmissionFactorsWhereUniqueInput
    create: XOR<EmissionFactorsCreateWithoutElectricityInput, EmissionFactorsUncheckedCreateWithoutElectricityInput>
  }

  export type CountriesUpsertWithoutElectricityInput = {
    update: XOR<CountriesUpdateWithoutElectricityInput, CountriesUncheckedUpdateWithoutElectricityInput>
    create: XOR<CountriesCreateWithoutElectricityInput, CountriesUncheckedCreateWithoutElectricityInput>
    where?: CountriesWhereInput
  }

  export type CountriesUpdateToOneWithWhereWithoutElectricityInput = {
    where?: CountriesWhereInput
    data: XOR<CountriesUpdateWithoutElectricityInput, CountriesUncheckedUpdateWithoutElectricityInput>
  }

  export type CountriesUpdateWithoutElectricityInput = {
    country_id?: IntFieldUpdateOperationsInput | number
    country_name?: StringFieldUpdateOperationsInput | string
    Calculations?: CalculationsUpdateManyWithoutCountriesNestedInput
    EmissionFactors?: EmissionFactorsUpdateManyWithoutCountriesNestedInput
    Emissions?: EmissionsUpdateManyWithoutCountriesNestedInput
    Travel?: TravelUpdateManyWithoutCountriesNestedInput
    Users?: UsersUpdateManyWithoutCountriesNestedInput
    Water?: WaterUpdateManyWithoutCountriesNestedInput
  }

  export type CountriesUncheckedUpdateWithoutElectricityInput = {
    country_id?: IntFieldUpdateOperationsInput | number
    country_name?: StringFieldUpdateOperationsInput | string
    Calculations?: CalculationsUncheckedUpdateManyWithoutCountriesNestedInput
    EmissionFactors?: EmissionFactorsUncheckedUpdateManyWithoutCountriesNestedInput
    Emissions?: EmissionsUncheckedUpdateManyWithoutCountriesNestedInput
    Travel?: TravelUncheckedUpdateManyWithoutCountriesNestedInput
    Users?: UsersUncheckedUpdateManyWithoutCountriesNestedInput
    Water?: WaterUncheckedUpdateManyWithoutCountriesNestedInput
  }

  export type EmissionCategoriesUpsertWithoutElectricityInput = {
    update: XOR<EmissionCategoriesUpdateWithoutElectricityInput, EmissionCategoriesUncheckedUpdateWithoutElectricityInput>
    create: XOR<EmissionCategoriesCreateWithoutElectricityInput, EmissionCategoriesUncheckedCreateWithoutElectricityInput>
    where?: EmissionCategoriesWhereInput
  }

  export type EmissionCategoriesUpdateToOneWithWhereWithoutElectricityInput = {
    where?: EmissionCategoriesWhereInput
    data: XOR<EmissionCategoriesUpdateWithoutElectricityInput, EmissionCategoriesUncheckedUpdateWithoutElectricityInput>
  }

  export type EmissionCategoriesUpdateWithoutElectricityInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    EmissionFactors?: EmissionFactorsUpdateManyWithoutEmissionCategoriesNestedInput
    Emissions?: EmissionsUpdateManyWithoutEmissionCategoriesNestedInput
    Fuel?: FuelUpdateManyWithoutEmissionCategoriesNestedInput
    Travel?: TravelUpdateManyWithoutEmissionCategoriesNestedInput
    Water?: WaterUpdateManyWithoutEmissionCategoriesNestedInput
  }

  export type EmissionCategoriesUncheckedUpdateWithoutElectricityInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    EmissionFactors?: EmissionFactorsUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
    Emissions?: EmissionsUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
    Fuel?: FuelUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
    Travel?: TravelUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
    Water?: WaterUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
  }

  export type EmissionFactorsUpsertWithoutElectricityInput = {
    update: XOR<EmissionFactorsUpdateWithoutElectricityInput, EmissionFactorsUncheckedUpdateWithoutElectricityInput>
    create: XOR<EmissionFactorsCreateWithoutElectricityInput, EmissionFactorsUncheckedCreateWithoutElectricityInput>
    where?: EmissionFactorsWhereInput
  }

  export type EmissionFactorsUpdateToOneWithWhereWithoutElectricityInput = {
    where?: EmissionFactorsWhereInput
    data: XOR<EmissionFactorsUpdateWithoutElectricityInput, EmissionFactorsUncheckedUpdateWithoutElectricityInput>
  }

  export type EmissionFactorsUpdateWithoutElectricityInput = {
    factor_id?: IntFieldUpdateOperationsInput | number
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    factor_num?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Calculations?: CalculationsUpdateManyWithoutEmissionFactorsNestedInput
    Countries?: CountriesUpdateOneRequiredWithoutEmissionFactorsNestedInput
    EmissionCategories?: EmissionCategoriesUpdateOneRequiredWithoutEmissionFactorsNestedInput
    Travel?: TravelUpdateManyWithoutEmissionFactorsNestedInput
    Water?: WaterUpdateManyWithoutEmissionFactorsNestedInput
  }

  export type EmissionFactorsUncheckedUpdateWithoutElectricityInput = {
    factor_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    country_id?: IntFieldUpdateOperationsInput | number
    factor_num?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Calculations?: CalculationsUncheckedUpdateManyWithoutEmissionFactorsNestedInput
    Travel?: TravelUncheckedUpdateManyWithoutEmissionFactorsNestedInput
    Water?: WaterUncheckedUpdateManyWithoutEmissionFactorsNestedInput
  }

  export type ElectricityCreateWithoutEmissionCategoriesInput = {
    electricity_id: number
    electricity_type: string
    electricity_use: number
    Countries: CountriesCreateNestedOneWithoutElectricityInput
    EmissionFactors: EmissionFactorsCreateNestedOneWithoutElectricityInput
  }

  export type ElectricityUncheckedCreateWithoutEmissionCategoriesInput = {
    electricity_id: number
    electricity_type: string
    electricity_use: number
    country_id: number
    factor_id: number
  }

  export type ElectricityCreateOrConnectWithoutEmissionCategoriesInput = {
    where: ElectricityWhereUniqueInput
    create: XOR<ElectricityCreateWithoutEmissionCategoriesInput, ElectricityUncheckedCreateWithoutEmissionCategoriesInput>
  }

  export type ElectricityCreateManyEmissionCategoriesInputEnvelope = {
    data: ElectricityCreateManyEmissionCategoriesInput | ElectricityCreateManyEmissionCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type EmissionFactorsCreateWithoutEmissionCategoriesInput = {
    factor_id: number
    subcategory?: string | null
    factor_num: Decimal | DecimalJsLike | number | string
    Calculations?: CalculationsCreateNestedManyWithoutEmissionFactorsInput
    Electricity?: ElectricityCreateNestedManyWithoutEmissionFactorsInput
    Countries: CountriesCreateNestedOneWithoutEmissionFactorsInput
    Travel?: TravelCreateNestedManyWithoutEmissionFactorsInput
    Water?: WaterCreateNestedManyWithoutEmissionFactorsInput
  }

  export type EmissionFactorsUncheckedCreateWithoutEmissionCategoriesInput = {
    factor_id: number
    subcategory?: string | null
    country_id: number
    factor_num: Decimal | DecimalJsLike | number | string
    Calculations?: CalculationsUncheckedCreateNestedManyWithoutEmissionFactorsInput
    Electricity?: ElectricityUncheckedCreateNestedManyWithoutEmissionFactorsInput
    Travel?: TravelUncheckedCreateNestedManyWithoutEmissionFactorsInput
    Water?: WaterUncheckedCreateNestedManyWithoutEmissionFactorsInput
  }

  export type EmissionFactorsCreateOrConnectWithoutEmissionCategoriesInput = {
    where: EmissionFactorsWhereUniqueInput
    create: XOR<EmissionFactorsCreateWithoutEmissionCategoriesInput, EmissionFactorsUncheckedCreateWithoutEmissionCategoriesInput>
  }

  export type EmissionFactorsCreateManyEmissionCategoriesInputEnvelope = {
    data: EmissionFactorsCreateManyEmissionCategoriesInput | EmissionFactorsCreateManyEmissionCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type EmissionsCreateWithoutEmissionCategoriesInput = {
    emission_value: Decimal | DecimalJsLike | number | string
    Countries: CountriesCreateNestedOneWithoutEmissionsInput
    Users: UsersCreateNestedOneWithoutEmissionsInput
  }

  export type EmissionsUncheckedCreateWithoutEmissionCategoriesInput = {
    emission_id?: number
    user_id: number
    country_id: number
    emission_value: Decimal | DecimalJsLike | number | string
  }

  export type EmissionsCreateOrConnectWithoutEmissionCategoriesInput = {
    where: EmissionsWhereUniqueInput
    create: XOR<EmissionsCreateWithoutEmissionCategoriesInput, EmissionsUncheckedCreateWithoutEmissionCategoriesInput>
  }

  export type EmissionsCreateManyEmissionCategoriesInputEnvelope = {
    data: EmissionsCreateManyEmissionCategoriesInput | EmissionsCreateManyEmissionCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type FuelCreateWithoutEmissionCategoriesInput = {
    fuel_id: number
    fuel_name: string
    Vehicle_Fuel_Relation?: Vehicle_Fuel_RelationCreateNestedManyWithoutFuelInput
  }

  export type FuelUncheckedCreateWithoutEmissionCategoriesInput = {
    fuel_id: number
    fuel_name: string
    Vehicle_Fuel_Relation?: Vehicle_Fuel_RelationUncheckedCreateNestedManyWithoutFuelInput
  }

  export type FuelCreateOrConnectWithoutEmissionCategoriesInput = {
    where: FuelWhereUniqueInput
    create: XOR<FuelCreateWithoutEmissionCategoriesInput, FuelUncheckedCreateWithoutEmissionCategoriesInput>
  }

  export type FuelCreateManyEmissionCategoriesInputEnvelope = {
    data: FuelCreateManyEmissionCategoriesInput | FuelCreateManyEmissionCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type TravelCreateWithoutEmissionCategoriesInput = {
    travel_id: number
    travel_type: string
    travel_mileage: number
    Countries: CountriesCreateNestedOneWithoutTravelInput
    EmissionFactors: EmissionFactorsCreateNestedOneWithoutTravelInput
  }

  export type TravelUncheckedCreateWithoutEmissionCategoriesInput = {
    travel_id: number
    travel_type: string
    travel_mileage: number
    country_id: number
    factor_id: number
  }

  export type TravelCreateOrConnectWithoutEmissionCategoriesInput = {
    where: TravelWhereUniqueInput
    create: XOR<TravelCreateWithoutEmissionCategoriesInput, TravelUncheckedCreateWithoutEmissionCategoriesInput>
  }

  export type TravelCreateManyEmissionCategoriesInputEnvelope = {
    data: TravelCreateManyEmissionCategoriesInput | TravelCreateManyEmissionCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type WaterCreateWithoutEmissionCategoriesInput = {
    water_id?: number | null
    water_use: number
    Countries: CountriesCreateNestedOneWithoutWaterInput
    EmissionFactors: EmissionFactorsCreateNestedOneWithoutWaterInput
  }

  export type WaterUncheckedCreateWithoutEmissionCategoriesInput = {
    water_id?: number | null
    water_use: number
    country_id: number
    factor_id: number
  }

  export type WaterCreateOrConnectWithoutEmissionCategoriesInput = {
    where: WaterWhereUniqueInput
    create: XOR<WaterCreateWithoutEmissionCategoriesInput, WaterUncheckedCreateWithoutEmissionCategoriesInput>
  }

  export type WaterCreateManyEmissionCategoriesInputEnvelope = {
    data: WaterCreateManyEmissionCategoriesInput | WaterCreateManyEmissionCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type ElectricityUpsertWithWhereUniqueWithoutEmissionCategoriesInput = {
    where: ElectricityWhereUniqueInput
    update: XOR<ElectricityUpdateWithoutEmissionCategoriesInput, ElectricityUncheckedUpdateWithoutEmissionCategoriesInput>
    create: XOR<ElectricityCreateWithoutEmissionCategoriesInput, ElectricityUncheckedCreateWithoutEmissionCategoriesInput>
  }

  export type ElectricityUpdateWithWhereUniqueWithoutEmissionCategoriesInput = {
    where: ElectricityWhereUniqueInput
    data: XOR<ElectricityUpdateWithoutEmissionCategoriesInput, ElectricityUncheckedUpdateWithoutEmissionCategoriesInput>
  }

  export type ElectricityUpdateManyWithWhereWithoutEmissionCategoriesInput = {
    where: ElectricityScalarWhereInput
    data: XOR<ElectricityUpdateManyMutationInput, ElectricityUncheckedUpdateManyWithoutEmissionCategoriesInput>
  }

  export type EmissionFactorsUpsertWithWhereUniqueWithoutEmissionCategoriesInput = {
    where: EmissionFactorsWhereUniqueInput
    update: XOR<EmissionFactorsUpdateWithoutEmissionCategoriesInput, EmissionFactorsUncheckedUpdateWithoutEmissionCategoriesInput>
    create: XOR<EmissionFactorsCreateWithoutEmissionCategoriesInput, EmissionFactorsUncheckedCreateWithoutEmissionCategoriesInput>
  }

  export type EmissionFactorsUpdateWithWhereUniqueWithoutEmissionCategoriesInput = {
    where: EmissionFactorsWhereUniqueInput
    data: XOR<EmissionFactorsUpdateWithoutEmissionCategoriesInput, EmissionFactorsUncheckedUpdateWithoutEmissionCategoriesInput>
  }

  export type EmissionFactorsUpdateManyWithWhereWithoutEmissionCategoriesInput = {
    where: EmissionFactorsScalarWhereInput
    data: XOR<EmissionFactorsUpdateManyMutationInput, EmissionFactorsUncheckedUpdateManyWithoutEmissionCategoriesInput>
  }

  export type EmissionsUpsertWithWhereUniqueWithoutEmissionCategoriesInput = {
    where: EmissionsWhereUniqueInput
    update: XOR<EmissionsUpdateWithoutEmissionCategoriesInput, EmissionsUncheckedUpdateWithoutEmissionCategoriesInput>
    create: XOR<EmissionsCreateWithoutEmissionCategoriesInput, EmissionsUncheckedCreateWithoutEmissionCategoriesInput>
  }

  export type EmissionsUpdateWithWhereUniqueWithoutEmissionCategoriesInput = {
    where: EmissionsWhereUniqueInput
    data: XOR<EmissionsUpdateWithoutEmissionCategoriesInput, EmissionsUncheckedUpdateWithoutEmissionCategoriesInput>
  }

  export type EmissionsUpdateManyWithWhereWithoutEmissionCategoriesInput = {
    where: EmissionsScalarWhereInput
    data: XOR<EmissionsUpdateManyMutationInput, EmissionsUncheckedUpdateManyWithoutEmissionCategoriesInput>
  }

  export type FuelUpsertWithWhereUniqueWithoutEmissionCategoriesInput = {
    where: FuelWhereUniqueInput
    update: XOR<FuelUpdateWithoutEmissionCategoriesInput, FuelUncheckedUpdateWithoutEmissionCategoriesInput>
    create: XOR<FuelCreateWithoutEmissionCategoriesInput, FuelUncheckedCreateWithoutEmissionCategoriesInput>
  }

  export type FuelUpdateWithWhereUniqueWithoutEmissionCategoriesInput = {
    where: FuelWhereUniqueInput
    data: XOR<FuelUpdateWithoutEmissionCategoriesInput, FuelUncheckedUpdateWithoutEmissionCategoriesInput>
  }

  export type FuelUpdateManyWithWhereWithoutEmissionCategoriesInput = {
    where: FuelScalarWhereInput
    data: XOR<FuelUpdateManyMutationInput, FuelUncheckedUpdateManyWithoutEmissionCategoriesInput>
  }

  export type FuelScalarWhereInput = {
    AND?: FuelScalarWhereInput | FuelScalarWhereInput[]
    OR?: FuelScalarWhereInput[]
    NOT?: FuelScalarWhereInput | FuelScalarWhereInput[]
    fuel_id?: FloatFilter<"Fuel"> | number
    fuel_name?: StringFilter<"Fuel"> | string
    category_id?: IntNullableFilter<"Fuel"> | number | null
  }

  export type TravelUpsertWithWhereUniqueWithoutEmissionCategoriesInput = {
    where: TravelWhereUniqueInput
    update: XOR<TravelUpdateWithoutEmissionCategoriesInput, TravelUncheckedUpdateWithoutEmissionCategoriesInput>
    create: XOR<TravelCreateWithoutEmissionCategoriesInput, TravelUncheckedCreateWithoutEmissionCategoriesInput>
  }

  export type TravelUpdateWithWhereUniqueWithoutEmissionCategoriesInput = {
    where: TravelWhereUniqueInput
    data: XOR<TravelUpdateWithoutEmissionCategoriesInput, TravelUncheckedUpdateWithoutEmissionCategoriesInput>
  }

  export type TravelUpdateManyWithWhereWithoutEmissionCategoriesInput = {
    where: TravelScalarWhereInput
    data: XOR<TravelUpdateManyMutationInput, TravelUncheckedUpdateManyWithoutEmissionCategoriesInput>
  }

  export type WaterUpsertWithWhereUniqueWithoutEmissionCategoriesInput = {
    where: WaterWhereUniqueInput
    update: XOR<WaterUpdateWithoutEmissionCategoriesInput, WaterUncheckedUpdateWithoutEmissionCategoriesInput>
    create: XOR<WaterCreateWithoutEmissionCategoriesInput, WaterUncheckedCreateWithoutEmissionCategoriesInput>
  }

  export type WaterUpdateWithWhereUniqueWithoutEmissionCategoriesInput = {
    where: WaterWhereUniqueInput
    data: XOR<WaterUpdateWithoutEmissionCategoriesInput, WaterUncheckedUpdateWithoutEmissionCategoriesInput>
  }

  export type WaterUpdateManyWithWhereWithoutEmissionCategoriesInput = {
    where: WaterScalarWhereInput
    data: XOR<WaterUpdateManyMutationInput, WaterUncheckedUpdateManyWithoutEmissionCategoriesInput>
  }

  export type CalculationsCreateWithoutEmissionFactorsInput = {
    calculation_id: string
    Countries: CountriesCreateNestedOneWithoutCalculationsInput
    Users: UsersCreateNestedOneWithoutCalculationsInput
  }

  export type CalculationsUncheckedCreateWithoutEmissionFactorsInput = {
    user_id: number
    country_id: number
    calculation_id: string
  }

  export type CalculationsCreateOrConnectWithoutEmissionFactorsInput = {
    where: CalculationsWhereUniqueInput
    create: XOR<CalculationsCreateWithoutEmissionFactorsInput, CalculationsUncheckedCreateWithoutEmissionFactorsInput>
  }

  export type CalculationsCreateManyEmissionFactorsInputEnvelope = {
    data: CalculationsCreateManyEmissionFactorsInput | CalculationsCreateManyEmissionFactorsInput[]
    skipDuplicates?: boolean
  }

  export type ElectricityCreateWithoutEmissionFactorsInput = {
    electricity_id: number
    electricity_type: string
    electricity_use: number
    Countries: CountriesCreateNestedOneWithoutElectricityInput
    EmissionCategories: EmissionCategoriesCreateNestedOneWithoutElectricityInput
  }

  export type ElectricityUncheckedCreateWithoutEmissionFactorsInput = {
    electricity_id: number
    electricity_type: string
    electricity_use: number
    country_id: number
    category_id: number
  }

  export type ElectricityCreateOrConnectWithoutEmissionFactorsInput = {
    where: ElectricityWhereUniqueInput
    create: XOR<ElectricityCreateWithoutEmissionFactorsInput, ElectricityUncheckedCreateWithoutEmissionFactorsInput>
  }

  export type ElectricityCreateManyEmissionFactorsInputEnvelope = {
    data: ElectricityCreateManyEmissionFactorsInput | ElectricityCreateManyEmissionFactorsInput[]
    skipDuplicates?: boolean
  }

  export type CountriesCreateWithoutEmissionFactorsInput = {
    country_id: number
    country_name: string
    Calculations?: CalculationsCreateNestedManyWithoutCountriesInput
    Electricity?: ElectricityCreateNestedManyWithoutCountriesInput
    Emissions?: EmissionsCreateNestedManyWithoutCountriesInput
    Travel?: TravelCreateNestedManyWithoutCountriesInput
    Users?: UsersCreateNestedManyWithoutCountriesInput
    Water?: WaterCreateNestedManyWithoutCountriesInput
  }

  export type CountriesUncheckedCreateWithoutEmissionFactorsInput = {
    country_id: number
    country_name: string
    Calculations?: CalculationsUncheckedCreateNestedManyWithoutCountriesInput
    Electricity?: ElectricityUncheckedCreateNestedManyWithoutCountriesInput
    Emissions?: EmissionsUncheckedCreateNestedManyWithoutCountriesInput
    Travel?: TravelUncheckedCreateNestedManyWithoutCountriesInput
    Users?: UsersUncheckedCreateNestedManyWithoutCountriesInput
    Water?: WaterUncheckedCreateNestedManyWithoutCountriesInput
  }

  export type CountriesCreateOrConnectWithoutEmissionFactorsInput = {
    where: CountriesWhereUniqueInput
    create: XOR<CountriesCreateWithoutEmissionFactorsInput, CountriesUncheckedCreateWithoutEmissionFactorsInput>
  }

  export type EmissionCategoriesCreateWithoutEmissionFactorsInput = {
    category_id: number
    category_name: string
    Electricity?: ElectricityCreateNestedManyWithoutEmissionCategoriesInput
    Emissions?: EmissionsCreateNestedManyWithoutEmissionCategoriesInput
    Fuel?: FuelCreateNestedManyWithoutEmissionCategoriesInput
    Travel?: TravelCreateNestedManyWithoutEmissionCategoriesInput
    Water?: WaterCreateNestedManyWithoutEmissionCategoriesInput
  }

  export type EmissionCategoriesUncheckedCreateWithoutEmissionFactorsInput = {
    category_id: number
    category_name: string
    Electricity?: ElectricityUncheckedCreateNestedManyWithoutEmissionCategoriesInput
    Emissions?: EmissionsUncheckedCreateNestedManyWithoutEmissionCategoriesInput
    Fuel?: FuelUncheckedCreateNestedManyWithoutEmissionCategoriesInput
    Travel?: TravelUncheckedCreateNestedManyWithoutEmissionCategoriesInput
    Water?: WaterUncheckedCreateNestedManyWithoutEmissionCategoriesInput
  }

  export type EmissionCategoriesCreateOrConnectWithoutEmissionFactorsInput = {
    where: EmissionCategoriesWhereUniqueInput
    create: XOR<EmissionCategoriesCreateWithoutEmissionFactorsInput, EmissionCategoriesUncheckedCreateWithoutEmissionFactorsInput>
  }

  export type TravelCreateWithoutEmissionFactorsInput = {
    travel_id: number
    travel_type: string
    travel_mileage: number
    Countries: CountriesCreateNestedOneWithoutTravelInput
    EmissionCategories: EmissionCategoriesCreateNestedOneWithoutTravelInput
  }

  export type TravelUncheckedCreateWithoutEmissionFactorsInput = {
    travel_id: number
    travel_type: string
    travel_mileage: number
    country_id: number
    emission_id: number
  }

  export type TravelCreateOrConnectWithoutEmissionFactorsInput = {
    where: TravelWhereUniqueInput
    create: XOR<TravelCreateWithoutEmissionFactorsInput, TravelUncheckedCreateWithoutEmissionFactorsInput>
  }

  export type TravelCreateManyEmissionFactorsInputEnvelope = {
    data: TravelCreateManyEmissionFactorsInput | TravelCreateManyEmissionFactorsInput[]
    skipDuplicates?: boolean
  }

  export type WaterCreateWithoutEmissionFactorsInput = {
    water_id?: number | null
    water_use: number
    Countries: CountriesCreateNestedOneWithoutWaterInput
    EmissionCategories: EmissionCategoriesCreateNestedOneWithoutWaterInput
  }

  export type WaterUncheckedCreateWithoutEmissionFactorsInput = {
    water_id?: number | null
    water_use: number
    country_id: number
    emission_id: number
  }

  export type WaterCreateOrConnectWithoutEmissionFactorsInput = {
    where: WaterWhereUniqueInput
    create: XOR<WaterCreateWithoutEmissionFactorsInput, WaterUncheckedCreateWithoutEmissionFactorsInput>
  }

  export type WaterCreateManyEmissionFactorsInputEnvelope = {
    data: WaterCreateManyEmissionFactorsInput | WaterCreateManyEmissionFactorsInput[]
    skipDuplicates?: boolean
  }

  export type CalculationsUpsertWithWhereUniqueWithoutEmissionFactorsInput = {
    where: CalculationsWhereUniqueInput
    update: XOR<CalculationsUpdateWithoutEmissionFactorsInput, CalculationsUncheckedUpdateWithoutEmissionFactorsInput>
    create: XOR<CalculationsCreateWithoutEmissionFactorsInput, CalculationsUncheckedCreateWithoutEmissionFactorsInput>
  }

  export type CalculationsUpdateWithWhereUniqueWithoutEmissionFactorsInput = {
    where: CalculationsWhereUniqueInput
    data: XOR<CalculationsUpdateWithoutEmissionFactorsInput, CalculationsUncheckedUpdateWithoutEmissionFactorsInput>
  }

  export type CalculationsUpdateManyWithWhereWithoutEmissionFactorsInput = {
    where: CalculationsScalarWhereInput
    data: XOR<CalculationsUpdateManyMutationInput, CalculationsUncheckedUpdateManyWithoutEmissionFactorsInput>
  }

  export type ElectricityUpsertWithWhereUniqueWithoutEmissionFactorsInput = {
    where: ElectricityWhereUniqueInput
    update: XOR<ElectricityUpdateWithoutEmissionFactorsInput, ElectricityUncheckedUpdateWithoutEmissionFactorsInput>
    create: XOR<ElectricityCreateWithoutEmissionFactorsInput, ElectricityUncheckedCreateWithoutEmissionFactorsInput>
  }

  export type ElectricityUpdateWithWhereUniqueWithoutEmissionFactorsInput = {
    where: ElectricityWhereUniqueInput
    data: XOR<ElectricityUpdateWithoutEmissionFactorsInput, ElectricityUncheckedUpdateWithoutEmissionFactorsInput>
  }

  export type ElectricityUpdateManyWithWhereWithoutEmissionFactorsInput = {
    where: ElectricityScalarWhereInput
    data: XOR<ElectricityUpdateManyMutationInput, ElectricityUncheckedUpdateManyWithoutEmissionFactorsInput>
  }

  export type CountriesUpsertWithoutEmissionFactorsInput = {
    update: XOR<CountriesUpdateWithoutEmissionFactorsInput, CountriesUncheckedUpdateWithoutEmissionFactorsInput>
    create: XOR<CountriesCreateWithoutEmissionFactorsInput, CountriesUncheckedCreateWithoutEmissionFactorsInput>
    where?: CountriesWhereInput
  }

  export type CountriesUpdateToOneWithWhereWithoutEmissionFactorsInput = {
    where?: CountriesWhereInput
    data: XOR<CountriesUpdateWithoutEmissionFactorsInput, CountriesUncheckedUpdateWithoutEmissionFactorsInput>
  }

  export type CountriesUpdateWithoutEmissionFactorsInput = {
    country_id?: IntFieldUpdateOperationsInput | number
    country_name?: StringFieldUpdateOperationsInput | string
    Calculations?: CalculationsUpdateManyWithoutCountriesNestedInput
    Electricity?: ElectricityUpdateManyWithoutCountriesNestedInput
    Emissions?: EmissionsUpdateManyWithoutCountriesNestedInput
    Travel?: TravelUpdateManyWithoutCountriesNestedInput
    Users?: UsersUpdateManyWithoutCountriesNestedInput
    Water?: WaterUpdateManyWithoutCountriesNestedInput
  }

  export type CountriesUncheckedUpdateWithoutEmissionFactorsInput = {
    country_id?: IntFieldUpdateOperationsInput | number
    country_name?: StringFieldUpdateOperationsInput | string
    Calculations?: CalculationsUncheckedUpdateManyWithoutCountriesNestedInput
    Electricity?: ElectricityUncheckedUpdateManyWithoutCountriesNestedInput
    Emissions?: EmissionsUncheckedUpdateManyWithoutCountriesNestedInput
    Travel?: TravelUncheckedUpdateManyWithoutCountriesNestedInput
    Users?: UsersUncheckedUpdateManyWithoutCountriesNestedInput
    Water?: WaterUncheckedUpdateManyWithoutCountriesNestedInput
  }

  export type EmissionCategoriesUpsertWithoutEmissionFactorsInput = {
    update: XOR<EmissionCategoriesUpdateWithoutEmissionFactorsInput, EmissionCategoriesUncheckedUpdateWithoutEmissionFactorsInput>
    create: XOR<EmissionCategoriesCreateWithoutEmissionFactorsInput, EmissionCategoriesUncheckedCreateWithoutEmissionFactorsInput>
    where?: EmissionCategoriesWhereInput
  }

  export type EmissionCategoriesUpdateToOneWithWhereWithoutEmissionFactorsInput = {
    where?: EmissionCategoriesWhereInput
    data: XOR<EmissionCategoriesUpdateWithoutEmissionFactorsInput, EmissionCategoriesUncheckedUpdateWithoutEmissionFactorsInput>
  }

  export type EmissionCategoriesUpdateWithoutEmissionFactorsInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    Electricity?: ElectricityUpdateManyWithoutEmissionCategoriesNestedInput
    Emissions?: EmissionsUpdateManyWithoutEmissionCategoriesNestedInput
    Fuel?: FuelUpdateManyWithoutEmissionCategoriesNestedInput
    Travel?: TravelUpdateManyWithoutEmissionCategoriesNestedInput
    Water?: WaterUpdateManyWithoutEmissionCategoriesNestedInput
  }

  export type EmissionCategoriesUncheckedUpdateWithoutEmissionFactorsInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    Electricity?: ElectricityUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
    Emissions?: EmissionsUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
    Fuel?: FuelUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
    Travel?: TravelUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
    Water?: WaterUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
  }

  export type TravelUpsertWithWhereUniqueWithoutEmissionFactorsInput = {
    where: TravelWhereUniqueInput
    update: XOR<TravelUpdateWithoutEmissionFactorsInput, TravelUncheckedUpdateWithoutEmissionFactorsInput>
    create: XOR<TravelCreateWithoutEmissionFactorsInput, TravelUncheckedCreateWithoutEmissionFactorsInput>
  }

  export type TravelUpdateWithWhereUniqueWithoutEmissionFactorsInput = {
    where: TravelWhereUniqueInput
    data: XOR<TravelUpdateWithoutEmissionFactorsInput, TravelUncheckedUpdateWithoutEmissionFactorsInput>
  }

  export type TravelUpdateManyWithWhereWithoutEmissionFactorsInput = {
    where: TravelScalarWhereInput
    data: XOR<TravelUpdateManyMutationInput, TravelUncheckedUpdateManyWithoutEmissionFactorsInput>
  }

  export type WaterUpsertWithWhereUniqueWithoutEmissionFactorsInput = {
    where: WaterWhereUniqueInput
    update: XOR<WaterUpdateWithoutEmissionFactorsInput, WaterUncheckedUpdateWithoutEmissionFactorsInput>
    create: XOR<WaterCreateWithoutEmissionFactorsInput, WaterUncheckedCreateWithoutEmissionFactorsInput>
  }

  export type WaterUpdateWithWhereUniqueWithoutEmissionFactorsInput = {
    where: WaterWhereUniqueInput
    data: XOR<WaterUpdateWithoutEmissionFactorsInput, WaterUncheckedUpdateWithoutEmissionFactorsInput>
  }

  export type WaterUpdateManyWithWhereWithoutEmissionFactorsInput = {
    where: WaterScalarWhereInput
    data: XOR<WaterUpdateManyMutationInput, WaterUncheckedUpdateManyWithoutEmissionFactorsInput>
  }

  export type CountriesCreateWithoutEmissionsInput = {
    country_id: number
    country_name: string
    Calculations?: CalculationsCreateNestedManyWithoutCountriesInput
    Electricity?: ElectricityCreateNestedManyWithoutCountriesInput
    EmissionFactors?: EmissionFactorsCreateNestedManyWithoutCountriesInput
    Travel?: TravelCreateNestedManyWithoutCountriesInput
    Users?: UsersCreateNestedManyWithoutCountriesInput
    Water?: WaterCreateNestedManyWithoutCountriesInput
  }

  export type CountriesUncheckedCreateWithoutEmissionsInput = {
    country_id: number
    country_name: string
    Calculations?: CalculationsUncheckedCreateNestedManyWithoutCountriesInput
    Electricity?: ElectricityUncheckedCreateNestedManyWithoutCountriesInput
    EmissionFactors?: EmissionFactorsUncheckedCreateNestedManyWithoutCountriesInput
    Travel?: TravelUncheckedCreateNestedManyWithoutCountriesInput
    Users?: UsersUncheckedCreateNestedManyWithoutCountriesInput
    Water?: WaterUncheckedCreateNestedManyWithoutCountriesInput
  }

  export type CountriesCreateOrConnectWithoutEmissionsInput = {
    where: CountriesWhereUniqueInput
    create: XOR<CountriesCreateWithoutEmissionsInput, CountriesUncheckedCreateWithoutEmissionsInput>
  }

  export type EmissionCategoriesCreateWithoutEmissionsInput = {
    category_id: number
    category_name: string
    Electricity?: ElectricityCreateNestedManyWithoutEmissionCategoriesInput
    EmissionFactors?: EmissionFactorsCreateNestedManyWithoutEmissionCategoriesInput
    Fuel?: FuelCreateNestedManyWithoutEmissionCategoriesInput
    Travel?: TravelCreateNestedManyWithoutEmissionCategoriesInput
    Water?: WaterCreateNestedManyWithoutEmissionCategoriesInput
  }

  export type EmissionCategoriesUncheckedCreateWithoutEmissionsInput = {
    category_id: number
    category_name: string
    Electricity?: ElectricityUncheckedCreateNestedManyWithoutEmissionCategoriesInput
    EmissionFactors?: EmissionFactorsUncheckedCreateNestedManyWithoutEmissionCategoriesInput
    Fuel?: FuelUncheckedCreateNestedManyWithoutEmissionCategoriesInput
    Travel?: TravelUncheckedCreateNestedManyWithoutEmissionCategoriesInput
    Water?: WaterUncheckedCreateNestedManyWithoutEmissionCategoriesInput
  }

  export type EmissionCategoriesCreateOrConnectWithoutEmissionsInput = {
    where: EmissionCategoriesWhereUniqueInput
    create: XOR<EmissionCategoriesCreateWithoutEmissionsInput, EmissionCategoriesUncheckedCreateWithoutEmissionsInput>
  }

  export type UsersCreateWithoutEmissionsInput = {
    user_id: number
    user_name: string
    user_company: string
    user_email: string
    Calculations?: CalculationsCreateNestedManyWithoutUsersInput
    CompanyVehicles?: CompanyVehiclesCreateNestedManyWithoutUsersInput
    Countries: CountriesCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutEmissionsInput = {
    user_id: number
    user_name: string
    user_company: string
    user_email: string
    country_id: number
    Calculations?: CalculationsUncheckedCreateNestedManyWithoutUsersInput
    CompanyVehicles?: CompanyVehiclesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutEmissionsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutEmissionsInput, UsersUncheckedCreateWithoutEmissionsInput>
  }

  export type CountriesUpsertWithoutEmissionsInput = {
    update: XOR<CountriesUpdateWithoutEmissionsInput, CountriesUncheckedUpdateWithoutEmissionsInput>
    create: XOR<CountriesCreateWithoutEmissionsInput, CountriesUncheckedCreateWithoutEmissionsInput>
    where?: CountriesWhereInput
  }

  export type CountriesUpdateToOneWithWhereWithoutEmissionsInput = {
    where?: CountriesWhereInput
    data: XOR<CountriesUpdateWithoutEmissionsInput, CountriesUncheckedUpdateWithoutEmissionsInput>
  }

  export type CountriesUpdateWithoutEmissionsInput = {
    country_id?: IntFieldUpdateOperationsInput | number
    country_name?: StringFieldUpdateOperationsInput | string
    Calculations?: CalculationsUpdateManyWithoutCountriesNestedInput
    Electricity?: ElectricityUpdateManyWithoutCountriesNestedInput
    EmissionFactors?: EmissionFactorsUpdateManyWithoutCountriesNestedInput
    Travel?: TravelUpdateManyWithoutCountriesNestedInput
    Users?: UsersUpdateManyWithoutCountriesNestedInput
    Water?: WaterUpdateManyWithoutCountriesNestedInput
  }

  export type CountriesUncheckedUpdateWithoutEmissionsInput = {
    country_id?: IntFieldUpdateOperationsInput | number
    country_name?: StringFieldUpdateOperationsInput | string
    Calculations?: CalculationsUncheckedUpdateManyWithoutCountriesNestedInput
    Electricity?: ElectricityUncheckedUpdateManyWithoutCountriesNestedInput
    EmissionFactors?: EmissionFactorsUncheckedUpdateManyWithoutCountriesNestedInput
    Travel?: TravelUncheckedUpdateManyWithoutCountriesNestedInput
    Users?: UsersUncheckedUpdateManyWithoutCountriesNestedInput
    Water?: WaterUncheckedUpdateManyWithoutCountriesNestedInput
  }

  export type EmissionCategoriesUpsertWithoutEmissionsInput = {
    update: XOR<EmissionCategoriesUpdateWithoutEmissionsInput, EmissionCategoriesUncheckedUpdateWithoutEmissionsInput>
    create: XOR<EmissionCategoriesCreateWithoutEmissionsInput, EmissionCategoriesUncheckedCreateWithoutEmissionsInput>
    where?: EmissionCategoriesWhereInput
  }

  export type EmissionCategoriesUpdateToOneWithWhereWithoutEmissionsInput = {
    where?: EmissionCategoriesWhereInput
    data: XOR<EmissionCategoriesUpdateWithoutEmissionsInput, EmissionCategoriesUncheckedUpdateWithoutEmissionsInput>
  }

  export type EmissionCategoriesUpdateWithoutEmissionsInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    Electricity?: ElectricityUpdateManyWithoutEmissionCategoriesNestedInput
    EmissionFactors?: EmissionFactorsUpdateManyWithoutEmissionCategoriesNestedInput
    Fuel?: FuelUpdateManyWithoutEmissionCategoriesNestedInput
    Travel?: TravelUpdateManyWithoutEmissionCategoriesNestedInput
    Water?: WaterUpdateManyWithoutEmissionCategoriesNestedInput
  }

  export type EmissionCategoriesUncheckedUpdateWithoutEmissionsInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    Electricity?: ElectricityUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
    EmissionFactors?: EmissionFactorsUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
    Fuel?: FuelUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
    Travel?: TravelUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
    Water?: WaterUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
  }

  export type UsersUpsertWithoutEmissionsInput = {
    update: XOR<UsersUpdateWithoutEmissionsInput, UsersUncheckedUpdateWithoutEmissionsInput>
    create: XOR<UsersCreateWithoutEmissionsInput, UsersUncheckedCreateWithoutEmissionsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutEmissionsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutEmissionsInput, UsersUncheckedUpdateWithoutEmissionsInput>
  }

  export type UsersUpdateWithoutEmissionsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_company?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    Calculations?: CalculationsUpdateManyWithoutUsersNestedInput
    CompanyVehicles?: CompanyVehiclesUpdateManyWithoutUsersNestedInput
    Countries?: CountriesUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutEmissionsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_company?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    country_id?: IntFieldUpdateOperationsInput | number
    Calculations?: CalculationsUncheckedUpdateManyWithoutUsersNestedInput
    CompanyVehicles?: CompanyVehiclesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type EmissionCategoriesCreateWithoutFuelInput = {
    category_id: number
    category_name: string
    Electricity?: ElectricityCreateNestedManyWithoutEmissionCategoriesInput
    EmissionFactors?: EmissionFactorsCreateNestedManyWithoutEmissionCategoriesInput
    Emissions?: EmissionsCreateNestedManyWithoutEmissionCategoriesInput
    Travel?: TravelCreateNestedManyWithoutEmissionCategoriesInput
    Water?: WaterCreateNestedManyWithoutEmissionCategoriesInput
  }

  export type EmissionCategoriesUncheckedCreateWithoutFuelInput = {
    category_id: number
    category_name: string
    Electricity?: ElectricityUncheckedCreateNestedManyWithoutEmissionCategoriesInput
    EmissionFactors?: EmissionFactorsUncheckedCreateNestedManyWithoutEmissionCategoriesInput
    Emissions?: EmissionsUncheckedCreateNestedManyWithoutEmissionCategoriesInput
    Travel?: TravelUncheckedCreateNestedManyWithoutEmissionCategoriesInput
    Water?: WaterUncheckedCreateNestedManyWithoutEmissionCategoriesInput
  }

  export type EmissionCategoriesCreateOrConnectWithoutFuelInput = {
    where: EmissionCategoriesWhereUniqueInput
    create: XOR<EmissionCategoriesCreateWithoutFuelInput, EmissionCategoriesUncheckedCreateWithoutFuelInput>
  }

  export type Vehicle_Fuel_RelationCreateWithoutFuelInput = {
    vehicle_fuel_relation_id: string
    CompanyVehicles: CompanyVehiclesCreateNestedOneWithoutVehicle_Fuel_RelationInput
  }

  export type Vehicle_Fuel_RelationUncheckedCreateWithoutFuelInput = {
    vehicle_id: number
    vehicle_fuel_relation_id: string
  }

  export type Vehicle_Fuel_RelationCreateOrConnectWithoutFuelInput = {
    where: Vehicle_Fuel_RelationWhereUniqueInput
    create: XOR<Vehicle_Fuel_RelationCreateWithoutFuelInput, Vehicle_Fuel_RelationUncheckedCreateWithoutFuelInput>
  }

  export type Vehicle_Fuel_RelationCreateManyFuelInputEnvelope = {
    data: Vehicle_Fuel_RelationCreateManyFuelInput | Vehicle_Fuel_RelationCreateManyFuelInput[]
    skipDuplicates?: boolean
  }

  export type EmissionCategoriesUpsertWithoutFuelInput = {
    update: XOR<EmissionCategoriesUpdateWithoutFuelInput, EmissionCategoriesUncheckedUpdateWithoutFuelInput>
    create: XOR<EmissionCategoriesCreateWithoutFuelInput, EmissionCategoriesUncheckedCreateWithoutFuelInput>
    where?: EmissionCategoriesWhereInput
  }

  export type EmissionCategoriesUpdateToOneWithWhereWithoutFuelInput = {
    where?: EmissionCategoriesWhereInput
    data: XOR<EmissionCategoriesUpdateWithoutFuelInput, EmissionCategoriesUncheckedUpdateWithoutFuelInput>
  }

  export type EmissionCategoriesUpdateWithoutFuelInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    Electricity?: ElectricityUpdateManyWithoutEmissionCategoriesNestedInput
    EmissionFactors?: EmissionFactorsUpdateManyWithoutEmissionCategoriesNestedInput
    Emissions?: EmissionsUpdateManyWithoutEmissionCategoriesNestedInput
    Travel?: TravelUpdateManyWithoutEmissionCategoriesNestedInput
    Water?: WaterUpdateManyWithoutEmissionCategoriesNestedInput
  }

  export type EmissionCategoriesUncheckedUpdateWithoutFuelInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    Electricity?: ElectricityUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
    EmissionFactors?: EmissionFactorsUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
    Emissions?: EmissionsUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
    Travel?: TravelUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
    Water?: WaterUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
  }

  export type Vehicle_Fuel_RelationUpsertWithWhereUniqueWithoutFuelInput = {
    where: Vehicle_Fuel_RelationWhereUniqueInput
    update: XOR<Vehicle_Fuel_RelationUpdateWithoutFuelInput, Vehicle_Fuel_RelationUncheckedUpdateWithoutFuelInput>
    create: XOR<Vehicle_Fuel_RelationCreateWithoutFuelInput, Vehicle_Fuel_RelationUncheckedCreateWithoutFuelInput>
  }

  export type Vehicle_Fuel_RelationUpdateWithWhereUniqueWithoutFuelInput = {
    where: Vehicle_Fuel_RelationWhereUniqueInput
    data: XOR<Vehicle_Fuel_RelationUpdateWithoutFuelInput, Vehicle_Fuel_RelationUncheckedUpdateWithoutFuelInput>
  }

  export type Vehicle_Fuel_RelationUpdateManyWithWhereWithoutFuelInput = {
    where: Vehicle_Fuel_RelationScalarWhereInput
    data: XOR<Vehicle_Fuel_RelationUpdateManyMutationInput, Vehicle_Fuel_RelationUncheckedUpdateManyWithoutFuelInput>
  }

  export type CountriesCreateWithoutTravelInput = {
    country_id: number
    country_name: string
    Calculations?: CalculationsCreateNestedManyWithoutCountriesInput
    Electricity?: ElectricityCreateNestedManyWithoutCountriesInput
    EmissionFactors?: EmissionFactorsCreateNestedManyWithoutCountriesInput
    Emissions?: EmissionsCreateNestedManyWithoutCountriesInput
    Users?: UsersCreateNestedManyWithoutCountriesInput
    Water?: WaterCreateNestedManyWithoutCountriesInput
  }

  export type CountriesUncheckedCreateWithoutTravelInput = {
    country_id: number
    country_name: string
    Calculations?: CalculationsUncheckedCreateNestedManyWithoutCountriesInput
    Electricity?: ElectricityUncheckedCreateNestedManyWithoutCountriesInput
    EmissionFactors?: EmissionFactorsUncheckedCreateNestedManyWithoutCountriesInput
    Emissions?: EmissionsUncheckedCreateNestedManyWithoutCountriesInput
    Users?: UsersUncheckedCreateNestedManyWithoutCountriesInput
    Water?: WaterUncheckedCreateNestedManyWithoutCountriesInput
  }

  export type CountriesCreateOrConnectWithoutTravelInput = {
    where: CountriesWhereUniqueInput
    create: XOR<CountriesCreateWithoutTravelInput, CountriesUncheckedCreateWithoutTravelInput>
  }

  export type EmissionCategoriesCreateWithoutTravelInput = {
    category_id: number
    category_name: string
    Electricity?: ElectricityCreateNestedManyWithoutEmissionCategoriesInput
    EmissionFactors?: EmissionFactorsCreateNestedManyWithoutEmissionCategoriesInput
    Emissions?: EmissionsCreateNestedManyWithoutEmissionCategoriesInput
    Fuel?: FuelCreateNestedManyWithoutEmissionCategoriesInput
    Water?: WaterCreateNestedManyWithoutEmissionCategoriesInput
  }

  export type EmissionCategoriesUncheckedCreateWithoutTravelInput = {
    category_id: number
    category_name: string
    Electricity?: ElectricityUncheckedCreateNestedManyWithoutEmissionCategoriesInput
    EmissionFactors?: EmissionFactorsUncheckedCreateNestedManyWithoutEmissionCategoriesInput
    Emissions?: EmissionsUncheckedCreateNestedManyWithoutEmissionCategoriesInput
    Fuel?: FuelUncheckedCreateNestedManyWithoutEmissionCategoriesInput
    Water?: WaterUncheckedCreateNestedManyWithoutEmissionCategoriesInput
  }

  export type EmissionCategoriesCreateOrConnectWithoutTravelInput = {
    where: EmissionCategoriesWhereUniqueInput
    create: XOR<EmissionCategoriesCreateWithoutTravelInput, EmissionCategoriesUncheckedCreateWithoutTravelInput>
  }

  export type EmissionFactorsCreateWithoutTravelInput = {
    factor_id: number
    subcategory?: string | null
    factor_num: Decimal | DecimalJsLike | number | string
    Calculations?: CalculationsCreateNestedManyWithoutEmissionFactorsInput
    Electricity?: ElectricityCreateNestedManyWithoutEmissionFactorsInput
    Countries: CountriesCreateNestedOneWithoutEmissionFactorsInput
    EmissionCategories: EmissionCategoriesCreateNestedOneWithoutEmissionFactorsInput
    Water?: WaterCreateNestedManyWithoutEmissionFactorsInput
  }

  export type EmissionFactorsUncheckedCreateWithoutTravelInput = {
    factor_id: number
    category_id: number
    subcategory?: string | null
    country_id: number
    factor_num: Decimal | DecimalJsLike | number | string
    Calculations?: CalculationsUncheckedCreateNestedManyWithoutEmissionFactorsInput
    Electricity?: ElectricityUncheckedCreateNestedManyWithoutEmissionFactorsInput
    Water?: WaterUncheckedCreateNestedManyWithoutEmissionFactorsInput
  }

  export type EmissionFactorsCreateOrConnectWithoutTravelInput = {
    where: EmissionFactorsWhereUniqueInput
    create: XOR<EmissionFactorsCreateWithoutTravelInput, EmissionFactorsUncheckedCreateWithoutTravelInput>
  }

  export type CountriesUpsertWithoutTravelInput = {
    update: XOR<CountriesUpdateWithoutTravelInput, CountriesUncheckedUpdateWithoutTravelInput>
    create: XOR<CountriesCreateWithoutTravelInput, CountriesUncheckedCreateWithoutTravelInput>
    where?: CountriesWhereInput
  }

  export type CountriesUpdateToOneWithWhereWithoutTravelInput = {
    where?: CountriesWhereInput
    data: XOR<CountriesUpdateWithoutTravelInput, CountriesUncheckedUpdateWithoutTravelInput>
  }

  export type CountriesUpdateWithoutTravelInput = {
    country_id?: IntFieldUpdateOperationsInput | number
    country_name?: StringFieldUpdateOperationsInput | string
    Calculations?: CalculationsUpdateManyWithoutCountriesNestedInput
    Electricity?: ElectricityUpdateManyWithoutCountriesNestedInput
    EmissionFactors?: EmissionFactorsUpdateManyWithoutCountriesNestedInput
    Emissions?: EmissionsUpdateManyWithoutCountriesNestedInput
    Users?: UsersUpdateManyWithoutCountriesNestedInput
    Water?: WaterUpdateManyWithoutCountriesNestedInput
  }

  export type CountriesUncheckedUpdateWithoutTravelInput = {
    country_id?: IntFieldUpdateOperationsInput | number
    country_name?: StringFieldUpdateOperationsInput | string
    Calculations?: CalculationsUncheckedUpdateManyWithoutCountriesNestedInput
    Electricity?: ElectricityUncheckedUpdateManyWithoutCountriesNestedInput
    EmissionFactors?: EmissionFactorsUncheckedUpdateManyWithoutCountriesNestedInput
    Emissions?: EmissionsUncheckedUpdateManyWithoutCountriesNestedInput
    Users?: UsersUncheckedUpdateManyWithoutCountriesNestedInput
    Water?: WaterUncheckedUpdateManyWithoutCountriesNestedInput
  }

  export type EmissionCategoriesUpsertWithoutTravelInput = {
    update: XOR<EmissionCategoriesUpdateWithoutTravelInput, EmissionCategoriesUncheckedUpdateWithoutTravelInput>
    create: XOR<EmissionCategoriesCreateWithoutTravelInput, EmissionCategoriesUncheckedCreateWithoutTravelInput>
    where?: EmissionCategoriesWhereInput
  }

  export type EmissionCategoriesUpdateToOneWithWhereWithoutTravelInput = {
    where?: EmissionCategoriesWhereInput
    data: XOR<EmissionCategoriesUpdateWithoutTravelInput, EmissionCategoriesUncheckedUpdateWithoutTravelInput>
  }

  export type EmissionCategoriesUpdateWithoutTravelInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    Electricity?: ElectricityUpdateManyWithoutEmissionCategoriesNestedInput
    EmissionFactors?: EmissionFactorsUpdateManyWithoutEmissionCategoriesNestedInput
    Emissions?: EmissionsUpdateManyWithoutEmissionCategoriesNestedInput
    Fuel?: FuelUpdateManyWithoutEmissionCategoriesNestedInput
    Water?: WaterUpdateManyWithoutEmissionCategoriesNestedInput
  }

  export type EmissionCategoriesUncheckedUpdateWithoutTravelInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    Electricity?: ElectricityUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
    EmissionFactors?: EmissionFactorsUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
    Emissions?: EmissionsUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
    Fuel?: FuelUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
    Water?: WaterUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
  }

  export type EmissionFactorsUpsertWithoutTravelInput = {
    update: XOR<EmissionFactorsUpdateWithoutTravelInput, EmissionFactorsUncheckedUpdateWithoutTravelInput>
    create: XOR<EmissionFactorsCreateWithoutTravelInput, EmissionFactorsUncheckedCreateWithoutTravelInput>
    where?: EmissionFactorsWhereInput
  }

  export type EmissionFactorsUpdateToOneWithWhereWithoutTravelInput = {
    where?: EmissionFactorsWhereInput
    data: XOR<EmissionFactorsUpdateWithoutTravelInput, EmissionFactorsUncheckedUpdateWithoutTravelInput>
  }

  export type EmissionFactorsUpdateWithoutTravelInput = {
    factor_id?: IntFieldUpdateOperationsInput | number
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    factor_num?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Calculations?: CalculationsUpdateManyWithoutEmissionFactorsNestedInput
    Electricity?: ElectricityUpdateManyWithoutEmissionFactorsNestedInput
    Countries?: CountriesUpdateOneRequiredWithoutEmissionFactorsNestedInput
    EmissionCategories?: EmissionCategoriesUpdateOneRequiredWithoutEmissionFactorsNestedInput
    Water?: WaterUpdateManyWithoutEmissionFactorsNestedInput
  }

  export type EmissionFactorsUncheckedUpdateWithoutTravelInput = {
    factor_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    country_id?: IntFieldUpdateOperationsInput | number
    factor_num?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Calculations?: CalculationsUncheckedUpdateManyWithoutEmissionFactorsNestedInput
    Electricity?: ElectricityUncheckedUpdateManyWithoutEmissionFactorsNestedInput
    Water?: WaterUncheckedUpdateManyWithoutEmissionFactorsNestedInput
  }

  export type CalculationsCreateWithoutUsersInput = {
    calculation_id: string
    Countries: CountriesCreateNestedOneWithoutCalculationsInput
    EmissionFactors: EmissionFactorsCreateNestedOneWithoutCalculationsInput
  }

  export type CalculationsUncheckedCreateWithoutUsersInput = {
    country_id: number
    factor_id: number
    calculation_id: string
  }

  export type CalculationsCreateOrConnectWithoutUsersInput = {
    where: CalculationsWhereUniqueInput
    create: XOR<CalculationsCreateWithoutUsersInput, CalculationsUncheckedCreateWithoutUsersInput>
  }

  export type CalculationsCreateManyUsersInputEnvelope = {
    data: CalculationsCreateManyUsersInput | CalculationsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type CompanyVehiclesCreateWithoutUsersInput = {
    vehicle_id: number
    vehicle_type: string
    vehicle_model: string
    vehicle_mileage: number
    Vehicle_Fuel_Relation?: Vehicle_Fuel_RelationCreateNestedManyWithoutCompanyVehiclesInput
  }

  export type CompanyVehiclesUncheckedCreateWithoutUsersInput = {
    vehicle_id: number
    vehicle_type: string
    vehicle_model: string
    vehicle_mileage: number
    Vehicle_Fuel_Relation?: Vehicle_Fuel_RelationUncheckedCreateNestedManyWithoutCompanyVehiclesInput
  }

  export type CompanyVehiclesCreateOrConnectWithoutUsersInput = {
    where: CompanyVehiclesWhereUniqueInput
    create: XOR<CompanyVehiclesCreateWithoutUsersInput, CompanyVehiclesUncheckedCreateWithoutUsersInput>
  }

  export type CompanyVehiclesCreateManyUsersInputEnvelope = {
    data: CompanyVehiclesCreateManyUsersInput | CompanyVehiclesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type EmissionsCreateWithoutUsersInput = {
    emission_value: Decimal | DecimalJsLike | number | string
    Countries: CountriesCreateNestedOneWithoutEmissionsInput
    EmissionCategories: EmissionCategoriesCreateNestedOneWithoutEmissionsInput
  }

  export type EmissionsUncheckedCreateWithoutUsersInput = {
    emission_id?: number
    country_id: number
    category_id: number
    emission_value: Decimal | DecimalJsLike | number | string
  }

  export type EmissionsCreateOrConnectWithoutUsersInput = {
    where: EmissionsWhereUniqueInput
    create: XOR<EmissionsCreateWithoutUsersInput, EmissionsUncheckedCreateWithoutUsersInput>
  }

  export type EmissionsCreateManyUsersInputEnvelope = {
    data: EmissionsCreateManyUsersInput | EmissionsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type CountriesCreateWithoutUsersInput = {
    country_id: number
    country_name: string
    Calculations?: CalculationsCreateNestedManyWithoutCountriesInput
    Electricity?: ElectricityCreateNestedManyWithoutCountriesInput
    EmissionFactors?: EmissionFactorsCreateNestedManyWithoutCountriesInput
    Emissions?: EmissionsCreateNestedManyWithoutCountriesInput
    Travel?: TravelCreateNestedManyWithoutCountriesInput
    Water?: WaterCreateNestedManyWithoutCountriesInput
  }

  export type CountriesUncheckedCreateWithoutUsersInput = {
    country_id: number
    country_name: string
    Calculations?: CalculationsUncheckedCreateNestedManyWithoutCountriesInput
    Electricity?: ElectricityUncheckedCreateNestedManyWithoutCountriesInput
    EmissionFactors?: EmissionFactorsUncheckedCreateNestedManyWithoutCountriesInput
    Emissions?: EmissionsUncheckedCreateNestedManyWithoutCountriesInput
    Travel?: TravelUncheckedCreateNestedManyWithoutCountriesInput
    Water?: WaterUncheckedCreateNestedManyWithoutCountriesInput
  }

  export type CountriesCreateOrConnectWithoutUsersInput = {
    where: CountriesWhereUniqueInput
    create: XOR<CountriesCreateWithoutUsersInput, CountriesUncheckedCreateWithoutUsersInput>
  }

  export type CalculationsUpsertWithWhereUniqueWithoutUsersInput = {
    where: CalculationsWhereUniqueInput
    update: XOR<CalculationsUpdateWithoutUsersInput, CalculationsUncheckedUpdateWithoutUsersInput>
    create: XOR<CalculationsCreateWithoutUsersInput, CalculationsUncheckedCreateWithoutUsersInput>
  }

  export type CalculationsUpdateWithWhereUniqueWithoutUsersInput = {
    where: CalculationsWhereUniqueInput
    data: XOR<CalculationsUpdateWithoutUsersInput, CalculationsUncheckedUpdateWithoutUsersInput>
  }

  export type CalculationsUpdateManyWithWhereWithoutUsersInput = {
    where: CalculationsScalarWhereInput
    data: XOR<CalculationsUpdateManyMutationInput, CalculationsUncheckedUpdateManyWithoutUsersInput>
  }

  export type CompanyVehiclesUpsertWithWhereUniqueWithoutUsersInput = {
    where: CompanyVehiclesWhereUniqueInput
    update: XOR<CompanyVehiclesUpdateWithoutUsersInput, CompanyVehiclesUncheckedUpdateWithoutUsersInput>
    create: XOR<CompanyVehiclesCreateWithoutUsersInput, CompanyVehiclesUncheckedCreateWithoutUsersInput>
  }

  export type CompanyVehiclesUpdateWithWhereUniqueWithoutUsersInput = {
    where: CompanyVehiclesWhereUniqueInput
    data: XOR<CompanyVehiclesUpdateWithoutUsersInput, CompanyVehiclesUncheckedUpdateWithoutUsersInput>
  }

  export type CompanyVehiclesUpdateManyWithWhereWithoutUsersInput = {
    where: CompanyVehiclesScalarWhereInput
    data: XOR<CompanyVehiclesUpdateManyMutationInput, CompanyVehiclesUncheckedUpdateManyWithoutUsersInput>
  }

  export type CompanyVehiclesScalarWhereInput = {
    AND?: CompanyVehiclesScalarWhereInput | CompanyVehiclesScalarWhereInput[]
    OR?: CompanyVehiclesScalarWhereInput[]
    NOT?: CompanyVehiclesScalarWhereInput | CompanyVehiclesScalarWhereInput[]
    vehicle_id?: IntFilter<"CompanyVehicles"> | number
    vehicle_type?: StringFilter<"CompanyVehicles"> | string
    vehicle_model?: StringFilter<"CompanyVehicles"> | string
    vehicle_mileage?: IntFilter<"CompanyVehicles"> | number
    user_id?: IntFilter<"CompanyVehicles"> | number
  }

  export type EmissionsUpsertWithWhereUniqueWithoutUsersInput = {
    where: EmissionsWhereUniqueInput
    update: XOR<EmissionsUpdateWithoutUsersInput, EmissionsUncheckedUpdateWithoutUsersInput>
    create: XOR<EmissionsCreateWithoutUsersInput, EmissionsUncheckedCreateWithoutUsersInput>
  }

  export type EmissionsUpdateWithWhereUniqueWithoutUsersInput = {
    where: EmissionsWhereUniqueInput
    data: XOR<EmissionsUpdateWithoutUsersInput, EmissionsUncheckedUpdateWithoutUsersInput>
  }

  export type EmissionsUpdateManyWithWhereWithoutUsersInput = {
    where: EmissionsScalarWhereInput
    data: XOR<EmissionsUpdateManyMutationInput, EmissionsUncheckedUpdateManyWithoutUsersInput>
  }

  export type CountriesUpsertWithoutUsersInput = {
    update: XOR<CountriesUpdateWithoutUsersInput, CountriesUncheckedUpdateWithoutUsersInput>
    create: XOR<CountriesCreateWithoutUsersInput, CountriesUncheckedCreateWithoutUsersInput>
    where?: CountriesWhereInput
  }

  export type CountriesUpdateToOneWithWhereWithoutUsersInput = {
    where?: CountriesWhereInput
    data: XOR<CountriesUpdateWithoutUsersInput, CountriesUncheckedUpdateWithoutUsersInput>
  }

  export type CountriesUpdateWithoutUsersInput = {
    country_id?: IntFieldUpdateOperationsInput | number
    country_name?: StringFieldUpdateOperationsInput | string
    Calculations?: CalculationsUpdateManyWithoutCountriesNestedInput
    Electricity?: ElectricityUpdateManyWithoutCountriesNestedInput
    EmissionFactors?: EmissionFactorsUpdateManyWithoutCountriesNestedInput
    Emissions?: EmissionsUpdateManyWithoutCountriesNestedInput
    Travel?: TravelUpdateManyWithoutCountriesNestedInput
    Water?: WaterUpdateManyWithoutCountriesNestedInput
  }

  export type CountriesUncheckedUpdateWithoutUsersInput = {
    country_id?: IntFieldUpdateOperationsInput | number
    country_name?: StringFieldUpdateOperationsInput | string
    Calculations?: CalculationsUncheckedUpdateManyWithoutCountriesNestedInput
    Electricity?: ElectricityUncheckedUpdateManyWithoutCountriesNestedInput
    EmissionFactors?: EmissionFactorsUncheckedUpdateManyWithoutCountriesNestedInput
    Emissions?: EmissionsUncheckedUpdateManyWithoutCountriesNestedInput
    Travel?: TravelUncheckedUpdateManyWithoutCountriesNestedInput
    Water?: WaterUncheckedUpdateManyWithoutCountriesNestedInput
  }

  export type CompanyVehiclesCreateWithoutVehicle_Fuel_RelationInput = {
    vehicle_id: number
    vehicle_type: string
    vehicle_model: string
    vehicle_mileage: number
    Users: UsersCreateNestedOneWithoutCompanyVehiclesInput
  }

  export type CompanyVehiclesUncheckedCreateWithoutVehicle_Fuel_RelationInput = {
    vehicle_id: number
    vehicle_type: string
    vehicle_model: string
    vehicle_mileage: number
    user_id: number
  }

  export type CompanyVehiclesCreateOrConnectWithoutVehicle_Fuel_RelationInput = {
    where: CompanyVehiclesWhereUniqueInput
    create: XOR<CompanyVehiclesCreateWithoutVehicle_Fuel_RelationInput, CompanyVehiclesUncheckedCreateWithoutVehicle_Fuel_RelationInput>
  }

  export type FuelCreateWithoutVehicle_Fuel_RelationInput = {
    fuel_id: number
    fuel_name: string
    EmissionCategories?: EmissionCategoriesCreateNestedOneWithoutFuelInput
  }

  export type FuelUncheckedCreateWithoutVehicle_Fuel_RelationInput = {
    fuel_id: number
    fuel_name: string
    category_id?: number | null
  }

  export type FuelCreateOrConnectWithoutVehicle_Fuel_RelationInput = {
    where: FuelWhereUniqueInput
    create: XOR<FuelCreateWithoutVehicle_Fuel_RelationInput, FuelUncheckedCreateWithoutVehicle_Fuel_RelationInput>
  }

  export type CompanyVehiclesUpsertWithoutVehicle_Fuel_RelationInput = {
    update: XOR<CompanyVehiclesUpdateWithoutVehicle_Fuel_RelationInput, CompanyVehiclesUncheckedUpdateWithoutVehicle_Fuel_RelationInput>
    create: XOR<CompanyVehiclesCreateWithoutVehicle_Fuel_RelationInput, CompanyVehiclesUncheckedCreateWithoutVehicle_Fuel_RelationInput>
    where?: CompanyVehiclesWhereInput
  }

  export type CompanyVehiclesUpdateToOneWithWhereWithoutVehicle_Fuel_RelationInput = {
    where?: CompanyVehiclesWhereInput
    data: XOR<CompanyVehiclesUpdateWithoutVehicle_Fuel_RelationInput, CompanyVehiclesUncheckedUpdateWithoutVehicle_Fuel_RelationInput>
  }

  export type CompanyVehiclesUpdateWithoutVehicle_Fuel_RelationInput = {
    vehicle_id?: IntFieldUpdateOperationsInput | number
    vehicle_type?: StringFieldUpdateOperationsInput | string
    vehicle_model?: StringFieldUpdateOperationsInput | string
    vehicle_mileage?: IntFieldUpdateOperationsInput | number
    Users?: UsersUpdateOneRequiredWithoutCompanyVehiclesNestedInput
  }

  export type CompanyVehiclesUncheckedUpdateWithoutVehicle_Fuel_RelationInput = {
    vehicle_id?: IntFieldUpdateOperationsInput | number
    vehicle_type?: StringFieldUpdateOperationsInput | string
    vehicle_model?: StringFieldUpdateOperationsInput | string
    vehicle_mileage?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type FuelUpsertWithoutVehicle_Fuel_RelationInput = {
    update: XOR<FuelUpdateWithoutVehicle_Fuel_RelationInput, FuelUncheckedUpdateWithoutVehicle_Fuel_RelationInput>
    create: XOR<FuelCreateWithoutVehicle_Fuel_RelationInput, FuelUncheckedCreateWithoutVehicle_Fuel_RelationInput>
    where?: FuelWhereInput
  }

  export type FuelUpdateToOneWithWhereWithoutVehicle_Fuel_RelationInput = {
    where?: FuelWhereInput
    data: XOR<FuelUpdateWithoutVehicle_Fuel_RelationInput, FuelUncheckedUpdateWithoutVehicle_Fuel_RelationInput>
  }

  export type FuelUpdateWithoutVehicle_Fuel_RelationInput = {
    fuel_id?: FloatFieldUpdateOperationsInput | number
    fuel_name?: StringFieldUpdateOperationsInput | string
    EmissionCategories?: EmissionCategoriesUpdateOneWithoutFuelNestedInput
  }

  export type FuelUncheckedUpdateWithoutVehicle_Fuel_RelationInput = {
    fuel_id?: FloatFieldUpdateOperationsInput | number
    fuel_name?: StringFieldUpdateOperationsInput | string
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CountriesCreateWithoutWaterInput = {
    country_id: number
    country_name: string
    Calculations?: CalculationsCreateNestedManyWithoutCountriesInput
    Electricity?: ElectricityCreateNestedManyWithoutCountriesInput
    EmissionFactors?: EmissionFactorsCreateNestedManyWithoutCountriesInput
    Emissions?: EmissionsCreateNestedManyWithoutCountriesInput
    Travel?: TravelCreateNestedManyWithoutCountriesInput
    Users?: UsersCreateNestedManyWithoutCountriesInput
  }

  export type CountriesUncheckedCreateWithoutWaterInput = {
    country_id: number
    country_name: string
    Calculations?: CalculationsUncheckedCreateNestedManyWithoutCountriesInput
    Electricity?: ElectricityUncheckedCreateNestedManyWithoutCountriesInput
    EmissionFactors?: EmissionFactorsUncheckedCreateNestedManyWithoutCountriesInput
    Emissions?: EmissionsUncheckedCreateNestedManyWithoutCountriesInput
    Travel?: TravelUncheckedCreateNestedManyWithoutCountriesInput
    Users?: UsersUncheckedCreateNestedManyWithoutCountriesInput
  }

  export type CountriesCreateOrConnectWithoutWaterInput = {
    where: CountriesWhereUniqueInput
    create: XOR<CountriesCreateWithoutWaterInput, CountriesUncheckedCreateWithoutWaterInput>
  }

  export type EmissionCategoriesCreateWithoutWaterInput = {
    category_id: number
    category_name: string
    Electricity?: ElectricityCreateNestedManyWithoutEmissionCategoriesInput
    EmissionFactors?: EmissionFactorsCreateNestedManyWithoutEmissionCategoriesInput
    Emissions?: EmissionsCreateNestedManyWithoutEmissionCategoriesInput
    Fuel?: FuelCreateNestedManyWithoutEmissionCategoriesInput
    Travel?: TravelCreateNestedManyWithoutEmissionCategoriesInput
  }

  export type EmissionCategoriesUncheckedCreateWithoutWaterInput = {
    category_id: number
    category_name: string
    Electricity?: ElectricityUncheckedCreateNestedManyWithoutEmissionCategoriesInput
    EmissionFactors?: EmissionFactorsUncheckedCreateNestedManyWithoutEmissionCategoriesInput
    Emissions?: EmissionsUncheckedCreateNestedManyWithoutEmissionCategoriesInput
    Fuel?: FuelUncheckedCreateNestedManyWithoutEmissionCategoriesInput
    Travel?: TravelUncheckedCreateNestedManyWithoutEmissionCategoriesInput
  }

  export type EmissionCategoriesCreateOrConnectWithoutWaterInput = {
    where: EmissionCategoriesWhereUniqueInput
    create: XOR<EmissionCategoriesCreateWithoutWaterInput, EmissionCategoriesUncheckedCreateWithoutWaterInput>
  }

  export type EmissionFactorsCreateWithoutWaterInput = {
    factor_id: number
    subcategory?: string | null
    factor_num: Decimal | DecimalJsLike | number | string
    Calculations?: CalculationsCreateNestedManyWithoutEmissionFactorsInput
    Electricity?: ElectricityCreateNestedManyWithoutEmissionFactorsInput
    Countries: CountriesCreateNestedOneWithoutEmissionFactorsInput
    EmissionCategories: EmissionCategoriesCreateNestedOneWithoutEmissionFactorsInput
    Travel?: TravelCreateNestedManyWithoutEmissionFactorsInput
  }

  export type EmissionFactorsUncheckedCreateWithoutWaterInput = {
    factor_id: number
    category_id: number
    subcategory?: string | null
    country_id: number
    factor_num: Decimal | DecimalJsLike | number | string
    Calculations?: CalculationsUncheckedCreateNestedManyWithoutEmissionFactorsInput
    Electricity?: ElectricityUncheckedCreateNestedManyWithoutEmissionFactorsInput
    Travel?: TravelUncheckedCreateNestedManyWithoutEmissionFactorsInput
  }

  export type EmissionFactorsCreateOrConnectWithoutWaterInput = {
    where: EmissionFactorsWhereUniqueInput
    create: XOR<EmissionFactorsCreateWithoutWaterInput, EmissionFactorsUncheckedCreateWithoutWaterInput>
  }

  export type CountriesUpsertWithoutWaterInput = {
    update: XOR<CountriesUpdateWithoutWaterInput, CountriesUncheckedUpdateWithoutWaterInput>
    create: XOR<CountriesCreateWithoutWaterInput, CountriesUncheckedCreateWithoutWaterInput>
    where?: CountriesWhereInput
  }

  export type CountriesUpdateToOneWithWhereWithoutWaterInput = {
    where?: CountriesWhereInput
    data: XOR<CountriesUpdateWithoutWaterInput, CountriesUncheckedUpdateWithoutWaterInput>
  }

  export type CountriesUpdateWithoutWaterInput = {
    country_id?: IntFieldUpdateOperationsInput | number
    country_name?: StringFieldUpdateOperationsInput | string
    Calculations?: CalculationsUpdateManyWithoutCountriesNestedInput
    Electricity?: ElectricityUpdateManyWithoutCountriesNestedInput
    EmissionFactors?: EmissionFactorsUpdateManyWithoutCountriesNestedInput
    Emissions?: EmissionsUpdateManyWithoutCountriesNestedInput
    Travel?: TravelUpdateManyWithoutCountriesNestedInput
    Users?: UsersUpdateManyWithoutCountriesNestedInput
  }

  export type CountriesUncheckedUpdateWithoutWaterInput = {
    country_id?: IntFieldUpdateOperationsInput | number
    country_name?: StringFieldUpdateOperationsInput | string
    Calculations?: CalculationsUncheckedUpdateManyWithoutCountriesNestedInput
    Electricity?: ElectricityUncheckedUpdateManyWithoutCountriesNestedInput
    EmissionFactors?: EmissionFactorsUncheckedUpdateManyWithoutCountriesNestedInput
    Emissions?: EmissionsUncheckedUpdateManyWithoutCountriesNestedInput
    Travel?: TravelUncheckedUpdateManyWithoutCountriesNestedInput
    Users?: UsersUncheckedUpdateManyWithoutCountriesNestedInput
  }

  export type EmissionCategoriesUpsertWithoutWaterInput = {
    update: XOR<EmissionCategoriesUpdateWithoutWaterInput, EmissionCategoriesUncheckedUpdateWithoutWaterInput>
    create: XOR<EmissionCategoriesCreateWithoutWaterInput, EmissionCategoriesUncheckedCreateWithoutWaterInput>
    where?: EmissionCategoriesWhereInput
  }

  export type EmissionCategoriesUpdateToOneWithWhereWithoutWaterInput = {
    where?: EmissionCategoriesWhereInput
    data: XOR<EmissionCategoriesUpdateWithoutWaterInput, EmissionCategoriesUncheckedUpdateWithoutWaterInput>
  }

  export type EmissionCategoriesUpdateWithoutWaterInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    Electricity?: ElectricityUpdateManyWithoutEmissionCategoriesNestedInput
    EmissionFactors?: EmissionFactorsUpdateManyWithoutEmissionCategoriesNestedInput
    Emissions?: EmissionsUpdateManyWithoutEmissionCategoriesNestedInput
    Fuel?: FuelUpdateManyWithoutEmissionCategoriesNestedInput
    Travel?: TravelUpdateManyWithoutEmissionCategoriesNestedInput
  }

  export type EmissionCategoriesUncheckedUpdateWithoutWaterInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    Electricity?: ElectricityUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
    EmissionFactors?: EmissionFactorsUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
    Emissions?: EmissionsUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
    Fuel?: FuelUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
    Travel?: TravelUncheckedUpdateManyWithoutEmissionCategoriesNestedInput
  }

  export type EmissionFactorsUpsertWithoutWaterInput = {
    update: XOR<EmissionFactorsUpdateWithoutWaterInput, EmissionFactorsUncheckedUpdateWithoutWaterInput>
    create: XOR<EmissionFactorsCreateWithoutWaterInput, EmissionFactorsUncheckedCreateWithoutWaterInput>
    where?: EmissionFactorsWhereInput
  }

  export type EmissionFactorsUpdateToOneWithWhereWithoutWaterInput = {
    where?: EmissionFactorsWhereInput
    data: XOR<EmissionFactorsUpdateWithoutWaterInput, EmissionFactorsUncheckedUpdateWithoutWaterInput>
  }

  export type EmissionFactorsUpdateWithoutWaterInput = {
    factor_id?: IntFieldUpdateOperationsInput | number
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    factor_num?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Calculations?: CalculationsUpdateManyWithoutEmissionFactorsNestedInput
    Electricity?: ElectricityUpdateManyWithoutEmissionFactorsNestedInput
    Countries?: CountriesUpdateOneRequiredWithoutEmissionFactorsNestedInput
    EmissionCategories?: EmissionCategoriesUpdateOneRequiredWithoutEmissionFactorsNestedInput
    Travel?: TravelUpdateManyWithoutEmissionFactorsNestedInput
  }

  export type EmissionFactorsUncheckedUpdateWithoutWaterInput = {
    factor_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    country_id?: IntFieldUpdateOperationsInput | number
    factor_num?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Calculations?: CalculationsUncheckedUpdateManyWithoutEmissionFactorsNestedInput
    Electricity?: ElectricityUncheckedUpdateManyWithoutEmissionFactorsNestedInput
    Travel?: TravelUncheckedUpdateManyWithoutEmissionFactorsNestedInput
  }

  export type Vehicle_Fuel_RelationCreateManyCompanyVehiclesInput = {
    fuel_id: number
    vehicle_fuel_relation_id: string
  }

  export type Vehicle_Fuel_RelationUpdateWithoutCompanyVehiclesInput = {
    vehicle_fuel_relation_id?: StringFieldUpdateOperationsInput | string
    Fuel?: FuelUpdateOneRequiredWithoutVehicle_Fuel_RelationNestedInput
  }

  export type Vehicle_Fuel_RelationUncheckedUpdateWithoutCompanyVehiclesInput = {
    fuel_id?: FloatFieldUpdateOperationsInput | number
    vehicle_fuel_relation_id?: StringFieldUpdateOperationsInput | string
  }

  export type Vehicle_Fuel_RelationUncheckedUpdateManyWithoutCompanyVehiclesInput = {
    fuel_id?: FloatFieldUpdateOperationsInput | number
    vehicle_fuel_relation_id?: StringFieldUpdateOperationsInput | string
  }

  export type CalculationsCreateManyCountriesInput = {
    user_id: number
    factor_id: number
    calculation_id: string
  }

  export type ElectricityCreateManyCountriesInput = {
    electricity_id: number
    electricity_type: string
    electricity_use: number
    category_id: number
    factor_id: number
  }

  export type EmissionFactorsCreateManyCountriesInput = {
    factor_id: number
    category_id: number
    subcategory?: string | null
    factor_num: Decimal | DecimalJsLike | number | string
  }

  export type EmissionsCreateManyCountriesInput = {
    emission_id?: number
    user_id: number
    category_id: number
    emission_value: Decimal | DecimalJsLike | number | string
  }

  export type TravelCreateManyCountriesInput = {
    travel_id: number
    travel_type: string
    travel_mileage: number
    emission_id: number
    factor_id: number
  }

  export type UsersCreateManyCountriesInput = {
    user_id: number
    user_name: string
    user_company: string
    user_email: string
  }

  export type WaterCreateManyCountriesInput = {
    water_id?: number | null
    water_use: number
    emission_id: number
    factor_id: number
  }

  export type CalculationsUpdateWithoutCountriesInput = {
    calculation_id?: StringFieldUpdateOperationsInput | string
    EmissionFactors?: EmissionFactorsUpdateOneRequiredWithoutCalculationsNestedInput
    Users?: UsersUpdateOneRequiredWithoutCalculationsNestedInput
  }

  export type CalculationsUncheckedUpdateWithoutCountriesInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    factor_id?: IntFieldUpdateOperationsInput | number
    calculation_id?: StringFieldUpdateOperationsInput | string
  }

  export type CalculationsUncheckedUpdateManyWithoutCountriesInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    factor_id?: IntFieldUpdateOperationsInput | number
    calculation_id?: StringFieldUpdateOperationsInput | string
  }

  export type ElectricityUpdateWithoutCountriesInput = {
    electricity_id?: IntFieldUpdateOperationsInput | number
    electricity_type?: StringFieldUpdateOperationsInput | string
    electricity_use?: FloatFieldUpdateOperationsInput | number
    EmissionCategories?: EmissionCategoriesUpdateOneRequiredWithoutElectricityNestedInput
    EmissionFactors?: EmissionFactorsUpdateOneRequiredWithoutElectricityNestedInput
  }

  export type ElectricityUncheckedUpdateWithoutCountriesInput = {
    electricity_id?: IntFieldUpdateOperationsInput | number
    electricity_type?: StringFieldUpdateOperationsInput | string
    electricity_use?: FloatFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    factor_id?: IntFieldUpdateOperationsInput | number
  }

  export type ElectricityUncheckedUpdateManyWithoutCountriesInput = {
    electricity_id?: IntFieldUpdateOperationsInput | number
    electricity_type?: StringFieldUpdateOperationsInput | string
    electricity_use?: FloatFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    factor_id?: IntFieldUpdateOperationsInput | number
  }

  export type EmissionFactorsUpdateWithoutCountriesInput = {
    factor_id?: IntFieldUpdateOperationsInput | number
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    factor_num?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Calculations?: CalculationsUpdateManyWithoutEmissionFactorsNestedInput
    Electricity?: ElectricityUpdateManyWithoutEmissionFactorsNestedInput
    EmissionCategories?: EmissionCategoriesUpdateOneRequiredWithoutEmissionFactorsNestedInput
    Travel?: TravelUpdateManyWithoutEmissionFactorsNestedInput
    Water?: WaterUpdateManyWithoutEmissionFactorsNestedInput
  }

  export type EmissionFactorsUncheckedUpdateWithoutCountriesInput = {
    factor_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    factor_num?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Calculations?: CalculationsUncheckedUpdateManyWithoutEmissionFactorsNestedInput
    Electricity?: ElectricityUncheckedUpdateManyWithoutEmissionFactorsNestedInput
    Travel?: TravelUncheckedUpdateManyWithoutEmissionFactorsNestedInput
    Water?: WaterUncheckedUpdateManyWithoutEmissionFactorsNestedInput
  }

  export type EmissionFactorsUncheckedUpdateManyWithoutCountriesInput = {
    factor_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    factor_num?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type EmissionsUpdateWithoutCountriesInput = {
    emission_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    EmissionCategories?: EmissionCategoriesUpdateOneRequiredWithoutEmissionsNestedInput
    Users?: UsersUpdateOneRequiredWithoutEmissionsNestedInput
  }

  export type EmissionsUncheckedUpdateWithoutCountriesInput = {
    emission_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    emission_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type EmissionsUncheckedUpdateManyWithoutCountriesInput = {
    emission_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    emission_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TravelUpdateWithoutCountriesInput = {
    travel_id?: IntFieldUpdateOperationsInput | number
    travel_type?: StringFieldUpdateOperationsInput | string
    travel_mileage?: IntFieldUpdateOperationsInput | number
    EmissionCategories?: EmissionCategoriesUpdateOneRequiredWithoutTravelNestedInput
    EmissionFactors?: EmissionFactorsUpdateOneRequiredWithoutTravelNestedInput
  }

  export type TravelUncheckedUpdateWithoutCountriesInput = {
    travel_id?: IntFieldUpdateOperationsInput | number
    travel_type?: StringFieldUpdateOperationsInput | string
    travel_mileage?: IntFieldUpdateOperationsInput | number
    emission_id?: IntFieldUpdateOperationsInput | number
    factor_id?: IntFieldUpdateOperationsInput | number
  }

  export type TravelUncheckedUpdateManyWithoutCountriesInput = {
    travel_id?: IntFieldUpdateOperationsInput | number
    travel_type?: StringFieldUpdateOperationsInput | string
    travel_mileage?: IntFieldUpdateOperationsInput | number
    emission_id?: IntFieldUpdateOperationsInput | number
    factor_id?: IntFieldUpdateOperationsInput | number
  }

  export type UsersUpdateWithoutCountriesInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_company?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    Calculations?: CalculationsUpdateManyWithoutUsersNestedInput
    CompanyVehicles?: CompanyVehiclesUpdateManyWithoutUsersNestedInput
    Emissions?: EmissionsUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutCountriesInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_company?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    Calculations?: CalculationsUncheckedUpdateManyWithoutUsersNestedInput
    CompanyVehicles?: CompanyVehiclesUncheckedUpdateManyWithoutUsersNestedInput
    Emissions?: EmissionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateManyWithoutCountriesInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_company?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
  }

  export type WaterUpdateWithoutCountriesInput = {
    water_id?: NullableIntFieldUpdateOperationsInput | number | null
    water_use?: IntFieldUpdateOperationsInput | number
    EmissionCategories?: EmissionCategoriesUpdateOneRequiredWithoutWaterNestedInput
    EmissionFactors?: EmissionFactorsUpdateOneRequiredWithoutWaterNestedInput
  }

  export type WaterUncheckedUpdateWithoutCountriesInput = {
    water_id?: NullableIntFieldUpdateOperationsInput | number | null
    water_use?: IntFieldUpdateOperationsInput | number
    emission_id?: IntFieldUpdateOperationsInput | number
    factor_id?: IntFieldUpdateOperationsInput | number
  }

  export type WaterUncheckedUpdateManyWithoutCountriesInput = {
    water_id?: NullableIntFieldUpdateOperationsInput | number | null
    water_use?: IntFieldUpdateOperationsInput | number
    emission_id?: IntFieldUpdateOperationsInput | number
    factor_id?: IntFieldUpdateOperationsInput | number
  }

  export type ElectricityCreateManyEmissionCategoriesInput = {
    electricity_id: number
    electricity_type: string
    electricity_use: number
    country_id: number
    factor_id: number
  }

  export type EmissionFactorsCreateManyEmissionCategoriesInput = {
    factor_id: number
    subcategory?: string | null
    country_id: number
    factor_num: Decimal | DecimalJsLike | number | string
  }

  export type EmissionsCreateManyEmissionCategoriesInput = {
    emission_id?: number
    user_id: number
    country_id: number
    emission_value: Decimal | DecimalJsLike | number | string
  }

  export type FuelCreateManyEmissionCategoriesInput = {
    fuel_id: number
    fuel_name: string
  }

  export type TravelCreateManyEmissionCategoriesInput = {
    travel_id: number
    travel_type: string
    travel_mileage: number
    country_id: number
    factor_id: number
  }

  export type WaterCreateManyEmissionCategoriesInput = {
    water_id?: number | null
    water_use: number
    country_id: number
    factor_id: number
  }

  export type ElectricityUpdateWithoutEmissionCategoriesInput = {
    electricity_id?: IntFieldUpdateOperationsInput | number
    electricity_type?: StringFieldUpdateOperationsInput | string
    electricity_use?: FloatFieldUpdateOperationsInput | number
    Countries?: CountriesUpdateOneRequiredWithoutElectricityNestedInput
    EmissionFactors?: EmissionFactorsUpdateOneRequiredWithoutElectricityNestedInput
  }

  export type ElectricityUncheckedUpdateWithoutEmissionCategoriesInput = {
    electricity_id?: IntFieldUpdateOperationsInput | number
    electricity_type?: StringFieldUpdateOperationsInput | string
    electricity_use?: FloatFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    factor_id?: IntFieldUpdateOperationsInput | number
  }

  export type ElectricityUncheckedUpdateManyWithoutEmissionCategoriesInput = {
    electricity_id?: IntFieldUpdateOperationsInput | number
    electricity_type?: StringFieldUpdateOperationsInput | string
    electricity_use?: FloatFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    factor_id?: IntFieldUpdateOperationsInput | number
  }

  export type EmissionFactorsUpdateWithoutEmissionCategoriesInput = {
    factor_id?: IntFieldUpdateOperationsInput | number
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    factor_num?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Calculations?: CalculationsUpdateManyWithoutEmissionFactorsNestedInput
    Electricity?: ElectricityUpdateManyWithoutEmissionFactorsNestedInput
    Countries?: CountriesUpdateOneRequiredWithoutEmissionFactorsNestedInput
    Travel?: TravelUpdateManyWithoutEmissionFactorsNestedInput
    Water?: WaterUpdateManyWithoutEmissionFactorsNestedInput
  }

  export type EmissionFactorsUncheckedUpdateWithoutEmissionCategoriesInput = {
    factor_id?: IntFieldUpdateOperationsInput | number
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    country_id?: IntFieldUpdateOperationsInput | number
    factor_num?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Calculations?: CalculationsUncheckedUpdateManyWithoutEmissionFactorsNestedInput
    Electricity?: ElectricityUncheckedUpdateManyWithoutEmissionFactorsNestedInput
    Travel?: TravelUncheckedUpdateManyWithoutEmissionFactorsNestedInput
    Water?: WaterUncheckedUpdateManyWithoutEmissionFactorsNestedInput
  }

  export type EmissionFactorsUncheckedUpdateManyWithoutEmissionCategoriesInput = {
    factor_id?: IntFieldUpdateOperationsInput | number
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    country_id?: IntFieldUpdateOperationsInput | number
    factor_num?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type EmissionsUpdateWithoutEmissionCategoriesInput = {
    emission_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Countries?: CountriesUpdateOneRequiredWithoutEmissionsNestedInput
    Users?: UsersUpdateOneRequiredWithoutEmissionsNestedInput
  }

  export type EmissionsUncheckedUpdateWithoutEmissionCategoriesInput = {
    emission_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    emission_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type EmissionsUncheckedUpdateManyWithoutEmissionCategoriesInput = {
    emission_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    emission_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type FuelUpdateWithoutEmissionCategoriesInput = {
    fuel_id?: FloatFieldUpdateOperationsInput | number
    fuel_name?: StringFieldUpdateOperationsInput | string
    Vehicle_Fuel_Relation?: Vehicle_Fuel_RelationUpdateManyWithoutFuelNestedInput
  }

  export type FuelUncheckedUpdateWithoutEmissionCategoriesInput = {
    fuel_id?: FloatFieldUpdateOperationsInput | number
    fuel_name?: StringFieldUpdateOperationsInput | string
    Vehicle_Fuel_Relation?: Vehicle_Fuel_RelationUncheckedUpdateManyWithoutFuelNestedInput
  }

  export type FuelUncheckedUpdateManyWithoutEmissionCategoriesInput = {
    fuel_id?: FloatFieldUpdateOperationsInput | number
    fuel_name?: StringFieldUpdateOperationsInput | string
  }

  export type TravelUpdateWithoutEmissionCategoriesInput = {
    travel_id?: IntFieldUpdateOperationsInput | number
    travel_type?: StringFieldUpdateOperationsInput | string
    travel_mileage?: IntFieldUpdateOperationsInput | number
    Countries?: CountriesUpdateOneRequiredWithoutTravelNestedInput
    EmissionFactors?: EmissionFactorsUpdateOneRequiredWithoutTravelNestedInput
  }

  export type TravelUncheckedUpdateWithoutEmissionCategoriesInput = {
    travel_id?: IntFieldUpdateOperationsInput | number
    travel_type?: StringFieldUpdateOperationsInput | string
    travel_mileage?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    factor_id?: IntFieldUpdateOperationsInput | number
  }

  export type TravelUncheckedUpdateManyWithoutEmissionCategoriesInput = {
    travel_id?: IntFieldUpdateOperationsInput | number
    travel_type?: StringFieldUpdateOperationsInput | string
    travel_mileage?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    factor_id?: IntFieldUpdateOperationsInput | number
  }

  export type WaterUpdateWithoutEmissionCategoriesInput = {
    water_id?: NullableIntFieldUpdateOperationsInput | number | null
    water_use?: IntFieldUpdateOperationsInput | number
    Countries?: CountriesUpdateOneRequiredWithoutWaterNestedInput
    EmissionFactors?: EmissionFactorsUpdateOneRequiredWithoutWaterNestedInput
  }

  export type WaterUncheckedUpdateWithoutEmissionCategoriesInput = {
    water_id?: NullableIntFieldUpdateOperationsInput | number | null
    water_use?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    factor_id?: IntFieldUpdateOperationsInput | number
  }

  export type WaterUncheckedUpdateManyWithoutEmissionCategoriesInput = {
    water_id?: NullableIntFieldUpdateOperationsInput | number | null
    water_use?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    factor_id?: IntFieldUpdateOperationsInput | number
  }

  export type CalculationsCreateManyEmissionFactorsInput = {
    user_id: number
    country_id: number
    calculation_id: string
  }

  export type ElectricityCreateManyEmissionFactorsInput = {
    electricity_id: number
    electricity_type: string
    electricity_use: number
    country_id: number
    category_id: number
  }

  export type TravelCreateManyEmissionFactorsInput = {
    travel_id: number
    travel_type: string
    travel_mileage: number
    country_id: number
    emission_id: number
  }

  export type WaterCreateManyEmissionFactorsInput = {
    water_id?: number | null
    water_use: number
    country_id: number
    emission_id: number
  }

  export type CalculationsUpdateWithoutEmissionFactorsInput = {
    calculation_id?: StringFieldUpdateOperationsInput | string
    Countries?: CountriesUpdateOneRequiredWithoutCalculationsNestedInput
    Users?: UsersUpdateOneRequiredWithoutCalculationsNestedInput
  }

  export type CalculationsUncheckedUpdateWithoutEmissionFactorsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    calculation_id?: StringFieldUpdateOperationsInput | string
  }

  export type CalculationsUncheckedUpdateManyWithoutEmissionFactorsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    calculation_id?: StringFieldUpdateOperationsInput | string
  }

  export type ElectricityUpdateWithoutEmissionFactorsInput = {
    electricity_id?: IntFieldUpdateOperationsInput | number
    electricity_type?: StringFieldUpdateOperationsInput | string
    electricity_use?: FloatFieldUpdateOperationsInput | number
    Countries?: CountriesUpdateOneRequiredWithoutElectricityNestedInput
    EmissionCategories?: EmissionCategoriesUpdateOneRequiredWithoutElectricityNestedInput
  }

  export type ElectricityUncheckedUpdateWithoutEmissionFactorsInput = {
    electricity_id?: IntFieldUpdateOperationsInput | number
    electricity_type?: StringFieldUpdateOperationsInput | string
    electricity_use?: FloatFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type ElectricityUncheckedUpdateManyWithoutEmissionFactorsInput = {
    electricity_id?: IntFieldUpdateOperationsInput | number
    electricity_type?: StringFieldUpdateOperationsInput | string
    electricity_use?: FloatFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type TravelUpdateWithoutEmissionFactorsInput = {
    travel_id?: IntFieldUpdateOperationsInput | number
    travel_type?: StringFieldUpdateOperationsInput | string
    travel_mileage?: IntFieldUpdateOperationsInput | number
    Countries?: CountriesUpdateOneRequiredWithoutTravelNestedInput
    EmissionCategories?: EmissionCategoriesUpdateOneRequiredWithoutTravelNestedInput
  }

  export type TravelUncheckedUpdateWithoutEmissionFactorsInput = {
    travel_id?: IntFieldUpdateOperationsInput | number
    travel_type?: StringFieldUpdateOperationsInput | string
    travel_mileage?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    emission_id?: IntFieldUpdateOperationsInput | number
  }

  export type TravelUncheckedUpdateManyWithoutEmissionFactorsInput = {
    travel_id?: IntFieldUpdateOperationsInput | number
    travel_type?: StringFieldUpdateOperationsInput | string
    travel_mileage?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    emission_id?: IntFieldUpdateOperationsInput | number
  }

  export type WaterUpdateWithoutEmissionFactorsInput = {
    water_id?: NullableIntFieldUpdateOperationsInput | number | null
    water_use?: IntFieldUpdateOperationsInput | number
    Countries?: CountriesUpdateOneRequiredWithoutWaterNestedInput
    EmissionCategories?: EmissionCategoriesUpdateOneRequiredWithoutWaterNestedInput
  }

  export type WaterUncheckedUpdateWithoutEmissionFactorsInput = {
    water_id?: NullableIntFieldUpdateOperationsInput | number | null
    water_use?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    emission_id?: IntFieldUpdateOperationsInput | number
  }

  export type WaterUncheckedUpdateManyWithoutEmissionFactorsInput = {
    water_id?: NullableIntFieldUpdateOperationsInput | number | null
    water_use?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    emission_id?: IntFieldUpdateOperationsInput | number
  }

  export type Vehicle_Fuel_RelationCreateManyFuelInput = {
    vehicle_id: number
    vehicle_fuel_relation_id: string
  }

  export type Vehicle_Fuel_RelationUpdateWithoutFuelInput = {
    vehicle_fuel_relation_id?: StringFieldUpdateOperationsInput | string
    CompanyVehicles?: CompanyVehiclesUpdateOneRequiredWithoutVehicle_Fuel_RelationNestedInput
  }

  export type Vehicle_Fuel_RelationUncheckedUpdateWithoutFuelInput = {
    vehicle_id?: IntFieldUpdateOperationsInput | number
    vehicle_fuel_relation_id?: StringFieldUpdateOperationsInput | string
  }

  export type Vehicle_Fuel_RelationUncheckedUpdateManyWithoutFuelInput = {
    vehicle_id?: IntFieldUpdateOperationsInput | number
    vehicle_fuel_relation_id?: StringFieldUpdateOperationsInput | string
  }

  export type CalculationsCreateManyUsersInput = {
    country_id: number
    factor_id: number
    calculation_id: string
  }

  export type CompanyVehiclesCreateManyUsersInput = {
    vehicle_id: number
    vehicle_type: string
    vehicle_model: string
    vehicle_mileage: number
  }

  export type EmissionsCreateManyUsersInput = {
    emission_id?: number
    country_id: number
    category_id: number
    emission_value: Decimal | DecimalJsLike | number | string
  }

  export type CalculationsUpdateWithoutUsersInput = {
    calculation_id?: StringFieldUpdateOperationsInput | string
    Countries?: CountriesUpdateOneRequiredWithoutCalculationsNestedInput
    EmissionFactors?: EmissionFactorsUpdateOneRequiredWithoutCalculationsNestedInput
  }

  export type CalculationsUncheckedUpdateWithoutUsersInput = {
    country_id?: IntFieldUpdateOperationsInput | number
    factor_id?: IntFieldUpdateOperationsInput | number
    calculation_id?: StringFieldUpdateOperationsInput | string
  }

  export type CalculationsUncheckedUpdateManyWithoutUsersInput = {
    country_id?: IntFieldUpdateOperationsInput | number
    factor_id?: IntFieldUpdateOperationsInput | number
    calculation_id?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyVehiclesUpdateWithoutUsersInput = {
    vehicle_id?: IntFieldUpdateOperationsInput | number
    vehicle_type?: StringFieldUpdateOperationsInput | string
    vehicle_model?: StringFieldUpdateOperationsInput | string
    vehicle_mileage?: IntFieldUpdateOperationsInput | number
    Vehicle_Fuel_Relation?: Vehicle_Fuel_RelationUpdateManyWithoutCompanyVehiclesNestedInput
  }

  export type CompanyVehiclesUncheckedUpdateWithoutUsersInput = {
    vehicle_id?: IntFieldUpdateOperationsInput | number
    vehicle_type?: StringFieldUpdateOperationsInput | string
    vehicle_model?: StringFieldUpdateOperationsInput | string
    vehicle_mileage?: IntFieldUpdateOperationsInput | number
    Vehicle_Fuel_Relation?: Vehicle_Fuel_RelationUncheckedUpdateManyWithoutCompanyVehiclesNestedInput
  }

  export type CompanyVehiclesUncheckedUpdateManyWithoutUsersInput = {
    vehicle_id?: IntFieldUpdateOperationsInput | number
    vehicle_type?: StringFieldUpdateOperationsInput | string
    vehicle_model?: StringFieldUpdateOperationsInput | string
    vehicle_mileage?: IntFieldUpdateOperationsInput | number
  }

  export type EmissionsUpdateWithoutUsersInput = {
    emission_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Countries?: CountriesUpdateOneRequiredWithoutEmissionsNestedInput
    EmissionCategories?: EmissionCategoriesUpdateOneRequiredWithoutEmissionsNestedInput
  }

  export type EmissionsUncheckedUpdateWithoutUsersInput = {
    emission_id?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    emission_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type EmissionsUncheckedUpdateManyWithoutUsersInput = {
    emission_id?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    emission_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}