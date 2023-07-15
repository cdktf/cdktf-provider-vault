# `data_vault_raft_autopilot_state`

Refer to the Terraform Registory for docs: [`data_vault_raft_autopilot_state`](https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/raft_autopilot_state).

# `dataVaultRaftAutopilotState` Submodule <a name="`dataVaultRaftAutopilotState` Submodule" id="@cdktf/provider-vault.dataVaultRaftAutopilotState"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultRaftAutopilotState <a name="DataVaultRaftAutopilotState" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/raft_autopilot_state vault_raft_autopilot_state}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultRaftAutopilotState(Construct Scope, string Id, DataVaultRaftAutopilotStateConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig">DataVaultRaftAutopilotStateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig">DataVaultRaftAutopilotStateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultRaftAutopilotState.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultRaftAutopilotState.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultRaftAutopilotState.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.failureTolerance">FailureTolerance</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.healthy">Healthy</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.leader">Leader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.optimisticFailureTolerance">OptimisticFailureTolerance</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.redundancyZones">RedundancyZones</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.redundancyZonesJson">RedundancyZonesJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.servers">Servers</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.serversJson">ServersJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.upgradeInfo">UpgradeInfo</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.upgradeInfoJson">UpgradeInfoJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.voters">Voters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `FailureTolerance`<sup>Required</sup> <a name="FailureTolerance" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.failureTolerance"></a>

```csharp
public double FailureTolerance { get; }
```

- *Type:* double

---

##### `Healthy`<sup>Required</sup> <a name="Healthy" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.healthy"></a>

```csharp
public IResolvable Healthy { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Leader`<sup>Required</sup> <a name="Leader" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.leader"></a>

```csharp
public string Leader { get; }
```

- *Type:* string

---

##### `OptimisticFailureTolerance`<sup>Required</sup> <a name="OptimisticFailureTolerance" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.optimisticFailureTolerance"></a>

```csharp
public double OptimisticFailureTolerance { get; }
```

- *Type:* double

---

##### `RedundancyZones`<sup>Required</sup> <a name="RedundancyZones" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.redundancyZones"></a>

```csharp
public StringMap RedundancyZones { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `RedundancyZonesJson`<sup>Required</sup> <a name="RedundancyZonesJson" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.redundancyZonesJson"></a>

```csharp
public string RedundancyZonesJson { get; }
```

- *Type:* string

---

##### `Servers`<sup>Required</sup> <a name="Servers" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.servers"></a>

```csharp
public StringMap Servers { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ServersJson`<sup>Required</sup> <a name="ServersJson" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.serversJson"></a>

```csharp
public string ServersJson { get; }
```

- *Type:* string

---

##### `UpgradeInfo`<sup>Required</sup> <a name="UpgradeInfo" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.upgradeInfo"></a>

```csharp
public StringMap UpgradeInfo { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `UpgradeInfoJson`<sup>Required</sup> <a name="UpgradeInfoJson" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.upgradeInfoJson"></a>

```csharp
public string UpgradeInfoJson { get; }
```

- *Type:* string

---

##### `Voters`<sup>Required</sup> <a name="Voters" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.voters"></a>

```csharp
public string[] Voters { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultRaftAutopilotStateConfig <a name="DataVaultRaftAutopilotStateConfig" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultRaftAutopilotStateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/raft_autopilot_state#id DataVaultRaftAutopilotState#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/raft_autopilot_state#id DataVaultRaftAutopilotState#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/raft_autopilot_state#namespace DataVaultRaftAutopilotState#namespace}

---



