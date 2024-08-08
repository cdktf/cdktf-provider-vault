# `gcpSecretImpersonatedAccount` Submodule <a name="`gcpSecretImpersonatedAccount` Submodule" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpSecretImpersonatedAccount <a name="GcpSecretImpersonatedAccount" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/gcp_secret_impersonated_account vault_gcp_secret_impersonated_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/gcpsecretimpersonatedaccount"

gcpsecretimpersonatedaccount.NewGcpSecretImpersonatedAccount(scope Construct, id *string, config GcpSecretImpersonatedAccountConfig) GcpSecretImpersonatedAccount
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig">GcpSecretImpersonatedAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig">GcpSecretImpersonatedAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetTokenScopes">ResetTokenScopes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetTokenScopes` <a name="ResetTokenScopes" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetTokenScopes"></a>

```go
func ResetTokenScopes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GcpSecretImpersonatedAccount resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/gcpsecretimpersonatedaccount"

gcpsecretimpersonatedaccount.GcpSecretImpersonatedAccount_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/gcpsecretimpersonatedaccount"

gcpsecretimpersonatedaccount.GcpSecretImpersonatedAccount_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/gcpsecretimpersonatedaccount"

gcpsecretimpersonatedaccount.GcpSecretImpersonatedAccount_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/gcpsecretimpersonatedaccount"

gcpsecretimpersonatedaccount.GcpSecretImpersonatedAccount_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GcpSecretImpersonatedAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GcpSecretImpersonatedAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GcpSecretImpersonatedAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/gcp_secret_impersonated_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GcpSecretImpersonatedAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.serviceAccountProject">ServiceAccountProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.impersonatedAccountInput">ImpersonatedAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.tokenScopesInput">TokenScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.impersonatedAccount">ImpersonatedAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.tokenScopes">TokenScopes</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ServiceAccountProject`<sup>Required</sup> <a name="ServiceAccountProject" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.serviceAccountProject"></a>

```go
func ServiceAccountProject() *string
```

- *Type:* *string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImpersonatedAccountInput`<sup>Optional</sup> <a name="ImpersonatedAccountInput" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.impersonatedAccountInput"></a>

```go
func ImpersonatedAccountInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `TokenScopesInput`<sup>Optional</sup> <a name="TokenScopesInput" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.tokenScopesInput"></a>

```go
func TokenScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImpersonatedAccount`<sup>Required</sup> <a name="ImpersonatedAccount" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.impersonatedAccount"></a>

```go
func ImpersonatedAccount() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `TokenScopes`<sup>Required</sup> <a name="TokenScopes" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.tokenScopes"></a>

```go
func TokenScopes() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GcpSecretImpersonatedAccountConfig <a name="GcpSecretImpersonatedAccountConfig" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/gcpsecretimpersonatedaccount"

&gcpsecretimpersonatedaccount.GcpSecretImpersonatedAccountConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	ImpersonatedAccount: *string,
	ServiceAccountEmail: *string,
	Id: *string,
	Namespace: *string,
	TokenScopes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.backend">Backend</a></code> | <code>*string</code> | Path where the GCP secrets engine is mounted. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.impersonatedAccount">ImpersonatedAccount</a></code> | <code>*string</code> | Name of the Impersonated Account to create. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | Email of the GCP service account. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/gcp_secret_impersonated_account#id GcpSecretImpersonatedAccount#id}. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.tokenScopes">TokenScopes</a></code> | <code>*[]*string</code> | List of OAuth scopes to assign to `access_token` secrets generated under this impersonated account (`access_token` impersonated accounts only). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

Path where the GCP secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/gcp_secret_impersonated_account#backend GcpSecretImpersonatedAccount#backend}

---

##### `ImpersonatedAccount`<sup>Required</sup> <a name="ImpersonatedAccount" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.impersonatedAccount"></a>

```go
ImpersonatedAccount *string
```

- *Type:* *string

Name of the Impersonated Account to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/gcp_secret_impersonated_account#impersonated_account GcpSecretImpersonatedAccount#impersonated_account}

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

Email of the GCP service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/gcp_secret_impersonated_account#service_account_email GcpSecretImpersonatedAccount#service_account_email}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/gcp_secret_impersonated_account#id GcpSecretImpersonatedAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/gcp_secret_impersonated_account#namespace GcpSecretImpersonatedAccount#namespace}

---

##### `TokenScopes`<sup>Optional</sup> <a name="TokenScopes" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.tokenScopes"></a>

```go
TokenScopes *[]*string
```

- *Type:* *[]*string

List of OAuth scopes to assign to `access_token` secrets generated under this impersonated account (`access_token` impersonated accounts only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/gcp_secret_impersonated_account#token_scopes GcpSecretImpersonatedAccount#token_scopes}

---



