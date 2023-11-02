# `vault_gcp_secret_static_account`

Refer to the Terraform Registory for docs: [`vault_gcp_secret_static_account`](https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_secret_static_account).

# `gcpSecretStaticAccount` Submodule <a name="`gcpSecretStaticAccount` Submodule" id="@cdktf/provider-vault.gcpSecretStaticAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpSecretStaticAccount <a name="GcpSecretStaticAccount" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_secret_static_account vault_gcp_secret_static_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer"></a>

```typescript
import { gcpSecretStaticAccount } from '@cdktf/provider-vault'

new gcpSecretStaticAccount.GcpSecretStaticAccount(scope: Construct, id: string, config: GcpSecretStaticAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig">GcpSecretStaticAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig">GcpSecretStaticAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.putBinding">putBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetBinding">resetBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetSecretType">resetSecretType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetTokenScopes">resetTokenScopes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putBinding` <a name="putBinding" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.putBinding"></a>

```typescript
public putBinding(value: IResolvable | GcpSecretStaticAccountBinding[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.putBinding.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding">GcpSecretStaticAccountBinding</a>[]

---

##### `resetBinding` <a name="resetBinding" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetBinding"></a>

```typescript
public resetBinding(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetSecretType` <a name="resetSecretType" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetSecretType"></a>

```typescript
public resetSecretType(): void
```

##### `resetTokenScopes` <a name="resetTokenScopes" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetTokenScopes"></a>

```typescript
public resetTokenScopes(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GcpSecretStaticAccount resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isConstruct"></a>

```typescript
import { gcpSecretStaticAccount } from '@cdktf/provider-vault'

gcpSecretStaticAccount.GcpSecretStaticAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isTerraformElement"></a>

```typescript
import { gcpSecretStaticAccount } from '@cdktf/provider-vault'

gcpSecretStaticAccount.GcpSecretStaticAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isTerraformResource"></a>

```typescript
import { gcpSecretStaticAccount } from '@cdktf/provider-vault'

gcpSecretStaticAccount.GcpSecretStaticAccount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.generateConfigForImport"></a>

```typescript
import { gcpSecretStaticAccount } from '@cdktf/provider-vault'

gcpSecretStaticAccount.GcpSecretStaticAccount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GcpSecretStaticAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GcpSecretStaticAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GcpSecretStaticAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_secret_static_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GcpSecretStaticAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.binding">binding</a></code> | <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList">GcpSecretStaticAccountBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.serviceAccountProject">serviceAccountProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.bindingInput">bindingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding">GcpSecretStaticAccountBinding</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.secretTypeInput">secretTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.staticAccountInput">staticAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.tokenScopesInput">tokenScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.secretType">secretType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.staticAccount">staticAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.tokenScopes">tokenScopes</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `binding`<sup>Required</sup> <a name="binding" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.binding"></a>

```typescript
public readonly binding: GcpSecretStaticAccountBindingList;
```

- *Type:* <a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList">GcpSecretStaticAccountBindingList</a>

---

##### `serviceAccountProject`<sup>Required</sup> <a name="serviceAccountProject" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.serviceAccountProject"></a>

```typescript
public readonly serviceAccountProject: string;
```

- *Type:* string

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `bindingInput`<sup>Optional</sup> <a name="bindingInput" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.bindingInput"></a>

```typescript
public readonly bindingInput: IResolvable | GcpSecretStaticAccountBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding">GcpSecretStaticAccountBinding</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `secretTypeInput`<sup>Optional</sup> <a name="secretTypeInput" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.secretTypeInput"></a>

```typescript
public readonly secretTypeInput: string;
```

- *Type:* string

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.serviceAccountEmailInput"></a>

```typescript
public readonly serviceAccountEmailInput: string;
```

- *Type:* string

---

##### `staticAccountInput`<sup>Optional</sup> <a name="staticAccountInput" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.staticAccountInput"></a>

```typescript
public readonly staticAccountInput: string;
```

- *Type:* string

---

##### `tokenScopesInput`<sup>Optional</sup> <a name="tokenScopesInput" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.tokenScopesInput"></a>

```typescript
public readonly tokenScopesInput: string[];
```

- *Type:* string[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `secretType`<sup>Required</sup> <a name="secretType" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.secretType"></a>

```typescript
public readonly secretType: string;
```

- *Type:* string

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `staticAccount`<sup>Required</sup> <a name="staticAccount" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.staticAccount"></a>

```typescript
public readonly staticAccount: string;
```

- *Type:* string

---

##### `tokenScopes`<sup>Required</sup> <a name="tokenScopes" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.tokenScopes"></a>

```typescript
public readonly tokenScopes: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GcpSecretStaticAccountBinding <a name="GcpSecretStaticAccountBinding" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding.Initializer"></a>

```typescript
import { gcpSecretStaticAccount } from '@cdktf/provider-vault'

const gcpSecretStaticAccountBinding: gcpSecretStaticAccount.GcpSecretStaticAccountBinding = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding.property.resource">resource</a></code> | <code>string</code> | Resource name. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding.property.roles">roles</a></code> | <code>string[]</code> | List of roles to apply to the resource. |

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

Resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_secret_static_account#resource GcpSecretStaticAccount#resource}

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

List of roles to apply to the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_secret_static_account#roles GcpSecretStaticAccount#roles}

---

### GcpSecretStaticAccountConfig <a name="GcpSecretStaticAccountConfig" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.Initializer"></a>

```typescript
import { gcpSecretStaticAccount } from '@cdktf/provider-vault'

const gcpSecretStaticAccountConfig: gcpSecretStaticAccount.GcpSecretStaticAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.backend">backend</a></code> | <code>string</code> | Path where the GCP secrets engine is mounted. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | Email of the GCP service account. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.staticAccount">staticAccount</a></code> | <code>string</code> | Name of the Static Account to create. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.binding">binding</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding">GcpSecretStaticAccountBinding</a>[]</code> | binding block. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_secret_static_account#id GcpSecretStaticAccount#id}. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.secretType">secretType</a></code> | <code>string</code> | Type of secret generated for this static account. Defaults to `access_token`. Accepted values: `access_token`, `service_account_key`. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.tokenScopes">tokenScopes</a></code> | <code>string[]</code> | List of OAuth scopes to assign to `access_token` secrets generated under this static account (`access_token` static accounts only). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

Path where the GCP secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_secret_static_account#backend GcpSecretStaticAccount#backend}

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

Email of the GCP service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_secret_static_account#service_account_email GcpSecretStaticAccount#service_account_email}

---

##### `staticAccount`<sup>Required</sup> <a name="staticAccount" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.staticAccount"></a>

```typescript
public readonly staticAccount: string;
```

- *Type:* string

Name of the Static Account to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_secret_static_account#static_account GcpSecretStaticAccount#static_account}

---

##### `binding`<sup>Optional</sup> <a name="binding" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.binding"></a>

```typescript
public readonly binding: IResolvable | GcpSecretStaticAccountBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding">GcpSecretStaticAccountBinding</a>[]

binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_secret_static_account#binding GcpSecretStaticAccount#binding}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_secret_static_account#id GcpSecretStaticAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_secret_static_account#namespace GcpSecretStaticAccount#namespace}

---

##### `secretType`<sup>Optional</sup> <a name="secretType" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.secretType"></a>

```typescript
public readonly secretType: string;
```

- *Type:* string

Type of secret generated for this static account. Defaults to `access_token`. Accepted values: `access_token`, `service_account_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_secret_static_account#secret_type GcpSecretStaticAccount#secret_type}

---

##### `tokenScopes`<sup>Optional</sup> <a name="tokenScopes" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.tokenScopes"></a>

```typescript
public readonly tokenScopes: string[];
```

- *Type:* string[]

List of OAuth scopes to assign to `access_token` secrets generated under this static account (`access_token` static accounts only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_secret_static_account#token_scopes GcpSecretStaticAccount#token_scopes}

---

## Classes <a name="Classes" id="Classes"></a>

### GcpSecretStaticAccountBindingList <a name="GcpSecretStaticAccountBindingList" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.Initializer"></a>

```typescript
import { gcpSecretStaticAccount } from '@cdktf/provider-vault'

new gcpSecretStaticAccount.GcpSecretStaticAccountBindingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.get"></a>

```typescript
public get(index: number): GcpSecretStaticAccountBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding">GcpSecretStaticAccountBinding</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GcpSecretStaticAccountBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding">GcpSecretStaticAccountBinding</a>[]

---


### GcpSecretStaticAccountBindingOutputReference <a name="GcpSecretStaticAccountBindingOutputReference" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer"></a>

```typescript
import { gcpSecretStaticAccount } from '@cdktf/provider-vault'

new gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.resourceInput">resourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.rolesInput">rolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.roles">roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding">GcpSecretStaticAccountBinding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.resourceInput"></a>

```typescript
public readonly resourceInput: string;
```

- *Type:* string

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.rolesInput"></a>

```typescript
public readonly rolesInput: string[];
```

- *Type:* string[]

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GcpSecretStaticAccountBinding;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding">GcpSecretStaticAccountBinding</a>

---



