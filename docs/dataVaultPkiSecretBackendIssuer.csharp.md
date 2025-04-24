# `dataVaultPkiSecretBackendIssuer` Submodule <a name="`dataVaultPkiSecretBackendIssuer` Submodule" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultPkiSecretBackendIssuer <a name="DataVaultPkiSecretBackendIssuer" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/pki_secret_backend_issuer vault_pki_secret_backend_issuer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultPkiSecretBackendIssuer(Construct Scope, string Id, DataVaultPkiSecretBackendIssuerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig">DataVaultPkiSecretBackendIssuerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig">DataVaultPkiSecretBackendIssuerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetDisableCriticalExtensionChecks">ResetDisableCriticalExtensionChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetDisableNameChecks">ResetDisableNameChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetDisableNameConstraintChecks">ResetDisableNameConstraintChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetDisablePathLengthChecks">ResetDisablePathLengthChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDisableCriticalExtensionChecks` <a name="ResetDisableCriticalExtensionChecks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetDisableCriticalExtensionChecks"></a>

```csharp
private void ResetDisableCriticalExtensionChecks()
```

##### `ResetDisableNameChecks` <a name="ResetDisableNameChecks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetDisableNameChecks"></a>

```csharp
private void ResetDisableNameChecks()
```

##### `ResetDisableNameConstraintChecks` <a name="ResetDisableNameConstraintChecks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetDisableNameConstraintChecks"></a>

```csharp
private void ResetDisableNameConstraintChecks()
```

##### `ResetDisablePathLengthChecks` <a name="ResetDisablePathLengthChecks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetDisablePathLengthChecks"></a>

```csharp
private void ResetDisablePathLengthChecks()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultPkiSecretBackendIssuer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultPkiSecretBackendIssuer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultPkiSecretBackendIssuer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultPkiSecretBackendIssuer.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultPkiSecretBackendIssuer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataVaultPkiSecretBackendIssuer resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultPkiSecretBackendIssuer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultPkiSecretBackendIssuer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/pki_secret_backend_issuer#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultPkiSecretBackendIssuer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.caChain">CaChain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.issuerId">IssuerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.issuerName">IssuerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.leafNotAfterBehavior">LeafNotAfterBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.manualChain">ManualChain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.usage">Usage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableCriticalExtensionChecksInput">DisableCriticalExtensionChecksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableNameChecksInput">DisableNameChecksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableNameConstraintChecksInput">DisableNameConstraintChecksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disablePathLengthChecksInput">DisablePathLengthChecksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.issuerRefInput">IssuerRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableCriticalExtensionChecks">DisableCriticalExtensionChecks</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableNameChecks">DisableNameChecks</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableNameConstraintChecks">DisableNameConstraintChecks</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disablePathLengthChecks">DisablePathLengthChecks</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.issuerRef">IssuerRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CaChain`<sup>Required</sup> <a name="CaChain" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.caChain"></a>

```csharp
public string[] CaChain { get; }
```

- *Type:* string[]

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `IssuerId`<sup>Required</sup> <a name="IssuerId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.issuerId"></a>

```csharp
public string IssuerId { get; }
```

- *Type:* string

---

##### `IssuerName`<sup>Required</sup> <a name="IssuerName" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.issuerName"></a>

```csharp
public string IssuerName { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `LeafNotAfterBehavior`<sup>Required</sup> <a name="LeafNotAfterBehavior" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.leafNotAfterBehavior"></a>

```csharp
public string LeafNotAfterBehavior { get; }
```

- *Type:* string

---

##### `ManualChain`<sup>Required</sup> <a name="ManualChain" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.manualChain"></a>

```csharp
public string[] ManualChain { get; }
```

- *Type:* string[]

---

##### `Usage`<sup>Required</sup> <a name="Usage" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.usage"></a>

```csharp
public string Usage { get; }
```

- *Type:* string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `DisableCriticalExtensionChecksInput`<sup>Optional</sup> <a name="DisableCriticalExtensionChecksInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableCriticalExtensionChecksInput"></a>

```csharp
public object DisableCriticalExtensionChecksInput { get; }
```

- *Type:* object

---

##### `DisableNameChecksInput`<sup>Optional</sup> <a name="DisableNameChecksInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableNameChecksInput"></a>

```csharp
public object DisableNameChecksInput { get; }
```

- *Type:* object

---

##### `DisableNameConstraintChecksInput`<sup>Optional</sup> <a name="DisableNameConstraintChecksInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableNameConstraintChecksInput"></a>

```csharp
public object DisableNameConstraintChecksInput { get; }
```

- *Type:* object

---

##### `DisablePathLengthChecksInput`<sup>Optional</sup> <a name="DisablePathLengthChecksInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disablePathLengthChecksInput"></a>

```csharp
public object DisablePathLengthChecksInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IssuerRefInput`<sup>Optional</sup> <a name="IssuerRefInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.issuerRefInput"></a>

```csharp
public string IssuerRefInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `DisableCriticalExtensionChecks`<sup>Required</sup> <a name="DisableCriticalExtensionChecks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableCriticalExtensionChecks"></a>

```csharp
public object DisableCriticalExtensionChecks { get; }
```

- *Type:* object

---

##### `DisableNameChecks`<sup>Required</sup> <a name="DisableNameChecks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableNameChecks"></a>

```csharp
public object DisableNameChecks { get; }
```

- *Type:* object

---

##### `DisableNameConstraintChecks`<sup>Required</sup> <a name="DisableNameConstraintChecks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableNameConstraintChecks"></a>

```csharp
public object DisableNameConstraintChecks { get; }
```

- *Type:* object

---

##### `DisablePathLengthChecks`<sup>Required</sup> <a name="DisablePathLengthChecks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disablePathLengthChecks"></a>

```csharp
public object DisablePathLengthChecks { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IssuerRef`<sup>Required</sup> <a name="IssuerRef" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.issuerRef"></a>

```csharp
public string IssuerRef { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultPkiSecretBackendIssuerConfig <a name="DataVaultPkiSecretBackendIssuerConfig" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultPkiSecretBackendIssuerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Backend,
    string IssuerRef,
    object DisableCriticalExtensionChecks = null,
    object DisableNameChecks = null,
    object DisableNameConstraintChecks = null,
    object DisablePathLengthChecks = null,
    string Id = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.backend">Backend</a></code> | <code>string</code> | Full path where PKI backend is mounted. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.issuerRef">IssuerRef</a></code> | <code>string</code> | Reference to an existing issuer. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.disableCriticalExtensionChecks">DisableCriticalExtensionChecks</a></code> | <code>object</code> | This determines whether this issuer is able to issue certificates where the chain of trust (including the issued certificate) contain critical extensions not processed by Vault. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.disableNameChecks">DisableNameChecks</a></code> | <code>object</code> | This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) contains a link in which the subject of the issuing certificate does not match the named issuer of the certificate it signed. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.disableNameConstraintChecks">DisableNameConstraintChecks</a></code> | <code>object</code> | This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) violates the name constraints critical extension of one of the issuer certificates in the chain. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.disablePathLengthChecks">DisablePathLengthChecks</a></code> | <code>object</code> | This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) is longer than allowed by a certificate authority in that chain. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/pki_secret_backend_issuer#id DataVaultPkiSecretBackendIssuer#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

Full path where PKI backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/pki_secret_backend_issuer#backend DataVaultPkiSecretBackendIssuer#backend}

---

##### `IssuerRef`<sup>Required</sup> <a name="IssuerRef" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.issuerRef"></a>

```csharp
public string IssuerRef { get; set; }
```

- *Type:* string

Reference to an existing issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/pki_secret_backend_issuer#issuer_ref DataVaultPkiSecretBackendIssuer#issuer_ref}

---

##### `DisableCriticalExtensionChecks`<sup>Optional</sup> <a name="DisableCriticalExtensionChecks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.disableCriticalExtensionChecks"></a>

```csharp
public object DisableCriticalExtensionChecks { get; set; }
```

- *Type:* object

This determines whether this issuer is able to issue certificates where the chain of trust (including the issued certificate) contain critical extensions not processed by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/pki_secret_backend_issuer#disable_critical_extension_checks DataVaultPkiSecretBackendIssuer#disable_critical_extension_checks}

---

##### `DisableNameChecks`<sup>Optional</sup> <a name="DisableNameChecks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.disableNameChecks"></a>

```csharp
public object DisableNameChecks { get; set; }
```

- *Type:* object

This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) contains a link in which the subject of the issuing certificate does not match the named issuer of the certificate it signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/pki_secret_backend_issuer#disable_name_checks DataVaultPkiSecretBackendIssuer#disable_name_checks}

---

##### `DisableNameConstraintChecks`<sup>Optional</sup> <a name="DisableNameConstraintChecks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.disableNameConstraintChecks"></a>

```csharp
public object DisableNameConstraintChecks { get; set; }
```

- *Type:* object

This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) violates the name constraints critical extension of one of the issuer certificates in the chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/pki_secret_backend_issuer#disable_name_constraint_checks DataVaultPkiSecretBackendIssuer#disable_name_constraint_checks}

---

##### `DisablePathLengthChecks`<sup>Optional</sup> <a name="DisablePathLengthChecks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.disablePathLengthChecks"></a>

```csharp
public object DisablePathLengthChecks { get; set; }
```

- *Type:* object

This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) is longer than allowed by a certificate authority in that chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/pki_secret_backend_issuer#disable_path_length_checks DataVaultPkiSecretBackendIssuer#disable_path_length_checks}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/pki_secret_backend_issuer#id DataVaultPkiSecretBackendIssuer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/pki_secret_backend_issuer#namespace DataVaultPkiSecretBackendIssuer#namespace}

---



