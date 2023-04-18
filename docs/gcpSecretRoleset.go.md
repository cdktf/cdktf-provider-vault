# `vault_gcp_secret_roleset`

Refer to the Terraform Registory for docs: [`vault_gcp_secret_roleset`](https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/gcp_secret_roleset).

# `gcpSecretRoleset` Submodule <a name="`gcpSecretRoleset` Submodule" id="@cdktf/provider-vault.gcpSecretRoleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpSecretRoleset <a name="GcpSecretRoleset" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/gcp_secret_roleset vault_gcp_secret_roleset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v7/gcpsecretroleset"

gcpsecretroleset.NewGcpSecretRoleset(scope Construct, id *string, config GcpSecretRolesetConfig) GcpSecretRoleset
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig">GcpSecretRolesetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig">GcpSecretRolesetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.putBinding">PutBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetSecretType">ResetSecretType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetTokenScopes">ResetTokenScopes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutBinding` <a name="PutBinding" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.putBinding"></a>

```go
func PutBinding(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.putBinding.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetSecretType` <a name="ResetSecretType" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetSecretType"></a>

```go
func ResetSecretType()
```

##### `ResetTokenScopes` <a name="ResetTokenScopes" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetTokenScopes"></a>

```go
func ResetTokenScopes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v7/gcpsecretroleset"

gcpsecretroleset.GcpSecretRoleset_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v7/gcpsecretroleset"

gcpsecretroleset.GcpSecretRoleset_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v7/gcpsecretroleset"

gcpsecretroleset.GcpSecretRoleset_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.binding">Binding</a></code> | <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList">GcpSecretRolesetBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.bindingInput">BindingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.rolesetInput">RolesetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.secretTypeInput">SecretTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.tokenScopesInput">TokenScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.roleset">Roleset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.secretType">SecretType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.tokenScopes">TokenScopes</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Binding`<sup>Required</sup> <a name="Binding" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.binding"></a>

```go
func Binding() GcpSecretRolesetBindingList
```

- *Type:* <a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList">GcpSecretRolesetBindingList</a>

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `BindingInput`<sup>Optional</sup> <a name="BindingInput" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.bindingInput"></a>

```go
func BindingInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RolesetInput`<sup>Optional</sup> <a name="RolesetInput" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.rolesetInput"></a>

```go
func RolesetInput() *string
```

- *Type:* *string

---

##### `SecretTypeInput`<sup>Optional</sup> <a name="SecretTypeInput" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.secretTypeInput"></a>

```go
func SecretTypeInput() *string
```

- *Type:* *string

---

##### `TokenScopesInput`<sup>Optional</sup> <a name="TokenScopesInput" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.tokenScopesInput"></a>

```go
func TokenScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Roleset`<sup>Required</sup> <a name="Roleset" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.roleset"></a>

```go
func Roleset() *string
```

- *Type:* *string

---

##### `SecretType`<sup>Required</sup> <a name="SecretType" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.secretType"></a>

```go
func SecretType() *string
```

- *Type:* *string

---

##### `TokenScopes`<sup>Required</sup> <a name="TokenScopes" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.tokenScopes"></a>

```go
func TokenScopes() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GcpSecretRolesetBinding <a name="GcpSecretRolesetBinding" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v7/gcpsecretroleset"

&gcpsecretroleset.GcpSecretRolesetBinding {
	Resource: *string,
	Roles: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding.property.resource">Resource</a></code> | <code>*string</code> | Resource name. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding.property.roles">Roles</a></code> | <code>*[]*string</code> | List of roles to apply to the resource. |

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

Resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/gcp_secret_roleset#resource GcpSecretRoleset#resource}

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding.property.roles"></a>

```go
Roles *[]*string
```

- *Type:* *[]*string

List of roles to apply to the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/gcp_secret_roleset#roles GcpSecretRoleset#roles}

---

### GcpSecretRolesetConfig <a name="GcpSecretRolesetConfig" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v7/gcpsecretroleset"

&gcpsecretroleset.GcpSecretRolesetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	Binding: interface{},
	Project: *string,
	Roleset: *string,
	Id: *string,
	Namespace: *string,
	SecretType: *string,
	TokenScopes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.backend">Backend</a></code> | <code>*string</code> | Path where the GCP secrets engine is mounted. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.binding">Binding</a></code> | <code>interface{}</code> | binding block. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.project">Project</a></code> | <code>*string</code> | Name of the GCP project that this roleset's service account will belong to. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.roleset">Roleset</a></code> | <code>*string</code> | Name of the RoleSet to create. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/gcp_secret_roleset#id GcpSecretRoleset#id}. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.secretType">SecretType</a></code> | <code>*string</code> | Type of secret generated for this role set. Defaults to `access_token`. Accepted values: `access_token`, `service_account_key`. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.tokenScopes">TokenScopes</a></code> | <code>*[]*string</code> | List of OAuth scopes to assign to `access_token` secrets generated under this role set (`access_token` role sets only). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

Path where the GCP secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/gcp_secret_roleset#backend GcpSecretRoleset#backend}

---

##### `Binding`<sup>Required</sup> <a name="Binding" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.binding"></a>

```go
Binding interface{}
```

- *Type:* interface{}

binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/gcp_secret_roleset#binding GcpSecretRoleset#binding}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Name of the GCP project that this roleset's service account will belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/gcp_secret_roleset#project GcpSecretRoleset#project}

---

##### `Roleset`<sup>Required</sup> <a name="Roleset" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.roleset"></a>

```go
Roleset *string
```

- *Type:* *string

Name of the RoleSet to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/gcp_secret_roleset#roleset GcpSecretRoleset#roleset}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/gcp_secret_roleset#id GcpSecretRoleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/gcp_secret_roleset#namespace GcpSecretRoleset#namespace}

---

##### `SecretType`<sup>Optional</sup> <a name="SecretType" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.secretType"></a>

```go
SecretType *string
```

- *Type:* *string

Type of secret generated for this role set. Defaults to `access_token`. Accepted values: `access_token`, `service_account_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/gcp_secret_roleset#secret_type GcpSecretRoleset#secret_type}

---

##### `TokenScopes`<sup>Optional</sup> <a name="TokenScopes" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.tokenScopes"></a>

```go
TokenScopes *[]*string
```

- *Type:* *[]*string

List of OAuth scopes to assign to `access_token` secrets generated under this role set (`access_token` role sets only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/gcp_secret_roleset#token_scopes GcpSecretRoleset#token_scopes}

---

## Classes <a name="Classes" id="Classes"></a>

### GcpSecretRolesetBindingList <a name="GcpSecretRolesetBindingList" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v7/gcpsecretroleset"

gcpsecretroleset.NewGcpSecretRolesetBindingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GcpSecretRolesetBindingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.get"></a>

```go
func Get(index *f64) GcpSecretRolesetBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GcpSecretRolesetBindingOutputReference <a name="GcpSecretRolesetBindingOutputReference" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v7/gcpsecretroleset"

gcpsecretroleset.NewGcpSecretRolesetBindingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GcpSecretRolesetBindingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.rolesInput">RolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.roles">Roles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.rolesInput"></a>

```go
func RolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.roles"></a>

```go
func Roles() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



