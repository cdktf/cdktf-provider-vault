# `dataVaultPkiSecretBackendKey` Submodule <a name="`dataVaultPkiSecretBackendKey` Submodule" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultPkiSecretBackendKey <a name="DataVaultPkiSecretBackendKey" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/pki_secret_backend_key vault_pki_secret_backend_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultPkiSecretBackendKey(Construct Scope, string Id, DataVaultPkiSecretBackendKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKeyConfig">DataVaultPkiSecretBackendKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKeyConfig">DataVaultPkiSecretBackendKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultPkiSecretBackendKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultPkiSecretBackendKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultPkiSecretBackendKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultPkiSecretBackendKey.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultPkiSecretBackendKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataVaultPkiSecretBackendKey resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultPkiSecretBackendKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultPkiSecretBackendKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/pki_secret_backend_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultPkiSecretBackendKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.keyType">KeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.keyRefInput">KeyRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.keyRef">KeyRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.keyType"></a>

```csharp
public string KeyType { get; }
```

- *Type:* string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyRefInput`<sup>Optional</sup> <a name="KeyRefInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.keyRefInput"></a>

```csharp
public string KeyRefInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyRef`<sup>Required</sup> <a name="KeyRef" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.keyRef"></a>

```csharp
public string KeyRef { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultPkiSecretBackendKeyConfig <a name="DataVaultPkiSecretBackendKeyConfig" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultPkiSecretBackendKeyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Backend,
    string KeyRef,
    string Id = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKeyConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKeyConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKeyConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKeyConfig.property.backend">Backend</a></code> | <code>string</code> | Full path where PKI backend is mounted. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKeyConfig.property.keyRef">KeyRef</a></code> | <code>string</code> | Reference to an existing key. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKeyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/pki_secret_backend_key#id DataVaultPkiSecretBackendKey#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKeyConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKeyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKeyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKeyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKeyConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

Full path where PKI backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/pki_secret_backend_key#backend DataVaultPkiSecretBackendKey#backend}

---

##### `KeyRef`<sup>Required</sup> <a name="KeyRef" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKeyConfig.property.keyRef"></a>

```csharp
public string KeyRef { get; set; }
```

- *Type:* string

Reference to an existing key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/pki_secret_backend_key#key_ref DataVaultPkiSecretBackendKey#key_ref}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKeyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/pki_secret_backend_key#id DataVaultPkiSecretBackendKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendKey.DataVaultPkiSecretBackendKeyConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/pki_secret_backend_key#namespace DataVaultPkiSecretBackendKey#namespace}

---



