# `dataVaultSshSecretBackendSign` Submodule <a name="`dataVaultSshSecretBackendSign` Submodule" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultSshSecretBackendSign <a name="DataVaultSshSecretBackendSign" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/ssh_secret_backend_sign vault_ssh_secret_backend_sign}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer"></a>

```typescript
import { dataVaultSshSecretBackendSign } from '@cdktf/provider-vault'

new dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign(scope: Construct, id: string, config: DataVaultSshSecretBackendSignConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig">DataVaultSshSecretBackendSignConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig">DataVaultSshSecretBackendSignConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetCertType">resetCertType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetCriticalOptions">resetCriticalOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetExtensions">resetExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetKeyId">resetKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetValidPrincipals">resetValidPrincipals</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCertType` <a name="resetCertType" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetCertType"></a>

```typescript
public resetCertType(): void
```

##### `resetCriticalOptions` <a name="resetCriticalOptions" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetCriticalOptions"></a>

```typescript
public resetCriticalOptions(): void
```

##### `resetExtensions` <a name="resetExtensions" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetExtensions"></a>

```typescript
public resetExtensions(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeyId` <a name="resetKeyId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetKeyId"></a>

```typescript
public resetKeyId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetTtl"></a>

```typescript
public resetTtl(): void
```

##### `resetValidPrincipals` <a name="resetValidPrincipals" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetValidPrincipals"></a>

```typescript
public resetValidPrincipals(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultSshSecretBackendSign resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isConstruct"></a>

```typescript
import { dataVaultSshSecretBackendSign } from '@cdktf/provider-vault'

dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isTerraformElement"></a>

```typescript
import { dataVaultSshSecretBackendSign } from '@cdktf/provider-vault'

dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isTerraformDataSource"></a>

```typescript
import { dataVaultSshSecretBackendSign } from '@cdktf/provider-vault'

dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.generateConfigForImport"></a>

```typescript
import { dataVaultSshSecretBackendSign } from '@cdktf/provider-vault'

dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataVaultSshSecretBackendSign resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultSshSecretBackendSign to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultSshSecretBackendSign that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/ssh_secret_backend_sign#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultSshSecretBackendSign to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.signedKey">signedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.certTypeInput">certTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.criticalOptionsInput">criticalOptionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.extensionsInput">extensionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.publicKeyInput">publicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.ttlInput">ttlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.validPrincipalsInput">validPrincipalsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.certType">certType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.criticalOptions">criticalOptions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.extensions">extensions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.ttl">ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.validPrincipals">validPrincipals</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `signedKey`<sup>Required</sup> <a name="signedKey" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.signedKey"></a>

```typescript
public readonly signedKey: string;
```

- *Type:* string

---

##### `certTypeInput`<sup>Optional</sup> <a name="certTypeInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.certTypeInput"></a>

```typescript
public readonly certTypeInput: string;
```

- *Type:* string

---

##### `criticalOptionsInput`<sup>Optional</sup> <a name="criticalOptionsInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.criticalOptionsInput"></a>

```typescript
public readonly criticalOptionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `extensionsInput`<sup>Optional</sup> <a name="extensionsInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.extensionsInput"></a>

```typescript
public readonly extensionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.publicKeyInput"></a>

```typescript
public readonly publicKeyInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.ttlInput"></a>

```typescript
public readonly ttlInput: string;
```

- *Type:* string

---

##### `validPrincipalsInput`<sup>Optional</sup> <a name="validPrincipalsInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.validPrincipalsInput"></a>

```typescript
public readonly validPrincipalsInput: string;
```

- *Type:* string

---

##### `certType`<sup>Required</sup> <a name="certType" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.certType"></a>

```typescript
public readonly certType: string;
```

- *Type:* string

---

##### `criticalOptions`<sup>Required</sup> <a name="criticalOptions" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.criticalOptions"></a>

```typescript
public readonly criticalOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.extensions"></a>

```typescript
public readonly extensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

---

##### `validPrincipals`<sup>Required</sup> <a name="validPrincipals" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.validPrincipals"></a>

```typescript
public readonly validPrincipals: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultSshSecretBackendSignConfig <a name="DataVaultSshSecretBackendSignConfig" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.Initializer"></a>

```typescript
import { dataVaultSshSecretBackendSign } from '@cdktf/provider-vault'

const dataVaultSshSecretBackendSignConfig: dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.name">name</a></code> | <code>string</code> | Specifies the name of the role to sign. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.path">path</a></code> | <code>string</code> | Full path where SSH backend is mounted. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.publicKey">publicKey</a></code> | <code>string</code> | Specifies the SSH public key that should be signed. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.certType">certType</a></code> | <code>string</code> | Specifies the type of certificate to be created; either "user" or "host". |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.criticalOptions">criticalOptions</a></code> | <code>{[ key: string ]: string}</code> | Specifies a map of the critical options that the certificate should be signed for. Defaults to none. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.extensions">extensions</a></code> | <code>{[ key: string ]: string}</code> | Specifies a map of the extensions that the certificate should be signed for. Defaults to none. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/ssh_secret_backend_sign#id DataVaultSshSecretBackendSign#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.keyId">keyId</a></code> | <code>string</code> | Specifies the key id that the created certificate should have. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.ttl">ttl</a></code> | <code>string</code> | Specifies the Requested Time To Live. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.validPrincipals">validPrincipals</a></code> | <code>string</code> | Specifies valid principals, either usernames or hostnames, that the certificate should be signed for. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the name of the role to sign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/ssh_secret_backend_sign#name DataVaultSshSecretBackendSign#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Full path where SSH backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/ssh_secret_backend_sign#path DataVaultSshSecretBackendSign#path}

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

Specifies the SSH public key that should be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/ssh_secret_backend_sign#public_key DataVaultSshSecretBackendSign#public_key}

---

##### `certType`<sup>Optional</sup> <a name="certType" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.certType"></a>

```typescript
public readonly certType: string;
```

- *Type:* string

Specifies the type of certificate to be created; either "user" or "host".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/ssh_secret_backend_sign#cert_type DataVaultSshSecretBackendSign#cert_type}

---

##### `criticalOptions`<sup>Optional</sup> <a name="criticalOptions" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.criticalOptions"></a>

```typescript
public readonly criticalOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Specifies a map of the critical options that the certificate should be signed for. Defaults to none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/ssh_secret_backend_sign#critical_options DataVaultSshSecretBackendSign#critical_options}

---

##### `extensions`<sup>Optional</sup> <a name="extensions" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.extensions"></a>

```typescript
public readonly extensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Specifies a map of the extensions that the certificate should be signed for. Defaults to none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/ssh_secret_backend_sign#extensions DataVaultSshSecretBackendSign#extensions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/ssh_secret_backend_sign#id DataVaultSshSecretBackendSign#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

Specifies the key id that the created certificate should have.

If not specified, the display name of the token will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/ssh_secret_backend_sign#key_id DataVaultSshSecretBackendSign#key_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/ssh_secret_backend_sign#namespace DataVaultSshSecretBackendSign#namespace}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

Specifies the Requested Time To Live.

Cannot be greater than the role's max_ttl value. If not provided, the role's ttl value will be used. Note that the role values default to system values if not explicitly set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/ssh_secret_backend_sign#ttl DataVaultSshSecretBackendSign#ttl}

---

##### `validPrincipals`<sup>Optional</sup> <a name="validPrincipals" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.validPrincipals"></a>

```typescript
public readonly validPrincipals: string;
```

- *Type:* string

Specifies valid principals, either usernames or hostnames, that the certificate should be signed for.

Required unless the role has specified allow_empty_principals or a value has been set for either the default_user or default_user_template role parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/ssh_secret_backend_sign#valid_principals DataVaultSshSecretBackendSign#valid_principals}

---



