# `secretsSyncGithubApps` Submodule <a name="`secretsSyncGithubApps` Submodule" id="@cdktf/provider-vault.secretsSyncGithubApps"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsSyncGithubApps <a name="SecretsSyncGithubApps" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/secrets_sync_github_apps vault_secrets_sync_github_apps}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.Initializer"></a>

```typescript
import { secretsSyncGithubApps } from '@cdktf/provider-vault'

new secretsSyncGithubApps.SecretsSyncGithubApps(scope: Construct, id: string, config: SecretsSyncGithubAppsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubAppsConfig">SecretsSyncGithubAppsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubAppsConfig">SecretsSyncGithubAppsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecretsSyncGithubApps resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.isConstruct"></a>

```typescript
import { secretsSyncGithubApps } from '@cdktf/provider-vault'

secretsSyncGithubApps.SecretsSyncGithubApps.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.isTerraformElement"></a>

```typescript
import { secretsSyncGithubApps } from '@cdktf/provider-vault'

secretsSyncGithubApps.SecretsSyncGithubApps.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.isTerraformResource"></a>

```typescript
import { secretsSyncGithubApps } from '@cdktf/provider-vault'

secretsSyncGithubApps.SecretsSyncGithubApps.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.generateConfigForImport"></a>

```typescript
import { secretsSyncGithubApps } from '@cdktf/provider-vault'

secretsSyncGithubApps.SecretsSyncGithubApps.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SecretsSyncGithubApps resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretsSyncGithubApps to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretsSyncGithubApps that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/secrets_sync_github_apps#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecretsSyncGithubApps to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.appIdInput">appIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.appId">appId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.appIdInput"></a>

```typescript
public readonly appIdInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.appId"></a>

```typescript
public readonly appId: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubApps.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsSyncGithubAppsConfig <a name="SecretsSyncGithubAppsConfig" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubAppsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubAppsConfig.Initializer"></a>

```typescript
import { secretsSyncGithubApps } from '@cdktf/provider-vault'

const secretsSyncGithubAppsConfig: secretsSyncGithubApps.SecretsSyncGithubAppsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubAppsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubAppsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubAppsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubAppsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubAppsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubAppsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubAppsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubAppsConfig.property.appId">appId</a></code> | <code>number</code> | The GitHub application ID. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubAppsConfig.property.name">name</a></code> | <code>string</code> | The user-defined name of the GitHub App configuration. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubAppsConfig.property.privateKey">privateKey</a></code> | <code>string</code> | The content of a PEM formatted private key generated on GitHub for the app. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubAppsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/secrets_sync_github_apps#id SecretsSyncGithubApps#id}. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubAppsConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubAppsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubAppsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubAppsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubAppsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubAppsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubAppsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubAppsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubAppsConfig.property.appId"></a>

```typescript
public readonly appId: number;
```

- *Type:* number

The GitHub application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/secrets_sync_github_apps#app_id SecretsSyncGithubApps#app_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubAppsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The user-defined name of the GitHub App configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/secrets_sync_github_apps#name SecretsSyncGithubApps#name}

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubAppsConfig.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

The content of a PEM formatted private key generated on GitHub for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/secrets_sync_github_apps#private_key SecretsSyncGithubApps#private_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubAppsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/secrets_sync_github_apps#id SecretsSyncGithubApps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.secretsSyncGithubApps.SecretsSyncGithubAppsConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/secrets_sync_github_apps#namespace SecretsSyncGithubApps#namespace}

---



