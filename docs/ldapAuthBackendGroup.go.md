# `vault_ldap_auth_backend_group`

Refer to the Terraform Registory for docs: [`vault_ldap_auth_backend_group`](https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend_group).

# `ldapAuthBackendGroup` Submodule <a name="`ldapAuthBackendGroup` Submodule" id="@cdktf/provider-vault.ldapAuthBackendGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LdapAuthBackendGroup <a name="LdapAuthBackendGroup" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend_group vault_ldap_auth_backend_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/ldapauthbackendgroup"

ldapauthbackendgroup.NewLdapAuthBackendGroup(scope Construct, id *string, config LdapAuthBackendGroupConfig) LdapAuthBackendGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig">LdapAuthBackendGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig">LdapAuthBackendGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.resetPolicies">ResetPolicies</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.resetBackend"></a>

```go
func ResetBackend()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPolicies` <a name="ResetPolicies" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.resetPolicies"></a>

```go
func ResetPolicies()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/ldapauthbackendgroup"

ldapauthbackendgroup.LdapAuthBackendGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/ldapauthbackendgroup"

ldapauthbackendgroup.LdapAuthBackendGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/ldapauthbackendgroup"

ldapauthbackendgroup.LdapAuthBackendGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.groupnameInput">GroupnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.policiesInput">PoliciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.groupname">Groupname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.policies">Policies</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `GroupnameInput`<sup>Optional</sup> <a name="GroupnameInput" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.groupnameInput"></a>

```go
func GroupnameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.policiesInput"></a>

```go
func PoliciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `Groupname`<sup>Required</sup> <a name="Groupname" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.groupname"></a>

```go
func Groupname() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.policies"></a>

```go
func Policies() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LdapAuthBackendGroupConfig <a name="LdapAuthBackendGroupConfig" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/ldapauthbackendgroup"

&ldapauthbackendgroup.LdapAuthBackendGroupConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Groupname: *string,
	Backend: *string,
	Id: *string,
	Namespace: *string,
	Policies: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.groupname">Groupname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend_group#groupname LdapAuthBackendGroup#groupname}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.backend">Backend</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend_group#backend LdapAuthBackendGroup#backend}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend_group#id LdapAuthBackendGroup#id}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.policies">Policies</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend_group#policies LdapAuthBackendGroup#policies}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Groupname`<sup>Required</sup> <a name="Groupname" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.groupname"></a>

```go
Groupname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend_group#groupname LdapAuthBackendGroup#groupname}.

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend_group#backend LdapAuthBackendGroup#backend}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend_group#id LdapAuthBackendGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend_group#namespace LdapAuthBackendGroup#namespace}

---

##### `Policies`<sup>Optional</sup> <a name="Policies" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.policies"></a>

```go
Policies *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend_group#policies LdapAuthBackendGroup#policies}.

---



