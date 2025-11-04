# `kvSecretV2` Submodule <a name="`kvSecretV2` Submodule" id="@cdktf/provider-vault.kvSecretV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KvSecretV2 <a name="KvSecretV2" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kv_secret_v2 vault_kv_secret_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/kvsecretv2"

kvsecretv2.NewKvSecretV2(scope Construct, id *string, config KvSecretV2Config) KvSecretV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config">KvSecretV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config">KvSecretV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.putCustomMetadata">PutCustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetCas">ResetCas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetCustomMetadata">ResetCustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetDataJson">ResetDataJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetDataJsonWo">ResetDataJsonWo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetDataJsonWoVersion">ResetDataJsonWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetDeleteAllVersions">ResetDeleteAllVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetDisableRead">ResetDisableRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetOptions">ResetOptions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomMetadata` <a name="PutCustomMetadata" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.putCustomMetadata"></a>

```go
func PutCustomMetadata(value KvSecretV2CustomMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.putCustomMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata">KvSecretV2CustomMetadata</a>

---

##### `ResetCas` <a name="ResetCas" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetCas"></a>

```go
func ResetCas()
```

##### `ResetCustomMetadata` <a name="ResetCustomMetadata" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetCustomMetadata"></a>

```go
func ResetCustomMetadata()
```

##### `ResetDataJson` <a name="ResetDataJson" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetDataJson"></a>

```go
func ResetDataJson()
```

##### `ResetDataJsonWo` <a name="ResetDataJsonWo" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetDataJsonWo"></a>

```go
func ResetDataJsonWo()
```

##### `ResetDataJsonWoVersion` <a name="ResetDataJsonWoVersion" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetDataJsonWoVersion"></a>

```go
func ResetDataJsonWoVersion()
```

##### `ResetDeleteAllVersions` <a name="ResetDeleteAllVersions" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetDeleteAllVersions"></a>

```go
func ResetDeleteAllVersions()
```

##### `ResetDisableRead` <a name="ResetDisableRead" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetDisableRead"></a>

```go
func ResetDisableRead()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetOptions"></a>

```go
func ResetOptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KvSecretV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/kvsecretv2"

kvsecretv2.KvSecretV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/kvsecretv2"

kvsecretv2.KvSecretV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/kvsecretv2"

kvsecretv2.KvSecretV2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/kvsecretv2"

kvsecretv2.KvSecretV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a KvSecretV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KvSecretV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KvSecretV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kv_secret_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the KvSecretV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.customMetadata">CustomMetadata</a></code> | <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference">KvSecretV2CustomMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.data">Data</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.metadata">Metadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.casInput">CasInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.customMetadataInput">CustomMetadataInput</a></code> | <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata">KvSecretV2CustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dataJsonInput">DataJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dataJsonWoInput">DataJsonWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dataJsonWoVersionInput">DataJsonWoVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.deleteAllVersionsInput">DeleteAllVersionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.disableReadInput">DisableReadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.optionsInput">OptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.cas">Cas</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dataJson">DataJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dataJsonWo">DataJsonWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dataJsonWoVersion">DataJsonWoVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.deleteAllVersions">DeleteAllVersions</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.disableRead">DisableRead</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.options">Options</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomMetadata`<sup>Required</sup> <a name="CustomMetadata" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.customMetadata"></a>

```go
func CustomMetadata() KvSecretV2CustomMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference">KvSecretV2CustomMetadataOutputReference</a>

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.data"></a>

```go
func Data() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.metadata"></a>

```go
func Metadata() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `CasInput`<sup>Optional</sup> <a name="CasInput" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.casInput"></a>

```go
func CasInput() *f64
```

- *Type:* *f64

---

##### `CustomMetadataInput`<sup>Optional</sup> <a name="CustomMetadataInput" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.customMetadataInput"></a>

```go
func CustomMetadataInput() KvSecretV2CustomMetadata
```

- *Type:* <a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata">KvSecretV2CustomMetadata</a>

---

##### `DataJsonInput`<sup>Optional</sup> <a name="DataJsonInput" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dataJsonInput"></a>

```go
func DataJsonInput() *string
```

- *Type:* *string

---

##### `DataJsonWoInput`<sup>Optional</sup> <a name="DataJsonWoInput" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dataJsonWoInput"></a>

```go
func DataJsonWoInput() *string
```

- *Type:* *string

---

##### `DataJsonWoVersionInput`<sup>Optional</sup> <a name="DataJsonWoVersionInput" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dataJsonWoVersionInput"></a>

```go
func DataJsonWoVersionInput() *f64
```

- *Type:* *f64

---

##### `DeleteAllVersionsInput`<sup>Optional</sup> <a name="DeleteAllVersionsInput" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.deleteAllVersionsInput"></a>

```go
func DeleteAllVersionsInput() interface{}
```

- *Type:* interface{}

---

##### `DisableReadInput`<sup>Optional</sup> <a name="DisableReadInput" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.disableReadInput"></a>

```go
func DisableReadInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.optionsInput"></a>

```go
func OptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Cas`<sup>Required</sup> <a name="Cas" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.cas"></a>

```go
func Cas() *f64
```

- *Type:* *f64

---

##### `DataJson`<sup>Required</sup> <a name="DataJson" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dataJson"></a>

```go
func DataJson() *string
```

- *Type:* *string

---

##### `DataJsonWo`<sup>Required</sup> <a name="DataJsonWo" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dataJsonWo"></a>

```go
func DataJsonWo() *string
```

- *Type:* *string

---

##### `DataJsonWoVersion`<sup>Required</sup> <a name="DataJsonWoVersion" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dataJsonWoVersion"></a>

```go
func DataJsonWoVersion() *f64
```

- *Type:* *f64

---

##### `DeleteAllVersions`<sup>Required</sup> <a name="DeleteAllVersions" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.deleteAllVersions"></a>

```go
func DeleteAllVersions() interface{}
```

- *Type:* interface{}

---

##### `DisableRead`<sup>Required</sup> <a name="DisableRead" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.disableRead"></a>

```go
func DisableRead() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.options"></a>

```go
func Options() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KvSecretV2Config <a name="KvSecretV2Config" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/kvsecretv2"

&kvsecretv2.KvSecretV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Mount: *string,
	Name: *string,
	Cas: *f64,
	CustomMetadata: github.com/cdktf/cdktf-provider-vault-go/vault/v15.kvSecretV2.KvSecretV2CustomMetadata,
	DataJson: *string,
	DataJsonWo: *string,
	DataJsonWoVersion: *f64,
	DeleteAllVersions: interface{},
	DisableRead: interface{},
	Id: *string,
	Namespace: *string,
	Options: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.mount">Mount</a></code> | <code>*string</code> | Path where KV-V2 engine is mounted. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.name">Name</a></code> | <code>*string</code> | Full name of the secret. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.cas">Cas</a></code> | <code>*f64</code> | This flag is required if cas_required is set to true on either the secret or the engine's config. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.customMetadata">CustomMetadata</a></code> | <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata">KvSecretV2CustomMetadata</a></code> | custom_metadata block. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.dataJson">DataJson</a></code> | <code>*string</code> | JSON-encoded secret data to write. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.dataJsonWo">DataJsonWo</a></code> | <code>*string</code> | Write-Only JSON-encoded secret data to write. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.dataJsonWoVersion">DataJsonWoVersion</a></code> | <code>*f64</code> | Version counter for write-only secret data. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.deleteAllVersions">DeleteAllVersions</a></code> | <code>interface{}</code> | If set to true, permanently deletes all versions for the specified key. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.disableRead">DisableRead</a></code> | <code>interface{}</code> | If set to true, disables reading secret from Vault; note: drift won't be detected. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kv_secret_v2#id KvSecretV2#id}. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.options">Options</a></code> | <code>*map[string]*string</code> | An object that holds option settings. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

Path where KV-V2 engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kv_secret_v2#mount KvSecretV2#mount}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Full name of the secret.

For a nested secret, the name is the nested path excluding the mount and data prefix. For example, for a secret at 'kvv2/data/foo/bar/baz', the name is 'foo/bar/baz'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kv_secret_v2#name KvSecretV2#name}

---

##### `Cas`<sup>Optional</sup> <a name="Cas" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.cas"></a>

```go
Cas *f64
```

- *Type:* *f64

This flag is required if cas_required is set to true on either the secret or the engine's config.

In order for a write to be successful, cas must be set to the current version of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kv_secret_v2#cas KvSecretV2#cas}

---

##### `CustomMetadata`<sup>Optional</sup> <a name="CustomMetadata" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.customMetadata"></a>

```go
CustomMetadata KvSecretV2CustomMetadata
```

- *Type:* <a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata">KvSecretV2CustomMetadata</a>

custom_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kv_secret_v2#custom_metadata KvSecretV2#custom_metadata}

---

##### `DataJson`<sup>Optional</sup> <a name="DataJson" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.dataJson"></a>

```go
DataJson *string
```

- *Type:* *string

JSON-encoded secret data to write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kv_secret_v2#data_json KvSecretV2#data_json}

---

##### `DataJsonWo`<sup>Optional</sup> <a name="DataJsonWo" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.dataJsonWo"></a>

```go
DataJsonWo *string
```

- *Type:* *string

Write-Only JSON-encoded secret data to write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kv_secret_v2#data_json_wo KvSecretV2#data_json_wo}

---

##### `DataJsonWoVersion`<sup>Optional</sup> <a name="DataJsonWoVersion" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.dataJsonWoVersion"></a>

```go
DataJsonWoVersion *f64
```

- *Type:* *f64

Version counter for write-only secret data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kv_secret_v2#data_json_wo_version KvSecretV2#data_json_wo_version}

---

##### `DeleteAllVersions`<sup>Optional</sup> <a name="DeleteAllVersions" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.deleteAllVersions"></a>

```go
DeleteAllVersions interface{}
```

- *Type:* interface{}

If set to true, permanently deletes all versions for the specified key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kv_secret_v2#delete_all_versions KvSecretV2#delete_all_versions}

---

##### `DisableRead`<sup>Optional</sup> <a name="DisableRead" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.disableRead"></a>

```go
DisableRead interface{}
```

- *Type:* interface{}

If set to true, disables reading secret from Vault; note: drift won't be detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kv_secret_v2#disable_read KvSecretV2#disable_read}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kv_secret_v2#id KvSecretV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kv_secret_v2#namespace KvSecretV2#namespace}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.options"></a>

```go
Options *map[string]*string
```

- *Type:* *map[string]*string

An object that holds option settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kv_secret_v2#options KvSecretV2#options}

---

### KvSecretV2CustomMetadata <a name="KvSecretV2CustomMetadata" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/kvsecretv2"

&kvsecretv2.KvSecretV2CustomMetadata {
	CasRequired: interface{},
	Data: *map[string]*string,
	DeleteVersionAfter: *f64,
	MaxVersions: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.property.casRequired">CasRequired</a></code> | <code>interface{}</code> | If true, all keys will require the cas parameter to be set on all write requests. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.property.data">Data</a></code> | <code>*map[string]*string</code> | A map of arbitrary string to string valued user-provided metadata meant to describe the secret. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.property.deleteVersionAfter">DeleteVersionAfter</a></code> | <code>*f64</code> | If set, specifies the length of time before a version is deleted. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.property.maxVersions">MaxVersions</a></code> | <code>*f64</code> | The number of versions to keep per key. |

---

##### `CasRequired`<sup>Optional</sup> <a name="CasRequired" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.property.casRequired"></a>

```go
CasRequired interface{}
```

- *Type:* interface{}

If true, all keys will require the cas parameter to be set on all write requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kv_secret_v2#cas_required KvSecretV2#cas_required}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.property.data"></a>

```go
Data *map[string]*string
```

- *Type:* *map[string]*string

A map of arbitrary string to string valued user-provided metadata meant to describe the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kv_secret_v2#data KvSecretV2#data}

---

##### `DeleteVersionAfter`<sup>Optional</sup> <a name="DeleteVersionAfter" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.property.deleteVersionAfter"></a>

```go
DeleteVersionAfter *f64
```

- *Type:* *f64

If set, specifies the length of time before a version is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kv_secret_v2#delete_version_after KvSecretV2#delete_version_after}

---

##### `MaxVersions`<sup>Optional</sup> <a name="MaxVersions" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.property.maxVersions"></a>

```go
MaxVersions *f64
```

- *Type:* *f64

The number of versions to keep per key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kv_secret_v2#max_versions KvSecretV2#max_versions}

---

## Classes <a name="Classes" id="Classes"></a>

### KvSecretV2CustomMetadataOutputReference <a name="KvSecretV2CustomMetadataOutputReference" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/kvsecretv2"

kvsecretv2.NewKvSecretV2CustomMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KvSecretV2CustomMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resetCasRequired">ResetCasRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resetDeleteVersionAfter">ResetDeleteVersionAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resetMaxVersions">ResetMaxVersions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCasRequired` <a name="ResetCasRequired" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resetCasRequired"></a>

```go
func ResetCasRequired()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resetData"></a>

```go
func ResetData()
```

##### `ResetDeleteVersionAfter` <a name="ResetDeleteVersionAfter" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resetDeleteVersionAfter"></a>

```go
func ResetDeleteVersionAfter()
```

##### `ResetMaxVersions` <a name="ResetMaxVersions" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resetMaxVersions"></a>

```go
func ResetMaxVersions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.casRequiredInput">CasRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.dataInput">DataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.deleteVersionAfterInput">DeleteVersionAfterInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.maxVersionsInput">MaxVersionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.casRequired">CasRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.data">Data</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.deleteVersionAfter">DeleteVersionAfter</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.maxVersions">MaxVersions</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata">KvSecretV2CustomMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CasRequiredInput`<sup>Optional</sup> <a name="CasRequiredInput" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.casRequiredInput"></a>

```go
func CasRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.dataInput"></a>

```go
func DataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeleteVersionAfterInput`<sup>Optional</sup> <a name="DeleteVersionAfterInput" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.deleteVersionAfterInput"></a>

```go
func DeleteVersionAfterInput() *f64
```

- *Type:* *f64

---

##### `MaxVersionsInput`<sup>Optional</sup> <a name="MaxVersionsInput" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.maxVersionsInput"></a>

```go
func MaxVersionsInput() *f64
```

- *Type:* *f64

---

##### `CasRequired`<sup>Required</sup> <a name="CasRequired" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.casRequired"></a>

```go
func CasRequired() interface{}
```

- *Type:* interface{}

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.data"></a>

```go
func Data() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeleteVersionAfter`<sup>Required</sup> <a name="DeleteVersionAfter" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.deleteVersionAfter"></a>

```go
func DeleteVersionAfter() *f64
```

- *Type:* *f64

---

##### `MaxVersions`<sup>Required</sup> <a name="MaxVersions" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.maxVersions"></a>

```go
func MaxVersions() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() KvSecretV2CustomMetadata
```

- *Type:* <a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata">KvSecretV2CustomMetadata</a>

---



