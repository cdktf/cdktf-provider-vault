# `dataVaultKvSecretSubkeysV2` Submodule <a name="`dataVaultKvSecretSubkeysV2` Submodule" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultKvSecretSubkeysV2 <a name="DataVaultKvSecretSubkeysV2" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/kv_secret_subkeys_v2 vault_kv_secret_subkeys_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/datavaultkvsecretsubkeysv2"

datavaultkvsecretsubkeysv2.NewDataVaultKvSecretSubkeysV2(scope Construct, id *string, config DataVaultKvSecretSubkeysV2Config) DataVaultKvSecretSubkeysV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config">DataVaultKvSecretSubkeysV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config">DataVaultKvSecretSubkeysV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.resetDepth">ResetDepth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDepth` <a name="ResetDepth" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.resetDepth"></a>

```go
func ResetDepth()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.resetVersion"></a>

```go
func ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultKvSecretSubkeysV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/datavaultkvsecretsubkeysv2"

datavaultkvsecretsubkeysv2.DataVaultKvSecretSubkeysV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/datavaultkvsecretsubkeysv2"

datavaultkvsecretsubkeysv2.DataVaultKvSecretSubkeysV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/datavaultkvsecretsubkeysv2"

datavaultkvsecretsubkeysv2.DataVaultKvSecretSubkeysV2_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/datavaultkvsecretsubkeysv2"

datavaultkvsecretsubkeysv2.DataVaultKvSecretSubkeysV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataVaultKvSecretSubkeysV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataVaultKvSecretSubkeysV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataVaultKvSecretSubkeysV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/kv_secret_subkeys_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultKvSecretSubkeysV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.data">Data</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.dataJson">DataJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.depthInput">DepthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.versionInput">VersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.depth">Depth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.version">Version</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.data"></a>

```go
func Data() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DataJson`<sup>Required</sup> <a name="DataJson" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.dataJson"></a>

```go
func DataJson() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `DepthInput`<sup>Optional</sup> <a name="DepthInput" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.depthInput"></a>

```go
func DepthInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.versionInput"></a>

```go
func VersionInput() *f64
```

- *Type:* *f64

---

##### `Depth`<sup>Required</sup> <a name="Depth" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.depth"></a>

```go
func Depth() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultKvSecretSubkeysV2Config <a name="DataVaultKvSecretSubkeysV2Config" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/datavaultkvsecretsubkeysv2"

&datavaultkvsecretsubkeysv2.DataVaultKvSecretSubkeysV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Mount: *string,
	Name: *string,
	Depth: *f64,
	Id: *string,
	Namespace: *string,
	Version: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.mount">Mount</a></code> | <code>*string</code> | Path where KV-V2 engine is mounted. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.name">Name</a></code> | <code>*string</code> | Full name of the secret. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.depth">Depth</a></code> | <code>*f64</code> | Specifies the deepest nesting level to provide in the output.If non-zero, keys that reside at the specified depth value will be artificially treated as leaves and will thus be 'null' even if further underlying sub-keys exist. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/kv_secret_subkeys_v2#id DataVaultKvSecretSubkeysV2#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.version">Version</a></code> | <code>*f64</code> | Specifies the version to return. If not set the latest version is returned. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

Path where KV-V2 engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/kv_secret_subkeys_v2#mount DataVaultKvSecretSubkeysV2#mount}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Full name of the secret.

For a nested secret, the name is the nested path excluding the mount and data prefix. For example, for a secret at 'kvv2/data/foo/bar/baz', the name is 'foo/bar/baz'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/kv_secret_subkeys_v2#name DataVaultKvSecretSubkeysV2#name}

---

##### `Depth`<sup>Optional</sup> <a name="Depth" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.depth"></a>

```go
Depth *f64
```

- *Type:* *f64

Specifies the deepest nesting level to provide in the output.If non-zero, keys that reside at the specified depth value will be artificially treated as leaves and will thus be 'null' even if further underlying sub-keys exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/kv_secret_subkeys_v2#depth DataVaultKvSecretSubkeysV2#depth}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/kv_secret_subkeys_v2#id DataVaultKvSecretSubkeysV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/kv_secret_subkeys_v2#namespace DataVaultKvSecretSubkeysV2#namespace}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.version"></a>

```go
Version *f64
```

- *Type:* *f64

Specifies the version to return. If not set the latest version is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/kv_secret_subkeys_v2#version DataVaultKvSecretSubkeysV2#version}

---



