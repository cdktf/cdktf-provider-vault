# `awsAuthBackendRoletagBlacklist` Submodule <a name="`awsAuthBackendRoletagBlacklist` Submodule" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAuthBackendRoletagBlacklist <a name="AwsAuthBackendRoletagBlacklist" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/aws_auth_backend_roletag_blacklist vault_aws_auth_backend_roletag_blacklist}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/awsauthbackendroletagblacklist"

awsauthbackendroletagblacklist.NewAwsAuthBackendRoletagBlacklist(scope Construct, id *string, config AwsAuthBackendRoletagBlacklistConfig) AwsAuthBackendRoletagBlacklist
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig">AwsAuthBackendRoletagBlacklistConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig">AwsAuthBackendRoletagBlacklistConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.resetDisablePeriodicTidy">ResetDisablePeriodicTidy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.resetSafetyBuffer">ResetSafetyBuffer</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDisablePeriodicTidy` <a name="ResetDisablePeriodicTidy" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.resetDisablePeriodicTidy"></a>

```go
func ResetDisablePeriodicTidy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetSafetyBuffer` <a name="ResetSafetyBuffer" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.resetSafetyBuffer"></a>

```go
func ResetSafetyBuffer()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AwsAuthBackendRoletagBlacklist resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/awsauthbackendroletagblacklist"

awsauthbackendroletagblacklist.AwsAuthBackendRoletagBlacklist_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/awsauthbackendroletagblacklist"

awsauthbackendroletagblacklist.AwsAuthBackendRoletagBlacklist_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/awsauthbackendroletagblacklist"

awsauthbackendroletagblacklist.AwsAuthBackendRoletagBlacklist_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/awsauthbackendroletagblacklist"

awsauthbackendroletagblacklist.AwsAuthBackendRoletagBlacklist_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AwsAuthBackendRoletagBlacklist resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AwsAuthBackendRoletagBlacklist to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AwsAuthBackendRoletagBlacklist that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/aws_auth_backend_roletag_blacklist#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AwsAuthBackendRoletagBlacklist to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.disablePeriodicTidyInput">DisablePeriodicTidyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.safetyBufferInput">SafetyBufferInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.disablePeriodicTidy">DisablePeriodicTidy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.safetyBuffer">SafetyBuffer</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `DisablePeriodicTidyInput`<sup>Optional</sup> <a name="DisablePeriodicTidyInput" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.disablePeriodicTidyInput"></a>

```go
func DisablePeriodicTidyInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `SafetyBufferInput`<sup>Optional</sup> <a name="SafetyBufferInput" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.safetyBufferInput"></a>

```go
func SafetyBufferInput() *f64
```

- *Type:* *f64

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `DisablePeriodicTidy`<sup>Required</sup> <a name="DisablePeriodicTidy" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.disablePeriodicTidy"></a>

```go
func DisablePeriodicTidy() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `SafetyBuffer`<sup>Required</sup> <a name="SafetyBuffer" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.safetyBuffer"></a>

```go
func SafetyBuffer() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsAuthBackendRoletagBlacklistConfig <a name="AwsAuthBackendRoletagBlacklistConfig" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/awsauthbackendroletagblacklist"

&awsauthbackendroletagblacklist.AwsAuthBackendRoletagBlacklistConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	DisablePeriodicTidy: interface{},
	Id: *string,
	Namespace: *string,
	SafetyBuffer: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.backend">Backend</a></code> | <code>*string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.disablePeriodicTidy">DisablePeriodicTidy</a></code> | <code>interface{}</code> | If true, disables the periodic tidying of the roletag blacklist entries. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/aws_auth_backend_roletag_blacklist#id AwsAuthBackendRoletagBlacklist#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.safetyBuffer">SafetyBuffer</a></code> | <code>*f64</code> | The amount of extra time that must have passed beyond the roletag expiration, before it's removed from backend storage. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/aws_auth_backend_roletag_blacklist#backend AwsAuthBackendRoletagBlacklist#backend}

---

##### `DisablePeriodicTidy`<sup>Optional</sup> <a name="DisablePeriodicTidy" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.disablePeriodicTidy"></a>

```go
DisablePeriodicTidy interface{}
```

- *Type:* interface{}

If true, disables the periodic tidying of the roletag blacklist entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/aws_auth_backend_roletag_blacklist#disable_periodic_tidy AwsAuthBackendRoletagBlacklist#disable_periodic_tidy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/aws_auth_backend_roletag_blacklist#id AwsAuthBackendRoletagBlacklist#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/aws_auth_backend_roletag_blacklist#namespace AwsAuthBackendRoletagBlacklist#namespace}

---

##### `SafetyBuffer`<sup>Optional</sup> <a name="SafetyBuffer" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.safetyBuffer"></a>

```go
SafetyBuffer *f64
```

- *Type:* *f64

The amount of extra time that must have passed beyond the roletag expiration, before it's removed from backend storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/aws_auth_backend_roletag_blacklist#safety_buffer AwsAuthBackendRoletagBlacklist#safety_buffer}

---



