# `identityGroup` Submodule <a name="`identityGroup` Submodule" id="@cdktf/provider-vault.identityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityGroup <a name="IdentityGroup" id="@cdktf/provider-vault.identityGroup.IdentityGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/r/identity_group vault_identity_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/identitygroup"

identitygroup.NewIdentityGroup(scope Construct, id *string, config IdentityGroupConfig) IdentityGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig">IdentityGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig">IdentityGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetExternalMemberEntityIds">ResetExternalMemberEntityIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetExternalMemberGroupIds">ResetExternalMemberGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetExternalPolicies">ResetExternalPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetMemberEntityIds">ResetMemberEntityIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetMemberGroupIds">ResetMemberGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetPolicies">ResetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.identityGroup.IdentityGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.identityGroup.IdentityGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityGroup.IdentityGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityGroup.IdentityGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.identityGroup.IdentityGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.identityGroup.IdentityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.identityGroup.IdentityGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.identityGroup.IdentityGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetExternalMemberEntityIds` <a name="ResetExternalMemberEntityIds" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetExternalMemberEntityIds"></a>

```go
func ResetExternalMemberEntityIds()
```

##### `ResetExternalMemberGroupIds` <a name="ResetExternalMemberGroupIds" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetExternalMemberGroupIds"></a>

```go
func ResetExternalMemberGroupIds()
```

##### `ResetExternalPolicies` <a name="ResetExternalPolicies" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetExternalPolicies"></a>

```go
func ResetExternalPolicies()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetMemberEntityIds` <a name="ResetMemberEntityIds" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetMemberEntityIds"></a>

```go
func ResetMemberEntityIds()
```

##### `ResetMemberGroupIds` <a name="ResetMemberGroupIds" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetMemberGroupIds"></a>

```go
func ResetMemberGroupIds()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetName"></a>

```go
func ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPolicies` <a name="ResetPolicies" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetPolicies"></a>

```go
func ResetPolicies()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.identityGroup.IdentityGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/identitygroup"

identitygroup.IdentityGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityGroup.IdentityGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.identityGroup.IdentityGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/identitygroup"

identitygroup.IdentityGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityGroup.IdentityGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.identityGroup.IdentityGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/identitygroup"

identitygroup.IdentityGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityGroup.IdentityGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalMemberEntityIdsInput">ExternalMemberEntityIdsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalMemberGroupIdsInput">ExternalMemberGroupIdsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalPoliciesInput">ExternalPoliciesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.memberEntityIdsInput">MemberEntityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.memberGroupIdsInput">MemberGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.policiesInput">PoliciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalMemberEntityIds">ExternalMemberEntityIds</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalMemberGroupIds">ExternalMemberGroupIds</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalPolicies">ExternalPolicies</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.memberEntityIds">MemberEntityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.memberGroupIds">MemberGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.policies">Policies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExternalMemberEntityIdsInput`<sup>Optional</sup> <a name="ExternalMemberEntityIdsInput" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalMemberEntityIdsInput"></a>

```go
func ExternalMemberEntityIdsInput() interface{}
```

- *Type:* interface{}

---

##### `ExternalMemberGroupIdsInput`<sup>Optional</sup> <a name="ExternalMemberGroupIdsInput" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalMemberGroupIdsInput"></a>

```go
func ExternalMemberGroupIdsInput() interface{}
```

- *Type:* interface{}

---

##### `ExternalPoliciesInput`<sup>Optional</sup> <a name="ExternalPoliciesInput" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalPoliciesInput"></a>

```go
func ExternalPoliciesInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MemberEntityIdsInput`<sup>Optional</sup> <a name="MemberEntityIdsInput" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.memberEntityIdsInput"></a>

```go
func MemberEntityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MemberGroupIdsInput`<sup>Optional</sup> <a name="MemberGroupIdsInput" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.memberGroupIdsInput"></a>

```go
func MemberGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.policiesInput"></a>

```go
func PoliciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ExternalMemberEntityIds`<sup>Required</sup> <a name="ExternalMemberEntityIds" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalMemberEntityIds"></a>

```go
func ExternalMemberEntityIds() interface{}
```

- *Type:* interface{}

---

##### `ExternalMemberGroupIds`<sup>Required</sup> <a name="ExternalMemberGroupIds" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalMemberGroupIds"></a>

```go
func ExternalMemberGroupIds() interface{}
```

- *Type:* interface{}

---

##### `ExternalPolicies`<sup>Required</sup> <a name="ExternalPolicies" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalPolicies"></a>

```go
func ExternalPolicies() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MemberEntityIds`<sup>Required</sup> <a name="MemberEntityIds" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.memberEntityIds"></a>

```go
func MemberEntityIds() *[]*string
```

- *Type:* *[]*string

---

##### `MemberGroupIds`<sup>Required</sup> <a name="MemberGroupIds" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.memberGroupIds"></a>

```go
func MemberGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.policies"></a>

```go
func Policies() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityGroupConfig <a name="IdentityGroupConfig" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/identitygroup"

&identitygroup.IdentityGroupConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ExternalMemberEntityIds: interface{},
	ExternalMemberGroupIds: interface{},
	ExternalPolicies: interface{},
	Id: *string,
	MemberEntityIds: *[]*string,
	MemberGroupIds: *[]*string,
	Metadata: *map[string]*string,
	Name: *string,
	Namespace: *string,
	Policies: *[]*string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.externalMemberEntityIds">ExternalMemberEntityIds</a></code> | <code>interface{}</code> | Manage member entities externally through `vault_identity_group_member_entity_ids`. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.externalMemberGroupIds">ExternalMemberGroupIds</a></code> | <code>interface{}</code> | Manage member groups externally through `vault_identity_group_member_group_ids`. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.externalPolicies">ExternalPolicies</a></code> | <code>interface{}</code> | Manage policies externally through `vault_identity_group_policies`, allows using group ID in assigned policies. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group#id IdentityGroup#id}. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.memberEntityIds">MemberEntityIds</a></code> | <code>*[]*string</code> | Entity IDs to be assigned as group members. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.memberGroupIds">MemberGroupIds</a></code> | <code>*[]*string</code> | Group IDs to be assigned as group members. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | Metadata to be associated with the group. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.name">Name</a></code> | <code>*string</code> | Name of the group. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.policies">Policies</a></code> | <code>*[]*string</code> | Policies to be tied to the group. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.type">Type</a></code> | <code>*string</code> | Type of the group, internal or external. Defaults to internal. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExternalMemberEntityIds`<sup>Optional</sup> <a name="ExternalMemberEntityIds" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.externalMemberEntityIds"></a>

```go
ExternalMemberEntityIds interface{}
```

- *Type:* interface{}

Manage member entities externally through `vault_identity_group_member_entity_ids`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group#external_member_entity_ids IdentityGroup#external_member_entity_ids}

---

##### `ExternalMemberGroupIds`<sup>Optional</sup> <a name="ExternalMemberGroupIds" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.externalMemberGroupIds"></a>

```go
ExternalMemberGroupIds interface{}
```

- *Type:* interface{}

Manage member groups externally through `vault_identity_group_member_group_ids`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group#external_member_group_ids IdentityGroup#external_member_group_ids}

---

##### `ExternalPolicies`<sup>Optional</sup> <a name="ExternalPolicies" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.externalPolicies"></a>

```go
ExternalPolicies interface{}
```

- *Type:* interface{}

Manage policies externally through `vault_identity_group_policies`, allows using group ID in assigned policies.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group#external_policies IdentityGroup#external_policies}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group#id IdentityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MemberEntityIds`<sup>Optional</sup> <a name="MemberEntityIds" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.memberEntityIds"></a>

```go
MemberEntityIds *[]*string
```

- *Type:* *[]*string

Entity IDs to be assigned as group members.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group#member_entity_ids IdentityGroup#member_entity_ids}

---

##### `MemberGroupIds`<sup>Optional</sup> <a name="MemberGroupIds" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.memberGroupIds"></a>

```go
MemberGroupIds *[]*string
```

- *Type:* *[]*string

Group IDs to be assigned as group members.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group#member_group_ids IdentityGroup#member_group_ids}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

Metadata to be associated with the group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group#metadata IdentityGroup#metadata}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group#name IdentityGroup#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group#namespace IdentityGroup#namespace}

---

##### `Policies`<sup>Optional</sup> <a name="Policies" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.policies"></a>

```go
Policies *[]*string
```

- *Type:* *[]*string

Policies to be tied to the group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group#policies IdentityGroup#policies}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of the group, internal or external. Defaults to internal.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group#type IdentityGroup#type}

---



