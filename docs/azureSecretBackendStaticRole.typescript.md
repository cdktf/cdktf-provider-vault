# `azureSecretBackendStaticRole` Submodule <a name="`azureSecretBackendStaticRole` Submodule" id="@cdktf/provider-vault.azureSecretBackendStaticRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureSecretBackendStaticRole <a name="AzureSecretBackendStaticRole" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/azure_secret_backend_static_role vault_azure_secret_backend_static_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer"></a>

```typescript
import { azureSecretBackendStaticRole } from '@cdktf/provider-vault'

new azureSecretBackendStaticRole.AzureSecretBackendStaticRole(scope: Construct, id: string, config: AzureSecretBackendStaticRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig">AzureSecretBackendStaticRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig">AzureSecretBackendStaticRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetExpiration">resetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetSecretId">resetSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetSkipImportRotation">resetSkipImportRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetExpiration` <a name="resetExpiration" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetExpiration"></a>

```typescript
public resetExpiration(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetSecretId` <a name="resetSecretId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetSecretId"></a>

```typescript
public resetSecretId(): void
```

##### `resetSkipImportRotation` <a name="resetSkipImportRotation" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetSkipImportRotation"></a>

```typescript
public resetSkipImportRotation(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetTtl"></a>

```typescript
public resetTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AzureSecretBackendStaticRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isConstruct"></a>

```typescript
import { azureSecretBackendStaticRole } from '@cdktf/provider-vault'

azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isTerraformElement"></a>

```typescript
import { azureSecretBackendStaticRole } from '@cdktf/provider-vault'

azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isTerraformResource"></a>

```typescript
import { azureSecretBackendStaticRole } from '@cdktf/provider-vault'

azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.generateConfigForImport"></a>

```typescript
import { azureSecretBackendStaticRole } from '@cdktf/provider-vault'

azureSecretBackendStaticRole.AzureSecretBackendStaticRole.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AzureSecretBackendStaticRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AzureSecretBackendStaticRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AzureSecretBackendStaticRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/azure_secret_backend_static_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AzureSecretBackendStaticRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.applicationObjectIdInput">applicationObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.expirationInput">expirationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.skipImportRotationInput">skipImportRotationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.applicationObjectId">applicationObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.expiration">expiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.skipImportRotation">skipImportRotation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `applicationObjectIdInput`<sup>Optional</sup> <a name="applicationObjectIdInput" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.applicationObjectIdInput"></a>

```typescript
public readonly applicationObjectIdInput: string;
```

- *Type:* string

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `expirationInput`<sup>Optional</sup> <a name="expirationInput" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.expirationInput"></a>

```typescript
public readonly expirationInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `skipImportRotationInput`<sup>Optional</sup> <a name="skipImportRotationInput" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.skipImportRotationInput"></a>

```typescript
public readonly skipImportRotationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `applicationObjectId`<sup>Required</sup> <a name="applicationObjectId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.applicationObjectId"></a>

```typescript
public readonly applicationObjectId: string;
```

- *Type:* string

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.expiration"></a>

```typescript
public readonly expiration: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `skipImportRotation`<sup>Required</sup> <a name="skipImportRotation" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.skipImportRotation"></a>

```typescript
public readonly skipImportRotation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AzureSecretBackendStaticRoleConfig <a name="AzureSecretBackendStaticRoleConfig" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.Initializer"></a>

```typescript
import { azureSecretBackendStaticRole } from '@cdktf/provider-vault'

const azureSecretBackendStaticRoleConfig: azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.applicationObjectId">applicationObjectId</a></code> | <code>string</code> | Application object ID for an existing service principal that is managed by the static role. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.backend">backend</a></code> | <code>string</code> | The path where the Azure secrets backend is mounted. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.role">role</a></code> | <code>string</code> | Name of the static role to create. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | The plaintext secret value of the credential you want to import. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.expiration">expiration</a></code> | <code>string</code> | A future expiration time for the imported credential, in RFC3339 format. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | A map of string key/value pairs that will be stored as metadata on the secret. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.secretId">secretId</a></code> | <code>string</code> | The secret ID of the Azure password credential you want to import. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.skipImportRotation">skipImportRotation</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, skip rotation of the client secret on import. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.ttl">ttl</a></code> | <code>number</code> | Timespan of 1 year (31536000) or more during which the role credentials are valid. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationObjectId`<sup>Required</sup> <a name="applicationObjectId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.applicationObjectId"></a>

```typescript
public readonly applicationObjectId: string;
```

- *Type:* string

Application object ID for an existing service principal that is managed by the static role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/azure_secret_backend_static_role#application_object_id AzureSecretBackendStaticRole#application_object_id}

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

The path where the Azure secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/azure_secret_backend_static_role#backend AzureSecretBackendStaticRole#backend}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Name of the static role to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/azure_secret_backend_static_role#role AzureSecretBackendStaticRole#role}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The plaintext secret value of the credential you want to import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/azure_secret_backend_static_role#client_secret AzureSecretBackendStaticRole#client_secret}

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.expiration"></a>

```typescript
public readonly expiration: string;
```

- *Type:* string

A future expiration time for the imported credential, in RFC3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/azure_secret_backend_static_role#expiration AzureSecretBackendStaticRole#expiration}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of string key/value pairs that will be stored as metadata on the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/azure_secret_backend_static_role#metadata AzureSecretBackendStaticRole#metadata}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/azure_secret_backend_static_role#namespace AzureSecretBackendStaticRole#namespace}

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

The secret ID of the Azure password credential you want to import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/azure_secret_backend_static_role#secret_id AzureSecretBackendStaticRole#secret_id}

---

##### `skipImportRotation`<sup>Optional</sup> <a name="skipImportRotation" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.skipImportRotation"></a>

```typescript
public readonly skipImportRotation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, skip rotation of the client secret on import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/azure_secret_backend_static_role#skip_import_rotation AzureSecretBackendStaticRole#skip_import_rotation}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

Timespan of 1 year (31536000) or more during which the role credentials are valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/azure_secret_backend_static_role#ttl AzureSecretBackendStaticRole#ttl}

---



