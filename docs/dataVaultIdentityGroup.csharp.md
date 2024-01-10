# `dataVaultIdentityGroup` Submodule <a name="`dataVaultIdentityGroup` Submodule" id="@cdktf/provider-vault.dataVaultIdentityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultIdentityGroup <a name="DataVaultIdentityGroup" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/identity_group vault_identity_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultIdentityGroup(Construct Scope, string Id, DataVaultIdentityGroupConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig">DataVaultIdentityGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig">DataVaultIdentityGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetAliasId">ResetAliasId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetAliasMountAccessor">ResetAliasMountAccessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetAliasName">ResetAliasName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetGroupName">ResetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAliasId` <a name="ResetAliasId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetAliasId"></a>

```csharp
private void ResetAliasId()
```

##### `ResetAliasMountAccessor` <a name="ResetAliasMountAccessor" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetAliasMountAccessor"></a>

```csharp
private void ResetAliasMountAccessor()
```

##### `ResetAliasName` <a name="ResetAliasName" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetAliasName"></a>

```csharp
private void ResetAliasName()
```

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetGroupId"></a>

```csharp
private void ResetGroupId()
```

##### `ResetGroupName` <a name="ResetGroupName" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetGroupName"></a>

```csharp
private void ResetGroupName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultIdentityGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultIdentityGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultIdentityGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultIdentityGroup.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultIdentityGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataVaultIdentityGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultIdentityGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultIdentityGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/identity_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultIdentityGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasCanonicalId">AliasCanonicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasCreationTime">AliasCreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasLastUpdateTime">AliasLastUpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMergedFromCanonicalIds">AliasMergedFromCanonicalIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMetadata">AliasMetadata</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMountPath">AliasMountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMountType">AliasMountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.dataJson">DataJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.lastUpdateTime">LastUpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.memberEntityIds">MemberEntityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.memberGroupIds">MemberGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.metadata">Metadata</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.modifyIndex">ModifyIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.namespaceId">NamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.parentGroupIds">ParentGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.policies">Policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasIdInput">AliasIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMountAccessorInput">AliasMountAccessorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasNameInput">AliasNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.groupIdInput">GroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.groupNameInput">GroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasId">AliasId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMountAccessor">AliasMountAccessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasName">AliasName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.groupName">GroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AliasCanonicalId`<sup>Required</sup> <a name="AliasCanonicalId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasCanonicalId"></a>

```csharp
public string AliasCanonicalId { get; }
```

- *Type:* string

---

##### `AliasCreationTime`<sup>Required</sup> <a name="AliasCreationTime" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasCreationTime"></a>

```csharp
public string AliasCreationTime { get; }
```

- *Type:* string

---

##### `AliasLastUpdateTime`<sup>Required</sup> <a name="AliasLastUpdateTime" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasLastUpdateTime"></a>

```csharp
public string AliasLastUpdateTime { get; }
```

- *Type:* string

---

##### `AliasMergedFromCanonicalIds`<sup>Required</sup> <a name="AliasMergedFromCanonicalIds" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMergedFromCanonicalIds"></a>

```csharp
public string[] AliasMergedFromCanonicalIds { get; }
```

- *Type:* string[]

---

##### `AliasMetadata`<sup>Required</sup> <a name="AliasMetadata" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMetadata"></a>

```csharp
public StringMap AliasMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `AliasMountPath`<sup>Required</sup> <a name="AliasMountPath" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMountPath"></a>

```csharp
public string AliasMountPath { get; }
```

- *Type:* string

---

##### `AliasMountType`<sup>Required</sup> <a name="AliasMountType" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMountType"></a>

```csharp
public string AliasMountType { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `DataJson`<sup>Required</sup> <a name="DataJson" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.dataJson"></a>

```csharp
public string DataJson { get; }
```

- *Type:* string

---

##### `LastUpdateTime`<sup>Required</sup> <a name="LastUpdateTime" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.lastUpdateTime"></a>

```csharp
public string LastUpdateTime { get; }
```

- *Type:* string

---

##### `MemberEntityIds`<sup>Required</sup> <a name="MemberEntityIds" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.memberEntityIds"></a>

```csharp
public string[] MemberEntityIds { get; }
```

- *Type:* string[]

---

##### `MemberGroupIds`<sup>Required</sup> <a name="MemberGroupIds" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.memberGroupIds"></a>

```csharp
public string[] MemberGroupIds { get; }
```

- *Type:* string[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.metadata"></a>

```csharp
public StringMap Metadata { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ModifyIndex`<sup>Required</sup> <a name="ModifyIndex" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.modifyIndex"></a>

```csharp
public double ModifyIndex { get; }
```

- *Type:* double

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.namespaceId"></a>

```csharp
public string NamespaceId { get; }
```

- *Type:* string

---

##### `ParentGroupIds`<sup>Required</sup> <a name="ParentGroupIds" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.parentGroupIds"></a>

```csharp
public string[] ParentGroupIds { get; }
```

- *Type:* string[]

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.policies"></a>

```csharp
public string[] Policies { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `AliasIdInput`<sup>Optional</sup> <a name="AliasIdInput" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasIdInput"></a>

```csharp
public string AliasIdInput { get; }
```

- *Type:* string

---

##### `AliasMountAccessorInput`<sup>Optional</sup> <a name="AliasMountAccessorInput" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMountAccessorInput"></a>

```csharp
public string AliasMountAccessorInput { get; }
```

- *Type:* string

---

##### `AliasNameInput`<sup>Optional</sup> <a name="AliasNameInput" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasNameInput"></a>

```csharp
public string AliasNameInput { get; }
```

- *Type:* string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.groupIdInput"></a>

```csharp
public string GroupIdInput { get; }
```

- *Type:* string

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.groupNameInput"></a>

```csharp
public string GroupNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `AliasId`<sup>Required</sup> <a name="AliasId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasId"></a>

```csharp
public string AliasId { get; }
```

- *Type:* string

---

##### `AliasMountAccessor`<sup>Required</sup> <a name="AliasMountAccessor" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMountAccessor"></a>

```csharp
public string AliasMountAccessor { get; }
```

- *Type:* string

---

##### `AliasName`<sup>Required</sup> <a name="AliasName" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasName"></a>

```csharp
public string AliasName { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.groupName"></a>

```csharp
public string GroupName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultIdentityGroupConfig <a name="DataVaultIdentityGroupConfig" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultIdentityGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AliasId = null,
    string AliasMountAccessor = null,
    string AliasName = null,
    string GroupId = null,
    string GroupName = null,
    string Id = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.aliasId">AliasId</a></code> | <code>string</code> | ID of the alias. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.aliasMountAccessor">AliasMountAccessor</a></code> | <code>string</code> | Accessor of the mount to which the alias belongs to. This should be supplied in conjunction with `alias_name`. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.aliasName">AliasName</a></code> | <code>string</code> | Name of the alias. This should be supplied in conjunction with `alias_mount_accessor`. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.groupId">GroupId</a></code> | <code>string</code> | ID of the group. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.groupName">GroupName</a></code> | <code>string</code> | Name of the group. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/identity_group#id DataVaultIdentityGroup#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AliasId`<sup>Optional</sup> <a name="AliasId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.aliasId"></a>

```csharp
public string AliasId { get; set; }
```

- *Type:* string

ID of the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/identity_group#alias_id DataVaultIdentityGroup#alias_id}

---

##### `AliasMountAccessor`<sup>Optional</sup> <a name="AliasMountAccessor" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.aliasMountAccessor"></a>

```csharp
public string AliasMountAccessor { get; set; }
```

- *Type:* string

Accessor of the mount to which the alias belongs to. This should be supplied in conjunction with `alias_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/identity_group#alias_mount_accessor DataVaultIdentityGroup#alias_mount_accessor}

---

##### `AliasName`<sup>Optional</sup> <a name="AliasName" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.aliasName"></a>

```csharp
public string AliasName { get; set; }
```

- *Type:* string

Name of the alias. This should be supplied in conjunction with `alias_mount_accessor`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/identity_group#alias_name DataVaultIdentityGroup#alias_name}

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.groupId"></a>

```csharp
public string GroupId { get; set; }
```

- *Type:* string

ID of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/identity_group#group_id DataVaultIdentityGroup#group_id}

---

##### `GroupName`<sup>Optional</sup> <a name="GroupName" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.groupName"></a>

```csharp
public string GroupName { get; set; }
```

- *Type:* string

Name of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/identity_group#group_name DataVaultIdentityGroup#group_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/identity_group#id DataVaultIdentityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/identity_group#namespace DataVaultIdentityGroup#namespace}

---



