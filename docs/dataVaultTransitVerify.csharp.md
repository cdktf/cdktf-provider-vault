# `dataVaultTransitVerify` Submodule <a name="`dataVaultTransitVerify` Submodule" id="@cdktf/provider-vault.dataVaultTransitVerify"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransitVerify <a name="DataVaultTransitVerify" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/transit_verify vault_transit_verify}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultTransitVerify(Construct Scope, string Id, DataVaultTransitVerifyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig">DataVaultTransitVerifyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig">DataVaultTransitVerifyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetBatchInput">ResetBatchInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetBatchResults">ResetBatchResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetCmac">ResetCmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetContext">ResetContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetHashAlgorithm">ResetHashAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetHmac">ResetHmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetInput">ResetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetMarshalingAlgorithm">ResetMarshalingAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetPrehashed">ResetPrehashed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetReference">ResetReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSaltLength">ResetSaltLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSignature">ResetSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSignatureAlgorithm">ResetSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSignatureContext">ResetSignatureContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetValid">ResetValid</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetBatchInput` <a name="ResetBatchInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetBatchInput"></a>

```csharp
private void ResetBatchInput()
```

##### `ResetBatchResults` <a name="ResetBatchResults" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetBatchResults"></a>

```csharp
private void ResetBatchResults()
```

##### `ResetCmac` <a name="ResetCmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetCmac"></a>

```csharp
private void ResetCmac()
```

##### `ResetContext` <a name="ResetContext" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetContext"></a>

```csharp
private void ResetContext()
```

##### `ResetHashAlgorithm` <a name="ResetHashAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetHashAlgorithm"></a>

```csharp
private void ResetHashAlgorithm()
```

##### `ResetHmac` <a name="ResetHmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetHmac"></a>

```csharp
private void ResetHmac()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInput` <a name="ResetInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetInput"></a>

```csharp
private void ResetInput()
```

##### `ResetMarshalingAlgorithm` <a name="ResetMarshalingAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetMarshalingAlgorithm"></a>

```csharp
private void ResetMarshalingAlgorithm()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPrehashed` <a name="ResetPrehashed" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetPrehashed"></a>

```csharp
private void ResetPrehashed()
```

##### `ResetReference` <a name="ResetReference" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetReference"></a>

```csharp
private void ResetReference()
```

##### `ResetSaltLength` <a name="ResetSaltLength" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSaltLength"></a>

```csharp
private void ResetSaltLength()
```

##### `ResetSignature` <a name="ResetSignature" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSignature"></a>

```csharp
private void ResetSignature()
```

##### `ResetSignatureAlgorithm` <a name="ResetSignatureAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSignatureAlgorithm"></a>

```csharp
private void ResetSignatureAlgorithm()
```

##### `ResetSignatureContext` <a name="ResetSignatureContext" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSignatureContext"></a>

```csharp
private void ResetSignatureContext()
```

##### `ResetValid` <a name="ResetValid" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetValid"></a>

```csharp
private void ResetValid()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultTransitVerify resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultTransitVerify.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultTransitVerify.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultTransitVerify.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultTransitVerify.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataVaultTransitVerify resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultTransitVerify to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultTransitVerify that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/transit_verify#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultTransitVerify to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchInputInput">BatchInputInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchResultsInput">BatchResultsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.cmacInput">CmacInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.contextInput">ContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hashAlgorithmInput">HashAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hmacInput">HmacInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.inputInput">InputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.marshalingAlgorithmInput">MarshalingAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.prehashedInput">PrehashedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.referenceInput">ReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.saltLengthInput">SaltLengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureAlgorithmInput">SignatureAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureContextInput">SignatureContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureInput">SignatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.validInput">ValidInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchInput">BatchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchResults">BatchResults</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.cmac">Cmac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.context">Context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hashAlgorithm">HashAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hmac">Hmac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.input">Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.marshalingAlgorithm">MarshalingAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.prehashed">Prehashed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.reference">Reference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.saltLength">SaltLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signature">Signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureContext">SignatureContext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.valid">Valid</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BatchInputInput`<sup>Optional</sup> <a name="BatchInputInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchInputInput"></a>

```csharp
public object BatchInputInput { get; }
```

- *Type:* object

---

##### `BatchResultsInput`<sup>Optional</sup> <a name="BatchResultsInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchResultsInput"></a>

```csharp
public object BatchResultsInput { get; }
```

- *Type:* object

---

##### `CmacInput`<sup>Optional</sup> <a name="CmacInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.cmacInput"></a>

```csharp
public string CmacInput { get; }
```

- *Type:* string

---

##### `ContextInput`<sup>Optional</sup> <a name="ContextInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.contextInput"></a>

```csharp
public string ContextInput { get; }
```

- *Type:* string

---

##### `HashAlgorithmInput`<sup>Optional</sup> <a name="HashAlgorithmInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hashAlgorithmInput"></a>

```csharp
public string HashAlgorithmInput { get; }
```

- *Type:* string

---

##### `HmacInput`<sup>Optional</sup> <a name="HmacInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hmacInput"></a>

```csharp
public string HmacInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.inputInput"></a>

```csharp
public string InputInput { get; }
```

- *Type:* string

---

##### `MarshalingAlgorithmInput`<sup>Optional</sup> <a name="MarshalingAlgorithmInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.marshalingAlgorithmInput"></a>

```csharp
public string MarshalingAlgorithmInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PrehashedInput`<sup>Optional</sup> <a name="PrehashedInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.prehashedInput"></a>

```csharp
public object PrehashedInput { get; }
```

- *Type:* object

---

##### `ReferenceInput`<sup>Optional</sup> <a name="ReferenceInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.referenceInput"></a>

```csharp
public string ReferenceInput { get; }
```

- *Type:* string

---

##### `SaltLengthInput`<sup>Optional</sup> <a name="SaltLengthInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.saltLengthInput"></a>

```csharp
public string SaltLengthInput { get; }
```

- *Type:* string

---

##### `SignatureAlgorithmInput`<sup>Optional</sup> <a name="SignatureAlgorithmInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureAlgorithmInput"></a>

```csharp
public string SignatureAlgorithmInput { get; }
```

- *Type:* string

---

##### `SignatureContextInput`<sup>Optional</sup> <a name="SignatureContextInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureContextInput"></a>

```csharp
public string SignatureContextInput { get; }
```

- *Type:* string

---

##### `SignatureInput`<sup>Optional</sup> <a name="SignatureInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureInput"></a>

```csharp
public string SignatureInput { get; }
```

- *Type:* string

---

##### `ValidInput`<sup>Optional</sup> <a name="ValidInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.validInput"></a>

```csharp
public object ValidInput { get; }
```

- *Type:* object

---

##### `BatchInput`<sup>Required</sup> <a name="BatchInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchInput"></a>

```csharp
public object BatchInput { get; }
```

- *Type:* object

---

##### `BatchResults`<sup>Required</sup> <a name="BatchResults" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchResults"></a>

```csharp
public object BatchResults { get; }
```

- *Type:* object

---

##### `Cmac`<sup>Required</sup> <a name="Cmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.cmac"></a>

```csharp
public string Cmac { get; }
```

- *Type:* string

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.context"></a>

```csharp
public string Context { get; }
```

- *Type:* string

---

##### `HashAlgorithm`<sup>Required</sup> <a name="HashAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hashAlgorithm"></a>

```csharp
public string HashAlgorithm { get; }
```

- *Type:* string

---

##### `Hmac`<sup>Required</sup> <a name="Hmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hmac"></a>

```csharp
public string Hmac { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.input"></a>

```csharp
public string Input { get; }
```

- *Type:* string

---

##### `MarshalingAlgorithm`<sup>Required</sup> <a name="MarshalingAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.marshalingAlgorithm"></a>

```csharp
public string MarshalingAlgorithm { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Prehashed`<sup>Required</sup> <a name="Prehashed" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.prehashed"></a>

```csharp
public object Prehashed { get; }
```

- *Type:* object

---

##### `Reference`<sup>Required</sup> <a name="Reference" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.reference"></a>

```csharp
public string Reference { get; }
```

- *Type:* string

---

##### `SaltLength`<sup>Required</sup> <a name="SaltLength" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.saltLength"></a>

```csharp
public string SaltLength { get; }
```

- *Type:* string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signature"></a>

```csharp
public string Signature { get; }
```

- *Type:* string

---

##### `SignatureAlgorithm`<sup>Required</sup> <a name="SignatureAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureAlgorithm"></a>

```csharp
public string SignatureAlgorithm { get; }
```

- *Type:* string

---

##### `SignatureContext`<sup>Required</sup> <a name="SignatureContext" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureContext"></a>

```csharp
public string SignatureContext { get; }
```

- *Type:* string

---

##### `Valid`<sup>Required</sup> <a name="Valid" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.valid"></a>

```csharp
public object Valid { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransitVerifyConfig <a name="DataVaultTransitVerifyConfig" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultTransitVerifyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Path,
    object BatchInput = null,
    object BatchResults = null,
    string Cmac = null,
    string Context = null,
    string HashAlgorithm = null,
    string Hmac = null,
    string Id = null,
    string Input = null,
    string MarshalingAlgorithm = null,
    string Namespace = null,
    object Prehashed = null,
    string Reference = null,
    string SaltLength = null,
    string Signature = null,
    string SignatureAlgorithm = null,
    string SignatureContext = null,
    object Valid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.name">Name</a></code> | <code>string</code> | Specifies the name of the encryption key that was used to generate the signature or HMAC. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.path">Path</a></code> | <code>string</code> | The Transit secret backend the key belongs to. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.batchInput">BatchInput</a></code> | <code>object</code> | Specifies a list of items for processing. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.batchResults">BatchResults</a></code> | <code>object</code> | The results returned from Vault if using batch_input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.cmac">Cmac</a></code> | <code>string</code> | (Enterprise only) Specifies the signature output from the /transit/cmac function. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.context">Context</a></code> | <code>string</code> | Base64 encoded context for key derivation. Required if key derivation is enabled; currently only available with ed25519 keys. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.hashAlgorithm">HashAlgorithm</a></code> | <code>string</code> | Specifies the hash algorithm to use. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.hmac">Hmac</a></code> | <code>string</code> | Specifies the signature output from the /transit/hmac function. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/transit_verify#id DataVaultTransitVerify#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.input">Input</a></code> | <code>string</code> | Specifies the base64 encoded input data. One of input or batch_input must be supplied. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.marshalingAlgorithm">MarshalingAlgorithm</a></code> | <code>string</code> | Specifies the way in which the signature was originally marshaled. This currently only applies to ECDSA keys. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.prehashed">Prehashed</a></code> | <code>object</code> | Set to true when the input is already hashed. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.reference">Reference</a></code> | <code>string</code> | A user-supplied string that will be present in the reference field on the corresponding batch_results item in the response, to assist in understanding which result corresponds to a particular input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.saltLength">SaltLength</a></code> | <code>string</code> | The salt length used to sign. This currently only applies to the RSA PSS signature scheme. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.signature">Signature</a></code> | <code>string</code> | Specifies the signature output from the /transit/sign function. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>string</code> | When using a RSA key, specifies the RSA signature algorithm to use for signature verification. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.signatureContext">SignatureContext</a></code> | <code>string</code> | Base64 encoded context for Ed25519ctx and Ed25519ph signatures. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.valid">Valid</a></code> | <code>object</code> | Indicates whether verification succeeded. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the name of the encryption key that was used to generate the signature or HMAC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/transit_verify#name DataVaultTransitVerify#name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The Transit secret backend the key belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/transit_verify#path DataVaultTransitVerify#path}

---

##### `BatchInput`<sup>Optional</sup> <a name="BatchInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.batchInput"></a>

```csharp
public object BatchInput { get; set; }
```

- *Type:* object

Specifies a list of items for processing.

When this parameter is set, any supplied 'input' or 'context' parameters will be ignored. Responses are returned in the 'batch_results' array component of the 'data' element of the response. Any batch output will preserve the order of the batch input. If the input data value of an item is invalid, the corresponding item in the 'batch_results' will have the key 'error' with a value describing the error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/transit_verify#batch_input DataVaultTransitVerify#batch_input}

---

##### `BatchResults`<sup>Optional</sup> <a name="BatchResults" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.batchResults"></a>

```csharp
public object BatchResults { get; set; }
```

- *Type:* object

The results returned from Vault if using batch_input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/transit_verify#batch_results DataVaultTransitVerify#batch_results}

---

##### `Cmac`<sup>Optional</sup> <a name="Cmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.cmac"></a>

```csharp
public string Cmac { get; set; }
```

- *Type:* string

(Enterprise only) Specifies the signature output from the /transit/cmac function.

One of the following arguments must be supplied signature, hmac or cmac.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/transit_verify#cmac DataVaultTransitVerify#cmac}

---

##### `Context`<sup>Optional</sup> <a name="Context" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.context"></a>

```csharp
public string Context { get; set; }
```

- *Type:* string

Base64 encoded context for key derivation. Required if key derivation is enabled; currently only available with ed25519 keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/transit_verify#context DataVaultTransitVerify#context}

---

##### `HashAlgorithm`<sup>Optional</sup> <a name="HashAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.hashAlgorithm"></a>

```csharp
public string HashAlgorithm { get; set; }
```

- *Type:* string

Specifies the hash algorithm to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/transit_verify#hash_algorithm DataVaultTransitVerify#hash_algorithm}

---

##### `Hmac`<sup>Optional</sup> <a name="Hmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.hmac"></a>

```csharp
public string Hmac { get; set; }
```

- *Type:* string

Specifies the signature output from the /transit/hmac function.

One of the following arguments must be supplied signature, hmac or cmac.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/transit_verify#hmac DataVaultTransitVerify#hmac}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/transit_verify#id DataVaultTransitVerify#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.input"></a>

```csharp
public string Input { get; set; }
```

- *Type:* string

Specifies the base64 encoded input data. One of input or batch_input must be supplied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/transit_verify#input DataVaultTransitVerify#input}

---

##### `MarshalingAlgorithm`<sup>Optional</sup> <a name="MarshalingAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.marshalingAlgorithm"></a>

```csharp
public string MarshalingAlgorithm { get; set; }
```

- *Type:* string

Specifies the way in which the signature was originally marshaled. This currently only applies to ECDSA keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/transit_verify#marshaling_algorithm DataVaultTransitVerify#marshaling_algorithm}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/transit_verify#namespace DataVaultTransitVerify#namespace}

---

##### `Prehashed`<sup>Optional</sup> <a name="Prehashed" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.prehashed"></a>

```csharp
public object Prehashed { get; set; }
```

- *Type:* object

Set to true when the input is already hashed.

If the key type is rsa-2048, rsa-3072 or rsa-4096, then the algorithm used to hash the input should be indicated by the hash_algorithm parameter. Just as the value to sign should be the base64-encoded representation of the exact binary data you want signed, when set, input is expected to be base64-encoded binary hashed data, not hex-formatted. (As an example, on the command line, you could generate a suitable input via openssl dgst -sha256 -binary | base64.)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/transit_verify#prehashed DataVaultTransitVerify#prehashed}

---

##### `Reference`<sup>Optional</sup> <a name="Reference" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.reference"></a>

```csharp
public string Reference { get; set; }
```

- *Type:* string

A user-supplied string that will be present in the reference field on the corresponding batch_results item in the response, to assist in understanding which result corresponds to a particular input.

Only valid on batch requests when using ‘batch_input’ below.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/transit_verify#reference DataVaultTransitVerify#reference}

---

##### `SaltLength`<sup>Optional</sup> <a name="SaltLength" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.saltLength"></a>

```csharp
public string SaltLength { get; set; }
```

- *Type:* string

The salt length used to sign. This currently only applies to the RSA PSS signature scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/transit_verify#salt_length DataVaultTransitVerify#salt_length}

---

##### `Signature`<sup>Optional</sup> <a name="Signature" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.signature"></a>

```csharp
public string Signature { get; set; }
```

- *Type:* string

Specifies the signature output from the /transit/sign function.

One of the following arguments must be supplied signature, hmac or cmac.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/transit_verify#signature DataVaultTransitVerify#signature}

---

##### `SignatureAlgorithm`<sup>Optional</sup> <a name="SignatureAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.signatureAlgorithm"></a>

```csharp
public string SignatureAlgorithm { get; set; }
```

- *Type:* string

When using a RSA key, specifies the RSA signature algorithm to use for signature verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/transit_verify#signature_algorithm DataVaultTransitVerify#signature_algorithm}

---

##### `SignatureContext`<sup>Optional</sup> <a name="SignatureContext" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.signatureContext"></a>

```csharp
public string SignatureContext { get; set; }
```

- *Type:* string

Base64 encoded context for Ed25519ctx and Ed25519ph signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/transit_verify#signature_context DataVaultTransitVerify#signature_context}

---

##### `Valid`<sup>Optional</sup> <a name="Valid" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.valid"></a>

```csharp
public object Valid { get; set; }
```

- *Type:* object

Indicates whether verification succeeded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/transit_verify#valid DataVaultTransitVerify#valid}

---



