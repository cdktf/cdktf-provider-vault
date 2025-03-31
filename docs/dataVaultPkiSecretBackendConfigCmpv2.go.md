# `dataVaultPkiSecretBackendConfigCmpv2` Submodule <a name="`dataVaultPkiSecretBackendConfigCmpv2` Submodule" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultPkiSecretBackendConfigCmpv2 <a name="DataVaultPkiSecretBackendConfigCmpv2" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_config_cmpv2 vault_pki_secret_backend_config_cmpv2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/datavaultpkisecretbackendconfigcmpv2"

datavaultpkisecretbackendconfigcmpv2.NewDataVaultPkiSecretBackendConfigCmpv2(scope Construct, id *string, config DataVaultPkiSecretBackendConfigCmpv2Config) DataVaultPkiSecretBackendConfigCmpv2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config">DataVaultPkiSecretBackendConfigCmpv2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config">DataVaultPkiSecretBackendConfigCmpv2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.resetDisabledValidations">ResetDisabledValidations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDisabledValidations` <a name="ResetDisabledValidations" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.resetDisabledValidations"></a>

```go
func ResetDisabledValidations()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultPkiSecretBackendConfigCmpv2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/datavaultpkisecretbackendconfigcmpv2"

datavaultpkisecretbackendconfigcmpv2.DataVaultPkiSecretBackendConfigCmpv2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/datavaultpkisecretbackendconfigcmpv2"

datavaultpkisecretbackendconfigcmpv2.DataVaultPkiSecretBackendConfigCmpv2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/datavaultpkisecretbackendconfigcmpv2"

datavaultpkisecretbackendconfigcmpv2.DataVaultPkiSecretBackendConfigCmpv2_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/datavaultpkisecretbackendconfigcmpv2"

datavaultpkisecretbackendconfigcmpv2.DataVaultPkiSecretBackendConfigCmpv2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataVaultPkiSecretBackendConfigCmpv2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataVaultPkiSecretBackendConfigCmpv2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataVaultPkiSecretBackendConfigCmpv2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_config_cmpv2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultPkiSecretBackendConfigCmpv2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.auditFields">AuditFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.authenticators">Authenticators</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList">DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.defaultPathPolicy">DefaultPathPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.enableSentinelParsing">EnableSentinelParsing</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.lastUpdated">LastUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.disabledValidationsInput">DisabledValidationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.disabledValidations">DisabledValidations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AuditFields`<sup>Required</sup> <a name="AuditFields" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.auditFields"></a>

```go
func AuditFields() *[]*string
```

- *Type:* *[]*string

---

##### `Authenticators`<sup>Required</sup> <a name="Authenticators" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.authenticators"></a>

```go
func Authenticators() DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList">DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList</a>

---

##### `DefaultPathPolicy`<sup>Required</sup> <a name="DefaultPathPolicy" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.defaultPathPolicy"></a>

```go
func DefaultPathPolicy() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnableSentinelParsing`<sup>Required</sup> <a name="EnableSentinelParsing" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.enableSentinelParsing"></a>

```go
func EnableSentinelParsing() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.lastUpdated"></a>

```go
func LastUpdated() *string
```

- *Type:* *string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `DisabledValidationsInput`<sup>Optional</sup> <a name="DisabledValidationsInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.disabledValidationsInput"></a>

```go
func DisabledValidationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `DisabledValidations`<sup>Required</sup> <a name="DisabledValidations" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.disabledValidations"></a>

```go
func DisabledValidations() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultPkiSecretBackendConfigCmpv2Authenticators <a name="DataVaultPkiSecretBackendConfigCmpv2Authenticators" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Authenticators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Authenticators.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/datavaultpkisecretbackendconfigcmpv2"

&datavaultpkisecretbackendconfigcmpv2.DataVaultPkiSecretBackendConfigCmpv2Authenticators {

}
```


### DataVaultPkiSecretBackendConfigCmpv2Config <a name="DataVaultPkiSecretBackendConfigCmpv2Config" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/datavaultpkisecretbackendconfigcmpv2"

&datavaultpkisecretbackendconfigcmpv2.DataVaultPkiSecretBackendConfigCmpv2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	DisabledValidations: *[]*string,
	Id: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.backend">Backend</a></code> | <code>*string</code> | Path where PKI engine is mounted. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.disabledValidations">DisabledValidations</a></code> | <code>*[]*string</code> | A comma-separated list of validations not to perform on CMPv2 messages. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_config_cmpv2#id DataVaultPkiSecretBackendConfigCmpv2#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

Path where PKI engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_config_cmpv2#backend DataVaultPkiSecretBackendConfigCmpv2#backend}

---

##### `DisabledValidations`<sup>Optional</sup> <a name="DisabledValidations" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.disabledValidations"></a>

```go
DisabledValidations *[]*string
```

- *Type:* *[]*string

A comma-separated list of validations not to perform on CMPv2 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_config_cmpv2#disabled_validations DataVaultPkiSecretBackendConfigCmpv2#disabled_validations}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_config_cmpv2#id DataVaultPkiSecretBackendConfigCmpv2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_config_cmpv2#namespace DataVaultPkiSecretBackendConfigCmpv2#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList <a name="DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/datavaultpkisecretbackendconfigcmpv2"

datavaultpkisecretbackendconfigcmpv2.NewDataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.get"></a>

```go
func Get(index *f64) DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference <a name="DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/datavaultpkisecretbackendconfigcmpv2"

datavaultpkisecretbackendconfigcmpv2.NewDataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.cert">Cert</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Authenticators">DataVaultPkiSecretBackendConfigCmpv2Authenticators</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.cert"></a>

```go
func Cert() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataVaultPkiSecretBackendConfigCmpv2Authenticators
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Authenticators">DataVaultPkiSecretBackendConfigCmpv2Authenticators</a>

---



