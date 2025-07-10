# `awsAuthBackendLogin` Submodule <a name="`awsAuthBackendLogin` Submodule" id="@cdktf/provider-vault.awsAuthBackendLogin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAuthBackendLogin <a name="AwsAuthBackendLogin" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_auth_backend_login vault_aws_auth_backend_login}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/awsauthbackendlogin"

awsauthbackendlogin.NewAwsAuthBackendLogin(scope Construct, id *string, config AwsAuthBackendLoginConfig) AwsAuthBackendLogin
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig">AwsAuthBackendLoginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig">AwsAuthBackendLoginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamHttpRequestMethod">ResetIamHttpRequestMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamRequestBody">ResetIamRequestBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamRequestHeaders">ResetIamRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamRequestUrl">ResetIamRequestUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetNonce">ResetNonce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetPkcs7">ResetPkcs7</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetRole">ResetRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetSignature">ResetSignature</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetBackend"></a>

```go
func ResetBackend()
```

##### `ResetIamHttpRequestMethod` <a name="ResetIamHttpRequestMethod" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamHttpRequestMethod"></a>

```go
func ResetIamHttpRequestMethod()
```

##### `ResetIamRequestBody` <a name="ResetIamRequestBody" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamRequestBody"></a>

```go
func ResetIamRequestBody()
```

##### `ResetIamRequestHeaders` <a name="ResetIamRequestHeaders" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamRequestHeaders"></a>

```go
func ResetIamRequestHeaders()
```

##### `ResetIamRequestUrl` <a name="ResetIamRequestUrl" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamRequestUrl"></a>

```go
func ResetIamRequestUrl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetNonce` <a name="ResetNonce" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetNonce"></a>

```go
func ResetNonce()
```

##### `ResetPkcs7` <a name="ResetPkcs7" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetPkcs7"></a>

```go
func ResetPkcs7()
```

##### `ResetRole` <a name="ResetRole" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetRole"></a>

```go
func ResetRole()
```

##### `ResetSignature` <a name="ResetSignature" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetSignature"></a>

```go
func ResetSignature()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AwsAuthBackendLogin resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/awsauthbackendlogin"

awsauthbackendlogin.AwsAuthBackendLogin_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/awsauthbackendlogin"

awsauthbackendlogin.AwsAuthBackendLogin_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/awsauthbackendlogin"

awsauthbackendlogin.AwsAuthBackendLogin_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/awsauthbackendlogin"

awsauthbackendlogin.AwsAuthBackendLogin_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AwsAuthBackendLogin resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AwsAuthBackendLogin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AwsAuthBackendLogin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_auth_backend_login#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AwsAuthBackendLogin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.accessor">Accessor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.clientToken">ClientToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.leaseDuration">LeaseDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.leaseStartTime">LeaseStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.metadata">Metadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.policies">Policies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.renewable">Renewable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamHttpRequestMethodInput">IamHttpRequestMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestBodyInput">IamRequestBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestHeadersInput">IamRequestHeadersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestUrlInput">IamRequestUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.identityInput">IdentityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.nonceInput">NonceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.pkcs7Input">Pkcs7Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.signatureInput">SignatureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamHttpRequestMethod">IamHttpRequestMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestBody">IamRequestBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestHeaders">IamRequestHeaders</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestUrl">IamRequestUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.identity">Identity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.nonce">Nonce</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.pkcs7">Pkcs7</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.signature">Signature</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.accessor"></a>

```go
func Accessor() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.clientToken"></a>

```go
func ClientToken() *string
```

- *Type:* *string

---

##### `LeaseDuration`<sup>Required</sup> <a name="LeaseDuration" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.leaseDuration"></a>

```go
func LeaseDuration() *f64
```

- *Type:* *f64

---

##### `LeaseStartTime`<sup>Required</sup> <a name="LeaseStartTime" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.leaseStartTime"></a>

```go
func LeaseStartTime() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.metadata"></a>

```go
func Metadata() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.policies"></a>

```go
func Policies() *[]*string
```

- *Type:* *[]*string

---

##### `Renewable`<sup>Required</sup> <a name="Renewable" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.renewable"></a>

```go
func Renewable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `IamHttpRequestMethodInput`<sup>Optional</sup> <a name="IamHttpRequestMethodInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamHttpRequestMethodInput"></a>

```go
func IamHttpRequestMethodInput() *string
```

- *Type:* *string

---

##### `IamRequestBodyInput`<sup>Optional</sup> <a name="IamRequestBodyInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestBodyInput"></a>

```go
func IamRequestBodyInput() *string
```

- *Type:* *string

---

##### `IamRequestHeadersInput`<sup>Optional</sup> <a name="IamRequestHeadersInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestHeadersInput"></a>

```go
func IamRequestHeadersInput() *string
```

- *Type:* *string

---

##### `IamRequestUrlInput`<sup>Optional</sup> <a name="IamRequestUrlInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestUrlInput"></a>

```go
func IamRequestUrlInput() *string
```

- *Type:* *string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.identityInput"></a>

```go
func IdentityInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `NonceInput`<sup>Optional</sup> <a name="NonceInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.nonceInput"></a>

```go
func NonceInput() *string
```

- *Type:* *string

---

##### `Pkcs7Input`<sup>Optional</sup> <a name="Pkcs7Input" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.pkcs7Input"></a>

```go
func Pkcs7Input() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `SignatureInput`<sup>Optional</sup> <a name="SignatureInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.signatureInput"></a>

```go
func SignatureInput() *string
```

- *Type:* *string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `IamHttpRequestMethod`<sup>Required</sup> <a name="IamHttpRequestMethod" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamHttpRequestMethod"></a>

```go
func IamHttpRequestMethod() *string
```

- *Type:* *string

---

##### `IamRequestBody`<sup>Required</sup> <a name="IamRequestBody" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestBody"></a>

```go
func IamRequestBody() *string
```

- *Type:* *string

---

##### `IamRequestHeaders`<sup>Required</sup> <a name="IamRequestHeaders" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestHeaders"></a>

```go
func IamRequestHeaders() *string
```

- *Type:* *string

---

##### `IamRequestUrl`<sup>Required</sup> <a name="IamRequestUrl" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestUrl"></a>

```go
func IamRequestUrl() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.identity"></a>

```go
func Identity() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Nonce`<sup>Required</sup> <a name="Nonce" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.nonce"></a>

```go
func Nonce() *string
```

- *Type:* *string

---

##### `Pkcs7`<sup>Required</sup> <a name="Pkcs7" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.pkcs7"></a>

```go
func Pkcs7() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.signature"></a>

```go
func Signature() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsAuthBackendLoginConfig <a name="AwsAuthBackendLoginConfig" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/awsauthbackendlogin"

&awsauthbackendlogin.AwsAuthBackendLoginConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	IamHttpRequestMethod: *string,
	IamRequestBody: *string,
	IamRequestHeaders: *string,
	IamRequestUrl: *string,
	Id: *string,
	Identity: *string,
	Namespace: *string,
	Nonce: *string,
	Pkcs7: *string,
	Role: *string,
	Signature: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.backend">Backend</a></code> | <code>*string</code> | AWS Auth Backend to read the token from. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamHttpRequestMethod">IamHttpRequestMethod</a></code> | <code>*string</code> | The HTTP method used in the signed request. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamRequestBody">IamRequestBody</a></code> | <code>*string</code> | The Base64-encoded body of the signed request. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamRequestHeaders">IamRequestHeaders</a></code> | <code>*string</code> | The Base64-encoded, JSON serialized representation of the sts:GetCallerIdentity HTTP request headers. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamRequestUrl">IamRequestUrl</a></code> | <code>*string</code> | The Base64-encoded HTTP URL used in the signed request. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_auth_backend_login#id AwsAuthBackendLogin#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.identity">Identity</a></code> | <code>*string</code> | Base64-encoded EC2 instance identity document to authenticate with. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.nonce">Nonce</a></code> | <code>*string</code> | The nonce to be used for subsequent login requests. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.pkcs7">Pkcs7</a></code> | <code>*string</code> | PKCS7 signature of the identity document to authenticate with, with all newline characters removed. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.role">Role</a></code> | <code>*string</code> | AWS Auth Role to read the token from. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.signature">Signature</a></code> | <code>*string</code> | Base64-encoded SHA256 RSA signature of the instance identtiy document to authenticate with. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

AWS Auth Backend to read the token from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_auth_backend_login#backend AwsAuthBackendLogin#backend}

---

##### `IamHttpRequestMethod`<sup>Optional</sup> <a name="IamHttpRequestMethod" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamHttpRequestMethod"></a>

```go
IamHttpRequestMethod *string
```

- *Type:* *string

The HTTP method used in the signed request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_auth_backend_login#iam_http_request_method AwsAuthBackendLogin#iam_http_request_method}

---

##### `IamRequestBody`<sup>Optional</sup> <a name="IamRequestBody" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamRequestBody"></a>

```go
IamRequestBody *string
```

- *Type:* *string

The Base64-encoded body of the signed request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_auth_backend_login#iam_request_body AwsAuthBackendLogin#iam_request_body}

---

##### `IamRequestHeaders`<sup>Optional</sup> <a name="IamRequestHeaders" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamRequestHeaders"></a>

```go
IamRequestHeaders *string
```

- *Type:* *string

The Base64-encoded, JSON serialized representation of the sts:GetCallerIdentity HTTP request headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_auth_backend_login#iam_request_headers AwsAuthBackendLogin#iam_request_headers}

---

##### `IamRequestUrl`<sup>Optional</sup> <a name="IamRequestUrl" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamRequestUrl"></a>

```go
IamRequestUrl *string
```

- *Type:* *string

The Base64-encoded HTTP URL used in the signed request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_auth_backend_login#iam_request_url AwsAuthBackendLogin#iam_request_url}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_auth_backend_login#id AwsAuthBackendLogin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.identity"></a>

```go
Identity *string
```

- *Type:* *string

Base64-encoded EC2 instance identity document to authenticate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_auth_backend_login#identity AwsAuthBackendLogin#identity}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_auth_backend_login#namespace AwsAuthBackendLogin#namespace}

---

##### `Nonce`<sup>Optional</sup> <a name="Nonce" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.nonce"></a>

```go
Nonce *string
```

- *Type:* *string

The nonce to be used for subsequent login requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_auth_backend_login#nonce AwsAuthBackendLogin#nonce}

---

##### `Pkcs7`<sup>Optional</sup> <a name="Pkcs7" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.pkcs7"></a>

```go
Pkcs7 *string
```

- *Type:* *string

PKCS7 signature of the identity document to authenticate with, with all newline characters removed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_auth_backend_login#pkcs7 AwsAuthBackendLogin#pkcs7}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

AWS Auth Role to read the token from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_auth_backend_login#role AwsAuthBackendLogin#role}

---

##### `Signature`<sup>Optional</sup> <a name="Signature" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.signature"></a>

```go
Signature *string
```

- *Type:* *string

Base64-encoded SHA256 RSA signature of the instance identtiy document to authenticate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_auth_backend_login#signature AwsAuthBackendLogin#signature}

---



