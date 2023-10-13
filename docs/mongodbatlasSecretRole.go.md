# `vault_mongodbatlas_secret_role`

Refer to the Terraform Registory for docs: [`vault_mongodbatlas_secret_role`](https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mongodbatlas_secret_role).

# `mongodbatlasSecretRole` Submodule <a name="`mongodbatlasSecretRole` Submodule" id="@cdktf/provider-vault.mongodbatlasSecretRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MongodbatlasSecretRole <a name="MongodbatlasSecretRole" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mongodbatlas_secret_role vault_mongodbatlas_secret_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/mongodbatlassecretrole"

mongodbatlassecretrole.NewMongodbatlasSecretRole(scope Construct, id *string, config MongodbatlasSecretRoleConfig) MongodbatlasSecretRole
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig">MongodbatlasSecretRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig">MongodbatlasSecretRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetCidrBlocks">ResetCidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetIpAddresses">ResetIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetMaxTtl">ResetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetOrganizationId">ResetOrganizationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetProjectRoles">ResetProjectRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCidrBlocks` <a name="ResetCidrBlocks" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetCidrBlocks"></a>

```go
func ResetCidrBlocks()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetId"></a>

```go
func ResetId()
```

##### `ResetIpAddresses` <a name="ResetIpAddresses" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetIpAddresses"></a>

```go
func ResetIpAddresses()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetMaxTtl"></a>

```go
func ResetMaxTtl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetOrganizationId` <a name="ResetOrganizationId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetOrganizationId"></a>

```go
func ResetOrganizationId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetProjectRoles` <a name="ResetProjectRoles" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetProjectRoles"></a>

```go
func ResetProjectRoles()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetTtl"></a>

```go
func ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/mongodbatlassecretrole"

mongodbatlassecretrole.MongodbatlasSecretRole_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/mongodbatlassecretrole"

mongodbatlassecretrole.MongodbatlasSecretRole_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/mongodbatlassecretrole"

mongodbatlassecretrole.MongodbatlasSecretRole_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.cidrBlocksInput">CidrBlocksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.ipAddressesInput">IpAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.maxTtlInput">MaxTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.organizationIdInput">OrganizationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.projectRolesInput">ProjectRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.rolesInput">RolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.ttlInput">TtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.cidrBlocks">CidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.maxTtl">MaxTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.projectRoles">ProjectRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.roles">Roles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.ttl">Ttl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CidrBlocksInput`<sup>Optional</sup> <a name="CidrBlocksInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.cidrBlocksInput"></a>

```go
func CidrBlocksInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpAddressesInput`<sup>Optional</sup> <a name="IpAddressesInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.ipAddressesInput"></a>

```go
func IpAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.maxTtlInput"></a>

```go
func MaxTtlInput() *string
```

- *Type:* *string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OrganizationIdInput`<sup>Optional</sup> <a name="OrganizationIdInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.organizationIdInput"></a>

```go
func OrganizationIdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ProjectRolesInput`<sup>Optional</sup> <a name="ProjectRolesInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.projectRolesInput"></a>

```go
func ProjectRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.rolesInput"></a>

```go
func RolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.ttlInput"></a>

```go
func TtlInput() *string
```

- *Type:* *string

---

##### `CidrBlocks`<sup>Required</sup> <a name="CidrBlocks" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.cidrBlocks"></a>

```go
func CidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.ipAddresses"></a>

```go
func IpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.maxTtl"></a>

```go
func MaxTtl() *string
```

- *Type:* *string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `ProjectRoles`<sup>Required</sup> <a name="ProjectRoles" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.projectRoles"></a>

```go
func ProjectRoles() *[]*string
```

- *Type:* *[]*string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.roles"></a>

```go
func Roles() *[]*string
```

- *Type:* *[]*string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.ttl"></a>

```go
func Ttl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MongodbatlasSecretRoleConfig <a name="MongodbatlasSecretRoleConfig" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/mongodbatlassecretrole"

&mongodbatlassecretrole.MongodbatlasSecretRoleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Mount: *string,
	Name: *string,
	Roles: *[]*string,
	CidrBlocks: *[]*string,
	Id: *string,
	IpAddresses: *[]*string,
	MaxTtl: *string,
	Namespace: *string,
	OrganizationId: *string,
	ProjectId: *string,
	ProjectRoles: *[]*string,
	Ttl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.mount">Mount</a></code> | <code>*string</code> | Path where MongoDB Atlas secret backend is mounted. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.name">Name</a></code> | <code>*string</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.roles">Roles</a></code> | <code>*[]*string</code> | List of roles that the API Key needs to have. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.cidrBlocks">CidrBlocks</a></code> | <code>*[]*string</code> | Whitelist entry in CIDR notation to be added for the API key. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mongodbatlas_secret_role#id MongodbatlasSecretRole#id}. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | IP address to be added to the whitelist for the API key. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.maxTtl">MaxTtl</a></code> | <code>*string</code> | The maximum allowed lifetime of credentials issued using this role. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.organizationId">OrganizationId</a></code> | <code>*string</code> | ID for the organization to which the target API Key belongs. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | ID for the project to which the target API Key belongs. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.projectRoles">ProjectRoles</a></code> | <code>*[]*string</code> | Roles assigned when an org API key is assigned to a project API key. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.ttl">Ttl</a></code> | <code>*string</code> | Duration in seconds after which the issued credential should expire. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

Path where MongoDB Atlas secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mongodbatlas_secret_role#mount MongodbatlasSecretRole#mount}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mongodbatlas_secret_role#name MongodbatlasSecretRole#name}

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.roles"></a>

```go
Roles *[]*string
```

- *Type:* *[]*string

List of roles that the API Key needs to have.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mongodbatlas_secret_role#roles MongodbatlasSecretRole#roles}

---

##### `CidrBlocks`<sup>Optional</sup> <a name="CidrBlocks" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.cidrBlocks"></a>

```go
CidrBlocks *[]*string
```

- *Type:* *[]*string

Whitelist entry in CIDR notation to be added for the API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mongodbatlas_secret_role#cidr_blocks MongodbatlasSecretRole#cidr_blocks}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mongodbatlas_secret_role#id MongodbatlasSecretRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddresses`<sup>Optional</sup> <a name="IpAddresses" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.ipAddresses"></a>

```go
IpAddresses *[]*string
```

- *Type:* *[]*string

IP address to be added to the whitelist for the API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mongodbatlas_secret_role#ip_addresses MongodbatlasSecretRole#ip_addresses}

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.maxTtl"></a>

```go
MaxTtl *string
```

- *Type:* *string

The maximum allowed lifetime of credentials issued using this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mongodbatlas_secret_role#max_ttl MongodbatlasSecretRole#max_ttl}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mongodbatlas_secret_role#namespace MongodbatlasSecretRole#namespace}

---

##### `OrganizationId`<sup>Optional</sup> <a name="OrganizationId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.organizationId"></a>

```go
OrganizationId *string
```

- *Type:* *string

ID for the organization to which the target API Key belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mongodbatlas_secret_role#organization_id MongodbatlasSecretRole#organization_id}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

ID for the project to which the target API Key belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mongodbatlas_secret_role#project_id MongodbatlasSecretRole#project_id}

---

##### `ProjectRoles`<sup>Optional</sup> <a name="ProjectRoles" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.projectRoles"></a>

```go
ProjectRoles *[]*string
```

- *Type:* *[]*string

Roles assigned when an org API key is assigned to a project API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mongodbatlas_secret_role#project_roles MongodbatlasSecretRole#project_roles}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.ttl"></a>

```go
Ttl *string
```

- *Type:* *string

Duration in seconds after which the issued credential should expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mongodbatlas_secret_role#ttl MongodbatlasSecretRole#ttl}

---



