# `dataVaultSshSecretBackendSign` Submodule <a name="`dataVaultSshSecretBackendSign` Submodule" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultSshSecretBackendSign <a name="DataVaultSshSecretBackendSign" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/ssh_secret_backend_sign vault_ssh_secret_backend_sign}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultSshSecretBackendSign(Construct Scope, string Id, DataVaultSshSecretBackendSignConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig">DataVaultSshSecretBackendSignConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig">DataVaultSshSecretBackendSignConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetCertType">ResetCertType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetCriticalOptions">ResetCriticalOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetExtensions">ResetExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetKeyId">ResetKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetValidPrincipals">ResetValidPrincipals</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetCertType` <a name="ResetCertType" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetCertType"></a>

```csharp
private void ResetCertType()
```

##### `ResetCriticalOptions` <a name="ResetCriticalOptions" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetCriticalOptions"></a>

```csharp
private void ResetCriticalOptions()
```

##### `ResetExtensions` <a name="ResetExtensions" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetExtensions"></a>

```csharp
private void ResetExtensions()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeyId` <a name="ResetKeyId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetKeyId"></a>

```csharp
private void ResetKeyId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetTtl"></a>

```csharp
private void ResetTtl()
```

##### `ResetValidPrincipals` <a name="ResetValidPrincipals" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetValidPrincipals"></a>

```csharp
private void ResetValidPrincipals()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultSshSecretBackendSign resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultSshSecretBackendSign.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultSshSecretBackendSign.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultSshSecretBackendSign.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultSshSecretBackendSign.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataVaultSshSecretBackendSign resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultSshSecretBackendSign to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultSshSecretBackendSign that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/ssh_secret_backend_sign#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultSshSecretBackendSign to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.serialNumber">SerialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.signedKey">SignedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.certTypeInput">CertTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.criticalOptionsInput">CriticalOptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.extensionsInput">ExtensionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.publicKeyInput">PublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.ttlInput">TtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.validPrincipalsInput">ValidPrincipalsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.certType">CertType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.criticalOptions">CriticalOptions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.extensions">Extensions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.ttl">Ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.validPrincipals">ValidPrincipals</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.serialNumber"></a>

```csharp
public string SerialNumber { get; }
```

- *Type:* string

---

##### `SignedKey`<sup>Required</sup> <a name="SignedKey" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.signedKey"></a>

```csharp
public string SignedKey { get; }
```

- *Type:* string

---

##### `CertTypeInput`<sup>Optional</sup> <a name="CertTypeInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.certTypeInput"></a>

```csharp
public string CertTypeInput { get; }
```

- *Type:* string

---

##### `CriticalOptionsInput`<sup>Optional</sup> <a name="CriticalOptionsInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.criticalOptionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CriticalOptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExtensionsInput`<sup>Optional</sup> <a name="ExtensionsInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.extensionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtensionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.publicKeyInput"></a>

```csharp
public string PublicKeyInput { get; }
```

- *Type:* string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.ttlInput"></a>

```csharp
public string TtlInput { get; }
```

- *Type:* string

---

##### `ValidPrincipalsInput`<sup>Optional</sup> <a name="ValidPrincipalsInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.validPrincipalsInput"></a>

```csharp
public string ValidPrincipalsInput { get; }
```

- *Type:* string

---

##### `CertType`<sup>Required</sup> <a name="CertType" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.certType"></a>

```csharp
public string CertType { get; }
```

- *Type:* string

---

##### `CriticalOptions`<sup>Required</sup> <a name="CriticalOptions" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.criticalOptions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CriticalOptions { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Extensions`<sup>Required</sup> <a name="Extensions" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.extensions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Extensions { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.ttl"></a>

```csharp
public string Ttl { get; }
```

- *Type:* string

---

##### `ValidPrincipals`<sup>Required</sup> <a name="ValidPrincipals" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.validPrincipals"></a>

```csharp
public string ValidPrincipals { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultSshSecretBackendSignConfig <a name="DataVaultSshSecretBackendSignConfig" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultSshSecretBackendSignConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Path,
    string PublicKey,
    string CertType = null,
    System.Collections.Generic.IDictionary<string, string> CriticalOptions = null,
    System.Collections.Generic.IDictionary<string, string> Extensions = null,
    string Id = null,
    string KeyId = null,
    string Namespace = null,
    string Ttl = null,
    string ValidPrincipals = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.name">Name</a></code> | <code>string</code> | Specifies the name of the role to sign. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.path">Path</a></code> | <code>string</code> | Full path where SSH backend is mounted. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.publicKey">PublicKey</a></code> | <code>string</code> | Specifies the SSH public key that should be signed. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.certType">CertType</a></code> | <code>string</code> | Specifies the type of certificate to be created; either "user" or "host". |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.criticalOptions">CriticalOptions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Specifies a map of the critical options that the certificate should be signed for. Defaults to none. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.extensions">Extensions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Specifies a map of the extensions that the certificate should be signed for. Defaults to none. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/ssh_secret_backend_sign#id DataVaultSshSecretBackendSign#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.keyId">KeyId</a></code> | <code>string</code> | Specifies the key id that the created certificate should have. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.ttl">Ttl</a></code> | <code>string</code> | Specifies the Requested Time To Live. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.validPrincipals">ValidPrincipals</a></code> | <code>string</code> | Specifies valid principals, either usernames or hostnames, that the certificate should be signed for. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the name of the role to sign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/ssh_secret_backend_sign#name DataVaultSshSecretBackendSign#name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Full path where SSH backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/ssh_secret_backend_sign#path DataVaultSshSecretBackendSign#path}

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.publicKey"></a>

```csharp
public string PublicKey { get; set; }
```

- *Type:* string

Specifies the SSH public key that should be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/ssh_secret_backend_sign#public_key DataVaultSshSecretBackendSign#public_key}

---

##### `CertType`<sup>Optional</sup> <a name="CertType" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.certType"></a>

```csharp
public string CertType { get; set; }
```

- *Type:* string

Specifies the type of certificate to be created; either "user" or "host".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/ssh_secret_backend_sign#cert_type DataVaultSshSecretBackendSign#cert_type}

---

##### `CriticalOptions`<sup>Optional</sup> <a name="CriticalOptions" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.criticalOptions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CriticalOptions { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Specifies a map of the critical options that the certificate should be signed for. Defaults to none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/ssh_secret_backend_sign#critical_options DataVaultSshSecretBackendSign#critical_options}

---

##### `Extensions`<sup>Optional</sup> <a name="Extensions" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.extensions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Extensions { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Specifies a map of the extensions that the certificate should be signed for. Defaults to none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/ssh_secret_backend_sign#extensions DataVaultSshSecretBackendSign#extensions}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/ssh_secret_backend_sign#id DataVaultSshSecretBackendSign#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyId`<sup>Optional</sup> <a name="KeyId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

Specifies the key id that the created certificate should have.

If not specified, the display name of the token will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/ssh_secret_backend_sign#key_id DataVaultSshSecretBackendSign#key_id}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/ssh_secret_backend_sign#namespace DataVaultSshSecretBackendSign#namespace}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.ttl"></a>

```csharp
public string Ttl { get; set; }
```

- *Type:* string

Specifies the Requested Time To Live.

Cannot be greater than the role's max_ttl value. If not provided, the role's ttl value will be used. Note that the role values default to system values if not explicitly set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/ssh_secret_backend_sign#ttl DataVaultSshSecretBackendSign#ttl}

---

##### `ValidPrincipals`<sup>Optional</sup> <a name="ValidPrincipals" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.validPrincipals"></a>

```csharp
public string ValidPrincipals { get; set; }
```

- *Type:* string

Specifies valid principals, either usernames or hostnames, that the certificate should be signed for.

Required unless the role has specified allow_empty_principals or a value has been set for either the default_user or default_user_template role parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/ssh_secret_backend_sign#valid_principals DataVaultSshSecretBackendSign#valid_principals}

---



