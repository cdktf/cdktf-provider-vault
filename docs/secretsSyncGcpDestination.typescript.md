# `secretsSyncGcpDestination` Submodule <a name="`secretsSyncGcpDestination` Submodule" id="@cdktf/provider-vault.secretsSyncGcpDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsSyncGcpDestination <a name="SecretsSyncGcpDestination" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_gcp_destination vault_secrets_sync_gcp_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer"></a>

```typescript
import { secretsSyncGcpDestination } from '@cdktf/provider-vault'

new secretsSyncGcpDestination.SecretsSyncGcpDestination(scope: Construct, id: string, config: SecretsSyncGcpDestinationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig">SecretsSyncGcpDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig">SecretsSyncGcpDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetCustomTags">resetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetGranularity">resetGranularity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetSecretNameTemplate">resetSecretNameTemplate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCredentials` <a name="resetCredentials" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetCredentials"></a>

```typescript
public resetCredentials(): void
```

##### `resetCustomTags` <a name="resetCustomTags" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetCustomTags"></a>

```typescript
public resetCustomTags(): void
```

##### `resetGranularity` <a name="resetGranularity" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetGranularity"></a>

```typescript
public resetGranularity(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetSecretNameTemplate` <a name="resetSecretNameTemplate" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetSecretNameTemplate"></a>

```typescript
public resetSecretNameTemplate(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecretsSyncGcpDestination resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isConstruct"></a>

```typescript
import { secretsSyncGcpDestination } from '@cdktf/provider-vault'

secretsSyncGcpDestination.SecretsSyncGcpDestination.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformElement"></a>

```typescript
import { secretsSyncGcpDestination } from '@cdktf/provider-vault'

secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformResource"></a>

```typescript
import { secretsSyncGcpDestination } from '@cdktf/provider-vault'

secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.generateConfigForImport"></a>

```typescript
import { secretsSyncGcpDestination } from '@cdktf/provider-vault'

secretsSyncGcpDestination.SecretsSyncGcpDestination.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SecretsSyncGcpDestination resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretsSyncGcpDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretsSyncGcpDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_gcp_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecretsSyncGcpDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.credentialsInput">credentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.customTagsInput">customTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.granularityInput">granularityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.secretNameTemplateInput">secretNameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.credentials">credentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.customTags">customTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.granularity">granularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.secretNameTemplate">secretNameTemplate</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: string;
```

- *Type:* string

---

##### `customTagsInput`<sup>Optional</sup> <a name="customTagsInput" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.customTagsInput"></a>

```typescript
public readonly customTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `granularityInput`<sup>Optional</sup> <a name="granularityInput" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.granularityInput"></a>

```typescript
public readonly granularityInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `secretNameTemplateInput`<sup>Optional</sup> <a name="secretNameTemplateInput" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.secretNameTemplateInput"></a>

```typescript
public readonly secretNameTemplateInput: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.credentials"></a>

```typescript
public readonly credentials: string;
```

- *Type:* string

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.customTags"></a>

```typescript
public readonly customTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.granularity"></a>

```typescript
public readonly granularity: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `secretNameTemplate`<sup>Required</sup> <a name="secretNameTemplate" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.secretNameTemplate"></a>

```typescript
public readonly secretNameTemplate: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsSyncGcpDestinationConfig <a name="SecretsSyncGcpDestinationConfig" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.Initializer"></a>

```typescript
import { secretsSyncGcpDestination } from '@cdktf/provider-vault'

const secretsSyncGcpDestinationConfig: secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.name">name</a></code> | <code>string</code> | Unique name of the GCP destination. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.credentials">credentials</a></code> | <code>string</code> | JSON-encoded credentials to use to connect to GCP. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.customTags">customTags</a></code> | <code>{[ key: string ]: string}</code> | Custom tags to set on the secret managed at the destination. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.granularity">granularity</a></code> | <code>string</code> | Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_gcp_destination#id SecretsSyncGcpDestination#id}. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.projectId">projectId</a></code> | <code>string</code> | The target project to manage secrets in. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.secretNameTemplate">secretNameTemplate</a></code> | <code>string</code> | Template describing how to generate external secret names. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Unique name of the GCP destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_gcp_destination#name SecretsSyncGcpDestination#name}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.credentials"></a>

```typescript
public readonly credentials: string;
```

- *Type:* string

JSON-encoded credentials to use to connect to GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_gcp_destination#credentials SecretsSyncGcpDestination#credentials}

---

##### `customTags`<sup>Optional</sup> <a name="customTags" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.customTags"></a>

```typescript
public readonly customTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Custom tags to set on the secret managed at the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_gcp_destination#custom_tags SecretsSyncGcpDestination#custom_tags}

---

##### `granularity`<sup>Optional</sup> <a name="granularity" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.granularity"></a>

```typescript
public readonly granularity: string;
```

- *Type:* string

Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_gcp_destination#granularity SecretsSyncGcpDestination#granularity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_gcp_destination#id SecretsSyncGcpDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_gcp_destination#namespace SecretsSyncGcpDestination#namespace}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The target project to manage secrets in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_gcp_destination#project_id SecretsSyncGcpDestination#project_id}

---

##### `secretNameTemplate`<sup>Optional</sup> <a name="secretNameTemplate" id="@cdktf/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.secretNameTemplate"></a>

```typescript
public readonly secretNameTemplate: string;
```

- *Type:* string

Template describing how to generate external secret names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_gcp_destination#secret_name_template SecretsSyncGcpDestination#secret_name_template}

---



