# `dataVaultPkiSecretBackendConfigEst` Submodule <a name="`dataVaultPkiSecretBackendConfigEst` Submodule" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultPkiSecretBackendConfigEst <a name="DataVaultPkiSecretBackendConfigEst" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/pki_secret_backend_config_est vault_pki_secret_backend_config_est}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.Initializer"></a>

```typescript
import { dataVaultPkiSecretBackendConfigEst } from '@cdktf/provider-vault'

new dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst(scope: Construct, id: string, config: DataVaultPkiSecretBackendConfigEstConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstConfig">DataVaultPkiSecretBackendConfigEstConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstConfig">DataVaultPkiSecretBackendConfigEstConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultPkiSecretBackendConfigEst resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.isConstruct"></a>

```typescript
import { dataVaultPkiSecretBackendConfigEst } from '@cdktf/provider-vault'

dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.isTerraformElement"></a>

```typescript
import { dataVaultPkiSecretBackendConfigEst } from '@cdktf/provider-vault'

dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.isTerraformDataSource"></a>

```typescript
import { dataVaultPkiSecretBackendConfigEst } from '@cdktf/provider-vault'

dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.generateConfigForImport"></a>

```typescript
import { dataVaultPkiSecretBackendConfigEst } from '@cdktf/provider-vault'

dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataVaultPkiSecretBackendConfigEst resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultPkiSecretBackendConfigEst to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultPkiSecretBackendConfigEst that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/pki_secret_backend_config_est#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultPkiSecretBackendConfigEst to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.auditFields">auditFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.authenticators">authenticators</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsList">DataVaultPkiSecretBackendConfigEstAuthenticatorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.defaultMount">defaultMount</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.defaultPathPolicy">defaultPathPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.enableSentinelParsing">enableSentinelParsing</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.labelToPathPolicy">labelToPathPolicy</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.lastUpdated">lastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `auditFields`<sup>Required</sup> <a name="auditFields" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.auditFields"></a>

```typescript
public readonly auditFields: string[];
```

- *Type:* string[]

---

##### `authenticators`<sup>Required</sup> <a name="authenticators" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.authenticators"></a>

```typescript
public readonly authenticators: DataVaultPkiSecretBackendConfigEstAuthenticatorsList;
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsList">DataVaultPkiSecretBackendConfigEstAuthenticatorsList</a>

---

##### `defaultMount`<sup>Required</sup> <a name="defaultMount" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.defaultMount"></a>

```typescript
public readonly defaultMount: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `defaultPathPolicy`<sup>Required</sup> <a name="defaultPathPolicy" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.defaultPathPolicy"></a>

```typescript
public readonly defaultPathPolicy: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enableSentinelParsing`<sup>Required</sup> <a name="enableSentinelParsing" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.enableSentinelParsing"></a>

```typescript
public readonly enableSentinelParsing: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `labelToPathPolicy`<sup>Required</sup> <a name="labelToPathPolicy" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.labelToPathPolicy"></a>

```typescript
public readonly labelToPathPolicy: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `lastUpdated`<sup>Required</sup> <a name="lastUpdated" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.lastUpdated"></a>

```typescript
public readonly lastUpdated: string;
```

- *Type:* string

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEst.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultPkiSecretBackendConfigEstAuthenticators <a name="DataVaultPkiSecretBackendConfigEstAuthenticators" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticators.Initializer"></a>

```typescript
import { dataVaultPkiSecretBackendConfigEst } from '@cdktf/provider-vault'

const dataVaultPkiSecretBackendConfigEstAuthenticators: dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticators = { ... }
```


### DataVaultPkiSecretBackendConfigEstConfig <a name="DataVaultPkiSecretBackendConfigEstConfig" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstConfig.Initializer"></a>

```typescript
import { dataVaultPkiSecretBackendConfigEst } from '@cdktf/provider-vault'

const dataVaultPkiSecretBackendConfigEstConfig: dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstConfig.property.backend">backend</a></code> | <code>string</code> | Path where PKI engine is mounted. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/pki_secret_backend_config_est#id DataVaultPkiSecretBackendConfigEst#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

Path where PKI engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/pki_secret_backend_config_est#backend DataVaultPkiSecretBackendConfigEst#backend}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/pki_secret_backend_config_est#id DataVaultPkiSecretBackendConfigEst#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/pki_secret_backend_config_est#namespace DataVaultPkiSecretBackendConfigEst#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### DataVaultPkiSecretBackendConfigEstAuthenticatorsList <a name="DataVaultPkiSecretBackendConfigEstAuthenticatorsList" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsList.Initializer"></a>

```typescript
import { dataVaultPkiSecretBackendConfigEst } from '@cdktf/provider-vault'

new dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsList.get"></a>

```typescript
public get(index: number): DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference <a name="DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.Initializer"></a>

```typescript
import { dataVaultPkiSecretBackendConfigEst } from '@cdktf/provider-vault'

new dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.property.cert">cert</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.property.userpass">userpass</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticators">DataVaultPkiSecretBackendConfigEstAuthenticators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.property.cert"></a>

```typescript
public readonly cert: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `userpass`<sup>Required</sup> <a name="userpass" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.property.userpass"></a>

```typescript
public readonly userpass: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticatorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataVaultPkiSecretBackendConfigEstAuthenticators;
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigEst.DataVaultPkiSecretBackendConfigEstAuthenticators">DataVaultPkiSecretBackendConfigEstAuthenticators</a>

---



