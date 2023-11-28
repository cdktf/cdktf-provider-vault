# `kubernetesSecretBackendRole` Submodule <a name="`kubernetesSecretBackendRole` Submodule" id="@cdktf/provider-vault.kubernetesSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesSecretBackendRole <a name="KubernetesSecretBackendRole" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/kubernetes_secret_backend_role vault_kubernetes_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/kubernetessecretbackendrole"

kubernetessecretbackendrole.NewKubernetesSecretBackendRole(scope Construct, id *string, config KubernetesSecretBackendRoleConfig) KubernetesSecretBackendRole
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig">KubernetesSecretBackendRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig">KubernetesSecretBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetExtraAnnotations">ResetExtraAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetExtraLabels">ResetExtraLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetGeneratedRoleRules">ResetGeneratedRoleRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetKubernetesRoleName">ResetKubernetesRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetKubernetesRoleType">ResetKubernetesRoleType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetNameTemplate">ResetNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetServiceAccountName">ResetServiceAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetTokenDefaultTtl">ResetTokenDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetTokenMaxTtl">ResetTokenMaxTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetExtraAnnotations` <a name="ResetExtraAnnotations" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetExtraAnnotations"></a>

```go
func ResetExtraAnnotations()
```

##### `ResetExtraLabels` <a name="ResetExtraLabels" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetExtraLabels"></a>

```go
func ResetExtraLabels()
```

##### `ResetGeneratedRoleRules` <a name="ResetGeneratedRoleRules" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetGeneratedRoleRules"></a>

```go
func ResetGeneratedRoleRules()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetId"></a>

```go
func ResetId()
```

##### `ResetKubernetesRoleName` <a name="ResetKubernetesRoleName" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetKubernetesRoleName"></a>

```go
func ResetKubernetesRoleName()
```

##### `ResetKubernetesRoleType` <a name="ResetKubernetesRoleType" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetKubernetesRoleType"></a>

```go
func ResetKubernetesRoleType()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetNameTemplate` <a name="ResetNameTemplate" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetNameTemplate"></a>

```go
func ResetNameTemplate()
```

##### `ResetServiceAccountName` <a name="ResetServiceAccountName" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetServiceAccountName"></a>

```go
func ResetServiceAccountName()
```

##### `ResetTokenDefaultTtl` <a name="ResetTokenDefaultTtl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetTokenDefaultTtl"></a>

```go
func ResetTokenDefaultTtl()
```

##### `ResetTokenMaxTtl` <a name="ResetTokenMaxTtl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetTokenMaxTtl"></a>

```go
func ResetTokenMaxTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesSecretBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/kubernetessecretbackendrole"

kubernetessecretbackendrole.KubernetesSecretBackendRole_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/kubernetessecretbackendrole"

kubernetessecretbackendrole.KubernetesSecretBackendRole_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/kubernetessecretbackendrole"

kubernetessecretbackendrole.KubernetesSecretBackendRole_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/kubernetessecretbackendrole"

kubernetessecretbackendrole.KubernetesSecretBackendRole_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a KubernetesSecretBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KubernetesSecretBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KubernetesSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/kubernetes_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.allowedKubernetesNamespacesInput">AllowedKubernetesNamespacesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraAnnotationsInput">ExtraAnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraLabelsInput">ExtraLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.generatedRoleRulesInput">GeneratedRoleRulesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleNameInput">KubernetesRoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleTypeInput">KubernetesRoleTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.nameTemplateInput">NameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.serviceAccountNameInput">ServiceAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenDefaultTtlInput">TokenDefaultTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenMaxTtlInput">TokenMaxTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.allowedKubernetesNamespaces">AllowedKubernetesNamespaces</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraAnnotations">ExtraAnnotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraLabels">ExtraLabels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.generatedRoleRules">GeneratedRoleRules</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleName">KubernetesRoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleType">KubernetesRoleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.nameTemplate">NameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.serviceAccountName">ServiceAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenDefaultTtl">TokenDefaultTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowedKubernetesNamespacesInput`<sup>Optional</sup> <a name="AllowedKubernetesNamespacesInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.allowedKubernetesNamespacesInput"></a>

```go
func AllowedKubernetesNamespacesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `ExtraAnnotationsInput`<sup>Optional</sup> <a name="ExtraAnnotationsInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraAnnotationsInput"></a>

```go
func ExtraAnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExtraLabelsInput`<sup>Optional</sup> <a name="ExtraLabelsInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraLabelsInput"></a>

```go
func ExtraLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GeneratedRoleRulesInput`<sup>Optional</sup> <a name="GeneratedRoleRulesInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.generatedRoleRulesInput"></a>

```go
func GeneratedRoleRulesInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KubernetesRoleNameInput`<sup>Optional</sup> <a name="KubernetesRoleNameInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleNameInput"></a>

```go
func KubernetesRoleNameInput() *string
```

- *Type:* *string

---

##### `KubernetesRoleTypeInput`<sup>Optional</sup> <a name="KubernetesRoleTypeInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleTypeInput"></a>

```go
func KubernetesRoleTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `NameTemplateInput`<sup>Optional</sup> <a name="NameTemplateInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.nameTemplateInput"></a>

```go
func NameTemplateInput() *string
```

- *Type:* *string

---

##### `ServiceAccountNameInput`<sup>Optional</sup> <a name="ServiceAccountNameInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.serviceAccountNameInput"></a>

```go
func ServiceAccountNameInput() *string
```

- *Type:* *string

---

##### `TokenDefaultTtlInput`<sup>Optional</sup> <a name="TokenDefaultTtlInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenDefaultTtlInput"></a>

```go
func TokenDefaultTtlInput() *f64
```

- *Type:* *f64

---

##### `TokenMaxTtlInput`<sup>Optional</sup> <a name="TokenMaxTtlInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenMaxTtlInput"></a>

```go
func TokenMaxTtlInput() *f64
```

- *Type:* *f64

---

##### `AllowedKubernetesNamespaces`<sup>Required</sup> <a name="AllowedKubernetesNamespaces" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.allowedKubernetesNamespaces"></a>

```go
func AllowedKubernetesNamespaces() *[]*string
```

- *Type:* *[]*string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `ExtraAnnotations`<sup>Required</sup> <a name="ExtraAnnotations" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraAnnotations"></a>

```go
func ExtraAnnotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExtraLabels`<sup>Required</sup> <a name="ExtraLabels" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraLabels"></a>

```go
func ExtraLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GeneratedRoleRules`<sup>Required</sup> <a name="GeneratedRoleRules" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.generatedRoleRules"></a>

```go
func GeneratedRoleRules() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KubernetesRoleName`<sup>Required</sup> <a name="KubernetesRoleName" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleName"></a>

```go
func KubernetesRoleName() *string
```

- *Type:* *string

---

##### `KubernetesRoleType`<sup>Required</sup> <a name="KubernetesRoleType" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleType"></a>

```go
func KubernetesRoleType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `NameTemplate`<sup>Required</sup> <a name="NameTemplate" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.nameTemplate"></a>

```go
func NameTemplate() *string
```

- *Type:* *string

---

##### `ServiceAccountName`<sup>Required</sup> <a name="ServiceAccountName" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.serviceAccountName"></a>

```go
func ServiceAccountName() *string
```

- *Type:* *string

---

##### `TokenDefaultTtl`<sup>Required</sup> <a name="TokenDefaultTtl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenDefaultTtl"></a>

```go
func TokenDefaultTtl() *f64
```

- *Type:* *f64

---

##### `TokenMaxTtl`<sup>Required</sup> <a name="TokenMaxTtl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenMaxTtl"></a>

```go
func TokenMaxTtl() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesSecretBackendRoleConfig <a name="KubernetesSecretBackendRoleConfig" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/kubernetessecretbackendrole"

&kubernetessecretbackendrole.KubernetesSecretBackendRoleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AllowedKubernetesNamespaces: *[]*string,
	Backend: *string,
	Name: *string,
	ExtraAnnotations: *map[string]*string,
	ExtraLabels: *map[string]*string,
	GeneratedRoleRules: *string,
	Id: *string,
	KubernetesRoleName: *string,
	KubernetesRoleType: *string,
	Namespace: *string,
	NameTemplate: *string,
	ServiceAccountName: *string,
	TokenDefaultTtl: *f64,
	TokenMaxTtl: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.allowedKubernetesNamespaces">AllowedKubernetesNamespaces</a></code> | <code>*[]*string</code> | The list of Kubernetes namespaces this role can generate credentials for. If set to '*' all namespaces are allowed. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.backend">Backend</a></code> | <code>*string</code> | The mount path for the Kubernetes secrets engine. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.name">Name</a></code> | <code>*string</code> | The name of the role. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.extraAnnotations">ExtraAnnotations</a></code> | <code>*map[string]*string</code> | Additional annotations to apply to all generated Kubernetes objects. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.extraLabels">ExtraLabels</a></code> | <code>*map[string]*string</code> | Additional labels to apply to all generated Kubernetes objects. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.generatedRoleRules">GeneratedRoleRules</a></code> | <code>*string</code> | The Role or ClusterRole rules to use when generating a role. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/kubernetes_secret_backend_role#id KubernetesSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.kubernetesRoleName">KubernetesRoleName</a></code> | <code>*string</code> | The pre-existing Role or ClusterRole to bind a generated service account to. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.kubernetesRoleType">KubernetesRoleType</a></code> | <code>*string</code> | Specifies whether the Kubernetes role is a Role or ClusterRole. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.nameTemplate">NameTemplate</a></code> | <code>*string</code> | The name template to use when generating service accounts, roles and role bindings. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.serviceAccountName">ServiceAccountName</a></code> | <code>*string</code> | The pre-existing service account to generate tokens for. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.tokenDefaultTtl">TokenDefaultTtl</a></code> | <code>*f64</code> | The default TTL for generated Kubernetes tokens in seconds. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>*f64</code> | The maximum TTL for generated Kubernetes tokens in seconds. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowedKubernetesNamespaces`<sup>Required</sup> <a name="AllowedKubernetesNamespaces" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.allowedKubernetesNamespaces"></a>

```go
AllowedKubernetesNamespaces *[]*string
```

- *Type:* *[]*string

The list of Kubernetes namespaces this role can generate credentials for. If set to '*' all namespaces are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/kubernetes_secret_backend_role#allowed_kubernetes_namespaces KubernetesSecretBackendRole#allowed_kubernetes_namespaces}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

The mount path for the Kubernetes secrets engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/kubernetes_secret_backend_role#backend KubernetesSecretBackendRole#backend}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/kubernetes_secret_backend_role#name KubernetesSecretBackendRole#name}

---

##### `ExtraAnnotations`<sup>Optional</sup> <a name="ExtraAnnotations" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.extraAnnotations"></a>

```go
ExtraAnnotations *map[string]*string
```

- *Type:* *map[string]*string

Additional annotations to apply to all generated Kubernetes objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/kubernetes_secret_backend_role#extra_annotations KubernetesSecretBackendRole#extra_annotations}

---

##### `ExtraLabels`<sup>Optional</sup> <a name="ExtraLabels" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.extraLabels"></a>

```go
ExtraLabels *map[string]*string
```

- *Type:* *map[string]*string

Additional labels to apply to all generated Kubernetes objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/kubernetes_secret_backend_role#extra_labels KubernetesSecretBackendRole#extra_labels}

---

##### `GeneratedRoleRules`<sup>Optional</sup> <a name="GeneratedRoleRules" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.generatedRoleRules"></a>

```go
GeneratedRoleRules *string
```

- *Type:* *string

The Role or ClusterRole rules to use when generating a role.

Accepts either JSON or YAML formatted rules. Mutually exclusive with 'service_account_name' and 'kubernetes_role_name'. If set, the entire chain of Kubernetes objects will be generated when credentials are requested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/kubernetes_secret_backend_role#generated_role_rules KubernetesSecretBackendRole#generated_role_rules}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/kubernetes_secret_backend_role#id KubernetesSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KubernetesRoleName`<sup>Optional</sup> <a name="KubernetesRoleName" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.kubernetesRoleName"></a>

```go
KubernetesRoleName *string
```

- *Type:* *string

The pre-existing Role or ClusterRole to bind a generated service account to.

Mutually exclusive with 'service_account_name' and 'generated_role_rules'. If set, Kubernetes token, service account, and role binding objects will be created when credentials are requested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/kubernetes_secret_backend_role#kubernetes_role_name KubernetesSecretBackendRole#kubernetes_role_name}

---

##### `KubernetesRoleType`<sup>Optional</sup> <a name="KubernetesRoleType" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.kubernetesRoleType"></a>

```go
KubernetesRoleType *string
```

- *Type:* *string

Specifies whether the Kubernetes role is a Role or ClusterRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/kubernetes_secret_backend_role#kubernetes_role_type KubernetesSecretBackendRole#kubernetes_role_type}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/kubernetes_secret_backend_role#namespace KubernetesSecretBackendRole#namespace}

---

##### `NameTemplate`<sup>Optional</sup> <a name="NameTemplate" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.nameTemplate"></a>

```go
NameTemplate *string
```

- *Type:* *string

The name template to use when generating service accounts, roles and role bindings.

If unset, a default template is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/kubernetes_secret_backend_role#name_template KubernetesSecretBackendRole#name_template}

---

##### `ServiceAccountName`<sup>Optional</sup> <a name="ServiceAccountName" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.serviceAccountName"></a>

```go
ServiceAccountName *string
```

- *Type:* *string

The pre-existing service account to generate tokens for.

Mutually exclusive with 'kubernetes_role_name' and 'generated_role_rules'. If set, only a Kubernetes token will be created when credentials are requested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/kubernetes_secret_backend_role#service_account_name KubernetesSecretBackendRole#service_account_name}

---

##### `TokenDefaultTtl`<sup>Optional</sup> <a name="TokenDefaultTtl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.tokenDefaultTtl"></a>

```go
TokenDefaultTtl *f64
```

- *Type:* *f64

The default TTL for generated Kubernetes tokens in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/kubernetes_secret_backend_role#token_default_ttl KubernetesSecretBackendRole#token_default_ttl}

---

##### `TokenMaxTtl`<sup>Optional</sup> <a name="TokenMaxTtl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.tokenMaxTtl"></a>

```go
TokenMaxTtl *f64
```

- *Type:* *f64

The maximum TTL for generated Kubernetes tokens in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/kubernetes_secret_backend_role#token_max_ttl KubernetesSecretBackendRole#token_max_ttl}

---



