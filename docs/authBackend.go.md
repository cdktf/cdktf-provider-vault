# `authBackend` Submodule <a name="`authBackend` Submodule" id="@cdktf/provider-vault.authBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthBackend <a name="AuthBackend" id="@cdktf/provider-vault.authBackend.AuthBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/auth_backend vault_auth_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.authBackend.AuthBackend.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/authbackend"

authbackend.NewAuthBackend(scope Construct, id *string, config AuthBackendConfig) AuthBackend
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig">AuthBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.authBackend.AuthBackend.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.authBackend.AuthBackend.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.authBackend.AuthBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig">AuthBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.putTune">PutTune</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.resetDisableRemount">ResetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.resetLocal">ResetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.resetTune">ResetTune</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.authBackend.AuthBackend.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.authBackend.AuthBackend.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.authBackend.AuthBackend.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.authBackend.AuthBackend.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.authBackend.AuthBackend.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.authBackend.AuthBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.authBackend.AuthBackend.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.authBackend.AuthBackend.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.authBackend.AuthBackend.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.authBackend.AuthBackend.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.authBackend.AuthBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.authBackend.AuthBackend.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.authBackend.AuthBackend.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.authBackend.AuthBackend.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.authBackend.AuthBackend.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.authBackend.AuthBackend.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.authBackend.AuthBackend.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.authBackend.AuthBackend.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.authBackend.AuthBackend.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.authBackend.AuthBackend.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.authBackend.AuthBackend.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.authBackend.AuthBackend.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTune` <a name="PutTune" id="@cdktf/provider-vault.authBackend.AuthBackend.putTune"></a>

```go
func PutTune(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.authBackend.AuthBackend.putTune.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-vault.authBackend.AuthBackend.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisableRemount` <a name="ResetDisableRemount" id="@cdktf/provider-vault.authBackend.AuthBackend.resetDisableRemount"></a>

```go
func ResetDisableRemount()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.authBackend.AuthBackend.resetId"></a>

```go
func ResetId()
```

##### `ResetLocal` <a name="ResetLocal" id="@cdktf/provider-vault.authBackend.AuthBackend.resetLocal"></a>

```go
func ResetLocal()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.authBackend.AuthBackend.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-vault.authBackend.AuthBackend.resetPath"></a>

```go
func ResetPath()
```

##### `ResetTune` <a name="ResetTune" id="@cdktf/provider-vault.authBackend.AuthBackend.resetTune"></a>

```go
func ResetTune()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AuthBackend resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.authBackend.AuthBackend.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/authbackend"

authbackend.AuthBackend_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.authBackend.AuthBackend.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.authBackend.AuthBackend.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/authbackend"

authbackend.AuthBackend_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.authBackend.AuthBackend.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.authBackend.AuthBackend.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/authbackend"

authbackend.AuthBackend_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.authBackend.AuthBackend.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.authBackend.AuthBackend.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/authbackend"

authbackend.AuthBackend_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AuthBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.authBackend.AuthBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.authBackend.AuthBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AuthBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.authBackend.AuthBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AuthBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/auth_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.authBackend.AuthBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AuthBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.accessor">Accessor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.tune">Tune</a></code> | <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneList">AuthBackendTuneList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.disableRemountInput">DisableRemountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.localInput">LocalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.tuneInput">TuneInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.disableRemount">DisableRemount</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.local">Local</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.authBackend.AuthBackend.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.authBackend.AuthBackend.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.authBackend.AuthBackend.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.authBackend.AuthBackend.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.authBackend.AuthBackend.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.authBackend.AuthBackend.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.authBackend.AuthBackend.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.authBackend.AuthBackend.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.authBackend.AuthBackend.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.authBackend.AuthBackend.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.authBackend.AuthBackend.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.authBackend.AuthBackend.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.authBackend.AuthBackend.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.authBackend.AuthBackend.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktf/provider-vault.authBackend.AuthBackend.property.accessor"></a>

```go
func Accessor() *string
```

- *Type:* *string

---

##### `Tune`<sup>Required</sup> <a name="Tune" id="@cdktf/provider-vault.authBackend.AuthBackend.property.tune"></a>

```go
func Tune() AuthBackendTuneList
```

- *Type:* <a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneList">AuthBackendTuneList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-vault.authBackend.AuthBackend.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisableRemountInput`<sup>Optional</sup> <a name="DisableRemountInput" id="@cdktf/provider-vault.authBackend.AuthBackend.property.disableRemountInput"></a>

```go
func DisableRemountInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.authBackend.AuthBackend.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocalInput`<sup>Optional</sup> <a name="LocalInput" id="@cdktf/provider-vault.authBackend.AuthBackend.property.localInput"></a>

```go
func LocalInput() interface{}
```

- *Type:* interface{}

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.authBackend.AuthBackend.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.authBackend.AuthBackend.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `TuneInput`<sup>Optional</sup> <a name="TuneInput" id="@cdktf/provider-vault.authBackend.AuthBackend.property.tuneInput"></a>

```go
func TuneInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-vault.authBackend.AuthBackend.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vault.authBackend.AuthBackend.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisableRemount`<sup>Required</sup> <a name="DisableRemount" id="@cdktf/provider-vault.authBackend.AuthBackend.property.disableRemount"></a>

```go
func DisableRemount() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.authBackend.AuthBackend.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Local`<sup>Required</sup> <a name="Local" id="@cdktf/provider-vault.authBackend.AuthBackend.property.local"></a>

```go
func Local() interface{}
```

- *Type:* interface{}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.authBackend.AuthBackend.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.authBackend.AuthBackend.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vault.authBackend.AuthBackend.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.authBackend.AuthBackend.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthBackendConfig <a name="AuthBackendConfig" id="@cdktf/provider-vault.authBackend.AuthBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.authBackend.AuthBackendConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/authbackend"

&authbackend.AuthBackendConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Type: *string,
	Description: *string,
	DisableRemount: interface{},
	Id: *string,
	Local: interface{},
	Namespace: *string,
	Path: *string,
	Tune: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig.property.type">Type</a></code> | <code>*string</code> | Name of the auth backend. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig.property.description">Description</a></code> | <code>*string</code> | The description of the auth backend. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig.property.disableRemount">DisableRemount</a></code> | <code>interface{}</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/auth_backend#id AuthBackend#id}. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig.property.local">Local</a></code> | <code>interface{}</code> | Specifies if the auth method is local only. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig.property.path">Path</a></code> | <code>*string</code> | path to mount the backend. This defaults to the type. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig.property.tune">Tune</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/auth_backend#tune AuthBackend#tune}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.authBackend.AuthBackendConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.authBackend.AuthBackendConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.authBackend.AuthBackendConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.authBackend.AuthBackendConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.authBackend.AuthBackendConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.authBackend.AuthBackendConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.authBackend.AuthBackendConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vault.authBackend.AuthBackendConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Name of the auth backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/auth_backend#type AuthBackend#type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-vault.authBackend.AuthBackendConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the auth backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/auth_backend#description AuthBackend#description}

---

##### `DisableRemount`<sup>Optional</sup> <a name="DisableRemount" id="@cdktf/provider-vault.authBackend.AuthBackendConfig.property.disableRemount"></a>

```go
DisableRemount interface{}
```

- *Type:* interface{}

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/auth_backend#disable_remount AuthBackend#disable_remount}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.authBackend.AuthBackendConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/auth_backend#id AuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Local`<sup>Optional</sup> <a name="Local" id="@cdktf/provider-vault.authBackend.AuthBackendConfig.property.local"></a>

```go
Local interface{}
```

- *Type:* interface{}

Specifies if the auth method is local only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/auth_backend#local AuthBackend#local}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.authBackend.AuthBackendConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/auth_backend#namespace AuthBackend#namespace}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-vault.authBackend.AuthBackendConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

path to mount the backend. This defaults to the type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/auth_backend#path AuthBackend#path}

---

##### `Tune`<sup>Optional</sup> <a name="Tune" id="@cdktf/provider-vault.authBackend.AuthBackendConfig.property.tune"></a>

```go
Tune interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/auth_backend#tune AuthBackend#tune}.

---

### AuthBackendTune <a name="AuthBackendTune" id="@cdktf/provider-vault.authBackend.AuthBackendTune"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.authBackend.AuthBackendTune.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/authbackend"

&authbackend.AuthBackendTune {
	AllowedResponseHeaders: *[]*string,
	AuditNonHmacRequestKeys: *[]*string,
	AuditNonHmacResponseKeys: *[]*string,
	DefaultLeaseTtl: *string,
	ListingVisibility: *string,
	MaxLeaseTtl: *string,
	PassthroughRequestHeaders: *[]*string,
	TokenType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTune.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/auth_backend#allowed_response_headers AuthBackend#allowed_response_headers}. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTune.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/auth_backend#audit_non_hmac_request_keys AuthBackend#audit_non_hmac_request_keys}. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTune.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/auth_backend#audit_non_hmac_response_keys AuthBackend#audit_non_hmac_response_keys}. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTune.property.defaultLeaseTtl">DefaultLeaseTtl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/auth_backend#default_lease_ttl AuthBackend#default_lease_ttl}. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTune.property.listingVisibility">ListingVisibility</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/auth_backend#listing_visibility AuthBackend#listing_visibility}. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTune.property.maxLeaseTtl">MaxLeaseTtl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/auth_backend#max_lease_ttl AuthBackend#max_lease_ttl}. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTune.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/auth_backend#passthrough_request_headers AuthBackend#passthrough_request_headers}. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTune.property.tokenType">TokenType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/auth_backend#token_type AuthBackend#token_type}. |

---

##### `AllowedResponseHeaders`<sup>Optional</sup> <a name="AllowedResponseHeaders" id="@cdktf/provider-vault.authBackend.AuthBackendTune.property.allowedResponseHeaders"></a>

```go
AllowedResponseHeaders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/auth_backend#allowed_response_headers AuthBackend#allowed_response_headers}.

---

##### `AuditNonHmacRequestKeys`<sup>Optional</sup> <a name="AuditNonHmacRequestKeys" id="@cdktf/provider-vault.authBackend.AuthBackendTune.property.auditNonHmacRequestKeys"></a>

```go
AuditNonHmacRequestKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/auth_backend#audit_non_hmac_request_keys AuthBackend#audit_non_hmac_request_keys}.

---

##### `AuditNonHmacResponseKeys`<sup>Optional</sup> <a name="AuditNonHmacResponseKeys" id="@cdktf/provider-vault.authBackend.AuthBackendTune.property.auditNonHmacResponseKeys"></a>

```go
AuditNonHmacResponseKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/auth_backend#audit_non_hmac_response_keys AuthBackend#audit_non_hmac_response_keys}.

---

##### `DefaultLeaseTtl`<sup>Optional</sup> <a name="DefaultLeaseTtl" id="@cdktf/provider-vault.authBackend.AuthBackendTune.property.defaultLeaseTtl"></a>

```go
DefaultLeaseTtl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/auth_backend#default_lease_ttl AuthBackend#default_lease_ttl}.

---

##### `ListingVisibility`<sup>Optional</sup> <a name="ListingVisibility" id="@cdktf/provider-vault.authBackend.AuthBackendTune.property.listingVisibility"></a>

```go
ListingVisibility *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/auth_backend#listing_visibility AuthBackend#listing_visibility}.

---

##### `MaxLeaseTtl`<sup>Optional</sup> <a name="MaxLeaseTtl" id="@cdktf/provider-vault.authBackend.AuthBackendTune.property.maxLeaseTtl"></a>

```go
MaxLeaseTtl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/auth_backend#max_lease_ttl AuthBackend#max_lease_ttl}.

---

##### `PassthroughRequestHeaders`<sup>Optional</sup> <a name="PassthroughRequestHeaders" id="@cdktf/provider-vault.authBackend.AuthBackendTune.property.passthroughRequestHeaders"></a>

```go
PassthroughRequestHeaders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/auth_backend#passthrough_request_headers AuthBackend#passthrough_request_headers}.

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktf/provider-vault.authBackend.AuthBackendTune.property.tokenType"></a>

```go
TokenType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/auth_backend#token_type AuthBackend#token_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### AuthBackendTuneList <a name="AuthBackendTuneList" id="@cdktf/provider-vault.authBackend.AuthBackendTuneList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.authBackend.AuthBackendTuneList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/authbackend"

authbackend.NewAuthBackendTuneList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AuthBackendTuneList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.authBackend.AuthBackendTuneList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.authBackend.AuthBackendTuneList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.authBackend.AuthBackendTuneList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.authBackend.AuthBackendTuneList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.authBackend.AuthBackendTuneList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.authBackend.AuthBackendTuneList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.authBackend.AuthBackendTuneList.get"></a>

```go
func Get(index *f64) AuthBackendTuneOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.authBackend.AuthBackendTuneList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.authBackend.AuthBackendTuneList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.authBackend.AuthBackendTuneList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.authBackend.AuthBackendTuneList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AuthBackendTuneOutputReference <a name="AuthBackendTuneOutputReference" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/authbackend"

authbackend.NewAuthBackendTuneOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AuthBackendTuneOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resetAllowedResponseHeaders">ResetAllowedResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resetAuditNonHmacRequestKeys">ResetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resetAuditNonHmacResponseKeys">ResetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resetDefaultLeaseTtl">ResetDefaultLeaseTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resetListingVisibility">ResetListingVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resetMaxLeaseTtl">ResetMaxLeaseTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resetPassthroughRequestHeaders">ResetPassthroughRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resetTokenType">ResetTokenType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedResponseHeaders` <a name="ResetAllowedResponseHeaders" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resetAllowedResponseHeaders"></a>

```go
func ResetAllowedResponseHeaders()
```

##### `ResetAuditNonHmacRequestKeys` <a name="ResetAuditNonHmacRequestKeys" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resetAuditNonHmacRequestKeys"></a>

```go
func ResetAuditNonHmacRequestKeys()
```

##### `ResetAuditNonHmacResponseKeys` <a name="ResetAuditNonHmacResponseKeys" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resetAuditNonHmacResponseKeys"></a>

```go
func ResetAuditNonHmacResponseKeys()
```

##### `ResetDefaultLeaseTtl` <a name="ResetDefaultLeaseTtl" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resetDefaultLeaseTtl"></a>

```go
func ResetDefaultLeaseTtl()
```

##### `ResetListingVisibility` <a name="ResetListingVisibility" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resetListingVisibility"></a>

```go
func ResetListingVisibility()
```

##### `ResetMaxLeaseTtl` <a name="ResetMaxLeaseTtl" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resetMaxLeaseTtl"></a>

```go
func ResetMaxLeaseTtl()
```

##### `ResetPassthroughRequestHeaders` <a name="ResetPassthroughRequestHeaders" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resetPassthroughRequestHeaders"></a>

```go
func ResetPassthroughRequestHeaders()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resetTokenType"></a>

```go
func ResetTokenType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.allowedResponseHeadersInput">AllowedResponseHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.auditNonHmacRequestKeysInput">AuditNonHmacRequestKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.auditNonHmacResponseKeysInput">AuditNonHmacResponseKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.defaultLeaseTtlInput">DefaultLeaseTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.listingVisibilityInput">ListingVisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.maxLeaseTtlInput">MaxLeaseTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.passthroughRequestHeadersInput">PassthroughRequestHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.tokenTypeInput">TokenTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.defaultLeaseTtl">DefaultLeaseTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.listingVisibility">ListingVisibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.maxLeaseTtl">MaxLeaseTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.tokenType">TokenType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedResponseHeadersInput`<sup>Optional</sup> <a name="AllowedResponseHeadersInput" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.allowedResponseHeadersInput"></a>

```go
func AllowedResponseHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="AuditNonHmacRequestKeysInput" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.auditNonHmacRequestKeysInput"></a>

```go
func AuditNonHmacRequestKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="AuditNonHmacResponseKeysInput" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.auditNonHmacResponseKeysInput"></a>

```go
func AuditNonHmacResponseKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultLeaseTtlInput`<sup>Optional</sup> <a name="DefaultLeaseTtlInput" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.defaultLeaseTtlInput"></a>

```go
func DefaultLeaseTtlInput() *string
```

- *Type:* *string

---

##### `ListingVisibilityInput`<sup>Optional</sup> <a name="ListingVisibilityInput" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.listingVisibilityInput"></a>

```go
func ListingVisibilityInput() *string
```

- *Type:* *string

---

##### `MaxLeaseTtlInput`<sup>Optional</sup> <a name="MaxLeaseTtlInput" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.maxLeaseTtlInput"></a>

```go
func MaxLeaseTtlInput() *string
```

- *Type:* *string

---

##### `PassthroughRequestHeadersInput`<sup>Optional</sup> <a name="PassthroughRequestHeadersInput" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.passthroughRequestHeadersInput"></a>

```go
func PassthroughRequestHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.tokenTypeInput"></a>

```go
func TokenTypeInput() *string
```

- *Type:* *string

---

##### `AllowedResponseHeaders`<sup>Required</sup> <a name="AllowedResponseHeaders" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.allowedResponseHeaders"></a>

```go
func AllowedResponseHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `AuditNonHmacRequestKeys`<sup>Required</sup> <a name="AuditNonHmacRequestKeys" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.auditNonHmacRequestKeys"></a>

```go
func AuditNonHmacRequestKeys() *[]*string
```

- *Type:* *[]*string

---

##### `AuditNonHmacResponseKeys`<sup>Required</sup> <a name="AuditNonHmacResponseKeys" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.auditNonHmacResponseKeys"></a>

```go
func AuditNonHmacResponseKeys() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultLeaseTtl`<sup>Required</sup> <a name="DefaultLeaseTtl" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.defaultLeaseTtl"></a>

```go
func DefaultLeaseTtl() *string
```

- *Type:* *string

---

##### `ListingVisibility`<sup>Required</sup> <a name="ListingVisibility" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.listingVisibility"></a>

```go
func ListingVisibility() *string
```

- *Type:* *string

---

##### `MaxLeaseTtl`<sup>Required</sup> <a name="MaxLeaseTtl" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.maxLeaseTtl"></a>

```go
func MaxLeaseTtl() *string
```

- *Type:* *string

---

##### `PassthroughRequestHeaders`<sup>Required</sup> <a name="PassthroughRequestHeaders" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.passthroughRequestHeaders"></a>

```go
func PassthroughRequestHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.tokenType"></a>

```go
func TokenType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



