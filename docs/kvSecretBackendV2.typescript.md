# `kvSecretBackendV2` Submodule <a name="`kvSecretBackendV2` Submodule" id="@cdktf/provider-vault.kvSecretBackendV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KvSecretBackendV2 <a name="KvSecretBackendV2" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/kv_secret_backend_v2 vault_kv_secret_backend_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer"></a>

```typescript
import { kvSecretBackendV2 } from '@cdktf/provider-vault'

new kvSecretBackendV2.KvSecretBackendV2(scope: Construct, id: string, config: KvSecretBackendV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config">KvSecretBackendV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config">KvSecretBackendV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetCasRequired">resetCasRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetDeleteVersionAfter">resetDeleteVersionAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetMaxVersions">resetMaxVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCasRequired` <a name="resetCasRequired" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetCasRequired"></a>

```typescript
public resetCasRequired(): void
```

##### `resetDeleteVersionAfter` <a name="resetDeleteVersionAfter" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetDeleteVersionAfter"></a>

```typescript
public resetDeleteVersionAfter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxVersions` <a name="resetMaxVersions" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetMaxVersions"></a>

```typescript
public resetMaxVersions(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KvSecretBackendV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.isConstruct"></a>

```typescript
import { kvSecretBackendV2 } from '@cdktf/provider-vault'

kvSecretBackendV2.KvSecretBackendV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.isTerraformElement"></a>

```typescript
import { kvSecretBackendV2 } from '@cdktf/provider-vault'

kvSecretBackendV2.KvSecretBackendV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.isTerraformResource"></a>

```typescript
import { kvSecretBackendV2 } from '@cdktf/provider-vault'

kvSecretBackendV2.KvSecretBackendV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.generateConfigForImport"></a>

```typescript
import { kvSecretBackendV2 } from '@cdktf/provider-vault'

kvSecretBackendV2.KvSecretBackendV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KvSecretBackendV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KvSecretBackendV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KvSecretBackendV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/kv_secret_backend_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KvSecretBackendV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.casRequiredInput">casRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.deleteVersionAfterInput">deleteVersionAfterInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.maxVersionsInput">maxVersionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.casRequired">casRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.deleteVersionAfter">deleteVersionAfter</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.maxVersions">maxVersions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `casRequiredInput`<sup>Optional</sup> <a name="casRequiredInput" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.casRequiredInput"></a>

```typescript
public readonly casRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deleteVersionAfterInput`<sup>Optional</sup> <a name="deleteVersionAfterInput" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.deleteVersionAfterInput"></a>

```typescript
public readonly deleteVersionAfterInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxVersionsInput`<sup>Optional</sup> <a name="maxVersionsInput" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.maxVersionsInput"></a>

```typescript
public readonly maxVersionsInput: number;
```

- *Type:* number

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `casRequired`<sup>Required</sup> <a name="casRequired" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.casRequired"></a>

```typescript
public readonly casRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deleteVersionAfter`<sup>Required</sup> <a name="deleteVersionAfter" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.deleteVersionAfter"></a>

```typescript
public readonly deleteVersionAfter: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxVersions`<sup>Required</sup> <a name="maxVersions" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.maxVersions"></a>

```typescript
public readonly maxVersions: number;
```

- *Type:* number

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KvSecretBackendV2Config <a name="KvSecretBackendV2Config" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.Initializer"></a>

```typescript
import { kvSecretBackendV2 } from '@cdktf/provider-vault'

const kvSecretBackendV2Config: kvSecretBackendV2.KvSecretBackendV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.mount">mount</a></code> | <code>string</code> | Path where KV-V2 engine is mounted. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.casRequired">casRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, all keys will require the cas parameter to be set on all write requests. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.deleteVersionAfter">deleteVersionAfter</a></code> | <code>number</code> | If set, specifies the length of time before a version is deleted. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/kv_secret_backend_v2#id KvSecretBackendV2#id}. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.maxVersions">maxVersions</a></code> | <code>number</code> | The number of versions to keep per key. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Path where KV-V2 engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/kv_secret_backend_v2#mount KvSecretBackendV2#mount}

---

##### `casRequired`<sup>Optional</sup> <a name="casRequired" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.casRequired"></a>

```typescript
public readonly casRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, all keys will require the cas parameter to be set on all write requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/kv_secret_backend_v2#cas_required KvSecretBackendV2#cas_required}

---

##### `deleteVersionAfter`<sup>Optional</sup> <a name="deleteVersionAfter" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.deleteVersionAfter"></a>

```typescript
public readonly deleteVersionAfter: number;
```

- *Type:* number

If set, specifies the length of time before a version is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/kv_secret_backend_v2#delete_version_after KvSecretBackendV2#delete_version_after}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/kv_secret_backend_v2#id KvSecretBackendV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxVersions`<sup>Optional</sup> <a name="maxVersions" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.maxVersions"></a>

```typescript
public readonly maxVersions: number;
```

- *Type:* number

The number of versions to keep per key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/kv_secret_backend_v2#max_versions KvSecretBackendV2#max_versions}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/kv_secret_backend_v2#namespace KvSecretBackendV2#namespace}

---



