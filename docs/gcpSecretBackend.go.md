# `vault_gcp_secret_backend`

Refer to the Terraform Registory for docs: [`vault_gcp_secret_backend`](https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/gcp_secret_backend).

# `gcpSecretBackend` Submodule <a name="`gcpSecretBackend` Submodule" id="@cdktf/provider-vault.gcpSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpSecretBackend <a name="GcpSecretBackend" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/gcp_secret_backend vault_gcp_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/gcpsecretbackend"

gcpsecretbackend.NewGcpSecretBackend(scope Construct, id *string, config GcpSecretBackendConfig) GcpSecretBackend
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig">GcpSecretBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig">GcpSecretBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetDefaultLeaseTtlSeconds">ResetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetDisableRemount">ResetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetLocal">ResetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetMaxLeaseTtlSeconds">ResetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCredentials` <a name="ResetCredentials" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetCredentials"></a>

```go
func ResetCredentials()
```

##### `ResetDefaultLeaseTtlSeconds` <a name="ResetDefaultLeaseTtlSeconds" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```go
func ResetDefaultLeaseTtlSeconds()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisableRemount` <a name="ResetDisableRemount" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetDisableRemount"></a>

```go
func ResetDisableRemount()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetId"></a>

```go
func ResetId()
```

##### `ResetLocal` <a name="ResetLocal" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetLocal"></a>

```go
func ResetLocal()
```

##### `ResetMaxLeaseTtlSeconds` <a name="ResetMaxLeaseTtlSeconds" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetMaxLeaseTtlSeconds"></a>

```go
func ResetMaxLeaseTtlSeconds()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetPath"></a>

```go
func ResetPath()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/gcpsecretbackend"

gcpsecretbackend.GcpSecretBackend_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/gcpsecretbackend"

gcpsecretbackend.GcpSecretBackend_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/gcpsecretbackend"

gcpsecretbackend.GcpSecretBackend_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.credentialsInput">CredentialsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.defaultLeaseTtlSecondsInput">DefaultLeaseTtlSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.disableRemountInput">DisableRemountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.localInput">LocalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.maxLeaseTtlSecondsInput">MaxLeaseTtlSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.credentials">Credentials</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.disableRemount">DisableRemount</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.local">Local</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.path">Path</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.credentialsInput"></a>

```go
func CredentialsInput() *string
```

- *Type:* *string

---

##### `DefaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="DefaultLeaseTtlSecondsInput" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```go
func DefaultLeaseTtlSecondsInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisableRemountInput`<sup>Optional</sup> <a name="DisableRemountInput" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.disableRemountInput"></a>

```go
func DisableRemountInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocalInput`<sup>Optional</sup> <a name="LocalInput" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.localInput"></a>

```go
func LocalInput() interface{}
```

- *Type:* interface{}

---

##### `MaxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="MaxLeaseTtlSecondsInput" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```go
func MaxLeaseTtlSecondsInput() *f64
```

- *Type:* *f64

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.credentials"></a>

```go
func Credentials() *string
```

- *Type:* *string

---

##### `DefaultLeaseTtlSeconds`<sup>Required</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.defaultLeaseTtlSeconds"></a>

```go
func DefaultLeaseTtlSeconds() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisableRemount`<sup>Required</sup> <a name="DisableRemount" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.disableRemount"></a>

```go
func DisableRemount() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Local`<sup>Required</sup> <a name="Local" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.local"></a>

```go
func Local() interface{}
```

- *Type:* interface{}

---

##### `MaxLeaseTtlSeconds`<sup>Required</sup> <a name="MaxLeaseTtlSeconds" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.maxLeaseTtlSeconds"></a>

```go
func MaxLeaseTtlSeconds() *f64
```

- *Type:* *f64

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GcpSecretBackendConfig <a name="GcpSecretBackendConfig" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/gcpsecretbackend"

&gcpsecretbackend.GcpSecretBackendConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Credentials: *string,
	DefaultLeaseTtlSeconds: *f64,
	Description: *string,
	DisableRemount: interface{},
	Id: *string,
	Local: interface{},
	MaxLeaseTtlSeconds: *f64,
	Namespace: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.credentials">Credentials</a></code> | <code>*string</code> | JSON-encoded credentials to use to connect to GCP. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>*f64</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.description">Description</a></code> | <code>*string</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.disableRemount">DisableRemount</a></code> | <code>interface{}</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/gcp_secret_backend#id GcpSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.local">Local</a></code> | <code>interface{}</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>*f64</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.path">Path</a></code> | <code>*string</code> | Path to mount the backend at. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.credentials"></a>

```go
Credentials *string
```

- *Type:* *string

JSON-encoded credentials to use to connect to GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/gcp_secret_backend#credentials GcpSecretBackend#credentials}

---

##### `DefaultLeaseTtlSeconds`<sup>Optional</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```go
DefaultLeaseTtlSeconds *f64
```

- *Type:* *f64

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/gcp_secret_backend#default_lease_ttl_seconds GcpSecretBackend#default_lease_ttl_seconds}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/gcp_secret_backend#description GcpSecretBackend#description}

---

##### `DisableRemount`<sup>Optional</sup> <a name="DisableRemount" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.disableRemount"></a>

```go
DisableRemount interface{}
```

- *Type:* interface{}

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/gcp_secret_backend#disable_remount GcpSecretBackend#disable_remount}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/gcp_secret_backend#id GcpSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Local`<sup>Optional</sup> <a name="Local" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.local"></a>

```go
Local interface{}
```

- *Type:* interface{}

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/gcp_secret_backend#local GcpSecretBackend#local}

---

##### `MaxLeaseTtlSeconds`<sup>Optional</sup> <a name="MaxLeaseTtlSeconds" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```go
MaxLeaseTtlSeconds *f64
```

- *Type:* *f64

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/gcp_secret_backend#max_lease_ttl_seconds GcpSecretBackend#max_lease_ttl_seconds}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/gcp_secret_backend#namespace GcpSecretBackend#namespace}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path to mount the backend at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/gcp_secret_backend#path GcpSecretBackend#path}

---



