# `azureAuthBackendConfig` Submodule <a name="`azureAuthBackendConfig` Submodule" id="@cdktf/provider-vault.azureAuthBackendConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureAuthBackendConfig <a name="AzureAuthBackendConfig" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_config vault_azure_auth_backend_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v6/azureauthbackendconfig"

azureauthbackendconfig.NewAzureAuthBackendConfig(scope Construct, id *string, config AzureAuthBackendConfigConfig) AzureAuthBackendConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig">AzureAuthBackendConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig">AzureAuthBackendConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetBackend"></a>

```go
func ResetBackend()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v6/azureauthbackendconfig"

azureauthbackendconfig.AzureAuthBackendConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v6/azureauthbackendconfig"

azureauthbackendconfig.AzureAuthBackendConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v6/azureauthbackendconfig"

azureauthbackendconfig.AzureAuthBackendConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AzureAuthBackendConfigConfig <a name="AzureAuthBackendConfigConfig" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v6/azureauthbackendconfig"

&azureauthbackendconfig.AzureAuthBackendConfigConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Resource: *string,
	TenantId: *string,
	Backend: *string,
	ClientId: *string,
	ClientSecret: *string,
	Environment: *string,
	Id: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.resource">Resource</a></code> | <code>*string</code> | The configured URL for the application registered in Azure Active Directory. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.tenantId">TenantId</a></code> | <code>*string</code> | The tenant id for the Azure Active Directory organization. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.backend">Backend</a></code> | <code>*string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.clientId">ClientId</a></code> | <code>*string</code> | The client id for credentials to query the Azure APIs. Currently read permissions to query compute resources are required. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | The client secret for credentials to query the Azure APIs. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.environment">Environment</a></code> | <code>*string</code> | The Azure cloud environment. Valid values: AzurePublicCloud, AzureUSGovernmentCloud, AzureChinaCloud, AzureGermanCloud. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_config#id AzureAuthBackendConfig#id}. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

The configured URL for the application registered in Azure Active Directory.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_config#resource AzureAuthBackendConfig#resource}

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

The tenant id for the Azure Active Directory organization.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_config#tenant_id AzureAuthBackendConfig#tenant_id}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_config#backend AzureAuthBackendConfig#backend}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The client id for credentials to query the Azure APIs. Currently read permissions to query compute resources are required.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_config#client_id AzureAuthBackendConfig#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

The client secret for credentials to query the Azure APIs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_config#client_secret AzureAuthBackendConfig#client_secret}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

The Azure cloud environment. Valid values: AzurePublicCloud, AzureUSGovernmentCloud, AzureChinaCloud, AzureGermanCloud.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_config#environment AzureAuthBackendConfig#environment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_config#id AzureAuthBackendConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_config#namespace AzureAuthBackendConfig#namespace}

---



