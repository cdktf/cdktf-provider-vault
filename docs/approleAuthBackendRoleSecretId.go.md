# `approleAuthBackendRoleSecretId` Submodule <a name="`approleAuthBackendRoleSecretId` Submodule" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApproleAuthBackendRoleSecretId <a name="ApproleAuthBackendRoleSecretId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role_secret_id vault_approle_auth_backend_role_secret_id}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/approleauthbackendrolesecretid"

approleauthbackendrolesecretid.NewApproleAuthBackendRoleSecretId(scope Construct, id *string, config ApproleAuthBackendRoleSecretIdConfig) ApproleAuthBackendRoleSecretId
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig">ApproleAuthBackendRoleSecretIdConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig">ApproleAuthBackendRoleSecretIdConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetCidrList">ResetCidrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetSecretId">ResetSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetWithWrappedAccessor">ResetWithWrappedAccessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetWrappingTtl">ResetWrappingTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetBackend"></a>

```go
func ResetBackend()
```

##### `ResetCidrList` <a name="ResetCidrList" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetCidrList"></a>

```go
func ResetCidrList()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetId"></a>

```go
func ResetId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetSecretId` <a name="ResetSecretId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetSecretId"></a>

```go
func ResetSecretId()
```

##### `ResetWithWrappedAccessor` <a name="ResetWithWrappedAccessor" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetWithWrappedAccessor"></a>

```go
func ResetWithWrappedAccessor()
```

##### `ResetWrappingTtl` <a name="ResetWrappingTtl" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetWrappingTtl"></a>

```go
func ResetWrappingTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApproleAuthBackendRoleSecretId resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/approleauthbackendrolesecretid"

approleauthbackendrolesecretid.ApproleAuthBackendRoleSecretId_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/approleauthbackendrolesecretid"

approleauthbackendrolesecretid.ApproleAuthBackendRoleSecretId_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/approleauthbackendrolesecretid"

approleauthbackendrolesecretid.ApproleAuthBackendRoleSecretId_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/approleauthbackendrolesecretid"

approleauthbackendrolesecretid.ApproleAuthBackendRoleSecretId_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApproleAuthBackendRoleSecretId resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApproleAuthBackendRoleSecretId to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApproleAuthBackendRoleSecretId that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role_secret_id#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApproleAuthBackendRoleSecretId to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.accessor">Accessor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.wrappingAccessor">WrappingAccessor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.wrappingToken">WrappingToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.cidrListInput">CidrListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.metadataInput">MetadataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.roleNameInput">RoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.secretIdInput">SecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.withWrappedAccessorInput">WithWrappedAccessorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.wrappingTtlInput">WrappingTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.cidrList">CidrList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.metadata">Metadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.roleName">RoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.withWrappedAccessor">WithWrappedAccessor</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.wrappingTtl">WrappingTtl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.accessor"></a>

```go
func Accessor() *string
```

- *Type:* *string

---

##### `WrappingAccessor`<sup>Required</sup> <a name="WrappingAccessor" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.wrappingAccessor"></a>

```go
func WrappingAccessor() *string
```

- *Type:* *string

---

##### `WrappingToken`<sup>Required</sup> <a name="WrappingToken" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.wrappingToken"></a>

```go
func WrappingToken() *string
```

- *Type:* *string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `CidrListInput`<sup>Optional</sup> <a name="CidrListInput" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.cidrListInput"></a>

```go
func CidrListInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.metadataInput"></a>

```go
func MetadataInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.roleNameInput"></a>

```go
func RoleNameInput() *string
```

- *Type:* *string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.secretIdInput"></a>

```go
func SecretIdInput() *string
```

- *Type:* *string

---

##### `WithWrappedAccessorInput`<sup>Optional</sup> <a name="WithWrappedAccessorInput" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.withWrappedAccessorInput"></a>

```go
func WithWrappedAccessorInput() interface{}
```

- *Type:* interface{}

---

##### `WrappingTtlInput`<sup>Optional</sup> <a name="WrappingTtlInput" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.wrappingTtlInput"></a>

```go
func WrappingTtlInput() *string
```

- *Type:* *string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `CidrList`<sup>Required</sup> <a name="CidrList" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.cidrList"></a>

```go
func CidrList() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.metadata"></a>

```go
func Metadata() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.roleName"></a>

```go
func RoleName() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `WithWrappedAccessor`<sup>Required</sup> <a name="WithWrappedAccessor" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.withWrappedAccessor"></a>

```go
func WithWrappedAccessor() interface{}
```

- *Type:* interface{}

---

##### `WrappingTtl`<sup>Required</sup> <a name="WrappingTtl" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.wrappingTtl"></a>

```go
func WrappingTtl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApproleAuthBackendRoleSecretIdConfig <a name="ApproleAuthBackendRoleSecretIdConfig" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/approleauthbackendrolesecretid"

&approleauthbackendrolesecretid.ApproleAuthBackendRoleSecretIdConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	RoleName: *string,
	Backend: *string,
	CidrList: *[]*string,
	Id: *string,
	Metadata: *string,
	Namespace: *string,
	SecretId: *string,
	WithWrappedAccessor: interface{},
	WrappingTtl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.roleName">RoleName</a></code> | <code>*string</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.backend">Backend</a></code> | <code>*string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.cidrList">CidrList</a></code> | <code>*[]*string</code> | List of CIDR blocks that can log in using the SecretID. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role_secret_id#id ApproleAuthBackendRoleSecretId#id}. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.metadata">Metadata</a></code> | <code>*string</code> | JSON-encoded secret data to write. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.secretId">SecretId</a></code> | <code>*string</code> | The SecretID to be managed. If not specified, Vault auto-generates one. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.withWrappedAccessor">WithWrappedAccessor</a></code> | <code>interface{}</code> | Use the wrapped secret-id accessor as the id of this resource. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.wrappingTtl">WrappingTtl</a></code> | <code>*string</code> | The TTL duration of the wrapped SecretID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.roleName"></a>

```go
RoleName *string
```

- *Type:* *string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role_secret_id#role_name ApproleAuthBackendRoleSecretId#role_name}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role_secret_id#backend ApproleAuthBackendRoleSecretId#backend}

---

##### `CidrList`<sup>Optional</sup> <a name="CidrList" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.cidrList"></a>

```go
CidrList *[]*string
```

- *Type:* *[]*string

List of CIDR blocks that can log in using the SecretID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role_secret_id#cidr_list ApproleAuthBackendRoleSecretId#cidr_list}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role_secret_id#id ApproleAuthBackendRoleSecretId#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.metadata"></a>

```go
Metadata *string
```

- *Type:* *string

JSON-encoded secret data to write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role_secret_id#metadata ApproleAuthBackendRoleSecretId#metadata}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role_secret_id#namespace ApproleAuthBackendRoleSecretId#namespace}

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.secretId"></a>

```go
SecretId *string
```

- *Type:* *string

The SecretID to be managed. If not specified, Vault auto-generates one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role_secret_id#secret_id ApproleAuthBackendRoleSecretId#secret_id}

---

##### `WithWrappedAccessor`<sup>Optional</sup> <a name="WithWrappedAccessor" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.withWrappedAccessor"></a>

```go
WithWrappedAccessor interface{}
```

- *Type:* interface{}

Use the wrapped secret-id accessor as the id of this resource.

If false, a fresh secret-id will be regenerated whenever the wrapping token is expired or invalidated through unwrapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role_secret_id#with_wrapped_accessor ApproleAuthBackendRoleSecretId#with_wrapped_accessor}

---

##### `WrappingTtl`<sup>Optional</sup> <a name="WrappingTtl" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.wrappingTtl"></a>

```go
WrappingTtl *string
```

- *Type:* *string

The TTL duration of the wrapped SecretID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role_secret_id#wrapping_ttl ApproleAuthBackendRoleSecretId#wrapping_ttl}

---



