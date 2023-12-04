# `managedKeys` Submodule <a name="`managedKeys` Submodule" id="@cdktf/provider-vault.managedKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedKeys <a name="ManagedKeys" id="@cdktf/provider-vault.managedKeys.ManagedKeys"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys vault_managed_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/managedkeys"

managedkeys.NewManagedKeys(scope Construct, id *string, config ManagedKeysConfig) ManagedKeys
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig">ManagedKeysConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig">ManagedKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.putAws">PutAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.putAzure">PutAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.putPkcs">PutPkcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.resetAws">ResetAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.resetAzure">ResetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.resetPkcs">ResetPkcs</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.managedKeys.ManagedKeys.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.managedKeys.ManagedKeys.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.managedKeys.ManagedKeys.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.managedKeys.ManagedKeys.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.managedKeys.ManagedKeys.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.managedKeys.ManagedKeys.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.managedKeys.ManagedKeys.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.managedKeys.ManagedKeys.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.managedKeys.ManagedKeys.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.managedKeys.ManagedKeys.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.managedKeys.ManagedKeys.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.managedKeys.ManagedKeys.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.managedKeys.ManagedKeys.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.managedKeys.ManagedKeys.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAws` <a name="PutAws" id="@cdktf/provider-vault.managedKeys.ManagedKeys.putAws"></a>

```go
func PutAws(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.managedKeys.ManagedKeys.putAws.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAzure` <a name="PutAzure" id="@cdktf/provider-vault.managedKeys.ManagedKeys.putAzure"></a>

```go
func PutAzure(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.managedKeys.ManagedKeys.putAzure.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPkcs` <a name="PutPkcs" id="@cdktf/provider-vault.managedKeys.ManagedKeys.putPkcs"></a>

```go
func PutPkcs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.managedKeys.ManagedKeys.putPkcs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAws` <a name="ResetAws" id="@cdktf/provider-vault.managedKeys.ManagedKeys.resetAws"></a>

```go
func ResetAws()
```

##### `ResetAzure` <a name="ResetAzure" id="@cdktf/provider-vault.managedKeys.ManagedKeys.resetAzure"></a>

```go
func ResetAzure()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.managedKeys.ManagedKeys.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPkcs` <a name="ResetPkcs" id="@cdktf/provider-vault.managedKeys.ManagedKeys.resetPkcs"></a>

```go
func ResetPkcs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedKeys resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.managedKeys.ManagedKeys.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/managedkeys"

managedkeys.ManagedKeys_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.managedKeys.ManagedKeys.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.managedKeys.ManagedKeys.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/managedkeys"

managedkeys.ManagedKeys_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.managedKeys.ManagedKeys.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.managedKeys.ManagedKeys.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/managedkeys"

managedkeys.ManagedKeys_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.managedKeys.ManagedKeys.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.managedKeys.ManagedKeys.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/managedkeys"

managedkeys.ManagedKeys_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ManagedKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.managedKeys.ManagedKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ManagedKeys to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ManagedKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.managedKeys.ManagedKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ManagedKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.aws">Aws</a></code> | <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList">ManagedKeysAwsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.azure">Azure</a></code> | <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList">ManagedKeysAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.pkcs">Pkcs</a></code> | <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList">ManagedKeysPkcsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.awsInput">AwsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.azureInput">AzureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.pkcsInput">PkcsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Aws`<sup>Required</sup> <a name="Aws" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.aws"></a>

```go
func Aws() ManagedKeysAwsList
```

- *Type:* <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList">ManagedKeysAwsList</a>

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.azure"></a>

```go
func Azure() ManagedKeysAzureList
```

- *Type:* <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList">ManagedKeysAzureList</a>

---

##### `Pkcs`<sup>Required</sup> <a name="Pkcs" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.pkcs"></a>

```go
func Pkcs() ManagedKeysPkcsList
```

- *Type:* <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList">ManagedKeysPkcsList</a>

---

##### `AwsInput`<sup>Optional</sup> <a name="AwsInput" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.awsInput"></a>

```go
func AwsInput() interface{}
```

- *Type:* interface{}

---

##### `AzureInput`<sup>Optional</sup> <a name="AzureInput" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.azureInput"></a>

```go
func AzureInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PkcsInput`<sup>Optional</sup> <a name="PkcsInput" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.pkcsInput"></a>

```go
func PkcsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedKeysAws <a name="ManagedKeysAws" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/managedkeys"

&managedkeys.ManagedKeysAws {
	AccessKey: *string,
	KeyBits: *string,
	KeyType: *string,
	KmsKey: *string,
	Name: *string,
	SecretKey: *string,
	AllowGenerateKey: interface{},
	AllowReplaceKey: interface{},
	AllowStoreKey: interface{},
	AnyMount: interface{},
	Curve: *string,
	Endpoint: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.accessKey">AccessKey</a></code> | <code>*string</code> | The AWS access key to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.keyBits">KeyBits</a></code> | <code>*string</code> | The size in bits for an RSA key. This field is required when 'key_type' is 'RSA'. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.keyType">KeyType</a></code> | <code>*string</code> | The type of key to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.kmsKey">KmsKey</a></code> | <code>*string</code> | An identifier for the key. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.name">Name</a></code> | <code>*string</code> | A unique lowercase name that serves as identifying the key. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.secretKey">SecretKey</a></code> | <code>*string</code> | The AWS secret key to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.allowGenerateKey">AllowGenerateKey</a></code> | <code>interface{}</code> | If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.allowReplaceKey">AllowReplaceKey</a></code> | <code>interface{}</code> | Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.allowStoreKey">AllowStoreKey</a></code> | <code>interface{}</code> | Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.anyMount">AnyMount</a></code> | <code>interface{}</code> | Allow usage from any mount point within the namespace if 'true'. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.curve">Curve</a></code> | <code>*string</code> | The curve to use for an ECDSA key. Used when key_type is 'ECDSA'. Required if 'allow_generate_key' is true. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.endpoint">Endpoint</a></code> | <code>*string</code> | Used to specify a custom AWS endpoint. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.region">Region</a></code> | <code>*string</code> | The AWS region where the keys are stored (or will be stored). |

---

##### `AccessKey`<sup>Required</sup> <a name="AccessKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.accessKey"></a>

```go
AccessKey *string
```

- *Type:* *string

The AWS access key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#access_key ManagedKeys#access_key}

---

##### `KeyBits`<sup>Required</sup> <a name="KeyBits" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.keyBits"></a>

```go
KeyBits *string
```

- *Type:* *string

The size in bits for an RSA key. This field is required when 'key_type' is 'RSA'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#key_bits ManagedKeys#key_bits}

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.keyType"></a>

```go
KeyType *string
```

- *Type:* *string

The type of key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#key_type ManagedKeys#key_type}

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

An identifier for the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#kms_key ManagedKeys#kms_key}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.name"></a>

```go
Name *string
```

- *Type:* *string

A unique lowercase name that serves as identifying the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#name ManagedKeys#name}

---

##### `SecretKey`<sup>Required</sup> <a name="SecretKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.secretKey"></a>

```go
SecretKey *string
```

- *Type:* *string

The AWS secret key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#secret_key ManagedKeys#secret_key}

---

##### `AllowGenerateKey`<sup>Optional</sup> <a name="AllowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.allowGenerateKey"></a>

```go
AllowGenerateKey interface{}
```

- *Type:* interface{}

If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#allow_generate_key ManagedKeys#allow_generate_key}

---

##### `AllowReplaceKey`<sup>Optional</sup> <a name="AllowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.allowReplaceKey"></a>

```go
AllowReplaceKey interface{}
```

- *Type:* interface{}

Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#allow_replace_key ManagedKeys#allow_replace_key}

---

##### `AllowStoreKey`<sup>Optional</sup> <a name="AllowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.allowStoreKey"></a>

```go
AllowStoreKey interface{}
```

- *Type:* interface{}

Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#allow_store_key ManagedKeys#allow_store_key}

---

##### `AnyMount`<sup>Optional</sup> <a name="AnyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.anyMount"></a>

```go
AnyMount interface{}
```

- *Type:* interface{}

Allow usage from any mount point within the namespace if 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#any_mount ManagedKeys#any_mount}

---

##### `Curve`<sup>Optional</sup> <a name="Curve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.curve"></a>

```go
Curve *string
```

- *Type:* *string

The curve to use for an ECDSA key. Used when key_type is 'ECDSA'. Required if 'allow_generate_key' is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#curve ManagedKeys#curve}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

Used to specify a custom AWS endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#endpoint ManagedKeys#endpoint}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.region"></a>

```go
Region *string
```

- *Type:* *string

The AWS region where the keys are stored (or will be stored).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#region ManagedKeys#region}

---

### ManagedKeysAzure <a name="ManagedKeysAzure" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/managedkeys"

&managedkeys.ManagedKeysAzure {
	ClientId: *string,
	ClientSecret: *string,
	KeyName: *string,
	KeyType: *string,
	Name: *string,
	TenantId: *string,
	VaultName: *string,
	AllowGenerateKey: interface{},
	AllowReplaceKey: interface{},
	AllowStoreKey: interface{},
	AnyMount: interface{},
	Environment: *string,
	KeyBits: *string,
	Resource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.clientId">ClientId</a></code> | <code>*string</code> | The client id for credentials to query the Azure APIs. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | The client secret for credentials to query the Azure APIs. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.keyName">KeyName</a></code> | <code>*string</code> | The Key Vault key to use for encryption and decryption. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.keyType">KeyType</a></code> | <code>*string</code> | The type of key to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.name">Name</a></code> | <code>*string</code> | A unique lowercase name that serves as identifying the key. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.tenantId">TenantId</a></code> | <code>*string</code> | The tenant id for the Azure Active Directory organization. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.vaultName">VaultName</a></code> | <code>*string</code> | The Key Vault vault to use the encryption keys for encryption and decryption. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.allowGenerateKey">AllowGenerateKey</a></code> | <code>interface{}</code> | If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.allowReplaceKey">AllowReplaceKey</a></code> | <code>interface{}</code> | Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.allowStoreKey">AllowStoreKey</a></code> | <code>interface{}</code> | Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.anyMount">AnyMount</a></code> | <code>interface{}</code> | Allow usage from any mount point within the namespace if 'true'. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.environment">Environment</a></code> | <code>*string</code> | The Azure Cloud environment API endpoints to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.keyBits">KeyBits</a></code> | <code>*string</code> | The size in bits for an RSA key. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.resource">Resource</a></code> | <code>*string</code> | The Azure Key Vault resource's DNS Suffix to connect to. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The client id for credentials to query the Azure APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#client_id ManagedKeys#client_id}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

The client secret for credentials to query the Azure APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#client_secret ManagedKeys#client_secret}

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.keyName"></a>

```go
KeyName *string
```

- *Type:* *string

The Key Vault key to use for encryption and decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#key_name ManagedKeys#key_name}

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.keyType"></a>

```go
KeyType *string
```

- *Type:* *string

The type of key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#key_type ManagedKeys#key_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.name"></a>

```go
Name *string
```

- *Type:* *string

A unique lowercase name that serves as identifying the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#name ManagedKeys#name}

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

The tenant id for the Azure Active Directory organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#tenant_id ManagedKeys#tenant_id}

---

##### `VaultName`<sup>Required</sup> <a name="VaultName" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.vaultName"></a>

```go
VaultName *string
```

- *Type:* *string

The Key Vault vault to use the encryption keys for encryption and decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#vault_name ManagedKeys#vault_name}

---

##### `AllowGenerateKey`<sup>Optional</sup> <a name="AllowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.allowGenerateKey"></a>

```go
AllowGenerateKey interface{}
```

- *Type:* interface{}

If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#allow_generate_key ManagedKeys#allow_generate_key}

---

##### `AllowReplaceKey`<sup>Optional</sup> <a name="AllowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.allowReplaceKey"></a>

```go
AllowReplaceKey interface{}
```

- *Type:* interface{}

Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#allow_replace_key ManagedKeys#allow_replace_key}

---

##### `AllowStoreKey`<sup>Optional</sup> <a name="AllowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.allowStoreKey"></a>

```go
AllowStoreKey interface{}
```

- *Type:* interface{}

Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#allow_store_key ManagedKeys#allow_store_key}

---

##### `AnyMount`<sup>Optional</sup> <a name="AnyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.anyMount"></a>

```go
AnyMount interface{}
```

- *Type:* interface{}

Allow usage from any mount point within the namespace if 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#any_mount ManagedKeys#any_mount}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

The Azure Cloud environment API endpoints to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#environment ManagedKeys#environment}

---

##### `KeyBits`<sup>Optional</sup> <a name="KeyBits" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.keyBits"></a>

```go
KeyBits *string
```

- *Type:* *string

The size in bits for an RSA key.

This field is required when 'key_type' is 'RSA' or when 'allow_generate_key' is true

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#key_bits ManagedKeys#key_bits}

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

The Azure Key Vault resource's DNS Suffix to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#resource ManagedKeys#resource}

---

### ManagedKeysConfig <a name="ManagedKeysConfig" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/managedkeys"

&managedkeys.ManagedKeysConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Aws: interface{},
	Azure: interface{},
	Id: *string,
	Namespace: *string,
	Pkcs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.aws">Aws</a></code> | <code>interface{}</code> | aws block. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.azure">Azure</a></code> | <code>interface{}</code> | azure block. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#id ManagedKeys#id}. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.pkcs">Pkcs</a></code> | <code>interface{}</code> | pkcs block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Aws`<sup>Optional</sup> <a name="Aws" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.aws"></a>

```go
Aws interface{}
```

- *Type:* interface{}

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#aws ManagedKeys#aws}

---

##### `Azure`<sup>Optional</sup> <a name="Azure" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.azure"></a>

```go
Azure interface{}
```

- *Type:* interface{}

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#azure ManagedKeys#azure}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#id ManagedKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#namespace ManagedKeys#namespace}

---

##### `Pkcs`<sup>Optional</sup> <a name="Pkcs" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.pkcs"></a>

```go
Pkcs interface{}
```

- *Type:* interface{}

pkcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#pkcs ManagedKeys#pkcs}

---

### ManagedKeysPkcs <a name="ManagedKeysPkcs" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/managedkeys"

&managedkeys.ManagedKeysPkcs {
	KeyId: *string,
	KeyLabel: *string,
	Library: *string,
	Mechanism: *string,
	Name: *string,
	Pin: *string,
	AllowGenerateKey: interface{},
	AllowReplaceKey: interface{},
	AllowStoreKey: interface{},
	AnyMount: interface{},
	Curve: *string,
	ForceRwSession: *string,
	KeyBits: *string,
	Slot: *string,
	TokenLabel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.keyId">KeyId</a></code> | <code>*string</code> | The id of a PKCS#11 key to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.keyLabel">KeyLabel</a></code> | <code>*string</code> | The label of the key to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.library">Library</a></code> | <code>*string</code> | The name of the kms_library stanza to use from Vault's config to lookup the local library path. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.mechanism">Mechanism</a></code> | <code>*string</code> | The encryption/decryption mechanism to use, specified as a hexadecimal (prefixed by 0x) string. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.name">Name</a></code> | <code>*string</code> | A unique lowercase name that serves as identifying the key. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.pin">Pin</a></code> | <code>*string</code> | The PIN for login. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.allowGenerateKey">AllowGenerateKey</a></code> | <code>interface{}</code> | If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.allowReplaceKey">AllowReplaceKey</a></code> | <code>interface{}</code> | Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.allowStoreKey">AllowStoreKey</a></code> | <code>interface{}</code> | Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.anyMount">AnyMount</a></code> | <code>interface{}</code> | Allow usage from any mount point within the namespace if 'true'. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.curve">Curve</a></code> | <code>*string</code> | Supplies the curve value when using the 'CKM_ECDSA' mechanism. Required if 'allow_generate_key' is true. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.forceRwSession">ForceRwSession</a></code> | <code>*string</code> | Force all operations to open up a read-write session to the HSM. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.keyBits">KeyBits</a></code> | <code>*string</code> | Supplies the size in bits of the key when using 'CKM_RSA_PKCS_PSS', 'CKM_RSA_PKCS_OAEP' or 'CKM_RSA_PKCS' as a value for 'mechanism'. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.slot">Slot</a></code> | <code>*string</code> | The slot number to use, specified as a string in a decimal format (e.g. '2305843009213693953'). |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.tokenLabel">TokenLabel</a></code> | <code>*string</code> | The slot token label to use. |

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.keyId"></a>

```go
KeyId *string
```

- *Type:* *string

The id of a PKCS#11 key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#key_id ManagedKeys#key_id}

---

##### `KeyLabel`<sup>Required</sup> <a name="KeyLabel" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.keyLabel"></a>

```go
KeyLabel *string
```

- *Type:* *string

The label of the key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#key_label ManagedKeys#key_label}

---

##### `Library`<sup>Required</sup> <a name="Library" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.library"></a>

```go
Library *string
```

- *Type:* *string

The name of the kms_library stanza to use from Vault's config to lookup the local library path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#library ManagedKeys#library}

---

##### `Mechanism`<sup>Required</sup> <a name="Mechanism" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.mechanism"></a>

```go
Mechanism *string
```

- *Type:* *string

The encryption/decryption mechanism to use, specified as a hexadecimal (prefixed by 0x) string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#mechanism ManagedKeys#mechanism}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.name"></a>

```go
Name *string
```

- *Type:* *string

A unique lowercase name that serves as identifying the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#name ManagedKeys#name}

---

##### `Pin`<sup>Required</sup> <a name="Pin" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.pin"></a>

```go
Pin *string
```

- *Type:* *string

The PIN for login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#pin ManagedKeys#pin}

---

##### `AllowGenerateKey`<sup>Optional</sup> <a name="AllowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.allowGenerateKey"></a>

```go
AllowGenerateKey interface{}
```

- *Type:* interface{}

If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#allow_generate_key ManagedKeys#allow_generate_key}

---

##### `AllowReplaceKey`<sup>Optional</sup> <a name="AllowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.allowReplaceKey"></a>

```go
AllowReplaceKey interface{}
```

- *Type:* interface{}

Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#allow_replace_key ManagedKeys#allow_replace_key}

---

##### `AllowStoreKey`<sup>Optional</sup> <a name="AllowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.allowStoreKey"></a>

```go
AllowStoreKey interface{}
```

- *Type:* interface{}

Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#allow_store_key ManagedKeys#allow_store_key}

---

##### `AnyMount`<sup>Optional</sup> <a name="AnyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.anyMount"></a>

```go
AnyMount interface{}
```

- *Type:* interface{}

Allow usage from any mount point within the namespace if 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#any_mount ManagedKeys#any_mount}

---

##### `Curve`<sup>Optional</sup> <a name="Curve" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.curve"></a>

```go
Curve *string
```

- *Type:* *string

Supplies the curve value when using the 'CKM_ECDSA' mechanism. Required if 'allow_generate_key' is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#curve ManagedKeys#curve}

---

##### `ForceRwSession`<sup>Optional</sup> <a name="ForceRwSession" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.forceRwSession"></a>

```go
ForceRwSession *string
```

- *Type:* *string

Force all operations to open up a read-write session to the HSM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#force_rw_session ManagedKeys#force_rw_session}

---

##### `KeyBits`<sup>Optional</sup> <a name="KeyBits" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.keyBits"></a>

```go
KeyBits *string
```

- *Type:* *string

Supplies the size in bits of the key when using 'CKM_RSA_PKCS_PSS', 'CKM_RSA_PKCS_OAEP' or 'CKM_RSA_PKCS' as a value for 'mechanism'.

Required if 'allow_generate_key' is true

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#key_bits ManagedKeys#key_bits}

---

##### `Slot`<sup>Optional</sup> <a name="Slot" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.slot"></a>

```go
Slot *string
```

- *Type:* *string

The slot number to use, specified as a string in a decimal format (e.g. '2305843009213693953').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#slot ManagedKeys#slot}

---

##### `TokenLabel`<sup>Optional</sup> <a name="TokenLabel" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.tokenLabel"></a>

```go
TokenLabel *string
```

- *Type:* *string

The slot token label to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#token_label ManagedKeys#token_label}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedKeysAwsList <a name="ManagedKeysAwsList" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/managedkeys"

managedkeys.NewManagedKeysAwsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ManagedKeysAwsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.get"></a>

```go
func Get(index *f64) ManagedKeysAwsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ManagedKeysAwsOutputReference <a name="ManagedKeysAwsOutputReference" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/managedkeys"

managedkeys.NewManagedKeysAwsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ManagedKeysAwsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAllowGenerateKey">ResetAllowGenerateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAllowReplaceKey">ResetAllowReplaceKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAllowStoreKey">ResetAllowStoreKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAnyMount">ResetAnyMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetCurve">ResetCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowGenerateKey` <a name="ResetAllowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAllowGenerateKey"></a>

```go
func ResetAllowGenerateKey()
```

##### `ResetAllowReplaceKey` <a name="ResetAllowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAllowReplaceKey"></a>

```go
func ResetAllowReplaceKey()
```

##### `ResetAllowStoreKey` <a name="ResetAllowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAllowStoreKey"></a>

```go
func ResetAllowStoreKey()
```

##### `ResetAnyMount` <a name="ResetAnyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAnyMount"></a>

```go
func ResetAnyMount()
```

##### `ResetCurve` <a name="ResetCurve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetCurve"></a>

```go
func ResetCurve()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetRegion"></a>

```go
func ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.accessKeyInput">AccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowGenerateKeyInput">AllowGenerateKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowReplaceKeyInput">AllowReplaceKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowStoreKeyInput">AllowStoreKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.anyMountInput">AnyMountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.curveInput">CurveInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyBitsInput">KeyBitsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyTypeInput">KeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.secretKeyInput">SecretKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.accessKey">AccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowGenerateKey">AllowGenerateKey</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowReplaceKey">AllowReplaceKey</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowStoreKey">AllowStoreKey</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.anyMount">AnyMount</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.curve">Curve</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyBits">KeyBits</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.secretKey">SecretKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `AccessKeyInput`<sup>Optional</sup> <a name="AccessKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.accessKeyInput"></a>

```go
func AccessKeyInput() *string
```

- *Type:* *string

---

##### `AllowGenerateKeyInput`<sup>Optional</sup> <a name="AllowGenerateKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowGenerateKeyInput"></a>

```go
func AllowGenerateKeyInput() interface{}
```

- *Type:* interface{}

---

##### `AllowReplaceKeyInput`<sup>Optional</sup> <a name="AllowReplaceKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowReplaceKeyInput"></a>

```go
func AllowReplaceKeyInput() interface{}
```

- *Type:* interface{}

---

##### `AllowStoreKeyInput`<sup>Optional</sup> <a name="AllowStoreKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowStoreKeyInput"></a>

```go
func AllowStoreKeyInput() interface{}
```

- *Type:* interface{}

---

##### `AnyMountInput`<sup>Optional</sup> <a name="AnyMountInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.anyMountInput"></a>

```go
func AnyMountInput() interface{}
```

- *Type:* interface{}

---

##### `CurveInput`<sup>Optional</sup> <a name="CurveInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.curveInput"></a>

```go
func CurveInput() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `KeyBitsInput`<sup>Optional</sup> <a name="KeyBitsInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyBitsInput"></a>

```go
func KeyBitsInput() *string
```

- *Type:* *string

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyTypeInput"></a>

```go
func KeyTypeInput() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SecretKeyInput`<sup>Optional</sup> <a name="SecretKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.secretKeyInput"></a>

```go
func SecretKeyInput() *string
```

- *Type:* *string

---

##### `AccessKey`<sup>Required</sup> <a name="AccessKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.accessKey"></a>

```go
func AccessKey() *string
```

- *Type:* *string

---

##### `AllowGenerateKey`<sup>Required</sup> <a name="AllowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowGenerateKey"></a>

```go
func AllowGenerateKey() interface{}
```

- *Type:* interface{}

---

##### `AllowReplaceKey`<sup>Required</sup> <a name="AllowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowReplaceKey"></a>

```go
func AllowReplaceKey() interface{}
```

- *Type:* interface{}

---

##### `AllowStoreKey`<sup>Required</sup> <a name="AllowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowStoreKey"></a>

```go
func AllowStoreKey() interface{}
```

- *Type:* interface{}

---

##### `AnyMount`<sup>Required</sup> <a name="AnyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.anyMount"></a>

```go
func AnyMount() interface{}
```

- *Type:* interface{}

---

##### `Curve`<sup>Required</sup> <a name="Curve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.curve"></a>

```go
func Curve() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `KeyBits`<sup>Required</sup> <a name="KeyBits" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyBits"></a>

```go
func KeyBits() *string
```

- *Type:* *string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SecretKey`<sup>Required</sup> <a name="SecretKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.secretKey"></a>

```go
func SecretKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ManagedKeysAzureList <a name="ManagedKeysAzureList" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/managedkeys"

managedkeys.NewManagedKeysAzureList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ManagedKeysAzureList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.get"></a>

```go
func Get(index *f64) ManagedKeysAzureOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ManagedKeysAzureOutputReference <a name="ManagedKeysAzureOutputReference" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/managedkeys"

managedkeys.NewManagedKeysAzureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ManagedKeysAzureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAllowGenerateKey">ResetAllowGenerateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAllowReplaceKey">ResetAllowReplaceKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAllowStoreKey">ResetAllowStoreKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAnyMount">ResetAnyMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetKeyBits">ResetKeyBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetResource">ResetResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowGenerateKey` <a name="ResetAllowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAllowGenerateKey"></a>

```go
func ResetAllowGenerateKey()
```

##### `ResetAllowReplaceKey` <a name="ResetAllowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAllowReplaceKey"></a>

```go
func ResetAllowReplaceKey()
```

##### `ResetAllowStoreKey` <a name="ResetAllowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAllowStoreKey"></a>

```go
func ResetAllowStoreKey()
```

##### `ResetAnyMount` <a name="ResetAnyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAnyMount"></a>

```go
func ResetAnyMount()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetKeyBits` <a name="ResetKeyBits" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetKeyBits"></a>

```go
func ResetKeyBits()
```

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetResource"></a>

```go
func ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowGenerateKeyInput">AllowGenerateKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowReplaceKeyInput">AllowReplaceKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowStoreKeyInput">AllowStoreKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.anyMountInput">AnyMountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyBitsInput">KeyBitsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyNameInput">KeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyTypeInput">KeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.vaultNameInput">VaultNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowGenerateKey">AllowGenerateKey</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowReplaceKey">AllowReplaceKey</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowStoreKey">AllowStoreKey</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.anyMount">AnyMount</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyBits">KeyBits</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyName">KeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.vaultName">VaultName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `AllowGenerateKeyInput`<sup>Optional</sup> <a name="AllowGenerateKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowGenerateKeyInput"></a>

```go
func AllowGenerateKeyInput() interface{}
```

- *Type:* interface{}

---

##### `AllowReplaceKeyInput`<sup>Optional</sup> <a name="AllowReplaceKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowReplaceKeyInput"></a>

```go
func AllowReplaceKeyInput() interface{}
```

- *Type:* interface{}

---

##### `AllowStoreKeyInput`<sup>Optional</sup> <a name="AllowStoreKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowStoreKeyInput"></a>

```go
func AllowStoreKeyInput() interface{}
```

- *Type:* interface{}

---

##### `AnyMountInput`<sup>Optional</sup> <a name="AnyMountInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.anyMountInput"></a>

```go
func AnyMountInput() interface{}
```

- *Type:* interface{}

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `KeyBitsInput`<sup>Optional</sup> <a name="KeyBitsInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyBitsInput"></a>

```go
func KeyBitsInput() *string
```

- *Type:* *string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyNameInput"></a>

```go
func KeyNameInput() *string
```

- *Type:* *string

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyTypeInput"></a>

```go
func KeyTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `VaultNameInput`<sup>Optional</sup> <a name="VaultNameInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.vaultNameInput"></a>

```go
func VaultNameInput() *string
```

- *Type:* *string

---

##### `AllowGenerateKey`<sup>Required</sup> <a name="AllowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowGenerateKey"></a>

```go
func AllowGenerateKey() interface{}
```

- *Type:* interface{}

---

##### `AllowReplaceKey`<sup>Required</sup> <a name="AllowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowReplaceKey"></a>

```go
func AllowReplaceKey() interface{}
```

- *Type:* interface{}

---

##### `AllowStoreKey`<sup>Required</sup> <a name="AllowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowStoreKey"></a>

```go
func AllowStoreKey() interface{}
```

- *Type:* interface{}

---

##### `AnyMount`<sup>Required</sup> <a name="AnyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.anyMount"></a>

```go
func AnyMount() interface{}
```

- *Type:* interface{}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `KeyBits`<sup>Required</sup> <a name="KeyBits" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyBits"></a>

```go
func KeyBits() *string
```

- *Type:* *string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyName"></a>

```go
func KeyName() *string
```

- *Type:* *string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `VaultName`<sup>Required</sup> <a name="VaultName" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.vaultName"></a>

```go
func VaultName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ManagedKeysPkcsList <a name="ManagedKeysPkcsList" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/managedkeys"

managedkeys.NewManagedKeysPkcsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ManagedKeysPkcsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.get"></a>

```go
func Get(index *f64) ManagedKeysPkcsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ManagedKeysPkcsOutputReference <a name="ManagedKeysPkcsOutputReference" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/managedkeys"

managedkeys.NewManagedKeysPkcsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ManagedKeysPkcsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAllowGenerateKey">ResetAllowGenerateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAllowReplaceKey">ResetAllowReplaceKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAllowStoreKey">ResetAllowStoreKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAnyMount">ResetAnyMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetCurve">ResetCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetForceRwSession">ResetForceRwSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetKeyBits">ResetKeyBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetSlot">ResetSlot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetTokenLabel">ResetTokenLabel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowGenerateKey` <a name="ResetAllowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAllowGenerateKey"></a>

```go
func ResetAllowGenerateKey()
```

##### `ResetAllowReplaceKey` <a name="ResetAllowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAllowReplaceKey"></a>

```go
func ResetAllowReplaceKey()
```

##### `ResetAllowStoreKey` <a name="ResetAllowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAllowStoreKey"></a>

```go
func ResetAllowStoreKey()
```

##### `ResetAnyMount` <a name="ResetAnyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAnyMount"></a>

```go
func ResetAnyMount()
```

##### `ResetCurve` <a name="ResetCurve" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetCurve"></a>

```go
func ResetCurve()
```

##### `ResetForceRwSession` <a name="ResetForceRwSession" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetForceRwSession"></a>

```go
func ResetForceRwSession()
```

##### `ResetKeyBits` <a name="ResetKeyBits" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetKeyBits"></a>

```go
func ResetKeyBits()
```

##### `ResetSlot` <a name="ResetSlot" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetSlot"></a>

```go
func ResetSlot()
```

##### `ResetTokenLabel` <a name="ResetTokenLabel" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetTokenLabel"></a>

```go
func ResetTokenLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowGenerateKeyInput">AllowGenerateKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowReplaceKeyInput">AllowReplaceKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowStoreKeyInput">AllowStoreKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.anyMountInput">AnyMountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.curveInput">CurveInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.forceRwSessionInput">ForceRwSessionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyBitsInput">KeyBitsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyIdInput">KeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyLabelInput">KeyLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.libraryInput">LibraryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.mechanismInput">MechanismInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.pinInput">PinInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.slotInput">SlotInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.tokenLabelInput">TokenLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowGenerateKey">AllowGenerateKey</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowReplaceKey">AllowReplaceKey</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowStoreKey">AllowStoreKey</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.anyMount">AnyMount</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.curve">Curve</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.forceRwSession">ForceRwSession</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyBits">KeyBits</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyLabel">KeyLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.library">Library</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.mechanism">Mechanism</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.pin">Pin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.slot">Slot</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.tokenLabel">TokenLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `AllowGenerateKeyInput`<sup>Optional</sup> <a name="AllowGenerateKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowGenerateKeyInput"></a>

```go
func AllowGenerateKeyInput() interface{}
```

- *Type:* interface{}

---

##### `AllowReplaceKeyInput`<sup>Optional</sup> <a name="AllowReplaceKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowReplaceKeyInput"></a>

```go
func AllowReplaceKeyInput() interface{}
```

- *Type:* interface{}

---

##### `AllowStoreKeyInput`<sup>Optional</sup> <a name="AllowStoreKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowStoreKeyInput"></a>

```go
func AllowStoreKeyInput() interface{}
```

- *Type:* interface{}

---

##### `AnyMountInput`<sup>Optional</sup> <a name="AnyMountInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.anyMountInput"></a>

```go
func AnyMountInput() interface{}
```

- *Type:* interface{}

---

##### `CurveInput`<sup>Optional</sup> <a name="CurveInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.curveInput"></a>

```go
func CurveInput() *string
```

- *Type:* *string

---

##### `ForceRwSessionInput`<sup>Optional</sup> <a name="ForceRwSessionInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.forceRwSessionInput"></a>

```go
func ForceRwSessionInput() *string
```

- *Type:* *string

---

##### `KeyBitsInput`<sup>Optional</sup> <a name="KeyBitsInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyBitsInput"></a>

```go
func KeyBitsInput() *string
```

- *Type:* *string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyIdInput"></a>

```go
func KeyIdInput() *string
```

- *Type:* *string

---

##### `KeyLabelInput`<sup>Optional</sup> <a name="KeyLabelInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyLabelInput"></a>

```go
func KeyLabelInput() *string
```

- *Type:* *string

---

##### `LibraryInput`<sup>Optional</sup> <a name="LibraryInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.libraryInput"></a>

```go
func LibraryInput() *string
```

- *Type:* *string

---

##### `MechanismInput`<sup>Optional</sup> <a name="MechanismInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.mechanismInput"></a>

```go
func MechanismInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PinInput`<sup>Optional</sup> <a name="PinInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.pinInput"></a>

```go
func PinInput() *string
```

- *Type:* *string

---

##### `SlotInput`<sup>Optional</sup> <a name="SlotInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.slotInput"></a>

```go
func SlotInput() *string
```

- *Type:* *string

---

##### `TokenLabelInput`<sup>Optional</sup> <a name="TokenLabelInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.tokenLabelInput"></a>

```go
func TokenLabelInput() *string
```

- *Type:* *string

---

##### `AllowGenerateKey`<sup>Required</sup> <a name="AllowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowGenerateKey"></a>

```go
func AllowGenerateKey() interface{}
```

- *Type:* interface{}

---

##### `AllowReplaceKey`<sup>Required</sup> <a name="AllowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowReplaceKey"></a>

```go
func AllowReplaceKey() interface{}
```

- *Type:* interface{}

---

##### `AllowStoreKey`<sup>Required</sup> <a name="AllowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowStoreKey"></a>

```go
func AllowStoreKey() interface{}
```

- *Type:* interface{}

---

##### `AnyMount`<sup>Required</sup> <a name="AnyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.anyMount"></a>

```go
func AnyMount() interface{}
```

- *Type:* interface{}

---

##### `Curve`<sup>Required</sup> <a name="Curve" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.curve"></a>

```go
func Curve() *string
```

- *Type:* *string

---

##### `ForceRwSession`<sup>Required</sup> <a name="ForceRwSession" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.forceRwSession"></a>

```go
func ForceRwSession() *string
```

- *Type:* *string

---

##### `KeyBits`<sup>Required</sup> <a name="KeyBits" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyBits"></a>

```go
func KeyBits() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `KeyLabel`<sup>Required</sup> <a name="KeyLabel" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyLabel"></a>

```go
func KeyLabel() *string
```

- *Type:* *string

---

##### `Library`<sup>Required</sup> <a name="Library" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.library"></a>

```go
func Library() *string
```

- *Type:* *string

---

##### `Mechanism`<sup>Required</sup> <a name="Mechanism" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.mechanism"></a>

```go
func Mechanism() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Pin`<sup>Required</sup> <a name="Pin" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.pin"></a>

```go
func Pin() *string
```

- *Type:* *string

---

##### `Slot`<sup>Required</sup> <a name="Slot" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.slot"></a>

```go
func Slot() *string
```

- *Type:* *string

---

##### `TokenLabel`<sup>Required</sup> <a name="TokenLabel" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.tokenLabel"></a>

```go
func TokenLabel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



