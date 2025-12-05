# `dataVaultPkiSecretBackendConfigScep` Submodule <a name="`dataVaultPkiSecretBackendConfigScep` Submodule" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultPkiSecretBackendConfigScep <a name="DataVaultPkiSecretBackendConfigScep" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/pki_secret_backend_config_scep vault_pki_secret_backend_config_scep}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaultpkisecretbackendconfigscep"

datavaultpkisecretbackendconfigscep.NewDataVaultPkiSecretBackendConfigScep(scope Construct, id *string, config DataVaultPkiSecretBackendConfigScepConfig) DataVaultPkiSecretBackendConfigScep
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig">DataVaultPkiSecretBackendConfigScepConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig">DataVaultPkiSecretBackendConfigScepConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.resetLogLevel">ResetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.resetId"></a>

```go
func ResetId()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.resetLogLevel"></a>

```go
func ResetLogLevel()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultPkiSecretBackendConfigScep resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaultpkisecretbackendconfigscep"

datavaultpkisecretbackendconfigscep.DataVaultPkiSecretBackendConfigScep_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaultpkisecretbackendconfigscep"

datavaultpkisecretbackendconfigscep.DataVaultPkiSecretBackendConfigScep_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaultpkisecretbackendconfigscep"

datavaultpkisecretbackendconfigscep.DataVaultPkiSecretBackendConfigScep_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaultpkisecretbackendconfigscep"

datavaultpkisecretbackendconfigscep.DataVaultPkiSecretBackendConfigScep_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataVaultPkiSecretBackendConfigScep resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataVaultPkiSecretBackendConfigScep to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataVaultPkiSecretBackendConfigScep that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/pki_secret_backend_config_scep#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultPkiSecretBackendConfigScep to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.allowedDigestAlgorithms">AllowedDigestAlgorithms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.allowedEncryptionAlgorithms">AllowedEncryptionAlgorithms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.authenticators">Authenticators</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList">DataVaultPkiSecretBackendConfigScepAuthenticatorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.defaultPathPolicy">DefaultPathPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.externalValidation">ExternalValidation</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList">DataVaultPkiSecretBackendConfigScepExternalValidationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.lastUpdated">LastUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.restrictCaChainToIssuer">RestrictCaChainToIssuer</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.logLevelInput">LogLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.logLevel">LogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AllowedDigestAlgorithms`<sup>Required</sup> <a name="AllowedDigestAlgorithms" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.allowedDigestAlgorithms"></a>

```go
func AllowedDigestAlgorithms() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedEncryptionAlgorithms`<sup>Required</sup> <a name="AllowedEncryptionAlgorithms" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.allowedEncryptionAlgorithms"></a>

```go
func AllowedEncryptionAlgorithms() *[]*string
```

- *Type:* *[]*string

---

##### `Authenticators`<sup>Required</sup> <a name="Authenticators" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.authenticators"></a>

```go
func Authenticators() DataVaultPkiSecretBackendConfigScepAuthenticatorsList
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList">DataVaultPkiSecretBackendConfigScepAuthenticatorsList</a>

---

##### `DefaultPathPolicy`<sup>Required</sup> <a name="DefaultPathPolicy" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.defaultPathPolicy"></a>

```go
func DefaultPathPolicy() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ExternalValidation`<sup>Required</sup> <a name="ExternalValidation" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.externalValidation"></a>

```go
func ExternalValidation() DataVaultPkiSecretBackendConfigScepExternalValidationList
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList">DataVaultPkiSecretBackendConfigScepExternalValidationList</a>

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.lastUpdated"></a>

```go
func LastUpdated() *string
```

- *Type:* *string

---

##### `RestrictCaChainToIssuer`<sup>Required</sup> <a name="RestrictCaChainToIssuer" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.restrictCaChainToIssuer"></a>

```go
func RestrictCaChainToIssuer() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.logLevelInput"></a>

```go
func LogLevelInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.logLevel"></a>

```go
func LogLevel() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultPkiSecretBackendConfigScepAuthenticators <a name="DataVaultPkiSecretBackendConfigScepAuthenticators" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticators.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaultpkisecretbackendconfigscep"

&datavaultpkisecretbackendconfigscep.DataVaultPkiSecretBackendConfigScepAuthenticators {

}
```


### DataVaultPkiSecretBackendConfigScepConfig <a name="DataVaultPkiSecretBackendConfigScepConfig" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaultpkisecretbackendconfigscep"

&datavaultpkisecretbackendconfigscep.DataVaultPkiSecretBackendConfigScepConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	Id: *string,
	LogLevel: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.backend">Backend</a></code> | <code>*string</code> | Path where PKI engine is mounted. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/pki_secret_backend_config_scep#id DataVaultPkiSecretBackendConfigScep#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.logLevel">LogLevel</a></code> | <code>*string</code> | The level of logging verbosity, affects only SCEP logs on this mount. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

Path where PKI engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/pki_secret_backend_config_scep#backend DataVaultPkiSecretBackendConfigScep#backend}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/pki_secret_backend_config_scep#id DataVaultPkiSecretBackendConfigScep#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.logLevel"></a>

```go
LogLevel *string
```

- *Type:* *string

The level of logging verbosity, affects only SCEP logs on this mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/pki_secret_backend_config_scep#log_level DataVaultPkiSecretBackendConfigScep#log_level}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/pki_secret_backend_config_scep#namespace DataVaultPkiSecretBackendConfigScep#namespace}

---

### DataVaultPkiSecretBackendConfigScepExternalValidation <a name="DataVaultPkiSecretBackendConfigScepExternalValidation" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaultpkisecretbackendconfigscep"

&datavaultpkisecretbackendconfigscep.DataVaultPkiSecretBackendConfigScepExternalValidation {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataVaultPkiSecretBackendConfigScepAuthenticatorsList <a name="DataVaultPkiSecretBackendConfigScepAuthenticatorsList" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaultpkisecretbackendconfigscep"

datavaultpkisecretbackendconfigscep.NewDataVaultPkiSecretBackendConfigScepAuthenticatorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataVaultPkiSecretBackendConfigScepAuthenticatorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.get"></a>

```go
func Get(index *f64) DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference <a name="DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaultpkisecretbackendconfigscep"

datavaultpkisecretbackendconfigscep.NewDataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.property.cert">Cert</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.property.scep">Scep</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticators">DataVaultPkiSecretBackendConfigScepAuthenticators</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.property.cert"></a>

```go
func Cert() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Scep`<sup>Required</sup> <a name="Scep" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.property.scep"></a>

```go
func Scep() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataVaultPkiSecretBackendConfigScepAuthenticators
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticators">DataVaultPkiSecretBackendConfigScepAuthenticators</a>

---


### DataVaultPkiSecretBackendConfigScepExternalValidationList <a name="DataVaultPkiSecretBackendConfigScepExternalValidationList" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaultpkisecretbackendconfigscep"

datavaultpkisecretbackendconfigscep.NewDataVaultPkiSecretBackendConfigScepExternalValidationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataVaultPkiSecretBackendConfigScepExternalValidationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.get"></a>

```go
func Get(index *f64) DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference <a name="DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaultpkisecretbackendconfigscep"

datavaultpkisecretbackendconfigscep.NewDataVaultPkiSecretBackendConfigScepExternalValidationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.property.intune">Intune</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidation">DataVaultPkiSecretBackendConfigScepExternalValidation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Intune`<sup>Required</sup> <a name="Intune" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.property.intune"></a>

```go
func Intune() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataVaultPkiSecretBackendConfigScepExternalValidation
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidation">DataVaultPkiSecretBackendConfigScepExternalValidation</a>

---



