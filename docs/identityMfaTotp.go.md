# `vault_identity_mfa_totp`

Refer to the Terraform Registory for docs: [`vault_identity_mfa_totp`](https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/identity_mfa_totp).

# `identityMfaTotp` Submodule <a name="`identityMfaTotp` Submodule" id="@cdktf/provider-vault.identityMfaTotp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityMfaTotp <a name="IdentityMfaTotp" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/identity_mfa_totp vault_identity_mfa_totp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v7/identitymfatotp"

identitymfatotp.NewIdentityMfaTotp(scope Construct, id *string, config IdentityMfaTotpConfig) IdentityMfaTotp
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig">IdentityMfaTotpConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig">IdentityMfaTotpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetDigits">ResetDigits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetKeySize">ResetKeySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetMaxValidationAttempts">ResetMaxValidationAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetQrSize">ResetQrSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetSkew">ResetSkew</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetAlgorithm"></a>

```go
func ResetAlgorithm()
```

##### `ResetDigits` <a name="ResetDigits" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetDigits"></a>

```go
func ResetDigits()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetId"></a>

```go
func ResetId()
```

##### `ResetKeySize` <a name="ResetKeySize" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetKeySize"></a>

```go
func ResetKeySize()
```

##### `ResetMaxValidationAttempts` <a name="ResetMaxValidationAttempts" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetMaxValidationAttempts"></a>

```go
func ResetMaxValidationAttempts()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetPeriod"></a>

```go
func ResetPeriod()
```

##### `ResetQrSize` <a name="ResetQrSize" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetQrSize"></a>

```go
func ResetQrSize()
```

##### `ResetSkew` <a name="ResetSkew" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetSkew"></a>

```go
func ResetSkew()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v7/identitymfatotp"

identitymfatotp.IdentityMfaTotp_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v7/identitymfatotp"

identitymfatotp.IdentityMfaTotp_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v7/identitymfatotp"

identitymfatotp.IdentityMfaTotp_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.methodId">MethodId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.mountAccessor">MountAccessor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespaceId">NamespaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespacePath">NamespacePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.algorithmInput">AlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.digitsInput">DigitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.keySizeInput">KeySizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.maxValidationAttemptsInput">MaxValidationAttemptsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.periodInput">PeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.qrSizeInput">QrSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.skewInput">SkewInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.digits">Digits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.keySize">KeySize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.maxValidationAttempts">MaxValidationAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.period">Period</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.qrSize">QrSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.skew">Skew</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MethodId`<sup>Required</sup> <a name="MethodId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.methodId"></a>

```go
func MethodId() *string
```

- *Type:* *string

---

##### `MountAccessor`<sup>Required</sup> <a name="MountAccessor" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.mountAccessor"></a>

```go
func MountAccessor() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespaceId"></a>

```go
func NamespaceId() *string
```

- *Type:* *string

---

##### `NamespacePath`<sup>Required</sup> <a name="NamespacePath" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespacePath"></a>

```go
func NamespacePath() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.algorithmInput"></a>

```go
func AlgorithmInput() *string
```

- *Type:* *string

---

##### `DigitsInput`<sup>Optional</sup> <a name="DigitsInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.digitsInput"></a>

```go
func DigitsInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `KeySizeInput`<sup>Optional</sup> <a name="KeySizeInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.keySizeInput"></a>

```go
func KeySizeInput() *f64
```

- *Type:* *f64

---

##### `MaxValidationAttemptsInput`<sup>Optional</sup> <a name="MaxValidationAttemptsInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.maxValidationAttemptsInput"></a>

```go
func MaxValidationAttemptsInput() *f64
```

- *Type:* *f64

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.periodInput"></a>

```go
func PeriodInput() *f64
```

- *Type:* *f64

---

##### `QrSizeInput`<sup>Optional</sup> <a name="QrSizeInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.qrSizeInput"></a>

```go
func QrSizeInput() *f64
```

- *Type:* *f64

---

##### `SkewInput`<sup>Optional</sup> <a name="SkewInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.skewInput"></a>

```go
func SkewInput() *f64
```

- *Type:* *f64

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `Digits`<sup>Required</sup> <a name="Digits" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.digits"></a>

```go
func Digits() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `KeySize`<sup>Required</sup> <a name="KeySize" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.keySize"></a>

```go
func KeySize() *f64
```

- *Type:* *f64

---

##### `MaxValidationAttempts`<sup>Required</sup> <a name="MaxValidationAttempts" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.maxValidationAttempts"></a>

```go
func MaxValidationAttempts() *f64
```

- *Type:* *f64

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.period"></a>

```go
func Period() *f64
```

- *Type:* *f64

---

##### `QrSize`<sup>Required</sup> <a name="QrSize" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.qrSize"></a>

```go
func QrSize() *f64
```

- *Type:* *f64

---

##### `Skew`<sup>Required</sup> <a name="Skew" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.skew"></a>

```go
func Skew() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityMfaTotpConfig <a name="IdentityMfaTotpConfig" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v7/identitymfatotp"

&identitymfatotp.IdentityMfaTotpConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Issuer: *string,
	Algorithm: *string,
	Digits: *f64,
	Id: *string,
	KeySize: *f64,
	MaxValidationAttempts: *f64,
	Namespace: *string,
	Period: *f64,
	QrSize: *f64,
	Skew: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.issuer">Issuer</a></code> | <code>*string</code> | The name of the key's issuing organization. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.algorithm">Algorithm</a></code> | <code>*string</code> | Specifies the hashing algorithm used to generate the TOTP code. Options include SHA1, SHA256, SHA512. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.digits">Digits</a></code> | <code>*f64</code> | The number of digits in the generated TOTP token. This value can either be 6 or 8. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/identity_mfa_totp#id IdentityMfaTotp#id}. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.keySize">KeySize</a></code> | <code>*f64</code> | Specifies the size in bytes of the generated key. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.maxValidationAttempts">MaxValidationAttempts</a></code> | <code>*f64</code> | The maximum number of consecutive failed validation attempts allowed. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.period">Period</a></code> | <code>*f64</code> | The length of time in seconds used to generate a counter for the TOTP token calculation. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.qrSize">QrSize</a></code> | <code>*f64</code> | The pixel size of the generated square QR code. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.skew">Skew</a></code> | <code>*f64</code> | The number of delay periods that are allowed when validating a TOTP token. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

The name of the key's issuing organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/identity_mfa_totp#issuer IdentityMfaTotp#issuer}

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.algorithm"></a>

```go
Algorithm *string
```

- *Type:* *string

Specifies the hashing algorithm used to generate the TOTP code. Options include SHA1, SHA256, SHA512.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/identity_mfa_totp#algorithm IdentityMfaTotp#algorithm}

---

##### `Digits`<sup>Optional</sup> <a name="Digits" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.digits"></a>

```go
Digits *f64
```

- *Type:* *f64

The number of digits in the generated TOTP token. This value can either be 6 or 8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/identity_mfa_totp#digits IdentityMfaTotp#digits}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/identity_mfa_totp#id IdentityMfaTotp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeySize`<sup>Optional</sup> <a name="KeySize" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.keySize"></a>

```go
KeySize *f64
```

- *Type:* *f64

Specifies the size in bytes of the generated key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/identity_mfa_totp#key_size IdentityMfaTotp#key_size}

---

##### `MaxValidationAttempts`<sup>Optional</sup> <a name="MaxValidationAttempts" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.maxValidationAttempts"></a>

```go
MaxValidationAttempts *f64
```

- *Type:* *f64

The maximum number of consecutive failed validation attempts allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/identity_mfa_totp#max_validation_attempts IdentityMfaTotp#max_validation_attempts}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/identity_mfa_totp#namespace IdentityMfaTotp#namespace}

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.period"></a>

```go
Period *f64
```

- *Type:* *f64

The length of time in seconds used to generate a counter for the TOTP token calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/identity_mfa_totp#period IdentityMfaTotp#period}

---

##### `QrSize`<sup>Optional</sup> <a name="QrSize" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.qrSize"></a>

```go
QrSize *f64
```

- *Type:* *f64

The pixel size of the generated square QR code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/identity_mfa_totp#qr_size IdentityMfaTotp#qr_size}

---

##### `Skew`<sup>Optional</sup> <a name="Skew" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.skew"></a>

```go
Skew *f64
```

- *Type:* *f64

The number of delay periods that are allowed when validating a TOTP token.

This value can either be 0 or 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/identity_mfa_totp#skew IdentityMfaTotp#skew}

---



