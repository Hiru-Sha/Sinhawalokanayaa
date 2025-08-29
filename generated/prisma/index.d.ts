
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
 * Model NominationCategory
 * 
 */
export type NominationCategory = $Result.DefaultSelection<Prisma.$NominationCategoryPayload>
/**
 * Model Nomination
 * 
 */
export type Nomination = $Result.DefaultSelection<Prisma.$NominationPayload>
/**
 * Model GalleryItem
 * 
 */
export type GalleryItem = $Result.DefaultSelection<Prisma.$GalleryItemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more NominationCategories
 * const nominationCategories = await prisma.nominationCategory.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more NominationCategories
   * const nominationCategories = await prisma.nominationCategory.findMany()
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
   * `prisma.nominationCategory`: Exposes CRUD operations for the **NominationCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NominationCategories
    * const nominationCategories = await prisma.nominationCategory.findMany()
    * ```
    */
  get nominationCategory(): Prisma.NominationCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nomination`: Exposes CRUD operations for the **Nomination** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nominations
    * const nominations = await prisma.nomination.findMany()
    * ```
    */
  get nomination(): Prisma.NominationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.galleryItem`: Exposes CRUD operations for the **GalleryItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GalleryItems
    * const galleryItems = await prisma.galleryItem.findMany()
    * ```
    */
  get galleryItem(): Prisma.GalleryItemDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
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
    NominationCategory: 'NominationCategory',
    Nomination: 'Nomination',
    GalleryItem: 'GalleryItem'
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
      modelProps: "nominationCategory" | "nomination" | "galleryItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      NominationCategory: {
        payload: Prisma.$NominationCategoryPayload<ExtArgs>
        fields: Prisma.NominationCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NominationCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NominationCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NominationCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NominationCategoryPayload>
          }
          findFirst: {
            args: Prisma.NominationCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NominationCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NominationCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NominationCategoryPayload>
          }
          findMany: {
            args: Prisma.NominationCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NominationCategoryPayload>[]
          }
          create: {
            args: Prisma.NominationCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NominationCategoryPayload>
          }
          createMany: {
            args: Prisma.NominationCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NominationCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NominationCategoryPayload>[]
          }
          delete: {
            args: Prisma.NominationCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NominationCategoryPayload>
          }
          update: {
            args: Prisma.NominationCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NominationCategoryPayload>
          }
          deleteMany: {
            args: Prisma.NominationCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NominationCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NominationCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NominationCategoryPayload>[]
          }
          upsert: {
            args: Prisma.NominationCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NominationCategoryPayload>
          }
          aggregate: {
            args: Prisma.NominationCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNominationCategory>
          }
          groupBy: {
            args: Prisma.NominationCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<NominationCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.NominationCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<NominationCategoryCountAggregateOutputType> | number
          }
        }
      }
      Nomination: {
        payload: Prisma.$NominationPayload<ExtArgs>
        fields: Prisma.NominationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NominationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NominationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NominationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NominationPayload>
          }
          findFirst: {
            args: Prisma.NominationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NominationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NominationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NominationPayload>
          }
          findMany: {
            args: Prisma.NominationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NominationPayload>[]
          }
          create: {
            args: Prisma.NominationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NominationPayload>
          }
          createMany: {
            args: Prisma.NominationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NominationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NominationPayload>[]
          }
          delete: {
            args: Prisma.NominationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NominationPayload>
          }
          update: {
            args: Prisma.NominationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NominationPayload>
          }
          deleteMany: {
            args: Prisma.NominationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NominationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NominationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NominationPayload>[]
          }
          upsert: {
            args: Prisma.NominationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NominationPayload>
          }
          aggregate: {
            args: Prisma.NominationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNomination>
          }
          groupBy: {
            args: Prisma.NominationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NominationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NominationCountArgs<ExtArgs>
            result: $Utils.Optional<NominationCountAggregateOutputType> | number
          }
        }
      }
      GalleryItem: {
        payload: Prisma.$GalleryItemPayload<ExtArgs>
        fields: Prisma.GalleryItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalleryItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalleryItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          findFirst: {
            args: Prisma.GalleryItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalleryItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          findMany: {
            args: Prisma.GalleryItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>[]
          }
          create: {
            args: Prisma.GalleryItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          createMany: {
            args: Prisma.GalleryItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GalleryItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>[]
          }
          delete: {
            args: Prisma.GalleryItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          update: {
            args: Prisma.GalleryItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          deleteMany: {
            args: Prisma.GalleryItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GalleryItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GalleryItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>[]
          }
          upsert: {
            args: Prisma.GalleryItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          aggregate: {
            args: Prisma.GalleryItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGalleryItem>
          }
          groupBy: {
            args: Prisma.GalleryItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<GalleryItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.GalleryItemCountArgs<ExtArgs>
            result: $Utils.Optional<GalleryItemCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    nominationCategory?: NominationCategoryOmit
    nomination?: NominationOmit
    galleryItem?: GalleryItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type NominationCategoryCountOutputType
   */

  export type NominationCategoryCountOutputType = {
    nominations: number
  }

  export type NominationCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nominations?: boolean | NominationCategoryCountOutputTypeCountNominationsArgs
  }

  // Custom InputTypes
  /**
   * NominationCategoryCountOutputType without action
   */
  export type NominationCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NominationCategoryCountOutputType
     */
    select?: NominationCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NominationCategoryCountOutputType without action
   */
  export type NominationCategoryCountOutputTypeCountNominationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NominationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model NominationCategory
   */

  export type AggregateNominationCategory = {
    _count: NominationCategoryCountAggregateOutputType | null
    _avg: NominationCategoryAvgAggregateOutputType | null
    _sum: NominationCategorySumAggregateOutputType | null
    _min: NominationCategoryMinAggregateOutputType | null
    _max: NominationCategoryMaxAggregateOutputType | null
  }

  export type NominationCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type NominationCategorySumAggregateOutputType = {
    id: number | null
  }

  export type NominationCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    mediaUrl: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NominationCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    mediaUrl: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NominationCategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    mediaUrl: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NominationCategoryAvgAggregateInputType = {
    id?: true
  }

  export type NominationCategorySumAggregateInputType = {
    id?: true
  }

  export type NominationCategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    mediaUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NominationCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    mediaUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NominationCategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    mediaUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NominationCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NominationCategory to aggregate.
     */
    where?: NominationCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NominationCategories to fetch.
     */
    orderBy?: NominationCategoryOrderByWithRelationInput | NominationCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NominationCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NominationCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NominationCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NominationCategories
    **/
    _count?: true | NominationCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NominationCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NominationCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NominationCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NominationCategoryMaxAggregateInputType
  }

  export type GetNominationCategoryAggregateType<T extends NominationCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateNominationCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNominationCategory[P]>
      : GetScalarType<T[P], AggregateNominationCategory[P]>
  }




  export type NominationCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NominationCategoryWhereInput
    orderBy?: NominationCategoryOrderByWithAggregationInput | NominationCategoryOrderByWithAggregationInput[]
    by: NominationCategoryScalarFieldEnum[] | NominationCategoryScalarFieldEnum
    having?: NominationCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NominationCategoryCountAggregateInputType | true
    _avg?: NominationCategoryAvgAggregateInputType
    _sum?: NominationCategorySumAggregateInputType
    _min?: NominationCategoryMinAggregateInputType
    _max?: NominationCategoryMaxAggregateInputType
  }

  export type NominationCategoryGroupByOutputType = {
    id: number
    name: string
    description: string | null
    mediaUrl: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: NominationCategoryCountAggregateOutputType | null
    _avg: NominationCategoryAvgAggregateOutputType | null
    _sum: NominationCategorySumAggregateOutputType | null
    _min: NominationCategoryMinAggregateOutputType | null
    _max: NominationCategoryMaxAggregateOutputType | null
  }

  type GetNominationCategoryGroupByPayload<T extends NominationCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NominationCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NominationCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NominationCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], NominationCategoryGroupByOutputType[P]>
        }
      >
    >


  export type NominationCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    mediaUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nominations?: boolean | NominationCategory$nominationsArgs<ExtArgs>
    _count?: boolean | NominationCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nominationCategory"]>

  export type NominationCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    mediaUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["nominationCategory"]>

  export type NominationCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    mediaUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["nominationCategory"]>

  export type NominationCategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    mediaUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NominationCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "mediaUrl" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["nominationCategory"]>
  export type NominationCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nominations?: boolean | NominationCategory$nominationsArgs<ExtArgs>
    _count?: boolean | NominationCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NominationCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NominationCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NominationCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NominationCategory"
    objects: {
      nominations: Prisma.$NominationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      mediaUrl: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["nominationCategory"]>
    composites: {}
  }

  type NominationCategoryGetPayload<S extends boolean | null | undefined | NominationCategoryDefaultArgs> = $Result.GetResult<Prisma.$NominationCategoryPayload, S>

  type NominationCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NominationCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NominationCategoryCountAggregateInputType | true
    }

  export interface NominationCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NominationCategory'], meta: { name: 'NominationCategory' } }
    /**
     * Find zero or one NominationCategory that matches the filter.
     * @param {NominationCategoryFindUniqueArgs} args - Arguments to find a NominationCategory
     * @example
     * // Get one NominationCategory
     * const nominationCategory = await prisma.nominationCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NominationCategoryFindUniqueArgs>(args: SelectSubset<T, NominationCategoryFindUniqueArgs<ExtArgs>>): Prisma__NominationCategoryClient<$Result.GetResult<Prisma.$NominationCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NominationCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NominationCategoryFindUniqueOrThrowArgs} args - Arguments to find a NominationCategory
     * @example
     * // Get one NominationCategory
     * const nominationCategory = await prisma.nominationCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NominationCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, NominationCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NominationCategoryClient<$Result.GetResult<Prisma.$NominationCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NominationCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NominationCategoryFindFirstArgs} args - Arguments to find a NominationCategory
     * @example
     * // Get one NominationCategory
     * const nominationCategory = await prisma.nominationCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NominationCategoryFindFirstArgs>(args?: SelectSubset<T, NominationCategoryFindFirstArgs<ExtArgs>>): Prisma__NominationCategoryClient<$Result.GetResult<Prisma.$NominationCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NominationCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NominationCategoryFindFirstOrThrowArgs} args - Arguments to find a NominationCategory
     * @example
     * // Get one NominationCategory
     * const nominationCategory = await prisma.nominationCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NominationCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, NominationCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__NominationCategoryClient<$Result.GetResult<Prisma.$NominationCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NominationCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NominationCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NominationCategories
     * const nominationCategories = await prisma.nominationCategory.findMany()
     * 
     * // Get first 10 NominationCategories
     * const nominationCategories = await prisma.nominationCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nominationCategoryWithIdOnly = await prisma.nominationCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NominationCategoryFindManyArgs>(args?: SelectSubset<T, NominationCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NominationCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NominationCategory.
     * @param {NominationCategoryCreateArgs} args - Arguments to create a NominationCategory.
     * @example
     * // Create one NominationCategory
     * const NominationCategory = await prisma.nominationCategory.create({
     *   data: {
     *     // ... data to create a NominationCategory
     *   }
     * })
     * 
     */
    create<T extends NominationCategoryCreateArgs>(args: SelectSubset<T, NominationCategoryCreateArgs<ExtArgs>>): Prisma__NominationCategoryClient<$Result.GetResult<Prisma.$NominationCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NominationCategories.
     * @param {NominationCategoryCreateManyArgs} args - Arguments to create many NominationCategories.
     * @example
     * // Create many NominationCategories
     * const nominationCategory = await prisma.nominationCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NominationCategoryCreateManyArgs>(args?: SelectSubset<T, NominationCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NominationCategories and returns the data saved in the database.
     * @param {NominationCategoryCreateManyAndReturnArgs} args - Arguments to create many NominationCategories.
     * @example
     * // Create many NominationCategories
     * const nominationCategory = await prisma.nominationCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NominationCategories and only return the `id`
     * const nominationCategoryWithIdOnly = await prisma.nominationCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NominationCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, NominationCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NominationCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NominationCategory.
     * @param {NominationCategoryDeleteArgs} args - Arguments to delete one NominationCategory.
     * @example
     * // Delete one NominationCategory
     * const NominationCategory = await prisma.nominationCategory.delete({
     *   where: {
     *     // ... filter to delete one NominationCategory
     *   }
     * })
     * 
     */
    delete<T extends NominationCategoryDeleteArgs>(args: SelectSubset<T, NominationCategoryDeleteArgs<ExtArgs>>): Prisma__NominationCategoryClient<$Result.GetResult<Prisma.$NominationCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NominationCategory.
     * @param {NominationCategoryUpdateArgs} args - Arguments to update one NominationCategory.
     * @example
     * // Update one NominationCategory
     * const nominationCategory = await prisma.nominationCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NominationCategoryUpdateArgs>(args: SelectSubset<T, NominationCategoryUpdateArgs<ExtArgs>>): Prisma__NominationCategoryClient<$Result.GetResult<Prisma.$NominationCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NominationCategories.
     * @param {NominationCategoryDeleteManyArgs} args - Arguments to filter NominationCategories to delete.
     * @example
     * // Delete a few NominationCategories
     * const { count } = await prisma.nominationCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NominationCategoryDeleteManyArgs>(args?: SelectSubset<T, NominationCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NominationCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NominationCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NominationCategories
     * const nominationCategory = await prisma.nominationCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NominationCategoryUpdateManyArgs>(args: SelectSubset<T, NominationCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NominationCategories and returns the data updated in the database.
     * @param {NominationCategoryUpdateManyAndReturnArgs} args - Arguments to update many NominationCategories.
     * @example
     * // Update many NominationCategories
     * const nominationCategory = await prisma.nominationCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NominationCategories and only return the `id`
     * const nominationCategoryWithIdOnly = await prisma.nominationCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NominationCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, NominationCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NominationCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NominationCategory.
     * @param {NominationCategoryUpsertArgs} args - Arguments to update or create a NominationCategory.
     * @example
     * // Update or create a NominationCategory
     * const nominationCategory = await prisma.nominationCategory.upsert({
     *   create: {
     *     // ... data to create a NominationCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NominationCategory we want to update
     *   }
     * })
     */
    upsert<T extends NominationCategoryUpsertArgs>(args: SelectSubset<T, NominationCategoryUpsertArgs<ExtArgs>>): Prisma__NominationCategoryClient<$Result.GetResult<Prisma.$NominationCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NominationCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NominationCategoryCountArgs} args - Arguments to filter NominationCategories to count.
     * @example
     * // Count the number of NominationCategories
     * const count = await prisma.nominationCategory.count({
     *   where: {
     *     // ... the filter for the NominationCategories we want to count
     *   }
     * })
    **/
    count<T extends NominationCategoryCountArgs>(
      args?: Subset<T, NominationCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NominationCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NominationCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NominationCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NominationCategoryAggregateArgs>(args: Subset<T, NominationCategoryAggregateArgs>): Prisma.PrismaPromise<GetNominationCategoryAggregateType<T>>

    /**
     * Group by NominationCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NominationCategoryGroupByArgs} args - Group by arguments.
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
      T extends NominationCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NominationCategoryGroupByArgs['orderBy'] }
        : { orderBy?: NominationCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NominationCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNominationCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NominationCategory model
   */
  readonly fields: NominationCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NominationCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NominationCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    nominations<T extends NominationCategory$nominationsArgs<ExtArgs> = {}>(args?: Subset<T, NominationCategory$nominationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NominationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the NominationCategory model
   */
  interface NominationCategoryFieldRefs {
    readonly id: FieldRef<"NominationCategory", 'Int'>
    readonly name: FieldRef<"NominationCategory", 'String'>
    readonly description: FieldRef<"NominationCategory", 'String'>
    readonly mediaUrl: FieldRef<"NominationCategory", 'String'>
    readonly status: FieldRef<"NominationCategory", 'String'>
    readonly createdAt: FieldRef<"NominationCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"NominationCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NominationCategory findUnique
   */
  export type NominationCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NominationCategory
     */
    select?: NominationCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NominationCategory
     */
    omit?: NominationCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NominationCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NominationCategory to fetch.
     */
    where: NominationCategoryWhereUniqueInput
  }

  /**
   * NominationCategory findUniqueOrThrow
   */
  export type NominationCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NominationCategory
     */
    select?: NominationCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NominationCategory
     */
    omit?: NominationCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NominationCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NominationCategory to fetch.
     */
    where: NominationCategoryWhereUniqueInput
  }

  /**
   * NominationCategory findFirst
   */
  export type NominationCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NominationCategory
     */
    select?: NominationCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NominationCategory
     */
    omit?: NominationCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NominationCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NominationCategory to fetch.
     */
    where?: NominationCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NominationCategories to fetch.
     */
    orderBy?: NominationCategoryOrderByWithRelationInput | NominationCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NominationCategories.
     */
    cursor?: NominationCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NominationCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NominationCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NominationCategories.
     */
    distinct?: NominationCategoryScalarFieldEnum | NominationCategoryScalarFieldEnum[]
  }

  /**
   * NominationCategory findFirstOrThrow
   */
  export type NominationCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NominationCategory
     */
    select?: NominationCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NominationCategory
     */
    omit?: NominationCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NominationCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NominationCategory to fetch.
     */
    where?: NominationCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NominationCategories to fetch.
     */
    orderBy?: NominationCategoryOrderByWithRelationInput | NominationCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NominationCategories.
     */
    cursor?: NominationCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NominationCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NominationCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NominationCategories.
     */
    distinct?: NominationCategoryScalarFieldEnum | NominationCategoryScalarFieldEnum[]
  }

  /**
   * NominationCategory findMany
   */
  export type NominationCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NominationCategory
     */
    select?: NominationCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NominationCategory
     */
    omit?: NominationCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NominationCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NominationCategories to fetch.
     */
    where?: NominationCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NominationCategories to fetch.
     */
    orderBy?: NominationCategoryOrderByWithRelationInput | NominationCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NominationCategories.
     */
    cursor?: NominationCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NominationCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NominationCategories.
     */
    skip?: number
    distinct?: NominationCategoryScalarFieldEnum | NominationCategoryScalarFieldEnum[]
  }

  /**
   * NominationCategory create
   */
  export type NominationCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NominationCategory
     */
    select?: NominationCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NominationCategory
     */
    omit?: NominationCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NominationCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a NominationCategory.
     */
    data: XOR<NominationCategoryCreateInput, NominationCategoryUncheckedCreateInput>
  }

  /**
   * NominationCategory createMany
   */
  export type NominationCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NominationCategories.
     */
    data: NominationCategoryCreateManyInput | NominationCategoryCreateManyInput[]
  }

  /**
   * NominationCategory createManyAndReturn
   */
  export type NominationCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NominationCategory
     */
    select?: NominationCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NominationCategory
     */
    omit?: NominationCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many NominationCategories.
     */
    data: NominationCategoryCreateManyInput | NominationCategoryCreateManyInput[]
  }

  /**
   * NominationCategory update
   */
  export type NominationCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NominationCategory
     */
    select?: NominationCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NominationCategory
     */
    omit?: NominationCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NominationCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a NominationCategory.
     */
    data: XOR<NominationCategoryUpdateInput, NominationCategoryUncheckedUpdateInput>
    /**
     * Choose, which NominationCategory to update.
     */
    where: NominationCategoryWhereUniqueInput
  }

  /**
   * NominationCategory updateMany
   */
  export type NominationCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NominationCategories.
     */
    data: XOR<NominationCategoryUpdateManyMutationInput, NominationCategoryUncheckedUpdateManyInput>
    /**
     * Filter which NominationCategories to update
     */
    where?: NominationCategoryWhereInput
    /**
     * Limit how many NominationCategories to update.
     */
    limit?: number
  }

  /**
   * NominationCategory updateManyAndReturn
   */
  export type NominationCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NominationCategory
     */
    select?: NominationCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NominationCategory
     */
    omit?: NominationCategoryOmit<ExtArgs> | null
    /**
     * The data used to update NominationCategories.
     */
    data: XOR<NominationCategoryUpdateManyMutationInput, NominationCategoryUncheckedUpdateManyInput>
    /**
     * Filter which NominationCategories to update
     */
    where?: NominationCategoryWhereInput
    /**
     * Limit how many NominationCategories to update.
     */
    limit?: number
  }

  /**
   * NominationCategory upsert
   */
  export type NominationCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NominationCategory
     */
    select?: NominationCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NominationCategory
     */
    omit?: NominationCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NominationCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the NominationCategory to update in case it exists.
     */
    where: NominationCategoryWhereUniqueInput
    /**
     * In case the NominationCategory found by the `where` argument doesn't exist, create a new NominationCategory with this data.
     */
    create: XOR<NominationCategoryCreateInput, NominationCategoryUncheckedCreateInput>
    /**
     * In case the NominationCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NominationCategoryUpdateInput, NominationCategoryUncheckedUpdateInput>
  }

  /**
   * NominationCategory delete
   */
  export type NominationCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NominationCategory
     */
    select?: NominationCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NominationCategory
     */
    omit?: NominationCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NominationCategoryInclude<ExtArgs> | null
    /**
     * Filter which NominationCategory to delete.
     */
    where: NominationCategoryWhereUniqueInput
  }

  /**
   * NominationCategory deleteMany
   */
  export type NominationCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NominationCategories to delete
     */
    where?: NominationCategoryWhereInput
    /**
     * Limit how many NominationCategories to delete.
     */
    limit?: number
  }

  /**
   * NominationCategory.nominations
   */
  export type NominationCategory$nominationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomination
     */
    select?: NominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomination
     */
    omit?: NominationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NominationInclude<ExtArgs> | null
    where?: NominationWhereInput
    orderBy?: NominationOrderByWithRelationInput | NominationOrderByWithRelationInput[]
    cursor?: NominationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NominationScalarFieldEnum | NominationScalarFieldEnum[]
  }

  /**
   * NominationCategory without action
   */
  export type NominationCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NominationCategory
     */
    select?: NominationCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NominationCategory
     */
    omit?: NominationCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NominationCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Nomination
   */

  export type AggregateNomination = {
    _count: NominationCountAggregateOutputType | null
    _avg: NominationAvgAggregateOutputType | null
    _sum: NominationSumAggregateOutputType | null
    _min: NominationMinAggregateOutputType | null
    _max: NominationMaxAggregateOutputType | null
  }

  export type NominationAvgAggregateOutputType = {
    id: number | null
    age: number | null
    categoryId: number | null
  }

  export type NominationSumAggregateOutputType = {
    id: number | null
    age: number | null
    categoryId: number | null
  }

  export type NominationMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    age: number | null
    email: string | null
    phoneNumber: string | null
    achievements: string | null
    documentUrl: string | null
    mediaUrl: string | null
    type: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: number | null
  }

  export type NominationMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    age: number | null
    email: string | null
    phoneNumber: string | null
    achievements: string | null
    documentUrl: string | null
    mediaUrl: string | null
    type: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: number | null
  }

  export type NominationCountAggregateOutputType = {
    id: number
    fullName: number
    age: number
    email: number
    phoneNumber: number
    achievements: number
    documentUrl: number
    mediaUrl: number
    type: number
    status: number
    createdAt: number
    updatedAt: number
    categoryId: number
    _all: number
  }


  export type NominationAvgAggregateInputType = {
    id?: true
    age?: true
    categoryId?: true
  }

  export type NominationSumAggregateInputType = {
    id?: true
    age?: true
    categoryId?: true
  }

  export type NominationMinAggregateInputType = {
    id?: true
    fullName?: true
    age?: true
    email?: true
    phoneNumber?: true
    achievements?: true
    documentUrl?: true
    mediaUrl?: true
    type?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
  }

  export type NominationMaxAggregateInputType = {
    id?: true
    fullName?: true
    age?: true
    email?: true
    phoneNumber?: true
    achievements?: true
    documentUrl?: true
    mediaUrl?: true
    type?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
  }

  export type NominationCountAggregateInputType = {
    id?: true
    fullName?: true
    age?: true
    email?: true
    phoneNumber?: true
    achievements?: true
    documentUrl?: true
    mediaUrl?: true
    type?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
    _all?: true
  }

  export type NominationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nomination to aggregate.
     */
    where?: NominationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nominations to fetch.
     */
    orderBy?: NominationOrderByWithRelationInput | NominationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NominationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nominations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nominations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Nominations
    **/
    _count?: true | NominationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NominationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NominationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NominationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NominationMaxAggregateInputType
  }

  export type GetNominationAggregateType<T extends NominationAggregateArgs> = {
        [P in keyof T & keyof AggregateNomination]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNomination[P]>
      : GetScalarType<T[P], AggregateNomination[P]>
  }




  export type NominationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NominationWhereInput
    orderBy?: NominationOrderByWithAggregationInput | NominationOrderByWithAggregationInput[]
    by: NominationScalarFieldEnum[] | NominationScalarFieldEnum
    having?: NominationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NominationCountAggregateInputType | true
    _avg?: NominationAvgAggregateInputType
    _sum?: NominationSumAggregateInputType
    _min?: NominationMinAggregateInputType
    _max?: NominationMaxAggregateInputType
  }

  export type NominationGroupByOutputType = {
    id: number
    fullName: string
    age: number
    email: string
    phoneNumber: string
    achievements: string | null
    documentUrl: string | null
    mediaUrl: string | null
    type: string
    status: string
    createdAt: Date
    updatedAt: Date
    categoryId: number
    _count: NominationCountAggregateOutputType | null
    _avg: NominationAvgAggregateOutputType | null
    _sum: NominationSumAggregateOutputType | null
    _min: NominationMinAggregateOutputType | null
    _max: NominationMaxAggregateOutputType | null
  }

  type GetNominationGroupByPayload<T extends NominationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NominationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NominationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NominationGroupByOutputType[P]>
            : GetScalarType<T[P], NominationGroupByOutputType[P]>
        }
      >
    >


  export type NominationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    age?: boolean
    email?: boolean
    phoneNumber?: boolean
    achievements?: boolean
    documentUrl?: boolean
    mediaUrl?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    category?: boolean | NominationCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nomination"]>

  export type NominationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    age?: boolean
    email?: boolean
    phoneNumber?: boolean
    achievements?: boolean
    documentUrl?: boolean
    mediaUrl?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    category?: boolean | NominationCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nomination"]>

  export type NominationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    age?: boolean
    email?: boolean
    phoneNumber?: boolean
    achievements?: boolean
    documentUrl?: boolean
    mediaUrl?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    category?: boolean | NominationCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nomination"]>

  export type NominationSelectScalar = {
    id?: boolean
    fullName?: boolean
    age?: boolean
    email?: boolean
    phoneNumber?: boolean
    achievements?: boolean
    documentUrl?: boolean
    mediaUrl?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
  }

  export type NominationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "age" | "email" | "phoneNumber" | "achievements" | "documentUrl" | "mediaUrl" | "type" | "status" | "createdAt" | "updatedAt" | "categoryId", ExtArgs["result"]["nomination"]>
  export type NominationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | NominationCategoryDefaultArgs<ExtArgs>
  }
  export type NominationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | NominationCategoryDefaultArgs<ExtArgs>
  }
  export type NominationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | NominationCategoryDefaultArgs<ExtArgs>
  }

  export type $NominationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Nomination"
    objects: {
      category: Prisma.$NominationCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      age: number
      email: string
      phoneNumber: string
      achievements: string | null
      documentUrl: string | null
      mediaUrl: string | null
      type: string
      status: string
      createdAt: Date
      updatedAt: Date
      categoryId: number
    }, ExtArgs["result"]["nomination"]>
    composites: {}
  }

  type NominationGetPayload<S extends boolean | null | undefined | NominationDefaultArgs> = $Result.GetResult<Prisma.$NominationPayload, S>

  type NominationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NominationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NominationCountAggregateInputType | true
    }

  export interface NominationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Nomination'], meta: { name: 'Nomination' } }
    /**
     * Find zero or one Nomination that matches the filter.
     * @param {NominationFindUniqueArgs} args - Arguments to find a Nomination
     * @example
     * // Get one Nomination
     * const nomination = await prisma.nomination.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NominationFindUniqueArgs>(args: SelectSubset<T, NominationFindUniqueArgs<ExtArgs>>): Prisma__NominationClient<$Result.GetResult<Prisma.$NominationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Nomination that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NominationFindUniqueOrThrowArgs} args - Arguments to find a Nomination
     * @example
     * // Get one Nomination
     * const nomination = await prisma.nomination.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NominationFindUniqueOrThrowArgs>(args: SelectSubset<T, NominationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NominationClient<$Result.GetResult<Prisma.$NominationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nomination that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NominationFindFirstArgs} args - Arguments to find a Nomination
     * @example
     * // Get one Nomination
     * const nomination = await prisma.nomination.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NominationFindFirstArgs>(args?: SelectSubset<T, NominationFindFirstArgs<ExtArgs>>): Prisma__NominationClient<$Result.GetResult<Prisma.$NominationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nomination that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NominationFindFirstOrThrowArgs} args - Arguments to find a Nomination
     * @example
     * // Get one Nomination
     * const nomination = await prisma.nomination.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NominationFindFirstOrThrowArgs>(args?: SelectSubset<T, NominationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NominationClient<$Result.GetResult<Prisma.$NominationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nominations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NominationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nominations
     * const nominations = await prisma.nomination.findMany()
     * 
     * // Get first 10 Nominations
     * const nominations = await prisma.nomination.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nominationWithIdOnly = await prisma.nomination.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NominationFindManyArgs>(args?: SelectSubset<T, NominationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NominationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Nomination.
     * @param {NominationCreateArgs} args - Arguments to create a Nomination.
     * @example
     * // Create one Nomination
     * const Nomination = await prisma.nomination.create({
     *   data: {
     *     // ... data to create a Nomination
     *   }
     * })
     * 
     */
    create<T extends NominationCreateArgs>(args: SelectSubset<T, NominationCreateArgs<ExtArgs>>): Prisma__NominationClient<$Result.GetResult<Prisma.$NominationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nominations.
     * @param {NominationCreateManyArgs} args - Arguments to create many Nominations.
     * @example
     * // Create many Nominations
     * const nomination = await prisma.nomination.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NominationCreateManyArgs>(args?: SelectSubset<T, NominationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nominations and returns the data saved in the database.
     * @param {NominationCreateManyAndReturnArgs} args - Arguments to create many Nominations.
     * @example
     * // Create many Nominations
     * const nomination = await prisma.nomination.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nominations and only return the `id`
     * const nominationWithIdOnly = await prisma.nomination.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NominationCreateManyAndReturnArgs>(args?: SelectSubset<T, NominationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NominationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Nomination.
     * @param {NominationDeleteArgs} args - Arguments to delete one Nomination.
     * @example
     * // Delete one Nomination
     * const Nomination = await prisma.nomination.delete({
     *   where: {
     *     // ... filter to delete one Nomination
     *   }
     * })
     * 
     */
    delete<T extends NominationDeleteArgs>(args: SelectSubset<T, NominationDeleteArgs<ExtArgs>>): Prisma__NominationClient<$Result.GetResult<Prisma.$NominationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Nomination.
     * @param {NominationUpdateArgs} args - Arguments to update one Nomination.
     * @example
     * // Update one Nomination
     * const nomination = await prisma.nomination.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NominationUpdateArgs>(args: SelectSubset<T, NominationUpdateArgs<ExtArgs>>): Prisma__NominationClient<$Result.GetResult<Prisma.$NominationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nominations.
     * @param {NominationDeleteManyArgs} args - Arguments to filter Nominations to delete.
     * @example
     * // Delete a few Nominations
     * const { count } = await prisma.nomination.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NominationDeleteManyArgs>(args?: SelectSubset<T, NominationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nominations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NominationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nominations
     * const nomination = await prisma.nomination.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NominationUpdateManyArgs>(args: SelectSubset<T, NominationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nominations and returns the data updated in the database.
     * @param {NominationUpdateManyAndReturnArgs} args - Arguments to update many Nominations.
     * @example
     * // Update many Nominations
     * const nomination = await prisma.nomination.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Nominations and only return the `id`
     * const nominationWithIdOnly = await prisma.nomination.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NominationUpdateManyAndReturnArgs>(args: SelectSubset<T, NominationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NominationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Nomination.
     * @param {NominationUpsertArgs} args - Arguments to update or create a Nomination.
     * @example
     * // Update or create a Nomination
     * const nomination = await prisma.nomination.upsert({
     *   create: {
     *     // ... data to create a Nomination
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nomination we want to update
     *   }
     * })
     */
    upsert<T extends NominationUpsertArgs>(args: SelectSubset<T, NominationUpsertArgs<ExtArgs>>): Prisma__NominationClient<$Result.GetResult<Prisma.$NominationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nominations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NominationCountArgs} args - Arguments to filter Nominations to count.
     * @example
     * // Count the number of Nominations
     * const count = await prisma.nomination.count({
     *   where: {
     *     // ... the filter for the Nominations we want to count
     *   }
     * })
    **/
    count<T extends NominationCountArgs>(
      args?: Subset<T, NominationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NominationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nomination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NominationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NominationAggregateArgs>(args: Subset<T, NominationAggregateArgs>): Prisma.PrismaPromise<GetNominationAggregateType<T>>

    /**
     * Group by Nomination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NominationGroupByArgs} args - Group by arguments.
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
      T extends NominationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NominationGroupByArgs['orderBy'] }
        : { orderBy?: NominationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NominationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNominationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Nomination model
   */
  readonly fields: NominationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Nomination.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NominationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends NominationCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NominationCategoryDefaultArgs<ExtArgs>>): Prisma__NominationCategoryClient<$Result.GetResult<Prisma.$NominationCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Nomination model
   */
  interface NominationFieldRefs {
    readonly id: FieldRef<"Nomination", 'Int'>
    readonly fullName: FieldRef<"Nomination", 'String'>
    readonly age: FieldRef<"Nomination", 'Int'>
    readonly email: FieldRef<"Nomination", 'String'>
    readonly phoneNumber: FieldRef<"Nomination", 'String'>
    readonly achievements: FieldRef<"Nomination", 'String'>
    readonly documentUrl: FieldRef<"Nomination", 'String'>
    readonly mediaUrl: FieldRef<"Nomination", 'String'>
    readonly type: FieldRef<"Nomination", 'String'>
    readonly status: FieldRef<"Nomination", 'String'>
    readonly createdAt: FieldRef<"Nomination", 'DateTime'>
    readonly updatedAt: FieldRef<"Nomination", 'DateTime'>
    readonly categoryId: FieldRef<"Nomination", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Nomination findUnique
   */
  export type NominationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomination
     */
    select?: NominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomination
     */
    omit?: NominationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NominationInclude<ExtArgs> | null
    /**
     * Filter, which Nomination to fetch.
     */
    where: NominationWhereUniqueInput
  }

  /**
   * Nomination findUniqueOrThrow
   */
  export type NominationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomination
     */
    select?: NominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomination
     */
    omit?: NominationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NominationInclude<ExtArgs> | null
    /**
     * Filter, which Nomination to fetch.
     */
    where: NominationWhereUniqueInput
  }

  /**
   * Nomination findFirst
   */
  export type NominationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomination
     */
    select?: NominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomination
     */
    omit?: NominationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NominationInclude<ExtArgs> | null
    /**
     * Filter, which Nomination to fetch.
     */
    where?: NominationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nominations to fetch.
     */
    orderBy?: NominationOrderByWithRelationInput | NominationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nominations.
     */
    cursor?: NominationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nominations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nominations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nominations.
     */
    distinct?: NominationScalarFieldEnum | NominationScalarFieldEnum[]
  }

  /**
   * Nomination findFirstOrThrow
   */
  export type NominationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomination
     */
    select?: NominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomination
     */
    omit?: NominationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NominationInclude<ExtArgs> | null
    /**
     * Filter, which Nomination to fetch.
     */
    where?: NominationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nominations to fetch.
     */
    orderBy?: NominationOrderByWithRelationInput | NominationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nominations.
     */
    cursor?: NominationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nominations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nominations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nominations.
     */
    distinct?: NominationScalarFieldEnum | NominationScalarFieldEnum[]
  }

  /**
   * Nomination findMany
   */
  export type NominationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomination
     */
    select?: NominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomination
     */
    omit?: NominationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NominationInclude<ExtArgs> | null
    /**
     * Filter, which Nominations to fetch.
     */
    where?: NominationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nominations to fetch.
     */
    orderBy?: NominationOrderByWithRelationInput | NominationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Nominations.
     */
    cursor?: NominationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nominations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nominations.
     */
    skip?: number
    distinct?: NominationScalarFieldEnum | NominationScalarFieldEnum[]
  }

  /**
   * Nomination create
   */
  export type NominationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomination
     */
    select?: NominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomination
     */
    omit?: NominationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NominationInclude<ExtArgs> | null
    /**
     * The data needed to create a Nomination.
     */
    data: XOR<NominationCreateInput, NominationUncheckedCreateInput>
  }

  /**
   * Nomination createMany
   */
  export type NominationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Nominations.
     */
    data: NominationCreateManyInput | NominationCreateManyInput[]
  }

  /**
   * Nomination createManyAndReturn
   */
  export type NominationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomination
     */
    select?: NominationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nomination
     */
    omit?: NominationOmit<ExtArgs> | null
    /**
     * The data used to create many Nominations.
     */
    data: NominationCreateManyInput | NominationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NominationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Nomination update
   */
  export type NominationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomination
     */
    select?: NominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomination
     */
    omit?: NominationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NominationInclude<ExtArgs> | null
    /**
     * The data needed to update a Nomination.
     */
    data: XOR<NominationUpdateInput, NominationUncheckedUpdateInput>
    /**
     * Choose, which Nomination to update.
     */
    where: NominationWhereUniqueInput
  }

  /**
   * Nomination updateMany
   */
  export type NominationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Nominations.
     */
    data: XOR<NominationUpdateManyMutationInput, NominationUncheckedUpdateManyInput>
    /**
     * Filter which Nominations to update
     */
    where?: NominationWhereInput
    /**
     * Limit how many Nominations to update.
     */
    limit?: number
  }

  /**
   * Nomination updateManyAndReturn
   */
  export type NominationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomination
     */
    select?: NominationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nomination
     */
    omit?: NominationOmit<ExtArgs> | null
    /**
     * The data used to update Nominations.
     */
    data: XOR<NominationUpdateManyMutationInput, NominationUncheckedUpdateManyInput>
    /**
     * Filter which Nominations to update
     */
    where?: NominationWhereInput
    /**
     * Limit how many Nominations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NominationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Nomination upsert
   */
  export type NominationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomination
     */
    select?: NominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomination
     */
    omit?: NominationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NominationInclude<ExtArgs> | null
    /**
     * The filter to search for the Nomination to update in case it exists.
     */
    where: NominationWhereUniqueInput
    /**
     * In case the Nomination found by the `where` argument doesn't exist, create a new Nomination with this data.
     */
    create: XOR<NominationCreateInput, NominationUncheckedCreateInput>
    /**
     * In case the Nomination was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NominationUpdateInput, NominationUncheckedUpdateInput>
  }

  /**
   * Nomination delete
   */
  export type NominationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomination
     */
    select?: NominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomination
     */
    omit?: NominationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NominationInclude<ExtArgs> | null
    /**
     * Filter which Nomination to delete.
     */
    where: NominationWhereUniqueInput
  }

  /**
   * Nomination deleteMany
   */
  export type NominationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nominations to delete
     */
    where?: NominationWhereInput
    /**
     * Limit how many Nominations to delete.
     */
    limit?: number
  }

  /**
   * Nomination without action
   */
  export type NominationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomination
     */
    select?: NominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomination
     */
    omit?: NominationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NominationInclude<ExtArgs> | null
  }


  /**
   * Model GalleryItem
   */

  export type AggregateGalleryItem = {
    _count: GalleryItemCountAggregateOutputType | null
    _avg: GalleryItemAvgAggregateOutputType | null
    _sum: GalleryItemSumAggregateOutputType | null
    _min: GalleryItemMinAggregateOutputType | null
    _max: GalleryItemMaxAggregateOutputType | null
  }

  export type GalleryItemAvgAggregateOutputType = {
    id: number | null
  }

  export type GalleryItemSumAggregateOutputType = {
    id: number | null
  }

  export type GalleryItemMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    mediaType: string | null
    mediaUrl: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GalleryItemMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    mediaType: string | null
    mediaUrl: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GalleryItemCountAggregateOutputType = {
    id: number
    title: number
    description: number
    mediaType: number
    mediaUrl: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GalleryItemAvgAggregateInputType = {
    id?: true
  }

  export type GalleryItemSumAggregateInputType = {
    id?: true
  }

  export type GalleryItemMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    mediaType?: true
    mediaUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GalleryItemMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    mediaType?: true
    mediaUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GalleryItemCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    mediaType?: true
    mediaUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GalleryItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryItem to aggregate.
     */
    where?: GalleryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryItems to fetch.
     */
    orderBy?: GalleryItemOrderByWithRelationInput | GalleryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalleryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GalleryItems
    **/
    _count?: true | GalleryItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GalleryItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GalleryItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalleryItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalleryItemMaxAggregateInputType
  }

  export type GetGalleryItemAggregateType<T extends GalleryItemAggregateArgs> = {
        [P in keyof T & keyof AggregateGalleryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGalleryItem[P]>
      : GetScalarType<T[P], AggregateGalleryItem[P]>
  }




  export type GalleryItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryItemWhereInput
    orderBy?: GalleryItemOrderByWithAggregationInput | GalleryItemOrderByWithAggregationInput[]
    by: GalleryItemScalarFieldEnum[] | GalleryItemScalarFieldEnum
    having?: GalleryItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalleryItemCountAggregateInputType | true
    _avg?: GalleryItemAvgAggregateInputType
    _sum?: GalleryItemSumAggregateInputType
    _min?: GalleryItemMinAggregateInputType
    _max?: GalleryItemMaxAggregateInputType
  }

  export type GalleryItemGroupByOutputType = {
    id: number
    title: string
    description: string | null
    mediaType: string
    mediaUrl: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: GalleryItemCountAggregateOutputType | null
    _avg: GalleryItemAvgAggregateOutputType | null
    _sum: GalleryItemSumAggregateOutputType | null
    _min: GalleryItemMinAggregateOutputType | null
    _max: GalleryItemMaxAggregateOutputType | null
  }

  type GetGalleryItemGroupByPayload<T extends GalleryItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalleryItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalleryItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalleryItemGroupByOutputType[P]>
            : GetScalarType<T[P], GalleryItemGroupByOutputType[P]>
        }
      >
    >


  export type GalleryItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    mediaType?: boolean
    mediaUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["galleryItem"]>

  export type GalleryItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    mediaType?: boolean
    mediaUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["galleryItem"]>

  export type GalleryItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    mediaType?: boolean
    mediaUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["galleryItem"]>

  export type GalleryItemSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    mediaType?: boolean
    mediaUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GalleryItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "mediaType" | "mediaUrl" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["galleryItem"]>

  export type $GalleryItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GalleryItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      mediaType: string
      mediaUrl: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["galleryItem"]>
    composites: {}
  }

  type GalleryItemGetPayload<S extends boolean | null | undefined | GalleryItemDefaultArgs> = $Result.GetResult<Prisma.$GalleryItemPayload, S>

  type GalleryItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GalleryItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GalleryItemCountAggregateInputType | true
    }

  export interface GalleryItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GalleryItem'], meta: { name: 'GalleryItem' } }
    /**
     * Find zero or one GalleryItem that matches the filter.
     * @param {GalleryItemFindUniqueArgs} args - Arguments to find a GalleryItem
     * @example
     * // Get one GalleryItem
     * const galleryItem = await prisma.galleryItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GalleryItemFindUniqueArgs>(args: SelectSubset<T, GalleryItemFindUniqueArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GalleryItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GalleryItemFindUniqueOrThrowArgs} args - Arguments to find a GalleryItem
     * @example
     * // Get one GalleryItem
     * const galleryItem = await prisma.galleryItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GalleryItemFindUniqueOrThrowArgs>(args: SelectSubset<T, GalleryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemFindFirstArgs} args - Arguments to find a GalleryItem
     * @example
     * // Get one GalleryItem
     * const galleryItem = await prisma.galleryItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GalleryItemFindFirstArgs>(args?: SelectSubset<T, GalleryItemFindFirstArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemFindFirstOrThrowArgs} args - Arguments to find a GalleryItem
     * @example
     * // Get one GalleryItem
     * const galleryItem = await prisma.galleryItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GalleryItemFindFirstOrThrowArgs>(args?: SelectSubset<T, GalleryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GalleryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GalleryItems
     * const galleryItems = await prisma.galleryItem.findMany()
     * 
     * // Get first 10 GalleryItems
     * const galleryItems = await prisma.galleryItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galleryItemWithIdOnly = await prisma.galleryItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GalleryItemFindManyArgs>(args?: SelectSubset<T, GalleryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GalleryItem.
     * @param {GalleryItemCreateArgs} args - Arguments to create a GalleryItem.
     * @example
     * // Create one GalleryItem
     * const GalleryItem = await prisma.galleryItem.create({
     *   data: {
     *     // ... data to create a GalleryItem
     *   }
     * })
     * 
     */
    create<T extends GalleryItemCreateArgs>(args: SelectSubset<T, GalleryItemCreateArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GalleryItems.
     * @param {GalleryItemCreateManyArgs} args - Arguments to create many GalleryItems.
     * @example
     * // Create many GalleryItems
     * const galleryItem = await prisma.galleryItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GalleryItemCreateManyArgs>(args?: SelectSubset<T, GalleryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GalleryItems and returns the data saved in the database.
     * @param {GalleryItemCreateManyAndReturnArgs} args - Arguments to create many GalleryItems.
     * @example
     * // Create many GalleryItems
     * const galleryItem = await prisma.galleryItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GalleryItems and only return the `id`
     * const galleryItemWithIdOnly = await prisma.galleryItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GalleryItemCreateManyAndReturnArgs>(args?: SelectSubset<T, GalleryItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GalleryItem.
     * @param {GalleryItemDeleteArgs} args - Arguments to delete one GalleryItem.
     * @example
     * // Delete one GalleryItem
     * const GalleryItem = await prisma.galleryItem.delete({
     *   where: {
     *     // ... filter to delete one GalleryItem
     *   }
     * })
     * 
     */
    delete<T extends GalleryItemDeleteArgs>(args: SelectSubset<T, GalleryItemDeleteArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GalleryItem.
     * @param {GalleryItemUpdateArgs} args - Arguments to update one GalleryItem.
     * @example
     * // Update one GalleryItem
     * const galleryItem = await prisma.galleryItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GalleryItemUpdateArgs>(args: SelectSubset<T, GalleryItemUpdateArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GalleryItems.
     * @param {GalleryItemDeleteManyArgs} args - Arguments to filter GalleryItems to delete.
     * @example
     * // Delete a few GalleryItems
     * const { count } = await prisma.galleryItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GalleryItemDeleteManyArgs>(args?: SelectSubset<T, GalleryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GalleryItems
     * const galleryItem = await prisma.galleryItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GalleryItemUpdateManyArgs>(args: SelectSubset<T, GalleryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryItems and returns the data updated in the database.
     * @param {GalleryItemUpdateManyAndReturnArgs} args - Arguments to update many GalleryItems.
     * @example
     * // Update many GalleryItems
     * const galleryItem = await prisma.galleryItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GalleryItems and only return the `id`
     * const galleryItemWithIdOnly = await prisma.galleryItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GalleryItemUpdateManyAndReturnArgs>(args: SelectSubset<T, GalleryItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GalleryItem.
     * @param {GalleryItemUpsertArgs} args - Arguments to update or create a GalleryItem.
     * @example
     * // Update or create a GalleryItem
     * const galleryItem = await prisma.galleryItem.upsert({
     *   create: {
     *     // ... data to create a GalleryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GalleryItem we want to update
     *   }
     * })
     */
    upsert<T extends GalleryItemUpsertArgs>(args: SelectSubset<T, GalleryItemUpsertArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GalleryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemCountArgs} args - Arguments to filter GalleryItems to count.
     * @example
     * // Count the number of GalleryItems
     * const count = await prisma.galleryItem.count({
     *   where: {
     *     // ... the filter for the GalleryItems we want to count
     *   }
     * })
    **/
    count<T extends GalleryItemCountArgs>(
      args?: Subset<T, GalleryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalleryItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GalleryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GalleryItemAggregateArgs>(args: Subset<T, GalleryItemAggregateArgs>): Prisma.PrismaPromise<GetGalleryItemAggregateType<T>>

    /**
     * Group by GalleryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemGroupByArgs} args - Group by arguments.
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
      T extends GalleryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalleryItemGroupByArgs['orderBy'] }
        : { orderBy?: GalleryItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GalleryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalleryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GalleryItem model
   */
  readonly fields: GalleryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GalleryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalleryItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the GalleryItem model
   */
  interface GalleryItemFieldRefs {
    readonly id: FieldRef<"GalleryItem", 'Int'>
    readonly title: FieldRef<"GalleryItem", 'String'>
    readonly description: FieldRef<"GalleryItem", 'String'>
    readonly mediaType: FieldRef<"GalleryItem", 'String'>
    readonly mediaUrl: FieldRef<"GalleryItem", 'String'>
    readonly status: FieldRef<"GalleryItem", 'String'>
    readonly createdAt: FieldRef<"GalleryItem", 'DateTime'>
    readonly updatedAt: FieldRef<"GalleryItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GalleryItem findUnique
   */
  export type GalleryItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Filter, which GalleryItem to fetch.
     */
    where: GalleryItemWhereUniqueInput
  }

  /**
   * GalleryItem findUniqueOrThrow
   */
  export type GalleryItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Filter, which GalleryItem to fetch.
     */
    where: GalleryItemWhereUniqueInput
  }

  /**
   * GalleryItem findFirst
   */
  export type GalleryItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Filter, which GalleryItem to fetch.
     */
    where?: GalleryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryItems to fetch.
     */
    orderBy?: GalleryItemOrderByWithRelationInput | GalleryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryItems.
     */
    cursor?: GalleryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryItems.
     */
    distinct?: GalleryItemScalarFieldEnum | GalleryItemScalarFieldEnum[]
  }

  /**
   * GalleryItem findFirstOrThrow
   */
  export type GalleryItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Filter, which GalleryItem to fetch.
     */
    where?: GalleryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryItems to fetch.
     */
    orderBy?: GalleryItemOrderByWithRelationInput | GalleryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryItems.
     */
    cursor?: GalleryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryItems.
     */
    distinct?: GalleryItemScalarFieldEnum | GalleryItemScalarFieldEnum[]
  }

  /**
   * GalleryItem findMany
   */
  export type GalleryItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Filter, which GalleryItems to fetch.
     */
    where?: GalleryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryItems to fetch.
     */
    orderBy?: GalleryItemOrderByWithRelationInput | GalleryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GalleryItems.
     */
    cursor?: GalleryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryItems.
     */
    skip?: number
    distinct?: GalleryItemScalarFieldEnum | GalleryItemScalarFieldEnum[]
  }

  /**
   * GalleryItem create
   */
  export type GalleryItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * The data needed to create a GalleryItem.
     */
    data: XOR<GalleryItemCreateInput, GalleryItemUncheckedCreateInput>
  }

  /**
   * GalleryItem createMany
   */
  export type GalleryItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GalleryItems.
     */
    data: GalleryItemCreateManyInput | GalleryItemCreateManyInput[]
  }

  /**
   * GalleryItem createManyAndReturn
   */
  export type GalleryItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * The data used to create many GalleryItems.
     */
    data: GalleryItemCreateManyInput | GalleryItemCreateManyInput[]
  }

  /**
   * GalleryItem update
   */
  export type GalleryItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * The data needed to update a GalleryItem.
     */
    data: XOR<GalleryItemUpdateInput, GalleryItemUncheckedUpdateInput>
    /**
     * Choose, which GalleryItem to update.
     */
    where: GalleryItemWhereUniqueInput
  }

  /**
   * GalleryItem updateMany
   */
  export type GalleryItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GalleryItems.
     */
    data: XOR<GalleryItemUpdateManyMutationInput, GalleryItemUncheckedUpdateManyInput>
    /**
     * Filter which GalleryItems to update
     */
    where?: GalleryItemWhereInput
    /**
     * Limit how many GalleryItems to update.
     */
    limit?: number
  }

  /**
   * GalleryItem updateManyAndReturn
   */
  export type GalleryItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * The data used to update GalleryItems.
     */
    data: XOR<GalleryItemUpdateManyMutationInput, GalleryItemUncheckedUpdateManyInput>
    /**
     * Filter which GalleryItems to update
     */
    where?: GalleryItemWhereInput
    /**
     * Limit how many GalleryItems to update.
     */
    limit?: number
  }

  /**
   * GalleryItem upsert
   */
  export type GalleryItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * The filter to search for the GalleryItem to update in case it exists.
     */
    where: GalleryItemWhereUniqueInput
    /**
     * In case the GalleryItem found by the `where` argument doesn't exist, create a new GalleryItem with this data.
     */
    create: XOR<GalleryItemCreateInput, GalleryItemUncheckedCreateInput>
    /**
     * In case the GalleryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalleryItemUpdateInput, GalleryItemUncheckedUpdateInput>
  }

  /**
   * GalleryItem delete
   */
  export type GalleryItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Filter which GalleryItem to delete.
     */
    where: GalleryItemWhereUniqueInput
  }

  /**
   * GalleryItem deleteMany
   */
  export type GalleryItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryItems to delete
     */
    where?: GalleryItemWhereInput
    /**
     * Limit how many GalleryItems to delete.
     */
    limit?: number
  }

  /**
   * GalleryItem without action
   */
  export type GalleryItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const NominationCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    mediaUrl: 'mediaUrl',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NominationCategoryScalarFieldEnum = (typeof NominationCategoryScalarFieldEnum)[keyof typeof NominationCategoryScalarFieldEnum]


  export const NominationScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    age: 'age',
    email: 'email',
    phoneNumber: 'phoneNumber',
    achievements: 'achievements',
    documentUrl: 'documentUrl',
    mediaUrl: 'mediaUrl',
    type: 'type',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    categoryId: 'categoryId'
  };

  export type NominationScalarFieldEnum = (typeof NominationScalarFieldEnum)[keyof typeof NominationScalarFieldEnum]


  export const GalleryItemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    mediaType: 'mediaType',
    mediaUrl: 'mediaUrl',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GalleryItemScalarFieldEnum = (typeof GalleryItemScalarFieldEnum)[keyof typeof GalleryItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type NominationCategoryWhereInput = {
    AND?: NominationCategoryWhereInput | NominationCategoryWhereInput[]
    OR?: NominationCategoryWhereInput[]
    NOT?: NominationCategoryWhereInput | NominationCategoryWhereInput[]
    id?: IntFilter<"NominationCategory"> | number
    name?: StringFilter<"NominationCategory"> | string
    description?: StringNullableFilter<"NominationCategory"> | string | null
    mediaUrl?: StringNullableFilter<"NominationCategory"> | string | null
    status?: StringFilter<"NominationCategory"> | string
    createdAt?: DateTimeFilter<"NominationCategory"> | Date | string
    updatedAt?: DateTimeFilter<"NominationCategory"> | Date | string
    nominations?: NominationListRelationFilter
  }

  export type NominationCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nominations?: NominationOrderByRelationAggregateInput
  }

  export type NominationCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: NominationCategoryWhereInput | NominationCategoryWhereInput[]
    OR?: NominationCategoryWhereInput[]
    NOT?: NominationCategoryWhereInput | NominationCategoryWhereInput[]
    description?: StringNullableFilter<"NominationCategory"> | string | null
    mediaUrl?: StringNullableFilter<"NominationCategory"> | string | null
    status?: StringFilter<"NominationCategory"> | string
    createdAt?: DateTimeFilter<"NominationCategory"> | Date | string
    updatedAt?: DateTimeFilter<"NominationCategory"> | Date | string
    nominations?: NominationListRelationFilter
  }, "id" | "name">

  export type NominationCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NominationCategoryCountOrderByAggregateInput
    _avg?: NominationCategoryAvgOrderByAggregateInput
    _max?: NominationCategoryMaxOrderByAggregateInput
    _min?: NominationCategoryMinOrderByAggregateInput
    _sum?: NominationCategorySumOrderByAggregateInput
  }

  export type NominationCategoryScalarWhereWithAggregatesInput = {
    AND?: NominationCategoryScalarWhereWithAggregatesInput | NominationCategoryScalarWhereWithAggregatesInput[]
    OR?: NominationCategoryScalarWhereWithAggregatesInput[]
    NOT?: NominationCategoryScalarWhereWithAggregatesInput | NominationCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NominationCategory"> | number
    name?: StringWithAggregatesFilter<"NominationCategory"> | string
    description?: StringNullableWithAggregatesFilter<"NominationCategory"> | string | null
    mediaUrl?: StringNullableWithAggregatesFilter<"NominationCategory"> | string | null
    status?: StringWithAggregatesFilter<"NominationCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NominationCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NominationCategory"> | Date | string
  }

  export type NominationWhereInput = {
    AND?: NominationWhereInput | NominationWhereInput[]
    OR?: NominationWhereInput[]
    NOT?: NominationWhereInput | NominationWhereInput[]
    id?: IntFilter<"Nomination"> | number
    fullName?: StringFilter<"Nomination"> | string
    age?: IntFilter<"Nomination"> | number
    email?: StringFilter<"Nomination"> | string
    phoneNumber?: StringFilter<"Nomination"> | string
    achievements?: StringNullableFilter<"Nomination"> | string | null
    documentUrl?: StringNullableFilter<"Nomination"> | string | null
    mediaUrl?: StringNullableFilter<"Nomination"> | string | null
    type?: StringFilter<"Nomination"> | string
    status?: StringFilter<"Nomination"> | string
    createdAt?: DateTimeFilter<"Nomination"> | Date | string
    updatedAt?: DateTimeFilter<"Nomination"> | Date | string
    categoryId?: IntFilter<"Nomination"> | number
    category?: XOR<NominationCategoryScalarRelationFilter, NominationCategoryWhereInput>
  }

  export type NominationOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    age?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    achievements?: SortOrderInput | SortOrder
    documentUrl?: SortOrderInput | SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    category?: NominationCategoryOrderByWithRelationInput
  }

  export type NominationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NominationWhereInput | NominationWhereInput[]
    OR?: NominationWhereInput[]
    NOT?: NominationWhereInput | NominationWhereInput[]
    fullName?: StringFilter<"Nomination"> | string
    age?: IntFilter<"Nomination"> | number
    email?: StringFilter<"Nomination"> | string
    phoneNumber?: StringFilter<"Nomination"> | string
    achievements?: StringNullableFilter<"Nomination"> | string | null
    documentUrl?: StringNullableFilter<"Nomination"> | string | null
    mediaUrl?: StringNullableFilter<"Nomination"> | string | null
    type?: StringFilter<"Nomination"> | string
    status?: StringFilter<"Nomination"> | string
    createdAt?: DateTimeFilter<"Nomination"> | Date | string
    updatedAt?: DateTimeFilter<"Nomination"> | Date | string
    categoryId?: IntFilter<"Nomination"> | number
    category?: XOR<NominationCategoryScalarRelationFilter, NominationCategoryWhereInput>
  }, "id">

  export type NominationOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    age?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    achievements?: SortOrderInput | SortOrder
    documentUrl?: SortOrderInput | SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    _count?: NominationCountOrderByAggregateInput
    _avg?: NominationAvgOrderByAggregateInput
    _max?: NominationMaxOrderByAggregateInput
    _min?: NominationMinOrderByAggregateInput
    _sum?: NominationSumOrderByAggregateInput
  }

  export type NominationScalarWhereWithAggregatesInput = {
    AND?: NominationScalarWhereWithAggregatesInput | NominationScalarWhereWithAggregatesInput[]
    OR?: NominationScalarWhereWithAggregatesInput[]
    NOT?: NominationScalarWhereWithAggregatesInput | NominationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Nomination"> | number
    fullName?: StringWithAggregatesFilter<"Nomination"> | string
    age?: IntWithAggregatesFilter<"Nomination"> | number
    email?: StringWithAggregatesFilter<"Nomination"> | string
    phoneNumber?: StringWithAggregatesFilter<"Nomination"> | string
    achievements?: StringNullableWithAggregatesFilter<"Nomination"> | string | null
    documentUrl?: StringNullableWithAggregatesFilter<"Nomination"> | string | null
    mediaUrl?: StringNullableWithAggregatesFilter<"Nomination"> | string | null
    type?: StringWithAggregatesFilter<"Nomination"> | string
    status?: StringWithAggregatesFilter<"Nomination"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Nomination"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Nomination"> | Date | string
    categoryId?: IntWithAggregatesFilter<"Nomination"> | number
  }

  export type GalleryItemWhereInput = {
    AND?: GalleryItemWhereInput | GalleryItemWhereInput[]
    OR?: GalleryItemWhereInput[]
    NOT?: GalleryItemWhereInput | GalleryItemWhereInput[]
    id?: IntFilter<"GalleryItem"> | number
    title?: StringFilter<"GalleryItem"> | string
    description?: StringNullableFilter<"GalleryItem"> | string | null
    mediaType?: StringFilter<"GalleryItem"> | string
    mediaUrl?: StringFilter<"GalleryItem"> | string
    status?: StringFilter<"GalleryItem"> | string
    createdAt?: DateTimeFilter<"GalleryItem"> | Date | string
    updatedAt?: DateTimeFilter<"GalleryItem"> | Date | string
  }

  export type GalleryItemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    mediaType?: SortOrder
    mediaUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleryItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GalleryItemWhereInput | GalleryItemWhereInput[]
    OR?: GalleryItemWhereInput[]
    NOT?: GalleryItemWhereInput | GalleryItemWhereInput[]
    title?: StringFilter<"GalleryItem"> | string
    description?: StringNullableFilter<"GalleryItem"> | string | null
    mediaType?: StringFilter<"GalleryItem"> | string
    mediaUrl?: StringFilter<"GalleryItem"> | string
    status?: StringFilter<"GalleryItem"> | string
    createdAt?: DateTimeFilter<"GalleryItem"> | Date | string
    updatedAt?: DateTimeFilter<"GalleryItem"> | Date | string
  }, "id">

  export type GalleryItemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    mediaType?: SortOrder
    mediaUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GalleryItemCountOrderByAggregateInput
    _avg?: GalleryItemAvgOrderByAggregateInput
    _max?: GalleryItemMaxOrderByAggregateInput
    _min?: GalleryItemMinOrderByAggregateInput
    _sum?: GalleryItemSumOrderByAggregateInput
  }

  export type GalleryItemScalarWhereWithAggregatesInput = {
    AND?: GalleryItemScalarWhereWithAggregatesInput | GalleryItemScalarWhereWithAggregatesInput[]
    OR?: GalleryItemScalarWhereWithAggregatesInput[]
    NOT?: GalleryItemScalarWhereWithAggregatesInput | GalleryItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GalleryItem"> | number
    title?: StringWithAggregatesFilter<"GalleryItem"> | string
    description?: StringNullableWithAggregatesFilter<"GalleryItem"> | string | null
    mediaType?: StringWithAggregatesFilter<"GalleryItem"> | string
    mediaUrl?: StringWithAggregatesFilter<"GalleryItem"> | string
    status?: StringWithAggregatesFilter<"GalleryItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GalleryItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GalleryItem"> | Date | string
  }

  export type NominationCategoryCreateInput = {
    name: string
    description?: string | null
    mediaUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nominations?: NominationCreateNestedManyWithoutCategoryInput
  }

  export type NominationCategoryUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    mediaUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nominations?: NominationUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type NominationCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nominations?: NominationUpdateManyWithoutCategoryNestedInput
  }

  export type NominationCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nominations?: NominationUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type NominationCategoryCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    mediaUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NominationCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NominationCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NominationCreateInput = {
    fullName: string
    age: number
    email: string
    phoneNumber: string
    achievements?: string | null
    documentUrl?: string | null
    mediaUrl?: string | null
    type: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: NominationCategoryCreateNestedOneWithoutNominationsInput
  }

  export type NominationUncheckedCreateInput = {
    id?: number
    fullName: string
    age: number
    email: string
    phoneNumber: string
    achievements?: string | null
    documentUrl?: string | null
    mediaUrl?: string | null
    type: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: number
  }

  export type NominationUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    achievements?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NominationCategoryUpdateOneRequiredWithoutNominationsNestedInput
  }

  export type NominationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    achievements?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type NominationCreateManyInput = {
    id?: number
    fullName: string
    age: number
    email: string
    phoneNumber: string
    achievements?: string | null
    documentUrl?: string | null
    mediaUrl?: string | null
    type: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: number
  }

  export type NominationUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    achievements?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NominationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    achievements?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type GalleryItemCreateInput = {
    title: string
    description?: string | null
    mediaType: string
    mediaUrl: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryItemUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    mediaType: string
    mediaUrl: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryItemUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: StringFieldUpdateOperationsInput | string
    mediaUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: StringFieldUpdateOperationsInput | string
    mediaUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryItemCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    mediaType: string
    mediaUrl: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryItemUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: StringFieldUpdateOperationsInput | string
    mediaUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: StringFieldUpdateOperationsInput | string
    mediaUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NominationListRelationFilter = {
    every?: NominationWhereInput
    some?: NominationWhereInput
    none?: NominationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NominationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NominationCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    mediaUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NominationCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NominationCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    mediaUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NominationCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    mediaUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NominationCategorySumOrderByAggregateInput = {
    id?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NominationCategoryScalarRelationFilter = {
    is?: NominationCategoryWhereInput
    isNot?: NominationCategoryWhereInput
  }

  export type NominationCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    age?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    achievements?: SortOrder
    documentUrl?: SortOrder
    mediaUrl?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type NominationAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    categoryId?: SortOrder
  }

  export type NominationMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    age?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    achievements?: SortOrder
    documentUrl?: SortOrder
    mediaUrl?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type NominationMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    age?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    achievements?: SortOrder
    documentUrl?: SortOrder
    mediaUrl?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type NominationSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    categoryId?: SortOrder
  }

  export type GalleryItemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    mediaType?: SortOrder
    mediaUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleryItemAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GalleryItemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    mediaType?: SortOrder
    mediaUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleryItemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    mediaType?: SortOrder
    mediaUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleryItemSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NominationCreateNestedManyWithoutCategoryInput = {
    create?: XOR<NominationCreateWithoutCategoryInput, NominationUncheckedCreateWithoutCategoryInput> | NominationCreateWithoutCategoryInput[] | NominationUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: NominationCreateOrConnectWithoutCategoryInput | NominationCreateOrConnectWithoutCategoryInput[]
    createMany?: NominationCreateManyCategoryInputEnvelope
    connect?: NominationWhereUniqueInput | NominationWhereUniqueInput[]
  }

  export type NominationUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<NominationCreateWithoutCategoryInput, NominationUncheckedCreateWithoutCategoryInput> | NominationCreateWithoutCategoryInput[] | NominationUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: NominationCreateOrConnectWithoutCategoryInput | NominationCreateOrConnectWithoutCategoryInput[]
    createMany?: NominationCreateManyCategoryInputEnvelope
    connect?: NominationWhereUniqueInput | NominationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NominationUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<NominationCreateWithoutCategoryInput, NominationUncheckedCreateWithoutCategoryInput> | NominationCreateWithoutCategoryInput[] | NominationUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: NominationCreateOrConnectWithoutCategoryInput | NominationCreateOrConnectWithoutCategoryInput[]
    upsert?: NominationUpsertWithWhereUniqueWithoutCategoryInput | NominationUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: NominationCreateManyCategoryInputEnvelope
    set?: NominationWhereUniqueInput | NominationWhereUniqueInput[]
    disconnect?: NominationWhereUniqueInput | NominationWhereUniqueInput[]
    delete?: NominationWhereUniqueInput | NominationWhereUniqueInput[]
    connect?: NominationWhereUniqueInput | NominationWhereUniqueInput[]
    update?: NominationUpdateWithWhereUniqueWithoutCategoryInput | NominationUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: NominationUpdateManyWithWhereWithoutCategoryInput | NominationUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: NominationScalarWhereInput | NominationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NominationUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<NominationCreateWithoutCategoryInput, NominationUncheckedCreateWithoutCategoryInput> | NominationCreateWithoutCategoryInput[] | NominationUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: NominationCreateOrConnectWithoutCategoryInput | NominationCreateOrConnectWithoutCategoryInput[]
    upsert?: NominationUpsertWithWhereUniqueWithoutCategoryInput | NominationUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: NominationCreateManyCategoryInputEnvelope
    set?: NominationWhereUniqueInput | NominationWhereUniqueInput[]
    disconnect?: NominationWhereUniqueInput | NominationWhereUniqueInput[]
    delete?: NominationWhereUniqueInput | NominationWhereUniqueInput[]
    connect?: NominationWhereUniqueInput | NominationWhereUniqueInput[]
    update?: NominationUpdateWithWhereUniqueWithoutCategoryInput | NominationUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: NominationUpdateManyWithWhereWithoutCategoryInput | NominationUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: NominationScalarWhereInput | NominationScalarWhereInput[]
  }

  export type NominationCategoryCreateNestedOneWithoutNominationsInput = {
    create?: XOR<NominationCategoryCreateWithoutNominationsInput, NominationCategoryUncheckedCreateWithoutNominationsInput>
    connectOrCreate?: NominationCategoryCreateOrConnectWithoutNominationsInput
    connect?: NominationCategoryWhereUniqueInput
  }

  export type NominationCategoryUpdateOneRequiredWithoutNominationsNestedInput = {
    create?: XOR<NominationCategoryCreateWithoutNominationsInput, NominationCategoryUncheckedCreateWithoutNominationsInput>
    connectOrCreate?: NominationCategoryCreateOrConnectWithoutNominationsInput
    upsert?: NominationCategoryUpsertWithoutNominationsInput
    connect?: NominationCategoryWhereUniqueInput
    update?: XOR<XOR<NominationCategoryUpdateToOneWithWhereWithoutNominationsInput, NominationCategoryUpdateWithoutNominationsInput>, NominationCategoryUncheckedUpdateWithoutNominationsInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NominationCreateWithoutCategoryInput = {
    fullName: string
    age: number
    email: string
    phoneNumber: string
    achievements?: string | null
    documentUrl?: string | null
    mediaUrl?: string | null
    type: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NominationUncheckedCreateWithoutCategoryInput = {
    id?: number
    fullName: string
    age: number
    email: string
    phoneNumber: string
    achievements?: string | null
    documentUrl?: string | null
    mediaUrl?: string | null
    type: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NominationCreateOrConnectWithoutCategoryInput = {
    where: NominationWhereUniqueInput
    create: XOR<NominationCreateWithoutCategoryInput, NominationUncheckedCreateWithoutCategoryInput>
  }

  export type NominationCreateManyCategoryInputEnvelope = {
    data: NominationCreateManyCategoryInput | NominationCreateManyCategoryInput[]
  }

  export type NominationUpsertWithWhereUniqueWithoutCategoryInput = {
    where: NominationWhereUniqueInput
    update: XOR<NominationUpdateWithoutCategoryInput, NominationUncheckedUpdateWithoutCategoryInput>
    create: XOR<NominationCreateWithoutCategoryInput, NominationUncheckedCreateWithoutCategoryInput>
  }

  export type NominationUpdateWithWhereUniqueWithoutCategoryInput = {
    where: NominationWhereUniqueInput
    data: XOR<NominationUpdateWithoutCategoryInput, NominationUncheckedUpdateWithoutCategoryInput>
  }

  export type NominationUpdateManyWithWhereWithoutCategoryInput = {
    where: NominationScalarWhereInput
    data: XOR<NominationUpdateManyMutationInput, NominationUncheckedUpdateManyWithoutCategoryInput>
  }

  export type NominationScalarWhereInput = {
    AND?: NominationScalarWhereInput | NominationScalarWhereInput[]
    OR?: NominationScalarWhereInput[]
    NOT?: NominationScalarWhereInput | NominationScalarWhereInput[]
    id?: IntFilter<"Nomination"> | number
    fullName?: StringFilter<"Nomination"> | string
    age?: IntFilter<"Nomination"> | number
    email?: StringFilter<"Nomination"> | string
    phoneNumber?: StringFilter<"Nomination"> | string
    achievements?: StringNullableFilter<"Nomination"> | string | null
    documentUrl?: StringNullableFilter<"Nomination"> | string | null
    mediaUrl?: StringNullableFilter<"Nomination"> | string | null
    type?: StringFilter<"Nomination"> | string
    status?: StringFilter<"Nomination"> | string
    createdAt?: DateTimeFilter<"Nomination"> | Date | string
    updatedAt?: DateTimeFilter<"Nomination"> | Date | string
    categoryId?: IntFilter<"Nomination"> | number
  }

  export type NominationCategoryCreateWithoutNominationsInput = {
    name: string
    description?: string | null
    mediaUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NominationCategoryUncheckedCreateWithoutNominationsInput = {
    id?: number
    name: string
    description?: string | null
    mediaUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NominationCategoryCreateOrConnectWithoutNominationsInput = {
    where: NominationCategoryWhereUniqueInput
    create: XOR<NominationCategoryCreateWithoutNominationsInput, NominationCategoryUncheckedCreateWithoutNominationsInput>
  }

  export type NominationCategoryUpsertWithoutNominationsInput = {
    update: XOR<NominationCategoryUpdateWithoutNominationsInput, NominationCategoryUncheckedUpdateWithoutNominationsInput>
    create: XOR<NominationCategoryCreateWithoutNominationsInput, NominationCategoryUncheckedCreateWithoutNominationsInput>
    where?: NominationCategoryWhereInput
  }

  export type NominationCategoryUpdateToOneWithWhereWithoutNominationsInput = {
    where?: NominationCategoryWhereInput
    data: XOR<NominationCategoryUpdateWithoutNominationsInput, NominationCategoryUncheckedUpdateWithoutNominationsInput>
  }

  export type NominationCategoryUpdateWithoutNominationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NominationCategoryUncheckedUpdateWithoutNominationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NominationCreateManyCategoryInput = {
    id?: number
    fullName: string
    age: number
    email: string
    phoneNumber: string
    achievements?: string | null
    documentUrl?: string | null
    mediaUrl?: string | null
    type: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NominationUpdateWithoutCategoryInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    achievements?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NominationUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    achievements?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NominationUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    achievements?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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