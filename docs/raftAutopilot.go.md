# `raftAutopilot` Submodule <a name="`raftAutopilot` Submodule" id="@cdktf/provider-vault.raftAutopilot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RaftAutopilot <a name="RaftAutopilot" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/raft_autopilot vault_raft_autopilot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/raftautopilot"

raftautopilot.NewRaftAutopilot(scope Construct, id *string, config RaftAutopilotConfig) RaftAutopilot
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig">RaftAutopilotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig">RaftAutopilotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetCleanupDeadServers">ResetCleanupDeadServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetDeadServerLastContactThreshold">ResetDeadServerLastContactThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetDisableUpgradeMigration">ResetDisableUpgradeMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetLastContactThreshold">ResetLastContactThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetMaxTrailingLogs">ResetMaxTrailingLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetMinQuorum">ResetMinQuorum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetServerStabilizationTime">ResetServerStabilizationTime</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCleanupDeadServers` <a name="ResetCleanupDeadServers" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetCleanupDeadServers"></a>

```go
func ResetCleanupDeadServers()
```

##### `ResetDeadServerLastContactThreshold` <a name="ResetDeadServerLastContactThreshold" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetDeadServerLastContactThreshold"></a>

```go
func ResetDeadServerLastContactThreshold()
```

##### `ResetDisableUpgradeMigration` <a name="ResetDisableUpgradeMigration" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetDisableUpgradeMigration"></a>

```go
func ResetDisableUpgradeMigration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetId"></a>

```go
func ResetId()
```

##### `ResetLastContactThreshold` <a name="ResetLastContactThreshold" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetLastContactThreshold"></a>

```go
func ResetLastContactThreshold()
```

##### `ResetMaxTrailingLogs` <a name="ResetMaxTrailingLogs" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetMaxTrailingLogs"></a>

```go
func ResetMaxTrailingLogs()
```

##### `ResetMinQuorum` <a name="ResetMinQuorum" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetMinQuorum"></a>

```go
func ResetMinQuorum()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetServerStabilizationTime` <a name="ResetServerStabilizationTime" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetServerStabilizationTime"></a>

```go
func ResetServerStabilizationTime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RaftAutopilot resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/raftautopilot"

raftautopilot.RaftAutopilot_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/raftautopilot"

raftautopilot.RaftAutopilot_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/raftautopilot"

raftautopilot.RaftAutopilot_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/raftautopilot"

raftautopilot.RaftAutopilot_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a RaftAutopilot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RaftAutopilot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RaftAutopilot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/raft_autopilot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the RaftAutopilot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.cleanupDeadServersInput">CleanupDeadServersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.deadServerLastContactThresholdInput">DeadServerLastContactThresholdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.disableUpgradeMigrationInput">DisableUpgradeMigrationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.lastContactThresholdInput">LastContactThresholdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.maxTrailingLogsInput">MaxTrailingLogsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.minQuorumInput">MinQuorumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.serverStabilizationTimeInput">ServerStabilizationTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.cleanupDeadServers">CleanupDeadServers</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.deadServerLastContactThreshold">DeadServerLastContactThreshold</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.disableUpgradeMigration">DisableUpgradeMigration</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.lastContactThreshold">LastContactThreshold</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.maxTrailingLogs">MaxTrailingLogs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.minQuorum">MinQuorum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.serverStabilizationTime">ServerStabilizationTime</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CleanupDeadServersInput`<sup>Optional</sup> <a name="CleanupDeadServersInput" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.cleanupDeadServersInput"></a>

```go
func CleanupDeadServersInput() interface{}
```

- *Type:* interface{}

---

##### `DeadServerLastContactThresholdInput`<sup>Optional</sup> <a name="DeadServerLastContactThresholdInput" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.deadServerLastContactThresholdInput"></a>

```go
func DeadServerLastContactThresholdInput() *string
```

- *Type:* *string

---

##### `DisableUpgradeMigrationInput`<sup>Optional</sup> <a name="DisableUpgradeMigrationInput" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.disableUpgradeMigrationInput"></a>

```go
func DisableUpgradeMigrationInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LastContactThresholdInput`<sup>Optional</sup> <a name="LastContactThresholdInput" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.lastContactThresholdInput"></a>

```go
func LastContactThresholdInput() *string
```

- *Type:* *string

---

##### `MaxTrailingLogsInput`<sup>Optional</sup> <a name="MaxTrailingLogsInput" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.maxTrailingLogsInput"></a>

```go
func MaxTrailingLogsInput() *f64
```

- *Type:* *f64

---

##### `MinQuorumInput`<sup>Optional</sup> <a name="MinQuorumInput" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.minQuorumInput"></a>

```go
func MinQuorumInput() *f64
```

- *Type:* *f64

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ServerStabilizationTimeInput`<sup>Optional</sup> <a name="ServerStabilizationTimeInput" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.serverStabilizationTimeInput"></a>

```go
func ServerStabilizationTimeInput() *string
```

- *Type:* *string

---

##### `CleanupDeadServers`<sup>Required</sup> <a name="CleanupDeadServers" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.cleanupDeadServers"></a>

```go
func CleanupDeadServers() interface{}
```

- *Type:* interface{}

---

##### `DeadServerLastContactThreshold`<sup>Required</sup> <a name="DeadServerLastContactThreshold" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.deadServerLastContactThreshold"></a>

```go
func DeadServerLastContactThreshold() *string
```

- *Type:* *string

---

##### `DisableUpgradeMigration`<sup>Required</sup> <a name="DisableUpgradeMigration" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.disableUpgradeMigration"></a>

```go
func DisableUpgradeMigration() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastContactThreshold`<sup>Required</sup> <a name="LastContactThreshold" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.lastContactThreshold"></a>

```go
func LastContactThreshold() *string
```

- *Type:* *string

---

##### `MaxTrailingLogs`<sup>Required</sup> <a name="MaxTrailingLogs" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.maxTrailingLogs"></a>

```go
func MaxTrailingLogs() *f64
```

- *Type:* *f64

---

##### `MinQuorum`<sup>Required</sup> <a name="MinQuorum" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.minQuorum"></a>

```go
func MinQuorum() *f64
```

- *Type:* *f64

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `ServerStabilizationTime`<sup>Required</sup> <a name="ServerStabilizationTime" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.serverStabilizationTime"></a>

```go
func ServerStabilizationTime() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RaftAutopilotConfig <a name="RaftAutopilotConfig" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/raftautopilot"

&raftautopilot.RaftAutopilotConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CleanupDeadServers: interface{},
	DeadServerLastContactThreshold: *string,
	DisableUpgradeMigration: interface{},
	Id: *string,
	LastContactThreshold: *string,
	MaxTrailingLogs: *f64,
	MinQuorum: *f64,
	Namespace: *string,
	ServerStabilizationTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.cleanupDeadServers">CleanupDeadServers</a></code> | <code>interface{}</code> | Specifies whether to remove dead server nodes periodically or when a new server joins. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.deadServerLastContactThreshold">DeadServerLastContactThreshold</a></code> | <code>*string</code> | Limit the amount of time a server can go without leader contact before being considered failed. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.disableUpgradeMigration">DisableUpgradeMigration</a></code> | <code>interface{}</code> | Disables automatically upgrading Vault using autopilot. (Enterprise-only). |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/raft_autopilot#id RaftAutopilot#id}. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.lastContactThreshold">LastContactThreshold</a></code> | <code>*string</code> | Limit the amount of time a server can go without leader contact before being considered unhealthy. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.maxTrailingLogs">MaxTrailingLogs</a></code> | <code>*f64</code> | Maximum number of log entries in the Raft log that a server can be behind its leader before being considered unhealthy. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.minQuorum">MinQuorum</a></code> | <code>*f64</code> | Minimum number of servers allowed in a cluster before autopilot can prune dead servers. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.serverStabilizationTime">ServerStabilizationTime</a></code> | <code>*string</code> | Minimum amount of time a server must be stable in the 'healthy' state before being added to the cluster. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CleanupDeadServers`<sup>Optional</sup> <a name="CleanupDeadServers" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.cleanupDeadServers"></a>

```go
CleanupDeadServers interface{}
```

- *Type:* interface{}

Specifies whether to remove dead server nodes periodically or when a new server joins.

This requires that min-quorum is also set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/raft_autopilot#cleanup_dead_servers RaftAutopilot#cleanup_dead_servers}

---

##### `DeadServerLastContactThreshold`<sup>Optional</sup> <a name="DeadServerLastContactThreshold" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.deadServerLastContactThreshold"></a>

```go
DeadServerLastContactThreshold *string
```

- *Type:* *string

Limit the amount of time a server can go without leader contact before being considered failed.

This only takes effect when cleanup_dead_servers is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/raft_autopilot#dead_server_last_contact_threshold RaftAutopilot#dead_server_last_contact_threshold}

---

##### `DisableUpgradeMigration`<sup>Optional</sup> <a name="DisableUpgradeMigration" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.disableUpgradeMigration"></a>

```go
DisableUpgradeMigration interface{}
```

- *Type:* interface{}

Disables automatically upgrading Vault using autopilot. (Enterprise-only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/raft_autopilot#disable_upgrade_migration RaftAutopilot#disable_upgrade_migration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/raft_autopilot#id RaftAutopilot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LastContactThreshold`<sup>Optional</sup> <a name="LastContactThreshold" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.lastContactThreshold"></a>

```go
LastContactThreshold *string
```

- *Type:* *string

Limit the amount of time a server can go without leader contact before being considered unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/raft_autopilot#last_contact_threshold RaftAutopilot#last_contact_threshold}

---

##### `MaxTrailingLogs`<sup>Optional</sup> <a name="MaxTrailingLogs" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.maxTrailingLogs"></a>

```go
MaxTrailingLogs *f64
```

- *Type:* *f64

Maximum number of log entries in the Raft log that a server can be behind its leader before being considered unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/raft_autopilot#max_trailing_logs RaftAutopilot#max_trailing_logs}

---

##### `MinQuorum`<sup>Optional</sup> <a name="MinQuorum" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.minQuorum"></a>

```go
MinQuorum *f64
```

- *Type:* *f64

Minimum number of servers allowed in a cluster before autopilot can prune dead servers.

This should at least be 3. Applicable only for voting nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/raft_autopilot#min_quorum RaftAutopilot#min_quorum}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/raft_autopilot#namespace RaftAutopilot#namespace}

---

##### `ServerStabilizationTime`<sup>Optional</sup> <a name="ServerStabilizationTime" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.serverStabilizationTime"></a>

```go
ServerStabilizationTime *string
```

- *Type:* *string

Minimum amount of time a server must be stable in the 'healthy' state before being added to the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/raft_autopilot#server_stabilization_time RaftAutopilot#server_stabilization_time}

---



