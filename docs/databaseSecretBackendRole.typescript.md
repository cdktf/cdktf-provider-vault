# `databaseSecretBackendRole` Submodule <a name="`databaseSecretBackendRole` Submodule" id="@cdktf/provider-vault.databaseSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseSecretBackendRole <a name="DatabaseSecretBackendRole" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/database_secret_backend_role vault_database_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer"></a>

```typescript
import { databaseSecretBackendRole } from '@cdktf/provider-vault'

new databaseSecretBackendRole.DatabaseSecretBackendRole(scope: Construct, id: string, config: DatabaseSecretBackendRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig">DatabaseSecretBackendRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig">DatabaseSecretBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetCredentialConfig">resetCredentialConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetCredentialType">resetCredentialType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetDefaultTtl">resetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetRenewStatements">resetRenewStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetRevocationStatements">resetRevocationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetRollbackStatements">resetRollbackStatements</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCredentialConfig` <a name="resetCredentialConfig" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetCredentialConfig"></a>

```typescript
public resetCredentialConfig(): void
```

##### `resetCredentialType` <a name="resetCredentialType" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetCredentialType"></a>

```typescript
public resetCredentialType(): void
```

##### `resetDefaultTtl` <a name="resetDefaultTtl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetDefaultTtl"></a>

```typescript
public resetDefaultTtl(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetMaxTtl"></a>

```typescript
public resetMaxTtl(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetRenewStatements` <a name="resetRenewStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetRenewStatements"></a>

```typescript
public resetRenewStatements(): void
```

##### `resetRevocationStatements` <a name="resetRevocationStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetRevocationStatements"></a>

```typescript
public resetRevocationStatements(): void
```

##### `resetRollbackStatements` <a name="resetRollbackStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetRollbackStatements"></a>

```typescript
public resetRollbackStatements(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseSecretBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isConstruct"></a>

```typescript
import { databaseSecretBackendRole } from '@cdktf/provider-vault'

databaseSecretBackendRole.DatabaseSecretBackendRole.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isTerraformElement"></a>

```typescript
import { databaseSecretBackendRole } from '@cdktf/provider-vault'

databaseSecretBackendRole.DatabaseSecretBackendRole.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isTerraformResource"></a>

```typescript
import { databaseSecretBackendRole } from '@cdktf/provider-vault'

databaseSecretBackendRole.DatabaseSecretBackendRole.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.generateConfigForImport"></a>

```typescript
import { databaseSecretBackendRole } from '@cdktf/provider-vault'

databaseSecretBackendRole.DatabaseSecretBackendRole.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseSecretBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseSecretBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/database_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.creationStatementsInput">creationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.credentialConfigInput">credentialConfigInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.credentialTypeInput">credentialTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.dbNameInput">dbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.defaultTtlInput">defaultTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.maxTtlInput">maxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.renewStatementsInput">renewStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.revocationStatementsInput">revocationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.rollbackStatementsInput">rollbackStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.creationStatements">creationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.credentialConfig">credentialConfig</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.credentialType">credentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.dbName">dbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.defaultTtl">defaultTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.maxTtl">maxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.renewStatements">renewStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.revocationStatements">revocationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.rollbackStatements">rollbackStatements</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `creationStatementsInput`<sup>Optional</sup> <a name="creationStatementsInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.creationStatementsInput"></a>

```typescript
public readonly creationStatementsInput: string[];
```

- *Type:* string[]

---

##### `credentialConfigInput`<sup>Optional</sup> <a name="credentialConfigInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.credentialConfigInput"></a>

```typescript
public readonly credentialConfigInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `credentialTypeInput`<sup>Optional</sup> <a name="credentialTypeInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.credentialTypeInput"></a>

```typescript
public readonly credentialTypeInput: string;
```

- *Type:* string

---

##### `dbNameInput`<sup>Optional</sup> <a name="dbNameInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.dbNameInput"></a>

```typescript
public readonly dbNameInput: string;
```

- *Type:* string

---

##### `defaultTtlInput`<sup>Optional</sup> <a name="defaultTtlInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.defaultTtlInput"></a>

```typescript
public readonly defaultTtlInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.maxTtlInput"></a>

```typescript
public readonly maxTtlInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `renewStatementsInput`<sup>Optional</sup> <a name="renewStatementsInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.renewStatementsInput"></a>

```typescript
public readonly renewStatementsInput: string[];
```

- *Type:* string[]

---

##### `revocationStatementsInput`<sup>Optional</sup> <a name="revocationStatementsInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.revocationStatementsInput"></a>

```typescript
public readonly revocationStatementsInput: string[];
```

- *Type:* string[]

---

##### `rollbackStatementsInput`<sup>Optional</sup> <a name="rollbackStatementsInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.rollbackStatementsInput"></a>

```typescript
public readonly rollbackStatementsInput: string[];
```

- *Type:* string[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `creationStatements`<sup>Required</sup> <a name="creationStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.creationStatements"></a>

```typescript
public readonly creationStatements: string[];
```

- *Type:* string[]

---

##### `credentialConfig`<sup>Required</sup> <a name="credentialConfig" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.credentialConfig"></a>

```typescript
public readonly credentialConfig: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

---

##### `defaultTtl`<sup>Required</sup> <a name="defaultTtl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.defaultTtl"></a>

```typescript
public readonly defaultTtl: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.maxTtl"></a>

```typescript
public readonly maxTtl: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `renewStatements`<sup>Required</sup> <a name="renewStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.renewStatements"></a>

```typescript
public readonly renewStatements: string[];
```

- *Type:* string[]

---

##### `revocationStatements`<sup>Required</sup> <a name="revocationStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.revocationStatements"></a>

```typescript
public readonly revocationStatements: string[];
```

- *Type:* string[]

---

##### `rollbackStatements`<sup>Required</sup> <a name="rollbackStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.rollbackStatements"></a>

```typescript
public readonly rollbackStatements: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseSecretBackendRoleConfig <a name="DatabaseSecretBackendRoleConfig" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.Initializer"></a>

```typescript
import { databaseSecretBackendRole } from '@cdktf/provider-vault'

const databaseSecretBackendRoleConfig: databaseSecretBackendRole.DatabaseSecretBackendRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.backend">backend</a></code> | <code>string</code> | The path of the Database Secret Backend the role belongs to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.creationStatements">creationStatements</a></code> | <code>string[]</code> | Database statements to execute to create and configure a user. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.dbName">dbName</a></code> | <code>string</code> | Database connection to use for this role. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.name">name</a></code> | <code>string</code> | Unique name for the role. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.credentialConfig">credentialConfig</a></code> | <code>{[ key: string ]: string}</code> | Specifies the configuration for the given credential_type. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.credentialType">credentialType</a></code> | <code>string</code> | Specifies the type of credential that will be generated for the role. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.defaultTtl">defaultTtl</a></code> | <code>number</code> | Default TTL for leases associated with this role, in seconds. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/database_secret_backend_role#id DatabaseSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.maxTtl">maxTtl</a></code> | <code>number</code> | Maximum TTL for leases associated with this role, in seconds. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.renewStatements">renewStatements</a></code> | <code>string[]</code> | Database statements to execute to renew a user. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.revocationStatements">revocationStatements</a></code> | <code>string[]</code> | Database statements to execute to revoke a user. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.rollbackStatements">rollbackStatements</a></code> | <code>string[]</code> | Database statements to execute to rollback a create operation in the event of an error. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

The path of the Database Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/database_secret_backend_role#backend DatabaseSecretBackendRole#backend}

---

##### `creationStatements`<sup>Required</sup> <a name="creationStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.creationStatements"></a>

```typescript
public readonly creationStatements: string[];
```

- *Type:* string[]

Database statements to execute to create and configure a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/database_secret_backend_role#creation_statements DatabaseSecretBackendRole#creation_statements}

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

Database connection to use for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/database_secret_backend_role#db_name DatabaseSecretBackendRole#db_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Unique name for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/database_secret_backend_role#name DatabaseSecretBackendRole#name}

---

##### `credentialConfig`<sup>Optional</sup> <a name="credentialConfig" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.credentialConfig"></a>

```typescript
public readonly credentialConfig: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Specifies the configuration for the given credential_type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/database_secret_backend_role#credential_config DatabaseSecretBackendRole#credential_config}

---

##### `credentialType`<sup>Optional</sup> <a name="credentialType" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

Specifies the type of credential that will be generated for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/database_secret_backend_role#credential_type DatabaseSecretBackendRole#credential_type}

---

##### `defaultTtl`<sup>Optional</sup> <a name="defaultTtl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.defaultTtl"></a>

```typescript
public readonly defaultTtl: number;
```

- *Type:* number

Default TTL for leases associated with this role, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/database_secret_backend_role#default_ttl DatabaseSecretBackendRole#default_ttl}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/database_secret_backend_role#id DatabaseSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.maxTtl"></a>

```typescript
public readonly maxTtl: number;
```

- *Type:* number

Maximum TTL for leases associated with this role, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/database_secret_backend_role#max_ttl DatabaseSecretBackendRole#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/database_secret_backend_role#namespace DatabaseSecretBackendRole#namespace}

---

##### `renewStatements`<sup>Optional</sup> <a name="renewStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.renewStatements"></a>

```typescript
public readonly renewStatements: string[];
```

- *Type:* string[]

Database statements to execute to renew a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/database_secret_backend_role#renew_statements DatabaseSecretBackendRole#renew_statements}

---

##### `revocationStatements`<sup>Optional</sup> <a name="revocationStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.revocationStatements"></a>

```typescript
public readonly revocationStatements: string[];
```

- *Type:* string[]

Database statements to execute to revoke a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/database_secret_backend_role#revocation_statements DatabaseSecretBackendRole#revocation_statements}

---

##### `rollbackStatements`<sup>Optional</sup> <a name="rollbackStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.rollbackStatements"></a>

```typescript
public readonly rollbackStatements: string[];
```

- *Type:* string[]

Database statements to execute to rollback a create operation in the event of an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/database_secret_backend_role#rollback_statements DatabaseSecretBackendRole#rollback_statements}

---



