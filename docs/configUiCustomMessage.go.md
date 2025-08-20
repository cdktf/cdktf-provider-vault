# `configUiCustomMessage` Submodule <a name="`configUiCustomMessage` Submodule" id="@cdktf/provider-vault.configUiCustomMessage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigUiCustomMessage <a name="ConfigUiCustomMessage" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/config_ui_custom_message vault_config_ui_custom_message}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/configuicustommessage"

configuicustommessage.NewConfigUiCustomMessage(scope Construct, id *string, config ConfigUiCustomMessageConfig) ConfigUiCustomMessage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig">ConfigUiCustomMessageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig">ConfigUiCustomMessageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.putLink">PutLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetAuthenticated">ResetAuthenticated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetLink">ResetLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLink` <a name="PutLink" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.putLink"></a>

```go
func PutLink(value ConfigUiCustomMessageLink)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.putLink.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a>

---

##### `ResetAuthenticated` <a name="ResetAuthenticated" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetAuthenticated"></a>

```go
func ResetAuthenticated()
```

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetEndTime"></a>

```go
func ResetEndTime()
```

##### `ResetLink` <a name="ResetLink" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetLink"></a>

```go
func ResetLink()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetOptions"></a>

```go
func ResetOptions()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ConfigUiCustomMessage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/configuicustommessage"

configuicustommessage.ConfigUiCustomMessage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/configuicustommessage"

configuicustommessage.ConfigUiCustomMessage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/configuicustommessage"

configuicustommessage.ConfigUiCustomMessage_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/configuicustommessage"

configuicustommessage.ConfigUiCustomMessage_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ConfigUiCustomMessage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ConfigUiCustomMessage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ConfigUiCustomMessage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/config_ui_custom_message#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ConfigUiCustomMessage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.link">Link</a></code> | <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference">ConfigUiCustomMessageLinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.authenticatedInput">AuthenticatedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.linkInput">LinkInput</a></code> | <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.messageBase64Input">MessageBase64Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.optionsInput">OptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.authenticated">Authenticated</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.messageBase64">MessageBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.options">Options</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.link"></a>

```go
func Link() ConfigUiCustomMessageLinkOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference">ConfigUiCustomMessageLinkOutputReference</a>

---

##### `AuthenticatedInput`<sup>Optional</sup> <a name="AuthenticatedInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.authenticatedInput"></a>

```go
func AuthenticatedInput() interface{}
```

- *Type:* interface{}

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `LinkInput`<sup>Optional</sup> <a name="LinkInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.linkInput"></a>

```go
func LinkInput() ConfigUiCustomMessageLink
```

- *Type:* <a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a>

---

##### `MessageBase64Input`<sup>Optional</sup> <a name="MessageBase64Input" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.messageBase64Input"></a>

```go
func MessageBase64Input() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.optionsInput"></a>

```go
func OptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Authenticated`<sup>Required</sup> <a name="Authenticated" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.authenticated"></a>

```go
func Authenticated() interface{}
```

- *Type:* interface{}

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `MessageBase64`<sup>Required</sup> <a name="MessageBase64" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.messageBase64"></a>

```go
func MessageBase64() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.options"></a>

```go
func Options() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigUiCustomMessageConfig <a name="ConfigUiCustomMessageConfig" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/configuicustommessage"

&configuicustommessage.ConfigUiCustomMessageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	MessageBase64: *string,
	StartTime: *string,
	Title: *string,
	Authenticated: interface{},
	EndTime: *string,
	Link: github.com/cdktf/cdktf-provider-vault-go/vault/v15.configUiCustomMessage.ConfigUiCustomMessageLink,
	Namespace: *string,
	Options: *map[string]*string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.messageBase64">MessageBase64</a></code> | <code>*string</code> | The base64-encoded content of the custom message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.startTime">StartTime</a></code> | <code>*string</code> | The starting time of the active period of the custom message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.title">Title</a></code> | <code>*string</code> | The title of the custom message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.authenticated">Authenticated</a></code> | <code>interface{}</code> | A flag indicating whether the custom message is displayed pre-login (false) or post-login (true). |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.endTime">EndTime</a></code> | <code>*string</code> | The ending time of the active period of the custom message. Can be omitted for non-expiring message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.link">Link</a></code> | <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a></code> | link block. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.options">Options</a></code> | <code>*map[string]*string</code> | A map containing additional options for the custom message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.type">Type</a></code> | <code>*string</code> | The display type of custom message. Allowed values are banner and modal. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MessageBase64`<sup>Required</sup> <a name="MessageBase64" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.messageBase64"></a>

```go
MessageBase64 *string
```

- *Type:* *string

The base64-encoded content of the custom message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/config_ui_custom_message#message_base64 ConfigUiCustomMessage#message_base64}

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

The starting time of the active period of the custom message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/config_ui_custom_message#start_time ConfigUiCustomMessage#start_time}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.title"></a>

```go
Title *string
```

- *Type:* *string

The title of the custom message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/config_ui_custom_message#title ConfigUiCustomMessage#title}

---

##### `Authenticated`<sup>Optional</sup> <a name="Authenticated" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.authenticated"></a>

```go
Authenticated interface{}
```

- *Type:* interface{}

A flag indicating whether the custom message is displayed pre-login (false) or post-login (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/config_ui_custom_message#authenticated ConfigUiCustomMessage#authenticated}

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

The ending time of the active period of the custom message. Can be omitted for non-expiring message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/config_ui_custom_message#end_time ConfigUiCustomMessage#end_time}

---

##### `Link`<sup>Optional</sup> <a name="Link" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.link"></a>

```go
Link ConfigUiCustomMessageLink
```

- *Type:* <a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a>

link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/config_ui_custom_message#link ConfigUiCustomMessage#link}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/config_ui_custom_message#namespace ConfigUiCustomMessage#namespace}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.options"></a>

```go
Options *map[string]*string
```

- *Type:* *map[string]*string

A map containing additional options for the custom message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/config_ui_custom_message#options ConfigUiCustomMessage#options}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The display type of custom message. Allowed values are banner and modal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/config_ui_custom_message#type ConfigUiCustomMessage#type}

---

### ConfigUiCustomMessageLink <a name="ConfigUiCustomMessageLink" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/configuicustommessage"

&configuicustommessage.ConfigUiCustomMessageLink {
	Href: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink.property.href">Href</a></code> | <code>*string</code> | The URL of the hyperlink. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink.property.title">Title</a></code> | <code>*string</code> | The title of the hyperlink. |

---

##### `Href`<sup>Required</sup> <a name="Href" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink.property.href"></a>

```go
Href *string
```

- *Type:* *string

The URL of the hyperlink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/config_ui_custom_message#href ConfigUiCustomMessage#href}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink.property.title"></a>

```go
Title *string
```

- *Type:* *string

The title of the hyperlink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/config_ui_custom_message#title ConfigUiCustomMessage#title}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigUiCustomMessageLinkOutputReference <a name="ConfigUiCustomMessageLinkOutputReference" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/configuicustommessage"

configuicustommessage.NewConfigUiCustomMessageLinkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigUiCustomMessageLinkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.hrefInput">HrefInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.href">Href</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HrefInput`<sup>Optional</sup> <a name="HrefInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.hrefInput"></a>

```go
func HrefInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Href`<sup>Required</sup> <a name="Href" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.href"></a>

```go
func Href() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.internalValue"></a>

```go
func InternalValue() ConfigUiCustomMessageLink
```

- *Type:* <a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a>

---



