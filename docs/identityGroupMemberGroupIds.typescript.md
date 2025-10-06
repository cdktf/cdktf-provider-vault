# `identityGroupMemberGroupIds` Submodule <a name="`identityGroupMemberGroupIds` Submodule" id="@cdktf/provider-vault.identityGroupMemberGroupIds"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityGroupMemberGroupIds <a name="IdentityGroupMemberGroupIds" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_group_member_group_ids vault_identity_group_member_group_ids}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer"></a>

```typescript
import { identityGroupMemberGroupIds } from '@cdktf/provider-vault'

new identityGroupMemberGroupIds.IdentityGroupMemberGroupIds(scope: Construct, id: string, config: IdentityGroupMemberGroupIdsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig">IdentityGroupMemberGroupIdsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig">IdentityGroupMemberGroupIdsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetExclusive">resetExclusive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetMemberGroupIds">resetMemberGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetExclusive` <a name="resetExclusive" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetExclusive"></a>

```typescript
public resetExclusive(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMemberGroupIds` <a name="resetMemberGroupIds" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetMemberGroupIds"></a>

```typescript
public resetMemberGroupIds(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityGroupMemberGroupIds resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isConstruct"></a>

```typescript
import { identityGroupMemberGroupIds } from '@cdktf/provider-vault'

identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isTerraformElement"></a>

```typescript
import { identityGroupMemberGroupIds } from '@cdktf/provider-vault'

identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isTerraformResource"></a>

```typescript
import { identityGroupMemberGroupIds } from '@cdktf/provider-vault'

identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.generateConfigForImport"></a>

```typescript
import { identityGroupMemberGroupIds } from '@cdktf/provider-vault'

identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IdentityGroupMemberGroupIds resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityGroupMemberGroupIds to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityGroupMemberGroupIds that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_group_member_group_ids#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityGroupMemberGroupIds to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.exclusiveInput">exclusiveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.memberGroupIdsInput">memberGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.exclusive">exclusive</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.memberGroupIds">memberGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `exclusiveInput`<sup>Optional</sup> <a name="exclusiveInput" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.exclusiveInput"></a>

```typescript
public readonly exclusiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberGroupIdsInput`<sup>Optional</sup> <a name="memberGroupIdsInput" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.memberGroupIdsInput"></a>

```typescript
public readonly memberGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `exclusive`<sup>Required</sup> <a name="exclusive" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.exclusive"></a>

```typescript
public readonly exclusive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `memberGroupIds`<sup>Required</sup> <a name="memberGroupIds" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.memberGroupIds"></a>

```typescript
public readonly memberGroupIds: string[];
```

- *Type:* string[]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityGroupMemberGroupIdsConfig <a name="IdentityGroupMemberGroupIdsConfig" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.Initializer"></a>

```typescript
import { identityGroupMemberGroupIds } from '@cdktf/provider-vault'

const identityGroupMemberGroupIdsConfig: identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.groupId">groupId</a></code> | <code>string</code> | ID of the group. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.exclusive">exclusive</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, allows the resource to manage member group ids exclusively. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_group_member_group_ids#id IdentityGroupMemberGroupIds#id}. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.memberGroupIds">memberGroupIds</a></code> | <code>string[]</code> | Group IDs to be assigned as group members. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

ID of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_group_member_group_ids#group_id IdentityGroupMemberGroupIds#group_id}

---

##### `exclusive`<sup>Optional</sup> <a name="exclusive" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.exclusive"></a>

```typescript
public readonly exclusive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, allows the resource to manage member group ids exclusively.

Beware of race conditions when disabling exclusive management

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_group_member_group_ids#exclusive IdentityGroupMemberGroupIds#exclusive}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_group_member_group_ids#id IdentityGroupMemberGroupIds#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `memberGroupIds`<sup>Optional</sup> <a name="memberGroupIds" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.memberGroupIds"></a>

```typescript
public readonly memberGroupIds: string[];
```

- *Type:* string[]

Group IDs to be assigned as group members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_group_member_group_ids#member_group_ids IdentityGroupMemberGroupIds#member_group_ids}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_group_member_group_ids#namespace IdentityGroupMemberGroupIds#namespace}

---



