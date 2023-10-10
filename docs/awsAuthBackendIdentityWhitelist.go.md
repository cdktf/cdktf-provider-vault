# `vault_aws_auth_backend_identity_whitelist`

Refer to the Terraform Registory for docs: [`vault_aws_auth_backend_identity_whitelist`](https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_auth_backend_identity_whitelist).

# `awsAuthBackendIdentityWhitelist` Submodule <a name="`awsAuthBackendIdentityWhitelist` Submodule" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAuthBackendIdentityWhitelist <a name="AwsAuthBackendIdentityWhitelist" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_auth_backend_identity_whitelist vault_aws_auth_backend_identity_whitelist}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/awsauthbackendidentitywhitelist"

awsauthbackendidentitywhitelist.NewAwsAuthBackendIdentityWhitelist(scope Construct, id *string, config AwsAuthBackendIdentityWhitelistConfig) AwsAuthBackendIdentityWhitelist
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig">AwsAuthBackendIdentityWhitelistConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig">AwsAuthBackendIdentityWhitelistConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetDisablePeriodicTidy">ResetDisablePeriodicTidy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetSafetyBuffer">ResetSafetyBuffer</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetBackend"></a>

```go
func ResetBackend()
```

##### `ResetDisablePeriodicTidy` <a name="ResetDisablePeriodicTidy" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetDisablePeriodicTidy"></a>

```go
func ResetDisablePeriodicTidy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetSafetyBuffer` <a name="ResetSafetyBuffer" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetSafetyBuffer"></a>

```go
func ResetSafetyBuffer()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/awsauthbackendidentitywhitelist"

awsauthbackendidentitywhitelist.AwsAuthBackendIdentityWhitelist_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/awsauthbackendidentitywhitelist"

awsauthbackendidentitywhitelist.AwsAuthBackendIdentityWhitelist_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/awsauthbackendidentitywhitelist"

awsauthbackendidentitywhitelist.AwsAuthBackendIdentityWhitelist_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.disablePeriodicTidyInput">DisablePeriodicTidyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.safetyBufferInput">SafetyBufferInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.disablePeriodicTidy">DisablePeriodicTidy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.safetyBuffer">SafetyBuffer</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `DisablePeriodicTidyInput`<sup>Optional</sup> <a name="DisablePeriodicTidyInput" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.disablePeriodicTidyInput"></a>

```go
func DisablePeriodicTidyInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `SafetyBufferInput`<sup>Optional</sup> <a name="SafetyBufferInput" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.safetyBufferInput"></a>

```go
func SafetyBufferInput() *f64
```

- *Type:* *f64

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `DisablePeriodicTidy`<sup>Required</sup> <a name="DisablePeriodicTidy" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.disablePeriodicTidy"></a>

```go
func DisablePeriodicTidy() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `SafetyBuffer`<sup>Required</sup> <a name="SafetyBuffer" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.safetyBuffer"></a>

```go
func SafetyBuffer() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsAuthBackendIdentityWhitelistConfig <a name="AwsAuthBackendIdentityWhitelistConfig" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/awsauthbackendidentitywhitelist"

&awsauthbackendidentitywhitelist.AwsAuthBackendIdentityWhitelistConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	DisablePeriodicTidy: interface{},
	Id: *string,
	Namespace: *string,
	SafetyBuffer: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.backend">Backend</a></code> | <code>*string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.disablePeriodicTidy">DisablePeriodicTidy</a></code> | <code>interface{}</code> | If true, disables the periodic tidying of the identiy whitelist entries. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_auth_backend_identity_whitelist#id AwsAuthBackendIdentityWhitelist#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.safetyBuffer">SafetyBuffer</a></code> | <code>*f64</code> | The amount of extra time that must have passed beyond the roletag expiration, before it's removed from backend storage. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_auth_backend_identity_whitelist#backend AwsAuthBackendIdentityWhitelist#backend}

---

##### `DisablePeriodicTidy`<sup>Optional</sup> <a name="DisablePeriodicTidy" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.disablePeriodicTidy"></a>

```go
DisablePeriodicTidy interface{}
```

- *Type:* interface{}

If true, disables the periodic tidying of the identiy whitelist entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_auth_backend_identity_whitelist#disable_periodic_tidy AwsAuthBackendIdentityWhitelist#disable_periodic_tidy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_auth_backend_identity_whitelist#id AwsAuthBackendIdentityWhitelist#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_auth_backend_identity_whitelist#namespace AwsAuthBackendIdentityWhitelist#namespace}

---

##### `SafetyBuffer`<sup>Optional</sup> <a name="SafetyBuffer" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.safetyBuffer"></a>

```go
SafetyBuffer *f64
```

- *Type:* *f64

The amount of extra time that must have passed beyond the roletag expiration, before it's removed from backend storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_auth_backend_identity_whitelist#safety_buffer AwsAuthBackendIdentityWhitelist#safety_buffer}

---



