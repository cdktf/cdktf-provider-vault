# `quotaLeaseCount` Submodule <a name="`quotaLeaseCount` Submodule" id="@cdktf/provider-vault.quotaLeaseCount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuotaLeaseCount <a name="QuotaLeaseCount" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_lease_count vault_quota_lease_count}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer"></a>

```typescript
import { quotaLeaseCount } from '@cdktf/provider-vault'

new quotaLeaseCount.QuotaLeaseCount(scope: Construct, id: string, config: QuotaLeaseCountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig">QuotaLeaseCountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig">QuotaLeaseCountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.resetInheritable">resetInheritable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.resetRole">resetRole</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInheritable` <a name="resetInheritable" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.resetInheritable"></a>

```typescript
public resetInheritable(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetRole` <a name="resetRole" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.resetRole"></a>

```typescript
public resetRole(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a QuotaLeaseCount resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.isConstruct"></a>

```typescript
import { quotaLeaseCount } from '@cdktf/provider-vault'

quotaLeaseCount.QuotaLeaseCount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.isTerraformElement"></a>

```typescript
import { quotaLeaseCount } from '@cdktf/provider-vault'

quotaLeaseCount.QuotaLeaseCount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.isTerraformResource"></a>

```typescript
import { quotaLeaseCount } from '@cdktf/provider-vault'

quotaLeaseCount.QuotaLeaseCount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.generateConfigForImport"></a>

```typescript
import { quotaLeaseCount } from '@cdktf/provider-vault'

quotaLeaseCount.QuotaLeaseCount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a QuotaLeaseCount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QuotaLeaseCount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QuotaLeaseCount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_lease_count#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the QuotaLeaseCount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.inheritableInput">inheritableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.maxLeasesInput">maxLeasesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.inheritable">inheritable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.maxLeases">maxLeases</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inheritableInput`<sup>Optional</sup> <a name="inheritableInput" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.inheritableInput"></a>

```typescript
public readonly inheritableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxLeasesInput`<sup>Optional</sup> <a name="maxLeasesInput" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.maxLeasesInput"></a>

```typescript
public readonly maxLeasesInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inheritable`<sup>Required</sup> <a name="inheritable" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.inheritable"></a>

```typescript
public readonly inheritable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxLeases`<sup>Required</sup> <a name="maxLeases" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.maxLeases"></a>

```typescript
public readonly maxLeases: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuotaLeaseCountConfig <a name="QuotaLeaseCountConfig" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.Initializer"></a>

```typescript
import { quotaLeaseCount } from '@cdktf/provider-vault'

const quotaLeaseCountConfig: quotaLeaseCount.QuotaLeaseCountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.maxLeases">maxLeases</a></code> | <code>number</code> | The maximum number of leases to be allowed by the quota rule. The max_leases must be positive. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.name">name</a></code> | <code>string</code> | The name of the quota. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_lease_count#id QuotaLeaseCount#id}. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.inheritable">inheritable</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true on a quota where path is set to a namespace, the same quota will be cumulatively applied to all child namespace. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.path">path</a></code> | <code>string</code> | Path of the mount or namespace to apply the quota. A blank path configures a global lease count quota. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.role">role</a></code> | <code>string</code> | If set on a quota where path is set to an auth mount with a concept of roles (such as /auth/approle/), this will make the quota restrict login requests to that mount that are made with the specified role. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `maxLeases`<sup>Required</sup> <a name="maxLeases" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.maxLeases"></a>

```typescript
public readonly maxLeases: number;
```

- *Type:* number

The maximum number of leases to be allowed by the quota rule. The max_leases must be positive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_lease_count#max_leases QuotaLeaseCount#max_leases}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_lease_count#name QuotaLeaseCount#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_lease_count#id QuotaLeaseCount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inheritable`<sup>Optional</sup> <a name="inheritable" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.inheritable"></a>

```typescript
public readonly inheritable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true on a quota where path is set to a namespace, the same quota will be cumulatively applied to all child namespace.

The inheritable parameter cannot be set to true if the path does not specify a namespace. Only the quotas associated with the root namespace are inheritable by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_lease_count#inheritable QuotaLeaseCount#inheritable}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_lease_count#namespace QuotaLeaseCount#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path of the mount or namespace to apply the quota. A blank path configures a global lease count quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_lease_count#path QuotaLeaseCount#path}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

If set on a quota where path is set to an auth mount with a concept of roles (such as /auth/approle/), this will make the quota restrict login requests to that mount that are made with the specified role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_lease_count#role QuotaLeaseCount#role}

---



