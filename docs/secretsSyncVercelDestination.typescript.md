# `secretsSyncVercelDestination` Submodule <a name="`secretsSyncVercelDestination` Submodule" id="@cdktf/provider-vault.secretsSyncVercelDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsSyncVercelDestination <a name="SecretsSyncVercelDestination" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_vercel_destination vault_secrets_sync_vercel_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer"></a>

```typescript
import { secretsSyncVercelDestination } from '@cdktf/provider-vault'

new secretsSyncVercelDestination.SecretsSyncVercelDestination(scope: Construct, id: string, config: SecretsSyncVercelDestinationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig">SecretsSyncVercelDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig">SecretsSyncVercelDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetGranularity">resetGranularity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetSecretNameTemplate">resetSecretNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetTeamId">resetTeamId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetGranularity` <a name="resetGranularity" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetGranularity"></a>

```typescript
public resetGranularity(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetSecretNameTemplate` <a name="resetSecretNameTemplate" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetSecretNameTemplate"></a>

```typescript
public resetSecretNameTemplate(): void
```

##### `resetTeamId` <a name="resetTeamId" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetTeamId"></a>

```typescript
public resetTeamId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecretsSyncVercelDestination resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isConstruct"></a>

```typescript
import { secretsSyncVercelDestination } from '@cdktf/provider-vault'

secretsSyncVercelDestination.SecretsSyncVercelDestination.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isTerraformElement"></a>

```typescript
import { secretsSyncVercelDestination } from '@cdktf/provider-vault'

secretsSyncVercelDestination.SecretsSyncVercelDestination.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isTerraformResource"></a>

```typescript
import { secretsSyncVercelDestination } from '@cdktf/provider-vault'

secretsSyncVercelDestination.SecretsSyncVercelDestination.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.generateConfigForImport"></a>

```typescript
import { secretsSyncVercelDestination } from '@cdktf/provider-vault'

secretsSyncVercelDestination.SecretsSyncVercelDestination.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SecretsSyncVercelDestination resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretsSyncVercelDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretsSyncVercelDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_vercel_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecretsSyncVercelDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.accessTokenInput">accessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.deploymentEnvironmentsInput">deploymentEnvironmentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.granularityInput">granularityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.secretNameTemplateInput">secretNameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.teamIdInput">teamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.deploymentEnvironments">deploymentEnvironments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.granularity">granularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.secretNameTemplate">secretNameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.accessTokenInput"></a>

```typescript
public readonly accessTokenInput: string;
```

- *Type:* string

---

##### `deploymentEnvironmentsInput`<sup>Optional</sup> <a name="deploymentEnvironmentsInput" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.deploymentEnvironmentsInput"></a>

```typescript
public readonly deploymentEnvironmentsInput: string[];
```

- *Type:* string[]

---

##### `granularityInput`<sup>Optional</sup> <a name="granularityInput" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.granularityInput"></a>

```typescript
public readonly granularityInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `secretNameTemplateInput`<sup>Optional</sup> <a name="secretNameTemplateInput" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.secretNameTemplateInput"></a>

```typescript
public readonly secretNameTemplateInput: string;
```

- *Type:* string

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.teamIdInput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* string

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

##### `deploymentEnvironments`<sup>Required</sup> <a name="deploymentEnvironments" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.deploymentEnvironments"></a>

```typescript
public readonly deploymentEnvironments: string[];
```

- *Type:* string[]

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.granularity"></a>

```typescript
public readonly granularity: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `secretNameTemplate`<sup>Required</sup> <a name="secretNameTemplate" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.secretNameTemplate"></a>

```typescript
public readonly secretNameTemplate: string;
```

- *Type:* string

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsSyncVercelDestinationConfig <a name="SecretsSyncVercelDestinationConfig" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.Initializer"></a>

```typescript
import { secretsSyncVercelDestination } from '@cdktf/provider-vault'

const secretsSyncVercelDestinationConfig: secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.accessToken">accessToken</a></code> | <code>string</code> | Vercel API access token with the permissions to manage environment variables. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.deploymentEnvironments">deploymentEnvironments</a></code> | <code>string[]</code> | Deployment environments where the environment variables are available. Accepts 'development', 'preview' & 'production'. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.name">name</a></code> | <code>string</code> | Unique name of the Vercel destination. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.projectId">projectId</a></code> | <code>string</code> | Project ID where to manage environment variables. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.granularity">granularity</a></code> | <code>string</code> | Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_vercel_destination#id SecretsSyncVercelDestination#id}. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.secretNameTemplate">secretNameTemplate</a></code> | <code>string</code> | Template describing how to generate external secret names. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.teamId">teamId</a></code> | <code>string</code> | Team ID the project belongs to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

Vercel API access token with the permissions to manage environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_vercel_destination#access_token SecretsSyncVercelDestination#access_token}

---

##### `deploymentEnvironments`<sup>Required</sup> <a name="deploymentEnvironments" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.deploymentEnvironments"></a>

```typescript
public readonly deploymentEnvironments: string[];
```

- *Type:* string[]

Deployment environments where the environment variables are available. Accepts 'development', 'preview' & 'production'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_vercel_destination#deployment_environments SecretsSyncVercelDestination#deployment_environments}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Unique name of the Vercel destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_vercel_destination#name SecretsSyncVercelDestination#name}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Project ID where to manage environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_vercel_destination#project_id SecretsSyncVercelDestination#project_id}

---

##### `granularity`<sup>Optional</sup> <a name="granularity" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.granularity"></a>

```typescript
public readonly granularity: string;
```

- *Type:* string

Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_vercel_destination#granularity SecretsSyncVercelDestination#granularity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_vercel_destination#id SecretsSyncVercelDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_vercel_destination#namespace SecretsSyncVercelDestination#namespace}

---

##### `secretNameTemplate`<sup>Optional</sup> <a name="secretNameTemplate" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.secretNameTemplate"></a>

```typescript
public readonly secretNameTemplate: string;
```

- *Type:* string

Template describing how to generate external secret names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_vercel_destination#secret_name_template SecretsSyncVercelDestination#secret_name_template}

---

##### `teamId`<sup>Optional</sup> <a name="teamId" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

Team ID the project belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_vercel_destination#team_id SecretsSyncVercelDestination#team_id}

---



