# `managedKeys` Submodule <a name="`managedKeys` Submodule" id="@cdktf/provider-vault.managedKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedKeys <a name="ManagedKeys" id="@cdktf/provider-vault.managedKeys.ManagedKeys"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys vault_managed_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer"></a>

```typescript
import { managedKeys } from '@cdktf/provider-vault'

new managedKeys.ManagedKeys(scope: Construct, id: string, config?: ManagedKeysConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig">ManagedKeysConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig">ManagedKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.putAws">putAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.putAzure">putAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.putPkcs">putPkcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.resetAws">resetAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.resetAzure">resetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.resetPkcs">resetPkcs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.managedKeys.ManagedKeys.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.managedKeys.ManagedKeys.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.managedKeys.ManagedKeys.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.managedKeys.ManagedKeys.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.managedKeys.ManagedKeys.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.managedKeys.ManagedKeys.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.managedKeys.ManagedKeys.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.managedKeys.ManagedKeys.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.managedKeys.ManagedKeys.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.managedKeys.ManagedKeys.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.managedKeys.ManagedKeys.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.managedKeys.ManagedKeys.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.managedKeys.ManagedKeys.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.managedKeys.ManagedKeys.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.managedKeys.ManagedKeys.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAws` <a name="putAws" id="@cdktf/provider-vault.managedKeys.ManagedKeys.putAws"></a>

```typescript
public putAws(value: IResolvable | ManagedKeysAws[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.managedKeys.ManagedKeys.putAws.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws">ManagedKeysAws</a>[]

---

##### `putAzure` <a name="putAzure" id="@cdktf/provider-vault.managedKeys.ManagedKeys.putAzure"></a>

```typescript
public putAzure(value: IResolvable | ManagedKeysAzure[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.managedKeys.ManagedKeys.putAzure.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure">ManagedKeysAzure</a>[]

---

##### `putPkcs` <a name="putPkcs" id="@cdktf/provider-vault.managedKeys.ManagedKeys.putPkcs"></a>

```typescript
public putPkcs(value: IResolvable | ManagedKeysPkcs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.managedKeys.ManagedKeys.putPkcs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs">ManagedKeysPkcs</a>[]

---

##### `resetAws` <a name="resetAws" id="@cdktf/provider-vault.managedKeys.ManagedKeys.resetAws"></a>

```typescript
public resetAws(): void
```

##### `resetAzure` <a name="resetAzure" id="@cdktf/provider-vault.managedKeys.ManagedKeys.resetAzure"></a>

```typescript
public resetAzure(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.managedKeys.ManagedKeys.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPkcs` <a name="resetPkcs" id="@cdktf/provider-vault.managedKeys.ManagedKeys.resetPkcs"></a>

```typescript
public resetPkcs(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedKeys resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.managedKeys.ManagedKeys.isConstruct"></a>

```typescript
import { managedKeys } from '@cdktf/provider-vault'

managedKeys.ManagedKeys.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.managedKeys.ManagedKeys.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.managedKeys.ManagedKeys.isTerraformElement"></a>

```typescript
import { managedKeys } from '@cdktf/provider-vault'

managedKeys.ManagedKeys.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.managedKeys.ManagedKeys.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.managedKeys.ManagedKeys.isTerraformResource"></a>

```typescript
import { managedKeys } from '@cdktf/provider-vault'

managedKeys.ManagedKeys.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.managedKeys.ManagedKeys.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.managedKeys.ManagedKeys.generateConfigForImport"></a>

```typescript
import { managedKeys } from '@cdktf/provider-vault'

managedKeys.ManagedKeys.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ManagedKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.managedKeys.ManagedKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagedKeys to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagedKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.managedKeys.ManagedKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ManagedKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList">ManagedKeysAwsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.azure">azure</a></code> | <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList">ManagedKeysAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.pkcs">pkcs</a></code> | <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList">ManagedKeysPkcsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.awsInput">awsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws">ManagedKeysAws</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.azureInput">azureInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure">ManagedKeysAzure</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.pkcsInput">pkcsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs">ManagedKeysPkcs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.aws"></a>

```typescript
public readonly aws: ManagedKeysAwsList;
```

- *Type:* <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList">ManagedKeysAwsList</a>

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.azure"></a>

```typescript
public readonly azure: ManagedKeysAzureList;
```

- *Type:* <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList">ManagedKeysAzureList</a>

---

##### `pkcs`<sup>Required</sup> <a name="pkcs" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.pkcs"></a>

```typescript
public readonly pkcs: ManagedKeysPkcsList;
```

- *Type:* <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList">ManagedKeysPkcsList</a>

---

##### `awsInput`<sup>Optional</sup> <a name="awsInput" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.awsInput"></a>

```typescript
public readonly awsInput: IResolvable | ManagedKeysAws[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws">ManagedKeysAws</a>[]

---

##### `azureInput`<sup>Optional</sup> <a name="azureInput" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.azureInput"></a>

```typescript
public readonly azureInput: IResolvable | ManagedKeysAzure[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure">ManagedKeysAzure</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `pkcsInput`<sup>Optional</sup> <a name="pkcsInput" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.pkcsInput"></a>

```typescript
public readonly pkcsInput: IResolvable | ManagedKeysPkcs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs">ManagedKeysPkcs</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedKeysAws <a name="ManagedKeysAws" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.Initializer"></a>

```typescript
import { managedKeys } from '@cdktf/provider-vault'

const managedKeysAws: managedKeys.ManagedKeysAws = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.accessKey">accessKey</a></code> | <code>string</code> | The AWS access key to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.keyBits">keyBits</a></code> | <code>string</code> | The size in bits for an RSA key. This field is required when 'key_type' is 'RSA'. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.keyType">keyType</a></code> | <code>string</code> | The type of key to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.kmsKey">kmsKey</a></code> | <code>string</code> | An identifier for the key. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.name">name</a></code> | <code>string</code> | A unique lowercase name that serves as identifying the key. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.secretKey">secretKey</a></code> | <code>string</code> | The AWS secret key to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.allowGenerateKey">allowGenerateKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.allowReplaceKey">allowReplaceKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.allowStoreKey">allowStoreKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.anyMount">anyMount</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow usage from any mount point within the namespace if 'true'. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.curve">curve</a></code> | <code>string</code> | The curve to use for an ECDSA key. Used when key_type is 'ECDSA'. Required if 'allow_generate_key' is true. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.endpoint">endpoint</a></code> | <code>string</code> | Used to specify a custom AWS endpoint. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.region">region</a></code> | <code>string</code> | The AWS region where the keys are stored (or will be stored). |

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

The AWS access key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#access_key ManagedKeys#access_key}

---

##### `keyBits`<sup>Required</sup> <a name="keyBits" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.keyBits"></a>

```typescript
public readonly keyBits: string;
```

- *Type:* string

The size in bits for an RSA key. This field is required when 'key_type' is 'RSA'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#key_bits ManagedKeys#key_bits}

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

The type of key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#key_type ManagedKeys#key_type}

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

An identifier for the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#kms_key ManagedKeys#kms_key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A unique lowercase name that serves as identifying the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#name ManagedKeys#name}

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

The AWS secret key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#secret_key ManagedKeys#secret_key}

---

##### `allowGenerateKey`<sup>Optional</sup> <a name="allowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.allowGenerateKey"></a>

```typescript
public readonly allowGenerateKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#allow_generate_key ManagedKeys#allow_generate_key}

---

##### `allowReplaceKey`<sup>Optional</sup> <a name="allowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.allowReplaceKey"></a>

```typescript
public readonly allowReplaceKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#allow_replace_key ManagedKeys#allow_replace_key}

---

##### `allowStoreKey`<sup>Optional</sup> <a name="allowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.allowStoreKey"></a>

```typescript
public readonly allowStoreKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#allow_store_key ManagedKeys#allow_store_key}

---

##### `anyMount`<sup>Optional</sup> <a name="anyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.anyMount"></a>

```typescript
public readonly anyMount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow usage from any mount point within the namespace if 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#any_mount ManagedKeys#any_mount}

---

##### `curve`<sup>Optional</sup> <a name="curve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.curve"></a>

```typescript
public readonly curve: string;
```

- *Type:* string

The curve to use for an ECDSA key. Used when key_type is 'ECDSA'. Required if 'allow_generate_key' is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#curve ManagedKeys#curve}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

Used to specify a custom AWS endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#endpoint ManagedKeys#endpoint}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region where the keys are stored (or will be stored).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#region ManagedKeys#region}

---

### ManagedKeysAzure <a name="ManagedKeysAzure" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.Initializer"></a>

```typescript
import { managedKeys } from '@cdktf/provider-vault'

const managedKeysAzure: managedKeys.ManagedKeysAzure = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.clientId">clientId</a></code> | <code>string</code> | The client id for credentials to query the Azure APIs. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.clientSecret">clientSecret</a></code> | <code>string</code> | The client secret for credentials to query the Azure APIs. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.keyName">keyName</a></code> | <code>string</code> | The Key Vault key to use for encryption and decryption. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.keyType">keyType</a></code> | <code>string</code> | The type of key to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.name">name</a></code> | <code>string</code> | A unique lowercase name that serves as identifying the key. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.tenantId">tenantId</a></code> | <code>string</code> | The tenant id for the Azure Active Directory organization. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.vaultName">vaultName</a></code> | <code>string</code> | The Key Vault vault to use the encryption keys for encryption and decryption. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.allowGenerateKey">allowGenerateKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.allowReplaceKey">allowReplaceKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.allowStoreKey">allowStoreKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.anyMount">anyMount</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow usage from any mount point within the namespace if 'true'. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.environment">environment</a></code> | <code>string</code> | The Azure Cloud environment API endpoints to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.keyBits">keyBits</a></code> | <code>string</code> | The size in bits for an RSA key. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.resource">resource</a></code> | <code>string</code> | The Azure Key Vault resource's DNS Suffix to connect to. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The client id for credentials to query the Azure APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#client_id ManagedKeys#client_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The client secret for credentials to query the Azure APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#client_secret ManagedKeys#client_secret}

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

The Key Vault key to use for encryption and decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#key_name ManagedKeys#key_name}

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

The type of key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#key_type ManagedKeys#key_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A unique lowercase name that serves as identifying the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#name ManagedKeys#name}

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

The tenant id for the Azure Active Directory organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#tenant_id ManagedKeys#tenant_id}

---

##### `vaultName`<sup>Required</sup> <a name="vaultName" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.vaultName"></a>

```typescript
public readonly vaultName: string;
```

- *Type:* string

The Key Vault vault to use the encryption keys for encryption and decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#vault_name ManagedKeys#vault_name}

---

##### `allowGenerateKey`<sup>Optional</sup> <a name="allowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.allowGenerateKey"></a>

```typescript
public readonly allowGenerateKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#allow_generate_key ManagedKeys#allow_generate_key}

---

##### `allowReplaceKey`<sup>Optional</sup> <a name="allowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.allowReplaceKey"></a>

```typescript
public readonly allowReplaceKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#allow_replace_key ManagedKeys#allow_replace_key}

---

##### `allowStoreKey`<sup>Optional</sup> <a name="allowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.allowStoreKey"></a>

```typescript
public readonly allowStoreKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#allow_store_key ManagedKeys#allow_store_key}

---

##### `anyMount`<sup>Optional</sup> <a name="anyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.anyMount"></a>

```typescript
public readonly anyMount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow usage from any mount point within the namespace if 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#any_mount ManagedKeys#any_mount}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The Azure Cloud environment API endpoints to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#environment ManagedKeys#environment}

---

##### `keyBits`<sup>Optional</sup> <a name="keyBits" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.keyBits"></a>

```typescript
public readonly keyBits: string;
```

- *Type:* string

The size in bits for an RSA key.

This field is required when 'key_type' is 'RSA' or when 'allow_generate_key' is true

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#key_bits ManagedKeys#key_bits}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

The Azure Key Vault resource's DNS Suffix to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#resource ManagedKeys#resource}

---

### ManagedKeysConfig <a name="ManagedKeysConfig" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.Initializer"></a>

```typescript
import { managedKeys } from '@cdktf/provider-vault'

const managedKeysConfig: managedKeys.ManagedKeysConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.aws">aws</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws">ManagedKeysAws</a>[]</code> | aws block. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.azure">azure</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure">ManagedKeysAzure</a>[]</code> | azure block. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#id ManagedKeys#id}. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.pkcs">pkcs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs">ManagedKeysPkcs</a>[]</code> | pkcs block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.aws"></a>

```typescript
public readonly aws: IResolvable | ManagedKeysAws[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws">ManagedKeysAws</a>[]

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#aws ManagedKeys#aws}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.azure"></a>

```typescript
public readonly azure: IResolvable | ManagedKeysAzure[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure">ManagedKeysAzure</a>[]

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#azure ManagedKeys#azure}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#id ManagedKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#namespace ManagedKeys#namespace}

---

##### `pkcs`<sup>Optional</sup> <a name="pkcs" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.pkcs"></a>

```typescript
public readonly pkcs: IResolvable | ManagedKeysPkcs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs">ManagedKeysPkcs</a>[]

pkcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#pkcs ManagedKeys#pkcs}

---

### ManagedKeysPkcs <a name="ManagedKeysPkcs" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.Initializer"></a>

```typescript
import { managedKeys } from '@cdktf/provider-vault'

const managedKeysPkcs: managedKeys.ManagedKeysPkcs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.keyId">keyId</a></code> | <code>string</code> | The id of a PKCS#11 key to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.keyLabel">keyLabel</a></code> | <code>string</code> | The label of the key to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.library">library</a></code> | <code>string</code> | The name of the kms_library stanza to use from Vault's config to lookup the local library path. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.mechanism">mechanism</a></code> | <code>string</code> | The encryption/decryption mechanism to use, specified as a hexadecimal (prefixed by 0x) string. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.name">name</a></code> | <code>string</code> | A unique lowercase name that serves as identifying the key. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.pin">pin</a></code> | <code>string</code> | The PIN for login. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.allowGenerateKey">allowGenerateKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.allowReplaceKey">allowReplaceKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.allowStoreKey">allowStoreKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.anyMount">anyMount</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow usage from any mount point within the namespace if 'true'. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.curve">curve</a></code> | <code>string</code> | Supplies the curve value when using the 'CKM_ECDSA' mechanism. Required if 'allow_generate_key' is true. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.forceRwSession">forceRwSession</a></code> | <code>string</code> | Force all operations to open up a read-write session to the HSM. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.keyBits">keyBits</a></code> | <code>string</code> | Supplies the size in bits of the key when using 'CKM_RSA_PKCS_PSS', 'CKM_RSA_PKCS_OAEP' or 'CKM_RSA_PKCS' as a value for 'mechanism'. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.slot">slot</a></code> | <code>string</code> | The slot number to use, specified as a string in a decimal format (e.g. '2305843009213693953'). |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.tokenLabel">tokenLabel</a></code> | <code>string</code> | The slot token label to use. |

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

The id of a PKCS#11 key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#key_id ManagedKeys#key_id}

---

##### `keyLabel`<sup>Required</sup> <a name="keyLabel" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.keyLabel"></a>

```typescript
public readonly keyLabel: string;
```

- *Type:* string

The label of the key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#key_label ManagedKeys#key_label}

---

##### `library`<sup>Required</sup> <a name="library" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.library"></a>

```typescript
public readonly library: string;
```

- *Type:* string

The name of the kms_library stanza to use from Vault's config to lookup the local library path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#library ManagedKeys#library}

---

##### `mechanism`<sup>Required</sup> <a name="mechanism" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.mechanism"></a>

```typescript
public readonly mechanism: string;
```

- *Type:* string

The encryption/decryption mechanism to use, specified as a hexadecimal (prefixed by 0x) string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#mechanism ManagedKeys#mechanism}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A unique lowercase name that serves as identifying the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#name ManagedKeys#name}

---

##### `pin`<sup>Required</sup> <a name="pin" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.pin"></a>

```typescript
public readonly pin: string;
```

- *Type:* string

The PIN for login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#pin ManagedKeys#pin}

---

##### `allowGenerateKey`<sup>Optional</sup> <a name="allowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.allowGenerateKey"></a>

```typescript
public readonly allowGenerateKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#allow_generate_key ManagedKeys#allow_generate_key}

---

##### `allowReplaceKey`<sup>Optional</sup> <a name="allowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.allowReplaceKey"></a>

```typescript
public readonly allowReplaceKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#allow_replace_key ManagedKeys#allow_replace_key}

---

##### `allowStoreKey`<sup>Optional</sup> <a name="allowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.allowStoreKey"></a>

```typescript
public readonly allowStoreKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#allow_store_key ManagedKeys#allow_store_key}

---

##### `anyMount`<sup>Optional</sup> <a name="anyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.anyMount"></a>

```typescript
public readonly anyMount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow usage from any mount point within the namespace if 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#any_mount ManagedKeys#any_mount}

---

##### `curve`<sup>Optional</sup> <a name="curve" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.curve"></a>

```typescript
public readonly curve: string;
```

- *Type:* string

Supplies the curve value when using the 'CKM_ECDSA' mechanism. Required if 'allow_generate_key' is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#curve ManagedKeys#curve}

---

##### `forceRwSession`<sup>Optional</sup> <a name="forceRwSession" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.forceRwSession"></a>

```typescript
public readonly forceRwSession: string;
```

- *Type:* string

Force all operations to open up a read-write session to the HSM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#force_rw_session ManagedKeys#force_rw_session}

---

##### `keyBits`<sup>Optional</sup> <a name="keyBits" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.keyBits"></a>

```typescript
public readonly keyBits: string;
```

- *Type:* string

Supplies the size in bits of the key when using 'CKM_RSA_PKCS_PSS', 'CKM_RSA_PKCS_OAEP' or 'CKM_RSA_PKCS' as a value for 'mechanism'.

Required if 'allow_generate_key' is true

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#key_bits ManagedKeys#key_bits}

---

##### `slot`<sup>Optional</sup> <a name="slot" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.slot"></a>

```typescript
public readonly slot: string;
```

- *Type:* string

The slot number to use, specified as a string in a decimal format (e.g. '2305843009213693953').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#slot ManagedKeys#slot}

---

##### `tokenLabel`<sup>Optional</sup> <a name="tokenLabel" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.tokenLabel"></a>

```typescript
public readonly tokenLabel: string;
```

- *Type:* string

The slot token label to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/managed_keys#token_label ManagedKeys#token_label}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedKeysAwsList <a name="ManagedKeysAwsList" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer"></a>

```typescript
import { managedKeys } from '@cdktf/provider-vault'

new managedKeys.ManagedKeysAwsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.get"></a>

```typescript
public get(index: number): ManagedKeysAwsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws">ManagedKeysAws</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedKeysAws[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws">ManagedKeysAws</a>[]

---


### ManagedKeysAwsOutputReference <a name="ManagedKeysAwsOutputReference" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer"></a>

```typescript
import { managedKeys } from '@cdktf/provider-vault'

new managedKeys.ManagedKeysAwsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAllowGenerateKey">resetAllowGenerateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAllowReplaceKey">resetAllowReplaceKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAllowStoreKey">resetAllowStoreKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAnyMount">resetAnyMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetCurve">resetCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowGenerateKey` <a name="resetAllowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAllowGenerateKey"></a>

```typescript
public resetAllowGenerateKey(): void
```

##### `resetAllowReplaceKey` <a name="resetAllowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAllowReplaceKey"></a>

```typescript
public resetAllowReplaceKey(): void
```

##### `resetAllowStoreKey` <a name="resetAllowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAllowStoreKey"></a>

```typescript
public resetAllowStoreKey(): void
```

##### `resetAnyMount` <a name="resetAnyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAnyMount"></a>

```typescript
public resetAnyMount(): void
```

##### `resetCurve` <a name="resetCurve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetCurve"></a>

```typescript
public resetCurve(): void
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.accessKeyInput">accessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowGenerateKeyInput">allowGenerateKeyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowReplaceKeyInput">allowReplaceKeyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowStoreKeyInput">allowStoreKeyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.anyMountInput">anyMountInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.curveInput">curveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyBitsInput">keyBitsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyTypeInput">keyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.secretKeyInput">secretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.accessKey">accessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowGenerateKey">allowGenerateKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowReplaceKey">allowReplaceKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowStoreKey">allowStoreKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.anyMount">anyMount</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.curve">curve</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyBits">keyBits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyType">keyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.secretKey">secretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws">ManagedKeysAws</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.accessKeyInput"></a>

```typescript
public readonly accessKeyInput: string;
```

- *Type:* string

---

##### `allowGenerateKeyInput`<sup>Optional</sup> <a name="allowGenerateKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowGenerateKeyInput"></a>

```typescript
public readonly allowGenerateKeyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowReplaceKeyInput`<sup>Optional</sup> <a name="allowReplaceKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowReplaceKeyInput"></a>

```typescript
public readonly allowReplaceKeyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowStoreKeyInput`<sup>Optional</sup> <a name="allowStoreKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowStoreKeyInput"></a>

```typescript
public readonly allowStoreKeyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `anyMountInput`<sup>Optional</sup> <a name="anyMountInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.anyMountInput"></a>

```typescript
public readonly anyMountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `curveInput`<sup>Optional</sup> <a name="curveInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.curveInput"></a>

```typescript
public readonly curveInput: string;
```

- *Type:* string

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `keyBitsInput`<sup>Optional</sup> <a name="keyBitsInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyBitsInput"></a>

```typescript
public readonly keyBitsInput: string;
```

- *Type:* string

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyTypeInput"></a>

```typescript
public readonly keyTypeInput: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `secretKeyInput`<sup>Optional</sup> <a name="secretKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.secretKeyInput"></a>

```typescript
public readonly secretKeyInput: string;
```

- *Type:* string

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

---

##### `allowGenerateKey`<sup>Required</sup> <a name="allowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowGenerateKey"></a>

```typescript
public readonly allowGenerateKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowReplaceKey`<sup>Required</sup> <a name="allowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowReplaceKey"></a>

```typescript
public readonly allowReplaceKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowStoreKey`<sup>Required</sup> <a name="allowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowStoreKey"></a>

```typescript
public readonly allowStoreKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `anyMount`<sup>Required</sup> <a name="anyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.anyMount"></a>

```typescript
public readonly anyMount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `curve`<sup>Required</sup> <a name="curve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.curve"></a>

```typescript
public readonly curve: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `keyBits`<sup>Required</sup> <a name="keyBits" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyBits"></a>

```typescript
public readonly keyBits: string;
```

- *Type:* string

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedKeysAws;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws">ManagedKeysAws</a>

---


### ManagedKeysAzureList <a name="ManagedKeysAzureList" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer"></a>

```typescript
import { managedKeys } from '@cdktf/provider-vault'

new managedKeys.ManagedKeysAzureList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.get"></a>

```typescript
public get(index: number): ManagedKeysAzureOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure">ManagedKeysAzure</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedKeysAzure[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure">ManagedKeysAzure</a>[]

---


### ManagedKeysAzureOutputReference <a name="ManagedKeysAzureOutputReference" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer"></a>

```typescript
import { managedKeys } from '@cdktf/provider-vault'

new managedKeys.ManagedKeysAzureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAllowGenerateKey">resetAllowGenerateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAllowReplaceKey">resetAllowReplaceKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAllowStoreKey">resetAllowStoreKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAnyMount">resetAnyMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetKeyBits">resetKeyBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetResource">resetResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowGenerateKey` <a name="resetAllowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAllowGenerateKey"></a>

```typescript
public resetAllowGenerateKey(): void
```

##### `resetAllowReplaceKey` <a name="resetAllowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAllowReplaceKey"></a>

```typescript
public resetAllowReplaceKey(): void
```

##### `resetAllowStoreKey` <a name="resetAllowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAllowStoreKey"></a>

```typescript
public resetAllowStoreKey(): void
```

##### `resetAnyMount` <a name="resetAnyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAnyMount"></a>

```typescript
public resetAnyMount(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetKeyBits` <a name="resetKeyBits" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetKeyBits"></a>

```typescript
public resetKeyBits(): void
```

##### `resetResource` <a name="resetResource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetResource"></a>

```typescript
public resetResource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowGenerateKeyInput">allowGenerateKeyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowReplaceKeyInput">allowReplaceKeyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowStoreKeyInput">allowStoreKeyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.anyMountInput">anyMountInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyBitsInput">keyBitsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyTypeInput">keyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.resourceInput">resourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.vaultNameInput">vaultNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowGenerateKey">allowGenerateKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowReplaceKey">allowReplaceKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowStoreKey">allowStoreKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.anyMount">anyMount</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyBits">keyBits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyType">keyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.vaultName">vaultName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure">ManagedKeysAzure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `allowGenerateKeyInput`<sup>Optional</sup> <a name="allowGenerateKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowGenerateKeyInput"></a>

```typescript
public readonly allowGenerateKeyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowReplaceKeyInput`<sup>Optional</sup> <a name="allowReplaceKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowReplaceKeyInput"></a>

```typescript
public readonly allowReplaceKeyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowStoreKeyInput`<sup>Optional</sup> <a name="allowStoreKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowStoreKeyInput"></a>

```typescript
public readonly allowStoreKeyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `anyMountInput`<sup>Optional</sup> <a name="anyMountInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.anyMountInput"></a>

```typescript
public readonly anyMountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `keyBitsInput`<sup>Optional</sup> <a name="keyBitsInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyBitsInput"></a>

```typescript
public readonly keyBitsInput: string;
```

- *Type:* string

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyTypeInput"></a>

```typescript
public readonly keyTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.resourceInput"></a>

```typescript
public readonly resourceInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `vaultNameInput`<sup>Optional</sup> <a name="vaultNameInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.vaultNameInput"></a>

```typescript
public readonly vaultNameInput: string;
```

- *Type:* string

---

##### `allowGenerateKey`<sup>Required</sup> <a name="allowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowGenerateKey"></a>

```typescript
public readonly allowGenerateKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowReplaceKey`<sup>Required</sup> <a name="allowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowReplaceKey"></a>

```typescript
public readonly allowReplaceKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowStoreKey`<sup>Required</sup> <a name="allowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowStoreKey"></a>

```typescript
public readonly allowStoreKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `anyMount`<sup>Required</sup> <a name="anyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.anyMount"></a>

```typescript
public readonly anyMount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `keyBits`<sup>Required</sup> <a name="keyBits" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyBits"></a>

```typescript
public readonly keyBits: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `vaultName`<sup>Required</sup> <a name="vaultName" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.vaultName"></a>

```typescript
public readonly vaultName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedKeysAzure;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure">ManagedKeysAzure</a>

---


### ManagedKeysPkcsList <a name="ManagedKeysPkcsList" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer"></a>

```typescript
import { managedKeys } from '@cdktf/provider-vault'

new managedKeys.ManagedKeysPkcsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.get"></a>

```typescript
public get(index: number): ManagedKeysPkcsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs">ManagedKeysPkcs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedKeysPkcs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs">ManagedKeysPkcs</a>[]

---


### ManagedKeysPkcsOutputReference <a name="ManagedKeysPkcsOutputReference" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer"></a>

```typescript
import { managedKeys } from '@cdktf/provider-vault'

new managedKeys.ManagedKeysPkcsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAllowGenerateKey">resetAllowGenerateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAllowReplaceKey">resetAllowReplaceKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAllowStoreKey">resetAllowStoreKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAnyMount">resetAnyMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetCurve">resetCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetForceRwSession">resetForceRwSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetKeyBits">resetKeyBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetSlot">resetSlot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetTokenLabel">resetTokenLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowGenerateKey` <a name="resetAllowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAllowGenerateKey"></a>

```typescript
public resetAllowGenerateKey(): void
```

##### `resetAllowReplaceKey` <a name="resetAllowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAllowReplaceKey"></a>

```typescript
public resetAllowReplaceKey(): void
```

##### `resetAllowStoreKey` <a name="resetAllowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAllowStoreKey"></a>

```typescript
public resetAllowStoreKey(): void
```

##### `resetAnyMount` <a name="resetAnyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAnyMount"></a>

```typescript
public resetAnyMount(): void
```

##### `resetCurve` <a name="resetCurve" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetCurve"></a>

```typescript
public resetCurve(): void
```

##### `resetForceRwSession` <a name="resetForceRwSession" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetForceRwSession"></a>

```typescript
public resetForceRwSession(): void
```

##### `resetKeyBits` <a name="resetKeyBits" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetKeyBits"></a>

```typescript
public resetKeyBits(): void
```

##### `resetSlot` <a name="resetSlot" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetSlot"></a>

```typescript
public resetSlot(): void
```

##### `resetTokenLabel` <a name="resetTokenLabel" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetTokenLabel"></a>

```typescript
public resetTokenLabel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowGenerateKeyInput">allowGenerateKeyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowReplaceKeyInput">allowReplaceKeyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowStoreKeyInput">allowStoreKeyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.anyMountInput">anyMountInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.curveInput">curveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.forceRwSessionInput">forceRwSessionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyBitsInput">keyBitsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyLabelInput">keyLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.libraryInput">libraryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.mechanismInput">mechanismInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.pinInput">pinInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.slotInput">slotInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.tokenLabelInput">tokenLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowGenerateKey">allowGenerateKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowReplaceKey">allowReplaceKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowStoreKey">allowStoreKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.anyMount">anyMount</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.curve">curve</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.forceRwSession">forceRwSession</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyBits">keyBits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyLabel">keyLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.library">library</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.mechanism">mechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.pin">pin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.slot">slot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.tokenLabel">tokenLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs">ManagedKeysPkcs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `allowGenerateKeyInput`<sup>Optional</sup> <a name="allowGenerateKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowGenerateKeyInput"></a>

```typescript
public readonly allowGenerateKeyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowReplaceKeyInput`<sup>Optional</sup> <a name="allowReplaceKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowReplaceKeyInput"></a>

```typescript
public readonly allowReplaceKeyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowStoreKeyInput`<sup>Optional</sup> <a name="allowStoreKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowStoreKeyInput"></a>

```typescript
public readonly allowStoreKeyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `anyMountInput`<sup>Optional</sup> <a name="anyMountInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.anyMountInput"></a>

```typescript
public readonly anyMountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `curveInput`<sup>Optional</sup> <a name="curveInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.curveInput"></a>

```typescript
public readonly curveInput: string;
```

- *Type:* string

---

##### `forceRwSessionInput`<sup>Optional</sup> <a name="forceRwSessionInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.forceRwSessionInput"></a>

```typescript
public readonly forceRwSessionInput: string;
```

- *Type:* string

---

##### `keyBitsInput`<sup>Optional</sup> <a name="keyBitsInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyBitsInput"></a>

```typescript
public readonly keyBitsInput: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `keyLabelInput`<sup>Optional</sup> <a name="keyLabelInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyLabelInput"></a>

```typescript
public readonly keyLabelInput: string;
```

- *Type:* string

---

##### `libraryInput`<sup>Optional</sup> <a name="libraryInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.libraryInput"></a>

```typescript
public readonly libraryInput: string;
```

- *Type:* string

---

##### `mechanismInput`<sup>Optional</sup> <a name="mechanismInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.mechanismInput"></a>

```typescript
public readonly mechanismInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pinInput`<sup>Optional</sup> <a name="pinInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.pinInput"></a>

```typescript
public readonly pinInput: string;
```

- *Type:* string

---

##### `slotInput`<sup>Optional</sup> <a name="slotInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.slotInput"></a>

```typescript
public readonly slotInput: string;
```

- *Type:* string

---

##### `tokenLabelInput`<sup>Optional</sup> <a name="tokenLabelInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.tokenLabelInput"></a>

```typescript
public readonly tokenLabelInput: string;
```

- *Type:* string

---

##### `allowGenerateKey`<sup>Required</sup> <a name="allowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowGenerateKey"></a>

```typescript
public readonly allowGenerateKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowReplaceKey`<sup>Required</sup> <a name="allowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowReplaceKey"></a>

```typescript
public readonly allowReplaceKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowStoreKey`<sup>Required</sup> <a name="allowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowStoreKey"></a>

```typescript
public readonly allowStoreKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `anyMount`<sup>Required</sup> <a name="anyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.anyMount"></a>

```typescript
public readonly anyMount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `curve`<sup>Required</sup> <a name="curve" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.curve"></a>

```typescript
public readonly curve: string;
```

- *Type:* string

---

##### `forceRwSession`<sup>Required</sup> <a name="forceRwSession" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.forceRwSession"></a>

```typescript
public readonly forceRwSession: string;
```

- *Type:* string

---

##### `keyBits`<sup>Required</sup> <a name="keyBits" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyBits"></a>

```typescript
public readonly keyBits: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `keyLabel`<sup>Required</sup> <a name="keyLabel" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyLabel"></a>

```typescript
public readonly keyLabel: string;
```

- *Type:* string

---

##### `library`<sup>Required</sup> <a name="library" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.library"></a>

```typescript
public readonly library: string;
```

- *Type:* string

---

##### `mechanism`<sup>Required</sup> <a name="mechanism" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.mechanism"></a>

```typescript
public readonly mechanism: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pin`<sup>Required</sup> <a name="pin" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.pin"></a>

```typescript
public readonly pin: string;
```

- *Type:* string

---

##### `slot`<sup>Required</sup> <a name="slot" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.slot"></a>

```typescript
public readonly slot: string;
```

- *Type:* string

---

##### `tokenLabel`<sup>Required</sup> <a name="tokenLabel" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.tokenLabel"></a>

```typescript
public readonly tokenLabel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedKeysPkcs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs">ManagedKeysPkcs</a>

---



