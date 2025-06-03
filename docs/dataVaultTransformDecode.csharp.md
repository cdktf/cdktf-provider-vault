# `dataVaultTransformDecode` Submodule <a name="`dataVaultTransformDecode` Submodule" id="@cdktf/provider-vault.dataVaultTransformDecode"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransformDecode <a name="DataVaultTransformDecode" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/transform_decode vault_transform_decode}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultTransformDecode(Construct Scope, string Id, DataVaultTransformDecodeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig">DataVaultTransformDecodeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig">DataVaultTransformDecodeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetBatchInput">ResetBatchInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetBatchResults">ResetBatchResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetDecodedValue">ResetDecodedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetTransformation">ResetTransformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetTweak">ResetTweak</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetBatchInput` <a name="ResetBatchInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetBatchInput"></a>

```csharp
private void ResetBatchInput()
```

##### `ResetBatchResults` <a name="ResetBatchResults" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetBatchResults"></a>

```csharp
private void ResetBatchResults()
```

##### `ResetDecodedValue` <a name="ResetDecodedValue" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetDecodedValue"></a>

```csharp
private void ResetDecodedValue()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetTransformation` <a name="ResetTransformation" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetTransformation"></a>

```csharp
private void ResetTransformation()
```

##### `ResetTweak` <a name="ResetTweak" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetTweak"></a>

```csharp
private void ResetTweak()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetValue"></a>

```csharp
private void ResetValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultTransformDecode resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultTransformDecode.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultTransformDecode.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultTransformDecode.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultTransformDecode.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataVaultTransformDecode resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultTransformDecode to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultTransformDecode that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/transform_decode#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultTransformDecode to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchInputInput">BatchInputInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchResultsInput">BatchResultsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.decodedValueInput">DecodedValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.roleNameInput">RoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.transformationInput">TransformationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.tweakInput">TweakInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchInput">BatchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchResults">BatchResults</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.decodedValue">DecodedValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.roleName">RoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.transformation">Transformation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.tweak">Tweak</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.value">Value</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BatchInputInput`<sup>Optional</sup> <a name="BatchInputInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchInputInput"></a>

```csharp
public object BatchInputInput { get; }
```

- *Type:* object

---

##### `BatchResultsInput`<sup>Optional</sup> <a name="BatchResultsInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchResultsInput"></a>

```csharp
public object BatchResultsInput { get; }
```

- *Type:* object

---

##### `DecodedValueInput`<sup>Optional</sup> <a name="DecodedValueInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.decodedValueInput"></a>

```csharp
public string DecodedValueInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.roleNameInput"></a>

```csharp
public string RoleNameInput { get; }
```

- *Type:* string

---

##### `TransformationInput`<sup>Optional</sup> <a name="TransformationInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.transformationInput"></a>

```csharp
public string TransformationInput { get; }
```

- *Type:* string

---

##### `TweakInput`<sup>Optional</sup> <a name="TweakInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.tweakInput"></a>

```csharp
public string TweakInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `BatchInput`<sup>Required</sup> <a name="BatchInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchInput"></a>

```csharp
public object BatchInput { get; }
```

- *Type:* object

---

##### `BatchResults`<sup>Required</sup> <a name="BatchResults" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchResults"></a>

```csharp
public object BatchResults { get; }
```

- *Type:* object

---

##### `DecodedValue`<sup>Required</sup> <a name="DecodedValue" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.decodedValue"></a>

```csharp
public string DecodedValue { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.roleName"></a>

```csharp
public string RoleName { get; }
```

- *Type:* string

---

##### `Transformation`<sup>Required</sup> <a name="Transformation" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.transformation"></a>

```csharp
public string Transformation { get; }
```

- *Type:* string

---

##### `Tweak`<sup>Required</sup> <a name="Tweak" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.tweak"></a>

```csharp
public string Tweak { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransformDecodeConfig <a name="DataVaultTransformDecodeConfig" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultTransformDecodeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Path,
    string RoleName,
    object BatchInput = null,
    object BatchResults = null,
    string DecodedValue = null,
    string Id = null,
    string Namespace = null,
    string Transformation = null,
    string Tweak = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.path">Path</a></code> | <code>string</code> | Path to backend from which to retrieve data. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.roleName">RoleName</a></code> | <code>string</code> | The name of the role. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.batchInput">BatchInput</a></code> | <code>object</code> | Specifies a list of items to be decoded in a single batch. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.batchResults">BatchResults</a></code> | <code>object</code> | The result of decoding batch_input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.decodedValue">DecodedValue</a></code> | <code>string</code> | The result of decoding a value. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/transform_decode#id DataVaultTransformDecode#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.transformation">Transformation</a></code> | <code>string</code> | The transformation to perform. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.tweak">Tweak</a></code> | <code>string</code> | The tweak value to use. Only applicable for FPE transformations. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.value">Value</a></code> | <code>string</code> | The value in which to decode. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path to backend from which to retrieve data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/transform_decode#path DataVaultTransformDecode#path}

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.roleName"></a>

```csharp
public string RoleName { get; set; }
```

- *Type:* string

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/transform_decode#role_name DataVaultTransformDecode#role_name}

---

##### `BatchInput`<sup>Optional</sup> <a name="BatchInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.batchInput"></a>

```csharp
public object BatchInput { get; set; }
```

- *Type:* object

Specifies a list of items to be decoded in a single batch.

If this parameter is set, the top-level parameters 'value', 'transformation' and 'tweak' will be ignored. Each batch item within the list can specify these parameters instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/transform_decode#batch_input DataVaultTransformDecode#batch_input}

---

##### `BatchResults`<sup>Optional</sup> <a name="BatchResults" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.batchResults"></a>

```csharp
public object BatchResults { get; set; }
```

- *Type:* object

The result of decoding batch_input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/transform_decode#batch_results DataVaultTransformDecode#batch_results}

---

##### `DecodedValue`<sup>Optional</sup> <a name="DecodedValue" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.decodedValue"></a>

```csharp
public string DecodedValue { get; set; }
```

- *Type:* string

The result of decoding a value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/transform_decode#decoded_value DataVaultTransformDecode#decoded_value}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/transform_decode#id DataVaultTransformDecode#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/transform_decode#namespace DataVaultTransformDecode#namespace}

---

##### `Transformation`<sup>Optional</sup> <a name="Transformation" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.transformation"></a>

```csharp
public string Transformation { get; set; }
```

- *Type:* string

The transformation to perform.

If no value is provided and the role contains a single transformation, this value will be inferred from the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/transform_decode#transformation DataVaultTransformDecode#transformation}

---

##### `Tweak`<sup>Optional</sup> <a name="Tweak" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.tweak"></a>

```csharp
public string Tweak { get; set; }
```

- *Type:* string

The tweak value to use. Only applicable for FPE transformations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/transform_decode#tweak DataVaultTransformDecode#tweak}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value in which to decode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/transform_decode#value DataVaultTransformDecode#value}

---



