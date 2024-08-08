# `dataVaultTransformDecode` Submodule <a name="`dataVaultTransformDecode` Submodule" id="@cdktf/provider-vault.dataVaultTransformDecode"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransformDecode <a name="DataVaultTransformDecode" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_decode vault_transform_decode}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/datavaulttransformdecode"

datavaulttransformdecode.NewDataVaultTransformDecode(scope Construct, id *string, config DataVaultTransformDecodeConfig) DataVaultTransformDecode
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig">DataVaultTransformDecodeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig">DataVaultTransformDecodeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetBatchInput">ResetBatchInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetBatchResults">ResetBatchResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetDecodedValue">ResetDecodedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetTransformation">ResetTransformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetTweak">ResetTweak</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBatchInput` <a name="ResetBatchInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetBatchInput"></a>

```go
func ResetBatchInput()
```

##### `ResetBatchResults` <a name="ResetBatchResults" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetBatchResults"></a>

```go
func ResetBatchResults()
```

##### `ResetDecodedValue` <a name="ResetDecodedValue" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetDecodedValue"></a>

```go
func ResetDecodedValue()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetTransformation` <a name="ResetTransformation" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetTransformation"></a>

```go
func ResetTransformation()
```

##### `ResetTweak` <a name="ResetTweak" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetTweak"></a>

```go
func ResetTweak()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetValue"></a>

```go
func ResetValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultTransformDecode resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/datavaulttransformdecode"

datavaulttransformdecode.DataVaultTransformDecode_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/datavaulttransformdecode"

datavaulttransformdecode.DataVaultTransformDecode_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/datavaulttransformdecode"

datavaulttransformdecode.DataVaultTransformDecode_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/datavaulttransformdecode"

datavaulttransformdecode.DataVaultTransformDecode_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataVaultTransformDecode resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataVaultTransformDecode to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataVaultTransformDecode that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_decode#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultTransformDecode to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchInputInput">BatchInputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchResultsInput">BatchResultsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.decodedValueInput">DecodedValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.roleNameInput">RoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.transformationInput">TransformationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.tweakInput">TweakInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchInput">BatchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchResults">BatchResults</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.decodedValue">DecodedValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.roleName">RoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.transformation">Transformation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.tweak">Tweak</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.value">Value</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `BatchInputInput`<sup>Optional</sup> <a name="BatchInputInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchInputInput"></a>

```go
func BatchInputInput() interface{}
```

- *Type:* interface{}

---

##### `BatchResultsInput`<sup>Optional</sup> <a name="BatchResultsInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchResultsInput"></a>

```go
func BatchResultsInput() interface{}
```

- *Type:* interface{}

---

##### `DecodedValueInput`<sup>Optional</sup> <a name="DecodedValueInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.decodedValueInput"></a>

```go
func DecodedValueInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.roleNameInput"></a>

```go
func RoleNameInput() *string
```

- *Type:* *string

---

##### `TransformationInput`<sup>Optional</sup> <a name="TransformationInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.transformationInput"></a>

```go
func TransformationInput() *string
```

- *Type:* *string

---

##### `TweakInput`<sup>Optional</sup> <a name="TweakInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.tweakInput"></a>

```go
func TweakInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `BatchInput`<sup>Required</sup> <a name="BatchInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchInput"></a>

```go
func BatchInput() interface{}
```

- *Type:* interface{}

---

##### `BatchResults`<sup>Required</sup> <a name="BatchResults" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchResults"></a>

```go
func BatchResults() interface{}
```

- *Type:* interface{}

---

##### `DecodedValue`<sup>Required</sup> <a name="DecodedValue" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.decodedValue"></a>

```go
func DecodedValue() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.roleName"></a>

```go
func RoleName() *string
```

- *Type:* *string

---

##### `Transformation`<sup>Required</sup> <a name="Transformation" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.transformation"></a>

```go
func Transformation() *string
```

- *Type:* *string

---

##### `Tweak`<sup>Required</sup> <a name="Tweak" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.tweak"></a>

```go
func Tweak() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransformDecodeConfig <a name="DataVaultTransformDecodeConfig" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/datavaulttransformdecode"

&datavaulttransformdecode.DataVaultTransformDecodeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Path: *string,
	RoleName: *string,
	BatchInput: interface{},
	BatchResults: interface{},
	DecodedValue: *string,
	Id: *string,
	Namespace: *string,
	Transformation: *string,
	Tweak: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.path">Path</a></code> | <code>*string</code> | Path to backend from which to retrieve data. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.roleName">RoleName</a></code> | <code>*string</code> | The name of the role. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.batchInput">BatchInput</a></code> | <code>interface{}</code> | Specifies a list of items to be decoded in a single batch. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.batchResults">BatchResults</a></code> | <code>interface{}</code> | The result of decoding batch_input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.decodedValue">DecodedValue</a></code> | <code>*string</code> | The result of decoding a value. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_decode#id DataVaultTransformDecode#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.transformation">Transformation</a></code> | <code>*string</code> | The transformation to perform. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.tweak">Tweak</a></code> | <code>*string</code> | The tweak value to use. Only applicable for FPE transformations. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.value">Value</a></code> | <code>*string</code> | The value in which to decode. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path to backend from which to retrieve data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_decode#path DataVaultTransformDecode#path}

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.roleName"></a>

```go
RoleName *string
```

- *Type:* *string

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_decode#role_name DataVaultTransformDecode#role_name}

---

##### `BatchInput`<sup>Optional</sup> <a name="BatchInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.batchInput"></a>

```go
BatchInput interface{}
```

- *Type:* interface{}

Specifies a list of items to be decoded in a single batch.

If this parameter is set, the top-level parameters 'value', 'transformation' and 'tweak' will be ignored. Each batch item within the list can specify these parameters instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_decode#batch_input DataVaultTransformDecode#batch_input}

---

##### `BatchResults`<sup>Optional</sup> <a name="BatchResults" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.batchResults"></a>

```go
BatchResults interface{}
```

- *Type:* interface{}

The result of decoding batch_input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_decode#batch_results DataVaultTransformDecode#batch_results}

---

##### `DecodedValue`<sup>Optional</sup> <a name="DecodedValue" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.decodedValue"></a>

```go
DecodedValue *string
```

- *Type:* *string

The result of decoding a value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_decode#decoded_value DataVaultTransformDecode#decoded_value}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_decode#id DataVaultTransformDecode#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_decode#namespace DataVaultTransformDecode#namespace}

---

##### `Transformation`<sup>Optional</sup> <a name="Transformation" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.transformation"></a>

```go
Transformation *string
```

- *Type:* *string

The transformation to perform.

If no value is provided and the role contains a single transformation, this value will be inferred from the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_decode#transformation DataVaultTransformDecode#transformation}

---

##### `Tweak`<sup>Optional</sup> <a name="Tweak" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.tweak"></a>

```go
Tweak *string
```

- *Type:* *string

The tweak value to use. Only applicable for FPE transformations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_decode#tweak DataVaultTransformDecode#tweak}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value in which to decode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_decode#value DataVaultTransformDecode#value}

---



