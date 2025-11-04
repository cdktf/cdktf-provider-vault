# `dataVaultTransitSign` Submodule <a name="`dataVaultTransitSign` Submodule" id="@cdktf/provider-vault.dataVaultTransitSign"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransitSign <a name="DataVaultTransitSign" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/data-sources/transit_sign vault_transit_sign}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultTransitSign(Construct Scope, string Id, DataVaultTransitSignConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig">DataVaultTransitSignConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig">DataVaultTransitSignConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetBatchInput">ResetBatchInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetBatchResults">ResetBatchResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetContext">ResetContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetHashAlgorithm">ResetHashAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetInput">ResetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetKeyVersion">ResetKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetMarshalingAlgorithm">ResetMarshalingAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetPrehashed">ResetPrehashed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetReference">ResetReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetSaltLength">ResetSaltLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetSignature">ResetSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetSignatureAlgorithm">ResetSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetSignatureContext">ResetSignatureContext</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetBatchInput` <a name="ResetBatchInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetBatchInput"></a>

```csharp
private void ResetBatchInput()
```

##### `ResetBatchResults` <a name="ResetBatchResults" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetBatchResults"></a>

```csharp
private void ResetBatchResults()
```

##### `ResetContext` <a name="ResetContext" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetContext"></a>

```csharp
private void ResetContext()
```

##### `ResetHashAlgorithm` <a name="ResetHashAlgorithm" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetHashAlgorithm"></a>

```csharp
private void ResetHashAlgorithm()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInput` <a name="ResetInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetInput"></a>

```csharp
private void ResetInput()
```

##### `ResetKeyVersion` <a name="ResetKeyVersion" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetKeyVersion"></a>

```csharp
private void ResetKeyVersion()
```

##### `ResetMarshalingAlgorithm` <a name="ResetMarshalingAlgorithm" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetMarshalingAlgorithm"></a>

```csharp
private void ResetMarshalingAlgorithm()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPrehashed` <a name="ResetPrehashed" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetPrehashed"></a>

```csharp
private void ResetPrehashed()
```

##### `ResetReference` <a name="ResetReference" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetReference"></a>

```csharp
private void ResetReference()
```

##### `ResetSaltLength` <a name="ResetSaltLength" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetSaltLength"></a>

```csharp
private void ResetSaltLength()
```

##### `ResetSignature` <a name="ResetSignature" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetSignature"></a>

```csharp
private void ResetSignature()
```

##### `ResetSignatureAlgorithm` <a name="ResetSignatureAlgorithm" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetSignatureAlgorithm"></a>

```csharp
private void ResetSignatureAlgorithm()
```

##### `ResetSignatureContext` <a name="ResetSignatureContext" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetSignatureContext"></a>

```csharp
private void ResetSignatureContext()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultTransitSign resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultTransitSign.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultTransitSign.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultTransitSign.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultTransitSign.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataVaultTransitSign resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultTransitSign to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultTransitSign that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/data-sources/transit_sign#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultTransitSign to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.batchInputInput">BatchInputInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.batchResultsInput">BatchResultsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.contextInput">ContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.hashAlgorithmInput">HashAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.inputInput">InputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.keyVersionInput">KeyVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.marshalingAlgorithmInput">MarshalingAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.prehashedInput">PrehashedInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.referenceInput">ReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.saltLengthInput">SaltLengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signatureAlgorithmInput">SignatureAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signatureContextInput">SignatureContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signatureInput">SignatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.batchInput">BatchInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.batchResults">BatchResults</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.context">Context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.hashAlgorithm">HashAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.input">Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.keyVersion">KeyVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.marshalingAlgorithm">MarshalingAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.prehashed">Prehashed</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.reference">Reference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.saltLength">SaltLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signature">Signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signatureContext">SignatureContext</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BatchInputInput`<sup>Optional</sup> <a name="BatchInputInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.batchInputInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string>[] BatchInputInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string>[]

---

##### `BatchResultsInput`<sup>Optional</sup> <a name="BatchResultsInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.batchResultsInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string>[] BatchResultsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string>[]

---

##### `ContextInput`<sup>Optional</sup> <a name="ContextInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.contextInput"></a>

```csharp
public string ContextInput { get; }
```

- *Type:* string

---

##### `HashAlgorithmInput`<sup>Optional</sup> <a name="HashAlgorithmInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.hashAlgorithmInput"></a>

```csharp
public string HashAlgorithmInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.inputInput"></a>

```csharp
public string InputInput { get; }
```

- *Type:* string

---

##### `KeyVersionInput`<sup>Optional</sup> <a name="KeyVersionInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.keyVersionInput"></a>

```csharp
public double KeyVersionInput { get; }
```

- *Type:* double

---

##### `MarshalingAlgorithmInput`<sup>Optional</sup> <a name="MarshalingAlgorithmInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.marshalingAlgorithmInput"></a>

```csharp
public string MarshalingAlgorithmInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PrehashedInput`<sup>Optional</sup> <a name="PrehashedInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.prehashedInput"></a>

```csharp
public bool|IResolvable PrehashedInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ReferenceInput`<sup>Optional</sup> <a name="ReferenceInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.referenceInput"></a>

```csharp
public string ReferenceInput { get; }
```

- *Type:* string

---

##### `SaltLengthInput`<sup>Optional</sup> <a name="SaltLengthInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.saltLengthInput"></a>

```csharp
public string SaltLengthInput { get; }
```

- *Type:* string

---

##### `SignatureAlgorithmInput`<sup>Optional</sup> <a name="SignatureAlgorithmInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signatureAlgorithmInput"></a>

```csharp
public string SignatureAlgorithmInput { get; }
```

- *Type:* string

---

##### `SignatureContextInput`<sup>Optional</sup> <a name="SignatureContextInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signatureContextInput"></a>

```csharp
public string SignatureContextInput { get; }
```

- *Type:* string

---

##### `SignatureInput`<sup>Optional</sup> <a name="SignatureInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signatureInput"></a>

```csharp
public string SignatureInput { get; }
```

- *Type:* string

---

##### `BatchInput`<sup>Required</sup> <a name="BatchInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.batchInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string>[] BatchInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string>[]

---

##### `BatchResults`<sup>Required</sup> <a name="BatchResults" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.batchResults"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string>[] BatchResults { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string>[]

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.context"></a>

```csharp
public string Context { get; }
```

- *Type:* string

---

##### `HashAlgorithm`<sup>Required</sup> <a name="HashAlgorithm" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.hashAlgorithm"></a>

```csharp
public string HashAlgorithm { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.input"></a>

```csharp
public string Input { get; }
```

- *Type:* string

---

##### `KeyVersion`<sup>Required</sup> <a name="KeyVersion" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.keyVersion"></a>

```csharp
public double KeyVersion { get; }
```

- *Type:* double

---

##### `MarshalingAlgorithm`<sup>Required</sup> <a name="MarshalingAlgorithm" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.marshalingAlgorithm"></a>

```csharp
public string MarshalingAlgorithm { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Prehashed`<sup>Required</sup> <a name="Prehashed" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.prehashed"></a>

```csharp
public bool|IResolvable Prehashed { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Reference`<sup>Required</sup> <a name="Reference" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.reference"></a>

```csharp
public string Reference { get; }
```

- *Type:* string

---

##### `SaltLength`<sup>Required</sup> <a name="SaltLength" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.saltLength"></a>

```csharp
public string SaltLength { get; }
```

- *Type:* string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signature"></a>

```csharp
public string Signature { get; }
```

- *Type:* string

---

##### `SignatureAlgorithm`<sup>Required</sup> <a name="SignatureAlgorithm" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signatureAlgorithm"></a>

```csharp
public string SignatureAlgorithm { get; }
```

- *Type:* string

---

##### `SignatureContext`<sup>Required</sup> <a name="SignatureContext" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signatureContext"></a>

```csharp
public string SignatureContext { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransitSignConfig <a name="DataVaultTransitSignConfig" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultTransitSignConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Path,
    IResolvable|System.Collections.Generic.IDictionary<string, string>[] BatchInput = null,
    IResolvable|System.Collections.Generic.IDictionary<string, string>[] BatchResults = null,
    string Context = null,
    string HashAlgorithm = null,
    string Id = null,
    string Input = null,
    double KeyVersion = null,
    string MarshalingAlgorithm = null,
    string Namespace = null,
    bool|IResolvable Prehashed = null,
    string Reference = null,
    string SaltLength = null,
    string Signature = null,
    string SignatureAlgorithm = null,
    string SignatureContext = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.name">Name</a></code> | <code>string</code> | Name of the signing key to use. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.path">Path</a></code> | <code>string</code> | The Transit secret backend the key belongs to. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.batchInput">BatchInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string>[]</code> | Specifies a list of items for processing. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.batchResults">BatchResults</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string>[]</code> | The results returned from Vault if using batch_input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.context">Context</a></code> | <code>string</code> | Base64 encoded context for key derivation. Required if key derivation is enabled; currently only available with ed25519 keys. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.hashAlgorithm">HashAlgorithm</a></code> | <code>string</code> | Specifies the hash algorithm to use for supporting key types (notably, not including ed25519 which specifies its own hash algorithm). |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/data-sources/transit_sign#id DataVaultTransitSign#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.input">Input</a></code> | <code>string</code> | Specifies the base64 encoded input data. One of input or batch_input must be supplied. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.keyVersion">KeyVersion</a></code> | <code>double</code> | The version of the key to use. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.marshalingAlgorithm">MarshalingAlgorithm</a></code> | <code>string</code> | Specifies the way in which the signature should be marshaled. This currently only applies to ECDSA keys. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.prehashed">Prehashed</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Set to true when the input is already hashed. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.reference">Reference</a></code> | <code>string</code> | A user-supplied string that will be present in the reference field on the corresponding batch_results item in the response, to assist in understanding which result corresponds to a particular input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.saltLength">SaltLength</a></code> | <code>string</code> | The salt length used to sign. This currently only applies to the RSA PSS signature scheme. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.signature">Signature</a></code> | <code>string</code> | The signature returned from Vault if using input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>string</code> | When using a RSA key, specifies the RSA signature algorithm to use for signing. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.signatureContext">SignatureContext</a></code> | <code>string</code> | Base64 encoded context for Ed25519ctx and Ed25519ph signatures. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the signing key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/data-sources/transit_sign#name DataVaultTransitSign#name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The Transit secret backend the key belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/data-sources/transit_sign#path DataVaultTransitSign#path}

---

##### `BatchInput`<sup>Optional</sup> <a name="BatchInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.batchInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string>[] BatchInput { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string>[]

Specifies a list of items for processing.

When this parameter is set, any supplied 'input' or 'context' parameters will be ignored. Responses are returned in the 'batch_results' array component of the 'data' element of the response. Any batch output will preserve the order of the batch input. If the input data value of an item is invalid, the corresponding item in the 'batch_results' will have the key 'error' with a value describing the error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/data-sources/transit_sign#batch_input DataVaultTransitSign#batch_input}

---

##### `BatchResults`<sup>Optional</sup> <a name="BatchResults" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.batchResults"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string>[] BatchResults { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string>[]

The results returned from Vault if using batch_input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/data-sources/transit_sign#batch_results DataVaultTransitSign#batch_results}

---

##### `Context`<sup>Optional</sup> <a name="Context" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.context"></a>

```csharp
public string Context { get; set; }
```

- *Type:* string

Base64 encoded context for key derivation. Required if key derivation is enabled; currently only available with ed25519 keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/data-sources/transit_sign#context DataVaultTransitSign#context}

---

##### `HashAlgorithm`<sup>Optional</sup> <a name="HashAlgorithm" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.hashAlgorithm"></a>

```csharp
public string HashAlgorithm { get; set; }
```

- *Type:* string

Specifies the hash algorithm to use for supporting key types (notably, not including ed25519 which specifies its own hash algorithm).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/data-sources/transit_sign#hash_algorithm DataVaultTransitSign#hash_algorithm}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/data-sources/transit_sign#id DataVaultTransitSign#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.input"></a>

```csharp
public string Input { get; set; }
```

- *Type:* string

Specifies the base64 encoded input data. One of input or batch_input must be supplied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/data-sources/transit_sign#input DataVaultTransitSign#input}

---

##### `KeyVersion`<sup>Optional</sup> <a name="KeyVersion" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.keyVersion"></a>

```csharp
public double KeyVersion { get; set; }
```

- *Type:* double

The version of the key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/data-sources/transit_sign#key_version DataVaultTransitSign#key_version}

---

##### `MarshalingAlgorithm`<sup>Optional</sup> <a name="MarshalingAlgorithm" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.marshalingAlgorithm"></a>

```csharp
public string MarshalingAlgorithm { get; set; }
```

- *Type:* string

Specifies the way in which the signature should be marshaled. This currently only applies to ECDSA keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/data-sources/transit_sign#marshaling_algorithm DataVaultTransitSign#marshaling_algorithm}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/data-sources/transit_sign#namespace DataVaultTransitSign#namespace}

---

##### `Prehashed`<sup>Optional</sup> <a name="Prehashed" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.prehashed"></a>

```csharp
public bool|IResolvable Prehashed { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Set to true when the input is already hashed.

If the key type is rsa-2048, rsa-3072 or rsa-4096, then the algorithm used to hash the input should be indicated by the hash_algorithm parameter. Just as the value to sign should be the base64-encoded representation of the exact binary data you want signed, when set, input is expected to be base64-encoded binary hashed data, not hex-formatted. (As an example, on the command line, you could generate a suitable input via openssl dgst -sha256 -binary | base64.)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/data-sources/transit_sign#prehashed DataVaultTransitSign#prehashed}

---

##### `Reference`<sup>Optional</sup> <a name="Reference" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.reference"></a>

```csharp
public string Reference { get; set; }
```

- *Type:* string

A user-supplied string that will be present in the reference field on the corresponding batch_results item in the response, to assist in understanding which result corresponds to a particular input.

Only valid on batch requests when using ‘batch_input’ below.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/data-sources/transit_sign#reference DataVaultTransitSign#reference}

---

##### `SaltLength`<sup>Optional</sup> <a name="SaltLength" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.saltLength"></a>

```csharp
public string SaltLength { get; set; }
```

- *Type:* string

The salt length used to sign. This currently only applies to the RSA PSS signature scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/data-sources/transit_sign#salt_length DataVaultTransitSign#salt_length}

---

##### `Signature`<sup>Optional</sup> <a name="Signature" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.signature"></a>

```csharp
public string Signature { get; set; }
```

- *Type:* string

The signature returned from Vault if using input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/data-sources/transit_sign#signature DataVaultTransitSign#signature}

---

##### `SignatureAlgorithm`<sup>Optional</sup> <a name="SignatureAlgorithm" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.signatureAlgorithm"></a>

```csharp
public string SignatureAlgorithm { get; set; }
```

- *Type:* string

When using a RSA key, specifies the RSA signature algorithm to use for signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/data-sources/transit_sign#signature_algorithm DataVaultTransitSign#signature_algorithm}

---

##### `SignatureContext`<sup>Optional</sup> <a name="SignatureContext" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.signatureContext"></a>

```csharp
public string SignatureContext { get; set; }
```

- *Type:* string

Base64 encoded context for Ed25519ctx and Ed25519ph signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/data-sources/transit_sign#signature_context DataVaultTransitSign#signature_context}

---



