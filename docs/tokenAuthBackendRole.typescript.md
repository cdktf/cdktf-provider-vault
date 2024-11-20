# `tokenAuthBackendRole` Submodule <a name="`tokenAuthBackendRole` Submodule" id="@cdktf/provider-vault.tokenAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TokenAuthBackendRole <a name="TokenAuthBackendRole" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/token_auth_backend_role vault_token_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer"></a>

```typescript
import { tokenAuthBackendRole } from '@cdktf/provider-vault'

new tokenAuthBackendRole.TokenAuthBackendRole(scope: Construct, id: string, config: TokenAuthBackendRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig">TokenAuthBackendRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig">TokenAuthBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetAllowedEntityAliases">resetAllowedEntityAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetAllowedPolicies">resetAllowedPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetAllowedPoliciesGlob">resetAllowedPoliciesGlob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetDisallowedPolicies">resetDisallowedPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetDisallowedPoliciesGlob">resetDisallowedPoliciesGlob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetOrphan">resetOrphan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetPathSuffix">resetPathSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetRenewable">resetRenewable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenBoundCidrs">resetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenExplicitMaxTtl">resetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenMaxTtl">resetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenNoDefaultPolicy">resetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenNumUses">resetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenPeriod">resetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenPolicies">resetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenType">resetTokenType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowedEntityAliases` <a name="resetAllowedEntityAliases" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetAllowedEntityAliases"></a>

```typescript
public resetAllowedEntityAliases(): void
```

##### `resetAllowedPolicies` <a name="resetAllowedPolicies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetAllowedPolicies"></a>

```typescript
public resetAllowedPolicies(): void
```

##### `resetAllowedPoliciesGlob` <a name="resetAllowedPoliciesGlob" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetAllowedPoliciesGlob"></a>

```typescript
public resetAllowedPoliciesGlob(): void
```

##### `resetDisallowedPolicies` <a name="resetDisallowedPolicies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetDisallowedPolicies"></a>

```typescript
public resetDisallowedPolicies(): void
```

##### `resetDisallowedPoliciesGlob` <a name="resetDisallowedPoliciesGlob" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetDisallowedPoliciesGlob"></a>

```typescript
public resetDisallowedPoliciesGlob(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetOrphan` <a name="resetOrphan" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetOrphan"></a>

```typescript
public resetOrphan(): void
```

##### `resetPathSuffix` <a name="resetPathSuffix" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetPathSuffix"></a>

```typescript
public resetPathSuffix(): void
```

##### `resetRenewable` <a name="resetRenewable" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetRenewable"></a>

```typescript
public resetRenewable(): void
```

##### `resetTokenBoundCidrs` <a name="resetTokenBoundCidrs" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenBoundCidrs"></a>

```typescript
public resetTokenBoundCidrs(): void
```

##### `resetTokenExplicitMaxTtl` <a name="resetTokenExplicitMaxTtl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```typescript
public resetTokenExplicitMaxTtl(): void
```

##### `resetTokenMaxTtl` <a name="resetTokenMaxTtl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenMaxTtl"></a>

```typescript
public resetTokenMaxTtl(): void
```

##### `resetTokenNoDefaultPolicy` <a name="resetTokenNoDefaultPolicy" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```typescript
public resetTokenNoDefaultPolicy(): void
```

##### `resetTokenNumUses` <a name="resetTokenNumUses" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenNumUses"></a>

```typescript
public resetTokenNumUses(): void
```

##### `resetTokenPeriod` <a name="resetTokenPeriod" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenPeriod"></a>

```typescript
public resetTokenPeriod(): void
```

##### `resetTokenPolicies` <a name="resetTokenPolicies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenPolicies"></a>

```typescript
public resetTokenPolicies(): void
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenTtl"></a>

```typescript
public resetTokenTtl(): void
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenType"></a>

```typescript
public resetTokenType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TokenAuthBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isConstruct"></a>

```typescript
import { tokenAuthBackendRole } from '@cdktf/provider-vault'

tokenAuthBackendRole.TokenAuthBackendRole.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isTerraformElement"></a>

```typescript
import { tokenAuthBackendRole } from '@cdktf/provider-vault'

tokenAuthBackendRole.TokenAuthBackendRole.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isTerraformResource"></a>

```typescript
import { tokenAuthBackendRole } from '@cdktf/provider-vault'

tokenAuthBackendRole.TokenAuthBackendRole.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.generateConfigForImport"></a>

```typescript
import { tokenAuthBackendRole } from '@cdktf/provider-vault'

tokenAuthBackendRole.TokenAuthBackendRole.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a TokenAuthBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TokenAuthBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TokenAuthBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/token_auth_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TokenAuthBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedEntityAliasesInput">allowedEntityAliasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPoliciesGlobInput">allowedPoliciesGlobInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPoliciesInput">allowedPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPoliciesGlobInput">disallowedPoliciesGlobInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPoliciesInput">disallowedPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.orphanInput">orphanInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.pathSuffixInput">pathSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.renewableInput">renewableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenBoundCidrsInput">tokenBoundCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenExplicitMaxTtlInput">tokenExplicitMaxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenMaxTtlInput">tokenMaxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNoDefaultPolicyInput">tokenNoDefaultPolicyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNumUsesInput">tokenNumUsesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPeriodInput">tokenPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPoliciesInput">tokenPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenTtlInput">tokenTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenTypeInput">tokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedEntityAliases">allowedEntityAliases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPolicies">allowedPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPoliciesGlob">allowedPoliciesGlob</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPolicies">disallowedPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPoliciesGlob">disallowedPoliciesGlob</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.orphan">orphan</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.pathSuffix">pathSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.renewable">renewable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNumUses">tokenNumUses</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPeriod">tokenPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPolicies">tokenPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenTtl">tokenTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenType">tokenType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allowedEntityAliasesInput`<sup>Optional</sup> <a name="allowedEntityAliasesInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedEntityAliasesInput"></a>

```typescript
public readonly allowedEntityAliasesInput: string[];
```

- *Type:* string[]

---

##### `allowedPoliciesGlobInput`<sup>Optional</sup> <a name="allowedPoliciesGlobInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPoliciesGlobInput"></a>

```typescript
public readonly allowedPoliciesGlobInput: string[];
```

- *Type:* string[]

---

##### `allowedPoliciesInput`<sup>Optional</sup> <a name="allowedPoliciesInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPoliciesInput"></a>

```typescript
public readonly allowedPoliciesInput: string[];
```

- *Type:* string[]

---

##### `disallowedPoliciesGlobInput`<sup>Optional</sup> <a name="disallowedPoliciesGlobInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPoliciesGlobInput"></a>

```typescript
public readonly disallowedPoliciesGlobInput: string[];
```

- *Type:* string[]

---

##### `disallowedPoliciesInput`<sup>Optional</sup> <a name="disallowedPoliciesInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPoliciesInput"></a>

```typescript
public readonly disallowedPoliciesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `orphanInput`<sup>Optional</sup> <a name="orphanInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.orphanInput"></a>

```typescript
public readonly orphanInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pathSuffixInput`<sup>Optional</sup> <a name="pathSuffixInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.pathSuffixInput"></a>

```typescript
public readonly pathSuffixInput: string;
```

- *Type:* string

---

##### `renewableInput`<sup>Optional</sup> <a name="renewableInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.renewableInput"></a>

```typescript
public readonly renewableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `tokenBoundCidrsInput`<sup>Optional</sup> <a name="tokenBoundCidrsInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenBoundCidrsInput"></a>

```typescript
public readonly tokenBoundCidrsInput: string[];
```

- *Type:* string[]

---

##### `tokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="tokenExplicitMaxTtlInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```typescript
public readonly tokenExplicitMaxTtlInput: number;
```

- *Type:* number

---

##### `tokenMaxTtlInput`<sup>Optional</sup> <a name="tokenMaxTtlInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenMaxTtlInput"></a>

```typescript
public readonly tokenMaxTtlInput: number;
```

- *Type:* number

---

##### `tokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="tokenNoDefaultPolicyInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```typescript
public readonly tokenNoDefaultPolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenNumUsesInput`<sup>Optional</sup> <a name="tokenNumUsesInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNumUsesInput"></a>

```typescript
public readonly tokenNumUsesInput: number;
```

- *Type:* number

---

##### `tokenPeriodInput`<sup>Optional</sup> <a name="tokenPeriodInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPeriodInput"></a>

```typescript
public readonly tokenPeriodInput: number;
```

- *Type:* number

---

##### `tokenPoliciesInput`<sup>Optional</sup> <a name="tokenPoliciesInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPoliciesInput"></a>

```typescript
public readonly tokenPoliciesInput: string[];
```

- *Type:* string[]

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenTtlInput"></a>

```typescript
public readonly tokenTtlInput: number;
```

- *Type:* number

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenTypeInput"></a>

```typescript
public readonly tokenTypeInput: string;
```

- *Type:* string

---

##### `allowedEntityAliases`<sup>Required</sup> <a name="allowedEntityAliases" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedEntityAliases"></a>

```typescript
public readonly allowedEntityAliases: string[];
```

- *Type:* string[]

---

##### `allowedPolicies`<sup>Required</sup> <a name="allowedPolicies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPolicies"></a>

```typescript
public readonly allowedPolicies: string[];
```

- *Type:* string[]

---

##### `allowedPoliciesGlob`<sup>Required</sup> <a name="allowedPoliciesGlob" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPoliciesGlob"></a>

```typescript
public readonly allowedPoliciesGlob: string[];
```

- *Type:* string[]

---

##### `disallowedPolicies`<sup>Required</sup> <a name="disallowedPolicies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPolicies"></a>

```typescript
public readonly disallowedPolicies: string[];
```

- *Type:* string[]

---

##### `disallowedPoliciesGlob`<sup>Required</sup> <a name="disallowedPoliciesGlob" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPoliciesGlob"></a>

```typescript
public readonly disallowedPoliciesGlob: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `orphan`<sup>Required</sup> <a name="orphan" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.orphan"></a>

```typescript
public readonly orphan: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pathSuffix`<sup>Required</sup> <a name="pathSuffix" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.pathSuffix"></a>

```typescript
public readonly pathSuffix: string;
```

- *Type:* string

---

##### `renewable`<sup>Required</sup> <a name="renewable" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.renewable"></a>

```typescript
public readonly renewable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

##### `tokenBoundCidrs`<sup>Required</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenBoundCidrs"></a>

```typescript
public readonly tokenBoundCidrs: string[];
```

- *Type:* string[]

---

##### `tokenExplicitMaxTtl`<sup>Required</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```typescript
public readonly tokenExplicitMaxTtl: number;
```

- *Type:* number

---

##### `tokenMaxTtl`<sup>Required</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenMaxTtl"></a>

```typescript
public readonly tokenMaxTtl: number;
```

- *Type:* number

---

##### `tokenNoDefaultPolicy`<sup>Required</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```typescript
public readonly tokenNoDefaultPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenNumUses`<sup>Required</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNumUses"></a>

```typescript
public readonly tokenNumUses: number;
```

- *Type:* number

---

##### `tokenPeriod`<sup>Required</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPeriod"></a>

```typescript
public readonly tokenPeriod: number;
```

- *Type:* number

---

##### `tokenPolicies`<sup>Required</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPolicies"></a>

```typescript
public readonly tokenPolicies: string[];
```

- *Type:* string[]

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: number;
```

- *Type:* number

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TokenAuthBackendRoleConfig <a name="TokenAuthBackendRoleConfig" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.Initializer"></a>

```typescript
import { tokenAuthBackendRole } from '@cdktf/provider-vault'

const tokenAuthBackendRoleConfig: tokenAuthBackendRole.TokenAuthBackendRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.roleName">roleName</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.allowedEntityAliases">allowedEntityAliases</a></code> | <code>string[]</code> | Set of allowed entity aliases for this role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.allowedPolicies">allowedPolicies</a></code> | <code>string[]</code> | List of allowed policies for given role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.allowedPoliciesGlob">allowedPoliciesGlob</a></code> | <code>string[]</code> | Set of allowed policies with glob match for given role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.disallowedPolicies">disallowedPolicies</a></code> | <code>string[]</code> | List of disallowed policies for given role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.disallowedPoliciesGlob">disallowedPoliciesGlob</a></code> | <code>string[]</code> | Set of disallowed policies with glob match for given role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/token_auth_backend_role#id TokenAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.orphan">orphan</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, tokens created against this policy will be orphan tokens. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.pathSuffix">pathSuffix</a></code> | <code>string</code> | Tokens created against this role will have the given suffix as part of their path in addition to the role name. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.renewable">renewable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to disable the ability of the token to be renewed past its initial TTL. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>string[]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenNumUses">tokenNumUses</a></code> | <code>number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenPeriod">tokenPeriod</a></code> | <code>number</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenPolicies">tokenPolicies</a></code> | <code>string[]</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenTtl">tokenTtl</a></code> | <code>number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenType">tokenType</a></code> | <code>string</code> | The type of token to generate, service or batch. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/token_auth_backend_role#role_name TokenAuthBackendRole#role_name}

---

##### `allowedEntityAliases`<sup>Optional</sup> <a name="allowedEntityAliases" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.allowedEntityAliases"></a>

```typescript
public readonly allowedEntityAliases: string[];
```

- *Type:* string[]

Set of allowed entity aliases for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/token_auth_backend_role#allowed_entity_aliases TokenAuthBackendRole#allowed_entity_aliases}

---

##### `allowedPolicies`<sup>Optional</sup> <a name="allowedPolicies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.allowedPolicies"></a>

```typescript
public readonly allowedPolicies: string[];
```

- *Type:* string[]

List of allowed policies for given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/token_auth_backend_role#allowed_policies TokenAuthBackendRole#allowed_policies}

---

##### `allowedPoliciesGlob`<sup>Optional</sup> <a name="allowedPoliciesGlob" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.allowedPoliciesGlob"></a>

```typescript
public readonly allowedPoliciesGlob: string[];
```

- *Type:* string[]

Set of allowed policies with glob match for given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/token_auth_backend_role#allowed_policies_glob TokenAuthBackendRole#allowed_policies_glob}

---

##### `disallowedPolicies`<sup>Optional</sup> <a name="disallowedPolicies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.disallowedPolicies"></a>

```typescript
public readonly disallowedPolicies: string[];
```

- *Type:* string[]

List of disallowed policies for given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/token_auth_backend_role#disallowed_policies TokenAuthBackendRole#disallowed_policies}

---

##### `disallowedPoliciesGlob`<sup>Optional</sup> <a name="disallowedPoliciesGlob" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.disallowedPoliciesGlob"></a>

```typescript
public readonly disallowedPoliciesGlob: string[];
```

- *Type:* string[]

Set of disallowed policies with glob match for given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/token_auth_backend_role#disallowed_policies_glob TokenAuthBackendRole#disallowed_policies_glob}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/token_auth_backend_role#id TokenAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/token_auth_backend_role#namespace TokenAuthBackendRole#namespace}

---

##### `orphan`<sup>Optional</sup> <a name="orphan" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.orphan"></a>

```typescript
public readonly orphan: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, tokens created against this policy will be orphan tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/token_auth_backend_role#orphan TokenAuthBackendRole#orphan}

---

##### `pathSuffix`<sup>Optional</sup> <a name="pathSuffix" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.pathSuffix"></a>

```typescript
public readonly pathSuffix: string;
```

- *Type:* string

Tokens created against this role will have the given suffix as part of their path in addition to the role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/token_auth_backend_role#path_suffix TokenAuthBackendRole#path_suffix}

---

##### `renewable`<sup>Optional</sup> <a name="renewable" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.renewable"></a>

```typescript
public readonly renewable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to disable the ability of the token to be renewed past its initial TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/token_auth_backend_role#renewable TokenAuthBackendRole#renewable}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```typescript
public readonly tokenBoundCidrs: string[];
```

- *Type:* string[]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/token_auth_backend_role#token_bound_cidrs TokenAuthBackendRole#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```typescript
public readonly tokenExplicitMaxTtl: number;
```

- *Type:* number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/token_auth_backend_role#token_explicit_max_ttl TokenAuthBackendRole#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```typescript
public readonly tokenMaxTtl: number;
```

- *Type:* number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/token_auth_backend_role#token_max_ttl TokenAuthBackendRole#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```typescript
public readonly tokenNoDefaultPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/token_auth_backend_role#token_no_default_policy TokenAuthBackendRole#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenNumUses"></a>

```typescript
public readonly tokenNumUses: number;
```

- *Type:* number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/token_auth_backend_role#token_num_uses TokenAuthBackendRole#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenPeriod"></a>

```typescript
public readonly tokenPeriod: number;
```

- *Type:* number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/token_auth_backend_role#token_period TokenAuthBackendRole#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenPolicies"></a>

```typescript
public readonly tokenPolicies: string[];
```

- *Type:* string[]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/token_auth_backend_role#token_policies TokenAuthBackendRole#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: number;
```

- *Type:* number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/token_auth_backend_role#token_ttl TokenAuthBackendRole#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/token_auth_backend_role#token_type TokenAuthBackendRole#token_type}

---



