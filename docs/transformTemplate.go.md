# `vault_transform_template`

Refer to the Terraform Registory for docs: [`vault_transform_template`](https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/transform_template).

# `transformTemplate` Submodule <a name="`transformTemplate` Submodule" id="@cdktf/provider-vault.transformTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransformTemplate <a name="TransformTemplate" id="@cdktf/provider-vault.transformTemplate.TransformTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/transform_template vault_transform_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v9/transformtemplate"

transformtemplate.NewTransformTemplate(scope Construct, id *string, config TransformTemplateConfig) TransformTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig">TransformTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig">TransformTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.resetAlphabet">ResetAlphabet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.resetDecodeFormats">ResetDecodeFormats</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.resetEncodeFormat">ResetEncodeFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.resetPattern">ResetPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAlphabet` <a name="ResetAlphabet" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.resetAlphabet"></a>

```go
func ResetAlphabet()
```

##### `ResetDecodeFormats` <a name="ResetDecodeFormats" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.resetDecodeFormats"></a>

```go
func ResetDecodeFormats()
```

##### `ResetEncodeFormat` <a name="ResetEncodeFormat" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.resetEncodeFormat"></a>

```go
func ResetEncodeFormat()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPattern` <a name="ResetPattern" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.resetPattern"></a>

```go
func ResetPattern()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v9/transformtemplate"

transformtemplate.TransformTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v9/transformtemplate"

transformtemplate.TransformTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v9/transformtemplate"

transformtemplate.TransformTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.alphabetInput">AlphabetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.decodeFormatsInput">DecodeFormatsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.encodeFormatInput">EncodeFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.alphabet">Alphabet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.decodeFormats">DecodeFormats</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.encodeFormat">EncodeFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AlphabetInput`<sup>Optional</sup> <a name="AlphabetInput" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.alphabetInput"></a>

```go
func AlphabetInput() *string
```

- *Type:* *string

---

##### `DecodeFormatsInput`<sup>Optional</sup> <a name="DecodeFormatsInput" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.decodeFormatsInput"></a>

```go
func DecodeFormatsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EncodeFormatInput`<sup>Optional</sup> <a name="EncodeFormatInput" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.encodeFormatInput"></a>

```go
func EncodeFormatInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Alphabet`<sup>Required</sup> <a name="Alphabet" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.alphabet"></a>

```go
func Alphabet() *string
```

- *Type:* *string

---

##### `DecodeFormats`<sup>Required</sup> <a name="DecodeFormats" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.decodeFormats"></a>

```go
func DecodeFormats() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EncodeFormat`<sup>Required</sup> <a name="EncodeFormat" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.encodeFormat"></a>

```go
func EncodeFormat() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TransformTemplateConfig <a name="TransformTemplateConfig" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v9/transformtemplate"

&transformtemplate.TransformTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Path: *string,
	Alphabet: *string,
	DecodeFormats: *map[string]*string,
	EncodeFormat: *string,
	Id: *string,
	Namespace: *string,
	Pattern: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.name">Name</a></code> | <code>*string</code> | The name of the template. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.path">Path</a></code> | <code>*string</code> | The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws". |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.alphabet">Alphabet</a></code> | <code>*string</code> | The alphabet to use for this template. This is only used during FPE transformations. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.decodeFormats">DecodeFormats</a></code> | <code>*map[string]*string</code> | The map of regular expression templates used to customize decoded outputs. Only applicable to FPE transformations. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.encodeFormat">EncodeFormat</a></code> | <code>*string</code> | The regular expression template used for encoding values. Only applicable to FPE transformations. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/transform_template#id TransformTemplate#id}. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.pattern">Pattern</a></code> | <code>*string</code> | The pattern used for matching. Currently, only regular expression pattern is supported. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.type">Type</a></code> | <code>*string</code> | The pattern type to use for match detection. Currently, only regex is supported. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/transform_template#name TransformTemplate#name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/transform_template#path TransformTemplate#path}

---

##### `Alphabet`<sup>Optional</sup> <a name="Alphabet" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.alphabet"></a>

```go
Alphabet *string
```

- *Type:* *string

The alphabet to use for this template. This is only used during FPE transformations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/transform_template#alphabet TransformTemplate#alphabet}

---

##### `DecodeFormats`<sup>Optional</sup> <a name="DecodeFormats" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.decodeFormats"></a>

```go
DecodeFormats *map[string]*string
```

- *Type:* *map[string]*string

The map of regular expression templates used to customize decoded outputs. Only applicable to FPE transformations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/transform_template#decode_formats TransformTemplate#decode_formats}

---

##### `EncodeFormat`<sup>Optional</sup> <a name="EncodeFormat" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.encodeFormat"></a>

```go
EncodeFormat *string
```

- *Type:* *string

The regular expression template used for encoding values. Only applicable to FPE transformations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/transform_template#encode_format TransformTemplate#encode_format}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/transform_template#id TransformTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/transform_template#namespace TransformTemplate#namespace}

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

The pattern used for matching. Currently, only regular expression pattern is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/transform_template#pattern TransformTemplate#pattern}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The pattern type to use for match detection. Currently, only regex is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/transform_template#type TransformTemplate#type}

---



