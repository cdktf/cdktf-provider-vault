# `dataVaultGcpAuthBackendRole` Submodule <a name="`dataVaultGcpAuthBackendRole` Submodule" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultGcpAuthBackendRole <a name="DataVaultGcpAuthBackendRole" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/gcp_auth_backend_role vault_gcp_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/datavaultgcpauthbackendrole"

datavaultgcpauthbackendrole.NewDataVaultGcpAuthBackendRole(scope Construct, id *string, config DataVaultGcpAuthBackendRoleConfig) DataVaultGcpAuthBackendRole
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig">DataVaultGcpAuthBackendRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig">DataVaultGcpAuthBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenBoundCidrs">ResetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenExplicitMaxTtl">ResetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenMaxTtl">ResetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenNoDefaultPolicy">ResetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenNumUses">ResetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenPeriod">ResetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenPolicies">ResetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenTtl">ResetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenType">ResetTokenType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetBackend"></a>

```go
func ResetBackend()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetTokenBoundCidrs` <a name="ResetTokenBoundCidrs" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenBoundCidrs"></a>

```go
func ResetTokenBoundCidrs()
```

##### `ResetTokenExplicitMaxTtl` <a name="ResetTokenExplicitMaxTtl" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```go
func ResetTokenExplicitMaxTtl()
```

##### `ResetTokenMaxTtl` <a name="ResetTokenMaxTtl" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenMaxTtl"></a>

```go
func ResetTokenMaxTtl()
```

##### `ResetTokenNoDefaultPolicy` <a name="ResetTokenNoDefaultPolicy" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```go
func ResetTokenNoDefaultPolicy()
```

##### `ResetTokenNumUses` <a name="ResetTokenNumUses" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenNumUses"></a>

```go
func ResetTokenNumUses()
```

##### `ResetTokenPeriod` <a name="ResetTokenPeriod" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenPeriod"></a>

```go
func ResetTokenPeriod()
```

##### `ResetTokenPolicies` <a name="ResetTokenPolicies" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenPolicies"></a>

```go
func ResetTokenPolicies()
```

##### `ResetTokenTtl` <a name="ResetTokenTtl" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenTtl"></a>

```go
func ResetTokenTtl()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenType"></a>

```go
func ResetTokenType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultGcpAuthBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/datavaultgcpauthbackendrole"

datavaultgcpauthbackendrole.DataVaultGcpAuthBackendRole_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/datavaultgcpauthbackendrole"

datavaultgcpauthbackendrole.DataVaultGcpAuthBackendRole_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/datavaultgcpauthbackendrole"

datavaultgcpauthbackendrole.DataVaultGcpAuthBackendRole_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/datavaultgcpauthbackendrole"

datavaultgcpauthbackendrole.DataVaultGcpAuthBackendRole_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataVaultGcpAuthBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataVaultGcpAuthBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataVaultGcpAuthBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/gcp_auth_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultGcpAuthBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.boundInstanceGroups">BoundInstanceGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.boundLabels">BoundLabels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.boundProjects">BoundProjects</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.boundRegions">BoundRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.boundServiceAccounts">BoundServiceAccounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.boundZones">BoundZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.roleId">RoleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.roleNameInput">RoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenBoundCidrsInput">TokenBoundCidrsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenExplicitMaxTtlInput">TokenExplicitMaxTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenMaxTtlInput">TokenMaxTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenNoDefaultPolicyInput">TokenNoDefaultPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenNumUsesInput">TokenNumUsesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenPeriodInput">TokenPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenPoliciesInput">TokenPoliciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenTtlInput">TokenTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenTypeInput">TokenTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.roleName">RoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenNumUses">TokenNumUses</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenPeriod">TokenPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenPolicies">TokenPolicies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenTtl">TokenTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenType">TokenType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `BoundInstanceGroups`<sup>Required</sup> <a name="BoundInstanceGroups" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.boundInstanceGroups"></a>

```go
func BoundInstanceGroups() *[]*string
```

- *Type:* *[]*string

---

##### `BoundLabels`<sup>Required</sup> <a name="BoundLabels" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.boundLabels"></a>

```go
func BoundLabels() *[]*string
```

- *Type:* *[]*string

---

##### `BoundProjects`<sup>Required</sup> <a name="BoundProjects" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.boundProjects"></a>

```go
func BoundProjects() *[]*string
```

- *Type:* *[]*string

---

##### `BoundRegions`<sup>Required</sup> <a name="BoundRegions" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.boundRegions"></a>

```go
func BoundRegions() *[]*string
```

- *Type:* *[]*string

---

##### `BoundServiceAccounts`<sup>Required</sup> <a name="BoundServiceAccounts" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.boundServiceAccounts"></a>

```go
func BoundServiceAccounts() *[]*string
```

- *Type:* *[]*string

---

##### `BoundZones`<sup>Required</sup> <a name="BoundZones" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.boundZones"></a>

```go
func BoundZones() *[]*string
```

- *Type:* *[]*string

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.roleId"></a>

```go
func RoleId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.roleNameInput"></a>

```go
func RoleNameInput() *string
```

- *Type:* *string

---

##### `TokenBoundCidrsInput`<sup>Optional</sup> <a name="TokenBoundCidrsInput" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenBoundCidrsInput"></a>

```go
func TokenBoundCidrsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="TokenExplicitMaxTtlInput" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```go
func TokenExplicitMaxTtlInput() *f64
```

- *Type:* *f64

---

##### `TokenMaxTtlInput`<sup>Optional</sup> <a name="TokenMaxTtlInput" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenMaxTtlInput"></a>

```go
func TokenMaxTtlInput() *f64
```

- *Type:* *f64

---

##### `TokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="TokenNoDefaultPolicyInput" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```go
func TokenNoDefaultPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `TokenNumUsesInput`<sup>Optional</sup> <a name="TokenNumUsesInput" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenNumUsesInput"></a>

```go
func TokenNumUsesInput() *f64
```

- *Type:* *f64

---

##### `TokenPeriodInput`<sup>Optional</sup> <a name="TokenPeriodInput" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenPeriodInput"></a>

```go
func TokenPeriodInput() *f64
```

- *Type:* *f64

---

##### `TokenPoliciesInput`<sup>Optional</sup> <a name="TokenPoliciesInput" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenPoliciesInput"></a>

```go
func TokenPoliciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TokenTtlInput`<sup>Optional</sup> <a name="TokenTtlInput" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenTtlInput"></a>

```go
func TokenTtlInput() *f64
```

- *Type:* *f64

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenTypeInput"></a>

```go
func TokenTypeInput() *string
```

- *Type:* *string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.roleName"></a>

```go
func RoleName() *string
```

- *Type:* *string

---

##### `TokenBoundCidrs`<sup>Required</sup> <a name="TokenBoundCidrs" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenBoundCidrs"></a>

```go
func TokenBoundCidrs() *[]*string
```

- *Type:* *[]*string

---

##### `TokenExplicitMaxTtl`<sup>Required</sup> <a name="TokenExplicitMaxTtl" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```go
func TokenExplicitMaxTtl() *f64
```

- *Type:* *f64

---

##### `TokenMaxTtl`<sup>Required</sup> <a name="TokenMaxTtl" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenMaxTtl"></a>

```go
func TokenMaxTtl() *f64
```

- *Type:* *f64

---

##### `TokenNoDefaultPolicy`<sup>Required</sup> <a name="TokenNoDefaultPolicy" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```go
func TokenNoDefaultPolicy() interface{}
```

- *Type:* interface{}

---

##### `TokenNumUses`<sup>Required</sup> <a name="TokenNumUses" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenNumUses"></a>

```go
func TokenNumUses() *f64
```

- *Type:* *f64

---

##### `TokenPeriod`<sup>Required</sup> <a name="TokenPeriod" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenPeriod"></a>

```go
func TokenPeriod() *f64
```

- *Type:* *f64

---

##### `TokenPolicies`<sup>Required</sup> <a name="TokenPolicies" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenPolicies"></a>

```go
func TokenPolicies() *[]*string
```

- *Type:* *[]*string

---

##### `TokenTtl`<sup>Required</sup> <a name="TokenTtl" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenTtl"></a>

```go
func TokenTtl() *f64
```

- *Type:* *f64

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenType"></a>

```go
func TokenType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultGcpAuthBackendRoleConfig <a name="DataVaultGcpAuthBackendRoleConfig" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/datavaultgcpauthbackendrole"

&datavaultgcpauthbackendrole.DataVaultGcpAuthBackendRoleConfig {
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
	TokenBoundCidrs: *[]*string,
	TokenExplicitMaxTtl: *f64,
	TokenMaxTtl: *f64,
	TokenNoDefaultPolicy: interface{},
	TokenNumUses: *f64,
	TokenPeriod: *f64,
	TokenPolicies: *[]*string,
	TokenTtl: *f64,
	TokenType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.roleName">RoleName</a></code> | <code>*string</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.backend">Backend</a></code> | <code>*string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/gcp_auth_backend_role#id DataVaultGcpAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>*[]*string</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>*f64</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>*f64</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>interface{}</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenNumUses">TokenNumUses</a></code> | <code>*f64</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenPeriod">TokenPeriod</a></code> | <code>*f64</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenPolicies">TokenPolicies</a></code> | <code>*[]*string</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenTtl">TokenTtl</a></code> | <code>*f64</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenType">TokenType</a></code> | <code>*string</code> | The type of token to generate, service or batch. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.roleName"></a>

```go
RoleName *string
```

- *Type:* *string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/gcp_auth_backend_role#role_name DataVaultGcpAuthBackendRole#role_name}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/gcp_auth_backend_role#backend DataVaultGcpAuthBackendRole#backend}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/gcp_auth_backend_role#id DataVaultGcpAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/gcp_auth_backend_role#namespace DataVaultGcpAuthBackendRole#namespace}

---

##### `TokenBoundCidrs`<sup>Optional</sup> <a name="TokenBoundCidrs" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```go
TokenBoundCidrs *[]*string
```

- *Type:* *[]*string

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/gcp_auth_backend_role#token_bound_cidrs DataVaultGcpAuthBackendRole#token_bound_cidrs}

---

##### `TokenExplicitMaxTtl`<sup>Optional</sup> <a name="TokenExplicitMaxTtl" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```go
TokenExplicitMaxTtl *f64
```

- *Type:* *f64

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/gcp_auth_backend_role#token_explicit_max_ttl DataVaultGcpAuthBackendRole#token_explicit_max_ttl}

---

##### `TokenMaxTtl`<sup>Optional</sup> <a name="TokenMaxTtl" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```go
TokenMaxTtl *f64
```

- *Type:* *f64

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/gcp_auth_backend_role#token_max_ttl DataVaultGcpAuthBackendRole#token_max_ttl}

---

##### `TokenNoDefaultPolicy`<sup>Optional</sup> <a name="TokenNoDefaultPolicy" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```go
TokenNoDefaultPolicy interface{}
```

- *Type:* interface{}

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/gcp_auth_backend_role#token_no_default_policy DataVaultGcpAuthBackendRole#token_no_default_policy}

---

##### `TokenNumUses`<sup>Optional</sup> <a name="TokenNumUses" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenNumUses"></a>

```go
TokenNumUses *f64
```

- *Type:* *f64

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/gcp_auth_backend_role#token_num_uses DataVaultGcpAuthBackendRole#token_num_uses}

---

##### `TokenPeriod`<sup>Optional</sup> <a name="TokenPeriod" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenPeriod"></a>

```go
TokenPeriod *f64
```

- *Type:* *f64

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/gcp_auth_backend_role#token_period DataVaultGcpAuthBackendRole#token_period}

---

##### `TokenPolicies`<sup>Optional</sup> <a name="TokenPolicies" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenPolicies"></a>

```go
TokenPolicies *[]*string
```

- *Type:* *[]*string

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/gcp_auth_backend_role#token_policies DataVaultGcpAuthBackendRole#token_policies}

---

##### `TokenTtl`<sup>Optional</sup> <a name="TokenTtl" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenTtl"></a>

```go
TokenTtl *f64
```

- *Type:* *f64

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/gcp_auth_backend_role#token_ttl DataVaultGcpAuthBackendRole#token_ttl}

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenType"></a>

```go
TokenType *string
```

- *Type:* *string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/gcp_auth_backend_role#token_type DataVaultGcpAuthBackendRole#token_type}

---



