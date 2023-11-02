# `vault_approle_auth_backend_login`

Refer to the Terraform Registory for docs: [`vault_approle_auth_backend_login`](https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/approle_auth_backend_login).

# `approleAuthBackendLogin` Submodule <a name="`approleAuthBackendLogin` Submodule" id="@cdktf/provider-vault.approleAuthBackendLogin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApproleAuthBackendLogin <a name="ApproleAuthBackendLogin" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/approle_auth_backend_login vault_approle_auth_backend_login}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer"></a>

```typescript
import { approleAuthBackendLogin } from '@cdktf/provider-vault'

new approleAuthBackendLogin.ApproleAuthBackendLogin(scope: Construct, id: string, config: ApproleAuthBackendLoginConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig">ApproleAuthBackendLoginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig">ApproleAuthBackendLoginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetSecretId">resetSecretId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetBackend"></a>

```typescript
public resetBackend(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetSecretId` <a name="resetSecretId" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetSecretId"></a>

```typescript
public resetSecretId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApproleAuthBackendLogin resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isConstruct"></a>

```typescript
import { approleAuthBackendLogin } from '@cdktf/provider-vault'

approleAuthBackendLogin.ApproleAuthBackendLogin.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isTerraformElement"></a>

```typescript
import { approleAuthBackendLogin } from '@cdktf/provider-vault'

approleAuthBackendLogin.ApproleAuthBackendLogin.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isTerraformResource"></a>

```typescript
import { approleAuthBackendLogin } from '@cdktf/provider-vault'

approleAuthBackendLogin.ApproleAuthBackendLogin.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.generateConfigForImport"></a>

```typescript
import { approleAuthBackendLogin } from '@cdktf/provider-vault'

approleAuthBackendLogin.ApproleAuthBackendLogin.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApproleAuthBackendLogin resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApproleAuthBackendLogin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApproleAuthBackendLogin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/approle_auth_backend_login#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApproleAuthBackendLogin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.accessor">accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.clientToken">clientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.leaseDuration">leaseDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.leaseStarted">leaseStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.policies">policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.renewable">renewable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.roleIdInput">roleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.roleId">roleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.accessor"></a>

```typescript
public readonly accessor: string;
```

- *Type:* string

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

---

##### `leaseDuration`<sup>Required</sup> <a name="leaseDuration" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.leaseDuration"></a>

```typescript
public readonly leaseDuration: number;
```

- *Type:* number

---

##### `leaseStarted`<sup>Required</sup> <a name="leaseStarted" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.leaseStarted"></a>

```typescript
public readonly leaseStarted: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.metadata"></a>

```typescript
public readonly metadata: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

---

##### `renewable`<sup>Required</sup> <a name="renewable" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.renewable"></a>

```typescript
public readonly renewable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `roleIdInput`<sup>Optional</sup> <a name="roleIdInput" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.roleIdInput"></a>

```typescript
public readonly roleIdInput: string;
```

- *Type:* string

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApproleAuthBackendLoginConfig <a name="ApproleAuthBackendLoginConfig" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.Initializer"></a>

```typescript
import { approleAuthBackendLogin } from '@cdktf/provider-vault'

const approleAuthBackendLoginConfig: approleAuthBackendLogin.ApproleAuthBackendLoginConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.roleId">roleId</a></code> | <code>string</code> | The RoleID to log in with. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.backend">backend</a></code> | <code>string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/approle_auth_backend_login#id ApproleAuthBackendLogin#id}. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.secretId">secretId</a></code> | <code>string</code> | The SecretID to log in with. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

The RoleID to log in with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/approle_auth_backend_login#role_id ApproleAuthBackendLogin#role_id}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/approle_auth_backend_login#backend ApproleAuthBackendLogin#backend}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/approle_auth_backend_login#id ApproleAuthBackendLogin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/approle_auth_backend_login#namespace ApproleAuthBackendLogin#namespace}

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

The SecretID to log in with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/approle_auth_backend_login#secret_id ApproleAuthBackendLogin#secret_id}

---



