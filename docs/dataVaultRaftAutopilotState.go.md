# `data_vault_raft_autopilot_state`

Refer to the Terraform Registory for docs: [`data_vault_raft_autopilot_state`](https://www.terraform.io/docs/providers/vault/d/raft_autopilot_state).

# `dataVaultRaftAutopilotState` Submodule <a name="`dataVaultRaftAutopilotState` Submodule" id="@cdktf/provider-vault.dataVaultRaftAutopilotState"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultRaftAutopilotState <a name="DataVaultRaftAutopilotState" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/d/raft_autopilot_state vault_raft_autopilot_state}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/datavaultraftautopilotstate"

datavaultraftautopilotstate.NewDataVaultRaftAutopilotState(scope Construct, id *string, config DataVaultRaftAutopilotStateConfig) DataVaultRaftAutopilotState
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig">DataVaultRaftAutopilotStateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/datavaultraftautopilotstate"

datavaultraftautopilotstate.DataVaultRaftAutopilotState_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/datavaultraftautopilotstate"

datavaultraftautopilotstate.DataVaultRaftAutopilotState_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/datavaultraftautopilotstate"

datavaultraftautopilotstate.DataVaultRaftAutopilotState_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.failureTolerance">FailureTolerance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.healthy">Healthy</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.leader">Leader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.optimisticFailureTolerance">OptimisticFailureTolerance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.redundancyZones">RedundancyZones</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.redundancyZonesJson">RedundancyZonesJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.servers">Servers</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.serversJson">ServersJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.upgradeInfo">UpgradeInfo</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.upgradeInfoJson">UpgradeInfoJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.voters">Voters</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `FailureTolerance`<sup>Required</sup> <a name="FailureTolerance" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.failureTolerance"></a>

```go
func FailureTolerance() *f64
```

- *Type:* *f64

---

##### `Healthy`<sup>Required</sup> <a name="Healthy" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.healthy"></a>

```go
func Healthy() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Leader`<sup>Required</sup> <a name="Leader" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.leader"></a>

```go
func Leader() *string
```

- *Type:* *string

---

##### `OptimisticFailureTolerance`<sup>Required</sup> <a name="OptimisticFailureTolerance" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.optimisticFailureTolerance"></a>

```go
func OptimisticFailureTolerance() *f64
```

- *Type:* *f64

---

##### `RedundancyZones`<sup>Required</sup> <a name="RedundancyZones" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.redundancyZones"></a>

```go
func RedundancyZones() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `RedundancyZonesJson`<sup>Required</sup> <a name="RedundancyZonesJson" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.redundancyZonesJson"></a>

```go
func RedundancyZonesJson() *string
```

- *Type:* *string

---

##### `Servers`<sup>Required</sup> <a name="Servers" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.servers"></a>

```go
func Servers() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ServersJson`<sup>Required</sup> <a name="ServersJson" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.serversJson"></a>

```go
func ServersJson() *string
```

- *Type:* *string

---

##### `UpgradeInfo`<sup>Required</sup> <a name="UpgradeInfo" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.upgradeInfo"></a>

```go
func UpgradeInfo() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `UpgradeInfoJson`<sup>Required</sup> <a name="UpgradeInfoJson" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.upgradeInfoJson"></a>

```go
func UpgradeInfoJson() *string
```

- *Type:* *string

---

##### `Voters`<sup>Required</sup> <a name="Voters" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.voters"></a>

```go
func Voters() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultRaftAutopilotStateConfig <a name="DataVaultRaftAutopilotStateConfig" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/datavaultraftautopilotstate"

&datavaultraftautopilotstate.DataVaultRaftAutopilotStateConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/raft_autopilot_state#id DataVaultRaftAutopilotState#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/raft_autopilot_state#id DataVaultRaftAutopilotState#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/raft_autopilot_state#namespace DataVaultRaftAutopilotState#namespace}

---



