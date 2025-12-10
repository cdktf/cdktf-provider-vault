# `dataVaultTransitCmac` Submodule <a name="`dataVaultTransitCmac` Submodule" id="@cdktf/provider-vault.dataVaultTransitCmac"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransitCmac <a name="DataVaultTransitCmac" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_cmac vault_transit_cmac}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaulttransitcmac"

datavaulttransitcmac.NewDataVaultTransitCmac(scope Construct, id *string, config DataVaultTransitCmacConfig) DataVaultTransitCmac
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig">DataVaultTransitCmacConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig">DataVaultTransitCmacConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetBatchInput">ResetBatchInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetBatchResults">ResetBatchResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetCmac">ResetCmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetInput">ResetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetKeyVersion">ResetKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetMacLength">ResetMacLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetUrlMacLength">ResetUrlMacLength</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBatchInput` <a name="ResetBatchInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetBatchInput"></a>

```go
func ResetBatchInput()
```

##### `ResetBatchResults` <a name="ResetBatchResults" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetBatchResults"></a>

```go
func ResetBatchResults()
```

##### `ResetCmac` <a name="ResetCmac" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetCmac"></a>

```go
func ResetCmac()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetId"></a>

```go
func ResetId()
```

##### `ResetInput` <a name="ResetInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetInput"></a>

```go
func ResetInput()
```

##### `ResetKeyVersion` <a name="ResetKeyVersion" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetKeyVersion"></a>

```go
func ResetKeyVersion()
```

##### `ResetMacLength` <a name="ResetMacLength" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetMacLength"></a>

```go
func ResetMacLength()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetUrlMacLength` <a name="ResetUrlMacLength" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetUrlMacLength"></a>

```go
func ResetUrlMacLength()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultTransitCmac resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaulttransitcmac"

datavaulttransitcmac.DataVaultTransitCmac_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaulttransitcmac"

datavaulttransitcmac.DataVaultTransitCmac_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaulttransitcmac"

datavaulttransitcmac.DataVaultTransitCmac_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaulttransitcmac"

datavaulttransitcmac.DataVaultTransitCmac_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataVaultTransitCmac resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataVaultTransitCmac to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataVaultTransitCmac that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_cmac#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultTransitCmac to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.batchInputInput">BatchInputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.batchResultsInput">BatchResultsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.cmacInput">CmacInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.inputInput">InputInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.keyVersionInput">KeyVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.macLengthInput">MacLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.urlMacLengthInput">UrlMacLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.batchInput">BatchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.batchResults">BatchResults</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.cmac">Cmac</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.input">Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.keyVersion">KeyVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.macLength">MacLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.urlMacLength">UrlMacLength</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `BatchInputInput`<sup>Optional</sup> <a name="BatchInputInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.batchInputInput"></a>

```go
func BatchInputInput() interface{}
```

- *Type:* interface{}

---

##### `BatchResultsInput`<sup>Optional</sup> <a name="BatchResultsInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.batchResultsInput"></a>

```go
func BatchResultsInput() interface{}
```

- *Type:* interface{}

---

##### `CmacInput`<sup>Optional</sup> <a name="CmacInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.cmacInput"></a>

```go
func CmacInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.inputInput"></a>

```go
func InputInput() *string
```

- *Type:* *string

---

##### `KeyVersionInput`<sup>Optional</sup> <a name="KeyVersionInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.keyVersionInput"></a>

```go
func KeyVersionInput() *f64
```

- *Type:* *f64

---

##### `MacLengthInput`<sup>Optional</sup> <a name="MacLengthInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.macLengthInput"></a>

```go
func MacLengthInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `UrlMacLengthInput`<sup>Optional</sup> <a name="UrlMacLengthInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.urlMacLengthInput"></a>

```go
func UrlMacLengthInput() *f64
```

- *Type:* *f64

---

##### `BatchInput`<sup>Required</sup> <a name="BatchInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.batchInput"></a>

```go
func BatchInput() interface{}
```

- *Type:* interface{}

---

##### `BatchResults`<sup>Required</sup> <a name="BatchResults" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.batchResults"></a>

```go
func BatchResults() interface{}
```

- *Type:* interface{}

---

##### `Cmac`<sup>Required</sup> <a name="Cmac" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.cmac"></a>

```go
func Cmac() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.input"></a>

```go
func Input() *string
```

- *Type:* *string

---

##### `KeyVersion`<sup>Required</sup> <a name="KeyVersion" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.keyVersion"></a>

```go
func KeyVersion() *f64
```

- *Type:* *f64

---

##### `MacLength`<sup>Required</sup> <a name="MacLength" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.macLength"></a>

```go
func MacLength() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `UrlMacLength`<sup>Required</sup> <a name="UrlMacLength" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.urlMacLength"></a>

```go
func UrlMacLength() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransitCmacConfig <a name="DataVaultTransitCmacConfig" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaulttransitcmac"

&datavaulttransitcmac.DataVaultTransitCmacConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Path: *string,
	BatchInput: interface{},
	BatchResults: interface{},
	Cmac: *string,
	Id: *string,
	Input: *string,
	KeyVersion: *f64,
	MacLength: *f64,
	Namespace: *string,
	UrlMacLength: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.name">Name</a></code> | <code>*string</code> | Name of the CMAC key to use. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.path">Path</a></code> | <code>*string</code> | The Transit secret backend the key belongs to. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.batchInput">BatchInput</a></code> | <code>interface{}</code> | Specifies a list of items for processing. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.batchResults">BatchResults</a></code> | <code>interface{}</code> | The results returned from Vault if using batch_input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.cmac">Cmac</a></code> | <code>*string</code> | The CMAC returned from Vault if using input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_cmac#id DataVaultTransitCmac#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.input">Input</a></code> | <code>*string</code> | Specifies the base64 encoded input data. One of input or batch_input must be supplied. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.keyVersion">KeyVersion</a></code> | <code>*f64</code> | The version of the key to use. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.macLength">MacLength</a></code> | <code>*f64</code> | Specifies the MAC length to use (POST body parameter). The mac_length cannot be larger than the cipher's block size. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.urlMacLength">UrlMacLength</a></code> | <code>*f64</code> | Specifies the MAC length to use (URL parameter). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the CMAC key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_cmac#name DataVaultTransitCmac#name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

The Transit secret backend the key belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_cmac#path DataVaultTransitCmac#path}

---

##### `BatchInput`<sup>Optional</sup> <a name="BatchInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.batchInput"></a>

```go
BatchInput interface{}
```

- *Type:* interface{}

Specifies a list of items for processing.

When this parameter is set, any supplied 'input' or 'context' parameters will be ignored. Responses are returned in the 'batch_results' array component of the 'data' element of the response. Any batch output will preserve the order of the batch input. If the input data value of an item is invalid, the corresponding item in the 'batch_results' will have the key 'error' with a value describing the error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_cmac#batch_input DataVaultTransitCmac#batch_input}

---

##### `BatchResults`<sup>Optional</sup> <a name="BatchResults" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.batchResults"></a>

```go
BatchResults interface{}
```

- *Type:* interface{}

The results returned from Vault if using batch_input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_cmac#batch_results DataVaultTransitCmac#batch_results}

---

##### `Cmac`<sup>Optional</sup> <a name="Cmac" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.cmac"></a>

```go
Cmac *string
```

- *Type:* *string

The CMAC returned from Vault if using input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_cmac#cmac DataVaultTransitCmac#cmac}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_cmac#id DataVaultTransitCmac#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.input"></a>

```go
Input *string
```

- *Type:* *string

Specifies the base64 encoded input data. One of input or batch_input must be supplied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_cmac#input DataVaultTransitCmac#input}

---

##### `KeyVersion`<sup>Optional</sup> <a name="KeyVersion" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.keyVersion"></a>

```go
KeyVersion *f64
```

- *Type:* *f64

The version of the key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_cmac#key_version DataVaultTransitCmac#key_version}

---

##### `MacLength`<sup>Optional</sup> <a name="MacLength" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.macLength"></a>

```go
MacLength *f64
```

- *Type:* *f64

Specifies the MAC length to use (POST body parameter). The mac_length cannot be larger than the cipher's block size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_cmac#mac_length DataVaultTransitCmac#mac_length}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_cmac#namespace DataVaultTransitCmac#namespace}

---

##### `UrlMacLength`<sup>Optional</sup> <a name="UrlMacLength" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.urlMacLength"></a>

```go
UrlMacLength *f64
```

- *Type:* *f64

Specifies the MAC length to use (URL parameter).

If provided, this value overrides mac_length. The url_mac_length cannot be larger than the cipher's block size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_cmac#url_mac_length DataVaultTransitCmac#url_mac_length}

---



