# `vault_pki_secret_backend_sign`

Refer to the Terraform Registory for docs: [`vault_pki_secret_backend_sign`](https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_sign).

# `pkiSecretBackendSign` Submodule <a name="`pkiSecretBackendSign` Submodule" id="@cdktf/provider-vault.pkiSecretBackendSign"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendSign <a name="PkiSecretBackendSign" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_sign vault_pki_secret_backend_sign}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/pkisecretbackendsign"

pkisecretbackendsign.NewPkiSecretBackendSign(scope Construct, id *string, config PkiSecretBackendSignConfig) PkiSecretBackendSign
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig">PkiSecretBackendSignConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig">PkiSecretBackendSignConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetAltNames">ResetAltNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetAutoRenew">ResetAutoRenew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetExcludeCnFromSans">ResetExcludeCnFromSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetIpSans">ResetIpSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetMinSecondsRemaining">ResetMinSecondsRemaining</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetOtherSans">ResetOtherSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetUriSans">ResetUriSans</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAltNames` <a name="ResetAltNames" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetAltNames"></a>

```go
func ResetAltNames()
```

##### `ResetAutoRenew` <a name="ResetAutoRenew" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetAutoRenew"></a>

```go
func ResetAutoRenew()
```

##### `ResetExcludeCnFromSans` <a name="ResetExcludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetExcludeCnFromSans"></a>

```go
func ResetExcludeCnFromSans()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetFormat"></a>

```go
func ResetFormat()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetId"></a>

```go
func ResetId()
```

##### `ResetIpSans` <a name="ResetIpSans" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetIpSans"></a>

```go
func ResetIpSans()
```

##### `ResetMinSecondsRemaining` <a name="ResetMinSecondsRemaining" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetMinSecondsRemaining"></a>

```go
func ResetMinSecondsRemaining()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetOtherSans` <a name="ResetOtherSans" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetOtherSans"></a>

```go
func ResetOtherSans()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetTtl"></a>

```go
func ResetTtl()
```

##### `ResetUriSans` <a name="ResetUriSans" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetUriSans"></a>

```go
func ResetUriSans()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/pkisecretbackendsign"

pkisecretbackendsign.PkiSecretBackendSign_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/pkisecretbackendsign"

pkisecretbackendsign.PkiSecretBackendSign_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/pkisecretbackendsign"

pkisecretbackendsign.PkiSecretBackendSign_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.caChain">CaChain</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.expiration">Expiration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.issuingCa">IssuingCa</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.renewPending">RenewPending</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.serial">Serial</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.altNamesInput">AltNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.autoRenewInput">AutoRenewInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.commonNameInput">CommonNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.csrInput">CsrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.excludeCnFromSansInput">ExcludeCnFromSansInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.ipSansInput">IpSansInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.minSecondsRemainingInput">MinSecondsRemainingInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.otherSansInput">OtherSansInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.ttlInput">TtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.uriSansInput">UriSansInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.altNames">AltNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.autoRenew">AutoRenew</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.commonName">CommonName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.csr">Csr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.excludeCnFromSans">ExcludeCnFromSans</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.ipSans">IpSans</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.minSecondsRemaining">MinSecondsRemaining</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.otherSans">OtherSans</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.ttl">Ttl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.uriSans">UriSans</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CaChain`<sup>Required</sup> <a name="CaChain" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.caChain"></a>

```go
func CaChain() *[]*string
```

- *Type:* *[]*string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.expiration"></a>

```go
func Expiration() *f64
```

- *Type:* *f64

---

##### `IssuingCa`<sup>Required</sup> <a name="IssuingCa" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.issuingCa"></a>

```go
func IssuingCa() *string
```

- *Type:* *string

---

##### `RenewPending`<sup>Required</sup> <a name="RenewPending" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.renewPending"></a>

```go
func RenewPending() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Serial`<sup>Required</sup> <a name="Serial" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.serial"></a>

```go
func Serial() *string
```

- *Type:* *string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.serialNumber"></a>

```go
func SerialNumber() *string
```

- *Type:* *string

---

##### `AltNamesInput`<sup>Optional</sup> <a name="AltNamesInput" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.altNamesInput"></a>

```go
func AltNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AutoRenewInput`<sup>Optional</sup> <a name="AutoRenewInput" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.autoRenewInput"></a>

```go
func AutoRenewInput() interface{}
```

- *Type:* interface{}

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.commonNameInput"></a>

```go
func CommonNameInput() *string
```

- *Type:* *string

---

##### `CsrInput`<sup>Optional</sup> <a name="CsrInput" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.csrInput"></a>

```go
func CsrInput() *string
```

- *Type:* *string

---

##### `ExcludeCnFromSansInput`<sup>Optional</sup> <a name="ExcludeCnFromSansInput" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.excludeCnFromSansInput"></a>

```go
func ExcludeCnFromSansInput() interface{}
```

- *Type:* interface{}

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpSansInput`<sup>Optional</sup> <a name="IpSansInput" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.ipSansInput"></a>

```go
func IpSansInput() *[]*string
```

- *Type:* *[]*string

---

##### `MinSecondsRemainingInput`<sup>Optional</sup> <a name="MinSecondsRemainingInput" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.minSecondsRemainingInput"></a>

```go
func MinSecondsRemainingInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OtherSansInput`<sup>Optional</sup> <a name="OtherSansInput" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.otherSansInput"></a>

```go
func OtherSansInput() *[]*string
```

- *Type:* *[]*string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.ttlInput"></a>

```go
func TtlInput() *string
```

- *Type:* *string

---

##### `UriSansInput`<sup>Optional</sup> <a name="UriSansInput" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.uriSansInput"></a>

```go
func UriSansInput() *[]*string
```

- *Type:* *[]*string

---

##### `AltNames`<sup>Required</sup> <a name="AltNames" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.altNames"></a>

```go
func AltNames() *[]*string
```

- *Type:* *[]*string

---

##### `AutoRenew`<sup>Required</sup> <a name="AutoRenew" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.autoRenew"></a>

```go
func AutoRenew() interface{}
```

- *Type:* interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.commonName"></a>

```go
func CommonName() *string
```

- *Type:* *string

---

##### `Csr`<sup>Required</sup> <a name="Csr" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.csr"></a>

```go
func Csr() *string
```

- *Type:* *string

---

##### `ExcludeCnFromSans`<sup>Required</sup> <a name="ExcludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.excludeCnFromSans"></a>

```go
func ExcludeCnFromSans() interface{}
```

- *Type:* interface{}

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpSans`<sup>Required</sup> <a name="IpSans" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.ipSans"></a>

```go
func IpSans() *[]*string
```

- *Type:* *[]*string

---

##### `MinSecondsRemaining`<sup>Required</sup> <a name="MinSecondsRemaining" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.minSecondsRemaining"></a>

```go
func MinSecondsRemaining() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `OtherSans`<sup>Required</sup> <a name="OtherSans" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.otherSans"></a>

```go
func OtherSans() *[]*string
```

- *Type:* *[]*string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.ttl"></a>

```go
func Ttl() *string
```

- *Type:* *string

---

##### `UriSans`<sup>Required</sup> <a name="UriSans" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.uriSans"></a>

```go
func UriSans() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendSignConfig <a name="PkiSecretBackendSignConfig" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/pkisecretbackendsign"

&pkisecretbackendsign.PkiSecretBackendSignConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	CommonName: *string,
	Csr: *string,
	Name: *string,
	AltNames: *[]*string,
	AutoRenew: interface{},
	ExcludeCnFromSans: interface{},
	Format: *string,
	Id: *string,
	IpSans: *[]*string,
	MinSecondsRemaining: *f64,
	Namespace: *string,
	OtherSans: *[]*string,
	Ttl: *string,
	UriSans: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.backend">Backend</a></code> | <code>*string</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.commonName">CommonName</a></code> | <code>*string</code> | CN of intermediate to create. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.csr">Csr</a></code> | <code>*string</code> | The CSR. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.name">Name</a></code> | <code>*string</code> | Name of the role to create the certificate against. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.altNames">AltNames</a></code> | <code>*[]*string</code> | List of alternative names. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.autoRenew">AutoRenew</a></code> | <code>interface{}</code> | If enabled, a new certificate will be generated if the expiration is within min_seconds_remaining. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.excludeCnFromSans">ExcludeCnFromSans</a></code> | <code>interface{}</code> | Flag to exclude CN from SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.format">Format</a></code> | <code>*string</code> | The format of data. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_sign#id PkiSecretBackendSign#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.ipSans">IpSans</a></code> | <code>*[]*string</code> | List of alternative IPs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.minSecondsRemaining">MinSecondsRemaining</a></code> | <code>*f64</code> | Generate a new certificate when the expiration is within this number of seconds. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.otherSans">OtherSans</a></code> | <code>*[]*string</code> | List of other SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.ttl">Ttl</a></code> | <code>*string</code> | Time to live. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.uriSans">UriSans</a></code> | <code>*[]*string</code> | List of alternative URIs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_sign#backend PkiSecretBackendSign#backend}

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.commonName"></a>

```go
CommonName *string
```

- *Type:* *string

CN of intermediate to create.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_sign#common_name PkiSecretBackendSign#common_name}

---

##### `Csr`<sup>Required</sup> <a name="Csr" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.csr"></a>

```go
Csr *string
```

- *Type:* *string

The CSR.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_sign#csr PkiSecretBackendSign#csr}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the role to create the certificate against.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_sign#name PkiSecretBackendSign#name}

---

##### `AltNames`<sup>Optional</sup> <a name="AltNames" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.altNames"></a>

```go
AltNames *[]*string
```

- *Type:* *[]*string

List of alternative names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_sign#alt_names PkiSecretBackendSign#alt_names}

---

##### `AutoRenew`<sup>Optional</sup> <a name="AutoRenew" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.autoRenew"></a>

```go
AutoRenew interface{}
```

- *Type:* interface{}

If enabled, a new certificate will be generated if the expiration is within min_seconds_remaining.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_sign#auto_renew PkiSecretBackendSign#auto_renew}

---

##### `ExcludeCnFromSans`<sup>Optional</sup> <a name="ExcludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.excludeCnFromSans"></a>

```go
ExcludeCnFromSans interface{}
```

- *Type:* interface{}

Flag to exclude CN from SANs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_sign#exclude_cn_from_sans PkiSecretBackendSign#exclude_cn_from_sans}

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.format"></a>

```go
Format *string
```

- *Type:* *string

The format of data.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_sign#format PkiSecretBackendSign#format}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_sign#id PkiSecretBackendSign#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpSans`<sup>Optional</sup> <a name="IpSans" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.ipSans"></a>

```go
IpSans *[]*string
```

- *Type:* *[]*string

List of alternative IPs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_sign#ip_sans PkiSecretBackendSign#ip_sans}

---

##### `MinSecondsRemaining`<sup>Optional</sup> <a name="MinSecondsRemaining" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.minSecondsRemaining"></a>

```go
MinSecondsRemaining *f64
```

- *Type:* *f64

Generate a new certificate when the expiration is within this number of seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_sign#min_seconds_remaining PkiSecretBackendSign#min_seconds_remaining}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_sign#namespace PkiSecretBackendSign#namespace}

---

##### `OtherSans`<sup>Optional</sup> <a name="OtherSans" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.otherSans"></a>

```go
OtherSans *[]*string
```

- *Type:* *[]*string

List of other SANs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_sign#other_sans PkiSecretBackendSign#other_sans}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.ttl"></a>

```go
Ttl *string
```

- *Type:* *string

Time to live.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_sign#ttl PkiSecretBackendSign#ttl}

---

##### `UriSans`<sup>Optional</sup> <a name="UriSans" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.uriSans"></a>

```go
UriSans *[]*string
```

- *Type:* *[]*string

List of alternative URIs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_sign#uri_sans PkiSecretBackendSign#uri_sans}

---



