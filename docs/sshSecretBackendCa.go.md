# `vault_ssh_secret_backend_ca`

Refer to the Terraform Registory for docs: [`vault_ssh_secret_backend_ca`](https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/ssh_secret_backend_ca).

# `sshSecretBackendCa` Submodule <a name="`sshSecretBackendCa` Submodule" id="@cdktf/provider-vault.sshSecretBackendCa"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SshSecretBackendCa <a name="SshSecretBackendCa" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/ssh_secret_backend_ca vault_ssh_secret_backend_ca}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/sshsecretbackendca"

sshsecretbackendca.NewSshSecretBackendCa(scope Construct, id *string, config SshSecretBackendCaConfig) SshSecretBackendCa
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig">SshSecretBackendCaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig">SshSecretBackendCaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetGenerateSigningKey">ResetGenerateSigningKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetPrivateKey">ResetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetPublicKey">ResetPublicKey</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetBackend"></a>

```go
func ResetBackend()
```

##### `ResetGenerateSigningKey` <a name="ResetGenerateSigningKey" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetGenerateSigningKey"></a>

```go
func ResetGenerateSigningKey()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetPrivateKey"></a>

```go
func ResetPrivateKey()
```

##### `ResetPublicKey` <a name="ResetPublicKey" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetPublicKey"></a>

```go
func ResetPublicKey()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/sshsecretbackendca"

sshsecretbackendca.SshSecretBackendCa_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/sshsecretbackendca"

sshsecretbackendca.SshSecretBackendCa_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/sshsecretbackendca"

sshsecretbackendca.SshSecretBackendCa_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.generateSigningKeyInput">GenerateSigningKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.publicKeyInput">PublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.generateSigningKey">GenerateSigningKey</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `GenerateSigningKeyInput`<sup>Optional</sup> <a name="GenerateSigningKeyInput" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.generateSigningKeyInput"></a>

```go
func GenerateSigningKeyInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.publicKeyInput"></a>

```go
func PublicKeyInput() *string
```

- *Type:* *string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `GenerateSigningKey`<sup>Required</sup> <a name="GenerateSigningKey" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.generateSigningKey"></a>

```go
func GenerateSigningKey() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SshSecretBackendCaConfig <a name="SshSecretBackendCaConfig" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/sshsecretbackendca"

&sshsecretbackendca.SshSecretBackendCaConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	GenerateSigningKey: interface{},
	Id: *string,
	Namespace: *string,
	PrivateKey: *string,
	PublicKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.backend">Backend</a></code> | <code>*string</code> | The path of the SSH Secret Backend where the CA should be configured. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.generateSigningKey">GenerateSigningKey</a></code> | <code>interface{}</code> | Whether Vault should generate the signing key pair internally. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/ssh_secret_backend_ca#id SshSecretBackendCa#id}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.privateKey">PrivateKey</a></code> | <code>*string</code> | Private key part the SSH CA key pair; required if generate_signing_key is false. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.publicKey">PublicKey</a></code> | <code>*string</code> | Public key part the SSH CA key pair; required if generate_signing_key is false. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

The path of the SSH Secret Backend where the CA should be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/ssh_secret_backend_ca#backend SshSecretBackendCa#backend}

---

##### `GenerateSigningKey`<sup>Optional</sup> <a name="GenerateSigningKey" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.generateSigningKey"></a>

```go
GenerateSigningKey interface{}
```

- *Type:* interface{}

Whether Vault should generate the signing key pair internally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/ssh_secret_backend_ca#generate_signing_key SshSecretBackendCa#generate_signing_key}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/ssh_secret_backend_ca#id SshSecretBackendCa#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/ssh_secret_backend_ca#namespace SshSecretBackendCa#namespace}

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

Private key part the SSH CA key pair; required if generate_signing_key is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/ssh_secret_backend_ca#private_key SshSecretBackendCa#private_key}

---

##### `PublicKey`<sup>Optional</sup> <a name="PublicKey" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.publicKey"></a>

```go
PublicKey *string
```

- *Type:* *string

Public key part the SSH CA key pair; required if generate_signing_key is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/ssh_secret_backend_ca#public_key SshSecretBackendCa#public_key}

---



