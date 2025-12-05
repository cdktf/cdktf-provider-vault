# `spiffeAuthBackendRole` Submodule <a name="`spiffeAuthBackendRole` Submodule" id="@cdktf/provider-vault.spiffeAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpiffeAuthBackendRole <a name="SpiffeAuthBackendRole" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role vault_spiffe_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer"></a>

```typescript
import { spiffeAuthBackendRole } from '@cdktf/provider-vault'

new spiffeAuthBackendRole.SpiffeAuthBackendRole(scope: Construct, id: string, config: SpiffeAuthBackendRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig">SpiffeAuthBackendRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig">SpiffeAuthBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetAliasMetadata">resetAliasMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenBoundCidrs">resetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenExplicitMaxTtl">resetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenMaxTtl">resetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenNoDefaultPolicy">resetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenNumUses">resetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenPeriod">resetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenPolicies">resetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenType">resetTokenType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetWorkloadIdPatterns">resetWorkloadIdPatterns</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAliasMetadata` <a name="resetAliasMetadata" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetAliasMetadata"></a>

```typescript
public resetAliasMetadata(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetTokenBoundCidrs` <a name="resetTokenBoundCidrs" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenBoundCidrs"></a>

```typescript
public resetTokenBoundCidrs(): void
```

##### `resetTokenExplicitMaxTtl` <a name="resetTokenExplicitMaxTtl" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```typescript
public resetTokenExplicitMaxTtl(): void
```

##### `resetTokenMaxTtl` <a name="resetTokenMaxTtl" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenMaxTtl"></a>

```typescript
public resetTokenMaxTtl(): void
```

##### `resetTokenNoDefaultPolicy` <a name="resetTokenNoDefaultPolicy" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```typescript
public resetTokenNoDefaultPolicy(): void
```

##### `resetTokenNumUses` <a name="resetTokenNumUses" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenNumUses"></a>

```typescript
public resetTokenNumUses(): void
```

##### `resetTokenPeriod` <a name="resetTokenPeriod" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenPeriod"></a>

```typescript
public resetTokenPeriod(): void
```

##### `resetTokenPolicies` <a name="resetTokenPolicies" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenPolicies"></a>

```typescript
public resetTokenPolicies(): void
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenTtl"></a>

```typescript
public resetTokenTtl(): void
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenType"></a>

```typescript
public resetTokenType(): void
```

##### `resetWorkloadIdPatterns` <a name="resetWorkloadIdPatterns" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetWorkloadIdPatterns"></a>

```typescript
public resetWorkloadIdPatterns(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SpiffeAuthBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.isConstruct"></a>

```typescript
import { spiffeAuthBackendRole } from '@cdktf/provider-vault'

spiffeAuthBackendRole.SpiffeAuthBackendRole.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.isTerraformElement"></a>

```typescript
import { spiffeAuthBackendRole } from '@cdktf/provider-vault'

spiffeAuthBackendRole.SpiffeAuthBackendRole.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.isTerraformResource"></a>

```typescript
import { spiffeAuthBackendRole } from '@cdktf/provider-vault'

spiffeAuthBackendRole.SpiffeAuthBackendRole.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.generateConfigForImport"></a>

```typescript
import { spiffeAuthBackendRole } from '@cdktf/provider-vault'

spiffeAuthBackendRole.SpiffeAuthBackendRole.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SpiffeAuthBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpiffeAuthBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpiffeAuthBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SpiffeAuthBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.aliasMetadataInput">aliasMetadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenBoundCidrsInput">tokenBoundCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenExplicitMaxTtlInput">tokenExplicitMaxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenMaxTtlInput">tokenMaxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenNoDefaultPolicyInput">tokenNoDefaultPolicyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenNumUsesInput">tokenNumUsesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenPeriodInput">tokenPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenPoliciesInput">tokenPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenTtlInput">tokenTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenTypeInput">tokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.workloadIdPatternsInput">workloadIdPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.aliasMetadata">aliasMetadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenNumUses">tokenNumUses</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenPeriod">tokenPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenPolicies">tokenPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenTtl">tokenTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenType">tokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.workloadIdPatterns">workloadIdPatterns</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aliasMetadataInput`<sup>Optional</sup> <a name="aliasMetadataInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.aliasMetadataInput"></a>

```typescript
public readonly aliasMetadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `tokenBoundCidrsInput`<sup>Optional</sup> <a name="tokenBoundCidrsInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenBoundCidrsInput"></a>

```typescript
public readonly tokenBoundCidrsInput: string[];
```

- *Type:* string[]

---

##### `tokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="tokenExplicitMaxTtlInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```typescript
public readonly tokenExplicitMaxTtlInput: number;
```

- *Type:* number

---

##### `tokenMaxTtlInput`<sup>Optional</sup> <a name="tokenMaxTtlInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenMaxTtlInput"></a>

```typescript
public readonly tokenMaxTtlInput: number;
```

- *Type:* number

---

##### `tokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="tokenNoDefaultPolicyInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```typescript
public readonly tokenNoDefaultPolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenNumUsesInput`<sup>Optional</sup> <a name="tokenNumUsesInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenNumUsesInput"></a>

```typescript
public readonly tokenNumUsesInput: number;
```

- *Type:* number

---

##### `tokenPeriodInput`<sup>Optional</sup> <a name="tokenPeriodInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenPeriodInput"></a>

```typescript
public readonly tokenPeriodInput: number;
```

- *Type:* number

---

##### `tokenPoliciesInput`<sup>Optional</sup> <a name="tokenPoliciesInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenPoliciesInput"></a>

```typescript
public readonly tokenPoliciesInput: string[];
```

- *Type:* string[]

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenTtlInput"></a>

```typescript
public readonly tokenTtlInput: number;
```

- *Type:* number

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenTypeInput"></a>

```typescript
public readonly tokenTypeInput: string;
```

- *Type:* string

---

##### `workloadIdPatternsInput`<sup>Optional</sup> <a name="workloadIdPatternsInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.workloadIdPatternsInput"></a>

```typescript
public readonly workloadIdPatternsInput: string[];
```

- *Type:* string[]

---

##### `aliasMetadata`<sup>Required</sup> <a name="aliasMetadata" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.aliasMetadata"></a>

```typescript
public readonly aliasMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `tokenBoundCidrs`<sup>Required</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenBoundCidrs"></a>

```typescript
public readonly tokenBoundCidrs: string[];
```

- *Type:* string[]

---

##### `tokenExplicitMaxTtl`<sup>Required</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```typescript
public readonly tokenExplicitMaxTtl: number;
```

- *Type:* number

---

##### `tokenMaxTtl`<sup>Required</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenMaxTtl"></a>

```typescript
public readonly tokenMaxTtl: number;
```

- *Type:* number

---

##### `tokenNoDefaultPolicy`<sup>Required</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```typescript
public readonly tokenNoDefaultPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenNumUses`<sup>Required</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenNumUses"></a>

```typescript
public readonly tokenNumUses: number;
```

- *Type:* number

---

##### `tokenPeriod`<sup>Required</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenPeriod"></a>

```typescript
public readonly tokenPeriod: number;
```

- *Type:* number

---

##### `tokenPolicies`<sup>Required</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenPolicies"></a>

```typescript
public readonly tokenPolicies: string[];
```

- *Type:* string[]

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: number;
```

- *Type:* number

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

---

##### `workloadIdPatterns`<sup>Required</sup> <a name="workloadIdPatterns" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.workloadIdPatterns"></a>

```typescript
public readonly workloadIdPatterns: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpiffeAuthBackendRoleConfig <a name="SpiffeAuthBackendRoleConfig" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.Initializer"></a>

```typescript
import { spiffeAuthBackendRole } from '@cdktf/provider-vault'

const spiffeAuthBackendRoleConfig: spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.mount">mount</a></code> | <code>string</code> | Mount path for the SPIFFE auth engine in Vault. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.name">name</a></code> | <code>string</code> | Name of the SPIFFE auth role. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.aliasMetadata">aliasMetadata</a></code> | <code>{[ key: string ]: string}</code> | A map of string to string that will be set as metadata on the identity alias. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.displayName">displayName</a></code> | <code>string</code> | A display name for the role. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>string[]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenNumUses">tokenNumUses</a></code> | <code>number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenPeriod">tokenPeriod</a></code> | <code>number</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenPolicies">tokenPolicies</a></code> | <code>string[]</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenTtl">tokenTtl</a></code> | <code>number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenType">tokenType</a></code> | <code>string</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.workloadIdPatterns">workloadIdPatterns</a></code> | <code>string[]</code> | A comma separated list of patterns that match an incoming workload id to this role. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Mount path for the SPIFFE auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#mount SpiffeAuthBackendRole#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the SPIFFE auth role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#name SpiffeAuthBackendRole#name}

---

##### `aliasMetadata`<sup>Optional</sup> <a name="aliasMetadata" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.aliasMetadata"></a>

```typescript
public readonly aliasMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of string to string that will be set as metadata on the identity alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#alias_metadata SpiffeAuthBackendRole#alias_metadata}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A display name for the role.

This is only used for display purposes in Vault, if not provided it will default to the role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#display_name SpiffeAuthBackendRole#display_name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#namespace SpiffeAuthBackendRole#namespace}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```typescript
public readonly tokenBoundCidrs: string[];
```

- *Type:* string[]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_bound_cidrs SpiffeAuthBackendRole#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```typescript
public readonly tokenExplicitMaxTtl: number;
```

- *Type:* number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_explicit_max_ttl SpiffeAuthBackendRole#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```typescript
public readonly tokenMaxTtl: number;
```

- *Type:* number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_max_ttl SpiffeAuthBackendRole#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```typescript
public readonly tokenNoDefaultPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_no_default_policy SpiffeAuthBackendRole#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenNumUses"></a>

```typescript
public readonly tokenNumUses: number;
```

- *Type:* number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_num_uses SpiffeAuthBackendRole#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenPeriod"></a>

```typescript
public readonly tokenPeriod: number;
```

- *Type:* number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_period SpiffeAuthBackendRole#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenPolicies"></a>

```typescript
public readonly tokenPolicies: string[];
```

- *Type:* string[]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_policies SpiffeAuthBackendRole#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: number;
```

- *Type:* number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_ttl SpiffeAuthBackendRole#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_type SpiffeAuthBackendRole#token_type}

---

##### `workloadIdPatterns`<sup>Optional</sup> <a name="workloadIdPatterns" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.workloadIdPatterns"></a>

```typescript
public readonly workloadIdPatterns: string[];
```

- *Type:* string[]

A comma separated list of patterns that match an incoming workload id to this role.

A workload id is the part that remains after stripping the trust domain prefix and the slash separator from a spiffe id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#workload_id_patterns SpiffeAuthBackendRole#workload_id_patterns}

---



