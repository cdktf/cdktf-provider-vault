# `dataVaultApproleAuthBackendRoleId` Submodule <a name="`dataVaultApproleAuthBackendRoleId` Submodule" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultApproleAuthBackendRoleId <a name="DataVaultApproleAuthBackendRoleId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/approle_auth_backend_role_id vault_approle_auth_backend_role_id}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaultapproleauthbackendroleid"

datavaultapproleauthbackendroleid.NewDataVaultApproleAuthBackendRoleId(scope Construct, id *string, config DataVaultApproleAuthBackendRoleIdConfig) DataVaultApproleAuthBackendRoleId
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig">DataVaultApproleAuthBackendRoleIdConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig">DataVaultApproleAuthBackendRoleIdConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.resetBackend"></a>

```go
func ResetBackend()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultApproleAuthBackendRoleId resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaultapproleauthbackendroleid"

datavaultapproleauthbackendroleid.DataVaultApproleAuthBackendRoleId_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaultapproleauthbackendroleid"

datavaultapproleauthbackendroleid.DataVaultApproleAuthBackendRoleId_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaultapproleauthbackendroleid"

datavaultapproleauthbackendroleid.DataVaultApproleAuthBackendRoleId_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaultapproleauthbackendroleid"

datavaultapproleauthbackendroleid.DataVaultApproleAuthBackendRoleId_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataVaultApproleAuthBackendRoleId resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataVaultApproleAuthBackendRoleId to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataVaultApproleAuthBackendRoleId that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/approle_auth_backend_role_id#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultApproleAuthBackendRoleId to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.roleId">RoleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.roleNameInput">RoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.roleName">RoleName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.roleId"></a>

```go
func RoleId() *string
```

- *Type:* *string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.roleNameInput"></a>

```go
func RoleNameInput() *string
```

- *Type:* *string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.roleName"></a>

```go
func RoleName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultApproleAuthBackendRoleIdConfig <a name="DataVaultApproleAuthBackendRoleIdConfig" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaultapproleauthbackendroleid"

&datavaultapproleauthbackendroleid.DataVaultApproleAuthBackendRoleIdConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	RoleName: *string,
	Backend: *string,
	Id: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.roleName">RoleName</a></code> | <code>*string</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.backend">Backend</a></code> | <code>*string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/approle_auth_backend_role_id#id DataVaultApproleAuthBackendRoleId#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.roleName"></a>

```go
RoleName *string
```

- *Type:* *string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/approle_auth_backend_role_id#role_name DataVaultApproleAuthBackendRoleId#role_name}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/approle_auth_backend_role_id#backend DataVaultApproleAuthBackendRoleId#backend}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/approle_auth_backend_role_id#id DataVaultApproleAuthBackendRoleId#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/approle_auth_backend_role_id#namespace DataVaultApproleAuthBackendRoleId#namespace}

---



