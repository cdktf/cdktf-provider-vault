# `mongodbatlasSecretBackend` Submodule <a name="`mongodbatlasSecretBackend` Submodule" id="@cdktf/provider-vault.mongodbatlasSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MongodbatlasSecretBackend <a name="MongodbatlasSecretBackend" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mongodbatlas_secret_backend vault_mongodbatlas_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/mongodbatlassecretbackend"

mongodbatlassecretbackend.NewMongodbatlasSecretBackend(scope Construct, id *string, config MongodbatlasSecretBackendConfig) MongodbatlasSecretBackend
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackendConfig">MongodbatlasSecretBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackendConfig">MongodbatlasSecretBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MongodbatlasSecretBackend resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/mongodbatlassecretbackend"

mongodbatlassecretbackend.MongodbatlasSecretBackend_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/mongodbatlassecretbackend"

mongodbatlassecretbackend.MongodbatlasSecretBackend_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/mongodbatlassecretbackend"

mongodbatlassecretbackend.MongodbatlasSecretBackend_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/mongodbatlassecretbackend"

mongodbatlassecretbackend.MongodbatlasSecretBackend_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MongodbatlasSecretBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MongodbatlasSecretBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MongodbatlasSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mongodbatlas_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MongodbatlasSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.publicKeyInput">PublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.publicKeyInput"></a>

```go
func PublicKeyInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackend.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MongodbatlasSecretBackendConfig <a name="MongodbatlasSecretBackendConfig" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackendConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/mongodbatlassecretbackend"

&mongodbatlassecretbackend.MongodbatlasSecretBackendConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Mount: *string,
	PrivateKey: *string,
	PublicKey: *string,
	Id: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackendConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackendConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackendConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackendConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackendConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackendConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackendConfig.property.mount">Mount</a></code> | <code>*string</code> | Path where MongoDB Atlas secret backend is mounted. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackendConfig.property.privateKey">PrivateKey</a></code> | <code>*string</code> | The Private Programmatic API Key used to connect with MongoDB Atlas API. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackendConfig.property.publicKey">PublicKey</a></code> | <code>*string</code> | The Public Programmatic API Key used to authenticate with the MongoDB Atlas API. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackendConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mongodbatlas_secret_backend#id MongodbatlasSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackendConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackendConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackendConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackendConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackendConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackendConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackendConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackendConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackendConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

Path where MongoDB Atlas secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mongodbatlas_secret_backend#mount MongodbatlasSecretBackend#mount}

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackendConfig.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

The Private Programmatic API Key used to connect with MongoDB Atlas API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mongodbatlas_secret_backend#private_key MongodbatlasSecretBackend#private_key}

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackendConfig.property.publicKey"></a>

```go
PublicKey *string
```

- *Type:* *string

The Public Programmatic API Key used to authenticate with the MongoDB Atlas API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mongodbatlas_secret_backend#public_key MongodbatlasSecretBackend#public_key}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackendConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mongodbatlas_secret_backend#id MongodbatlasSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.mongodbatlasSecretBackend.MongodbatlasSecretBackendConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mongodbatlas_secret_backend#namespace MongodbatlasSecretBackend#namespace}

---



