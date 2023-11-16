# `vault_ad_secret_role`

Refer to the Terraform Registory for docs: [`vault_ad_secret_role`](https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_role).

# `adSecretRole` Submodule <a name="`adSecretRole` Submodule" id="@cdktf/provider-vault.adSecretRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdSecretRole <a name="AdSecretRole" id="@cdktf/provider-vault.adSecretRole.AdSecretRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_role vault_ad_secret_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.Initializer"></a>

```typescript
import { adSecretRole } from '@cdktf/provider-vault'

new adSecretRole.AdSecretRole(scope: Construct, id: string, config: AdSecretRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRoleConfig">AdSecretRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.adSecretRole.AdSecretRoleConfig">AdSecretRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.resetTtl"></a>

```typescript
public resetTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AdSecretRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.isConstruct"></a>

```typescript
import { adSecretRole } from '@cdktf/provider-vault'

adSecretRole.AdSecretRole.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.isTerraformElement"></a>

```typescript
import { adSecretRole } from '@cdktf/provider-vault'

adSecretRole.AdSecretRole.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.isTerraformResource"></a>

```typescript
import { adSecretRole } from '@cdktf/provider-vault'

adSecretRole.AdSecretRole.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.generateConfigForImport"></a>

```typescript
import { adSecretRole } from '@cdktf/provider-vault'

adSecretRole.AdSecretRole.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AdSecretRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AdSecretRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AdSecretRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AdSecretRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.property.lastVaultRotation">lastVaultRotation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.property.passwordLastSet">passwordLastSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.property.serviceAccountNameInput">serviceAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.property.serviceAccountName">serviceAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lastVaultRotation`<sup>Required</sup> <a name="lastVaultRotation" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.property.lastVaultRotation"></a>

```typescript
public readonly lastVaultRotation: string;
```

- *Type:* string

---

##### `passwordLastSet`<sup>Required</sup> <a name="passwordLastSet" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.property.passwordLastSet"></a>

```typescript
public readonly passwordLastSet: string;
```

- *Type:* string

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `serviceAccountNameInput`<sup>Optional</sup> <a name="serviceAccountNameInput" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.property.serviceAccountNameInput"></a>

```typescript
public readonly serviceAccountNameInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `serviceAccountName`<sup>Required</sup> <a name="serviceAccountName" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.property.serviceAccountName"></a>

```typescript
public readonly serviceAccountName: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.adSecretRole.AdSecretRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AdSecretRoleConfig <a name="AdSecretRoleConfig" id="@cdktf/provider-vault.adSecretRole.AdSecretRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.adSecretRole.AdSecretRoleConfig.Initializer"></a>

```typescript
import { adSecretRole } from '@cdktf/provider-vault'

const adSecretRoleConfig: adSecretRole.AdSecretRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRoleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRoleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRoleConfig.property.backend">backend</a></code> | <code>string</code> | The mount path for the AD backend. |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRoleConfig.property.role">role</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRoleConfig.property.serviceAccountName">serviceAccountName</a></code> | <code>string</code> | The username/logon name for the service account with which this role will be associated. |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRoleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_role#id AdSecretRole#id}. |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRoleConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.adSecretRole.AdSecretRoleConfig.property.ttl">ttl</a></code> | <code>number</code> | In seconds, the default password time-to-live. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.adSecretRole.AdSecretRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.adSecretRole.AdSecretRoleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.adSecretRole.AdSecretRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.adSecretRole.AdSecretRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.adSecretRole.AdSecretRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.adSecretRole.AdSecretRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.adSecretRole.AdSecretRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.adSecretRole.AdSecretRoleConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

The mount path for the AD backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_role#backend AdSecretRole#backend}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.adSecretRole.AdSecretRoleConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_role#role AdSecretRole#role}

---

##### `serviceAccountName`<sup>Required</sup> <a name="serviceAccountName" id="@cdktf/provider-vault.adSecretRole.AdSecretRoleConfig.property.serviceAccountName"></a>

```typescript
public readonly serviceAccountName: string;
```

- *Type:* string

The username/logon name for the service account with which this role will be associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_role#service_account_name AdSecretRole#service_account_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.adSecretRole.AdSecretRoleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_role#id AdSecretRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.adSecretRole.AdSecretRoleConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_role#namespace AdSecretRole#namespace}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.adSecretRole.AdSecretRoleConfig.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

In seconds, the default password time-to-live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_role#ttl AdSecretRole#ttl}

---



