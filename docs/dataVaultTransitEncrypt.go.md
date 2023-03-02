# `dataVaultTransitEncrypt` Submodule <a name="`dataVaultTransitEncrypt` Submodule" id="@cdktf/provider-vault.dataVaultTransitEncrypt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransitEncrypt <a name="DataVaultTransitEncrypt" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/d/transit_encrypt vault_transit_encrypt}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v5/datavaulttransitencrypt"

datavaulttransitencrypt.NewDataVaultTransitEncrypt(scope Construct, id *string, config DataVaultTransitEncryptConfig) DataVaultTransitEncrypt
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig">DataVaultTransitEncryptConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig">DataVaultTransitEncryptConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetContext">ResetContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetKeyVersion">ResetKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetContext` <a name="ResetContext" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetContext"></a>

```go
func ResetContext()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetId"></a>

```go
func ResetId()
```

##### `ResetKeyVersion` <a name="ResetKeyVersion" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetKeyVersion"></a>

```go
func ResetKeyVersion()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v5/datavaulttransitencrypt"

datavaulttransitencrypt.DataVaultTransitEncrypt_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v5/datavaulttransitencrypt"

datavaulttransitencrypt.DataVaultTransitEncrypt_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v5/datavaulttransitencrypt"

datavaulttransitencrypt.DataVaultTransitEncrypt_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.ciphertext">Ciphertext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.contextInput">ContextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.keyVersionInput">KeyVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.plaintextInput">PlaintextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.context">Context</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.keyVersion">KeyVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.plaintext">Plaintext</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Ciphertext`<sup>Required</sup> <a name="Ciphertext" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.ciphertext"></a>

```go
func Ciphertext() *string
```

- *Type:* *string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `ContextInput`<sup>Optional</sup> <a name="ContextInput" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.contextInput"></a>

```go
func ContextInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `KeyVersionInput`<sup>Optional</sup> <a name="KeyVersionInput" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.keyVersionInput"></a>

```go
func KeyVersionInput() *f64
```

- *Type:* *f64

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.plaintextInput"></a>

```go
func PlaintextInput() *string
```

- *Type:* *string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.context"></a>

```go
func Context() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `KeyVersion`<sup>Required</sup> <a name="KeyVersion" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.keyVersion"></a>

```go
func KeyVersion() *f64
```

- *Type:* *f64

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.plaintext"></a>

```go
func Plaintext() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransitEncryptConfig <a name="DataVaultTransitEncryptConfig" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v5/datavaulttransitencrypt"

&datavaulttransitencrypt.DataVaultTransitEncryptConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	Key: *string,
	Plaintext: *string,
	Context: *string,
	Id: *string,
	KeyVersion: *f64,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.backend">Backend</a></code> | <code>*string</code> | The Transit secret backend the key belongs to. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.key">Key</a></code> | <code>*string</code> | Name of the encryption key to use. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.plaintext">Plaintext</a></code> | <code>*string</code> | Map of strings read from Vault. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.context">Context</a></code> | <code>*string</code> | Specifies the context for key derivation. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transit_encrypt#id DataVaultTransitEncrypt#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.keyVersion">KeyVersion</a></code> | <code>*f64</code> | The version of the key to use for encryption. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

The Transit secret backend the key belongs to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transit_encrypt#backend DataVaultTransitEncrypt#backend}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.key"></a>

```go
Key *string
```

- *Type:* *string

Name of the encryption key to use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transit_encrypt#key DataVaultTransitEncrypt#key}

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.plaintext"></a>

```go
Plaintext *string
```

- *Type:* *string

Map of strings read from Vault.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transit_encrypt#plaintext DataVaultTransitEncrypt#plaintext}

---

##### `Context`<sup>Optional</sup> <a name="Context" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.context"></a>

```go
Context *string
```

- *Type:* *string

Specifies the context for key derivation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transit_encrypt#context DataVaultTransitEncrypt#context}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transit_encrypt#id DataVaultTransitEncrypt#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyVersion`<sup>Optional</sup> <a name="KeyVersion" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.keyVersion"></a>

```go
KeyVersion *f64
```

- *Type:* *f64

The version of the key to use for encryption.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transit_encrypt#key_version DataVaultTransitEncrypt#key_version}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transit_encrypt#namespace DataVaultTransitEncrypt#namespace}

---



