# `vault_aws_secret_backend`

Refer to the Terraform Registory for docs: [`vault_aws_secret_backend`](https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/aws_secret_backend).

# `awsSecretBackend` Submodule <a name="`awsSecretBackend` Submodule" id="@cdktf/provider-vault.awsSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsSecretBackend <a name="AwsSecretBackend" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/aws_secret_backend vault_aws_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/awssecretbackend"

awssecretbackend.NewAwsSecretBackend(scope Construct, id *string, config AwsSecretBackendConfig) AwsSecretBackend
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig">AwsSecretBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig">AwsSecretBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetAccessKey">ResetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetDefaultLeaseTtlSeconds">ResetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetDisableRemount">ResetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetIamEndpoint">ResetIamEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetLocal">ResetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetMaxLeaseTtlSeconds">ResetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetSecretKey">ResetSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetStsEndpoint">ResetStsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetAccessKey` <a name="ResetAccessKey" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetAccessKey"></a>

```go
func ResetAccessKey()
```

##### `ResetDefaultLeaseTtlSeconds` <a name="ResetDefaultLeaseTtlSeconds" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```go
func ResetDefaultLeaseTtlSeconds()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisableRemount` <a name="ResetDisableRemount" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetDisableRemount"></a>

```go
func ResetDisableRemount()
```

##### `ResetIamEndpoint` <a name="ResetIamEndpoint" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetIamEndpoint"></a>

```go
func ResetIamEndpoint()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetId"></a>

```go
func ResetId()
```

##### `ResetLocal` <a name="ResetLocal" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetLocal"></a>

```go
func ResetLocal()
```

##### `ResetMaxLeaseTtlSeconds` <a name="ResetMaxLeaseTtlSeconds" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetMaxLeaseTtlSeconds"></a>

```go
func ResetMaxLeaseTtlSeconds()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetPath"></a>

```go
func ResetPath()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSecretKey` <a name="ResetSecretKey" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetSecretKey"></a>

```go
func ResetSecretKey()
```

##### `ResetStsEndpoint` <a name="ResetStsEndpoint" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetStsEndpoint"></a>

```go
func ResetStsEndpoint()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AwsSecretBackend resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/awssecretbackend"

awssecretbackend.AwsSecretBackend_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/awssecretbackend"

awssecretbackend.AwsSecretBackend_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/awssecretbackend"

awssecretbackend.AwsSecretBackend_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/awssecretbackend"

awssecretbackend.AwsSecretBackend_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AwsSecretBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AwsSecretBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AwsSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/aws_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AwsSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.accessKeyInput">AccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.defaultLeaseTtlSecondsInput">DefaultLeaseTtlSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.disableRemountInput">DisableRemountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.iamEndpointInput">IamEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.localInput">LocalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.maxLeaseTtlSecondsInput">MaxLeaseTtlSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.secretKeyInput">SecretKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.stsEndpointInput">StsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.accessKey">AccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.disableRemount">DisableRemount</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.iamEndpoint">IamEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.local">Local</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.secretKey">SecretKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.stsEndpoint">StsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessKeyInput`<sup>Optional</sup> <a name="AccessKeyInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.accessKeyInput"></a>

```go
func AccessKeyInput() *string
```

- *Type:* *string

---

##### `DefaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="DefaultLeaseTtlSecondsInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```go
func DefaultLeaseTtlSecondsInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisableRemountInput`<sup>Optional</sup> <a name="DisableRemountInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.disableRemountInput"></a>

```go
func DisableRemountInput() interface{}
```

- *Type:* interface{}

---

##### `IamEndpointInput`<sup>Optional</sup> <a name="IamEndpointInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.iamEndpointInput"></a>

```go
func IamEndpointInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocalInput`<sup>Optional</sup> <a name="LocalInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.localInput"></a>

```go
func LocalInput() interface{}
```

- *Type:* interface{}

---

##### `MaxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="MaxLeaseTtlSecondsInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```go
func MaxLeaseTtlSecondsInput() *f64
```

- *Type:* *f64

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SecretKeyInput`<sup>Optional</sup> <a name="SecretKeyInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.secretKeyInput"></a>

```go
func SecretKeyInput() *string
```

- *Type:* *string

---

##### `StsEndpointInput`<sup>Optional</sup> <a name="StsEndpointInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.stsEndpointInput"></a>

```go
func StsEndpointInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `AccessKey`<sup>Required</sup> <a name="AccessKey" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.accessKey"></a>

```go
func AccessKey() *string
```

- *Type:* *string

---

##### `DefaultLeaseTtlSeconds`<sup>Required</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.defaultLeaseTtlSeconds"></a>

```go
func DefaultLeaseTtlSeconds() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisableRemount`<sup>Required</sup> <a name="DisableRemount" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.disableRemount"></a>

```go
func DisableRemount() interface{}
```

- *Type:* interface{}

---

##### `IamEndpoint`<sup>Required</sup> <a name="IamEndpoint" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.iamEndpoint"></a>

```go
func IamEndpoint() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Local`<sup>Required</sup> <a name="Local" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.local"></a>

```go
func Local() interface{}
```

- *Type:* interface{}

---

##### `MaxLeaseTtlSeconds`<sup>Required</sup> <a name="MaxLeaseTtlSeconds" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.maxLeaseTtlSeconds"></a>

```go
func MaxLeaseTtlSeconds() *f64
```

- *Type:* *f64

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SecretKey`<sup>Required</sup> <a name="SecretKey" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.secretKey"></a>

```go
func SecretKey() *string
```

- *Type:* *string

---

##### `StsEndpoint`<sup>Required</sup> <a name="StsEndpoint" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.stsEndpoint"></a>

```go
func StsEndpoint() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsSecretBackendConfig <a name="AwsSecretBackendConfig" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/awssecretbackend"

&awssecretbackend.AwsSecretBackendConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccessKey: *string,
	DefaultLeaseTtlSeconds: *f64,
	Description: *string,
	DisableRemount: interface{},
	IamEndpoint: *string,
	Id: *string,
	Local: interface{},
	MaxLeaseTtlSeconds: *f64,
	Namespace: *string,
	Path: *string,
	Region: *string,
	SecretKey: *string,
	StsEndpoint: *string,
	UsernameTemplate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.accessKey">AccessKey</a></code> | <code>*string</code> | The AWS Access Key ID to use when generating new credentials. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>*f64</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.description">Description</a></code> | <code>*string</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.disableRemount">DisableRemount</a></code> | <code>interface{}</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.iamEndpoint">IamEndpoint</a></code> | <code>*string</code> | Specifies a custom HTTP IAM endpoint to use. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/aws_secret_backend#id AwsSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.local">Local</a></code> | <code>interface{}</code> | Specifies if the secret backend is local only. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>*f64</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.path">Path</a></code> | <code>*string</code> | Path to mount the backend at. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.region">Region</a></code> | <code>*string</code> | The AWS region to make API calls against. Defaults to us-east-1. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.secretKey">SecretKey</a></code> | <code>*string</code> | The AWS Secret Access Key to use when generating new credentials. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.stsEndpoint">StsEndpoint</a></code> | <code>*string</code> | Specifies a custom HTTP STS endpoint to use. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | Template describing how dynamic usernames are generated. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessKey`<sup>Optional</sup> <a name="AccessKey" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.accessKey"></a>

```go
AccessKey *string
```

- *Type:* *string

The AWS Access Key ID to use when generating new credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/aws_secret_backend#access_key AwsSecretBackend#access_key}

---

##### `DefaultLeaseTtlSeconds`<sup>Optional</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```go
DefaultLeaseTtlSeconds *f64
```

- *Type:* *f64

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/aws_secret_backend#default_lease_ttl_seconds AwsSecretBackend#default_lease_ttl_seconds}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/aws_secret_backend#description AwsSecretBackend#description}

---

##### `DisableRemount`<sup>Optional</sup> <a name="DisableRemount" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.disableRemount"></a>

```go
DisableRemount interface{}
```

- *Type:* interface{}

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/aws_secret_backend#disable_remount AwsSecretBackend#disable_remount}

---

##### `IamEndpoint`<sup>Optional</sup> <a name="IamEndpoint" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.iamEndpoint"></a>

```go
IamEndpoint *string
```

- *Type:* *string

Specifies a custom HTTP IAM endpoint to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/aws_secret_backend#iam_endpoint AwsSecretBackend#iam_endpoint}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/aws_secret_backend#id AwsSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Local`<sup>Optional</sup> <a name="Local" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.local"></a>

```go
Local interface{}
```

- *Type:* interface{}

Specifies if the secret backend is local only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/aws_secret_backend#local AwsSecretBackend#local}

---

##### `MaxLeaseTtlSeconds`<sup>Optional</sup> <a name="MaxLeaseTtlSeconds" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```go
MaxLeaseTtlSeconds *f64
```

- *Type:* *f64

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/aws_secret_backend#max_lease_ttl_seconds AwsSecretBackend#max_lease_ttl_seconds}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/aws_secret_backend#namespace AwsSecretBackend#namespace}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path to mount the backend at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/aws_secret_backend#path AwsSecretBackend#path}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The AWS region to make API calls against. Defaults to us-east-1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/aws_secret_backend#region AwsSecretBackend#region}

---

##### `SecretKey`<sup>Optional</sup> <a name="SecretKey" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.secretKey"></a>

```go
SecretKey *string
```

- *Type:* *string

The AWS Secret Access Key to use when generating new credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/aws_secret_backend#secret_key AwsSecretBackend#secret_key}

---

##### `StsEndpoint`<sup>Optional</sup> <a name="StsEndpoint" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.stsEndpoint"></a>

```go
StsEndpoint *string
```

- *Type:* *string

Specifies a custom HTTP STS endpoint to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/aws_secret_backend#sts_endpoint AwsSecretBackend#sts_endpoint}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/aws_secret_backend#username_template AwsSecretBackend#username_template}

---



