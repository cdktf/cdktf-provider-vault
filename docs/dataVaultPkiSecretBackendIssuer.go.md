# `dataVaultPkiSecretBackendIssuer` Submodule <a name="`dataVaultPkiSecretBackendIssuer` Submodule" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultPkiSecretBackendIssuer <a name="DataVaultPkiSecretBackendIssuer" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_issuer vault_pki_secret_backend_issuer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/datavaultpkisecretbackendissuer"

datavaultpkisecretbackendissuer.NewDataVaultPkiSecretBackendIssuer(scope Construct, id *string, config DataVaultPkiSecretBackendIssuerConfig) DataVaultPkiSecretBackendIssuer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig">DataVaultPkiSecretBackendIssuerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig">DataVaultPkiSecretBackendIssuerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetDisableCriticalExtensionChecks">ResetDisableCriticalExtensionChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetDisableNameChecks">ResetDisableNameChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetDisableNameConstraintChecks">ResetDisableNameConstraintChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetDisablePathLengthChecks">ResetDisablePathLengthChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDisableCriticalExtensionChecks` <a name="ResetDisableCriticalExtensionChecks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetDisableCriticalExtensionChecks"></a>

```go
func ResetDisableCriticalExtensionChecks()
```

##### `ResetDisableNameChecks` <a name="ResetDisableNameChecks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetDisableNameChecks"></a>

```go
func ResetDisableNameChecks()
```

##### `ResetDisableNameConstraintChecks` <a name="ResetDisableNameConstraintChecks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetDisableNameConstraintChecks"></a>

```go
func ResetDisableNameConstraintChecks()
```

##### `ResetDisablePathLengthChecks` <a name="ResetDisablePathLengthChecks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetDisablePathLengthChecks"></a>

```go
func ResetDisablePathLengthChecks()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultPkiSecretBackendIssuer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/datavaultpkisecretbackendissuer"

datavaultpkisecretbackendissuer.DataVaultPkiSecretBackendIssuer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/datavaultpkisecretbackendissuer"

datavaultpkisecretbackendissuer.DataVaultPkiSecretBackendIssuer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/datavaultpkisecretbackendissuer"

datavaultpkisecretbackendissuer.DataVaultPkiSecretBackendIssuer_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/datavaultpkisecretbackendissuer"

datavaultpkisecretbackendissuer.DataVaultPkiSecretBackendIssuer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataVaultPkiSecretBackendIssuer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataVaultPkiSecretBackendIssuer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataVaultPkiSecretBackendIssuer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_issuer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultPkiSecretBackendIssuer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.caChain">CaChain</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.issuerId">IssuerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.issuerName">IssuerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.leafNotAfterBehavior">LeafNotAfterBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.manualChain">ManualChain</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.usage">Usage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableCriticalExtensionChecksInput">DisableCriticalExtensionChecksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableNameChecksInput">DisableNameChecksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableNameConstraintChecksInput">DisableNameConstraintChecksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disablePathLengthChecksInput">DisablePathLengthChecksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.issuerRefInput">IssuerRefInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableCriticalExtensionChecks">DisableCriticalExtensionChecks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableNameChecks">DisableNameChecks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableNameConstraintChecks">DisableNameConstraintChecks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disablePathLengthChecks">DisablePathLengthChecks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.issuerRef">IssuerRef</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CaChain`<sup>Required</sup> <a name="CaChain" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.caChain"></a>

```go
func CaChain() *[]*string
```

- *Type:* *[]*string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `IssuerId`<sup>Required</sup> <a name="IssuerId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.issuerId"></a>

```go
func IssuerId() *string
```

- *Type:* *string

---

##### `IssuerName`<sup>Required</sup> <a name="IssuerName" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.issuerName"></a>

```go
func IssuerName() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `LeafNotAfterBehavior`<sup>Required</sup> <a name="LeafNotAfterBehavior" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.leafNotAfterBehavior"></a>

```go
func LeafNotAfterBehavior() *string
```

- *Type:* *string

---

##### `ManualChain`<sup>Required</sup> <a name="ManualChain" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.manualChain"></a>

```go
func ManualChain() *[]*string
```

- *Type:* *[]*string

---

##### `Usage`<sup>Required</sup> <a name="Usage" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.usage"></a>

```go
func Usage() *string
```

- *Type:* *string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `DisableCriticalExtensionChecksInput`<sup>Optional</sup> <a name="DisableCriticalExtensionChecksInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableCriticalExtensionChecksInput"></a>

```go
func DisableCriticalExtensionChecksInput() interface{}
```

- *Type:* interface{}

---

##### `DisableNameChecksInput`<sup>Optional</sup> <a name="DisableNameChecksInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableNameChecksInput"></a>

```go
func DisableNameChecksInput() interface{}
```

- *Type:* interface{}

---

##### `DisableNameConstraintChecksInput`<sup>Optional</sup> <a name="DisableNameConstraintChecksInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableNameConstraintChecksInput"></a>

```go
func DisableNameConstraintChecksInput() interface{}
```

- *Type:* interface{}

---

##### `DisablePathLengthChecksInput`<sup>Optional</sup> <a name="DisablePathLengthChecksInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disablePathLengthChecksInput"></a>

```go
func DisablePathLengthChecksInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IssuerRefInput`<sup>Optional</sup> <a name="IssuerRefInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.issuerRefInput"></a>

```go
func IssuerRefInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `DisableCriticalExtensionChecks`<sup>Required</sup> <a name="DisableCriticalExtensionChecks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableCriticalExtensionChecks"></a>

```go
func DisableCriticalExtensionChecks() interface{}
```

- *Type:* interface{}

---

##### `DisableNameChecks`<sup>Required</sup> <a name="DisableNameChecks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableNameChecks"></a>

```go
func DisableNameChecks() interface{}
```

- *Type:* interface{}

---

##### `DisableNameConstraintChecks`<sup>Required</sup> <a name="DisableNameConstraintChecks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableNameConstraintChecks"></a>

```go
func DisableNameConstraintChecks() interface{}
```

- *Type:* interface{}

---

##### `DisablePathLengthChecks`<sup>Required</sup> <a name="DisablePathLengthChecks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disablePathLengthChecks"></a>

```go
func DisablePathLengthChecks() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IssuerRef`<sup>Required</sup> <a name="IssuerRef" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.issuerRef"></a>

```go
func IssuerRef() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultPkiSecretBackendIssuerConfig <a name="DataVaultPkiSecretBackendIssuerConfig" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/datavaultpkisecretbackendissuer"

&datavaultpkisecretbackendissuer.DataVaultPkiSecretBackendIssuerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	IssuerRef: *string,
	DisableCriticalExtensionChecks: interface{},
	DisableNameChecks: interface{},
	DisableNameConstraintChecks: interface{},
	DisablePathLengthChecks: interface{},
	Id: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.backend">Backend</a></code> | <code>*string</code> | Full path where PKI backend is mounted. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.issuerRef">IssuerRef</a></code> | <code>*string</code> | Reference to an existing issuer. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.disableCriticalExtensionChecks">DisableCriticalExtensionChecks</a></code> | <code>interface{}</code> | This determines whether this issuer is able to issue certificates where the chain of trust (including the issued certificate) contain critical extensions not processed by Vault. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.disableNameChecks">DisableNameChecks</a></code> | <code>interface{}</code> | This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) contains a link in which the subject of the issuing certificate does not match the named issuer of the certificate it signed. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.disableNameConstraintChecks">DisableNameConstraintChecks</a></code> | <code>interface{}</code> | This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) violates the name constraints critical extension of one of the issuer certificates in the chain. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.disablePathLengthChecks">DisablePathLengthChecks</a></code> | <code>interface{}</code> | This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) is longer than allowed by a certificate authority in that chain. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_issuer#id DataVaultPkiSecretBackendIssuer#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

Full path where PKI backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_issuer#backend DataVaultPkiSecretBackendIssuer#backend}

---

##### `IssuerRef`<sup>Required</sup> <a name="IssuerRef" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.issuerRef"></a>

```go
IssuerRef *string
```

- *Type:* *string

Reference to an existing issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_issuer#issuer_ref DataVaultPkiSecretBackendIssuer#issuer_ref}

---

##### `DisableCriticalExtensionChecks`<sup>Optional</sup> <a name="DisableCriticalExtensionChecks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.disableCriticalExtensionChecks"></a>

```go
DisableCriticalExtensionChecks interface{}
```

- *Type:* interface{}

This determines whether this issuer is able to issue certificates where the chain of trust (including the issued certificate) contain critical extensions not processed by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_issuer#disable_critical_extension_checks DataVaultPkiSecretBackendIssuer#disable_critical_extension_checks}

---

##### `DisableNameChecks`<sup>Optional</sup> <a name="DisableNameChecks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.disableNameChecks"></a>

```go
DisableNameChecks interface{}
```

- *Type:* interface{}

This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) contains a link in which the subject of the issuing certificate does not match the named issuer of the certificate it signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_issuer#disable_name_checks DataVaultPkiSecretBackendIssuer#disable_name_checks}

---

##### `DisableNameConstraintChecks`<sup>Optional</sup> <a name="DisableNameConstraintChecks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.disableNameConstraintChecks"></a>

```go
DisableNameConstraintChecks interface{}
```

- *Type:* interface{}

This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) violates the name constraints critical extension of one of the issuer certificates in the chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_issuer#disable_name_constraint_checks DataVaultPkiSecretBackendIssuer#disable_name_constraint_checks}

---

##### `DisablePathLengthChecks`<sup>Optional</sup> <a name="DisablePathLengthChecks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.disablePathLengthChecks"></a>

```go
DisablePathLengthChecks interface{}
```

- *Type:* interface{}

This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) is longer than allowed by a certificate authority in that chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_issuer#disable_path_length_checks DataVaultPkiSecretBackendIssuer#disable_path_length_checks}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_issuer#id DataVaultPkiSecretBackendIssuer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_issuer#namespace DataVaultPkiSecretBackendIssuer#namespace}

---



