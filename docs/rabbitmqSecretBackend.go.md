# `rabbitmqSecretBackend` Submodule <a name="`rabbitmqSecretBackend` Submodule" id="@cdktf/provider-vault.rabbitmqSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RabbitmqSecretBackend <a name="RabbitmqSecretBackend" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/rabbitmq_secret_backend vault_rabbitmq_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/rabbitmqsecretbackend"

rabbitmqsecretbackend.NewRabbitmqSecretBackend(scope Construct, id *string, config RabbitmqSecretBackendConfig) RabbitmqSecretBackend
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig">RabbitmqSecretBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig">RabbitmqSecretBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetDefaultLeaseTtlSeconds">ResetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetDisableRemount">ResetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetMaxLeaseTtlSeconds">ResetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetPasswordPolicy">ResetPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDefaultLeaseTtlSeconds` <a name="ResetDefaultLeaseTtlSeconds" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```go
func ResetDefaultLeaseTtlSeconds()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisableRemount` <a name="ResetDisableRemount" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetDisableRemount"></a>

```go
func ResetDisableRemount()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetId"></a>

```go
func ResetId()
```

##### `ResetMaxLeaseTtlSeconds` <a name="ResetMaxLeaseTtlSeconds" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetMaxLeaseTtlSeconds"></a>

```go
func ResetMaxLeaseTtlSeconds()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPasswordPolicy` <a name="ResetPasswordPolicy" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetPasswordPolicy"></a>

```go
func ResetPasswordPolicy()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetPath"></a>

```go
func ResetPath()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetVerifyConnection"></a>

```go
func ResetVerifyConnection()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RabbitmqSecretBackend resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/rabbitmqsecretbackend"

rabbitmqsecretbackend.RabbitmqSecretBackend_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/rabbitmqsecretbackend"

rabbitmqsecretbackend.RabbitmqSecretBackend_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/rabbitmqsecretbackend"

rabbitmqsecretbackend.RabbitmqSecretBackend_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/rabbitmqsecretbackend"

rabbitmqsecretbackend.RabbitmqSecretBackend_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a RabbitmqSecretBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RabbitmqSecretBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RabbitmqSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/rabbitmq_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the RabbitmqSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.connectionUriInput">ConnectionUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.defaultLeaseTtlSecondsInput">DefaultLeaseTtlSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.disableRemountInput">DisableRemountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.maxLeaseTtlSecondsInput">MaxLeaseTtlSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.passwordPolicyInput">PasswordPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.connectionUri">ConnectionUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.disableRemount">DisableRemount</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.passwordPolicy">PasswordPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionUriInput`<sup>Optional</sup> <a name="ConnectionUriInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.connectionUriInput"></a>

```go
func ConnectionUriInput() *string
```

- *Type:* *string

---

##### `DefaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="DefaultLeaseTtlSecondsInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```go
func DefaultLeaseTtlSecondsInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisableRemountInput`<sup>Optional</sup> <a name="DisableRemountInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.disableRemountInput"></a>

```go
func DisableRemountInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="MaxLeaseTtlSecondsInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```go
func MaxLeaseTtlSecondsInput() *f64
```

- *Type:* *f64

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PasswordPolicyInput`<sup>Optional</sup> <a name="PasswordPolicyInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.passwordPolicyInput"></a>

```go
func PasswordPolicyInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.verifyConnectionInput"></a>

```go
func VerifyConnectionInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectionUri`<sup>Required</sup> <a name="ConnectionUri" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.connectionUri"></a>

```go
func ConnectionUri() *string
```

- *Type:* *string

---

##### `DefaultLeaseTtlSeconds`<sup>Required</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.defaultLeaseTtlSeconds"></a>

```go
func DefaultLeaseTtlSeconds() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisableRemount`<sup>Required</sup> <a name="DisableRemount" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.disableRemount"></a>

```go
func DisableRemount() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxLeaseTtlSeconds`<sup>Required</sup> <a name="MaxLeaseTtlSeconds" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.maxLeaseTtlSeconds"></a>

```go
func MaxLeaseTtlSeconds() *f64
```

- *Type:* *f64

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PasswordPolicy`<sup>Required</sup> <a name="PasswordPolicy" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.passwordPolicy"></a>

```go
func PasswordPolicy() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.verifyConnection"></a>

```go
func VerifyConnection() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RabbitmqSecretBackendConfig <a name="RabbitmqSecretBackendConfig" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/rabbitmqsecretbackend"

&rabbitmqsecretbackend.RabbitmqSecretBackendConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConnectionUri: *string,
	Password: *string,
	Username: *string,
	DefaultLeaseTtlSeconds: *f64,
	Description: *string,
	DisableRemount: interface{},
	Id: *string,
	MaxLeaseTtlSeconds: *f64,
	Namespace: *string,
	PasswordPolicy: *string,
	Path: *string,
	UsernameTemplate: *string,
	VerifyConnection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.connectionUri">ConnectionUri</a></code> | <code>*string</code> | Specifies the RabbitMQ connection URI. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.password">Password</a></code> | <code>*string</code> | Specifies the RabbitMQ management administrator password. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.username">Username</a></code> | <code>*string</code> | Specifies the RabbitMQ management administrator username. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>*f64</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.description">Description</a></code> | <code>*string</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.disableRemount">DisableRemount</a></code> | <code>interface{}</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/rabbitmq_secret_backend#id RabbitmqSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>*f64</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.passwordPolicy">PasswordPolicy</a></code> | <code>*string</code> | Specifies a password policy to use when creating dynamic credentials. Defaults to generating an alphanumeric password if not set. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.path">Path</a></code> | <code>*string</code> | The path of the RabbitMQ Secret Backend where the connection should be configured. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | Template describing how dynamic usernames are generated. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | Specifies whether to verify connection URI, username, and password. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionUri`<sup>Required</sup> <a name="ConnectionUri" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.connectionUri"></a>

```go
ConnectionUri *string
```

- *Type:* *string

Specifies the RabbitMQ connection URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/rabbitmq_secret_backend#connection_uri RabbitmqSecretBackend#connection_uri}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

Specifies the RabbitMQ management administrator password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/rabbitmq_secret_backend#password RabbitmqSecretBackend#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

Specifies the RabbitMQ management administrator username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/rabbitmq_secret_backend#username RabbitmqSecretBackend#username}

---

##### `DefaultLeaseTtlSeconds`<sup>Optional</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```go
DefaultLeaseTtlSeconds *f64
```

- *Type:* *f64

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/rabbitmq_secret_backend#default_lease_ttl_seconds RabbitmqSecretBackend#default_lease_ttl_seconds}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/rabbitmq_secret_backend#description RabbitmqSecretBackend#description}

---

##### `DisableRemount`<sup>Optional</sup> <a name="DisableRemount" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.disableRemount"></a>

```go
DisableRemount interface{}
```

- *Type:* interface{}

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/rabbitmq_secret_backend#disable_remount RabbitmqSecretBackend#disable_remount}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/rabbitmq_secret_backend#id RabbitmqSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxLeaseTtlSeconds`<sup>Optional</sup> <a name="MaxLeaseTtlSeconds" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```go
MaxLeaseTtlSeconds *f64
```

- *Type:* *f64

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/rabbitmq_secret_backend#max_lease_ttl_seconds RabbitmqSecretBackend#max_lease_ttl_seconds}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/rabbitmq_secret_backend#namespace RabbitmqSecretBackend#namespace}

---

##### `PasswordPolicy`<sup>Optional</sup> <a name="PasswordPolicy" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.passwordPolicy"></a>

```go
PasswordPolicy *string
```

- *Type:* *string

Specifies a password policy to use when creating dynamic credentials. Defaults to generating an alphanumeric password if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/rabbitmq_secret_backend#password_policy RabbitmqSecretBackend#password_policy}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

The path of the RabbitMQ Secret Backend where the connection should be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/rabbitmq_secret_backend#path RabbitmqSecretBackend#path}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/rabbitmq_secret_backend#username_template RabbitmqSecretBackend#username_template}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.verifyConnection"></a>

```go
VerifyConnection interface{}
```

- *Type:* interface{}

Specifies whether to verify connection URI, username, and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/rabbitmq_secret_backend#verify_connection RabbitmqSecretBackend#verify_connection}

---



