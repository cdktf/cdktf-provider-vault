# `dataVaultTransitSign` Submodule <a name="`dataVaultTransitSign` Submodule" id="@cdktf/provider-vault.dataVaultTransitSign"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransitSign <a name="DataVaultTransitSign" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_sign vault_transit_sign}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/datavaulttransitsign"

datavaulttransitsign.NewDataVaultTransitSign(scope Construct, id *string, config DataVaultTransitSignConfig) DataVaultTransitSign
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig">DataVaultTransitSignConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig">DataVaultTransitSignConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetBatchInput">ResetBatchInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetBatchResults">ResetBatchResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetContext">ResetContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetHashAlgorithm">ResetHashAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetInput">ResetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetKeyVersion">ResetKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetMarshalingAlgorithm">ResetMarshalingAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetPrehashed">ResetPrehashed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetReference">ResetReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetSaltLength">ResetSaltLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetSignature">ResetSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetSignatureAlgorithm">ResetSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetSignatureContext">ResetSignatureContext</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBatchInput` <a name="ResetBatchInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetBatchInput"></a>

```go
func ResetBatchInput()
```

##### `ResetBatchResults` <a name="ResetBatchResults" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetBatchResults"></a>

```go
func ResetBatchResults()
```

##### `ResetContext` <a name="ResetContext" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetContext"></a>

```go
func ResetContext()
```

##### `ResetHashAlgorithm` <a name="ResetHashAlgorithm" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetHashAlgorithm"></a>

```go
func ResetHashAlgorithm()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetId"></a>

```go
func ResetId()
```

##### `ResetInput` <a name="ResetInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetInput"></a>

```go
func ResetInput()
```

##### `ResetKeyVersion` <a name="ResetKeyVersion" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetKeyVersion"></a>

```go
func ResetKeyVersion()
```

##### `ResetMarshalingAlgorithm` <a name="ResetMarshalingAlgorithm" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetMarshalingAlgorithm"></a>

```go
func ResetMarshalingAlgorithm()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPrehashed` <a name="ResetPrehashed" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetPrehashed"></a>

```go
func ResetPrehashed()
```

##### `ResetReference` <a name="ResetReference" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetReference"></a>

```go
func ResetReference()
```

##### `ResetSaltLength` <a name="ResetSaltLength" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetSaltLength"></a>

```go
func ResetSaltLength()
```

##### `ResetSignature` <a name="ResetSignature" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetSignature"></a>

```go
func ResetSignature()
```

##### `ResetSignatureAlgorithm` <a name="ResetSignatureAlgorithm" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetSignatureAlgorithm"></a>

```go
func ResetSignatureAlgorithm()
```

##### `ResetSignatureContext` <a name="ResetSignatureContext" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetSignatureContext"></a>

```go
func ResetSignatureContext()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultTransitSign resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/datavaulttransitsign"

datavaulttransitsign.DataVaultTransitSign_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/datavaulttransitsign"

datavaulttransitsign.DataVaultTransitSign_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/datavaulttransitsign"

datavaulttransitsign.DataVaultTransitSign_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/datavaulttransitsign"

datavaulttransitsign.DataVaultTransitSign_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataVaultTransitSign resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataVaultTransitSign to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataVaultTransitSign that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_sign#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultTransitSign to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.batchInputInput">BatchInputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.batchResultsInput">BatchResultsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.contextInput">ContextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.hashAlgorithmInput">HashAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.inputInput">InputInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.keyVersionInput">KeyVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.marshalingAlgorithmInput">MarshalingAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.prehashedInput">PrehashedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.referenceInput">ReferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.saltLengthInput">SaltLengthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signatureAlgorithmInput">SignatureAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signatureContextInput">SignatureContextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signatureInput">SignatureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.batchInput">BatchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.batchResults">BatchResults</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.context">Context</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.hashAlgorithm">HashAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.input">Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.keyVersion">KeyVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.marshalingAlgorithm">MarshalingAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.prehashed">Prehashed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.reference">Reference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.saltLength">SaltLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signature">Signature</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signatureContext">SignatureContext</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `BatchInputInput`<sup>Optional</sup> <a name="BatchInputInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.batchInputInput"></a>

```go
func BatchInputInput() interface{}
```

- *Type:* interface{}

---

##### `BatchResultsInput`<sup>Optional</sup> <a name="BatchResultsInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.batchResultsInput"></a>

```go
func BatchResultsInput() interface{}
```

- *Type:* interface{}

---

##### `ContextInput`<sup>Optional</sup> <a name="ContextInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.contextInput"></a>

```go
func ContextInput() *string
```

- *Type:* *string

---

##### `HashAlgorithmInput`<sup>Optional</sup> <a name="HashAlgorithmInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.hashAlgorithmInput"></a>

```go
func HashAlgorithmInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.inputInput"></a>

```go
func InputInput() *string
```

- *Type:* *string

---

##### `KeyVersionInput`<sup>Optional</sup> <a name="KeyVersionInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.keyVersionInput"></a>

```go
func KeyVersionInput() *f64
```

- *Type:* *f64

---

##### `MarshalingAlgorithmInput`<sup>Optional</sup> <a name="MarshalingAlgorithmInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.marshalingAlgorithmInput"></a>

```go
func MarshalingAlgorithmInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PrehashedInput`<sup>Optional</sup> <a name="PrehashedInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.prehashedInput"></a>

```go
func PrehashedInput() interface{}
```

- *Type:* interface{}

---

##### `ReferenceInput`<sup>Optional</sup> <a name="ReferenceInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.referenceInput"></a>

```go
func ReferenceInput() *string
```

- *Type:* *string

---

##### `SaltLengthInput`<sup>Optional</sup> <a name="SaltLengthInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.saltLengthInput"></a>

```go
func SaltLengthInput() *string
```

- *Type:* *string

---

##### `SignatureAlgorithmInput`<sup>Optional</sup> <a name="SignatureAlgorithmInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signatureAlgorithmInput"></a>

```go
func SignatureAlgorithmInput() *string
```

- *Type:* *string

---

##### `SignatureContextInput`<sup>Optional</sup> <a name="SignatureContextInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signatureContextInput"></a>

```go
func SignatureContextInput() *string
```

- *Type:* *string

---

##### `SignatureInput`<sup>Optional</sup> <a name="SignatureInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signatureInput"></a>

```go
func SignatureInput() *string
```

- *Type:* *string

---

##### `BatchInput`<sup>Required</sup> <a name="BatchInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.batchInput"></a>

```go
func BatchInput() interface{}
```

- *Type:* interface{}

---

##### `BatchResults`<sup>Required</sup> <a name="BatchResults" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.batchResults"></a>

```go
func BatchResults() interface{}
```

- *Type:* interface{}

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.context"></a>

```go
func Context() *string
```

- *Type:* *string

---

##### `HashAlgorithm`<sup>Required</sup> <a name="HashAlgorithm" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.hashAlgorithm"></a>

```go
func HashAlgorithm() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.input"></a>

```go
func Input() *string
```

- *Type:* *string

---

##### `KeyVersion`<sup>Required</sup> <a name="KeyVersion" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.keyVersion"></a>

```go
func KeyVersion() *f64
```

- *Type:* *f64

---

##### `MarshalingAlgorithm`<sup>Required</sup> <a name="MarshalingAlgorithm" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.marshalingAlgorithm"></a>

```go
func MarshalingAlgorithm() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Prehashed`<sup>Required</sup> <a name="Prehashed" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.prehashed"></a>

```go
func Prehashed() interface{}
```

- *Type:* interface{}

---

##### `Reference`<sup>Required</sup> <a name="Reference" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.reference"></a>

```go
func Reference() *string
```

- *Type:* *string

---

##### `SaltLength`<sup>Required</sup> <a name="SaltLength" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.saltLength"></a>

```go
func SaltLength() *string
```

- *Type:* *string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signature"></a>

```go
func Signature() *string
```

- *Type:* *string

---

##### `SignatureAlgorithm`<sup>Required</sup> <a name="SignatureAlgorithm" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signatureAlgorithm"></a>

```go
func SignatureAlgorithm() *string
```

- *Type:* *string

---

##### `SignatureContext`<sup>Required</sup> <a name="SignatureContext" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signatureContext"></a>

```go
func SignatureContext() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransitSignConfig <a name="DataVaultTransitSignConfig" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/datavaulttransitsign"

&datavaulttransitsign.DataVaultTransitSignConfig {
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
	Context: *string,
	HashAlgorithm: *string,
	Id: *string,
	Input: *string,
	KeyVersion: *f64,
	MarshalingAlgorithm: *string,
	Namespace: *string,
	Prehashed: interface{},
	Reference: *string,
	SaltLength: *string,
	Signature: *string,
	SignatureAlgorithm: *string,
	SignatureContext: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.name">Name</a></code> | <code>*string</code> | Name of the signing key to use. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.path">Path</a></code> | <code>*string</code> | The Transit secret backend the key belongs to. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.batchInput">BatchInput</a></code> | <code>interface{}</code> | Specifies a list of items for processing. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.batchResults">BatchResults</a></code> | <code>interface{}</code> | The results returned from Vault if using batch_input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.context">Context</a></code> | <code>*string</code> | Base64 encoded context for key derivation. Required if key derivation is enabled; currently only available with ed25519 keys. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.hashAlgorithm">HashAlgorithm</a></code> | <code>*string</code> | Specifies the hash algorithm to use for supporting key types (notably, not including ed25519 which specifies its own hash algorithm). |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_sign#id DataVaultTransitSign#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.input">Input</a></code> | <code>*string</code> | Specifies the base64 encoded input data. One of input or batch_input must be supplied. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.keyVersion">KeyVersion</a></code> | <code>*f64</code> | The version of the key to use. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.marshalingAlgorithm">MarshalingAlgorithm</a></code> | <code>*string</code> | Specifies the way in which the signature should be marshaled. This currently only applies to ECDSA keys. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.prehashed">Prehashed</a></code> | <code>interface{}</code> | Set to true when the input is already hashed. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.reference">Reference</a></code> | <code>*string</code> | A user-supplied string that will be present in the reference field on the corresponding batch_results item in the response, to assist in understanding which result corresponds to a particular input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.saltLength">SaltLength</a></code> | <code>*string</code> | The salt length used to sign. This currently only applies to the RSA PSS signature scheme. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.signature">Signature</a></code> | <code>*string</code> | The signature returned from Vault if using input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>*string</code> | When using a RSA key, specifies the RSA signature algorithm to use for signing. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.signatureContext">SignatureContext</a></code> | <code>*string</code> | Base64 encoded context for Ed25519ctx and Ed25519ph signatures. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the signing key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_sign#name DataVaultTransitSign#name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

The Transit secret backend the key belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_sign#path DataVaultTransitSign#path}

---

##### `BatchInput`<sup>Optional</sup> <a name="BatchInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.batchInput"></a>

```go
BatchInput interface{}
```

- *Type:* interface{}

Specifies a list of items for processing.

When this parameter is set, any supplied 'input' or 'context' parameters will be ignored. Responses are returned in the 'batch_results' array component of the 'data' element of the response. Any batch output will preserve the order of the batch input. If the input data value of an item is invalid, the corresponding item in the 'batch_results' will have the key 'error' with a value describing the error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_sign#batch_input DataVaultTransitSign#batch_input}

---

##### `BatchResults`<sup>Optional</sup> <a name="BatchResults" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.batchResults"></a>

```go
BatchResults interface{}
```

- *Type:* interface{}

The results returned from Vault if using batch_input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_sign#batch_results DataVaultTransitSign#batch_results}

---

##### `Context`<sup>Optional</sup> <a name="Context" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.context"></a>

```go
Context *string
```

- *Type:* *string

Base64 encoded context for key derivation. Required if key derivation is enabled; currently only available with ed25519 keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_sign#context DataVaultTransitSign#context}

---

##### `HashAlgorithm`<sup>Optional</sup> <a name="HashAlgorithm" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.hashAlgorithm"></a>

```go
HashAlgorithm *string
```

- *Type:* *string

Specifies the hash algorithm to use for supporting key types (notably, not including ed25519 which specifies its own hash algorithm).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_sign#hash_algorithm DataVaultTransitSign#hash_algorithm}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_sign#id DataVaultTransitSign#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.input"></a>

```go
Input *string
```

- *Type:* *string

Specifies the base64 encoded input data. One of input or batch_input must be supplied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_sign#input DataVaultTransitSign#input}

---

##### `KeyVersion`<sup>Optional</sup> <a name="KeyVersion" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.keyVersion"></a>

```go
KeyVersion *f64
```

- *Type:* *f64

The version of the key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_sign#key_version DataVaultTransitSign#key_version}

---

##### `MarshalingAlgorithm`<sup>Optional</sup> <a name="MarshalingAlgorithm" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.marshalingAlgorithm"></a>

```go
MarshalingAlgorithm *string
```

- *Type:* *string

Specifies the way in which the signature should be marshaled. This currently only applies to ECDSA keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_sign#marshaling_algorithm DataVaultTransitSign#marshaling_algorithm}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_sign#namespace DataVaultTransitSign#namespace}

---

##### `Prehashed`<sup>Optional</sup> <a name="Prehashed" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.prehashed"></a>

```go
Prehashed interface{}
```

- *Type:* interface{}

Set to true when the input is already hashed.

If the key type is rsa-2048, rsa-3072 or rsa-4096, then the algorithm used to hash the input should be indicated by the hash_algorithm parameter. Just as the value to sign should be the base64-encoded representation of the exact binary data you want signed, when set, input is expected to be base64-encoded binary hashed data, not hex-formatted. (As an example, on the command line, you could generate a suitable input via openssl dgst -sha256 -binary | base64.)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_sign#prehashed DataVaultTransitSign#prehashed}

---

##### `Reference`<sup>Optional</sup> <a name="Reference" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.reference"></a>

```go
Reference *string
```

- *Type:* *string

A user-supplied string that will be present in the reference field on the corresponding batch_results item in the response, to assist in understanding which result corresponds to a particular input.

Only valid on batch requests when using ‘batch_input’ below.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_sign#reference DataVaultTransitSign#reference}

---

##### `SaltLength`<sup>Optional</sup> <a name="SaltLength" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.saltLength"></a>

```go
SaltLength *string
```

- *Type:* *string

The salt length used to sign. This currently only applies to the RSA PSS signature scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_sign#salt_length DataVaultTransitSign#salt_length}

---

##### `Signature`<sup>Optional</sup> <a name="Signature" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.signature"></a>

```go
Signature *string
```

- *Type:* *string

The signature returned from Vault if using input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_sign#signature DataVaultTransitSign#signature}

---

##### `SignatureAlgorithm`<sup>Optional</sup> <a name="SignatureAlgorithm" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.signatureAlgorithm"></a>

```go
SignatureAlgorithm *string
```

- *Type:* *string

When using a RSA key, specifies the RSA signature algorithm to use for signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_sign#signature_algorithm DataVaultTransitSign#signature_algorithm}

---

##### `SignatureContext`<sup>Optional</sup> <a name="SignatureContext" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.signatureContext"></a>

```go
SignatureContext *string
```

- *Type:* *string

Base64 encoded context for Ed25519ctx and Ed25519ph signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_sign#signature_context DataVaultTransitSign#signature_context}

---



