# `dataVaultKubernetesAuthBackendConfig` Submodule <a name="`dataVaultKubernetesAuthBackendConfig` Submodule" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultKubernetesAuthBackendConfig <a name="DataVaultKubernetesAuthBackendConfig" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/kubernetes_auth_backend_config vault_kubernetes_auth_backend_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer"></a>

```typescript
import { dataVaultKubernetesAuthBackendConfig } from '@cdktf/provider-vault'

new dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig(scope: Construct, id: string, config?: DataVaultKubernetesAuthBackendConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig">DataVaultKubernetesAuthBackendConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig">DataVaultKubernetesAuthBackendConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetDisableIssValidation">resetDisableIssValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetDisableLocalCaJwt">resetDisableLocalCaJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetKubernetesCaCert">resetKubernetesCaCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetKubernetesHost">resetKubernetesHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetPemKeys">resetPemKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetUseAnnotationsAsAliasMetadata">resetUseAnnotationsAsAliasMetadata</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetBackend"></a>

```typescript
public resetBackend(): void
```

##### `resetDisableIssValidation` <a name="resetDisableIssValidation" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetDisableIssValidation"></a>

```typescript
public resetDisableIssValidation(): void
```

##### `resetDisableLocalCaJwt` <a name="resetDisableLocalCaJwt" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetDisableLocalCaJwt"></a>

```typescript
public resetDisableLocalCaJwt(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetIssuer"></a>

```typescript
public resetIssuer(): void
```

##### `resetKubernetesCaCert` <a name="resetKubernetesCaCert" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetKubernetesCaCert"></a>

```typescript
public resetKubernetesCaCert(): void
```

##### `resetKubernetesHost` <a name="resetKubernetesHost" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetKubernetesHost"></a>

```typescript
public resetKubernetesHost(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPemKeys` <a name="resetPemKeys" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetPemKeys"></a>

```typescript
public resetPemKeys(): void
```

##### `resetUseAnnotationsAsAliasMetadata` <a name="resetUseAnnotationsAsAliasMetadata" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetUseAnnotationsAsAliasMetadata"></a>

```typescript
public resetUseAnnotationsAsAliasMetadata(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultKubernetesAuthBackendConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.isConstruct"></a>

```typescript
import { dataVaultKubernetesAuthBackendConfig } from '@cdktf/provider-vault'

dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.isTerraformElement"></a>

```typescript
import { dataVaultKubernetesAuthBackendConfig } from '@cdktf/provider-vault'

dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.isTerraformDataSource"></a>

```typescript
import { dataVaultKubernetesAuthBackendConfig } from '@cdktf/provider-vault'

dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.generateConfigForImport"></a>

```typescript
import { dataVaultKubernetesAuthBackendConfig } from '@cdktf/provider-vault'

dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataVaultKubernetesAuthBackendConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultKubernetesAuthBackendConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultKubernetesAuthBackendConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/kubernetes_auth_backend_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultKubernetesAuthBackendConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.disableIssValidationInput">disableIssValidationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.disableLocalCaJwtInput">disableLocalCaJwtInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.kubernetesCaCertInput">kubernetesCaCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.kubernetesHostInput">kubernetesHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.pemKeysInput">pemKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.useAnnotationsAsAliasMetadataInput">useAnnotationsAsAliasMetadataInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.disableIssValidation">disableIssValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.disableLocalCaJwt">disableLocalCaJwt</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.kubernetesCaCert">kubernetesCaCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.kubernetesHost">kubernetesHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.pemKeys">pemKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.useAnnotationsAsAliasMetadata">useAnnotationsAsAliasMetadata</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `disableIssValidationInput`<sup>Optional</sup> <a name="disableIssValidationInput" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.disableIssValidationInput"></a>

```typescript
public readonly disableIssValidationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableLocalCaJwtInput`<sup>Optional</sup> <a name="disableLocalCaJwtInput" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.disableLocalCaJwtInput"></a>

```typescript
public readonly disableLocalCaJwtInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `kubernetesCaCertInput`<sup>Optional</sup> <a name="kubernetesCaCertInput" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.kubernetesCaCertInput"></a>

```typescript
public readonly kubernetesCaCertInput: string;
```

- *Type:* string

---

##### `kubernetesHostInput`<sup>Optional</sup> <a name="kubernetesHostInput" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.kubernetesHostInput"></a>

```typescript
public readonly kubernetesHostInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `pemKeysInput`<sup>Optional</sup> <a name="pemKeysInput" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.pemKeysInput"></a>

```typescript
public readonly pemKeysInput: string[];
```

- *Type:* string[]

---

##### `useAnnotationsAsAliasMetadataInput`<sup>Optional</sup> <a name="useAnnotationsAsAliasMetadataInput" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.useAnnotationsAsAliasMetadataInput"></a>

```typescript
public readonly useAnnotationsAsAliasMetadataInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `disableIssValidation`<sup>Required</sup> <a name="disableIssValidation" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.disableIssValidation"></a>

```typescript
public readonly disableIssValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableLocalCaJwt`<sup>Required</sup> <a name="disableLocalCaJwt" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.disableLocalCaJwt"></a>

```typescript
public readonly disableLocalCaJwt: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `kubernetesCaCert`<sup>Required</sup> <a name="kubernetesCaCert" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.kubernetesCaCert"></a>

```typescript
public readonly kubernetesCaCert: string;
```

- *Type:* string

---

##### `kubernetesHost`<sup>Required</sup> <a name="kubernetesHost" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.kubernetesHost"></a>

```typescript
public readonly kubernetesHost: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `pemKeys`<sup>Required</sup> <a name="pemKeys" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.pemKeys"></a>

```typescript
public readonly pemKeys: string[];
```

- *Type:* string[]

---

##### `useAnnotationsAsAliasMetadata`<sup>Required</sup> <a name="useAnnotationsAsAliasMetadata" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.useAnnotationsAsAliasMetadata"></a>

```typescript
public readonly useAnnotationsAsAliasMetadata: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultKubernetesAuthBackendConfigConfig <a name="DataVaultKubernetesAuthBackendConfigConfig" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.Initializer"></a>

```typescript
import { dataVaultKubernetesAuthBackendConfig } from '@cdktf/provider-vault'

const dataVaultKubernetesAuthBackendConfigConfig: dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.backend">backend</a></code> | <code>string</code> | Unique name of the kubernetes backend to configure. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.disableIssValidation">disableIssValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional disable JWT issuer validation. Allows to skip ISS validation. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.disableLocalCaJwt">disableLocalCaJwt</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional disable defaulting to the local CA cert and service account JWT when running in a Kubernetes pod. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/kubernetes_auth_backend_config#id DataVaultKubernetesAuthBackendConfig#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.issuer">issuer</a></code> | <code>string</code> | Optional JWT issuer. If no issuer is specified, kubernetes.io/serviceaccount will be used as the default issuer. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.kubernetesCaCert">kubernetesCaCert</a></code> | <code>string</code> | PEM encoded CA cert for use by the TLS client used to talk with the Kubernetes API. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.kubernetesHost">kubernetesHost</a></code> | <code>string</code> | Host must be a host string, a host:port pair, or a URL to the base of the Kubernetes API server. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.pemKeys">pemKeys</a></code> | <code>string[]</code> | Optional list of PEM-formatted public keys or certificates used to verify the signatures of Kubernetes service account JWTs. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.useAnnotationsAsAliasMetadata">useAnnotationsAsAliasMetadata</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use annotations from the client token's associated service account as alias metadata for the Vault entity. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

Unique name of the kubernetes backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/kubernetes_auth_backend_config#backend DataVaultKubernetesAuthBackendConfig#backend}

---

##### `disableIssValidation`<sup>Optional</sup> <a name="disableIssValidation" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.disableIssValidation"></a>

```typescript
public readonly disableIssValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional disable JWT issuer validation. Allows to skip ISS validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/kubernetes_auth_backend_config#disable_iss_validation DataVaultKubernetesAuthBackendConfig#disable_iss_validation}

---

##### `disableLocalCaJwt`<sup>Optional</sup> <a name="disableLocalCaJwt" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.disableLocalCaJwt"></a>

```typescript
public readonly disableLocalCaJwt: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional disable defaulting to the local CA cert and service account JWT when running in a Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/kubernetes_auth_backend_config#disable_local_ca_jwt DataVaultKubernetesAuthBackendConfig#disable_local_ca_jwt}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/kubernetes_auth_backend_config#id DataVaultKubernetesAuthBackendConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

Optional JWT issuer. If no issuer is specified, kubernetes.io/serviceaccount will be used as the default issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/kubernetes_auth_backend_config#issuer DataVaultKubernetesAuthBackendConfig#issuer}

---

##### `kubernetesCaCert`<sup>Optional</sup> <a name="kubernetesCaCert" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.kubernetesCaCert"></a>

```typescript
public readonly kubernetesCaCert: string;
```

- *Type:* string

PEM encoded CA cert for use by the TLS client used to talk with the Kubernetes API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/kubernetes_auth_backend_config#kubernetes_ca_cert DataVaultKubernetesAuthBackendConfig#kubernetes_ca_cert}

---

##### `kubernetesHost`<sup>Optional</sup> <a name="kubernetesHost" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.kubernetesHost"></a>

```typescript
public readonly kubernetesHost: string;
```

- *Type:* string

Host must be a host string, a host:port pair, or a URL to the base of the Kubernetes API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/kubernetes_auth_backend_config#kubernetes_host DataVaultKubernetesAuthBackendConfig#kubernetes_host}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/kubernetes_auth_backend_config#namespace DataVaultKubernetesAuthBackendConfig#namespace}

---

##### `pemKeys`<sup>Optional</sup> <a name="pemKeys" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.pemKeys"></a>

```typescript
public readonly pemKeys: string[];
```

- *Type:* string[]

Optional list of PEM-formatted public keys or certificates used to verify the signatures of Kubernetes service account JWTs.

If a certificate is given, its public key will be extracted. Not every installation of Kubernetes exposes these keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/kubernetes_auth_backend_config#pem_keys DataVaultKubernetesAuthBackendConfig#pem_keys}

---

##### `useAnnotationsAsAliasMetadata`<sup>Optional</sup> <a name="useAnnotationsAsAliasMetadata" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.useAnnotationsAsAliasMetadata"></a>

```typescript
public readonly useAnnotationsAsAliasMetadata: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use annotations from the client token's associated service account as alias metadata for the Vault entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/kubernetes_auth_backend_config#use_annotations_as_alias_metadata DataVaultKubernetesAuthBackendConfig#use_annotations_as_alias_metadata}

---



