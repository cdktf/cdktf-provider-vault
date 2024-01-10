# `mfaPingid` Submodule <a name="`mfaPingid` Submodule" id="@cdktf/provider-vault.mfaPingid"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MfaPingid <a name="MfaPingid" id="@cdktf/provider-vault.mfaPingid.MfaPingid"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/mfa_pingid vault_mfa_pingid}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.mfaPingid.MfaPingid.Initializer"></a>

```typescript
import { mfaPingid } from '@cdktf/provider-vault'

new mfaPingid.MfaPingid(scope: Construct, id: string, config: MfaPingidConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingidConfig">MfaPingidConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.mfaPingid.MfaPingid.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mfaPingid.MfaPingid.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.mfaPingid.MfaPingid.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.mfaPingid.MfaPingidConfig">MfaPingidConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.resetUsernameFormat">resetUsernameFormat</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.mfaPingid.MfaPingid.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.mfaPingid.MfaPingid.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.mfaPingid.MfaPingid.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.mfaPingid.MfaPingid.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.mfaPingid.MfaPingid.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.mfaPingid.MfaPingid.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.mfaPingid.MfaPingid.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.mfaPingid.MfaPingid.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.mfaPingid.MfaPingid.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.mfaPingid.MfaPingid.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.mfaPingid.MfaPingid.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.mfaPingid.MfaPingid.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.mfaPingid.MfaPingid.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaPingid.MfaPingid.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.mfaPingid.MfaPingid.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaPingid.MfaPingid.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.mfaPingid.MfaPingid.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaPingid.MfaPingid.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.mfaPingid.MfaPingid.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaPingid.MfaPingid.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.mfaPingid.MfaPingid.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaPingid.MfaPingid.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.mfaPingid.MfaPingid.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaPingid.MfaPingid.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.mfaPingid.MfaPingid.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaPingid.MfaPingid.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.mfaPingid.MfaPingid.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaPingid.MfaPingid.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.mfaPingid.MfaPingid.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaPingid.MfaPingid.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.mfaPingid.MfaPingid.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.mfaPingid.MfaPingid.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mfaPingid.MfaPingid.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mfaPingid.MfaPingid.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.mfaPingid.MfaPingid.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaPingid.MfaPingid.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.mfaPingid.MfaPingid.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mfaPingid.MfaPingid.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.mfaPingid.MfaPingid.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.mfaPingid.MfaPingid.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.mfaPingid.MfaPingid.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.mfaPingid.MfaPingid.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mfaPingid.MfaPingid.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.mfaPingid.MfaPingid.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.mfaPingid.MfaPingid.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetUsernameFormat` <a name="resetUsernameFormat" id="@cdktf/provider-vault.mfaPingid.MfaPingid.resetUsernameFormat"></a>

```typescript
public resetUsernameFormat(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MfaPingid resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.mfaPingid.MfaPingid.isConstruct"></a>

```typescript
import { mfaPingid } from '@cdktf/provider-vault'

mfaPingid.MfaPingid.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mfaPingid.MfaPingid.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.mfaPingid.MfaPingid.isTerraformElement"></a>

```typescript
import { mfaPingid } from '@cdktf/provider-vault'

mfaPingid.MfaPingid.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mfaPingid.MfaPingid.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.mfaPingid.MfaPingid.isTerraformResource"></a>

```typescript
import { mfaPingid } from '@cdktf/provider-vault'

mfaPingid.MfaPingid.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mfaPingid.MfaPingid.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.mfaPingid.MfaPingid.generateConfigForImport"></a>

```typescript
import { mfaPingid } from '@cdktf/provider-vault'

mfaPingid.MfaPingid.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MfaPingid resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.mfaPingid.MfaPingid.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.mfaPingid.MfaPingid.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MfaPingid to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.mfaPingid.MfaPingid.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MfaPingid that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/mfa_pingid#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mfaPingid.MfaPingid.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MfaPingid to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.adminUrl">adminUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.authenticatorUrl">authenticatorUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.idpUrl">idpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.namespaceId">namespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.orgAlias">orgAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.useSignature">useSignature</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.mountAccessorInput">mountAccessorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.settingsFileBase64Input">settingsFileBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.usernameFormatInput">usernameFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.mountAccessor">mountAccessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.settingsFileBase64">settingsFileBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.usernameFormat">usernameFormat</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `adminUrl`<sup>Required</sup> <a name="adminUrl" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.adminUrl"></a>

```typescript
public readonly adminUrl: string;
```

- *Type:* string

---

##### `authenticatorUrl`<sup>Required</sup> <a name="authenticatorUrl" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.authenticatorUrl"></a>

```typescript
public readonly authenticatorUrl: string;
```

- *Type:* string

---

##### `idpUrl`<sup>Required</sup> <a name="idpUrl" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.idpUrl"></a>

```typescript
public readonly idpUrl: string;
```

- *Type:* string

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

---

##### `orgAlias`<sup>Required</sup> <a name="orgAlias" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.orgAlias"></a>

```typescript
public readonly orgAlias: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `useSignature`<sup>Required</sup> <a name="useSignature" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.useSignature"></a>

```typescript
public readonly useSignature: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mountAccessorInput`<sup>Optional</sup> <a name="mountAccessorInput" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.mountAccessorInput"></a>

```typescript
public readonly mountAccessorInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `settingsFileBase64Input`<sup>Optional</sup> <a name="settingsFileBase64Input" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.settingsFileBase64Input"></a>

```typescript
public readonly settingsFileBase64Input: string;
```

- *Type:* string

---

##### `usernameFormatInput`<sup>Optional</sup> <a name="usernameFormatInput" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.usernameFormatInput"></a>

```typescript
public readonly usernameFormatInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mountAccessor`<sup>Required</sup> <a name="mountAccessor" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.mountAccessor"></a>

```typescript
public readonly mountAccessor: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `settingsFileBase64`<sup>Required</sup> <a name="settingsFileBase64" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.settingsFileBase64"></a>

```typescript
public readonly settingsFileBase64: string;
```

- *Type:* string

---

##### `usernameFormat`<sup>Required</sup> <a name="usernameFormat" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.usernameFormat"></a>

```typescript
public readonly usernameFormat: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingid.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.mfaPingid.MfaPingid.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MfaPingidConfig <a name="MfaPingidConfig" id="@cdktf/provider-vault.mfaPingid.MfaPingidConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.mfaPingid.MfaPingidConfig.Initializer"></a>

```typescript
import { mfaPingid } from '@cdktf/provider-vault'

const mfaPingidConfig: mfaPingid.MfaPingidConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingidConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingidConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingidConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingidConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingidConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingidConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingidConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingidConfig.property.mountAccessor">mountAccessor</a></code> | <code>string</code> | The mount to tie this method to for use in automatic mappings. |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingidConfig.property.name">name</a></code> | <code>string</code> | Name of the MFA method. |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingidConfig.property.settingsFileBase64">settingsFileBase64</a></code> | <code>string</code> | A base64-encoded third-party settings file retrieved from PingID's configuration page. |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingidConfig.property.id">id</a></code> | <code>string</code> | ID computed by Vault. |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingidConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.mfaPingid.MfaPingidConfig.property.usernameFormat">usernameFormat</a></code> | <code>string</code> | A format string for mapping Identity names to MFA method names. Values to substitute should be placed in `{{}}`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.mfaPingid.MfaPingidConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.mfaPingid.MfaPingidConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.mfaPingid.MfaPingidConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.mfaPingid.MfaPingidConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.mfaPingid.MfaPingidConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mfaPingid.MfaPingidConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.mfaPingid.MfaPingidConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `mountAccessor`<sup>Required</sup> <a name="mountAccessor" id="@cdktf/provider-vault.mfaPingid.MfaPingidConfig.property.mountAccessor"></a>

```typescript
public readonly mountAccessor: string;
```

- *Type:* string

The mount to tie this method to for use in automatic mappings.

The mapping will use the Name field of Aliases associated with this mount as the username in the mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/mfa_pingid#mount_accessor MfaPingid#mount_accessor}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.mfaPingid.MfaPingidConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the MFA method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/mfa_pingid#name MfaPingid#name}

---

##### `settingsFileBase64`<sup>Required</sup> <a name="settingsFileBase64" id="@cdktf/provider-vault.mfaPingid.MfaPingidConfig.property.settingsFileBase64"></a>

```typescript
public readonly settingsFileBase64: string;
```

- *Type:* string

A base64-encoded third-party settings file retrieved from PingID's configuration page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/mfa_pingid#settings_file_base64 MfaPingid#settings_file_base64}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.mfaPingid.MfaPingidConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

ID computed by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/mfa_pingid#id MfaPingid#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.mfaPingid.MfaPingidConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/mfa_pingid#namespace MfaPingid#namespace}

---

##### `usernameFormat`<sup>Optional</sup> <a name="usernameFormat" id="@cdktf/provider-vault.mfaPingid.MfaPingidConfig.property.usernameFormat"></a>

```typescript
public readonly usernameFormat: string;
```

- *Type:* string

A format string for mapping Identity names to MFA method names. Values to substitute should be placed in `{{}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/mfa_pingid#username_format MfaPingid#username_format}

---



