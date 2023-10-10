# `vault_identity_group_member_entity_ids`

Refer to the Terraform Registory for docs: [`vault_identity_group_member_entity_ids`](https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_group_member_entity_ids).

# `identityGroupMemberEntityIds` Submodule <a name="`identityGroupMemberEntityIds` Submodule" id="@cdktf/provider-vault.identityGroupMemberEntityIds"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityGroupMemberEntityIds <a name="IdentityGroupMemberEntityIds" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_group_member_entity_ids vault_identity_group_member_entity_ids}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/identitygroupmemberentityids"

identitygroupmemberentityids.NewIdentityGroupMemberEntityIds(scope Construct, id *string, config IdentityGroupMemberEntityIdsConfig) IdentityGroupMemberEntityIds
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig">IdentityGroupMemberEntityIdsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig">IdentityGroupMemberEntityIdsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetExclusive">ResetExclusive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetMemberEntityIds">ResetMemberEntityIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetExclusive` <a name="ResetExclusive" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetExclusive"></a>

```go
func ResetExclusive()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetId"></a>

```go
func ResetId()
```

##### `ResetMemberEntityIds` <a name="ResetMemberEntityIds" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetMemberEntityIds"></a>

```go
func ResetMemberEntityIds()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/identitygroupmemberentityids"

identitygroupmemberentityids.IdentityGroupMemberEntityIds_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/identitygroupmemberentityids"

identitygroupmemberentityids.IdentityGroupMemberEntityIds_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/identitygroupmemberentityids"

identitygroupmemberentityids.IdentityGroupMemberEntityIds_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.groupName">GroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.exclusiveInput">ExclusiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.groupIdInput">GroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.memberEntityIdsInput">MemberEntityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.exclusive">Exclusive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.memberEntityIds">MemberEntityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.groupName"></a>

```go
func GroupName() *string
```

- *Type:* *string

---

##### `ExclusiveInput`<sup>Optional</sup> <a name="ExclusiveInput" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.exclusiveInput"></a>

```go
func ExclusiveInput() interface{}
```

- *Type:* interface{}

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.groupIdInput"></a>

```go
func GroupIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MemberEntityIdsInput`<sup>Optional</sup> <a name="MemberEntityIdsInput" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.memberEntityIdsInput"></a>

```go
func MemberEntityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Exclusive`<sup>Required</sup> <a name="Exclusive" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.exclusive"></a>

```go
func Exclusive() interface{}
```

- *Type:* interface{}

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MemberEntityIds`<sup>Required</sup> <a name="MemberEntityIds" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.memberEntityIds"></a>

```go
func MemberEntityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityGroupMemberEntityIdsConfig <a name="IdentityGroupMemberEntityIdsConfig" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/identitygroupmemberentityids"

&identitygroupmemberentityids.IdentityGroupMemberEntityIdsConfig {
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
	MemberEntityIds: *[]*string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.groupId">GroupId</a></code> | <code>*string</code> | ID of the group. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.exclusive">Exclusive</a></code> | <code>interface{}</code> | If set to true, allows the resource to manage member entity ids exclusively. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_group_member_entity_ids#id IdentityGroupMemberEntityIds#id}. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.memberEntityIds">MemberEntityIds</a></code> | <code>*[]*string</code> | Entity IDs to be assigned as group members. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.groupId"></a>

```go
GroupId *string
```

- *Type:* *string

ID of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_group_member_entity_ids#group_id IdentityGroupMemberEntityIds#group_id}

---

##### `Exclusive`<sup>Optional</sup> <a name="Exclusive" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.exclusive"></a>

```go
Exclusive interface{}
```

- *Type:* interface{}

If set to true, allows the resource to manage member entity ids exclusively.

Beware of race conditions when disabling exclusive management

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_group_member_entity_ids#exclusive IdentityGroupMemberEntityIds#exclusive}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_group_member_entity_ids#id IdentityGroupMemberEntityIds#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MemberEntityIds`<sup>Optional</sup> <a name="MemberEntityIds" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.memberEntityIds"></a>

```go
MemberEntityIds *[]*string
```

- *Type:* *[]*string

Entity IDs to be assigned as group members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_group_member_entity_ids#member_entity_ids IdentityGroupMemberEntityIds#member_entity_ids}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_group_member_entity_ids#namespace IdentityGroupMemberEntityIds#namespace}

---



