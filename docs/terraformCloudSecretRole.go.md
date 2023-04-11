# `terraformCloudSecretRole` Submodule <a name="`terraformCloudSecretRole` Submodule" id="@cdktf/provider-vault.terraformCloudSecretRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TerraformCloudSecretRole <a name="TerraformCloudSecretRole" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/r/terraform_cloud_secret_role vault_terraform_cloud_secret_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/terraformcloudsecretrole"

terraformcloudsecretrole.NewTerraformCloudSecretRole(scope Construct, id *string, config TerraformCloudSecretRoleConfig) TerraformCloudSecretRole
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig">TerraformCloudSecretRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig">TerraformCloudSecretRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetMaxTtl">ResetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetTeamId">ResetTeamId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetBackend"></a>

```go
func ResetBackend()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetId"></a>

```go
func ResetId()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetMaxTtl"></a>

```go
func ResetMaxTtl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetOrganization"></a>

```go
func ResetOrganization()
```

##### `ResetTeamId` <a name="ResetTeamId" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetTeamId"></a>

```go
func ResetTeamId()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetTtl"></a>

```go
func ResetTtl()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetUserId"></a>

```go
func ResetUserId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/terraformcloudsecretrole"

terraformcloudsecretrole.TerraformCloudSecretRole_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/terraformcloudsecretrole"

terraformcloudsecretrole.TerraformCloudSecretRole_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/terraformcloudsecretrole"

terraformcloudsecretrole.TerraformCloudSecretRole_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.maxTtlInput">MaxTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.teamIdInput">TeamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.userIdInput">UserIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.maxTtl">MaxTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.teamId">TeamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.maxTtlInput"></a>

```go
func MaxTtlInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.teamIdInput"></a>

```go
func TeamIdInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.userIdInput"></a>

```go
func UserIdInput() *string
```

- *Type:* *string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.maxTtl"></a>

```go
func MaxTtl() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.teamId"></a>

```go
func TeamId() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TerraformCloudSecretRoleConfig <a name="TerraformCloudSecretRoleConfig" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/terraformcloudsecretrole"

&terraformcloudsecretrole.TerraformCloudSecretRoleConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Backend: *string,
	Id: *string,
	MaxTtl: *f64,
	Namespace: *string,
	Organization: *string,
	TeamId: *string,
	Ttl: *f64,
	UserId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.name">Name</a></code> | <code>*string</code> | The name of an existing role against which to create this Terraform Cloud credential. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.backend">Backend</a></code> | <code>*string</code> | The path of the Terraform Cloud Secret Backend the role belongs to. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/terraform_cloud_secret_role#id TerraformCloudSecretRole#id}. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.maxTtl">MaxTtl</a></code> | <code>*f64</code> | Maximum allowed lease for generated credentials. If not set or set to 0, will use system default. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.organization">Organization</a></code> | <code>*string</code> | Name of the Terraform Cloud or Enterprise organization. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.teamId">TeamId</a></code> | <code>*string</code> | ID of the Terraform Cloud or Enterprise team under organization (e.g., settings/teams/team-xxxxxxxxxxxxx). |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.ttl">Ttl</a></code> | <code>*f64</code> | Default lease for generated credentials. If not set or set to 0, will use system default. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.userId">UserId</a></code> | <code>*string</code> | ID of the Terraform Cloud or Enterprise user (e.g., user-xxxxxxxxxxxxxxxx). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of an existing role against which to create this Terraform Cloud credential.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/terraform_cloud_secret_role#name TerraformCloudSecretRole#name}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

The path of the Terraform Cloud Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/terraform_cloud_secret_role#backend TerraformCloudSecretRole#backend}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/terraform_cloud_secret_role#id TerraformCloudSecretRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.maxTtl"></a>

```go
MaxTtl *f64
```

- *Type:* *f64

Maximum allowed lease for generated credentials. If not set or set to 0, will use system default.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/terraform_cloud_secret_role#max_ttl TerraformCloudSecretRole#max_ttl}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/terraform_cloud_secret_role#namespace TerraformCloudSecretRole#namespace}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

Name of the Terraform Cloud or Enterprise organization.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/terraform_cloud_secret_role#organization TerraformCloudSecretRole#organization}

---

##### `TeamId`<sup>Optional</sup> <a name="TeamId" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.teamId"></a>

```go
TeamId *string
```

- *Type:* *string

ID of the Terraform Cloud or Enterprise team under organization (e.g., settings/teams/team-xxxxxxxxxxxxx).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/terraform_cloud_secret_role#team_id TerraformCloudSecretRole#team_id}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

Default lease for generated credentials. If not set or set to 0, will use system default.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/terraform_cloud_secret_role#ttl TerraformCloudSecretRole#ttl}

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.userId"></a>

```go
UserId *string
```

- *Type:* *string

ID of the Terraform Cloud or Enterprise user (e.g., user-xxxxxxxxxxxxxxxx).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/terraform_cloud_secret_role#user_id TerraformCloudSecretRole#user_id}

---



