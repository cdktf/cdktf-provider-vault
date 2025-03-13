# `dataVaultIdentityEntity` Submodule <a name="`dataVaultIdentityEntity` Submodule" id="@cdktf/provider-vault.dataVaultIdentityEntity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultIdentityEntity <a name="DataVaultIdentityEntity" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/identity_entity vault_identity_entity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultIdentityEntity(Construct Scope, string Id, DataVaultIdentityEntityConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig">DataVaultIdentityEntityConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig">DataVaultIdentityEntityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetAliasId">ResetAliasId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetAliasMountAccessor">ResetAliasMountAccessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetAliasName">ResetAliasName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetEntityId">ResetEntityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetEntityName">ResetEntityName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAliasId` <a name="ResetAliasId" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetAliasId"></a>

```csharp
private void ResetAliasId()
```

##### `ResetAliasMountAccessor` <a name="ResetAliasMountAccessor" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetAliasMountAccessor"></a>

```csharp
private void ResetAliasMountAccessor()
```

##### `ResetAliasName` <a name="ResetAliasName" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetAliasName"></a>

```csharp
private void ResetAliasName()
```

##### `ResetEntityId` <a name="ResetEntityId" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetEntityId"></a>

```csharp
private void ResetEntityId()
```

##### `ResetEntityName` <a name="ResetEntityName" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetEntityName"></a>

```csharp
private void ResetEntityName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultIdentityEntity resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultIdentityEntity.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultIdentityEntity.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultIdentityEntity.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultIdentityEntity.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataVaultIdentityEntity resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultIdentityEntity to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultIdentityEntity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/identity_entity#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultIdentityEntity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliases">Aliases</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList">DataVaultIdentityEntityAliasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.dataJson">DataJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.directGroupIds">DirectGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.disabled">Disabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.groupIds">GroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.inheritedGroupIds">InheritedGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.lastUpdateTime">LastUpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.mergedEntityIds">MergedEntityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.metadata">Metadata</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.namespaceId">NamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.policies">Policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasIdInput">AliasIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasMountAccessorInput">AliasMountAccessorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasNameInput">AliasNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.entityIdInput">EntityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.entityNameInput">EntityNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasId">AliasId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasMountAccessor">AliasMountAccessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasName">AliasName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.entityId">EntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.entityName">EntityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Aliases`<sup>Required</sup> <a name="Aliases" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliases"></a>

```csharp
public DataVaultIdentityEntityAliasesList Aliases { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList">DataVaultIdentityEntityAliasesList</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `DataJson`<sup>Required</sup> <a name="DataJson" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.dataJson"></a>

```csharp
public string DataJson { get; }
```

- *Type:* string

---

##### `DirectGroupIds`<sup>Required</sup> <a name="DirectGroupIds" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.directGroupIds"></a>

```csharp
public string[] DirectGroupIds { get; }
```

- *Type:* string[]

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.disabled"></a>

```csharp
public IResolvable Disabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `GroupIds`<sup>Required</sup> <a name="GroupIds" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.groupIds"></a>

```csharp
public string[] GroupIds { get; }
```

- *Type:* string[]

---

##### `InheritedGroupIds`<sup>Required</sup> <a name="InheritedGroupIds" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.inheritedGroupIds"></a>

```csharp
public string[] InheritedGroupIds { get; }
```

- *Type:* string[]

---

##### `LastUpdateTime`<sup>Required</sup> <a name="LastUpdateTime" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.lastUpdateTime"></a>

```csharp
public string LastUpdateTime { get; }
```

- *Type:* string

---

##### `MergedEntityIds`<sup>Required</sup> <a name="MergedEntityIds" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.mergedEntityIds"></a>

```csharp
public string[] MergedEntityIds { get; }
```

- *Type:* string[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.metadata"></a>

```csharp
public StringMap Metadata { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.namespaceId"></a>

```csharp
public string NamespaceId { get; }
```

- *Type:* string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.policies"></a>

```csharp
public string[] Policies { get; }
```

- *Type:* string[]

---

##### `AliasIdInput`<sup>Optional</sup> <a name="AliasIdInput" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasIdInput"></a>

```csharp
public string AliasIdInput { get; }
```

- *Type:* string

---

##### `AliasMountAccessorInput`<sup>Optional</sup> <a name="AliasMountAccessorInput" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasMountAccessorInput"></a>

```csharp
public string AliasMountAccessorInput { get; }
```

- *Type:* string

---

##### `AliasNameInput`<sup>Optional</sup> <a name="AliasNameInput" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasNameInput"></a>

```csharp
public string AliasNameInput { get; }
```

- *Type:* string

---

##### `EntityIdInput`<sup>Optional</sup> <a name="EntityIdInput" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.entityIdInput"></a>

```csharp
public string EntityIdInput { get; }
```

- *Type:* string

---

##### `EntityNameInput`<sup>Optional</sup> <a name="EntityNameInput" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.entityNameInput"></a>

```csharp
public string EntityNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `AliasId`<sup>Required</sup> <a name="AliasId" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasId"></a>

```csharp
public string AliasId { get; }
```

- *Type:* string

---

##### `AliasMountAccessor`<sup>Required</sup> <a name="AliasMountAccessor" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasMountAccessor"></a>

```csharp
public string AliasMountAccessor { get; }
```

- *Type:* string

---

##### `AliasName`<sup>Required</sup> <a name="AliasName" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasName"></a>

```csharp
public string AliasName { get; }
```

- *Type:* string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.entityId"></a>

```csharp
public string EntityId { get; }
```

- *Type:* string

---

##### `EntityName`<sup>Required</sup> <a name="EntityName" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.entityName"></a>

```csharp
public string EntityName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultIdentityEntityAliases <a name="DataVaultIdentityEntityAliases" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliases.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultIdentityEntityAliases {

};
```


### DataVaultIdentityEntityConfig <a name="DataVaultIdentityEntityConfig" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultIdentityEntityConfig {
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
    string EntityId = null,
    string EntityName = null,
    string Id = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.aliasId">AliasId</a></code> | <code>string</code> | ID of the alias. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.aliasMountAccessor">AliasMountAccessor</a></code> | <code>string</code> | Accessor of the mount to which the alias belongs to. This should be supplied in conjunction with `alias_name`. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.aliasName">AliasName</a></code> | <code>string</code> | Name of the alias. This should be supplied in conjunction with `alias_mount_accessor`. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.entityId">EntityId</a></code> | <code>string</code> | ID of the entity. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.entityName">EntityName</a></code> | <code>string</code> | Name of the entity. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/identity_entity#id DataVaultIdentityEntity#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AliasId`<sup>Optional</sup> <a name="AliasId" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.aliasId"></a>

```csharp
public string AliasId { get; set; }
```

- *Type:* string

ID of the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/identity_entity#alias_id DataVaultIdentityEntity#alias_id}

---

##### `AliasMountAccessor`<sup>Optional</sup> <a name="AliasMountAccessor" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.aliasMountAccessor"></a>

```csharp
public string AliasMountAccessor { get; set; }
```

- *Type:* string

Accessor of the mount to which the alias belongs to. This should be supplied in conjunction with `alias_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/identity_entity#alias_mount_accessor DataVaultIdentityEntity#alias_mount_accessor}

---

##### `AliasName`<sup>Optional</sup> <a name="AliasName" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.aliasName"></a>

```csharp
public string AliasName { get; set; }
```

- *Type:* string

Name of the alias. This should be supplied in conjunction with `alias_mount_accessor`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/identity_entity#alias_name DataVaultIdentityEntity#alias_name}

---

##### `EntityId`<sup>Optional</sup> <a name="EntityId" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.entityId"></a>

```csharp
public string EntityId { get; set; }
```

- *Type:* string

ID of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/identity_entity#entity_id DataVaultIdentityEntity#entity_id}

---

##### `EntityName`<sup>Optional</sup> <a name="EntityName" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.entityName"></a>

```csharp
public string EntityName { get; set; }
```

- *Type:* string

Name of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/identity_entity#entity_name DataVaultIdentityEntity#entity_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/identity_entity#id DataVaultIdentityEntity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/identity_entity#namespace DataVaultIdentityEntity#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### DataVaultIdentityEntityAliasesList <a name="DataVaultIdentityEntityAliasesList" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultIdentityEntityAliasesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.get"></a>

```csharp
private DataVaultIdentityEntityAliasesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataVaultIdentityEntityAliasesOutputReference <a name="DataVaultIdentityEntityAliasesOutputReference" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultIdentityEntityAliasesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.canonicalId">CanonicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.lastUpdateTime">LastUpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.mergedFromCanonicalIds">MergedFromCanonicalIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.metadata">Metadata</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.mountAccessor">MountAccessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.mountPath">MountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.mountType">MountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliases">DataVaultIdentityEntityAliases</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CanonicalId`<sup>Required</sup> <a name="CanonicalId" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.canonicalId"></a>

```csharp
public string CanonicalId { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdateTime`<sup>Required</sup> <a name="LastUpdateTime" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.lastUpdateTime"></a>

```csharp
public string LastUpdateTime { get; }
```

- *Type:* string

---

##### `MergedFromCanonicalIds`<sup>Required</sup> <a name="MergedFromCanonicalIds" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.mergedFromCanonicalIds"></a>

```csharp
public string[] MergedFromCanonicalIds { get; }
```

- *Type:* string[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.metadata"></a>

```csharp
public StringMap Metadata { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `MountAccessor`<sup>Required</sup> <a name="MountAccessor" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.mountAccessor"></a>

```csharp
public string MountAccessor { get; }
```

- *Type:* string

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.mountPath"></a>

```csharp
public string MountPath { get; }
```

- *Type:* string

---

##### `MountType`<sup>Required</sup> <a name="MountType" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.mountType"></a>

```csharp
public string MountType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.internalValue"></a>

```csharp
public DataVaultIdentityEntityAliases InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliases">DataVaultIdentityEntityAliases</a>

---



