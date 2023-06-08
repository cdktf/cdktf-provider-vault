# `vault_azure_secret_backend_role`

Refer to the Terraform Registory for docs: [`vault_azure_secret_backend_role`](https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend_role).

# `azureSecretBackendRole` Submodule <a name="`azureSecretBackendRole` Submodule" id="@cdktf/provider-vault.azureSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureSecretBackendRole <a name="AzureSecretBackendRole" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend_role vault_azure_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/azuresecretbackendrole"

azuresecretbackendrole.NewAzureSecretBackendRole(scope Construct, id *string, config AzureSecretBackendRoleConfig) AzureSecretBackendRole
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig">AzureSecretBackendRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig">AzureSecretBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.putAzureGroups">PutAzureGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.putAzureRoles">PutAzureRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetApplicationObjectId">ResetApplicationObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetAzureGroups">ResetAzureGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetAzureRoles">ResetAzureRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetMaxTtl">ResetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAzureGroups` <a name="PutAzureGroups" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.putAzureGroups"></a>

```go
func PutAzureGroups(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.putAzureGroups.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAzureRoles` <a name="PutAzureRoles" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.putAzureRoles"></a>

```go
func PutAzureRoles(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.putAzureRoles.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetApplicationObjectId` <a name="ResetApplicationObjectId" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetApplicationObjectId"></a>

```go
func ResetApplicationObjectId()
```

##### `ResetAzureGroups` <a name="ResetAzureGroups" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetAzureGroups"></a>

```go
func ResetAzureGroups()
```

##### `ResetAzureRoles` <a name="ResetAzureRoles" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetAzureRoles"></a>

```go
func ResetAzureRoles()
```

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetBackend"></a>

```go
func ResetBackend()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetId"></a>

```go
func ResetId()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetMaxTtl"></a>

```go
func ResetMaxTtl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetTtl"></a>

```go
func ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/azuresecretbackendrole"

azuresecretbackendrole.AzureSecretBackendRole_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/azuresecretbackendrole"

azuresecretbackendrole.AzureSecretBackendRole_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/azuresecretbackendrole"

azuresecretbackendrole.AzureSecretBackendRole_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.azureGroups">AzureGroups</a></code> | <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList">AzureSecretBackendRoleAzureGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.azureRoles">AzureRoles</a></code> | <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList">AzureSecretBackendRoleAzureRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.applicationObjectIdInput">ApplicationObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.azureGroupsInput">AzureGroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.azureRolesInput">AzureRolesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.maxTtlInput">MaxTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.ttlInput">TtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.applicationObjectId">ApplicationObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.maxTtl">MaxTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.ttl">Ttl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AzureGroups`<sup>Required</sup> <a name="AzureGroups" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.azureGroups"></a>

```go
func AzureGroups() AzureSecretBackendRoleAzureGroupsList
```

- *Type:* <a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList">AzureSecretBackendRoleAzureGroupsList</a>

---

##### `AzureRoles`<sup>Required</sup> <a name="AzureRoles" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.azureRoles"></a>

```go
func AzureRoles() AzureSecretBackendRoleAzureRolesList
```

- *Type:* <a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList">AzureSecretBackendRoleAzureRolesList</a>

---

##### `ApplicationObjectIdInput`<sup>Optional</sup> <a name="ApplicationObjectIdInput" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.applicationObjectIdInput"></a>

```go
func ApplicationObjectIdInput() *string
```

- *Type:* *string

---

##### `AzureGroupsInput`<sup>Optional</sup> <a name="AzureGroupsInput" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.azureGroupsInput"></a>

```go
func AzureGroupsInput() interface{}
```

- *Type:* interface{}

---

##### `AzureRolesInput`<sup>Optional</sup> <a name="AzureRolesInput" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.azureRolesInput"></a>

```go
func AzureRolesInput() interface{}
```

- *Type:* interface{}

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.maxTtlInput"></a>

```go
func MaxTtlInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.ttlInput"></a>

```go
func TtlInput() *string
```

- *Type:* *string

---

##### `ApplicationObjectId`<sup>Required</sup> <a name="ApplicationObjectId" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.applicationObjectId"></a>

```go
func ApplicationObjectId() *string
```

- *Type:* *string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.maxTtl"></a>

```go
func MaxTtl() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.ttl"></a>

```go
func Ttl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AzureSecretBackendRoleAzureGroups <a name="AzureSecretBackendRoleAzureGroups" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/azuresecretbackendrole"

&azuresecretbackendrole.AzureSecretBackendRoleAzureGroups {
	GroupName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups.property.groupName">GroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend_role#group_name AzureSecretBackendRole#group_name}. |

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups.property.groupName"></a>

```go
GroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend_role#group_name AzureSecretBackendRole#group_name}.

---

### AzureSecretBackendRoleAzureRoles <a name="AzureSecretBackendRoleAzureRoles" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/azuresecretbackendrole"

&azuresecretbackendrole.AzureSecretBackendRoleAzureRoles {
	Scope: *string,
	RoleId: *string,
	RoleName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend_role#scope AzureSecretBackendRole#scope}. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles.property.roleId">RoleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend_role#role_id AzureSecretBackendRole#role_id}. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles.property.roleName">RoleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend_role#role_name AzureSecretBackendRole#role_name}. |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend_role#scope AzureSecretBackendRole#scope}.

---

##### `RoleId`<sup>Optional</sup> <a name="RoleId" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles.property.roleId"></a>

```go
RoleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend_role#role_id AzureSecretBackendRole#role_id}.

---

##### `RoleName`<sup>Optional</sup> <a name="RoleName" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles.property.roleName"></a>

```go
RoleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend_role#role_name AzureSecretBackendRole#role_name}.

---

### AzureSecretBackendRoleConfig <a name="AzureSecretBackendRoleConfig" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/azuresecretbackendrole"

&azuresecretbackendrole.AzureSecretBackendRoleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Role: *string,
	ApplicationObjectId: *string,
	AzureGroups: interface{},
	AzureRoles: interface{},
	Backend: *string,
	Description: *string,
	Id: *string,
	MaxTtl: *string,
	Namespace: *string,
	Ttl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.role">Role</a></code> | <code>*string</code> | Name of the role to create. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.applicationObjectId">ApplicationObjectId</a></code> | <code>*string</code> | Application Object ID for an existing service principal that will be used instead of creating dynamic service principals. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.azureGroups">AzureGroups</a></code> | <code>interface{}</code> | azure_groups block. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.azureRoles">AzureRoles</a></code> | <code>interface{}</code> | azure_roles block. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.backend">Backend</a></code> | <code>*string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.description">Description</a></code> | <code>*string</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend_role#id AzureSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.maxTtl">MaxTtl</a></code> | <code>*string</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.ttl">Ttl</a></code> | <code>*string</code> | Human-friendly description of the mount for the backend. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Name of the role to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend_role#role AzureSecretBackendRole#role}

---

##### `ApplicationObjectId`<sup>Optional</sup> <a name="ApplicationObjectId" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.applicationObjectId"></a>

```go
ApplicationObjectId *string
```

- *Type:* *string

Application Object ID for an existing service principal that will be used instead of creating dynamic service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend_role#application_object_id AzureSecretBackendRole#application_object_id}

---

##### `AzureGroups`<sup>Optional</sup> <a name="AzureGroups" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.azureGroups"></a>

```go
AzureGroups interface{}
```

- *Type:* interface{}

azure_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend_role#azure_groups AzureSecretBackendRole#azure_groups}

---

##### `AzureRoles`<sup>Optional</sup> <a name="AzureRoles" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.azureRoles"></a>

```go
AzureRoles interface{}
```

- *Type:* interface{}

azure_roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend_role#azure_roles AzureSecretBackendRole#azure_roles}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend_role#backend AzureSecretBackendRole#backend}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend_role#description AzureSecretBackendRole#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend_role#id AzureSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.maxTtl"></a>

```go
MaxTtl *string
```

- *Type:* *string

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend_role#max_ttl AzureSecretBackendRole#max_ttl}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend_role#namespace AzureSecretBackendRole#namespace}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.ttl"></a>

```go
Ttl *string
```

- *Type:* *string

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend_role#ttl AzureSecretBackendRole#ttl}

---

## Classes <a name="Classes" id="Classes"></a>

### AzureSecretBackendRoleAzureGroupsList <a name="AzureSecretBackendRoleAzureGroupsList" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/azuresecretbackendrole"

azuresecretbackendrole.NewAzureSecretBackendRoleAzureGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AzureSecretBackendRoleAzureGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.get"></a>

```go
func Get(index *f64) AzureSecretBackendRoleAzureGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AzureSecretBackendRoleAzureGroupsOutputReference <a name="AzureSecretBackendRoleAzureGroupsOutputReference" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/azuresecretbackendrole"

azuresecretbackendrole.NewAzureSecretBackendRoleAzureGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AzureSecretBackendRoleAzureGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.groupNameInput">GroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.groupName">GroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.groupNameInput"></a>

```go
func GroupNameInput() *string
```

- *Type:* *string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.groupName"></a>

```go
func GroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AzureSecretBackendRoleAzureRolesList <a name="AzureSecretBackendRoleAzureRolesList" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/azuresecretbackendrole"

azuresecretbackendrole.NewAzureSecretBackendRoleAzureRolesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AzureSecretBackendRoleAzureRolesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.get"></a>

```go
func Get(index *f64) AzureSecretBackendRoleAzureRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AzureSecretBackendRoleAzureRolesOutputReference <a name="AzureSecretBackendRoleAzureRolesOutputReference" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/azuresecretbackendrole"

azuresecretbackendrole.NewAzureSecretBackendRoleAzureRolesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AzureSecretBackendRoleAzureRolesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.resetRoleId">ResetRoleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.resetRoleName">ResetRoleName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRoleId` <a name="ResetRoleId" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.resetRoleId"></a>

```go
func ResetRoleId()
```

##### `ResetRoleName` <a name="ResetRoleName" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.resetRoleName"></a>

```go
func ResetRoleName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.roleIdInput">RoleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.roleNameInput">RoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.roleId">RoleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.roleName">RoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleIdInput`<sup>Optional</sup> <a name="RoleIdInput" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.roleIdInput"></a>

```go
func RoleIdInput() *string
```

- *Type:* *string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.roleNameInput"></a>

```go
func RoleNameInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.roleId"></a>

```go
func RoleId() *string
```

- *Type:* *string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.roleName"></a>

```go
func RoleName() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



