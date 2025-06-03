# `secretsSyncAzureDestination` Submodule <a name="`secretsSyncAzureDestination` Submodule" id="@cdktf/provider-vault.secretsSyncAzureDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsSyncAzureDestination <a name="SecretsSyncAzureDestination" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_azure_destination vault_secrets_sync_azure_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer"></a>

```typescript
import { secretsSyncAzureDestination } from '@cdktf/provider-vault'

new secretsSyncAzureDestination.SecretsSyncAzureDestination(scope: Construct, id: string, config: SecretsSyncAzureDestinationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig">SecretsSyncAzureDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig">SecretsSyncAzureDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetCloud">resetCloud</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetCustomTags">resetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetGranularity">resetGranularity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetKeyVaultUri">resetKeyVaultUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetSecretNameTemplate">resetSecretNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetCloud` <a name="resetCloud" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetCloud"></a>

```typescript
public resetCloud(): void
```

##### `resetCustomTags` <a name="resetCustomTags" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetCustomTags"></a>

```typescript
public resetCustomTags(): void
```

##### `resetGranularity` <a name="resetGranularity" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetGranularity"></a>

```typescript
public resetGranularity(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeyVaultUri` <a name="resetKeyVaultUri" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetKeyVaultUri"></a>

```typescript
public resetKeyVaultUri(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetSecretNameTemplate` <a name="resetSecretNameTemplate" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetSecretNameTemplate"></a>

```typescript
public resetSecretNameTemplate(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecretsSyncAzureDestination resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isConstruct"></a>

```typescript
import { secretsSyncAzureDestination } from '@cdktf/provider-vault'

secretsSyncAzureDestination.SecretsSyncAzureDestination.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isTerraformElement"></a>

```typescript
import { secretsSyncAzureDestination } from '@cdktf/provider-vault'

secretsSyncAzureDestination.SecretsSyncAzureDestination.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isTerraformResource"></a>

```typescript
import { secretsSyncAzureDestination } from '@cdktf/provider-vault'

secretsSyncAzureDestination.SecretsSyncAzureDestination.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.generateConfigForImport"></a>

```typescript
import { secretsSyncAzureDestination } from '@cdktf/provider-vault'

secretsSyncAzureDestination.SecretsSyncAzureDestination.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SecretsSyncAzureDestination resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretsSyncAzureDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretsSyncAzureDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_azure_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecretsSyncAzureDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.cloudInput">cloudInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.customTagsInput">customTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.granularityInput">granularityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.keyVaultUriInput">keyVaultUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.secretNameTemplateInput">secretNameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.cloud">cloud</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.customTags">customTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.granularity">granularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.keyVaultUri">keyVaultUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.secretNameTemplate">secretNameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `cloudInput`<sup>Optional</sup> <a name="cloudInput" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.cloudInput"></a>

```typescript
public readonly cloudInput: string;
```

- *Type:* string

---

##### `customTagsInput`<sup>Optional</sup> <a name="customTagsInput" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.customTagsInput"></a>

```typescript
public readonly customTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `granularityInput`<sup>Optional</sup> <a name="granularityInput" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.granularityInput"></a>

```typescript
public readonly granularityInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyVaultUriInput`<sup>Optional</sup> <a name="keyVaultUriInput" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.keyVaultUriInput"></a>

```typescript
public readonly keyVaultUriInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `secretNameTemplateInput`<sup>Optional</sup> <a name="secretNameTemplateInput" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.secretNameTemplateInput"></a>

```typescript
public readonly secretNameTemplateInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `cloud`<sup>Required</sup> <a name="cloud" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.cloud"></a>

```typescript
public readonly cloud: string;
```

- *Type:* string

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.customTags"></a>

```typescript
public readonly customTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.granularity"></a>

```typescript
public readonly granularity: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyVaultUri`<sup>Required</sup> <a name="keyVaultUri" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.keyVaultUri"></a>

```typescript
public readonly keyVaultUri: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `secretNameTemplate`<sup>Required</sup> <a name="secretNameTemplate" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.secretNameTemplate"></a>

```typescript
public readonly secretNameTemplate: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsSyncAzureDestinationConfig <a name="SecretsSyncAzureDestinationConfig" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.Initializer"></a>

```typescript
import { secretsSyncAzureDestination } from '@cdktf/provider-vault'

const secretsSyncAzureDestinationConfig: secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.name">name</a></code> | <code>string</code> | Unique name of the Azure destination. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.clientId">clientId</a></code> | <code>string</code> | Client ID of an Azure app registration. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | Client Secret of an Azure app registration. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.cloud">cloud</a></code> | <code>string</code> | Specifies a cloud for the client. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.customTags">customTags</a></code> | <code>{[ key: string ]: string}</code> | Custom tags to set on the secret managed at the destination. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.granularity">granularity</a></code> | <code>string</code> | Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_azure_destination#id SecretsSyncAzureDestination#id}. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.keyVaultUri">keyVaultUri</a></code> | <code>string</code> | URI of an existing Azure Key Vault instance. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.secretNameTemplate">secretNameTemplate</a></code> | <code>string</code> | Template describing how to generate external secret names. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.tenantId">tenantId</a></code> | <code>string</code> | ID of the target Azure tenant. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Unique name of the Azure destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_azure_destination#name SecretsSyncAzureDestination#name}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Client ID of an Azure app registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_azure_destination#client_id SecretsSyncAzureDestination#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Client Secret of an Azure app registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_azure_destination#client_secret SecretsSyncAzureDestination#client_secret}

---

##### `cloud`<sup>Optional</sup> <a name="cloud" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.cloud"></a>

```typescript
public readonly cloud: string;
```

- *Type:* string

Specifies a cloud for the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_azure_destination#cloud SecretsSyncAzureDestination#cloud}

---

##### `customTags`<sup>Optional</sup> <a name="customTags" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.customTags"></a>

```typescript
public readonly customTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Custom tags to set on the secret managed at the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_azure_destination#custom_tags SecretsSyncAzureDestination#custom_tags}

---

##### `granularity`<sup>Optional</sup> <a name="granularity" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.granularity"></a>

```typescript
public readonly granularity: string;
```

- *Type:* string

Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_azure_destination#granularity SecretsSyncAzureDestination#granularity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_azure_destination#id SecretsSyncAzureDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyVaultUri`<sup>Optional</sup> <a name="keyVaultUri" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.keyVaultUri"></a>

```typescript
public readonly keyVaultUri: string;
```

- *Type:* string

URI of an existing Azure Key Vault instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_azure_destination#key_vault_uri SecretsSyncAzureDestination#key_vault_uri}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_azure_destination#namespace SecretsSyncAzureDestination#namespace}

---

##### `secretNameTemplate`<sup>Optional</sup> <a name="secretNameTemplate" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.secretNameTemplate"></a>

```typescript
public readonly secretNameTemplate: string;
```

- *Type:* string

Template describing how to generate external secret names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_azure_destination#secret_name_template SecretsSyncAzureDestination#secret_name_template}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

ID of the target Azure tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_azure_destination#tenant_id SecretsSyncAzureDestination#tenant_id}

---



