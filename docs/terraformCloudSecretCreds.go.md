# `vault_terraform_cloud_secret_creds`

Refer to the Terraform Registory for docs: [`vault_terraform_cloud_secret_creds`](https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/terraform_cloud_secret_creds).

# `terraformCloudSecretCreds` Submodule <a name="`terraformCloudSecretCreds` Submodule" id="@cdktf/provider-vault.terraformCloudSecretCreds"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TerraformCloudSecretCreds <a name="TerraformCloudSecretCreds" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/terraform_cloud_secret_creds vault_terraform_cloud_secret_creds}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/terraformcloudsecretcreds"

terraformcloudsecretcreds.NewTerraformCloudSecretCreds(scope Construct, id *string, config TerraformCloudSecretCredsConfig) TerraformCloudSecretCreds
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig">TerraformCloudSecretCredsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig">TerraformCloudSecretCredsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/terraformcloudsecretcreds"

terraformcloudsecretcreds.TerraformCloudSecretCreds_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/terraformcloudsecretcreds"

terraformcloudsecretcreds.TerraformCloudSecretCreds_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/terraformcloudsecretcreds"

terraformcloudsecretcreds.TerraformCloudSecretCreds_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.leaseId">LeaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.teamId">TeamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.tokenId">TokenId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LeaseId`<sup>Required</sup> <a name="LeaseId" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.leaseId"></a>

```go
func LeaseId() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.teamId"></a>

```go
func TeamId() *string
```

- *Type:* *string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `TokenId`<sup>Required</sup> <a name="TokenId" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.tokenId"></a>

```go
func TokenId() *string
```

- *Type:* *string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TerraformCloudSecretCredsConfig <a name="TerraformCloudSecretCredsConfig" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/terraformcloudsecretcreds"

&terraformcloudsecretcreds.TerraformCloudSecretCredsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	Role: *string,
	Id: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.backend">Backend</a></code> | <code>*string</code> | Terraform Cloud secret backend to generate tokens from. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.role">Role</a></code> | <code>*string</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/terraform_cloud_secret_creds#id TerraformCloudSecretCreds#id}. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

Terraform Cloud secret backend to generate tokens from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/terraform_cloud_secret_creds#backend TerraformCloudSecretCreds#backend}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/terraform_cloud_secret_creds#role TerraformCloudSecretCreds#role}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/terraform_cloud_secret_creds#id TerraformCloudSecretCreds#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/terraform_cloud_secret_creds#namespace TerraformCloudSecretCreds#namespace}

---



