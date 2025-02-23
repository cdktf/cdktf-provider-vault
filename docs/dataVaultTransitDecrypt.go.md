# `dataVaultTransitDecrypt` Submodule <a name="`dataVaultTransitDecrypt` Submodule" id="@cdktf/provider-vault.dataVaultTransitDecrypt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransitDecrypt <a name="DataVaultTransitDecrypt" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/data-sources/transit_decrypt vault_transit_decrypt}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/datavaulttransitdecrypt"

datavaulttransitdecrypt.NewDataVaultTransitDecrypt(scope Construct, id *string, config DataVaultTransitDecryptConfig) DataVaultTransitDecrypt
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig">DataVaultTransitDecryptConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig">DataVaultTransitDecryptConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.resetContext">ResetContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetContext` <a name="ResetContext" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.resetContext"></a>

```go
func ResetContext()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultTransitDecrypt resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/datavaulttransitdecrypt"

datavaulttransitdecrypt.DataVaultTransitDecrypt_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/datavaulttransitdecrypt"

datavaulttransitdecrypt.DataVaultTransitDecrypt_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/datavaulttransitdecrypt"

datavaulttransitdecrypt.DataVaultTransitDecrypt_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/datavaulttransitdecrypt"

datavaulttransitdecrypt.DataVaultTransitDecrypt_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataVaultTransitDecrypt resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataVaultTransitDecrypt to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataVaultTransitDecrypt that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/data-sources/transit_decrypt#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultTransitDecrypt to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.plaintext">Plaintext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.ciphertextInput">CiphertextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.contextInput">ContextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.ciphertext">Ciphertext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.context">Context</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.plaintext"></a>

```go
func Plaintext() *string
```

- *Type:* *string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `CiphertextInput`<sup>Optional</sup> <a name="CiphertextInput" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.ciphertextInput"></a>

```go
func CiphertextInput() *string
```

- *Type:* *string

---

##### `ContextInput`<sup>Optional</sup> <a name="ContextInput" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.contextInput"></a>

```go
func ContextInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `Ciphertext`<sup>Required</sup> <a name="Ciphertext" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.ciphertext"></a>

```go
func Ciphertext() *string
```

- *Type:* *string

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.context"></a>

```go
func Context() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransitDecryptConfig <a name="DataVaultTransitDecryptConfig" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/datavaulttransitdecrypt"

&datavaulttransitdecrypt.DataVaultTransitDecryptConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	Ciphertext: *string,
	Key: *string,
	Context: *string,
	Id: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.backend">Backend</a></code> | <code>*string</code> | The Transit secret backend the key belongs to. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.ciphertext">Ciphertext</a></code> | <code>*string</code> | Transit encrypted cipher text. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.key">Key</a></code> | <code>*string</code> | Name of the decryption key to use. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.context">Context</a></code> | <code>*string</code> | Specifies the context for key derivation. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/data-sources/transit_decrypt#id DataVaultTransitDecrypt#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

The Transit secret backend the key belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/data-sources/transit_decrypt#backend DataVaultTransitDecrypt#backend}

---

##### `Ciphertext`<sup>Required</sup> <a name="Ciphertext" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.ciphertext"></a>

```go
Ciphertext *string
```

- *Type:* *string

Transit encrypted cipher text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/data-sources/transit_decrypt#ciphertext DataVaultTransitDecrypt#ciphertext}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.key"></a>

```go
Key *string
```

- *Type:* *string

Name of the decryption key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/data-sources/transit_decrypt#key DataVaultTransitDecrypt#key}

---

##### `Context`<sup>Optional</sup> <a name="Context" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.context"></a>

```go
Context *string
```

- *Type:* *string

Specifies the context for key derivation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/data-sources/transit_decrypt#context DataVaultTransitDecrypt#context}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/data-sources/transit_decrypt#id DataVaultTransitDecrypt#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/data-sources/transit_decrypt#namespace DataVaultTransitDecrypt#namespace}

---



