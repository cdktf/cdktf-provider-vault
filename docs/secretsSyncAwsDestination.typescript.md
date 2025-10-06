# `secretsSyncAwsDestination` Submodule <a name="`secretsSyncAwsDestination` Submodule" id="@cdktf/provider-vault.secretsSyncAwsDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsSyncAwsDestination <a name="SecretsSyncAwsDestination" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_aws_destination vault_secrets_sync_aws_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer"></a>

```typescript
import { secretsSyncAwsDestination } from '@cdktf/provider-vault'

new secretsSyncAwsDestination.SecretsSyncAwsDestination(scope: Construct, id: string, config: SecretsSyncAwsDestinationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig">SecretsSyncAwsDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig">SecretsSyncAwsDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetAccessKeyId">resetAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetCustomTags">resetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetGranularity">resetGranularity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetSecretAccessKey">resetSecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetSecretNameTemplate">resetSecretNameTemplate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccessKeyId` <a name="resetAccessKeyId" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetAccessKeyId"></a>

```typescript
public resetAccessKeyId(): void
```

##### `resetCustomTags` <a name="resetCustomTags" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetCustomTags"></a>

```typescript
public resetCustomTags(): void
```

##### `resetExternalId` <a name="resetExternalId" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetExternalId"></a>

```typescript
public resetExternalId(): void
```

##### `resetGranularity` <a name="resetGranularity" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetGranularity"></a>

```typescript
public resetGranularity(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetSecretAccessKey` <a name="resetSecretAccessKey" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetSecretAccessKey"></a>

```typescript
public resetSecretAccessKey(): void
```

##### `resetSecretNameTemplate` <a name="resetSecretNameTemplate" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetSecretNameTemplate"></a>

```typescript
public resetSecretNameTemplate(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecretsSyncAwsDestination resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isConstruct"></a>

```typescript
import { secretsSyncAwsDestination } from '@cdktf/provider-vault'

secretsSyncAwsDestination.SecretsSyncAwsDestination.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isTerraformElement"></a>

```typescript
import { secretsSyncAwsDestination } from '@cdktf/provider-vault'

secretsSyncAwsDestination.SecretsSyncAwsDestination.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isTerraformResource"></a>

```typescript
import { secretsSyncAwsDestination } from '@cdktf/provider-vault'

secretsSyncAwsDestination.SecretsSyncAwsDestination.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.generateConfigForImport"></a>

```typescript
import { secretsSyncAwsDestination } from '@cdktf/provider-vault'

secretsSyncAwsDestination.SecretsSyncAwsDestination.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SecretsSyncAwsDestination resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretsSyncAwsDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretsSyncAwsDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_aws_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecretsSyncAwsDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.accessKeyIdInput">accessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.customTagsInput">customTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.granularityInput">granularityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.secretAccessKeyInput">secretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.secretNameTemplateInput">secretNameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.customTags">customTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.granularity">granularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.secretNameTemplate">secretNameTemplate</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `accessKeyIdInput`<sup>Optional</sup> <a name="accessKeyIdInput" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.accessKeyIdInput"></a>

```typescript
public readonly accessKeyIdInput: string;
```

- *Type:* string

---

##### `customTagsInput`<sup>Optional</sup> <a name="customTagsInput" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.customTagsInput"></a>

```typescript
public readonly customTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `granularityInput`<sup>Optional</sup> <a name="granularityInput" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.granularityInput"></a>

```typescript
public readonly granularityInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `secretAccessKeyInput`<sup>Optional</sup> <a name="secretAccessKeyInput" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.secretAccessKeyInput"></a>

```typescript
public readonly secretAccessKeyInput: string;
```

- *Type:* string

---

##### `secretNameTemplateInput`<sup>Optional</sup> <a name="secretNameTemplateInput" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.secretNameTemplateInput"></a>

```typescript
public readonly secretNameTemplateInput: string;
```

- *Type:* string

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.customTags"></a>

```typescript
public readonly customTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.granularity"></a>

```typescript
public readonly granularity: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

---

##### `secretNameTemplate`<sup>Required</sup> <a name="secretNameTemplate" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.secretNameTemplate"></a>

```typescript
public readonly secretNameTemplate: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsSyncAwsDestinationConfig <a name="SecretsSyncAwsDestinationConfig" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.Initializer"></a>

```typescript
import { secretsSyncAwsDestination } from '@cdktf/provider-vault'

const secretsSyncAwsDestinationConfig: secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.name">name</a></code> | <code>string</code> | Unique name of the AWS destination. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | Access key id to authenticate against the AWS secrets manager. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.customTags">customTags</a></code> | <code>{[ key: string ]: string}</code> | Custom tags to set on the secret managed at the destination. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.externalId">externalId</a></code> | <code>string</code> | Extra protection that must match the trust policy granting access to the AWS IAM role ARN. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.granularity">granularity</a></code> | <code>string</code> | Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_aws_destination#id SecretsSyncAwsDestination#id}. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.region">region</a></code> | <code>string</code> | Region where to manage the secrets manager entries. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Specifies a role to assume when connecting to AWS. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | Secret access key to authenticate against the AWS secrets manager. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.secretNameTemplate">secretNameTemplate</a></code> | <code>string</code> | Template describing how to generate external secret names. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Unique name of the AWS destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_aws_destination#name SecretsSyncAwsDestination#name}

---

##### `accessKeyId`<sup>Optional</sup> <a name="accessKeyId" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

Access key id to authenticate against the AWS secrets manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_aws_destination#access_key_id SecretsSyncAwsDestination#access_key_id}

---

##### `customTags`<sup>Optional</sup> <a name="customTags" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.customTags"></a>

```typescript
public readonly customTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Custom tags to set on the secret managed at the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_aws_destination#custom_tags SecretsSyncAwsDestination#custom_tags}

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

Extra protection that must match the trust policy granting access to the AWS IAM role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_aws_destination#external_id SecretsSyncAwsDestination#external_id}

---

##### `granularity`<sup>Optional</sup> <a name="granularity" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.granularity"></a>

```typescript
public readonly granularity: string;
```

- *Type:* string

Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_aws_destination#granularity SecretsSyncAwsDestination#granularity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_aws_destination#id SecretsSyncAwsDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_aws_destination#namespace SecretsSyncAwsDestination#namespace}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where to manage the secrets manager entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_aws_destination#region SecretsSyncAwsDestination#region}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Specifies a role to assume when connecting to AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_aws_destination#role_arn SecretsSyncAwsDestination#role_arn}

---

##### `secretAccessKey`<sup>Optional</sup> <a name="secretAccessKey" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

Secret access key to authenticate against the AWS secrets manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_aws_destination#secret_access_key SecretsSyncAwsDestination#secret_access_key}

---

##### `secretNameTemplate`<sup>Optional</sup> <a name="secretNameTemplate" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.secretNameTemplate"></a>

```typescript
public readonly secretNameTemplate: string;
```

- *Type:* string

Template describing how to generate external secret names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_aws_destination#secret_name_template SecretsSyncAwsDestination#secret_name_template}

---



