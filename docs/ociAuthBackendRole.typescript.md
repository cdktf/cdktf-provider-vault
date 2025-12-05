# `ociAuthBackendRole` Submodule <a name="`ociAuthBackendRole` Submodule" id="@cdktf/provider-vault.ociAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OciAuthBackendRole <a name="OciAuthBackendRole" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/oci_auth_backend_role vault_oci_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer"></a>

```typescript
import { ociAuthBackendRole } from '@cdktf/provider-vault'

new ociAuthBackendRole.OciAuthBackendRole(scope: Construct, id: string, config: OciAuthBackendRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig">OciAuthBackendRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig">OciAuthBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetAliasMetadata">resetAliasMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetOcidList">resetOcidList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenBoundCidrs">resetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenExplicitMaxTtl">resetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenMaxTtl">resetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenNoDefaultPolicy">resetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenNumUses">resetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenPeriod">resetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenPolicies">resetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenType">resetTokenType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAliasMetadata` <a name="resetAliasMetadata" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetAliasMetadata"></a>

```typescript
public resetAliasMetadata(): void
```

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetBackend"></a>

```typescript
public resetBackend(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetOcidList` <a name="resetOcidList" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetOcidList"></a>

```typescript
public resetOcidList(): void
```

##### `resetTokenBoundCidrs` <a name="resetTokenBoundCidrs" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenBoundCidrs"></a>

```typescript
public resetTokenBoundCidrs(): void
```

##### `resetTokenExplicitMaxTtl` <a name="resetTokenExplicitMaxTtl" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```typescript
public resetTokenExplicitMaxTtl(): void
```

##### `resetTokenMaxTtl` <a name="resetTokenMaxTtl" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenMaxTtl"></a>

```typescript
public resetTokenMaxTtl(): void
```

##### `resetTokenNoDefaultPolicy` <a name="resetTokenNoDefaultPolicy" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```typescript
public resetTokenNoDefaultPolicy(): void
```

##### `resetTokenNumUses` <a name="resetTokenNumUses" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenNumUses"></a>

```typescript
public resetTokenNumUses(): void
```

##### `resetTokenPeriod` <a name="resetTokenPeriod" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenPeriod"></a>

```typescript
public resetTokenPeriod(): void
```

##### `resetTokenPolicies` <a name="resetTokenPolicies" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenPolicies"></a>

```typescript
public resetTokenPolicies(): void
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenTtl"></a>

```typescript
public resetTokenTtl(): void
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenType"></a>

```typescript
public resetTokenType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OciAuthBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.isConstruct"></a>

```typescript
import { ociAuthBackendRole } from '@cdktf/provider-vault'

ociAuthBackendRole.OciAuthBackendRole.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.isTerraformElement"></a>

```typescript
import { ociAuthBackendRole } from '@cdktf/provider-vault'

ociAuthBackendRole.OciAuthBackendRole.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.isTerraformResource"></a>

```typescript
import { ociAuthBackendRole } from '@cdktf/provider-vault'

ociAuthBackendRole.OciAuthBackendRole.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.generateConfigForImport"></a>

```typescript
import { ociAuthBackendRole } from '@cdktf/provider-vault'

ociAuthBackendRole.OciAuthBackendRole.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OciAuthBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OciAuthBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OciAuthBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/oci_auth_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OciAuthBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.aliasMetadataInput">aliasMetadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.ocidListInput">ocidListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenBoundCidrsInput">tokenBoundCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenExplicitMaxTtlInput">tokenExplicitMaxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenMaxTtlInput">tokenMaxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenNoDefaultPolicyInput">tokenNoDefaultPolicyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenNumUsesInput">tokenNumUsesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenPeriodInput">tokenPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenPoliciesInput">tokenPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenTtlInput">tokenTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenTypeInput">tokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.aliasMetadata">aliasMetadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.ocidList">ocidList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenNumUses">tokenNumUses</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenPeriod">tokenPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenPolicies">tokenPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenTtl">tokenTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenType">tokenType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aliasMetadataInput`<sup>Optional</sup> <a name="aliasMetadataInput" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.aliasMetadataInput"></a>

```typescript
public readonly aliasMetadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `ocidListInput`<sup>Optional</sup> <a name="ocidListInput" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.ocidListInput"></a>

```typescript
public readonly ocidListInput: string[];
```

- *Type:* string[]

---

##### `tokenBoundCidrsInput`<sup>Optional</sup> <a name="tokenBoundCidrsInput" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenBoundCidrsInput"></a>

```typescript
public readonly tokenBoundCidrsInput: string[];
```

- *Type:* string[]

---

##### `tokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="tokenExplicitMaxTtlInput" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```typescript
public readonly tokenExplicitMaxTtlInput: number;
```

- *Type:* number

---

##### `tokenMaxTtlInput`<sup>Optional</sup> <a name="tokenMaxTtlInput" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenMaxTtlInput"></a>

```typescript
public readonly tokenMaxTtlInput: number;
```

- *Type:* number

---

##### `tokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="tokenNoDefaultPolicyInput" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```typescript
public readonly tokenNoDefaultPolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenNumUsesInput`<sup>Optional</sup> <a name="tokenNumUsesInput" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenNumUsesInput"></a>

```typescript
public readonly tokenNumUsesInput: number;
```

- *Type:* number

---

##### `tokenPeriodInput`<sup>Optional</sup> <a name="tokenPeriodInput" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenPeriodInput"></a>

```typescript
public readonly tokenPeriodInput: number;
```

- *Type:* number

---

##### `tokenPoliciesInput`<sup>Optional</sup> <a name="tokenPoliciesInput" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenPoliciesInput"></a>

```typescript
public readonly tokenPoliciesInput: string[];
```

- *Type:* string[]

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenTtlInput"></a>

```typescript
public readonly tokenTtlInput: number;
```

- *Type:* number

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenTypeInput"></a>

```typescript
public readonly tokenTypeInput: string;
```

- *Type:* string

---

##### `aliasMetadata`<sup>Required</sup> <a name="aliasMetadata" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.aliasMetadata"></a>

```typescript
public readonly aliasMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `ocidList`<sup>Required</sup> <a name="ocidList" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.ocidList"></a>

```typescript
public readonly ocidList: string[];
```

- *Type:* string[]

---

##### `tokenBoundCidrs`<sup>Required</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenBoundCidrs"></a>

```typescript
public readonly tokenBoundCidrs: string[];
```

- *Type:* string[]

---

##### `tokenExplicitMaxTtl`<sup>Required</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```typescript
public readonly tokenExplicitMaxTtl: number;
```

- *Type:* number

---

##### `tokenMaxTtl`<sup>Required</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenMaxTtl"></a>

```typescript
public readonly tokenMaxTtl: number;
```

- *Type:* number

---

##### `tokenNoDefaultPolicy`<sup>Required</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```typescript
public readonly tokenNoDefaultPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenNumUses`<sup>Required</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenNumUses"></a>

```typescript
public readonly tokenNumUses: number;
```

- *Type:* number

---

##### `tokenPeriod`<sup>Required</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenPeriod"></a>

```typescript
public readonly tokenPeriod: number;
```

- *Type:* number

---

##### `tokenPolicies`<sup>Required</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenPolicies"></a>

```typescript
public readonly tokenPolicies: string[];
```

- *Type:* string[]

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: number;
```

- *Type:* number

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OciAuthBackendRoleConfig <a name="OciAuthBackendRoleConfig" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.Initializer"></a>

```typescript
import { ociAuthBackendRole } from '@cdktf/provider-vault'

const ociAuthBackendRoleConfig: ociAuthBackendRole.OciAuthBackendRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.name">name</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.aliasMetadata">aliasMetadata</a></code> | <code>{[ key: string ]: string}</code> | The metadata to be tied to generated entity alias. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.backend">backend</a></code> | <code>string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/oci_auth_backend_role#id OciAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.ocidList">ocidList</a></code> | <code>string[]</code> | A list of Group or Dynamic Group OCIDs that can take this role. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>string[]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenNumUses">tokenNumUses</a></code> | <code>number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenPeriod">tokenPeriod</a></code> | <code>number</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenPolicies">tokenPolicies</a></code> | <code>string[]</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenTtl">tokenTtl</a></code> | <code>number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenType">tokenType</a></code> | <code>string</code> | The type of token to generate, service or batch. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/oci_auth_backend_role#name OciAuthBackendRole#name}

---

##### `aliasMetadata`<sup>Optional</sup> <a name="aliasMetadata" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.aliasMetadata"></a>

```typescript
public readonly aliasMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The metadata to be tied to generated entity alias.

This should be a list or map containing the metadata in key value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/oci_auth_backend_role#alias_metadata OciAuthBackendRole#alias_metadata}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/oci_auth_backend_role#backend OciAuthBackendRole#backend}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/oci_auth_backend_role#id OciAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/oci_auth_backend_role#namespace OciAuthBackendRole#namespace}

---

##### `ocidList`<sup>Optional</sup> <a name="ocidList" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.ocidList"></a>

```typescript
public readonly ocidList: string[];
```

- *Type:* string[]

A list of Group or Dynamic Group OCIDs that can take this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/oci_auth_backend_role#ocid_list OciAuthBackendRole#ocid_list}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```typescript
public readonly tokenBoundCidrs: string[];
```

- *Type:* string[]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/oci_auth_backend_role#token_bound_cidrs OciAuthBackendRole#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```typescript
public readonly tokenExplicitMaxTtl: number;
```

- *Type:* number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/oci_auth_backend_role#token_explicit_max_ttl OciAuthBackendRole#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```typescript
public readonly tokenMaxTtl: number;
```

- *Type:* number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/oci_auth_backend_role#token_max_ttl OciAuthBackendRole#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```typescript
public readonly tokenNoDefaultPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/oci_auth_backend_role#token_no_default_policy OciAuthBackendRole#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenNumUses"></a>

```typescript
public readonly tokenNumUses: number;
```

- *Type:* number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/oci_auth_backend_role#token_num_uses OciAuthBackendRole#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenPeriod"></a>

```typescript
public readonly tokenPeriod: number;
```

- *Type:* number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/oci_auth_backend_role#token_period OciAuthBackendRole#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenPolicies"></a>

```typescript
public readonly tokenPolicies: string[];
```

- *Type:* string[]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/oci_auth_backend_role#token_policies OciAuthBackendRole#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: number;
```

- *Type:* number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/oci_auth_backend_role#token_ttl OciAuthBackendRole#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/oci_auth_backend_role#token_type OciAuthBackendRole#token_type}

---



