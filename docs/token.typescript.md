# `token` Submodule <a name="`token` Submodule" id="@cdktf/provider-vault.token"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Token <a name="Token" id="@cdktf/provider-vault.token.Token"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/token vault_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.token.Token.Initializer"></a>

```typescript
import { token } from '@cdktf/provider-vault'

new token.Token(scope: Construct, id: string, config?: TokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.token.TokenConfig">TokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.token.Token.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.token.Token.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-vault.token.Token.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.token.TokenConfig">TokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.token.Token.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.token.Token.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.token.Token.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.token.Token.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.token.Token.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.token.Token.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.token.Token.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.token.Token.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.token.Token.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetExplicitMaxTtl">resetExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetNoDefaultPolicy">resetNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetNoParent">resetNoParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetNumUses">resetNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetPolicies">resetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetRenewable">resetRenewable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetRenewIncrement">resetRenewIncrement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetRenewMinLease">resetRenewMinLease</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetRoleName">resetRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetWrappingTtl">resetWrappingTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.token.Token.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.token.Token.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.token.Token.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.token.Token.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.token.Token.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.token.Token.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.token.Token.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.token.Token.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.token.Token.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.token.Token.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.token.Token.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.token.Token.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.token.Token.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.token.Token.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.token.Token.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.token.Token.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.token.Token.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.token.Token.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.token.Token.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.token.Token.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.token.Token.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.token.Token.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.token.Token.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.token.Token.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.token.Token.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.token.Token.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.token.Token.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.token.Token.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.token.Token.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.token.Token.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.token.Token.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.token.Token.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.token.Token.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.token.Token.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.token.Token.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.token.Token.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.token.Token.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.token.Token.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.token.Token.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.token.Token.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.token.Token.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.token.Token.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.token.Token.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-vault.token.Token.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetExplicitMaxTtl` <a name="resetExplicitMaxTtl" id="@cdktf/provider-vault.token.Token.resetExplicitMaxTtl"></a>

```typescript
public resetExplicitMaxTtl(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.token.Token.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-vault.token.Token.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.token.Token.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetNoDefaultPolicy` <a name="resetNoDefaultPolicy" id="@cdktf/provider-vault.token.Token.resetNoDefaultPolicy"></a>

```typescript
public resetNoDefaultPolicy(): void
```

##### `resetNoParent` <a name="resetNoParent" id="@cdktf/provider-vault.token.Token.resetNoParent"></a>

```typescript
public resetNoParent(): void
```

##### `resetNumUses` <a name="resetNumUses" id="@cdktf/provider-vault.token.Token.resetNumUses"></a>

```typescript
public resetNumUses(): void
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-vault.token.Token.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktf/provider-vault.token.Token.resetPolicies"></a>

```typescript
public resetPolicies(): void
```

##### `resetRenewable` <a name="resetRenewable" id="@cdktf/provider-vault.token.Token.resetRenewable"></a>

```typescript
public resetRenewable(): void
```

##### `resetRenewIncrement` <a name="resetRenewIncrement" id="@cdktf/provider-vault.token.Token.resetRenewIncrement"></a>

```typescript
public resetRenewIncrement(): void
```

##### `resetRenewMinLease` <a name="resetRenewMinLease" id="@cdktf/provider-vault.token.Token.resetRenewMinLease"></a>

```typescript
public resetRenewMinLease(): void
```

##### `resetRoleName` <a name="resetRoleName" id="@cdktf/provider-vault.token.Token.resetRoleName"></a>

```typescript
public resetRoleName(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-vault.token.Token.resetTtl"></a>

```typescript
public resetTtl(): void
```

##### `resetWrappingTtl` <a name="resetWrappingTtl" id="@cdktf/provider-vault.token.Token.resetWrappingTtl"></a>

```typescript
public resetWrappingTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.token.Token.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.token.Token.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Token resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.token.Token.isConstruct"></a>

```typescript
import { token } from '@cdktf/provider-vault'

token.Token.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.token.Token.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.token.Token.isTerraformElement"></a>

```typescript
import { token } from '@cdktf/provider-vault'

token.Token.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.token.Token.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.token.Token.isTerraformResource"></a>

```typescript
import { token } from '@cdktf/provider-vault'

token.Token.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.token.Token.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.token.Token.generateConfigForImport"></a>

```typescript
import { token } from '@cdktf/provider-vault'

token.Token.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Token resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.token.Token.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.token.Token.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Token to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.token.Token.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Token that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.token.Token.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Token to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.token.Token.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.token.Token.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.clientToken">clientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.leaseDuration">leaseDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.leaseStarted">leaseStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.wrappedToken">wrappedToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.wrappingAccessor">wrappingAccessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.explicitMaxTtlInput">explicitMaxTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.noDefaultPolicyInput">noDefaultPolicyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.noParentInput">noParentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.numUsesInput">numUsesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.periodInput">periodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.policiesInput">policiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.renewableInput">renewableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.renewIncrementInput">renewIncrementInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.renewMinLeaseInput">renewMinLeaseInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.ttlInput">ttlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.wrappingTtlInput">wrappingTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.explicitMaxTtl">explicitMaxTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.noDefaultPolicy">noDefaultPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.noParent">noParent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.numUses">numUses</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.period">period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.policies">policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.renewable">renewable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.renewIncrement">renewIncrement</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.renewMinLease">renewMinLease</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.ttl">ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.wrappingTtl">wrappingTtl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.token.Token.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.token.Token.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.token.Token.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.token.Token.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.token.Token.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.token.Token.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.token.Token.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.token.Token.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.token.Token.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.token.Token.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.token.Token.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.token.Token.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.token.Token.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.token.Token.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktf/provider-vault.token.Token.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

---

##### `leaseDuration`<sup>Required</sup> <a name="leaseDuration" id="@cdktf/provider-vault.token.Token.property.leaseDuration"></a>

```typescript
public readonly leaseDuration: number;
```

- *Type:* number

---

##### `leaseStarted`<sup>Required</sup> <a name="leaseStarted" id="@cdktf/provider-vault.token.Token.property.leaseStarted"></a>

```typescript
public readonly leaseStarted: string;
```

- *Type:* string

---

##### `wrappedToken`<sup>Required</sup> <a name="wrappedToken" id="@cdktf/provider-vault.token.Token.property.wrappedToken"></a>

```typescript
public readonly wrappedToken: string;
```

- *Type:* string

---

##### `wrappingAccessor`<sup>Required</sup> <a name="wrappingAccessor" id="@cdktf/provider-vault.token.Token.property.wrappingAccessor"></a>

```typescript
public readonly wrappingAccessor: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-vault.token.Token.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `explicitMaxTtlInput`<sup>Optional</sup> <a name="explicitMaxTtlInput" id="@cdktf/provider-vault.token.Token.property.explicitMaxTtlInput"></a>

```typescript
public readonly explicitMaxTtlInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.token.Token.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-vault.token.Token.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.token.Token.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `noDefaultPolicyInput`<sup>Optional</sup> <a name="noDefaultPolicyInput" id="@cdktf/provider-vault.token.Token.property.noDefaultPolicyInput"></a>

```typescript
public readonly noDefaultPolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `noParentInput`<sup>Optional</sup> <a name="noParentInput" id="@cdktf/provider-vault.token.Token.property.noParentInput"></a>

```typescript
public readonly noParentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `numUsesInput`<sup>Optional</sup> <a name="numUsesInput" id="@cdktf/provider-vault.token.Token.property.numUsesInput"></a>

```typescript
public readonly numUsesInput: number;
```

- *Type:* number

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-vault.token.Token.property.periodInput"></a>

```typescript
public readonly periodInput: string;
```

- *Type:* string

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktf/provider-vault.token.Token.property.policiesInput"></a>

```typescript
public readonly policiesInput: string[];
```

- *Type:* string[]

---

##### `renewableInput`<sup>Optional</sup> <a name="renewableInput" id="@cdktf/provider-vault.token.Token.property.renewableInput"></a>

```typescript
public readonly renewableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `renewIncrementInput`<sup>Optional</sup> <a name="renewIncrementInput" id="@cdktf/provider-vault.token.Token.property.renewIncrementInput"></a>

```typescript
public readonly renewIncrementInput: number;
```

- *Type:* number

---

##### `renewMinLeaseInput`<sup>Optional</sup> <a name="renewMinLeaseInput" id="@cdktf/provider-vault.token.Token.property.renewMinLeaseInput"></a>

```typescript
public readonly renewMinLeaseInput: number;
```

- *Type:* number

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-vault.token.Token.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-vault.token.Token.property.ttlInput"></a>

```typescript
public readonly ttlInput: string;
```

- *Type:* string

---

##### `wrappingTtlInput`<sup>Optional</sup> <a name="wrappingTtlInput" id="@cdktf/provider-vault.token.Token.property.wrappingTtlInput"></a>

```typescript
public readonly wrappingTtlInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-vault.token.Token.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `explicitMaxTtl`<sup>Required</sup> <a name="explicitMaxTtl" id="@cdktf/provider-vault.token.Token.property.explicitMaxTtl"></a>

```typescript
public readonly explicitMaxTtl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.token.Token.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-vault.token.Token.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.token.Token.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `noDefaultPolicy`<sup>Required</sup> <a name="noDefaultPolicy" id="@cdktf/provider-vault.token.Token.property.noDefaultPolicy"></a>

```typescript
public readonly noDefaultPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `noParent`<sup>Required</sup> <a name="noParent" id="@cdktf/provider-vault.token.Token.property.noParent"></a>

```typescript
public readonly noParent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `numUses`<sup>Required</sup> <a name="numUses" id="@cdktf/provider-vault.token.Token.property.numUses"></a>

```typescript
public readonly numUses: number;
```

- *Type:* number

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-vault.token.Token.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.token.Token.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

---

##### `renewable`<sup>Required</sup> <a name="renewable" id="@cdktf/provider-vault.token.Token.property.renewable"></a>

```typescript
public readonly renewable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `renewIncrement`<sup>Required</sup> <a name="renewIncrement" id="@cdktf/provider-vault.token.Token.property.renewIncrement"></a>

```typescript
public readonly renewIncrement: number;
```

- *Type:* number

---

##### `renewMinLease`<sup>Required</sup> <a name="renewMinLease" id="@cdktf/provider-vault.token.Token.property.renewMinLease"></a>

```typescript
public readonly renewMinLease: number;
```

- *Type:* number

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.token.Token.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.token.Token.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

---

##### `wrappingTtl`<sup>Required</sup> <a name="wrappingTtl" id="@cdktf/provider-vault.token.Token.property.wrappingTtl"></a>

```typescript
public readonly wrappingTtl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.token.Token.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.token.Token.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TokenConfig <a name="TokenConfig" id="@cdktf/provider-vault.token.TokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.token.TokenConfig.Initializer"></a>

```typescript
import { token } from '@cdktf/provider-vault'

const tokenConfig: token.TokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the token. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.explicitMaxTtl">explicitMaxTtl</a></code> | <code>string</code> | The explicit max TTL of the token. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/token#id Token#id}. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata to be associated with the token. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.noDefaultPolicy">noDefaultPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to disable the default policy. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.noParent">noParent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to create a token without parent. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.numUses">numUses</a></code> | <code>number</code> | The number of allowed uses of the token. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.period">period</a></code> | <code>string</code> | The period of the token. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.policies">policies</a></code> | <code>string[]</code> | List of policies. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.renewable">renewable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to allow the token to be renewed. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.renewIncrement">renewIncrement</a></code> | <code>number</code> | The renew increment. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.renewMinLease">renewMinLease</a></code> | <code>number</code> | The minimum lease to renew token. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.roleName">roleName</a></code> | <code>string</code> | The token role name. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.ttl">ttl</a></code> | <code>string</code> | The TTL period of the token. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.wrappingTtl">wrappingTtl</a></code> | <code>string</code> | The TTL period of the wrapped token. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.token.TokenConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.token.TokenConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.token.TokenConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.token.TokenConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.token.TokenConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.token.TokenConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.token.TokenConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-vault.token.TokenConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/token#display_name Token#display_name}

---

##### `explicitMaxTtl`<sup>Optional</sup> <a name="explicitMaxTtl" id="@cdktf/provider-vault.token.TokenConfig.property.explicitMaxTtl"></a>

```typescript
public readonly explicitMaxTtl: string;
```

- *Type:* string

The explicit max TTL of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/token#explicit_max_ttl Token#explicit_max_ttl}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.token.TokenConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/token#id Token#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-vault.token.TokenConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata to be associated with the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/token#metadata Token#metadata}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.token.TokenConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/token#namespace Token#namespace}

---

##### `noDefaultPolicy`<sup>Optional</sup> <a name="noDefaultPolicy" id="@cdktf/provider-vault.token.TokenConfig.property.noDefaultPolicy"></a>

```typescript
public readonly noDefaultPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to disable the default policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/token#no_default_policy Token#no_default_policy}

---

##### `noParent`<sup>Optional</sup> <a name="noParent" id="@cdktf/provider-vault.token.TokenConfig.property.noParent"></a>

```typescript
public readonly noParent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to create a token without parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/token#no_parent Token#no_parent}

---

##### `numUses`<sup>Optional</sup> <a name="numUses" id="@cdktf/provider-vault.token.TokenConfig.property.numUses"></a>

```typescript
public readonly numUses: number;
```

- *Type:* number

The number of allowed uses of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/token#num_uses Token#num_uses}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-vault.token.TokenConfig.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

The period of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/token#period Token#period}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-vault.token.TokenConfig.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

List of policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/token#policies Token#policies}

---

##### `renewable`<sup>Optional</sup> <a name="renewable" id="@cdktf/provider-vault.token.TokenConfig.property.renewable"></a>

```typescript
public readonly renewable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to allow the token to be renewed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/token#renewable Token#renewable}

---

##### `renewIncrement`<sup>Optional</sup> <a name="renewIncrement" id="@cdktf/provider-vault.token.TokenConfig.property.renewIncrement"></a>

```typescript
public readonly renewIncrement: number;
```

- *Type:* number

The renew increment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/token#renew_increment Token#renew_increment}

---

##### `renewMinLease`<sup>Optional</sup> <a name="renewMinLease" id="@cdktf/provider-vault.token.TokenConfig.property.renewMinLease"></a>

```typescript
public readonly renewMinLease: number;
```

- *Type:* number

The minimum lease to renew token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/token#renew_min_lease Token#renew_min_lease}

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@cdktf/provider-vault.token.TokenConfig.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

The token role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/token#role_name Token#role_name}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.token.TokenConfig.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

The TTL period of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/token#ttl Token#ttl}

---

##### `wrappingTtl`<sup>Optional</sup> <a name="wrappingTtl" id="@cdktf/provider-vault.token.TokenConfig.property.wrappingTtl"></a>

```typescript
public readonly wrappingTtl: string;
```

- *Type:* string

The TTL period of the wrapped token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/token#wrapping_ttl Token#wrapping_ttl}

---



