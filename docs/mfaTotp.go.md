# `mfaTotp` Submodule <a name="`mfaTotp` Submodule" id="@cdktf/provider-vault.mfaTotp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MfaTotp <a name="MfaTotp" id="@cdktf/provider-vault.mfaTotp.MfaTotp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mfa_totp vault_mfa_totp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/mfatotp"

mfatotp.NewMfaTotp(scope Construct, id *string, config MfaTotpConfig) MfaTotp
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig">MfaTotpConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig">MfaTotpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.resetDigits">ResetDigits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.resetKeySize">ResetKeySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.resetQrSize">ResetQrSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.resetSkew">ResetSkew</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.mfaTotp.MfaTotp.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.mfaTotp.MfaTotp.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.mfaTotp.MfaTotp.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.mfaTotp.MfaTotp.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.mfaTotp.MfaTotp.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.mfaTotp.MfaTotp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.mfaTotp.MfaTotp.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.mfaTotp.MfaTotp.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.mfaTotp.MfaTotp.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.mfaTotp.MfaTotp.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.mfaTotp.MfaTotp.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.mfaTotp.MfaTotp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.mfaTotp.MfaTotp.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.mfaTotp.MfaTotp.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mfaTotp.MfaTotp.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mfaTotp.MfaTotp.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.mfaTotp.MfaTotp.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mfaTotp.MfaTotp.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.mfaTotp.MfaTotp.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.mfaTotp.MfaTotp.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.mfaTotp.MfaTotp.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.mfaTotp.MfaTotp.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mfaTotp.MfaTotp.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktf/provider-vault.mfaTotp.MfaTotp.resetAlgorithm"></a>

```go
func ResetAlgorithm()
```

##### `ResetDigits` <a name="ResetDigits" id="@cdktf/provider-vault.mfaTotp.MfaTotp.resetDigits"></a>

```go
func ResetDigits()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.mfaTotp.MfaTotp.resetId"></a>

```go
func ResetId()
```

##### `ResetKeySize` <a name="ResetKeySize" id="@cdktf/provider-vault.mfaTotp.MfaTotp.resetKeySize"></a>

```go
func ResetKeySize()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.mfaTotp.MfaTotp.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktf/provider-vault.mfaTotp.MfaTotp.resetPeriod"></a>

```go
func ResetPeriod()
```

##### `ResetQrSize` <a name="ResetQrSize" id="@cdktf/provider-vault.mfaTotp.MfaTotp.resetQrSize"></a>

```go
func ResetQrSize()
```

##### `ResetSkew` <a name="ResetSkew" id="@cdktf/provider-vault.mfaTotp.MfaTotp.resetSkew"></a>

```go
func ResetSkew()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MfaTotp resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.mfaTotp.MfaTotp.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/mfatotp"

mfatotp.MfaTotp_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mfaTotp.MfaTotp.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.mfaTotp.MfaTotp.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/mfatotp"

mfatotp.MfaTotp_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mfaTotp.MfaTotp.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.mfaTotp.MfaTotp.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/mfatotp"

mfatotp.MfaTotp_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mfaTotp.MfaTotp.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.mfaTotp.MfaTotp.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/mfatotp"

mfatotp.MfaTotp_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MfaTotp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.mfaTotp.MfaTotp.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.mfaTotp.MfaTotp.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MfaTotp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.mfaTotp.MfaTotp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MfaTotp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mfa_totp#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mfaTotp.MfaTotp.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MfaTotp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.algorithmInput">AlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.digitsInput">DigitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.keySizeInput">KeySizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.periodInput">PeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.qrSizeInput">QrSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.skewInput">SkewInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.digits">Digits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.keySize">KeySize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.period">Period</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.qrSize">QrSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.skew">Skew</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.algorithmInput"></a>

```go
func AlgorithmInput() *string
```

- *Type:* *string

---

##### `DigitsInput`<sup>Optional</sup> <a name="DigitsInput" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.digitsInput"></a>

```go
func DigitsInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `KeySizeInput`<sup>Optional</sup> <a name="KeySizeInput" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.keySizeInput"></a>

```go
func KeySizeInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.periodInput"></a>

```go
func PeriodInput() *f64
```

- *Type:* *f64

---

##### `QrSizeInput`<sup>Optional</sup> <a name="QrSizeInput" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.qrSizeInput"></a>

```go
func QrSizeInput() *f64
```

- *Type:* *f64

---

##### `SkewInput`<sup>Optional</sup> <a name="SkewInput" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.skewInput"></a>

```go
func SkewInput() *f64
```

- *Type:* *f64

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `Digits`<sup>Required</sup> <a name="Digits" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.digits"></a>

```go
func Digits() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `KeySize`<sup>Required</sup> <a name="KeySize" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.keySize"></a>

```go
func KeySize() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.period"></a>

```go
func Period() *f64
```

- *Type:* *f64

---

##### `QrSize`<sup>Required</sup> <a name="QrSize" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.qrSize"></a>

```go
func QrSize() *f64
```

- *Type:* *f64

---

##### `Skew`<sup>Required</sup> <a name="Skew" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.skew"></a>

```go
func Skew() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MfaTotpConfig <a name="MfaTotpConfig" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/mfatotp"

&mfatotp.MfaTotpConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Issuer: *string,
	Name: *string,
	Algorithm: *string,
	Digits: *f64,
	Id: *string,
	KeySize: *f64,
	Namespace: *string,
	Period: *f64,
	QrSize: *f64,
	Skew: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.issuer">Issuer</a></code> | <code>*string</code> | The name of the key's issuing organization. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.name">Name</a></code> | <code>*string</code> | Name of the MFA method. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.algorithm">Algorithm</a></code> | <code>*string</code> | Specifies the hashing algorithm used to generate the TOTP code. Options include 'SHA1', 'SHA256' and 'SHA512'. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.digits">Digits</a></code> | <code>*f64</code> | The number of digits in the generated TOTP token. This value can either be 6 or 8. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.id">Id</a></code> | <code>*string</code> | ID computed by Vault. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.keySize">KeySize</a></code> | <code>*f64</code> | Specifies the size in bytes of the generated key. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.period">Period</a></code> | <code>*f64</code> | The length of time used to generate a counter for the TOTP token calculation. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.qrSize">QrSize</a></code> | <code>*f64</code> | The pixel size of the generated square QR code. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.skew">Skew</a></code> | <code>*f64</code> | The number of delay periods that are allowed when validating a TOTP token. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

The name of the key's issuing organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mfa_totp#issuer MfaTotp#issuer}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the MFA method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mfa_totp#name MfaTotp#name}

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.algorithm"></a>

```go
Algorithm *string
```

- *Type:* *string

Specifies the hashing algorithm used to generate the TOTP code. Options include 'SHA1', 'SHA256' and 'SHA512'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mfa_totp#algorithm MfaTotp#algorithm}

---

##### `Digits`<sup>Optional</sup> <a name="Digits" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.digits"></a>

```go
Digits *f64
```

- *Type:* *f64

The number of digits in the generated TOTP token. This value can either be 6 or 8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mfa_totp#digits MfaTotp#digits}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

ID computed by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mfa_totp#id MfaTotp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeySize`<sup>Optional</sup> <a name="KeySize" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.keySize"></a>

```go
KeySize *f64
```

- *Type:* *f64

Specifies the size in bytes of the generated key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mfa_totp#key_size MfaTotp#key_size}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mfa_totp#namespace MfaTotp#namespace}

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.period"></a>

```go
Period *f64
```

- *Type:* *f64

The length of time used to generate a counter for the TOTP token calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mfa_totp#period MfaTotp#period}

---

##### `QrSize`<sup>Optional</sup> <a name="QrSize" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.qrSize"></a>

```go
QrSize *f64
```

- *Type:* *f64

The pixel size of the generated square QR code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mfa_totp#qr_size MfaTotp#qr_size}

---

##### `Skew`<sup>Optional</sup> <a name="Skew" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.skew"></a>

```go
Skew *f64
```

- *Type:* *f64

The number of delay periods that are allowed when validating a TOTP token.

This value can either be 0 or 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mfa_totp#skew MfaTotp#skew}

---



