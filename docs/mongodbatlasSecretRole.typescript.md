# `mongodbatlasSecretRole` Submodule <a name="`mongodbatlasSecretRole` Submodule" id="@cdktf/provider-vault.mongodbatlasSecretRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MongodbatlasSecretRole <a name="MongodbatlasSecretRole" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/mongodbatlas_secret_role vault_mongodbatlas_secret_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer"></a>

```typescript
import { mongodbatlasSecretRole } from '@cdktf/provider-vault'

new mongodbatlasSecretRole.MongodbatlasSecretRole(scope: Construct, id: string, config: MongodbatlasSecretRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig">MongodbatlasSecretRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig">MongodbatlasSecretRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetCidrBlocks">resetCidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetIpAddresses">resetIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetOrganizationId">resetOrganizationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetProjectRoles">resetProjectRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCidrBlocks` <a name="resetCidrBlocks" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetCidrBlocks"></a>

```typescript
public resetCidrBlocks(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpAddresses` <a name="resetIpAddresses" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetIpAddresses"></a>

```typescript
public resetIpAddresses(): void
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetMaxTtl"></a>

```typescript
public resetMaxTtl(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetOrganizationId` <a name="resetOrganizationId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetOrganizationId"></a>

```typescript
public resetOrganizationId(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetProjectRoles` <a name="resetProjectRoles" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetProjectRoles"></a>

```typescript
public resetProjectRoles(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetTtl"></a>

```typescript
public resetTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MongodbatlasSecretRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isConstruct"></a>

```typescript
import { mongodbatlasSecretRole } from '@cdktf/provider-vault'

mongodbatlasSecretRole.MongodbatlasSecretRole.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isTerraformElement"></a>

```typescript
import { mongodbatlasSecretRole } from '@cdktf/provider-vault'

mongodbatlasSecretRole.MongodbatlasSecretRole.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isTerraformResource"></a>

```typescript
import { mongodbatlasSecretRole } from '@cdktf/provider-vault'

mongodbatlasSecretRole.MongodbatlasSecretRole.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.generateConfigForImport"></a>

```typescript
import { mongodbatlasSecretRole } from '@cdktf/provider-vault'

mongodbatlasSecretRole.MongodbatlasSecretRole.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MongodbatlasSecretRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MongodbatlasSecretRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MongodbatlasSecretRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/mongodbatlas_secret_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MongodbatlasSecretRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.cidrBlocksInput">cidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.ipAddressesInput">ipAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.maxTtlInput">maxTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.organizationIdInput">organizationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.projectRolesInput">projectRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.rolesInput">rolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.ttlInput">ttlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.cidrBlocks">cidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.ipAddresses">ipAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.maxTtl">maxTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.projectRoles">projectRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.roles">roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.ttl">ttl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cidrBlocksInput`<sup>Optional</sup> <a name="cidrBlocksInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.cidrBlocksInput"></a>

```typescript
public readonly cidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipAddressesInput`<sup>Optional</sup> <a name="ipAddressesInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.ipAddressesInput"></a>

```typescript
public readonly ipAddressesInput: string[];
```

- *Type:* string[]

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.maxTtlInput"></a>

```typescript
public readonly maxTtlInput: string;
```

- *Type:* string

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `organizationIdInput`<sup>Optional</sup> <a name="organizationIdInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.organizationIdInput"></a>

```typescript
public readonly organizationIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `projectRolesInput`<sup>Optional</sup> <a name="projectRolesInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.projectRolesInput"></a>

```typescript
public readonly projectRolesInput: string[];
```

- *Type:* string[]

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.rolesInput"></a>

```typescript
public readonly rolesInput: string[];
```

- *Type:* string[]

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.ttlInput"></a>

```typescript
public readonly ttlInput: string;
```

- *Type:* string

---

##### `cidrBlocks`<sup>Required</sup> <a name="cidrBlocks" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.cidrBlocks"></a>

```typescript
public readonly cidrBlocks: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* string[]

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.maxTtl"></a>

```typescript
public readonly maxTtl: string;
```

- *Type:* string

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `projectRoles`<sup>Required</sup> <a name="projectRoles" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.projectRoles"></a>

```typescript
public readonly projectRoles: string[];
```

- *Type:* string[]

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MongodbatlasSecretRoleConfig <a name="MongodbatlasSecretRoleConfig" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.Initializer"></a>

```typescript
import { mongodbatlasSecretRole } from '@cdktf/provider-vault'

const mongodbatlasSecretRoleConfig: mongodbatlasSecretRole.MongodbatlasSecretRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.mount">mount</a></code> | <code>string</code> | Path where MongoDB Atlas secret backend is mounted. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.name">name</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.roles">roles</a></code> | <code>string[]</code> | List of roles that the API Key needs to have. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.cidrBlocks">cidrBlocks</a></code> | <code>string[]</code> | Whitelist entry in CIDR notation to be added for the API key. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/mongodbatlas_secret_role#id MongodbatlasSecretRole#id}. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.ipAddresses">ipAddresses</a></code> | <code>string[]</code> | IP address to be added to the whitelist for the API key. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.maxTtl">maxTtl</a></code> | <code>string</code> | The maximum allowed lifetime of credentials issued using this role. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.organizationId">organizationId</a></code> | <code>string</code> | ID for the organization to which the target API Key belongs. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.projectId">projectId</a></code> | <code>string</code> | ID for the project to which the target API Key belongs. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.projectRoles">projectRoles</a></code> | <code>string[]</code> | Roles assigned when an org API key is assigned to a project API key. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.ttl">ttl</a></code> | <code>string</code> | Duration in seconds after which the issued credential should expire. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Path where MongoDB Atlas secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/mongodbatlas_secret_role#mount MongodbatlasSecretRole#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/mongodbatlas_secret_role#name MongodbatlasSecretRole#name}

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

List of roles that the API Key needs to have.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/mongodbatlas_secret_role#roles MongodbatlasSecretRole#roles}

---

##### `cidrBlocks`<sup>Optional</sup> <a name="cidrBlocks" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.cidrBlocks"></a>

```typescript
public readonly cidrBlocks: string[];
```

- *Type:* string[]

Whitelist entry in CIDR notation to be added for the API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/mongodbatlas_secret_role#cidr_blocks MongodbatlasSecretRole#cidr_blocks}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/mongodbatlas_secret_role#id MongodbatlasSecretRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddresses`<sup>Optional</sup> <a name="ipAddresses" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* string[]

IP address to be added to the whitelist for the API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/mongodbatlas_secret_role#ip_addresses MongodbatlasSecretRole#ip_addresses}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.maxTtl"></a>

```typescript
public readonly maxTtl: string;
```

- *Type:* string

The maximum allowed lifetime of credentials issued using this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/mongodbatlas_secret_role#max_ttl MongodbatlasSecretRole#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/mongodbatlas_secret_role#namespace MongodbatlasSecretRole#namespace}

---

##### `organizationId`<sup>Optional</sup> <a name="organizationId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

ID for the organization to which the target API Key belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/mongodbatlas_secret_role#organization_id MongodbatlasSecretRole#organization_id}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

ID for the project to which the target API Key belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/mongodbatlas_secret_role#project_id MongodbatlasSecretRole#project_id}

---

##### `projectRoles`<sup>Optional</sup> <a name="projectRoles" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.projectRoles"></a>

```typescript
public readonly projectRoles: string[];
```

- *Type:* string[]

Roles assigned when an org API key is assigned to a project API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/mongodbatlas_secret_role#project_roles MongodbatlasSecretRole#project_roles}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

Duration in seconds after which the issued credential should expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/mongodbatlas_secret_role#ttl MongodbatlasSecretRole#ttl}

---



