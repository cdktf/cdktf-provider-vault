# `dataVaultApproleAuthBackendRoleId` Submodule <a name="`dataVaultApproleAuthBackendRoleId` Submodule" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultApproleAuthBackendRoleId <a name="DataVaultApproleAuthBackendRoleId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/data-sources/approle_auth_backend_role_id vault_approle_auth_backend_role_id}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultApproleAuthBackendRoleId(Construct Scope, string Id, DataVaultApproleAuthBackendRoleIdConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig">DataVaultApproleAuthBackendRoleIdConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig">DataVaultApproleAuthBackendRoleIdConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.resetBackend"></a>

```csharp
private void ResetBackend()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultApproleAuthBackendRoleId resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultApproleAuthBackendRoleId.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultApproleAuthBackendRoleId.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultApproleAuthBackendRoleId.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultApproleAuthBackendRoleId.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataVaultApproleAuthBackendRoleId resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultApproleAuthBackendRoleId to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultApproleAuthBackendRoleId that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/data-sources/approle_auth_backend_role_id#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultApproleAuthBackendRoleId to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.roleId">RoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.roleNameInput">RoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.roleName">RoleName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.roleId"></a>

```csharp
public string RoleId { get; }
```

- *Type:* string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.roleNameInput"></a>

```csharp
public string RoleNameInput { get; }
```

- *Type:* string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.roleName"></a>

```csharp
public string RoleName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultApproleAuthBackendRoleIdConfig <a name="DataVaultApproleAuthBackendRoleIdConfig" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultApproleAuthBackendRoleIdConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string RoleName,
    string Backend = null,
    string Id = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.roleName">RoleName</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.backend">Backend</a></code> | <code>string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/data-sources/approle_auth_backend_role_id#id DataVaultApproleAuthBackendRoleId#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.roleName"></a>

```csharp
public string RoleName { get; set; }
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/data-sources/approle_auth_backend_role_id#role_name DataVaultApproleAuthBackendRoleId#role_name}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/data-sources/approle_auth_backend_role_id#backend DataVaultApproleAuthBackendRoleId#backend}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/data-sources/approle_auth_backend_role_id#id DataVaultApproleAuthBackendRoleId#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/data-sources/approle_auth_backend_role_id#namespace DataVaultApproleAuthBackendRoleId#namespace}

---



