# `dataVaultTransitVerify` Submodule <a name="`dataVaultTransitVerify` Submodule" id="@cdktf/provider-vault.dataVaultTransitVerify"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransitVerify <a name="DataVaultTransitVerify" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_verify vault_transit_verify}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaulttransitverify"

datavaulttransitverify.NewDataVaultTransitVerify(scope Construct, id *string, config DataVaultTransitVerifyConfig) DataVaultTransitVerify
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig">DataVaultTransitVerifyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig">DataVaultTransitVerifyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetBatchInput">ResetBatchInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetBatchResults">ResetBatchResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetCmac">ResetCmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetContext">ResetContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetHashAlgorithm">ResetHashAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetHmac">ResetHmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetInput">ResetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetMacLength">ResetMacLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetMarshalingAlgorithm">ResetMarshalingAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetPrehashed">ResetPrehashed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetReference">ResetReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSaltLength">ResetSaltLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSignature">ResetSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSignatureAlgorithm">ResetSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSignatureContext">ResetSignatureContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetValid">ResetValid</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBatchInput` <a name="ResetBatchInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetBatchInput"></a>

```go
func ResetBatchInput()
```

##### `ResetBatchResults` <a name="ResetBatchResults" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetBatchResults"></a>

```go
func ResetBatchResults()
```

##### `ResetCmac` <a name="ResetCmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetCmac"></a>

```go
func ResetCmac()
```

##### `ResetContext` <a name="ResetContext" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetContext"></a>

```go
func ResetContext()
```

##### `ResetHashAlgorithm` <a name="ResetHashAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetHashAlgorithm"></a>

```go
func ResetHashAlgorithm()
```

##### `ResetHmac` <a name="ResetHmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetHmac"></a>

```go
func ResetHmac()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetId"></a>

```go
func ResetId()
```

##### `ResetInput` <a name="ResetInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetInput"></a>

```go
func ResetInput()
```

##### `ResetMacLength` <a name="ResetMacLength" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetMacLength"></a>

```go
func ResetMacLength()
```

##### `ResetMarshalingAlgorithm` <a name="ResetMarshalingAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetMarshalingAlgorithm"></a>

```go
func ResetMarshalingAlgorithm()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPrehashed` <a name="ResetPrehashed" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetPrehashed"></a>

```go
func ResetPrehashed()
```

##### `ResetReference` <a name="ResetReference" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetReference"></a>

```go
func ResetReference()
```

##### `ResetSaltLength` <a name="ResetSaltLength" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSaltLength"></a>

```go
func ResetSaltLength()
```

##### `ResetSignature` <a name="ResetSignature" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSignature"></a>

```go
func ResetSignature()
```

##### `ResetSignatureAlgorithm` <a name="ResetSignatureAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSignatureAlgorithm"></a>

```go
func ResetSignatureAlgorithm()
```

##### `ResetSignatureContext` <a name="ResetSignatureContext" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSignatureContext"></a>

```go
func ResetSignatureContext()
```

##### `ResetValid` <a name="ResetValid" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetValid"></a>

```go
func ResetValid()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultTransitVerify resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaulttransitverify"

datavaulttransitverify.DataVaultTransitVerify_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaulttransitverify"

datavaulttransitverify.DataVaultTransitVerify_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaulttransitverify"

datavaulttransitverify.DataVaultTransitVerify_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaulttransitverify"

datavaulttransitverify.DataVaultTransitVerify_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataVaultTransitVerify resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataVaultTransitVerify to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataVaultTransitVerify that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_verify#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultTransitVerify to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchInputInput">BatchInputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchResultsInput">BatchResultsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.cmacInput">CmacInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.contextInput">ContextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hashAlgorithmInput">HashAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hmacInput">HmacInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.inputInput">InputInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.macLengthInput">MacLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.marshalingAlgorithmInput">MarshalingAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.prehashedInput">PrehashedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.referenceInput">ReferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.saltLengthInput">SaltLengthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureAlgorithmInput">SignatureAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureContextInput">SignatureContextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureInput">SignatureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.validInput">ValidInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchInput">BatchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchResults">BatchResults</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.cmac">Cmac</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.context">Context</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hashAlgorithm">HashAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hmac">Hmac</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.input">Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.macLength">MacLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.marshalingAlgorithm">MarshalingAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.prehashed">Prehashed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.reference">Reference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.saltLength">SaltLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signature">Signature</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureContext">SignatureContext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.valid">Valid</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `BatchInputInput`<sup>Optional</sup> <a name="BatchInputInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchInputInput"></a>

```go
func BatchInputInput() interface{}
```

- *Type:* interface{}

---

##### `BatchResultsInput`<sup>Optional</sup> <a name="BatchResultsInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchResultsInput"></a>

```go
func BatchResultsInput() interface{}
```

- *Type:* interface{}

---

##### `CmacInput`<sup>Optional</sup> <a name="CmacInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.cmacInput"></a>

```go
func CmacInput() *string
```

- *Type:* *string

---

##### `ContextInput`<sup>Optional</sup> <a name="ContextInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.contextInput"></a>

```go
func ContextInput() *string
```

- *Type:* *string

---

##### `HashAlgorithmInput`<sup>Optional</sup> <a name="HashAlgorithmInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hashAlgorithmInput"></a>

```go
func HashAlgorithmInput() *string
```

- *Type:* *string

---

##### `HmacInput`<sup>Optional</sup> <a name="HmacInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hmacInput"></a>

```go
func HmacInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.inputInput"></a>

```go
func InputInput() *string
```

- *Type:* *string

---

##### `MacLengthInput`<sup>Optional</sup> <a name="MacLengthInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.macLengthInput"></a>

```go
func MacLengthInput() *f64
```

- *Type:* *f64

---

##### `MarshalingAlgorithmInput`<sup>Optional</sup> <a name="MarshalingAlgorithmInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.marshalingAlgorithmInput"></a>

```go
func MarshalingAlgorithmInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PrehashedInput`<sup>Optional</sup> <a name="PrehashedInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.prehashedInput"></a>

```go
func PrehashedInput() interface{}
```

- *Type:* interface{}

---

##### `ReferenceInput`<sup>Optional</sup> <a name="ReferenceInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.referenceInput"></a>

```go
func ReferenceInput() *string
```

- *Type:* *string

---

##### `SaltLengthInput`<sup>Optional</sup> <a name="SaltLengthInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.saltLengthInput"></a>

```go
func SaltLengthInput() *string
```

- *Type:* *string

---

##### `SignatureAlgorithmInput`<sup>Optional</sup> <a name="SignatureAlgorithmInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureAlgorithmInput"></a>

```go
func SignatureAlgorithmInput() *string
```

- *Type:* *string

---

##### `SignatureContextInput`<sup>Optional</sup> <a name="SignatureContextInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureContextInput"></a>

```go
func SignatureContextInput() *string
```

- *Type:* *string

---

##### `SignatureInput`<sup>Optional</sup> <a name="SignatureInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureInput"></a>

```go
func SignatureInput() *string
```

- *Type:* *string

---

##### `ValidInput`<sup>Optional</sup> <a name="ValidInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.validInput"></a>

```go
func ValidInput() interface{}
```

- *Type:* interface{}

---

##### `BatchInput`<sup>Required</sup> <a name="BatchInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchInput"></a>

```go
func BatchInput() interface{}
```

- *Type:* interface{}

---

##### `BatchResults`<sup>Required</sup> <a name="BatchResults" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchResults"></a>

```go
func BatchResults() interface{}
```

- *Type:* interface{}

---

##### `Cmac`<sup>Required</sup> <a name="Cmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.cmac"></a>

```go
func Cmac() *string
```

- *Type:* *string

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.context"></a>

```go
func Context() *string
```

- *Type:* *string

---

##### `HashAlgorithm`<sup>Required</sup> <a name="HashAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hashAlgorithm"></a>

```go
func HashAlgorithm() *string
```

- *Type:* *string

---

##### `Hmac`<sup>Required</sup> <a name="Hmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hmac"></a>

```go
func Hmac() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.input"></a>

```go
func Input() *string
```

- *Type:* *string

---

##### `MacLength`<sup>Required</sup> <a name="MacLength" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.macLength"></a>

```go
func MacLength() *f64
```

- *Type:* *f64

---

##### `MarshalingAlgorithm`<sup>Required</sup> <a name="MarshalingAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.marshalingAlgorithm"></a>

```go
func MarshalingAlgorithm() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Prehashed`<sup>Required</sup> <a name="Prehashed" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.prehashed"></a>

```go
func Prehashed() interface{}
```

- *Type:* interface{}

---

##### `Reference`<sup>Required</sup> <a name="Reference" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.reference"></a>

```go
func Reference() *string
```

- *Type:* *string

---

##### `SaltLength`<sup>Required</sup> <a name="SaltLength" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.saltLength"></a>

```go
func SaltLength() *string
```

- *Type:* *string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signature"></a>

```go
func Signature() *string
```

- *Type:* *string

---

##### `SignatureAlgorithm`<sup>Required</sup> <a name="SignatureAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureAlgorithm"></a>

```go
func SignatureAlgorithm() *string
```

- *Type:* *string

---

##### `SignatureContext`<sup>Required</sup> <a name="SignatureContext" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureContext"></a>

```go
func SignatureContext() *string
```

- *Type:* *string

---

##### `Valid`<sup>Required</sup> <a name="Valid" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.valid"></a>

```go
func Valid() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransitVerifyConfig <a name="DataVaultTransitVerifyConfig" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaulttransitverify"

&datavaulttransitverify.DataVaultTransitVerifyConfig {
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
	Context: *string,
	HashAlgorithm: *string,
	Hmac: *string,
	Id: *string,
	Input: *string,
	MacLength: *f64,
	MarshalingAlgorithm: *string,
	Namespace: *string,
	Prehashed: interface{},
	Reference: *string,
	SaltLength: *string,
	Signature: *string,
	SignatureAlgorithm: *string,
	SignatureContext: *string,
	Valid: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the name of the encryption key that was used to generate the signature or HMAC. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.path">Path</a></code> | <code>*string</code> | The Transit secret backend the key belongs to. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.batchInput">BatchInput</a></code> | <code>interface{}</code> | Specifies a list of items for processing. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.batchResults">BatchResults</a></code> | <code>interface{}</code> | The results returned from Vault if using batch_input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.cmac">Cmac</a></code> | <code>*string</code> | (Enterprise only) Specifies the signature output from the /transit/cmac function. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.context">Context</a></code> | <code>*string</code> | Base64 encoded context for key derivation. Required if key derivation is enabled; currently only available with ed25519 keys. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.hashAlgorithm">HashAlgorithm</a></code> | <code>*string</code> | Specifies the hash algorithm to use. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.hmac">Hmac</a></code> | <code>*string</code> | Specifies the signature output from the /transit/hmac function. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_verify#id DataVaultTransitVerify#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.input">Input</a></code> | <code>*string</code> | Specifies the base64 encoded input data. One of input or batch_input must be supplied. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.macLength">MacLength</a></code> | <code>*f64</code> | Specifies the MAC length used to generate a CMAC. The mac_length cannot be larger than the cipher's block size. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.marshalingAlgorithm">MarshalingAlgorithm</a></code> | <code>*string</code> | Specifies the way in which the signature was originally marshaled. This currently only applies to ECDSA keys. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.prehashed">Prehashed</a></code> | <code>interface{}</code> | Set to true when the input is already hashed. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.reference">Reference</a></code> | <code>*string</code> | A user-supplied string that will be present in the reference field on the corresponding batch_results item in the response, to assist in understanding which result corresponds to a particular input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.saltLength">SaltLength</a></code> | <code>*string</code> | The salt length used to sign. This currently only applies to the RSA PSS signature scheme. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.signature">Signature</a></code> | <code>*string</code> | Specifies the signature output from the /transit/sign function. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>*string</code> | When using a RSA key, specifies the RSA signature algorithm to use for signature verification. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.signatureContext">SignatureContext</a></code> | <code>*string</code> | Base64 encoded context for Ed25519ctx and Ed25519ph signatures. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.valid">Valid</a></code> | <code>interface{}</code> | Indicates whether verification succeeded. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the name of the encryption key that was used to generate the signature or HMAC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_verify#name DataVaultTransitVerify#name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

The Transit secret backend the key belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_verify#path DataVaultTransitVerify#path}

---

##### `BatchInput`<sup>Optional</sup> <a name="BatchInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.batchInput"></a>

```go
BatchInput interface{}
```

- *Type:* interface{}

Specifies a list of items for processing.

When this parameter is set, any supplied 'input' or 'context' parameters will be ignored. Responses are returned in the 'batch_results' array component of the 'data' element of the response. Any batch output will preserve the order of the batch input. If the input data value of an item is invalid, the corresponding item in the 'batch_results' will have the key 'error' with a value describing the error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_verify#batch_input DataVaultTransitVerify#batch_input}

---

##### `BatchResults`<sup>Optional</sup> <a name="BatchResults" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.batchResults"></a>

```go
BatchResults interface{}
```

- *Type:* interface{}

The results returned from Vault if using batch_input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_verify#batch_results DataVaultTransitVerify#batch_results}

---

##### `Cmac`<sup>Optional</sup> <a name="Cmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.cmac"></a>

```go
Cmac *string
```

- *Type:* *string

(Enterprise only) Specifies the signature output from the /transit/cmac function.

One of the following arguments must be supplied signature, hmac or cmac.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_verify#cmac DataVaultTransitVerify#cmac}

---

##### `Context`<sup>Optional</sup> <a name="Context" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.context"></a>

```go
Context *string
```

- *Type:* *string

Base64 encoded context for key derivation. Required if key derivation is enabled; currently only available with ed25519 keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_verify#context DataVaultTransitVerify#context}

---

##### `HashAlgorithm`<sup>Optional</sup> <a name="HashAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.hashAlgorithm"></a>

```go
HashAlgorithm *string
```

- *Type:* *string

Specifies the hash algorithm to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_verify#hash_algorithm DataVaultTransitVerify#hash_algorithm}

---

##### `Hmac`<sup>Optional</sup> <a name="Hmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.hmac"></a>

```go
Hmac *string
```

- *Type:* *string

Specifies the signature output from the /transit/hmac function.

One of the following arguments must be supplied signature, hmac or cmac.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_verify#hmac DataVaultTransitVerify#hmac}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_verify#id DataVaultTransitVerify#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.input"></a>

```go
Input *string
```

- *Type:* *string

Specifies the base64 encoded input data. One of input or batch_input must be supplied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_verify#input DataVaultTransitVerify#input}

---

##### `MacLength`<sup>Optional</sup> <a name="MacLength" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.macLength"></a>

```go
MacLength *f64
```

- *Type:* *f64

Specifies the MAC length used to generate a CMAC. The mac_length cannot be larger than the cipher's block size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_verify#mac_length DataVaultTransitVerify#mac_length}

---

##### `MarshalingAlgorithm`<sup>Optional</sup> <a name="MarshalingAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.marshalingAlgorithm"></a>

```go
MarshalingAlgorithm *string
```

- *Type:* *string

Specifies the way in which the signature was originally marshaled. This currently only applies to ECDSA keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_verify#marshaling_algorithm DataVaultTransitVerify#marshaling_algorithm}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_verify#namespace DataVaultTransitVerify#namespace}

---

##### `Prehashed`<sup>Optional</sup> <a name="Prehashed" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.prehashed"></a>

```go
Prehashed interface{}
```

- *Type:* interface{}

Set to true when the input is already hashed.

If the key type is rsa-2048, rsa-3072 or rsa-4096, then the algorithm used to hash the input should be indicated by the hash_algorithm parameter. Just as the value to sign should be the base64-encoded representation of the exact binary data you want signed, when set, input is expected to be base64-encoded binary hashed data, not hex-formatted. (As an example, on the command line, you could generate a suitable input via openssl dgst -sha256 -binary | base64.)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_verify#prehashed DataVaultTransitVerify#prehashed}

---

##### `Reference`<sup>Optional</sup> <a name="Reference" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.reference"></a>

```go
Reference *string
```

- *Type:* *string

A user-supplied string that will be present in the reference field on the corresponding batch_results item in the response, to assist in understanding which result corresponds to a particular input.

Only valid on batch requests when using ‘batch_input’ below.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_verify#reference DataVaultTransitVerify#reference}

---

##### `SaltLength`<sup>Optional</sup> <a name="SaltLength" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.saltLength"></a>

```go
SaltLength *string
```

- *Type:* *string

The salt length used to sign. This currently only applies to the RSA PSS signature scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_verify#salt_length DataVaultTransitVerify#salt_length}

---

##### `Signature`<sup>Optional</sup> <a name="Signature" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.signature"></a>

```go
Signature *string
```

- *Type:* *string

Specifies the signature output from the /transit/sign function.

One of the following arguments must be supplied signature, hmac or cmac.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_verify#signature DataVaultTransitVerify#signature}

---

##### `SignatureAlgorithm`<sup>Optional</sup> <a name="SignatureAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.signatureAlgorithm"></a>

```go
SignatureAlgorithm *string
```

- *Type:* *string

When using a RSA key, specifies the RSA signature algorithm to use for signature verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_verify#signature_algorithm DataVaultTransitVerify#signature_algorithm}

---

##### `SignatureContext`<sup>Optional</sup> <a name="SignatureContext" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.signatureContext"></a>

```go
SignatureContext *string
```

- *Type:* *string

Base64 encoded context for Ed25519ctx and Ed25519ph signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_verify#signature_context DataVaultTransitVerify#signature_context}

---

##### `Valid`<sup>Optional</sup> <a name="Valid" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.valid"></a>

```go
Valid interface{}
```

- *Type:* interface{}

Indicates whether verification succeeded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_verify#valid DataVaultTransitVerify#valid}

---



