# `awsSecretBackendRole` Submodule <a name="`awsSecretBackendRole` Submodule" id="@cdktf/provider-vault.awsSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsSecretBackendRole <a name="AwsSecretBackendRole" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_secret_backend_role vault_aws_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/awssecretbackendrole"

awssecretbackendrole.NewAwsSecretBackendRole(scope Construct, id *string, config AwsSecretBackendRoleConfig) AwsSecretBackendRole
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig">AwsSecretBackendRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig">AwsSecretBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetDefaultStsTtl">ResetDefaultStsTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetIamGroups">ResetIamGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetIamTags">ResetIamTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetMaxStsTtl">ResetMaxStsTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetPermissionsBoundaryArn">ResetPermissionsBoundaryArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetPolicyArns">ResetPolicyArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetPolicyDocument">ResetPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetRoleArns">ResetRoleArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetSessionTags">ResetSessionTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetUserPath">ResetUserPath</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDefaultStsTtl` <a name="ResetDefaultStsTtl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetDefaultStsTtl"></a>

```go
func ResetDefaultStsTtl()
```

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetExternalId"></a>

```go
func ResetExternalId()
```

##### `ResetIamGroups` <a name="ResetIamGroups" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetIamGroups"></a>

```go
func ResetIamGroups()
```

##### `ResetIamTags` <a name="ResetIamTags" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetIamTags"></a>

```go
func ResetIamTags()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetId"></a>

```go
func ResetId()
```

##### `ResetMaxStsTtl` <a name="ResetMaxStsTtl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetMaxStsTtl"></a>

```go
func ResetMaxStsTtl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPermissionsBoundaryArn` <a name="ResetPermissionsBoundaryArn" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetPermissionsBoundaryArn"></a>

```go
func ResetPermissionsBoundaryArn()
```

##### `ResetPolicyArns` <a name="ResetPolicyArns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetPolicyArns"></a>

```go
func ResetPolicyArns()
```

##### `ResetPolicyDocument` <a name="ResetPolicyDocument" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetPolicyDocument"></a>

```go
func ResetPolicyDocument()
```

##### `ResetRoleArns` <a name="ResetRoleArns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetRoleArns"></a>

```go
func ResetRoleArns()
```

##### `ResetSessionTags` <a name="ResetSessionTags" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetSessionTags"></a>

```go
func ResetSessionTags()
```

##### `ResetUserPath` <a name="ResetUserPath" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetUserPath"></a>

```go
func ResetUserPath()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AwsSecretBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/awssecretbackendrole"

awssecretbackendrole.AwsSecretBackendRole_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/awssecretbackendrole"

awssecretbackendrole.AwsSecretBackendRole_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/awssecretbackendrole"

awssecretbackendrole.AwsSecretBackendRole_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/awssecretbackendrole"

awssecretbackendrole.AwsSecretBackendRole_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AwsSecretBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AwsSecretBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AwsSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AwsSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.credentialTypeInput">CredentialTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.defaultStsTtlInput">DefaultStsTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.externalIdInput">ExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.iamGroupsInput">IamGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.iamTagsInput">IamTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.maxStsTtlInput">MaxStsTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.permissionsBoundaryArnInput">PermissionsBoundaryArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyArnsInput">PolicyArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyDocumentInput">PolicyDocumentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.roleArnsInput">RoleArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.sessionTagsInput">SessionTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.userPathInput">UserPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.credentialType">CredentialType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.defaultStsTtl">DefaultStsTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.iamGroups">IamGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.iamTags">IamTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.maxStsTtl">MaxStsTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.permissionsBoundaryArn">PermissionsBoundaryArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyArns">PolicyArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyDocument">PolicyDocument</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.roleArns">RoleArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.sessionTags">SessionTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.userPath">UserPath</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `CredentialTypeInput`<sup>Optional</sup> <a name="CredentialTypeInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.credentialTypeInput"></a>

```go
func CredentialTypeInput() *string
```

- *Type:* *string

---

##### `DefaultStsTtlInput`<sup>Optional</sup> <a name="DefaultStsTtlInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.defaultStsTtlInput"></a>

```go
func DefaultStsTtlInput() *f64
```

- *Type:* *f64

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.externalIdInput"></a>

```go
func ExternalIdInput() *string
```

- *Type:* *string

---

##### `IamGroupsInput`<sup>Optional</sup> <a name="IamGroupsInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.iamGroupsInput"></a>

```go
func IamGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IamTagsInput`<sup>Optional</sup> <a name="IamTagsInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.iamTagsInput"></a>

```go
func IamTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaxStsTtlInput`<sup>Optional</sup> <a name="MaxStsTtlInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.maxStsTtlInput"></a>

```go
func MaxStsTtlInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PermissionsBoundaryArnInput`<sup>Optional</sup> <a name="PermissionsBoundaryArnInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.permissionsBoundaryArnInput"></a>

```go
func PermissionsBoundaryArnInput() *string
```

- *Type:* *string

---

##### `PolicyArnsInput`<sup>Optional</sup> <a name="PolicyArnsInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyArnsInput"></a>

```go
func PolicyArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PolicyDocumentInput`<sup>Optional</sup> <a name="PolicyDocumentInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyDocumentInput"></a>

```go
func PolicyDocumentInput() *string
```

- *Type:* *string

---

##### `RoleArnsInput`<sup>Optional</sup> <a name="RoleArnsInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.roleArnsInput"></a>

```go
func RoleArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SessionTagsInput`<sup>Optional</sup> <a name="SessionTagsInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.sessionTagsInput"></a>

```go
func SessionTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UserPathInput`<sup>Optional</sup> <a name="UserPathInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.userPathInput"></a>

```go
func UserPathInput() *string
```

- *Type:* *string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.credentialType"></a>

```go
func CredentialType() *string
```

- *Type:* *string

---

##### `DefaultStsTtl`<sup>Required</sup> <a name="DefaultStsTtl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.defaultStsTtl"></a>

```go
func DefaultStsTtl() *f64
```

- *Type:* *f64

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `IamGroups`<sup>Required</sup> <a name="IamGroups" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.iamGroups"></a>

```go
func IamGroups() *[]*string
```

- *Type:* *[]*string

---

##### `IamTags`<sup>Required</sup> <a name="IamTags" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.iamTags"></a>

```go
func IamTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxStsTtl`<sup>Required</sup> <a name="MaxStsTtl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.maxStsTtl"></a>

```go
func MaxStsTtl() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `PermissionsBoundaryArn`<sup>Required</sup> <a name="PermissionsBoundaryArn" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.permissionsBoundaryArn"></a>

```go
func PermissionsBoundaryArn() *string
```

- *Type:* *string

---

##### `PolicyArns`<sup>Required</sup> <a name="PolicyArns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyArns"></a>

```go
func PolicyArns() *[]*string
```

- *Type:* *[]*string

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyDocument"></a>

```go
func PolicyDocument() *string
```

- *Type:* *string

---

##### `RoleArns`<sup>Required</sup> <a name="RoleArns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.roleArns"></a>

```go
func RoleArns() *[]*string
```

- *Type:* *[]*string

---

##### `SessionTags`<sup>Required</sup> <a name="SessionTags" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.sessionTags"></a>

```go
func SessionTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UserPath`<sup>Required</sup> <a name="UserPath" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.userPath"></a>

```go
func UserPath() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsSecretBackendRoleConfig <a name="AwsSecretBackendRoleConfig" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/awssecretbackendrole"

&awssecretbackendrole.AwsSecretBackendRoleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	CredentialType: *string,
	Name: *string,
	DefaultStsTtl: *f64,
	ExternalId: *string,
	IamGroups: *[]*string,
	IamTags: *map[string]*string,
	Id: *string,
	MaxStsTtl: *f64,
	Namespace: *string,
	PermissionsBoundaryArn: *string,
	PolicyArns: *[]*string,
	PolicyDocument: *string,
	RoleArns: *[]*string,
	SessionTags: *map[string]*string,
	UserPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.backend">Backend</a></code> | <code>*string</code> | The path of the AWS Secret Backend the role belongs to. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.credentialType">CredentialType</a></code> | <code>*string</code> | Role credential type. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.name">Name</a></code> | <code>*string</code> | Unique name for the role. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.defaultStsTtl">DefaultStsTtl</a></code> | <code>*f64</code> | The default TTL in seconds for STS credentials. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.externalId">ExternalId</a></code> | <code>*string</code> | External ID to set for assume role creds. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.iamGroups">IamGroups</a></code> | <code>*[]*string</code> | A list of IAM group names. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.iamTags">IamTags</a></code> | <code>*map[string]*string</code> | A map of strings representing key/value pairs used as tags for any IAM user created by this role. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_secret_backend_role#id AwsSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.maxStsTtl">MaxStsTtl</a></code> | <code>*f64</code> | The max allowed TTL in seconds for STS credentials (credentials TTL are capped to max_sts_ttl). |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.permissionsBoundaryArn">PermissionsBoundaryArn</a></code> | <code>*string</code> | The ARN of the AWS Permissions Boundary to attach to IAM users created in the role. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.policyArns">PolicyArns</a></code> | <code>*[]*string</code> | ARN for an existing IAM policy the role should use. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.policyDocument">PolicyDocument</a></code> | <code>*string</code> | IAM policy the role should use in JSON format. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.roleArns">RoleArns</a></code> | <code>*[]*string</code> | ARNs of AWS roles allowed to be assumed. Only valid when credential_type is 'assumed_role'. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.sessionTags">SessionTags</a></code> | <code>*map[string]*string</code> | Session tags to be set for assume role creds created. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.userPath">UserPath</a></code> | <code>*string</code> | The path for the user name. Valid only when credential_type is iam_user. Default is /. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

The path of the AWS Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_secret_backend_role#backend AwsSecretBackendRole#backend}

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.credentialType"></a>

```go
CredentialType *string
```

- *Type:* *string

Role credential type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_secret_backend_role#credential_type AwsSecretBackendRole#credential_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Unique name for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_secret_backend_role#name AwsSecretBackendRole#name}

---

##### `DefaultStsTtl`<sup>Optional</sup> <a name="DefaultStsTtl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.defaultStsTtl"></a>

```go
DefaultStsTtl *f64
```

- *Type:* *f64

The default TTL in seconds for STS credentials.

When a TTL is not specified when STS credentials are requested, and a default TTL is specified on the role, then this default TTL will be used. Valid only when credential_type is one of assumed_role or federation_token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_secret_backend_role#default_sts_ttl AwsSecretBackendRole#default_sts_ttl}

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.externalId"></a>

```go
ExternalId *string
```

- *Type:* *string

External ID to set for assume role creds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_secret_backend_role#external_id AwsSecretBackendRole#external_id}

---

##### `IamGroups`<sup>Optional</sup> <a name="IamGroups" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.iamGroups"></a>

```go
IamGroups *[]*string
```

- *Type:* *[]*string

A list of IAM group names.

IAM users generated against this vault role will be added to these IAM Groups. For a credential type of assumed_role or federation_token, the policies sent to the corresponding AWS call (sts:AssumeRole or sts:GetFederation) will be the policies from each group in iam_groups combined with the policy_document and policy_arns parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_secret_backend_role#iam_groups AwsSecretBackendRole#iam_groups}

---

##### `IamTags`<sup>Optional</sup> <a name="IamTags" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.iamTags"></a>

```go
IamTags *map[string]*string
```

- *Type:* *map[string]*string

A map of strings representing key/value pairs used as tags for any IAM user created by this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_secret_backend_role#iam_tags AwsSecretBackendRole#iam_tags}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_secret_backend_role#id AwsSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxStsTtl`<sup>Optional</sup> <a name="MaxStsTtl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.maxStsTtl"></a>

```go
MaxStsTtl *f64
```

- *Type:* *f64

The max allowed TTL in seconds for STS credentials (credentials TTL are capped to max_sts_ttl).

Valid only when credential_type is one of assumed_role or federation_token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_secret_backend_role#max_sts_ttl AwsSecretBackendRole#max_sts_ttl}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_secret_backend_role#namespace AwsSecretBackendRole#namespace}

---

##### `PermissionsBoundaryArn`<sup>Optional</sup> <a name="PermissionsBoundaryArn" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.permissionsBoundaryArn"></a>

```go
PermissionsBoundaryArn *string
```

- *Type:* *string

The ARN of the AWS Permissions Boundary to attach to IAM users created in the role.

Valid only when credential_type is iam_user. If not specified, then no permissions boundary policy will be attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_secret_backend_role#permissions_boundary_arn AwsSecretBackendRole#permissions_boundary_arn}

---

##### `PolicyArns`<sup>Optional</sup> <a name="PolicyArns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.policyArns"></a>

```go
PolicyArns *[]*string
```

- *Type:* *[]*string

ARN for an existing IAM policy the role should use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_secret_backend_role#policy_arns AwsSecretBackendRole#policy_arns}

---

##### `PolicyDocument`<sup>Optional</sup> <a name="PolicyDocument" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.policyDocument"></a>

```go
PolicyDocument *string
```

- *Type:* *string

IAM policy the role should use in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_secret_backend_role#policy_document AwsSecretBackendRole#policy_document}

---

##### `RoleArns`<sup>Optional</sup> <a name="RoleArns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.roleArns"></a>

```go
RoleArns *[]*string
```

- *Type:* *[]*string

ARNs of AWS roles allowed to be assumed. Only valid when credential_type is 'assumed_role'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_secret_backend_role#role_arns AwsSecretBackendRole#role_arns}

---

##### `SessionTags`<sup>Optional</sup> <a name="SessionTags" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.sessionTags"></a>

```go
SessionTags *map[string]*string
```

- *Type:* *map[string]*string

Session tags to be set for assume role creds created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_secret_backend_role#session_tags AwsSecretBackendRole#session_tags}

---

##### `UserPath`<sup>Optional</sup> <a name="UserPath" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.userPath"></a>

```go
UserPath *string
```

- *Type:* *string

The path for the user name. Valid only when credential_type is iam_user. Default is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_secret_backend_role#user_path AwsSecretBackendRole#user_path}

---



