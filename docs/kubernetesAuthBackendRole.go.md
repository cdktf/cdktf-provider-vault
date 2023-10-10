# `vault_kubernetes_auth_backend_role`

Refer to the Terraform Registory for docs: [`vault_kubernetes_auth_backend_role`](https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kubernetes_auth_backend_role).

# `kubernetesAuthBackendRole` Submodule <a name="`kubernetesAuthBackendRole` Submodule" id="@cdktf/provider-vault.kubernetesAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesAuthBackendRole <a name="KubernetesAuthBackendRole" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kubernetes_auth_backend_role vault_kubernetes_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/kubernetesauthbackendrole"

kubernetesauthbackendrole.NewKubernetesAuthBackendRole(scope Construct, id *string, config KubernetesAuthBackendRoleConfig) KubernetesAuthBackendRole
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig">KubernetesAuthBackendRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig">KubernetesAuthBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetAliasNameSource">ResetAliasNameSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetAudience">ResetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenBoundCidrs">ResetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenExplicitMaxTtl">ResetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenMaxTtl">ResetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenNoDefaultPolicy">ResetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenNumUses">ResetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenPeriod">ResetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenPolicies">ResetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenTtl">ResetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenType">ResetTokenType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAliasNameSource` <a name="ResetAliasNameSource" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetAliasNameSource"></a>

```go
func ResetAliasNameSource()
```

##### `ResetAudience` <a name="ResetAudience" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetAudience"></a>

```go
func ResetAudience()
```

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetBackend"></a>

```go
func ResetBackend()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetTokenBoundCidrs` <a name="ResetTokenBoundCidrs" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenBoundCidrs"></a>

```go
func ResetTokenBoundCidrs()
```

##### `ResetTokenExplicitMaxTtl` <a name="ResetTokenExplicitMaxTtl" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```go
func ResetTokenExplicitMaxTtl()
```

##### `ResetTokenMaxTtl` <a name="ResetTokenMaxTtl" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenMaxTtl"></a>

```go
func ResetTokenMaxTtl()
```

##### `ResetTokenNoDefaultPolicy` <a name="ResetTokenNoDefaultPolicy" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```go
func ResetTokenNoDefaultPolicy()
```

##### `ResetTokenNumUses` <a name="ResetTokenNumUses" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenNumUses"></a>

```go
func ResetTokenNumUses()
```

##### `ResetTokenPeriod` <a name="ResetTokenPeriod" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenPeriod"></a>

```go
func ResetTokenPeriod()
```

##### `ResetTokenPolicies` <a name="ResetTokenPolicies" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenPolicies"></a>

```go
func ResetTokenPolicies()
```

##### `ResetTokenTtl` <a name="ResetTokenTtl" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenTtl"></a>

```go
func ResetTokenTtl()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenType"></a>

```go
func ResetTokenType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/kubernetesauthbackendrole"

kubernetesauthbackendrole.KubernetesAuthBackendRole_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/kubernetesauthbackendrole"

kubernetesauthbackendrole.KubernetesAuthBackendRole_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/kubernetesauthbackendrole"

kubernetesauthbackendrole.KubernetesAuthBackendRole_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.aliasNameSourceInput">AliasNameSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.audienceInput">AudienceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.boundServiceAccountNamesInput">BoundServiceAccountNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.boundServiceAccountNamespacesInput">BoundServiceAccountNamespacesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.roleNameInput">RoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenBoundCidrsInput">TokenBoundCidrsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenExplicitMaxTtlInput">TokenExplicitMaxTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenMaxTtlInput">TokenMaxTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenNoDefaultPolicyInput">TokenNoDefaultPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenNumUsesInput">TokenNumUsesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenPeriodInput">TokenPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenPoliciesInput">TokenPoliciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenTtlInput">TokenTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenTypeInput">TokenTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.aliasNameSource">AliasNameSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.audience">Audience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.boundServiceAccountNames">BoundServiceAccountNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.boundServiceAccountNamespaces">BoundServiceAccountNamespaces</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.roleName">RoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenNumUses">TokenNumUses</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenPeriod">TokenPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenPolicies">TokenPolicies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenTtl">TokenTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenType">TokenType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AliasNameSourceInput`<sup>Optional</sup> <a name="AliasNameSourceInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.aliasNameSourceInput"></a>

```go
func AliasNameSourceInput() *string
```

- *Type:* *string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.audienceInput"></a>

```go
func AudienceInput() *string
```

- *Type:* *string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `BoundServiceAccountNamesInput`<sup>Optional</sup> <a name="BoundServiceAccountNamesInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.boundServiceAccountNamesInput"></a>

```go
func BoundServiceAccountNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BoundServiceAccountNamespacesInput`<sup>Optional</sup> <a name="BoundServiceAccountNamespacesInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.boundServiceAccountNamespacesInput"></a>

```go
func BoundServiceAccountNamespacesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.roleNameInput"></a>

```go
func RoleNameInput() *string
```

- *Type:* *string

---

##### `TokenBoundCidrsInput`<sup>Optional</sup> <a name="TokenBoundCidrsInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenBoundCidrsInput"></a>

```go
func TokenBoundCidrsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="TokenExplicitMaxTtlInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```go
func TokenExplicitMaxTtlInput() *f64
```

- *Type:* *f64

---

##### `TokenMaxTtlInput`<sup>Optional</sup> <a name="TokenMaxTtlInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenMaxTtlInput"></a>

```go
func TokenMaxTtlInput() *f64
```

- *Type:* *f64

---

##### `TokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="TokenNoDefaultPolicyInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```go
func TokenNoDefaultPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `TokenNumUsesInput`<sup>Optional</sup> <a name="TokenNumUsesInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenNumUsesInput"></a>

```go
func TokenNumUsesInput() *f64
```

- *Type:* *f64

---

##### `TokenPeriodInput`<sup>Optional</sup> <a name="TokenPeriodInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenPeriodInput"></a>

```go
func TokenPeriodInput() *f64
```

- *Type:* *f64

---

##### `TokenPoliciesInput`<sup>Optional</sup> <a name="TokenPoliciesInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenPoliciesInput"></a>

```go
func TokenPoliciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TokenTtlInput`<sup>Optional</sup> <a name="TokenTtlInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenTtlInput"></a>

```go
func TokenTtlInput() *f64
```

- *Type:* *f64

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenTypeInput"></a>

```go
func TokenTypeInput() *string
```

- *Type:* *string

---

##### `AliasNameSource`<sup>Required</sup> <a name="AliasNameSource" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.aliasNameSource"></a>

```go
func AliasNameSource() *string
```

- *Type:* *string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.audience"></a>

```go
func Audience() *string
```

- *Type:* *string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `BoundServiceAccountNames`<sup>Required</sup> <a name="BoundServiceAccountNames" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.boundServiceAccountNames"></a>

```go
func BoundServiceAccountNames() *[]*string
```

- *Type:* *[]*string

---

##### `BoundServiceAccountNamespaces`<sup>Required</sup> <a name="BoundServiceAccountNamespaces" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.boundServiceAccountNamespaces"></a>

```go
func BoundServiceAccountNamespaces() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.roleName"></a>

```go
func RoleName() *string
```

- *Type:* *string

---

##### `TokenBoundCidrs`<sup>Required</sup> <a name="TokenBoundCidrs" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenBoundCidrs"></a>

```go
func TokenBoundCidrs() *[]*string
```

- *Type:* *[]*string

---

##### `TokenExplicitMaxTtl`<sup>Required</sup> <a name="TokenExplicitMaxTtl" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```go
func TokenExplicitMaxTtl() *f64
```

- *Type:* *f64

---

##### `TokenMaxTtl`<sup>Required</sup> <a name="TokenMaxTtl" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenMaxTtl"></a>

```go
func TokenMaxTtl() *f64
```

- *Type:* *f64

---

##### `TokenNoDefaultPolicy`<sup>Required</sup> <a name="TokenNoDefaultPolicy" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```go
func TokenNoDefaultPolicy() interface{}
```

- *Type:* interface{}

---

##### `TokenNumUses`<sup>Required</sup> <a name="TokenNumUses" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenNumUses"></a>

```go
func TokenNumUses() *f64
```

- *Type:* *f64

---

##### `TokenPeriod`<sup>Required</sup> <a name="TokenPeriod" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenPeriod"></a>

```go
func TokenPeriod() *f64
```

- *Type:* *f64

---

##### `TokenPolicies`<sup>Required</sup> <a name="TokenPolicies" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenPolicies"></a>

```go
func TokenPolicies() *[]*string
```

- *Type:* *[]*string

---

##### `TokenTtl`<sup>Required</sup> <a name="TokenTtl" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenTtl"></a>

```go
func TokenTtl() *f64
```

- *Type:* *f64

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenType"></a>

```go
func TokenType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesAuthBackendRoleConfig <a name="KubernetesAuthBackendRoleConfig" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/kubernetesauthbackendrole"

&kubernetesauthbackendrole.KubernetesAuthBackendRoleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BoundServiceAccountNames: *[]*string,
	BoundServiceAccountNamespaces: *[]*string,
	RoleName: *string,
	AliasNameSource: *string,
	Audience: *string,
	Backend: *string,
	Id: *string,
	Namespace: *string,
	TokenBoundCidrs: *[]*string,
	TokenExplicitMaxTtl: *f64,
	TokenMaxTtl: *f64,
	TokenNoDefaultPolicy: interface{},
	TokenNumUses: *f64,
	TokenPeriod: *f64,
	TokenPolicies: *[]*string,
	TokenTtl: *f64,
	TokenType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.boundServiceAccountNames">BoundServiceAccountNames</a></code> | <code>*[]*string</code> | List of service account names able to access this role. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.boundServiceAccountNamespaces">BoundServiceAccountNamespaces</a></code> | <code>*[]*string</code> | List of namespaces allowed to access this role. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.roleName">RoleName</a></code> | <code>*string</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.aliasNameSource">AliasNameSource</a></code> | <code>*string</code> | Configures how identity aliases are generated. Valid choices are: serviceaccount_uid, serviceaccount_name. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.audience">Audience</a></code> | <code>*string</code> | Optional Audience claim to verify in the JWT. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.backend">Backend</a></code> | <code>*string</code> | Unique name of the kubernetes backend to configure. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kubernetes_auth_backend_role#id KubernetesAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>*[]*string</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>*f64</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>*f64</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>interface{}</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenNumUses">TokenNumUses</a></code> | <code>*f64</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenPeriod">TokenPeriod</a></code> | <code>*f64</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenPolicies">TokenPolicies</a></code> | <code>*[]*string</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenTtl">TokenTtl</a></code> | <code>*f64</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenType">TokenType</a></code> | <code>*string</code> | The type of token to generate, service or batch. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BoundServiceAccountNames`<sup>Required</sup> <a name="BoundServiceAccountNames" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.boundServiceAccountNames"></a>

```go
BoundServiceAccountNames *[]*string
```

- *Type:* *[]*string

List of service account names able to access this role.

If set to `["*"]` all names are allowed, both this and bound_service_account_namespaces can not be "*".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kubernetes_auth_backend_role#bound_service_account_names KubernetesAuthBackendRole#bound_service_account_names}

---

##### `BoundServiceAccountNamespaces`<sup>Required</sup> <a name="BoundServiceAccountNamespaces" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.boundServiceAccountNamespaces"></a>

```go
BoundServiceAccountNamespaces *[]*string
```

- *Type:* *[]*string

List of namespaces allowed to access this role.

If set to `["*"]` all namespaces are allowed, both this and bound_service_account_names can not be set to "*".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kubernetes_auth_backend_role#bound_service_account_namespaces KubernetesAuthBackendRole#bound_service_account_namespaces}

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.roleName"></a>

```go
RoleName *string
```

- *Type:* *string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kubernetes_auth_backend_role#role_name KubernetesAuthBackendRole#role_name}

---

##### `AliasNameSource`<sup>Optional</sup> <a name="AliasNameSource" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.aliasNameSource"></a>

```go
AliasNameSource *string
```

- *Type:* *string

Configures how identity aliases are generated. Valid choices are: serviceaccount_uid, serviceaccount_name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kubernetes_auth_backend_role#alias_name_source KubernetesAuthBackendRole#alias_name_source}

---

##### `Audience`<sup>Optional</sup> <a name="Audience" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.audience"></a>

```go
Audience *string
```

- *Type:* *string

Optional Audience claim to verify in the JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kubernetes_auth_backend_role#audience KubernetesAuthBackendRole#audience}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

Unique name of the kubernetes backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kubernetes_auth_backend_role#backend KubernetesAuthBackendRole#backend}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kubernetes_auth_backend_role#id KubernetesAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kubernetes_auth_backend_role#namespace KubernetesAuthBackendRole#namespace}

---

##### `TokenBoundCidrs`<sup>Optional</sup> <a name="TokenBoundCidrs" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```go
TokenBoundCidrs *[]*string
```

- *Type:* *[]*string

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kubernetes_auth_backend_role#token_bound_cidrs KubernetesAuthBackendRole#token_bound_cidrs}

---

##### `TokenExplicitMaxTtl`<sup>Optional</sup> <a name="TokenExplicitMaxTtl" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```go
TokenExplicitMaxTtl *f64
```

- *Type:* *f64

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kubernetes_auth_backend_role#token_explicit_max_ttl KubernetesAuthBackendRole#token_explicit_max_ttl}

---

##### `TokenMaxTtl`<sup>Optional</sup> <a name="TokenMaxTtl" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```go
TokenMaxTtl *f64
```

- *Type:* *f64

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kubernetes_auth_backend_role#token_max_ttl KubernetesAuthBackendRole#token_max_ttl}

---

##### `TokenNoDefaultPolicy`<sup>Optional</sup> <a name="TokenNoDefaultPolicy" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```go
TokenNoDefaultPolicy interface{}
```

- *Type:* interface{}

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kubernetes_auth_backend_role#token_no_default_policy KubernetesAuthBackendRole#token_no_default_policy}

---

##### `TokenNumUses`<sup>Optional</sup> <a name="TokenNumUses" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenNumUses"></a>

```go
TokenNumUses *f64
```

- *Type:* *f64

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kubernetes_auth_backend_role#token_num_uses KubernetesAuthBackendRole#token_num_uses}

---

##### `TokenPeriod`<sup>Optional</sup> <a name="TokenPeriod" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenPeriod"></a>

```go
TokenPeriod *f64
```

- *Type:* *f64

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kubernetes_auth_backend_role#token_period KubernetesAuthBackendRole#token_period}

---

##### `TokenPolicies`<sup>Optional</sup> <a name="TokenPolicies" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenPolicies"></a>

```go
TokenPolicies *[]*string
```

- *Type:* *[]*string

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kubernetes_auth_backend_role#token_policies KubernetesAuthBackendRole#token_policies}

---

##### `TokenTtl`<sup>Optional</sup> <a name="TokenTtl" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenTtl"></a>

```go
TokenTtl *f64
```

- *Type:* *f64

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kubernetes_auth_backend_role#token_ttl KubernetesAuthBackendRole#token_ttl}

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenType"></a>

```go
TokenType *string
```

- *Type:* *string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kubernetes_auth_backend_role#token_type KubernetesAuthBackendRole#token_type}

---



