# `awsAuthBackendConfigIdentity` Submodule <a name="`awsAuthBackendConfigIdentity` Submodule" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAuthBackendConfigIdentity <a name="AwsAuthBackendConfigIdentity" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_config_identity vault_aws_auth_backend_config_identity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/awsauthbackendconfigidentity"

awsauthbackendconfigidentity.NewAwsAuthBackendConfigIdentity(scope Construct, id *string, config AwsAuthBackendConfigIdentityConfig) AwsAuthBackendConfigIdentity
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig">AwsAuthBackendConfigIdentityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig">AwsAuthBackendConfigIdentityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetEc2Alias">ResetEc2Alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetEc2Metadata">ResetEc2Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetIamAlias">ResetIamAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetIamMetadata">ResetIamMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetBackend"></a>

```go
func ResetBackend()
```

##### `ResetEc2Alias` <a name="ResetEc2Alias" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetEc2Alias"></a>

```go
func ResetEc2Alias()
```

##### `ResetEc2Metadata` <a name="ResetEc2Metadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetEc2Metadata"></a>

```go
func ResetEc2Metadata()
```

##### `ResetIamAlias` <a name="ResetIamAlias" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetIamAlias"></a>

```go
func ResetIamAlias()
```

##### `ResetIamMetadata` <a name="ResetIamMetadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetIamMetadata"></a>

```go
func ResetIamMetadata()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AwsAuthBackendConfigIdentity resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/awsauthbackendconfigidentity"

awsauthbackendconfigidentity.AwsAuthBackendConfigIdentity_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/awsauthbackendconfigidentity"

awsauthbackendconfigidentity.AwsAuthBackendConfigIdentity_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/awsauthbackendconfigidentity"

awsauthbackendconfigidentity.AwsAuthBackendConfigIdentity_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/awsauthbackendconfigidentity"

awsauthbackendconfigidentity.AwsAuthBackendConfigIdentity_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AwsAuthBackendConfigIdentity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AwsAuthBackendConfigIdentity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AwsAuthBackendConfigIdentity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_config_identity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AwsAuthBackendConfigIdentity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.ec2AliasInput">Ec2AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.ec2MetadataInput">Ec2MetadataInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.iamAliasInput">IamAliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.iamMetadataInput">IamMetadataInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.ec2Alias">Ec2Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.ec2Metadata">Ec2Metadata</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.iamAlias">IamAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.iamMetadata">IamMetadata</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `Ec2AliasInput`<sup>Optional</sup> <a name="Ec2AliasInput" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.ec2AliasInput"></a>

```go
func Ec2AliasInput() *string
```

- *Type:* *string

---

##### `Ec2MetadataInput`<sup>Optional</sup> <a name="Ec2MetadataInput" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.ec2MetadataInput"></a>

```go
func Ec2MetadataInput() *[]*string
```

- *Type:* *[]*string

---

##### `IamAliasInput`<sup>Optional</sup> <a name="IamAliasInput" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.iamAliasInput"></a>

```go
func IamAliasInput() *string
```

- *Type:* *string

---

##### `IamMetadataInput`<sup>Optional</sup> <a name="IamMetadataInput" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.iamMetadataInput"></a>

```go
func IamMetadataInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `Ec2Alias`<sup>Required</sup> <a name="Ec2Alias" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.ec2Alias"></a>

```go
func Ec2Alias() *string
```

- *Type:* *string

---

##### `Ec2Metadata`<sup>Required</sup> <a name="Ec2Metadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.ec2Metadata"></a>

```go
func Ec2Metadata() *[]*string
```

- *Type:* *[]*string

---

##### `IamAlias`<sup>Required</sup> <a name="IamAlias" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.iamAlias"></a>

```go
func IamAlias() *string
```

- *Type:* *string

---

##### `IamMetadata`<sup>Required</sup> <a name="IamMetadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.iamMetadata"></a>

```go
func IamMetadata() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsAuthBackendConfigIdentityConfig <a name="AwsAuthBackendConfigIdentityConfig" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/awsauthbackendconfigidentity"

&awsauthbackendconfigidentity.AwsAuthBackendConfigIdentityConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	Ec2Alias: *string,
	Ec2Metadata: *[]*string,
	IamAlias: *string,
	IamMetadata: *[]*string,
	Id: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.backend">Backend</a></code> | <code>*string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.ec2Alias">Ec2Alias</a></code> | <code>*string</code> | Configures how to generate the identity alias when using the ec2 auth method. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.ec2Metadata">Ec2Metadata</a></code> | <code>*[]*string</code> | The metadata to include on the token returned by the login endpoint. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.iamAlias">IamAlias</a></code> | <code>*string</code> | How to generate the identity alias when using the iam auth method. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.iamMetadata">IamMetadata</a></code> | <code>*[]*string</code> | The metadata to include on the token returned by the login endpoint. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_config_identity#id AwsAuthBackendConfigIdentity#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_config_identity#backend AwsAuthBackendConfigIdentity#backend}

---

##### `Ec2Alias`<sup>Optional</sup> <a name="Ec2Alias" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.ec2Alias"></a>

```go
Ec2Alias *string
```

- *Type:* *string

Configures how to generate the identity alias when using the ec2 auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_config_identity#ec2_alias AwsAuthBackendConfigIdentity#ec2_alias}

---

##### `Ec2Metadata`<sup>Optional</sup> <a name="Ec2Metadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.ec2Metadata"></a>

```go
Ec2Metadata *[]*string
```

- *Type:* *[]*string

The metadata to include on the token returned by the login endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_config_identity#ec2_metadata AwsAuthBackendConfigIdentity#ec2_metadata}

---

##### `IamAlias`<sup>Optional</sup> <a name="IamAlias" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.iamAlias"></a>

```go
IamAlias *string
```

- *Type:* *string

How to generate the identity alias when using the iam auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_config_identity#iam_alias AwsAuthBackendConfigIdentity#iam_alias}

---

##### `IamMetadata`<sup>Optional</sup> <a name="IamMetadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.iamMetadata"></a>

```go
IamMetadata *[]*string
```

- *Type:* *[]*string

The metadata to include on the token returned by the login endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_config_identity#iam_metadata AwsAuthBackendConfigIdentity#iam_metadata}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_config_identity#id AwsAuthBackendConfigIdentity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_config_identity#namespace AwsAuthBackendConfigIdentity#namespace}

---



