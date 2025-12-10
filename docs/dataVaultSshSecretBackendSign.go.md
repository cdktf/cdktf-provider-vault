# `dataVaultSshSecretBackendSign` Submodule <a name="`dataVaultSshSecretBackendSign` Submodule" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultSshSecretBackendSign <a name="DataVaultSshSecretBackendSign" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/ssh_secret_backend_sign vault_ssh_secret_backend_sign}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/datavaultsshsecretbackendsign"

datavaultsshsecretbackendsign.NewDataVaultSshSecretBackendSign(scope Construct, id *string, config DataVaultSshSecretBackendSignConfig) DataVaultSshSecretBackendSign
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig">DataVaultSshSecretBackendSignConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig">DataVaultSshSecretBackendSignConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetCertType">ResetCertType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetCriticalOptions">ResetCriticalOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetExtensions">ResetExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetKeyId">ResetKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetValidPrincipals">ResetValidPrincipals</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCertType` <a name="ResetCertType" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetCertType"></a>

```go
func ResetCertType()
```

##### `ResetCriticalOptions` <a name="ResetCriticalOptions" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetCriticalOptions"></a>

```go
func ResetCriticalOptions()
```

##### `ResetExtensions` <a name="ResetExtensions" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetExtensions"></a>

```go
func ResetExtensions()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetId"></a>

```go
func ResetId()
```

##### `ResetKeyId` <a name="ResetKeyId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetKeyId"></a>

```go
func ResetKeyId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetTtl"></a>

```go
func ResetTtl()
```

##### `ResetValidPrincipals` <a name="ResetValidPrincipals" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetValidPrincipals"></a>

```go
func ResetValidPrincipals()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultSshSecretBackendSign resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/datavaultsshsecretbackendsign"

datavaultsshsecretbackendsign.DataVaultSshSecretBackendSign_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/datavaultsshsecretbackendsign"

datavaultsshsecretbackendsign.DataVaultSshSecretBackendSign_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/datavaultsshsecretbackendsign"

datavaultsshsecretbackendsign.DataVaultSshSecretBackendSign_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/datavaultsshsecretbackendsign"

datavaultsshsecretbackendsign.DataVaultSshSecretBackendSign_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataVaultSshSecretBackendSign resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataVaultSshSecretBackendSign to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataVaultSshSecretBackendSign that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/ssh_secret_backend_sign#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultSshSecretBackendSign to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.signedKey">SignedKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.certTypeInput">CertTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.criticalOptionsInput">CriticalOptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.extensionsInput">ExtensionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.keyIdInput">KeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.publicKeyInput">PublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.ttlInput">TtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.validPrincipalsInput">ValidPrincipalsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.certType">CertType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.criticalOptions">CriticalOptions</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.extensions">Extensions</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.ttl">Ttl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.validPrincipals">ValidPrincipals</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.serialNumber"></a>

```go
func SerialNumber() *string
```

- *Type:* *string

---

##### `SignedKey`<sup>Required</sup> <a name="SignedKey" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.signedKey"></a>

```go
func SignedKey() *string
```

- *Type:* *string

---

##### `CertTypeInput`<sup>Optional</sup> <a name="CertTypeInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.certTypeInput"></a>

```go
func CertTypeInput() *string
```

- *Type:* *string

---

##### `CriticalOptionsInput`<sup>Optional</sup> <a name="CriticalOptionsInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.criticalOptionsInput"></a>

```go
func CriticalOptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExtensionsInput`<sup>Optional</sup> <a name="ExtensionsInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.extensionsInput"></a>

```go
func ExtensionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.keyIdInput"></a>

```go
func KeyIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.publicKeyInput"></a>

```go
func PublicKeyInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.ttlInput"></a>

```go
func TtlInput() *string
```

- *Type:* *string

---

##### `ValidPrincipalsInput`<sup>Optional</sup> <a name="ValidPrincipalsInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.validPrincipalsInput"></a>

```go
func ValidPrincipalsInput() *string
```

- *Type:* *string

---

##### `CertType`<sup>Required</sup> <a name="CertType" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.certType"></a>

```go
func CertType() *string
```

- *Type:* *string

---

##### `CriticalOptions`<sup>Required</sup> <a name="CriticalOptions" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.criticalOptions"></a>

```go
func CriticalOptions() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Extensions`<sup>Required</sup> <a name="Extensions" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.extensions"></a>

```go
func Extensions() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.ttl"></a>

```go
func Ttl() *string
```

- *Type:* *string

---

##### `ValidPrincipals`<sup>Required</sup> <a name="ValidPrincipals" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.validPrincipals"></a>

```go
func ValidPrincipals() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultSshSecretBackendSignConfig <a name="DataVaultSshSecretBackendSignConfig" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/datavaultsshsecretbackendsign"

&datavaultsshsecretbackendsign.DataVaultSshSecretBackendSignConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Path: *string,
	PublicKey: *string,
	CertType: *string,
	CriticalOptions: *map[string]*string,
	Extensions: *map[string]*string,
	Id: *string,
	KeyId: *string,
	Namespace: *string,
	Ttl: *string,
	ValidPrincipals: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the name of the role to sign. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.path">Path</a></code> | <code>*string</code> | Full path where SSH backend is mounted. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.publicKey">PublicKey</a></code> | <code>*string</code> | Specifies the SSH public key that should be signed. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.certType">CertType</a></code> | <code>*string</code> | Specifies the type of certificate to be created; either "user" or "host". |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.criticalOptions">CriticalOptions</a></code> | <code>*map[string]*string</code> | Specifies a map of the critical options that the certificate should be signed for. Defaults to none. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.extensions">Extensions</a></code> | <code>*map[string]*string</code> | Specifies a map of the extensions that the certificate should be signed for. Defaults to none. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/ssh_secret_backend_sign#id DataVaultSshSecretBackendSign#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.keyId">KeyId</a></code> | <code>*string</code> | Specifies the key id that the created certificate should have. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.ttl">Ttl</a></code> | <code>*string</code> | Specifies the Requested Time To Live. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.validPrincipals">ValidPrincipals</a></code> | <code>*string</code> | Specifies valid principals, either usernames or hostnames, that the certificate should be signed for. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the name of the role to sign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/ssh_secret_backend_sign#name DataVaultSshSecretBackendSign#name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Full path where SSH backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/ssh_secret_backend_sign#path DataVaultSshSecretBackendSign#path}

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.publicKey"></a>

```go
PublicKey *string
```

- *Type:* *string

Specifies the SSH public key that should be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/ssh_secret_backend_sign#public_key DataVaultSshSecretBackendSign#public_key}

---

##### `CertType`<sup>Optional</sup> <a name="CertType" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.certType"></a>

```go
CertType *string
```

- *Type:* *string

Specifies the type of certificate to be created; either "user" or "host".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/ssh_secret_backend_sign#cert_type DataVaultSshSecretBackendSign#cert_type}

---

##### `CriticalOptions`<sup>Optional</sup> <a name="CriticalOptions" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.criticalOptions"></a>

```go
CriticalOptions *map[string]*string
```

- *Type:* *map[string]*string

Specifies a map of the critical options that the certificate should be signed for. Defaults to none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/ssh_secret_backend_sign#critical_options DataVaultSshSecretBackendSign#critical_options}

---

##### `Extensions`<sup>Optional</sup> <a name="Extensions" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.extensions"></a>

```go
Extensions *map[string]*string
```

- *Type:* *map[string]*string

Specifies a map of the extensions that the certificate should be signed for. Defaults to none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/ssh_secret_backend_sign#extensions DataVaultSshSecretBackendSign#extensions}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/ssh_secret_backend_sign#id DataVaultSshSecretBackendSign#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyId`<sup>Optional</sup> <a name="KeyId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.keyId"></a>

```go
KeyId *string
```

- *Type:* *string

Specifies the key id that the created certificate should have.

If not specified, the display name of the token will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/ssh_secret_backend_sign#key_id DataVaultSshSecretBackendSign#key_id}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/ssh_secret_backend_sign#namespace DataVaultSshSecretBackendSign#namespace}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.ttl"></a>

```go
Ttl *string
```

- *Type:* *string

Specifies the Requested Time To Live.

Cannot be greater than the role's max_ttl value. If not provided, the role's ttl value will be used. Note that the role values default to system values if not explicitly set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/ssh_secret_backend_sign#ttl DataVaultSshSecretBackendSign#ttl}

---

##### `ValidPrincipals`<sup>Optional</sup> <a name="ValidPrincipals" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.validPrincipals"></a>

```go
ValidPrincipals *string
```

- *Type:* *string

Specifies valid principals, either usernames or hostnames, that the certificate should be signed for.

Required unless the role has specified allow_empty_principals or a value has been set for either the default_user or default_user_template role parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/ssh_secret_backend_sign#valid_principals DataVaultSshSecretBackendSign#valid_principals}

---



