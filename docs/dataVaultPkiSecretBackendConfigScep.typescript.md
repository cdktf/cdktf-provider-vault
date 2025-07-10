# `dataVaultPkiSecretBackendConfigScep` Submodule <a name="`dataVaultPkiSecretBackendConfigScep` Submodule" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultPkiSecretBackendConfigScep <a name="DataVaultPkiSecretBackendConfigScep" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/pki_secret_backend_config_scep vault_pki_secret_backend_config_scep}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer"></a>

```typescript
import { dataVaultPkiSecretBackendConfigScep } from '@cdktf/provider-vault'

new dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep(scope: Construct, id: string, config: DataVaultPkiSecretBackendConfigScepConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig">DataVaultPkiSecretBackendConfigScepConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig">DataVaultPkiSecretBackendConfigScepConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultPkiSecretBackendConfigScep resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.isConstruct"></a>

```typescript
import { dataVaultPkiSecretBackendConfigScep } from '@cdktf/provider-vault'

dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.isTerraformElement"></a>

```typescript
import { dataVaultPkiSecretBackendConfigScep } from '@cdktf/provider-vault'

dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.isTerraformDataSource"></a>

```typescript
import { dataVaultPkiSecretBackendConfigScep } from '@cdktf/provider-vault'

dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.generateConfigForImport"></a>

```typescript
import { dataVaultPkiSecretBackendConfigScep } from '@cdktf/provider-vault'

dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataVaultPkiSecretBackendConfigScep resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultPkiSecretBackendConfigScep to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultPkiSecretBackendConfigScep that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/pki_secret_backend_config_scep#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultPkiSecretBackendConfigScep to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.allowedDigestAlgorithms">allowedDigestAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.allowedEncryptionAlgorithms">allowedEncryptionAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.authenticators">authenticators</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList">DataVaultPkiSecretBackendConfigScepAuthenticatorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.defaultPathPolicy">defaultPathPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.externalValidation">externalValidation</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList">DataVaultPkiSecretBackendConfigScepExternalValidationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.lastUpdated">lastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.restrictCaChainToIssuer">restrictCaChainToIssuer</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `allowedDigestAlgorithms`<sup>Required</sup> <a name="allowedDigestAlgorithms" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.allowedDigestAlgorithms"></a>

```typescript
public readonly allowedDigestAlgorithms: string[];
```

- *Type:* string[]

---

##### `allowedEncryptionAlgorithms`<sup>Required</sup> <a name="allowedEncryptionAlgorithms" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.allowedEncryptionAlgorithms"></a>

```typescript
public readonly allowedEncryptionAlgorithms: string[];
```

- *Type:* string[]

---

##### `authenticators`<sup>Required</sup> <a name="authenticators" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.authenticators"></a>

```typescript
public readonly authenticators: DataVaultPkiSecretBackendConfigScepAuthenticatorsList;
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList">DataVaultPkiSecretBackendConfigScepAuthenticatorsList</a>

---

##### `defaultPathPolicy`<sup>Required</sup> <a name="defaultPathPolicy" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.defaultPathPolicy"></a>

```typescript
public readonly defaultPathPolicy: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `externalValidation`<sup>Required</sup> <a name="externalValidation" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.externalValidation"></a>

```typescript
public readonly externalValidation: DataVaultPkiSecretBackendConfigScepExternalValidationList;
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList">DataVaultPkiSecretBackendConfigScepExternalValidationList</a>

---

##### `lastUpdated`<sup>Required</sup> <a name="lastUpdated" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.lastUpdated"></a>

```typescript
public readonly lastUpdated: string;
```

- *Type:* string

---

##### `restrictCaChainToIssuer`<sup>Required</sup> <a name="restrictCaChainToIssuer" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.restrictCaChainToIssuer"></a>

```typescript
public readonly restrictCaChainToIssuer: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultPkiSecretBackendConfigScepAuthenticators <a name="DataVaultPkiSecretBackendConfigScepAuthenticators" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticators.Initializer"></a>

```typescript
import { dataVaultPkiSecretBackendConfigScep } from '@cdktf/provider-vault'

const dataVaultPkiSecretBackendConfigScepAuthenticators: dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticators = { ... }
```


### DataVaultPkiSecretBackendConfigScepConfig <a name="DataVaultPkiSecretBackendConfigScepConfig" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.Initializer"></a>

```typescript
import { dataVaultPkiSecretBackendConfigScep } from '@cdktf/provider-vault'

const dataVaultPkiSecretBackendConfigScepConfig: dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.backend">backend</a></code> | <code>string</code> | Path where PKI engine is mounted. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/pki_secret_backend_config_scep#id DataVaultPkiSecretBackendConfigScep#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

Path where PKI engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/pki_secret_backend_config_scep#backend DataVaultPkiSecretBackendConfigScep#backend}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/pki_secret_backend_config_scep#id DataVaultPkiSecretBackendConfigScep#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/pki_secret_backend_config_scep#namespace DataVaultPkiSecretBackendConfigScep#namespace}

---

### DataVaultPkiSecretBackendConfigScepExternalValidation <a name="DataVaultPkiSecretBackendConfigScepExternalValidation" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidation.Initializer"></a>

```typescript
import { dataVaultPkiSecretBackendConfigScep } from '@cdktf/provider-vault'

const dataVaultPkiSecretBackendConfigScepExternalValidation: dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidation = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataVaultPkiSecretBackendConfigScepAuthenticatorsList <a name="DataVaultPkiSecretBackendConfigScepAuthenticatorsList" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.Initializer"></a>

```typescript
import { dataVaultPkiSecretBackendConfigScep } from '@cdktf/provider-vault'

new dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.get"></a>

```typescript
public get(index: number): DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference <a name="DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer"></a>

```typescript
import { dataVaultPkiSecretBackendConfigScep } from '@cdktf/provider-vault'

new dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.property.cert">cert</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.property.scep">scep</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticators">DataVaultPkiSecretBackendConfigScepAuthenticators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.property.cert"></a>

```typescript
public readonly cert: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `scep`<sup>Required</sup> <a name="scep" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.property.scep"></a>

```typescript
public readonly scep: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataVaultPkiSecretBackendConfigScepAuthenticators;
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticators">DataVaultPkiSecretBackendConfigScepAuthenticators</a>

---


### DataVaultPkiSecretBackendConfigScepExternalValidationList <a name="DataVaultPkiSecretBackendConfigScepExternalValidationList" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.Initializer"></a>

```typescript
import { dataVaultPkiSecretBackendConfigScep } from '@cdktf/provider-vault'

new dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.get"></a>

```typescript
public get(index: number): DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference <a name="DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.Initializer"></a>

```typescript
import { dataVaultPkiSecretBackendConfigScep } from '@cdktf/provider-vault'

new dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.property.intune">intune</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidation">DataVaultPkiSecretBackendConfigScepExternalValidation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intune`<sup>Required</sup> <a name="intune" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.property.intune"></a>

```typescript
public readonly intune: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataVaultPkiSecretBackendConfigScepExternalValidation;
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidation">DataVaultPkiSecretBackendConfigScepExternalValidation</a>

---



