# `transformTransformation` Submodule <a name="`transformTransformation` Submodule" id="@cdktf/provider-vault.transformTransformation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransformTransformation <a name="TransformTransformation" id="@cdktf/provider-vault.transformTransformation.TransformTransformation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/transform_transformation vault_transform_transformation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v14/transformtransformation"

transformtransformation.NewTransformTransformation(scope Construct, id *string, config TransformTransformationConfig) TransformTransformation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig">TransformTransformationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig">TransformTransformationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetDeletionAllowed">ResetDeletionAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetMaskingCharacter">ResetMaskingCharacter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetTemplate">ResetTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetTemplates">ResetTemplates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetTweakSource">ResetTweakSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetAllowedRoles"></a>

```go
func ResetAllowedRoles()
```

##### `ResetDeletionAllowed` <a name="ResetDeletionAllowed" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetDeletionAllowed"></a>

```go
func ResetDeletionAllowed()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetId"></a>

```go
func ResetId()
```

##### `ResetMaskingCharacter` <a name="ResetMaskingCharacter" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetMaskingCharacter"></a>

```go
func ResetMaskingCharacter()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetTemplate` <a name="ResetTemplate" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetTemplate"></a>

```go
func ResetTemplate()
```

##### `ResetTemplates` <a name="ResetTemplates" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetTemplates"></a>

```go
func ResetTemplates()
```

##### `ResetTweakSource` <a name="ResetTweakSource" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetTweakSource"></a>

```go
func ResetTweakSource()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TransformTransformation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v14/transformtransformation"

transformtransformation.TransformTransformation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v14/transformtransformation"

transformtransformation.TransformTransformation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v14/transformtransformation"

transformtransformation.TransformTransformation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v14/transformtransformation"

transformtransformation.TransformTransformation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a TransformTransformation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TransformTransformation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TransformTransformation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/transform_transformation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the TransformTransformation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.deletionAllowedInput">DeletionAllowedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.maskingCharacterInput">MaskingCharacterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.templateInput">TemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.templatesInput">TemplatesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.tweakSourceInput">TweakSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.deletionAllowed">DeletionAllowed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.maskingCharacter">MaskingCharacter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.template">Template</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.templates">Templates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.tweakSource">TweakSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.allowedRolesInput"></a>

```go
func AllowedRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeletionAllowedInput`<sup>Optional</sup> <a name="DeletionAllowedInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.deletionAllowedInput"></a>

```go
func DeletionAllowedInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaskingCharacterInput`<sup>Optional</sup> <a name="MaskingCharacterInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.maskingCharacterInput"></a>

```go
func MaskingCharacterInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.templateInput"></a>

```go
func TemplateInput() *string
```

- *Type:* *string

---

##### `TemplatesInput`<sup>Optional</sup> <a name="TemplatesInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.templatesInput"></a>

```go
func TemplatesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TweakSourceInput`<sup>Optional</sup> <a name="TweakSourceInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.tweakSourceInput"></a>

```go
func TweakSourceInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.allowedRoles"></a>

```go
func AllowedRoles() *[]*string
```

- *Type:* *[]*string

---

##### `DeletionAllowed`<sup>Required</sup> <a name="DeletionAllowed" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.deletionAllowed"></a>

```go
func DeletionAllowed() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaskingCharacter`<sup>Required</sup> <a name="MaskingCharacter" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.maskingCharacter"></a>

```go
func MaskingCharacter() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.template"></a>

```go
func Template() *string
```

- *Type:* *string

---

##### `Templates`<sup>Required</sup> <a name="Templates" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.templates"></a>

```go
func Templates() *[]*string
```

- *Type:* *[]*string

---

##### `TweakSource`<sup>Required</sup> <a name="TweakSource" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.tweakSource"></a>

```go
func TweakSource() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TransformTransformationConfig <a name="TransformTransformationConfig" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v14/transformtransformation"

&transformtransformation.TransformTransformationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Path: *string,
	AllowedRoles: *[]*string,
	DeletionAllowed: interface{},
	Id: *string,
	MaskingCharacter: *string,
	Namespace: *string,
	Template: *string,
	Templates: *[]*string,
	TweakSource: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.name">Name</a></code> | <code>*string</code> | The name of the transformation. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.path">Path</a></code> | <code>*string</code> | The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws". |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | The set of roles allowed to perform this transformation. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.deletionAllowed">DeletionAllowed</a></code> | <code>interface{}</code> | If true, this transform can be deleted. Otherwise deletion is blocked while this value remains false. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/transform_transformation#id TransformTransformation#id}. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.maskingCharacter">MaskingCharacter</a></code> | <code>*string</code> | The character used to replace data when in masking mode. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.template">Template</a></code> | <code>*string</code> | The name of the template to use. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.templates">Templates</a></code> | <code>*[]*string</code> | Templates configured for transformation. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.tweakSource">TweakSource</a></code> | <code>*string</code> | The source of where the tweak value comes from. Only valid when in FPE mode. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.type">Type</a></code> | <code>*string</code> | The type of transformation to perform. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/transform_transformation#name TransformTransformation#name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/transform_transformation#path TransformTransformation#path}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.allowedRoles"></a>

```go
AllowedRoles *[]*string
```

- *Type:* *[]*string

The set of roles allowed to perform this transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/transform_transformation#allowed_roles TransformTransformation#allowed_roles}

---

##### `DeletionAllowed`<sup>Optional</sup> <a name="DeletionAllowed" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.deletionAllowed"></a>

```go
DeletionAllowed interface{}
```

- *Type:* interface{}

If true, this transform can be deleted. Otherwise deletion is blocked while this value remains false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/transform_transformation#deletion_allowed TransformTransformation#deletion_allowed}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/transform_transformation#id TransformTransformation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaskingCharacter`<sup>Optional</sup> <a name="MaskingCharacter" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.maskingCharacter"></a>

```go
MaskingCharacter *string
```

- *Type:* *string

The character used to replace data when in masking mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/transform_transformation#masking_character TransformTransformation#masking_character}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/transform_transformation#namespace TransformTransformation#namespace}

---

##### `Template`<sup>Optional</sup> <a name="Template" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.template"></a>

```go
Template *string
```

- *Type:* *string

The name of the template to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/transform_transformation#template TransformTransformation#template}

---

##### `Templates`<sup>Optional</sup> <a name="Templates" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.templates"></a>

```go
Templates *[]*string
```

- *Type:* *[]*string

Templates configured for transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/transform_transformation#templates TransformTransformation#templates}

---

##### `TweakSource`<sup>Optional</sup> <a name="TweakSource" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.tweakSource"></a>

```go
TweakSource *string
```

- *Type:* *string

The source of where the tweak value comes from. Only valid when in FPE mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/transform_transformation#tweak_source TransformTransformation#tweak_source}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of transformation to perform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/transform_transformation#type TransformTransformation#type}

---



