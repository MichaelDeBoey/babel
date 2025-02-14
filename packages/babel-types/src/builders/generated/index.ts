/*
 * This file is auto-generated! Do not modify it directly.
 * To re-generate run 'make build'
 */

export * from "./lowercase.ts";
export * from "./uppercase.ts";

// Uppercase builders and AST types conflict with each other, which is
// not allowed by TypeScript when using `export * from ...`
// We instead explicity list the AST types here, so that:
// - From a TypeScript perspective, the AST types win over the uppercase
//   builders (which is the standard behavior for JS when a named
//   re-export conflicts with a * re-export.)
// - At runtime, this `export type` is removed, leaving only the uppercase
//   builders behind (which are thus visible to JavaScript code).
// This ensures compatibility with legacy code that uses the uppercase
// builders, while allowing TypeScript users to use the lowercase builders
// together with the AST types.

// prettier-ignore
export type {
  ArrayExpression, AssignmentExpression, BinaryExpression, InterpreterDirective, Directive, DirectiveLiteral, BlockStatement, BreakStatement, CallExpression, CatchClause, ConditionalExpression, ContinueStatement, DebuggerStatement, DoWhileStatement, EmptyStatement, ExpressionStatement, File, ForInStatement, ForStatement, FunctionDeclaration, FunctionExpression, Identifier, IfStatement, LabeledStatement, StringLiteral, NumericLiteral, NullLiteral, BooleanLiteral, RegExpLiteral, LogicalExpression, MemberExpression, NewExpression, Program, ObjectExpression, ObjectMethod, ObjectProperty, RestElement, ReturnStatement, SequenceExpression, ParenthesizedExpression, SwitchCase, SwitchStatement, ThisExpression, ThrowStatement, TryStatement, UnaryExpression, UpdateExpression, VariableDeclaration, VariableDeclarator, WhileStatement, WithStatement, AssignmentPattern, ArrayPattern, ArrowFunctionExpression, ClassBody, ClassExpression, ClassDeclaration, ExportAllDeclaration, ExportDefaultDeclaration, ExportNamedDeclaration, ExportSpecifier, ForOfStatement, ImportDeclaration, ImportDefaultSpecifier, ImportNamespaceSpecifier, ImportSpecifier, ImportExpression, MetaProperty, ClassMethod, ObjectPattern, SpreadElement, Super, TaggedTemplateExpression, TemplateElement, TemplateLiteral, YieldExpression, AwaitExpression, Import, BigIntLiteral, ExportNamespaceSpecifier, OptionalMemberExpression, OptionalCallExpression, ClassProperty, ClassAccessorProperty, ClassPrivateProperty, ClassPrivateMethod, PrivateName, StaticBlock, AnyTypeAnnotation, ArrayTypeAnnotation, BooleanTypeAnnotation, BooleanLiteralTypeAnnotation, NullLiteralTypeAnnotation, ClassImplements, DeclareClass, DeclareFunction, DeclareInterface, DeclareModule, DeclareModuleExports, DeclareTypeAlias, DeclareOpaqueType, DeclareVariable, DeclareExportDeclaration, DeclareExportAllDeclaration, DeclaredPredicate, ExistsTypeAnnotation, FunctionTypeAnnotation, FunctionTypeParam, GenericTypeAnnotation, InferredPredicate, InterfaceExtends, InterfaceDeclaration, InterfaceTypeAnnotation, IntersectionTypeAnnotation, MixedTypeAnnotation, EmptyTypeAnnotation, NullableTypeAnnotation, NumberLiteralTypeAnnotation, NumberTypeAnnotation, ObjectTypeAnnotation, ObjectTypeInternalSlot, ObjectTypeCallProperty, ObjectTypeIndexer, ObjectTypeProperty, ObjectTypeSpreadProperty, OpaqueType, QualifiedTypeIdentifier, StringLiteralTypeAnnotation, StringTypeAnnotation, SymbolTypeAnnotation, ThisTypeAnnotation, TupleTypeAnnotation, TypeofTypeAnnotation, TypeAlias, TypeAnnotation, TypeCastExpression, TypeParameter, TypeParameterDeclaration, TypeParameterInstantiation, UnionTypeAnnotation, Variance, VoidTypeAnnotation, EnumDeclaration, EnumBooleanBody, EnumNumberBody, EnumStringBody, EnumSymbolBody, EnumBooleanMember, EnumNumberMember, EnumStringMember, EnumDefaultedMember, IndexedAccessType, OptionalIndexedAccessType, JSXAttribute, JSXClosingElement, JSXElement, JSXEmptyExpression, JSXExpressionContainer, JSXSpreadChild, JSXIdentifier, JSXMemberExpression, JSXNamespacedName, JSXOpeningElement, JSXSpreadAttribute, JSXText, JSXFragment, JSXOpeningFragment, JSXClosingFragment, Noop, Placeholder, V8IntrinsicIdentifier, ArgumentPlaceholder, BindExpression, ImportAttribute, Decorator, DoExpression, ExportDefaultSpecifier, RecordExpression, TupleExpression, DecimalLiteral, ModuleExpression, TopicReference, PipelineTopicExpression, PipelineBareFunction, PipelinePrimaryTopicReference, TSParameterProperty, TSDeclareFunction, TSDeclareMethod, TSQualifiedName, TSCallSignatureDeclaration, TSConstructSignatureDeclaration, TSPropertySignature, TSMethodSignature, TSIndexSignature, TSAnyKeyword, TSBooleanKeyword, TSBigIntKeyword, TSIntrinsicKeyword, TSNeverKeyword, TSNullKeyword, TSNumberKeyword, TSObjectKeyword, TSStringKeyword, TSSymbolKeyword, TSUndefinedKeyword, TSUnknownKeyword, TSVoidKeyword, TSThisType, TSFunctionType, TSConstructorType, TSTypeReference, TSTypePredicate, TSTypeQuery, TSTypeLiteral, TSArrayType, TSTupleType, TSOptionalType, TSRestType, TSNamedTupleMember, TSUnionType, TSIntersectionType, TSConditionalType, TSInferType, TSParenthesizedType, TSTypeOperator, TSIndexedAccessType, TSMappedType, TSTemplateLiteralType, TSLiteralType, TSExpressionWithTypeArguments, TSInterfaceDeclaration, TSInterfaceBody, TSTypeAliasDeclaration, TSInstantiationExpression, TSAsExpression, TSSatisfiesExpression, TSTypeAssertion, TSEnumBody, TSEnumDeclaration, TSEnumMember, TSModuleDeclaration, TSModuleBlock, TSImportType, TSImportEqualsDeclaration, TSExternalModuleReference, TSNonNullExpression, TSExportAssignment, TSNamespaceExportDeclaration, TSTypeAnnotation, TSTypeParameterInstantiation, TSTypeParameterDeclaration, TSTypeParameter,
  NumberLiteral, RegexLiteral, RestProperty, SpreadProperty
} from "../../ast-types/generated/index.ts";

// This will re-export all the type definitions that do not conflict with
// uppercase builders, such as aliases.
export type * from "../../ast-types/generated/index.ts";
