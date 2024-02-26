# `databaseSecretBackendStaticRole` Submodule <a name="`databaseSecretBackendStaticRole` Submodule" id="@cdktf/provider-vault.databaseSecretBackendStaticRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseSecretBackendStaticRole <a name="DatabaseSecretBackendStaticRole" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/database_secret_backend_static_role vault_database_secret_backend_static_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretbackendstaticrole"

databasesecretbackendstaticrole.NewDatabaseSecretBackendStaticRole(scope Construct, id *string, config DatabaseSecretBackendStaticRoleConfig) DatabaseSecretBackendStaticRole
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig">DatabaseSecretBackendStaticRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig">DatabaseSecretBackendStaticRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetRotationPeriod">ResetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetRotationSchedule">ResetRotationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetRotationStatements">ResetRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetRotationWindow">ResetRotationWindow</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetRotationPeriod` <a name="ResetRotationPeriod" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetRotationPeriod"></a>

```go
func ResetRotationPeriod()
```

##### `ResetRotationSchedule` <a name="ResetRotationSchedule" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetRotationSchedule"></a>

```go
func ResetRotationSchedule()
```

##### `ResetRotationStatements` <a name="ResetRotationStatements" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetRotationStatements"></a>

```go
func ResetRotationStatements()
```

##### `ResetRotationWindow` <a name="ResetRotationWindow" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetRotationWindow"></a>

```go
func ResetRotationWindow()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseSecretBackendStaticRole resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretbackendstaticrole"

databasesecretbackendstaticrole.DatabaseSecretBackendStaticRole_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretbackendstaticrole"

databasesecretbackendstaticrole.DatabaseSecretBackendStaticRole_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretbackendstaticrole"

databasesecretbackendstaticrole.DatabaseSecretBackendStaticRole_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretbackendstaticrole"

databasesecretbackendstaticrole.DatabaseSecretBackendStaticRole_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseSecretBackendStaticRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseSecretBackendStaticRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseSecretBackendStaticRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/database_secret_backend_static_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseSecretBackendStaticRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.dbNameInput">DbNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationPeriodInput">RotationPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationScheduleInput">RotationScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationStatementsInput">RotationStatementsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationWindowInput">RotationWindowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.dbName">DbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationPeriod">RotationPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationSchedule">RotationSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationStatements">RotationStatements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationWindow">RotationWindow</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.username">Username</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `DbNameInput`<sup>Optional</sup> <a name="DbNameInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.dbNameInput"></a>

```go
func DbNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `RotationPeriodInput`<sup>Optional</sup> <a name="RotationPeriodInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationPeriodInput"></a>

```go
func RotationPeriodInput() *f64
```

- *Type:* *f64

---

##### `RotationScheduleInput`<sup>Optional</sup> <a name="RotationScheduleInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationScheduleInput"></a>

```go
func RotationScheduleInput() *string
```

- *Type:* *string

---

##### `RotationStatementsInput`<sup>Optional</sup> <a name="RotationStatementsInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationStatementsInput"></a>

```go
func RotationStatementsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RotationWindowInput`<sup>Optional</sup> <a name="RotationWindowInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationWindowInput"></a>

```go
func RotationWindowInput() *f64
```

- *Type:* *f64

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.dbName"></a>

```go
func DbName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationPeriod"></a>

```go
func RotationPeriod() *f64
```

- *Type:* *f64

---

##### `RotationSchedule`<sup>Required</sup> <a name="RotationSchedule" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationSchedule"></a>

```go
func RotationSchedule() *string
```

- *Type:* *string

---

##### `RotationStatements`<sup>Required</sup> <a name="RotationStatements" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationStatements"></a>

```go
func RotationStatements() *[]*string
```

- *Type:* *[]*string

---

##### `RotationWindow`<sup>Required</sup> <a name="RotationWindow" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationWindow"></a>

```go
func RotationWindow() *f64
```

- *Type:* *f64

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseSecretBackendStaticRoleConfig <a name="DatabaseSecretBackendStaticRoleConfig" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretbackendstaticrole"

&databasesecretbackendstaticrole.DatabaseSecretBackendStaticRoleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	DbName: *string,
	Name: *string,
	Username: *string,
	Id: *string,
	Namespace: *string,
	RotationPeriod: *f64,
	RotationSchedule: *string,
	RotationStatements: *[]*string,
	RotationWindow: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.backend">Backend</a></code> | <code>*string</code> | The path of the Database Secret Backend the role belongs to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.dbName">DbName</a></code> | <code>*string</code> | Database connection to use for this role. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.name">Name</a></code> | <code>*string</code> | Unique name for the static role. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.username">Username</a></code> | <code>*string</code> | The database username that this role corresponds to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/database_secret_backend_static_role#id DatabaseSecretBackendStaticRole#id}. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.rotationPeriod">RotationPeriod</a></code> | <code>*f64</code> | The amount of time Vault should wait before rotating the password, in seconds. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.rotationSchedule">RotationSchedule</a></code> | <code>*string</code> | A cron-style string that will define the schedule on which rotations should occur. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.rotationStatements">RotationStatements</a></code> | <code>*[]*string</code> | Database statements to execute to rotate the password for the configured database user. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.rotationWindow">RotationWindow</a></code> | <code>*f64</code> | The amount of time in seconds in which the rotations are allowed to occur starting from a given rotation_schedule. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

The path of the Database Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/database_secret_backend_static_role#backend DatabaseSecretBackendStaticRole#backend}

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.dbName"></a>

```go
DbName *string
```

- *Type:* *string

Database connection to use for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/database_secret_backend_static_role#db_name DatabaseSecretBackendStaticRole#db_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Unique name for the static role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/database_secret_backend_static_role#name DatabaseSecretBackendStaticRole#name}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

The database username that this role corresponds to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/database_secret_backend_static_role#username DatabaseSecretBackendStaticRole#username}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/database_secret_backend_static_role#id DatabaseSecretBackendStaticRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/database_secret_backend_static_role#namespace DatabaseSecretBackendStaticRole#namespace}

---

##### `RotationPeriod`<sup>Optional</sup> <a name="RotationPeriod" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.rotationPeriod"></a>

```go
RotationPeriod *f64
```

- *Type:* *f64

The amount of time Vault should wait before rotating the password, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/database_secret_backend_static_role#rotation_period DatabaseSecretBackendStaticRole#rotation_period}

---

##### `RotationSchedule`<sup>Optional</sup> <a name="RotationSchedule" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.rotationSchedule"></a>

```go
RotationSchedule *string
```

- *Type:* *string

A cron-style string that will define the schedule on which rotations should occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/database_secret_backend_static_role#rotation_schedule DatabaseSecretBackendStaticRole#rotation_schedule}

---

##### `RotationStatements`<sup>Optional</sup> <a name="RotationStatements" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.rotationStatements"></a>

```go
RotationStatements *[]*string
```

- *Type:* *[]*string

Database statements to execute to rotate the password for the configured database user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/database_secret_backend_static_role#rotation_statements DatabaseSecretBackendStaticRole#rotation_statements}

---

##### `RotationWindow`<sup>Optional</sup> <a name="RotationWindow" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.rotationWindow"></a>

```go
RotationWindow *f64
```

- *Type:* *f64

The amount of time in seconds in which the rotations are allowed to occur starting from a given rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/database_secret_backend_static_role#rotation_window DatabaseSecretBackendStaticRole#rotation_window}

---



