# `vault_gcp_secret_static_account`

Refer to the Terraform Registory for docs: [`vault_gcp_secret_static_account`](https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_static_account).

# `gcpSecretStaticAccount` Submodule <a name="`gcpSecretStaticAccount` Submodule" id="@cdktf/provider-vault.gcpSecretStaticAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpSecretStaticAccount <a name="GcpSecretStaticAccount" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_static_account vault_gcp_secret_static_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v8/gcpsecretstaticaccount"

gcpsecretstaticaccount.NewGcpSecretStaticAccount(scope Construct, id *string, config GcpSecretStaticAccountConfig) GcpSecretStaticAccount
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig">GcpSecretStaticAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig">GcpSecretStaticAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.putBinding">PutBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetBinding">ResetBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetSecretType">ResetSecretType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetTokenScopes">ResetTokenScopes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutBinding` <a name="PutBinding" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.putBinding"></a>

```go
func PutBinding(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.putBinding.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBinding` <a name="ResetBinding" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetBinding"></a>

```go
func ResetBinding()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetSecretType` <a name="ResetSecretType" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetSecretType"></a>

```go
func ResetSecretType()
```

##### `ResetTokenScopes` <a name="ResetTokenScopes" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetTokenScopes"></a>

```go
func ResetTokenScopes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v8/gcpsecretstaticaccount"

gcpsecretstaticaccount.GcpSecretStaticAccount_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v8/gcpsecretstaticaccount"

gcpsecretstaticaccount.GcpSecretStaticAccount_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v8/gcpsecretstaticaccount"

gcpsecretstaticaccount.GcpSecretStaticAccount_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.binding">Binding</a></code> | <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList">GcpSecretStaticAccountBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.serviceAccountProject">ServiceAccountProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.bindingInput">BindingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.secretTypeInput">SecretTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.staticAccountInput">StaticAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.tokenScopesInput">TokenScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.secretType">SecretType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.staticAccount">StaticAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.tokenScopes">TokenScopes</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Binding`<sup>Required</sup> <a name="Binding" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.binding"></a>

```go
func Binding() GcpSecretStaticAccountBindingList
```

- *Type:* <a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList">GcpSecretStaticAccountBindingList</a>

---

##### `ServiceAccountProject`<sup>Required</sup> <a name="ServiceAccountProject" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.serviceAccountProject"></a>

```go
func ServiceAccountProject() *string
```

- *Type:* *string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `BindingInput`<sup>Optional</sup> <a name="BindingInput" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.bindingInput"></a>

```go
func BindingInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `SecretTypeInput`<sup>Optional</sup> <a name="SecretTypeInput" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.secretTypeInput"></a>

```go
func SecretTypeInput() *string
```

- *Type:* *string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `StaticAccountInput`<sup>Optional</sup> <a name="StaticAccountInput" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.staticAccountInput"></a>

```go
func StaticAccountInput() *string
```

- *Type:* *string

---

##### `TokenScopesInput`<sup>Optional</sup> <a name="TokenScopesInput" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.tokenScopesInput"></a>

```go
func TokenScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `SecretType`<sup>Required</sup> <a name="SecretType" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.secretType"></a>

```go
func SecretType() *string
```

- *Type:* *string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `StaticAccount`<sup>Required</sup> <a name="StaticAccount" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.staticAccount"></a>

```go
func StaticAccount() *string
```

- *Type:* *string

---

##### `TokenScopes`<sup>Required</sup> <a name="TokenScopes" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.tokenScopes"></a>

```go
func TokenScopes() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GcpSecretStaticAccountBinding <a name="GcpSecretStaticAccountBinding" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v8/gcpsecretstaticaccount"

&gcpsecretstaticaccount.GcpSecretStaticAccountBinding {
	Resource: *string,
	Roles: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding.property.resource">Resource</a></code> | <code>*string</code> | Resource name. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding.property.roles">Roles</a></code> | <code>*[]*string</code> | List of roles to apply to the resource. |

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

Resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_static_account#resource GcpSecretStaticAccount#resource}

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding.property.roles"></a>

```go
Roles *[]*string
```

- *Type:* *[]*string

List of roles to apply to the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_static_account#roles GcpSecretStaticAccount#roles}

---

### GcpSecretStaticAccountConfig <a name="GcpSecretStaticAccountConfig" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v8/gcpsecretstaticaccount"

&gcpsecretstaticaccount.GcpSecretStaticAccountConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	ServiceAccountEmail: *string,
	StaticAccount: *string,
	Binding: interface{},
	Id: *string,
	Namespace: *string,
	SecretType: *string,
	TokenScopes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.backend">Backend</a></code> | <code>*string</code> | Path where the GCP secrets engine is mounted. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | Email of the GCP service account. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.staticAccount">StaticAccount</a></code> | <code>*string</code> | Name of the Static Account to create. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.binding">Binding</a></code> | <code>interface{}</code> | binding block. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_static_account#id GcpSecretStaticAccount#id}. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.secretType">SecretType</a></code> | <code>*string</code> | Type of secret generated for this static account. Defaults to `access_token`. Accepted values: `access_token`, `service_account_key`. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.tokenScopes">TokenScopes</a></code> | <code>*[]*string</code> | List of OAuth scopes to assign to `access_token` secrets generated under this static account (`access_token` static accounts only). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

Path where the GCP secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_static_account#backend GcpSecretStaticAccount#backend}

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

Email of the GCP service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_static_account#service_account_email GcpSecretStaticAccount#service_account_email}

---

##### `StaticAccount`<sup>Required</sup> <a name="StaticAccount" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.staticAccount"></a>

```go
StaticAccount *string
```

- *Type:* *string

Name of the Static Account to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_static_account#static_account GcpSecretStaticAccount#static_account}

---

##### `Binding`<sup>Optional</sup> <a name="Binding" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.binding"></a>

```go
Binding interface{}
```

- *Type:* interface{}

binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_static_account#binding GcpSecretStaticAccount#binding}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_static_account#id GcpSecretStaticAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_static_account#namespace GcpSecretStaticAccount#namespace}

---

##### `SecretType`<sup>Optional</sup> <a name="SecretType" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.secretType"></a>

```go
SecretType *string
```

- *Type:* *string

Type of secret generated for this static account. Defaults to `access_token`. Accepted values: `access_token`, `service_account_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_static_account#secret_type GcpSecretStaticAccount#secret_type}

---

##### `TokenScopes`<sup>Optional</sup> <a name="TokenScopes" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.tokenScopes"></a>

```go
TokenScopes *[]*string
```

- *Type:* *[]*string

List of OAuth scopes to assign to `access_token` secrets generated under this static account (`access_token` static accounts only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_static_account#token_scopes GcpSecretStaticAccount#token_scopes}

---

## Classes <a name="Classes" id="Classes"></a>

### GcpSecretStaticAccountBindingList <a name="GcpSecretStaticAccountBindingList" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v8/gcpsecretstaticaccount"

gcpsecretstaticaccount.NewGcpSecretStaticAccountBindingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GcpSecretStaticAccountBindingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.get"></a>

```go
func Get(index *f64) GcpSecretStaticAccountBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GcpSecretStaticAccountBindingOutputReference <a name="GcpSecretStaticAccountBindingOutputReference" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v8/gcpsecretstaticaccount"

gcpsecretstaticaccount.NewGcpSecretStaticAccountBindingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GcpSecretStaticAccountBindingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.rolesInput">RolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.roles">Roles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.rolesInput"></a>

```go
func RolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.roles"></a>

```go
func Roles() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



