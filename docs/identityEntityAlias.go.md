# `vault_identity_entity_alias`

Refer to the Terraform Registory for docs: [`vault_identity_entity_alias`](https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_entity_alias).

# `identityEntityAlias` Submodule <a name="`identityEntityAlias` Submodule" id="@cdktf/provider-vault.identityEntityAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityEntityAlias <a name="IdentityEntityAlias" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_entity_alias vault_identity_entity_alias}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/identityentityalias"

identityentityalias.NewIdentityEntityAlias(scope Construct, id *string, config IdentityEntityAliasConfig) IdentityEntityAlias
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAliasConfig">IdentityEntityAliasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAliasConfig">IdentityEntityAliasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.resetCustomMetadata">ResetCustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCustomMetadata` <a name="ResetCustomMetadata" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.resetCustomMetadata"></a>

```go
func ResetCustomMetadata()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/identityentityalias"

identityentityalias.IdentityEntityAlias_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/identityentityalias"

identityentityalias.IdentityEntityAlias_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/identityentityalias"

identityentityalias.IdentityEntityAlias_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.canonicalIdInput">CanonicalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.customMetadataInput">CustomMetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.mountAccessorInput">MountAccessorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.canonicalId">CanonicalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.customMetadata">CustomMetadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.mountAccessor">MountAccessor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CanonicalIdInput`<sup>Optional</sup> <a name="CanonicalIdInput" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.canonicalIdInput"></a>

```go
func CanonicalIdInput() *string
```

- *Type:* *string

---

##### `CustomMetadataInput`<sup>Optional</sup> <a name="CustomMetadataInput" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.customMetadataInput"></a>

```go
func CustomMetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MountAccessorInput`<sup>Optional</sup> <a name="MountAccessorInput" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.mountAccessorInput"></a>

```go
func MountAccessorInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `CanonicalId`<sup>Required</sup> <a name="CanonicalId" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.canonicalId"></a>

```go
func CanonicalId() *string
```

- *Type:* *string

---

##### `CustomMetadata`<sup>Required</sup> <a name="CustomMetadata" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.customMetadata"></a>

```go
func CustomMetadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MountAccessor`<sup>Required</sup> <a name="MountAccessor" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.mountAccessor"></a>

```go
func MountAccessor() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAlias.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityEntityAliasConfig <a name="IdentityEntityAliasConfig" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAliasConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/identityentityalias"

&identityentityalias.IdentityEntityAliasConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CanonicalId: *string,
	MountAccessor: *string,
	Name: *string,
	CustomMetadata: *map[string]*string,
	Id: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAliasConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAliasConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAliasConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAliasConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAliasConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAliasConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAliasConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAliasConfig.property.canonicalId">CanonicalId</a></code> | <code>*string</code> | ID of the entity to which this is an alias. |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAliasConfig.property.mountAccessor">MountAccessor</a></code> | <code>*string</code> | Mount accessor to which this alias belongs toMount accessor to which this alias belongs to. |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAliasConfig.property.name">Name</a></code> | <code>*string</code> | Name of the entity alias. |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAliasConfig.property.customMetadata">CustomMetadata</a></code> | <code>*map[string]*string</code> | Custom metadata to be associated with this alias. |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAliasConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_entity_alias#id IdentityEntityAlias#id}. |
| <code><a href="#@cdktf/provider-vault.identityEntityAlias.IdentityEntityAliasConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAliasConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAliasConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAliasConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAliasConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAliasConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAliasConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAliasConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CanonicalId`<sup>Required</sup> <a name="CanonicalId" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAliasConfig.property.canonicalId"></a>

```go
CanonicalId *string
```

- *Type:* *string

ID of the entity to which this is an alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_entity_alias#canonical_id IdentityEntityAlias#canonical_id}

---

##### `MountAccessor`<sup>Required</sup> <a name="MountAccessor" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAliasConfig.property.mountAccessor"></a>

```go
MountAccessor *string
```

- *Type:* *string

Mount accessor to which this alias belongs toMount accessor to which this alias belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_entity_alias#mount_accessor IdentityEntityAlias#mount_accessor}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAliasConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the entity alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_entity_alias#name IdentityEntityAlias#name}

---

##### `CustomMetadata`<sup>Optional</sup> <a name="CustomMetadata" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAliasConfig.property.customMetadata"></a>

```go
CustomMetadata *map[string]*string
```

- *Type:* *map[string]*string

Custom metadata to be associated with this alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_entity_alias#custom_metadata IdentityEntityAlias#custom_metadata}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAliasConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_entity_alias#id IdentityEntityAlias#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.identityEntityAlias.IdentityEntityAliasConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_entity_alias#namespace IdentityEntityAlias#namespace}

---



