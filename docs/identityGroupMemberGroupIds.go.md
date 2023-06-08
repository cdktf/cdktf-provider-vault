# `vault_identity_group_member_group_ids`

Refer to the Terraform Registory for docs: [`vault_identity_group_member_group_ids`](https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group_member_group_ids).

# `identityGroupMemberGroupIds` Submodule <a name="`identityGroupMemberGroupIds` Submodule" id="@cdktf/provider-vault.identityGroupMemberGroupIds"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityGroupMemberGroupIds <a name="IdentityGroupMemberGroupIds" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group_member_group_ids vault_identity_group_member_group_ids}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v7/identitygroupmembergroupids"

identitygroupmembergroupids.NewIdentityGroupMemberGroupIds(scope Construct, id *string, config IdentityGroupMemberGroupIdsConfig) IdentityGroupMemberGroupIds
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig">IdentityGroupMemberGroupIdsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig">IdentityGroupMemberGroupIdsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetExclusive">ResetExclusive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetMemberGroupIds">ResetMemberGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetExclusive` <a name="ResetExclusive" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetExclusive"></a>

```go
func ResetExclusive()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetId"></a>

```go
func ResetId()
```

##### `ResetMemberGroupIds` <a name="ResetMemberGroupIds" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetMemberGroupIds"></a>

```go
func ResetMemberGroupIds()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v7/identitygroupmembergroupids"

identitygroupmembergroupids.IdentityGroupMemberGroupIds_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v7/identitygroupmembergroupids"

identitygroupmembergroupids.IdentityGroupMemberGroupIds_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v7/identitygroupmembergroupids"

identitygroupmembergroupids.IdentityGroupMemberGroupIds_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.exclusiveInput">ExclusiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.groupIdInput">GroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.memberGroupIdsInput">MemberGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.exclusive">Exclusive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.memberGroupIds">MemberGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExclusiveInput`<sup>Optional</sup> <a name="ExclusiveInput" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.exclusiveInput"></a>

```go
func ExclusiveInput() interface{}
```

- *Type:* interface{}

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.groupIdInput"></a>

```go
func GroupIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MemberGroupIdsInput`<sup>Optional</sup> <a name="MemberGroupIdsInput" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.memberGroupIdsInput"></a>

```go
func MemberGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Exclusive`<sup>Required</sup> <a name="Exclusive" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.exclusive"></a>

```go
func Exclusive() interface{}
```

- *Type:* interface{}

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MemberGroupIds`<sup>Required</sup> <a name="MemberGroupIds" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.memberGroupIds"></a>

```go
func MemberGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityGroupMemberGroupIdsConfig <a name="IdentityGroupMemberGroupIdsConfig" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v7/identitygroupmembergroupids"

&identitygroupmembergroupids.IdentityGroupMemberGroupIdsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GroupId: *string,
	Exclusive: interface{},
	Id: *string,
	MemberGroupIds: *[]*string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.groupId">GroupId</a></code> | <code>*string</code> | ID of the group. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.exclusive">Exclusive</a></code> | <code>interface{}</code> | If set to true, allows the resource to manage member group ids exclusively. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group_member_group_ids#id IdentityGroupMemberGroupIds#id}. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.memberGroupIds">MemberGroupIds</a></code> | <code>*[]*string</code> | Group IDs to be assigned as group members. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.groupId"></a>

```go
GroupId *string
```

- *Type:* *string

ID of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group_member_group_ids#group_id IdentityGroupMemberGroupIds#group_id}

---

##### `Exclusive`<sup>Optional</sup> <a name="Exclusive" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.exclusive"></a>

```go
Exclusive interface{}
```

- *Type:* interface{}

If set to true, allows the resource to manage member group ids exclusively.

Beware of race conditions when disabling exclusive management

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group_member_group_ids#exclusive IdentityGroupMemberGroupIds#exclusive}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group_member_group_ids#id IdentityGroupMemberGroupIds#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MemberGroupIds`<sup>Optional</sup> <a name="MemberGroupIds" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.memberGroupIds"></a>

```go
MemberGroupIds *[]*string
```

- *Type:* *[]*string

Group IDs to be assigned as group members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group_member_group_ids#member_group_ids IdentityGroupMemberGroupIds#member_group_ids}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group_member_group_ids#namespace IdentityGroupMemberGroupIds#namespace}

---



