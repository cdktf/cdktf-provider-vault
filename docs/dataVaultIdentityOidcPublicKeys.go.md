# `dataVaultIdentityOidcPublicKeys` Submodule <a name="`dataVaultIdentityOidcPublicKeys` Submodule" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultIdentityOidcPublicKeys <a name="DataVaultIdentityOidcPublicKeys" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/identity_oidc_public_keys vault_identity_oidc_public_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaultidentityoidcpublickeys"

datavaultidentityoidcpublickeys.NewDataVaultIdentityOidcPublicKeys(scope Construct, id *string, config DataVaultIdentityOidcPublicKeysConfig) DataVaultIdentityOidcPublicKeys
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig">DataVaultIdentityOidcPublicKeysConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig">DataVaultIdentityOidcPublicKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultIdentityOidcPublicKeys resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaultidentityoidcpublickeys"

datavaultidentityoidcpublickeys.DataVaultIdentityOidcPublicKeys_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaultidentityoidcpublickeys"

datavaultidentityoidcpublickeys.DataVaultIdentityOidcPublicKeys_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaultidentityoidcpublickeys"

datavaultidentityoidcpublickeys.DataVaultIdentityOidcPublicKeys_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaultidentityoidcpublickeys"

datavaultidentityoidcpublickeys.DataVaultIdentityOidcPublicKeys_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataVaultIdentityOidcPublicKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataVaultIdentityOidcPublicKeys to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataVaultIdentityOidcPublicKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/identity_oidc_public_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultIdentityOidcPublicKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.keys">Keys</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.keys"></a>

```go
func Keys() StringMapList
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMapList

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultIdentityOidcPublicKeysConfig <a name="DataVaultIdentityOidcPublicKeysConfig" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/datavaultidentityoidcpublickeys"

&datavaultidentityoidcpublickeys.DataVaultIdentityOidcPublicKeysConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.name">Name</a></code> | <code>*string</code> | The name of the provider. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/identity_oidc_public_keys#id DataVaultIdentityOidcPublicKeys#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/identity_oidc_public_keys#name DataVaultIdentityOidcPublicKeys#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/identity_oidc_public_keys#id DataVaultIdentityOidcPublicKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/identity_oidc_public_keys#namespace DataVaultIdentityOidcPublicKeys#namespace}

---



