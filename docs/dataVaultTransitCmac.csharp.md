# `dataVaultTransitCmac` Submodule <a name="`dataVaultTransitCmac` Submodule" id="@cdktf/provider-vault.dataVaultTransitCmac"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransitCmac <a name="DataVaultTransitCmac" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac vault_transit_cmac}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultTransitCmac(Construct Scope, string Id, DataVaultTransitCmacConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig">DataVaultTransitCmacConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig">DataVaultTransitCmacConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetBatchInput">ResetBatchInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetBatchResults">ResetBatchResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetCmac">ResetCmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetInput">ResetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetKeyVersion">ResetKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetMacLength">ResetMacLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetUrlMacLength">ResetUrlMacLength</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetBatchInput` <a name="ResetBatchInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetBatchInput"></a>

```csharp
private void ResetBatchInput()
```

##### `ResetBatchResults` <a name="ResetBatchResults" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetBatchResults"></a>

```csharp
private void ResetBatchResults()
```

##### `ResetCmac` <a name="ResetCmac" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetCmac"></a>

```csharp
private void ResetCmac()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInput` <a name="ResetInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetInput"></a>

```csharp
private void ResetInput()
```

##### `ResetKeyVersion` <a name="ResetKeyVersion" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetKeyVersion"></a>

```csharp
private void ResetKeyVersion()
```

##### `ResetMacLength` <a name="ResetMacLength" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetMacLength"></a>

```csharp
private void ResetMacLength()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetUrlMacLength` <a name="ResetUrlMacLength" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetUrlMacLength"></a>

```csharp
private void ResetUrlMacLength()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultTransitCmac resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultTransitCmac.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultTransitCmac.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultTransitCmac.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultTransitCmac.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataVaultTransitCmac resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultTransitCmac to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultTransitCmac that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultTransitCmac to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.batchInputInput">BatchInputInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.batchResultsInput">BatchResultsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.cmacInput">CmacInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.inputInput">InputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.keyVersionInput">KeyVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.macLengthInput">MacLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.urlMacLengthInput">UrlMacLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.batchInput">BatchInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.batchResults">BatchResults</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.cmac">Cmac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.input">Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.keyVersion">KeyVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.macLength">MacLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.urlMacLength">UrlMacLength</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BatchInputInput`<sup>Optional</sup> <a name="BatchInputInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.batchInputInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string>[] BatchInputInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string>[]

---

##### `BatchResultsInput`<sup>Optional</sup> <a name="BatchResultsInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.batchResultsInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string>[] BatchResultsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string>[]

---

##### `CmacInput`<sup>Optional</sup> <a name="CmacInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.cmacInput"></a>

```csharp
public string CmacInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.inputInput"></a>

```csharp
public string InputInput { get; }
```

- *Type:* string

---

##### `KeyVersionInput`<sup>Optional</sup> <a name="KeyVersionInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.keyVersionInput"></a>

```csharp
public double KeyVersionInput { get; }
```

- *Type:* double

---

##### `MacLengthInput`<sup>Optional</sup> <a name="MacLengthInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.macLengthInput"></a>

```csharp
public double MacLengthInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `UrlMacLengthInput`<sup>Optional</sup> <a name="UrlMacLengthInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.urlMacLengthInput"></a>

```csharp
public double UrlMacLengthInput { get; }
```

- *Type:* double

---

##### `BatchInput`<sup>Required</sup> <a name="BatchInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.batchInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string>[] BatchInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string>[]

---

##### `BatchResults`<sup>Required</sup> <a name="BatchResults" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.batchResults"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string>[] BatchResults { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string>[]

---

##### `Cmac`<sup>Required</sup> <a name="Cmac" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.cmac"></a>

```csharp
public string Cmac { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.input"></a>

```csharp
public string Input { get; }
```

- *Type:* string

---

##### `KeyVersion`<sup>Required</sup> <a name="KeyVersion" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.keyVersion"></a>

```csharp
public double KeyVersion { get; }
```

- *Type:* double

---

##### `MacLength`<sup>Required</sup> <a name="MacLength" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.macLength"></a>

```csharp
public double MacLength { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `UrlMacLength`<sup>Required</sup> <a name="UrlMacLength" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.urlMacLength"></a>

```csharp
public double UrlMacLength { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransitCmacConfig <a name="DataVaultTransitCmacConfig" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultTransitCmacConfig {
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
    string Cmac = null,
    string Id = null,
    string Input = null,
    double KeyVersion = null,
    double MacLength = null,
    string Namespace = null,
    double UrlMacLength = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.name">Name</a></code> | <code>string</code> | Name of the CMAC key to use. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.path">Path</a></code> | <code>string</code> | The Transit secret backend the key belongs to. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.batchInput">BatchInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string>[]</code> | Specifies a list of items for processing. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.batchResults">BatchResults</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string>[]</code> | The results returned from Vault if using batch_input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.cmac">Cmac</a></code> | <code>string</code> | The CMAC returned from Vault if using input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#id DataVaultTransitCmac#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.input">Input</a></code> | <code>string</code> | Specifies the base64 encoded input data. One of input or batch_input must be supplied. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.keyVersion">KeyVersion</a></code> | <code>double</code> | The version of the key to use. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.macLength">MacLength</a></code> | <code>double</code> | Specifies the MAC length to use (POST body parameter). The mac_length cannot be larger than the cipher's block size. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.urlMacLength">UrlMacLength</a></code> | <code>double</code> | Specifies the MAC length to use (URL parameter). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the CMAC key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#name DataVaultTransitCmac#name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The Transit secret backend the key belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#path DataVaultTransitCmac#path}

---

##### `BatchInput`<sup>Optional</sup> <a name="BatchInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.batchInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string>[] BatchInput { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string>[]

Specifies a list of items for processing.

When this parameter is set, any supplied 'input' or 'context' parameters will be ignored. Responses are returned in the 'batch_results' array component of the 'data' element of the response. Any batch output will preserve the order of the batch input. If the input data value of an item is invalid, the corresponding item in the 'batch_results' will have the key 'error' with a value describing the error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#batch_input DataVaultTransitCmac#batch_input}

---

##### `BatchResults`<sup>Optional</sup> <a name="BatchResults" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.batchResults"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string>[] BatchResults { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string>[]

The results returned from Vault if using batch_input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#batch_results DataVaultTransitCmac#batch_results}

---

##### `Cmac`<sup>Optional</sup> <a name="Cmac" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.cmac"></a>

```csharp
public string Cmac { get; set; }
```

- *Type:* string

The CMAC returned from Vault if using input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#cmac DataVaultTransitCmac#cmac}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#id DataVaultTransitCmac#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.input"></a>

```csharp
public string Input { get; set; }
```

- *Type:* string

Specifies the base64 encoded input data. One of input or batch_input must be supplied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#input DataVaultTransitCmac#input}

---

##### `KeyVersion`<sup>Optional</sup> <a name="KeyVersion" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.keyVersion"></a>

```csharp
public double KeyVersion { get; set; }
```

- *Type:* double

The version of the key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#key_version DataVaultTransitCmac#key_version}

---

##### `MacLength`<sup>Optional</sup> <a name="MacLength" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.macLength"></a>

```csharp
public double MacLength { get; set; }
```

- *Type:* double

Specifies the MAC length to use (POST body parameter). The mac_length cannot be larger than the cipher's block size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#mac_length DataVaultTransitCmac#mac_length}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#namespace DataVaultTransitCmac#namespace}

---

##### `UrlMacLength`<sup>Optional</sup> <a name="UrlMacLength" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.urlMacLength"></a>

```csharp
public double UrlMacLength { get; set; }
```

- *Type:* double

Specifies the MAC length to use (URL parameter).

If provided, this value overrides mac_length. The url_mac_length cannot be larger than the cipher's block size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#url_mac_length DataVaultTransitCmac#url_mac_length}

---



