# `azureSecretBackendStaticRole` Submodule <a name="`azureSecretBackendStaticRole` Submodule" id="@cdktf/provider-vault.azureSecretBackendStaticRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureSecretBackendStaticRole <a name="AzureSecretBackendStaticRole" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/azure_secret_backend_static_role vault_azure_secret_backend_static_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/azuresecretbackendstaticrole"

azuresecretbackendstaticrole.NewAzureSecretBackendStaticRole(scope Construct, id *string, config AzureSecretBackendStaticRoleConfig) AzureSecretBackendStaticRole
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig">AzureSecretBackendStaticRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig">AzureSecretBackendStaticRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetExpiration">ResetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetSecretId">ResetSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetSkipImportRotation">ResetSkipImportRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetExpiration` <a name="ResetExpiration" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetExpiration"></a>

```go
func ResetExpiration()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetSecretId` <a name="ResetSecretId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetSecretId"></a>

```go
func ResetSecretId()
```

##### `ResetSkipImportRotation` <a name="ResetSkipImportRotation" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetSkipImportRotation"></a>

```go
func ResetSkipImportRotation()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetTtl"></a>

```go
func ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AzureSecretBackendStaticRole resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/azuresecretbackendstaticrole"

azuresecretbackendstaticrole.AzureSecretBackendStaticRole_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/azuresecretbackendstaticrole"

azuresecretbackendstaticrole.AzureSecretBackendStaticRole_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/azuresecretbackendstaticrole"

azuresecretbackendstaticrole.AzureSecretBackendStaticRole_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/azuresecretbackendstaticrole"

azuresecretbackendstaticrole.AzureSecretBackendStaticRole_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AzureSecretBackendStaticRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AzureSecretBackendStaticRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AzureSecretBackendStaticRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/azure_secret_backend_static_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AzureSecretBackendStaticRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.applicationObjectIdInput">ApplicationObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.expirationInput">ExpirationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.secretIdInput">SecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.skipImportRotationInput">SkipImportRotationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.applicationObjectId">ApplicationObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.expiration">Expiration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.skipImportRotation">SkipImportRotation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ApplicationObjectIdInput`<sup>Optional</sup> <a name="ApplicationObjectIdInput" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.applicationObjectIdInput"></a>

```go
func ApplicationObjectIdInput() *string
```

- *Type:* *string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `ExpirationInput`<sup>Optional</sup> <a name="ExpirationInput" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.expirationInput"></a>

```go
func ExpirationInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.secretIdInput"></a>

```go
func SecretIdInput() *string
```

- *Type:* *string

---

##### `SkipImportRotationInput`<sup>Optional</sup> <a name="SkipImportRotationInput" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.skipImportRotationInput"></a>

```go
func SkipImportRotationInput() interface{}
```

- *Type:* interface{}

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `ApplicationObjectId`<sup>Required</sup> <a name="ApplicationObjectId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.applicationObjectId"></a>

```go
func ApplicationObjectId() *string
```

- *Type:* *string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.expiration"></a>

```go
func Expiration() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `SkipImportRotation`<sup>Required</sup> <a name="SkipImportRotation" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.skipImportRotation"></a>

```go
func SkipImportRotation() interface{}
```

- *Type:* interface{}

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AzureSecretBackendStaticRoleConfig <a name="AzureSecretBackendStaticRoleConfig" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/azuresecretbackendstaticrole"

&azuresecretbackendstaticrole.AzureSecretBackendStaticRoleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationObjectId: *string,
	Backend: *string,
	Role: *string,
	ClientSecret: *string,
	Expiration: *string,
	Metadata: *map[string]*string,
	Namespace: *string,
	SecretId: *string,
	SkipImportRotation: interface{},
	Ttl: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.applicationObjectId">ApplicationObjectId</a></code> | <code>*string</code> | Application object ID for an existing service principal that is managed by the static role. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.backend">Backend</a></code> | <code>*string</code> | The path where the Azure secrets backend is mounted. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.role">Role</a></code> | <code>*string</code> | Name of the static role to create. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | The plaintext secret value of the credential you want to import. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.expiration">Expiration</a></code> | <code>*string</code> | A future expiration time for the imported credential, in RFC3339 format. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | A map of string key/value pairs that will be stored as metadata on the secret. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.secretId">SecretId</a></code> | <code>*string</code> | The secret ID of the Azure password credential you want to import. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.skipImportRotation">SkipImportRotation</a></code> | <code>interface{}</code> | If true, skip rotation of the client secret on import. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.ttl">Ttl</a></code> | <code>*f64</code> | Timespan of 1 year (31536000) or more during which the role credentials are valid. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationObjectId`<sup>Required</sup> <a name="ApplicationObjectId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.applicationObjectId"></a>

```go
ApplicationObjectId *string
```

- *Type:* *string

Application object ID for an existing service principal that is managed by the static role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/azure_secret_backend_static_role#application_object_id AzureSecretBackendStaticRole#application_object_id}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

The path where the Azure secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/azure_secret_backend_static_role#backend AzureSecretBackendStaticRole#backend}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Name of the static role to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/azure_secret_backend_static_role#role AzureSecretBackendStaticRole#role}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

The plaintext secret value of the credential you want to import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/azure_secret_backend_static_role#client_secret AzureSecretBackendStaticRole#client_secret}

---

##### `Expiration`<sup>Optional</sup> <a name="Expiration" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.expiration"></a>

```go
Expiration *string
```

- *Type:* *string

A future expiration time for the imported credential, in RFC3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/azure_secret_backend_static_role#expiration AzureSecretBackendStaticRole#expiration}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

A map of string key/value pairs that will be stored as metadata on the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/azure_secret_backend_static_role#metadata AzureSecretBackendStaticRole#metadata}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/azure_secret_backend_static_role#namespace AzureSecretBackendStaticRole#namespace}

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.secretId"></a>

```go
SecretId *string
```

- *Type:* *string

The secret ID of the Azure password credential you want to import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/azure_secret_backend_static_role#secret_id AzureSecretBackendStaticRole#secret_id}

---

##### `SkipImportRotation`<sup>Optional</sup> <a name="SkipImportRotation" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.skipImportRotation"></a>

```go
SkipImportRotation interface{}
```

- *Type:* interface{}

If true, skip rotation of the client secret on import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/azure_secret_backend_static_role#skip_import_rotation AzureSecretBackendStaticRole#skip_import_rotation}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

Timespan of 1 year (31536000) or more during which the role credentials are valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/azure_secret_backend_static_role#ttl AzureSecretBackendStaticRole#ttl}

---



