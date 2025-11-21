# `identityMfaPingid` Submodule <a name="`identityMfaPingid` Submodule" id="@cdktf/provider-vault.identityMfaPingid"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityMfaPingid <a name="IdentityMfaPingid" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/identity_mfa_pingid vault_identity_mfa_pingid}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer"></a>

```typescript
import { identityMfaPingid } from '@cdktf/provider-vault'

new identityMfaPingid.IdentityMfaPingid(scope: Construct, id: string, config: IdentityMfaPingidConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig">IdentityMfaPingidConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig">IdentityMfaPingidConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.resetUsernameFormat">resetUsernameFormat</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetUsernameFormat` <a name="resetUsernameFormat" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.resetUsernameFormat"></a>

```typescript
public resetUsernameFormat(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityMfaPingid resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.isConstruct"></a>

```typescript
import { identityMfaPingid } from '@cdktf/provider-vault'

identityMfaPingid.IdentityMfaPingid.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.isTerraformElement"></a>

```typescript
import { identityMfaPingid } from '@cdktf/provider-vault'

identityMfaPingid.IdentityMfaPingid.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.isTerraformResource"></a>

```typescript
import { identityMfaPingid } from '@cdktf/provider-vault'

identityMfaPingid.IdentityMfaPingid.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.generateConfigForImport"></a>

```typescript
import { identityMfaPingid } from '@cdktf/provider-vault'

identityMfaPingid.IdentityMfaPingid.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IdentityMfaPingid resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityMfaPingid to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityMfaPingid that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/identity_mfa_pingid#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityMfaPingid to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.adminUrl">adminUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.authenticatorUrl">authenticatorUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.idpUrl">idpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.methodId">methodId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.mountAccessor">mountAccessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.namespaceId">namespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.namespacePath">namespacePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.orgAlias">orgAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.useSignature">useSignature</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.settingsFileBase64Input">settingsFileBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.usernameFormatInput">usernameFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.settingsFileBase64">settingsFileBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.usernameFormat">usernameFormat</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `adminUrl`<sup>Required</sup> <a name="adminUrl" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.adminUrl"></a>

```typescript
public readonly adminUrl: string;
```

- *Type:* string

---

##### `authenticatorUrl`<sup>Required</sup> <a name="authenticatorUrl" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.authenticatorUrl"></a>

```typescript
public readonly authenticatorUrl: string;
```

- *Type:* string

---

##### `idpUrl`<sup>Required</sup> <a name="idpUrl" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.idpUrl"></a>

```typescript
public readonly idpUrl: string;
```

- *Type:* string

---

##### `methodId`<sup>Required</sup> <a name="methodId" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.methodId"></a>

```typescript
public readonly methodId: string;
```

- *Type:* string

---

##### `mountAccessor`<sup>Required</sup> <a name="mountAccessor" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.mountAccessor"></a>

```typescript
public readonly mountAccessor: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

---

##### `namespacePath`<sup>Required</sup> <a name="namespacePath" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.namespacePath"></a>

```typescript
public readonly namespacePath: string;
```

- *Type:* string

---

##### `orgAlias`<sup>Required</sup> <a name="orgAlias" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.orgAlias"></a>

```typescript
public readonly orgAlias: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `useSignature`<sup>Required</sup> <a name="useSignature" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.useSignature"></a>

```typescript
public readonly useSignature: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `settingsFileBase64Input`<sup>Optional</sup> <a name="settingsFileBase64Input" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.settingsFileBase64Input"></a>

```typescript
public readonly settingsFileBase64Input: string;
```

- *Type:* string

---

##### `usernameFormatInput`<sup>Optional</sup> <a name="usernameFormatInput" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.usernameFormatInput"></a>

```typescript
public readonly usernameFormatInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `settingsFileBase64`<sup>Required</sup> <a name="settingsFileBase64" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.settingsFileBase64"></a>

```typescript
public readonly settingsFileBase64: string;
```

- *Type:* string

---

##### `usernameFormat`<sup>Required</sup> <a name="usernameFormat" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.usernameFormat"></a>

```typescript
public readonly usernameFormat: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityMfaPingidConfig <a name="IdentityMfaPingidConfig" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.Initializer"></a>

```typescript
import { identityMfaPingid } from '@cdktf/provider-vault'

const identityMfaPingidConfig: identityMfaPingid.IdentityMfaPingidConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.settingsFileBase64">settingsFileBase64</a></code> | <code>string</code> | A base64-encoded third-party settings contents as retrieved from PingID's configuration page. |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/identity_mfa_pingid#id IdentityMfaPingid#id}. |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.usernameFormat">usernameFormat</a></code> | <code>string</code> | A template string for mapping Identity names to MFA methods. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `settingsFileBase64`<sup>Required</sup> <a name="settingsFileBase64" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.settingsFileBase64"></a>

```typescript
public readonly settingsFileBase64: string;
```

- *Type:* string

A base64-encoded third-party settings contents as retrieved from PingID's configuration page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/identity_mfa_pingid#settings_file_base64 IdentityMfaPingid#settings_file_base64}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/identity_mfa_pingid#id IdentityMfaPingid#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/identity_mfa_pingid#namespace IdentityMfaPingid#namespace}

---

##### `usernameFormat`<sup>Optional</sup> <a name="usernameFormat" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.usernameFormat"></a>

```typescript
public readonly usernameFormat: string;
```

- *Type:* string

A template string for mapping Identity names to MFA methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/identity_mfa_pingid#username_format IdentityMfaPingid#username_format}

---



