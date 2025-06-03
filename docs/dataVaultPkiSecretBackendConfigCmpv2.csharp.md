# `dataVaultPkiSecretBackendConfigCmpv2` Submodule <a name="`dataVaultPkiSecretBackendConfigCmpv2` Submodule" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultPkiSecretBackendConfigCmpv2 <a name="DataVaultPkiSecretBackendConfigCmpv2" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/pki_secret_backend_config_cmpv2 vault_pki_secret_backend_config_cmpv2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultPkiSecretBackendConfigCmpv2(Construct Scope, string Id, DataVaultPkiSecretBackendConfigCmpv2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config">DataVaultPkiSecretBackendConfigCmpv2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config">DataVaultPkiSecretBackendConfigCmpv2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.resetDisabledValidations">ResetDisabledValidations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDisabledValidations` <a name="ResetDisabledValidations" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.resetDisabledValidations"></a>

```csharp
private void ResetDisabledValidations()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultPkiSecretBackendConfigCmpv2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultPkiSecretBackendConfigCmpv2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultPkiSecretBackendConfigCmpv2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultPkiSecretBackendConfigCmpv2.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultPkiSecretBackendConfigCmpv2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataVaultPkiSecretBackendConfigCmpv2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultPkiSecretBackendConfigCmpv2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultPkiSecretBackendConfigCmpv2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/pki_secret_backend_config_cmpv2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultPkiSecretBackendConfigCmpv2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.auditFields">AuditFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.authenticators">Authenticators</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList">DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.defaultPathPolicy">DefaultPathPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.enableSentinelParsing">EnableSentinelParsing</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.lastUpdated">LastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.disabledValidationsInput">DisabledValidationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.disabledValidations">DisabledValidations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AuditFields`<sup>Required</sup> <a name="AuditFields" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.auditFields"></a>

```csharp
public string[] AuditFields { get; }
```

- *Type:* string[]

---

##### `Authenticators`<sup>Required</sup> <a name="Authenticators" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.authenticators"></a>

```csharp
public DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList Authenticators { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList">DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList</a>

---

##### `DefaultPathPolicy`<sup>Required</sup> <a name="DefaultPathPolicy" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.defaultPathPolicy"></a>

```csharp
public string DefaultPathPolicy { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnableSentinelParsing`<sup>Required</sup> <a name="EnableSentinelParsing" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.enableSentinelParsing"></a>

```csharp
public IResolvable EnableSentinelParsing { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.lastUpdated"></a>

```csharp
public string LastUpdated { get; }
```

- *Type:* string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `DisabledValidationsInput`<sup>Optional</sup> <a name="DisabledValidationsInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.disabledValidationsInput"></a>

```csharp
public string[] DisabledValidationsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `DisabledValidations`<sup>Required</sup> <a name="DisabledValidations" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.disabledValidations"></a>

```csharp
public string[] DisabledValidations { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultPkiSecretBackendConfigCmpv2Authenticators <a name="DataVaultPkiSecretBackendConfigCmpv2Authenticators" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Authenticators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Authenticators.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultPkiSecretBackendConfigCmpv2Authenticators {

};
```


### DataVaultPkiSecretBackendConfigCmpv2Config <a name="DataVaultPkiSecretBackendConfigCmpv2Config" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultPkiSecretBackendConfigCmpv2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Backend,
    string[] DisabledValidations = null,
    string Id = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.backend">Backend</a></code> | <code>string</code> | Path where PKI engine is mounted. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.disabledValidations">DisabledValidations</a></code> | <code>string[]</code> | A comma-separated list of validations not to perform on CMPv2 messages. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/pki_secret_backend_config_cmpv2#id DataVaultPkiSecretBackendConfigCmpv2#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

Path where PKI engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/pki_secret_backend_config_cmpv2#backend DataVaultPkiSecretBackendConfigCmpv2#backend}

---

##### `DisabledValidations`<sup>Optional</sup> <a name="DisabledValidations" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.disabledValidations"></a>

```csharp
public string[] DisabledValidations { get; set; }
```

- *Type:* string[]

A comma-separated list of validations not to perform on CMPv2 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/pki_secret_backend_config_cmpv2#disabled_validations DataVaultPkiSecretBackendConfigCmpv2#disabled_validations}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/pki_secret_backend_config_cmpv2#id DataVaultPkiSecretBackendConfigCmpv2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/pki_secret_backend_config_cmpv2#namespace DataVaultPkiSecretBackendConfigCmpv2#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList <a name="DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.get"></a>

```csharp
private DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference <a name="DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.cert">Cert</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Authenticators">DataVaultPkiSecretBackendConfigCmpv2Authenticators</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.cert"></a>

```csharp
public StringMap Cert { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.internalValue"></a>

```csharp
public DataVaultPkiSecretBackendConfigCmpv2Authenticators InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Authenticators">DataVaultPkiSecretBackendConfigCmpv2Authenticators</a>

---



