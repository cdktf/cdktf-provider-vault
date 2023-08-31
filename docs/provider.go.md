# `provider`

Refer to the Terraform Registory for docs: [`vault`](https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-vault.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultProvider <a name="VaultProvider" id="@cdktf/provider-vault.provider.VaultProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.provider.VaultProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/provider"

provider.NewVaultProvider(scope Construct, id *string, config VaultProviderConfig) VaultProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig">VaultProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderConfig">VaultProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAddAddressToEnv">ResetAddAddressToEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLogin">ResetAuthLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginAws">ResetAuthLoginAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginAzure">ResetAuthLoginAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginCert">ResetAuthLoginCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginGcp">ResetAuthLoginGcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginJwt">ResetAuthLoginJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginKerberos">ResetAuthLoginKerberos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginOci">ResetAuthLoginOci</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginOidc">ResetAuthLoginOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginRadius">ResetAuthLoginRadius</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginTokenFile">ResetAuthLoginTokenFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginUserpass">ResetAuthLoginUserpass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetCaCertDir">ResetCaCertDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetCaCertFile">ResetCaCertFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetClientAuth">ResetClientAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetMaxLeaseTtlSeconds">ResetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetMaxRetriesCcc">ResetMaxRetriesCcc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetSkipChildToken">ResetSkipChildToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetSkipGetVaultVersion">ResetSkipGetVaultVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetSkipTlsVerify">ResetSkipTlsVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetTlsServerName">ResetTlsServerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetTokenName">ResetTokenName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetVaultVersionOverride">ResetVaultVersionOverride</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.provider.VaultProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.provider.VaultProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.provider.VaultProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.provider.VaultProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.provider.VaultProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.provider.VaultProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.provider.VaultProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.provider.VaultProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.provider.VaultProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAddAddressToEnv` <a name="ResetAddAddressToEnv" id="@cdktf/provider-vault.provider.VaultProvider.resetAddAddressToEnv"></a>

```go
func ResetAddAddressToEnv()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-vault.provider.VaultProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetAuthLogin` <a name="ResetAuthLogin" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLogin"></a>

```go
func ResetAuthLogin()
```

##### `ResetAuthLoginAws` <a name="ResetAuthLoginAws" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginAws"></a>

```go
func ResetAuthLoginAws()
```

##### `ResetAuthLoginAzure` <a name="ResetAuthLoginAzure" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginAzure"></a>

```go
func ResetAuthLoginAzure()
```

##### `ResetAuthLoginCert` <a name="ResetAuthLoginCert" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginCert"></a>

```go
func ResetAuthLoginCert()
```

##### `ResetAuthLoginGcp` <a name="ResetAuthLoginGcp" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginGcp"></a>

```go
func ResetAuthLoginGcp()
```

##### `ResetAuthLoginJwt` <a name="ResetAuthLoginJwt" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginJwt"></a>

```go
func ResetAuthLoginJwt()
```

##### `ResetAuthLoginKerberos` <a name="ResetAuthLoginKerberos" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginKerberos"></a>

```go
func ResetAuthLoginKerberos()
```

##### `ResetAuthLoginOci` <a name="ResetAuthLoginOci" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginOci"></a>

```go
func ResetAuthLoginOci()
```

##### `ResetAuthLoginOidc` <a name="ResetAuthLoginOidc" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginOidc"></a>

```go
func ResetAuthLoginOidc()
```

##### `ResetAuthLoginRadius` <a name="ResetAuthLoginRadius" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginRadius"></a>

```go
func ResetAuthLoginRadius()
```

##### `ResetAuthLoginTokenFile` <a name="ResetAuthLoginTokenFile" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginTokenFile"></a>

```go
func ResetAuthLoginTokenFile()
```

##### `ResetAuthLoginUserpass` <a name="ResetAuthLoginUserpass" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginUserpass"></a>

```go
func ResetAuthLoginUserpass()
```

##### `ResetCaCertDir` <a name="ResetCaCertDir" id="@cdktf/provider-vault.provider.VaultProvider.resetCaCertDir"></a>

```go
func ResetCaCertDir()
```

##### `ResetCaCertFile` <a name="ResetCaCertFile" id="@cdktf/provider-vault.provider.VaultProvider.resetCaCertFile"></a>

```go
func ResetCaCertFile()
```

##### `ResetClientAuth` <a name="ResetClientAuth" id="@cdktf/provider-vault.provider.VaultProvider.resetClientAuth"></a>

```go
func ResetClientAuth()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-vault.provider.VaultProvider.resetHeaders"></a>

```go
func ResetHeaders()
```

##### `ResetMaxLeaseTtlSeconds` <a name="ResetMaxLeaseTtlSeconds" id="@cdktf/provider-vault.provider.VaultProvider.resetMaxLeaseTtlSeconds"></a>

```go
func ResetMaxLeaseTtlSeconds()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktf/provider-vault.provider.VaultProvider.resetMaxRetries"></a>

```go
func ResetMaxRetries()
```

##### `ResetMaxRetriesCcc` <a name="ResetMaxRetriesCcc" id="@cdktf/provider-vault.provider.VaultProvider.resetMaxRetriesCcc"></a>

```go
func ResetMaxRetriesCcc()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.provider.VaultProvider.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetSkipChildToken` <a name="ResetSkipChildToken" id="@cdktf/provider-vault.provider.VaultProvider.resetSkipChildToken"></a>

```go
func ResetSkipChildToken()
```

##### `ResetSkipGetVaultVersion` <a name="ResetSkipGetVaultVersion" id="@cdktf/provider-vault.provider.VaultProvider.resetSkipGetVaultVersion"></a>

```go
func ResetSkipGetVaultVersion()
```

##### `ResetSkipTlsVerify` <a name="ResetSkipTlsVerify" id="@cdktf/provider-vault.provider.VaultProvider.resetSkipTlsVerify"></a>

```go
func ResetSkipTlsVerify()
```

##### `ResetTlsServerName` <a name="ResetTlsServerName" id="@cdktf/provider-vault.provider.VaultProvider.resetTlsServerName"></a>

```go
func ResetTlsServerName()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-vault.provider.VaultProvider.resetToken"></a>

```go
func ResetToken()
```

##### `ResetTokenName` <a name="ResetTokenName" id="@cdktf/provider-vault.provider.VaultProvider.resetTokenName"></a>

```go
func ResetTokenName()
```

##### `ResetVaultVersionOverride` <a name="ResetVaultVersionOverride" id="@cdktf/provider-vault.provider.VaultProvider.resetVaultVersionOverride"></a>

```go
func ResetVaultVersionOverride()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.provider.VaultProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/provider"

provider.VaultProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.provider.VaultProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.provider.VaultProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/provider"

provider.VaultProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.provider.VaultProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-vault.provider.VaultProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/provider"

provider.VaultProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.provider.VaultProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.addAddressToEnvInput">AddAddressToEnvInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginAwsInput">AuthLoginAwsInput</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws">VaultProviderAuthLoginAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginAzureInput">AuthLoginAzureInput</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure">VaultProviderAuthLoginAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginCertInput">AuthLoginCertInput</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert">VaultProviderAuthLoginCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginGcpInput">AuthLoginGcpInput</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp">VaultProviderAuthLoginGcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginInput">AuthLoginInput</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin">VaultProviderAuthLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginJwtInput">AuthLoginJwtInput</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt">VaultProviderAuthLoginJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginKerberosInput">AuthLoginKerberosInput</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos">VaultProviderAuthLoginKerberos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginOciInput">AuthLoginOciInput</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci">VaultProviderAuthLoginOci</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginOidcInput">AuthLoginOidcInput</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc">VaultProviderAuthLoginOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginRadiusInput">AuthLoginRadiusInput</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius">VaultProviderAuthLoginRadius</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginTokenFileInput">AuthLoginTokenFileInput</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile">VaultProviderAuthLoginTokenFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginUserpassInput">AuthLoginUserpassInput</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass">VaultProviderAuthLoginUserpass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.caCertDirInput">CaCertDirInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.caCertFileInput">CaCertFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.clientAuthInput">ClientAuthInput</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.headersInput">HeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.maxLeaseTtlSecondsInput">MaxLeaseTtlSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.maxRetriesCccInput">MaxRetriesCccInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.skipChildTokenInput">SkipChildTokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.skipGetVaultVersionInput">SkipGetVaultVersionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.skipTlsVerifyInput">SkipTlsVerifyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.tlsServerNameInput">TlsServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.tokenNameInput">TokenNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.vaultVersionOverrideInput">VaultVersionOverrideInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.addAddressToEnv">AddAddressToEnv</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLogin">AuthLogin</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin">VaultProviderAuthLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginAws">AuthLoginAws</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws">VaultProviderAuthLoginAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginAzure">AuthLoginAzure</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure">VaultProviderAuthLoginAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginCert">AuthLoginCert</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert">VaultProviderAuthLoginCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginGcp">AuthLoginGcp</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp">VaultProviderAuthLoginGcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginJwt">AuthLoginJwt</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt">VaultProviderAuthLoginJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginKerberos">AuthLoginKerberos</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos">VaultProviderAuthLoginKerberos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginOci">AuthLoginOci</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci">VaultProviderAuthLoginOci</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginOidc">AuthLoginOidc</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc">VaultProviderAuthLoginOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginRadius">AuthLoginRadius</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius">VaultProviderAuthLoginRadius</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginTokenFile">AuthLoginTokenFile</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile">VaultProviderAuthLoginTokenFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginUserpass">AuthLoginUserpass</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass">VaultProviderAuthLoginUserpass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.caCertDir">CaCertDir</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.caCertFile">CaCertFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.clientAuth">ClientAuth</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.headers">Headers</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.maxRetriesCcc">MaxRetriesCcc</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.skipChildToken">SkipChildToken</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.skipGetVaultVersion">SkipGetVaultVersion</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.skipTlsVerify">SkipTlsVerify</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.tlsServerName">TlsServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.tokenName">TokenName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.vaultVersionOverride">VaultVersionOverride</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.provider.VaultProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.provider.VaultProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.provider.VaultProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.provider.VaultProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-vault.provider.VaultProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.provider.VaultProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.provider.VaultProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-vault.provider.VaultProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-vault.provider.VaultProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AddAddressToEnvInput`<sup>Optional</sup> <a name="AddAddressToEnvInput" id="@cdktf/provider-vault.provider.VaultProvider.property.addAddressToEnvInput"></a>

```go
func AddAddressToEnvInput() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-vault.provider.VaultProvider.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-vault.provider.VaultProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `AuthLoginAwsInput`<sup>Optional</sup> <a name="AuthLoginAwsInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginAwsInput"></a>

```go
func AuthLoginAwsInput() VaultProviderAuthLoginAws
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws">VaultProviderAuthLoginAws</a>

---

##### `AuthLoginAzureInput`<sup>Optional</sup> <a name="AuthLoginAzureInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginAzureInput"></a>

```go
func AuthLoginAzureInput() VaultProviderAuthLoginAzure
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure">VaultProviderAuthLoginAzure</a>

---

##### `AuthLoginCertInput`<sup>Optional</sup> <a name="AuthLoginCertInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginCertInput"></a>

```go
func AuthLoginCertInput() VaultProviderAuthLoginCert
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert">VaultProviderAuthLoginCert</a>

---

##### `AuthLoginGcpInput`<sup>Optional</sup> <a name="AuthLoginGcpInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginGcpInput"></a>

```go
func AuthLoginGcpInput() VaultProviderAuthLoginGcp
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp">VaultProviderAuthLoginGcp</a>

---

##### `AuthLoginInput`<sup>Optional</sup> <a name="AuthLoginInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginInput"></a>

```go
func AuthLoginInput() VaultProviderAuthLogin
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin">VaultProviderAuthLogin</a>

---

##### `AuthLoginJwtInput`<sup>Optional</sup> <a name="AuthLoginJwtInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginJwtInput"></a>

```go
func AuthLoginJwtInput() VaultProviderAuthLoginJwt
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt">VaultProviderAuthLoginJwt</a>

---

##### `AuthLoginKerberosInput`<sup>Optional</sup> <a name="AuthLoginKerberosInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginKerberosInput"></a>

```go
func AuthLoginKerberosInput() VaultProviderAuthLoginKerberos
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos">VaultProviderAuthLoginKerberos</a>

---

##### `AuthLoginOciInput`<sup>Optional</sup> <a name="AuthLoginOciInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginOciInput"></a>

```go
func AuthLoginOciInput() VaultProviderAuthLoginOci
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci">VaultProviderAuthLoginOci</a>

---

##### `AuthLoginOidcInput`<sup>Optional</sup> <a name="AuthLoginOidcInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginOidcInput"></a>

```go
func AuthLoginOidcInput() VaultProviderAuthLoginOidc
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc">VaultProviderAuthLoginOidc</a>

---

##### `AuthLoginRadiusInput`<sup>Optional</sup> <a name="AuthLoginRadiusInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginRadiusInput"></a>

```go
func AuthLoginRadiusInput() VaultProviderAuthLoginRadius
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius">VaultProviderAuthLoginRadius</a>

---

##### `AuthLoginTokenFileInput`<sup>Optional</sup> <a name="AuthLoginTokenFileInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginTokenFileInput"></a>

```go
func AuthLoginTokenFileInput() VaultProviderAuthLoginTokenFile
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile">VaultProviderAuthLoginTokenFile</a>

---

##### `AuthLoginUserpassInput`<sup>Optional</sup> <a name="AuthLoginUserpassInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginUserpassInput"></a>

```go
func AuthLoginUserpassInput() VaultProviderAuthLoginUserpass
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass">VaultProviderAuthLoginUserpass</a>

---

##### `CaCertDirInput`<sup>Optional</sup> <a name="CaCertDirInput" id="@cdktf/provider-vault.provider.VaultProvider.property.caCertDirInput"></a>

```go
func CaCertDirInput() *string
```

- *Type:* *string

---

##### `CaCertFileInput`<sup>Optional</sup> <a name="CaCertFileInput" id="@cdktf/provider-vault.provider.VaultProvider.property.caCertFileInput"></a>

```go
func CaCertFileInput() *string
```

- *Type:* *string

---

##### `ClientAuthInput`<sup>Optional</sup> <a name="ClientAuthInput" id="@cdktf/provider-vault.provider.VaultProvider.property.clientAuthInput"></a>

```go
func ClientAuthInput() VaultProviderClientAuth
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-vault.provider.VaultProvider.property.headersInput"></a>

```go
func HeadersInput() interface{}
```

- *Type:* interface{}

---

##### `MaxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="MaxLeaseTtlSecondsInput" id="@cdktf/provider-vault.provider.VaultProvider.property.maxLeaseTtlSecondsInput"></a>

```go
func MaxLeaseTtlSecondsInput() *f64
```

- *Type:* *f64

---

##### `MaxRetriesCccInput`<sup>Optional</sup> <a name="MaxRetriesCccInput" id="@cdktf/provider-vault.provider.VaultProvider.property.maxRetriesCccInput"></a>

```go
func MaxRetriesCccInput() *f64
```

- *Type:* *f64

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktf/provider-vault.provider.VaultProvider.property.maxRetriesInput"></a>

```go
func MaxRetriesInput() *f64
```

- *Type:* *f64

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.provider.VaultProvider.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `SkipChildTokenInput`<sup>Optional</sup> <a name="SkipChildTokenInput" id="@cdktf/provider-vault.provider.VaultProvider.property.skipChildTokenInput"></a>

```go
func SkipChildTokenInput() interface{}
```

- *Type:* interface{}

---

##### `SkipGetVaultVersionInput`<sup>Optional</sup> <a name="SkipGetVaultVersionInput" id="@cdktf/provider-vault.provider.VaultProvider.property.skipGetVaultVersionInput"></a>

```go
func SkipGetVaultVersionInput() interface{}
```

- *Type:* interface{}

---

##### `SkipTlsVerifyInput`<sup>Optional</sup> <a name="SkipTlsVerifyInput" id="@cdktf/provider-vault.provider.VaultProvider.property.skipTlsVerifyInput"></a>

```go
func SkipTlsVerifyInput() interface{}
```

- *Type:* interface{}

---

##### `TlsServerNameInput`<sup>Optional</sup> <a name="TlsServerNameInput" id="@cdktf/provider-vault.provider.VaultProvider.property.tlsServerNameInput"></a>

```go
func TlsServerNameInput() *string
```

- *Type:* *string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-vault.provider.VaultProvider.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `TokenNameInput`<sup>Optional</sup> <a name="TokenNameInput" id="@cdktf/provider-vault.provider.VaultProvider.property.tokenNameInput"></a>

```go
func TokenNameInput() *string
```

- *Type:* *string

---

##### `VaultVersionOverrideInput`<sup>Optional</sup> <a name="VaultVersionOverrideInput" id="@cdktf/provider-vault.provider.VaultProvider.property.vaultVersionOverrideInput"></a>

```go
func VaultVersionOverrideInput() *string
```

- *Type:* *string

---

##### `AddAddressToEnv`<sup>Optional</sup> <a name="AddAddressToEnv" id="@cdktf/provider-vault.provider.VaultProvider.property.addAddressToEnv"></a>

```go
func AddAddressToEnv() *string
```

- *Type:* *string

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-vault.provider.VaultProvider.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `AuthLogin`<sup>Optional</sup> <a name="AuthLogin" id="@cdktf/provider-vault.provider.VaultProvider.property.authLogin"></a>

```go
func AuthLogin() VaultProviderAuthLogin
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin">VaultProviderAuthLogin</a>

---

##### `AuthLoginAws`<sup>Optional</sup> <a name="AuthLoginAws" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginAws"></a>

```go
func AuthLoginAws() VaultProviderAuthLoginAws
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws">VaultProviderAuthLoginAws</a>

---

##### `AuthLoginAzure`<sup>Optional</sup> <a name="AuthLoginAzure" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginAzure"></a>

```go
func AuthLoginAzure() VaultProviderAuthLoginAzure
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure">VaultProviderAuthLoginAzure</a>

---

##### `AuthLoginCert`<sup>Optional</sup> <a name="AuthLoginCert" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginCert"></a>

```go
func AuthLoginCert() VaultProviderAuthLoginCert
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert">VaultProviderAuthLoginCert</a>

---

##### `AuthLoginGcp`<sup>Optional</sup> <a name="AuthLoginGcp" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginGcp"></a>

```go
func AuthLoginGcp() VaultProviderAuthLoginGcp
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp">VaultProviderAuthLoginGcp</a>

---

##### `AuthLoginJwt`<sup>Optional</sup> <a name="AuthLoginJwt" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginJwt"></a>

```go
func AuthLoginJwt() VaultProviderAuthLoginJwt
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt">VaultProviderAuthLoginJwt</a>

---

##### `AuthLoginKerberos`<sup>Optional</sup> <a name="AuthLoginKerberos" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginKerberos"></a>

```go
func AuthLoginKerberos() VaultProviderAuthLoginKerberos
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos">VaultProviderAuthLoginKerberos</a>

---

##### `AuthLoginOci`<sup>Optional</sup> <a name="AuthLoginOci" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginOci"></a>

```go
func AuthLoginOci() VaultProviderAuthLoginOci
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci">VaultProviderAuthLoginOci</a>

---

##### `AuthLoginOidc`<sup>Optional</sup> <a name="AuthLoginOidc" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginOidc"></a>

```go
func AuthLoginOidc() VaultProviderAuthLoginOidc
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc">VaultProviderAuthLoginOidc</a>

---

##### `AuthLoginRadius`<sup>Optional</sup> <a name="AuthLoginRadius" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginRadius"></a>

```go
func AuthLoginRadius() VaultProviderAuthLoginRadius
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius">VaultProviderAuthLoginRadius</a>

---

##### `AuthLoginTokenFile`<sup>Optional</sup> <a name="AuthLoginTokenFile" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginTokenFile"></a>

```go
func AuthLoginTokenFile() VaultProviderAuthLoginTokenFile
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile">VaultProviderAuthLoginTokenFile</a>

---

##### `AuthLoginUserpass`<sup>Optional</sup> <a name="AuthLoginUserpass" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginUserpass"></a>

```go
func AuthLoginUserpass() VaultProviderAuthLoginUserpass
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass">VaultProviderAuthLoginUserpass</a>

---

##### `CaCertDir`<sup>Optional</sup> <a name="CaCertDir" id="@cdktf/provider-vault.provider.VaultProvider.property.caCertDir"></a>

```go
func CaCertDir() *string
```

- *Type:* *string

---

##### `CaCertFile`<sup>Optional</sup> <a name="CaCertFile" id="@cdktf/provider-vault.provider.VaultProvider.property.caCertFile"></a>

```go
func CaCertFile() *string
```

- *Type:* *string

---

##### `ClientAuth`<sup>Optional</sup> <a name="ClientAuth" id="@cdktf/provider-vault.provider.VaultProvider.property.clientAuth"></a>

```go
func ClientAuth() VaultProviderClientAuth
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a>

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-vault.provider.VaultProvider.property.headers"></a>

```go
func Headers() interface{}
```

- *Type:* interface{}

---

##### `MaxLeaseTtlSeconds`<sup>Optional</sup> <a name="MaxLeaseTtlSeconds" id="@cdktf/provider-vault.provider.VaultProvider.property.maxLeaseTtlSeconds"></a>

```go
func MaxLeaseTtlSeconds() *f64
```

- *Type:* *f64

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-vault.provider.VaultProvider.property.maxRetries"></a>

```go
func MaxRetries() *f64
```

- *Type:* *f64

---

##### `MaxRetriesCcc`<sup>Optional</sup> <a name="MaxRetriesCcc" id="@cdktf/provider-vault.provider.VaultProvider.property.maxRetriesCcc"></a>

```go
func MaxRetriesCcc() *f64
```

- *Type:* *f64

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.provider.VaultProvider.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `SkipChildToken`<sup>Optional</sup> <a name="SkipChildToken" id="@cdktf/provider-vault.provider.VaultProvider.property.skipChildToken"></a>

```go
func SkipChildToken() interface{}
```

- *Type:* interface{}

---

##### `SkipGetVaultVersion`<sup>Optional</sup> <a name="SkipGetVaultVersion" id="@cdktf/provider-vault.provider.VaultProvider.property.skipGetVaultVersion"></a>

```go
func SkipGetVaultVersion() interface{}
```

- *Type:* interface{}

---

##### `SkipTlsVerify`<sup>Optional</sup> <a name="SkipTlsVerify" id="@cdktf/provider-vault.provider.VaultProvider.property.skipTlsVerify"></a>

```go
func SkipTlsVerify() interface{}
```

- *Type:* interface{}

---

##### `TlsServerName`<sup>Optional</sup> <a name="TlsServerName" id="@cdktf/provider-vault.provider.VaultProvider.property.tlsServerName"></a>

```go
func TlsServerName() *string
```

- *Type:* *string

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-vault.provider.VaultProvider.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `TokenName`<sup>Optional</sup> <a name="TokenName" id="@cdktf/provider-vault.provider.VaultProvider.property.tokenName"></a>

```go
func TokenName() *string
```

- *Type:* *string

---

##### `VaultVersionOverride`<sup>Optional</sup> <a name="VaultVersionOverride" id="@cdktf/provider-vault.provider.VaultProvider.property.vaultVersionOverride"></a>

```go
func VaultVersionOverride() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.provider.VaultProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultProviderAuthLogin <a name="VaultProviderAuthLogin" id="@cdktf/provider-vault.provider.VaultProviderAuthLogin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLogin.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/provider"

&provider.VaultProviderAuthLogin {
	Path: *string,
	Method: *string,
	Namespace: *string,
	Parameters: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#path VaultProvider#path}. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.method">Method</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#method VaultProvider#method}. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#namespace VaultProvider#namespace}. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#parameters VaultProvider#parameters}. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#path VaultProvider#path}.

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.method"></a>

```go
Method *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#method VaultProvider#method}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#namespace VaultProvider#namespace}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#parameters VaultProvider#parameters}.

---

### VaultProviderAuthLoginAws <a name="VaultProviderAuthLoginAws" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/provider"

&provider.VaultProviderAuthLoginAws {
	Role: *string,
	AwsAccessKeyId: *string,
	AwsIamEndpoint: *string,
	AwsProfile: *string,
	AwsRegion: *string,
	AwsRoleArn: *string,
	AwsRoleSessionName: *string,
	AwsSecretAccessKey: *string,
	AwsSessionToken: *string,
	AwsSharedCredentialsFile: *string,
	AwsStsEndpoint: *string,
	AwsWebIdentityTokenFile: *string,
	HeaderValue: *string,
	Mount: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.role">Role</a></code> | <code>*string</code> | The Vault role to use when logging into Vault. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsAccessKeyId">AwsAccessKeyId</a></code> | <code>*string</code> | The AWS access key ID. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsIamEndpoint">AwsIamEndpoint</a></code> | <code>*string</code> | The IAM endpoint URL. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsProfile">AwsProfile</a></code> | <code>*string</code> | The name of the AWS profile. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsRegion">AwsRegion</a></code> | <code>*string</code> | The AWS region. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsRoleArn">AwsRoleArn</a></code> | <code>*string</code> | The ARN of the AWS Role to assume.Used during STS AssumeRole. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsRoleSessionName">AwsRoleSessionName</a></code> | <code>*string</code> | Specifies the name to attach to the AWS role session. Used during STS AssumeRole. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsSecretAccessKey">AwsSecretAccessKey</a></code> | <code>*string</code> | The AWS secret access key. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsSessionToken">AwsSessionToken</a></code> | <code>*string</code> | The AWS session token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsSharedCredentialsFile">AwsSharedCredentialsFile</a></code> | <code>*string</code> | Path to the AWS shared credentials file. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsStsEndpoint">AwsStsEndpoint</a></code> | <code>*string</code> | The STS endpoint URL. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsWebIdentityTokenFile">AwsWebIdentityTokenFile</a></code> | <code>*string</code> | Path to the file containing an OAuth 2.0 access token or OpenID Connect ID token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.headerValue">HeaderValue</a></code> | <code>*string</code> | The Vault header value to include in the STS signing request. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.mount">Mount</a></code> | <code>*string</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.namespace">Namespace</a></code> | <code>*string</code> | The authentication engine's namespace. |

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.role"></a>

```go
Role *string
```

- *Type:* *string

The Vault role to use when logging into Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#role VaultProvider#role}

---

##### `AwsAccessKeyId`<sup>Optional</sup> <a name="AwsAccessKeyId" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsAccessKeyId"></a>

```go
AwsAccessKeyId *string
```

- *Type:* *string

The AWS access key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#aws_access_key_id VaultProvider#aws_access_key_id}

---

##### `AwsIamEndpoint`<sup>Optional</sup> <a name="AwsIamEndpoint" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsIamEndpoint"></a>

```go
AwsIamEndpoint *string
```

- *Type:* *string

The IAM endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#aws_iam_endpoint VaultProvider#aws_iam_endpoint}

---

##### `AwsProfile`<sup>Optional</sup> <a name="AwsProfile" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsProfile"></a>

```go
AwsProfile *string
```

- *Type:* *string

The name of the AWS profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#aws_profile VaultProvider#aws_profile}

---

##### `AwsRegion`<sup>Optional</sup> <a name="AwsRegion" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsRegion"></a>

```go
AwsRegion *string
```

- *Type:* *string

The AWS region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#aws_region VaultProvider#aws_region}

---

##### `AwsRoleArn`<sup>Optional</sup> <a name="AwsRoleArn" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsRoleArn"></a>

```go
AwsRoleArn *string
```

- *Type:* *string

The ARN of the AWS Role to assume.Used during STS AssumeRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#aws_role_arn VaultProvider#aws_role_arn}

---

##### `AwsRoleSessionName`<sup>Optional</sup> <a name="AwsRoleSessionName" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsRoleSessionName"></a>

```go
AwsRoleSessionName *string
```

- *Type:* *string

Specifies the name to attach to the AWS role session. Used during STS AssumeRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#aws_role_session_name VaultProvider#aws_role_session_name}

---

##### `AwsSecretAccessKey`<sup>Optional</sup> <a name="AwsSecretAccessKey" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsSecretAccessKey"></a>

```go
AwsSecretAccessKey *string
```

- *Type:* *string

The AWS secret access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#aws_secret_access_key VaultProvider#aws_secret_access_key}

---

##### `AwsSessionToken`<sup>Optional</sup> <a name="AwsSessionToken" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsSessionToken"></a>

```go
AwsSessionToken *string
```

- *Type:* *string

The AWS session token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#aws_session_token VaultProvider#aws_session_token}

---

##### `AwsSharedCredentialsFile`<sup>Optional</sup> <a name="AwsSharedCredentialsFile" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsSharedCredentialsFile"></a>

```go
AwsSharedCredentialsFile *string
```

- *Type:* *string

Path to the AWS shared credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#aws_shared_credentials_file VaultProvider#aws_shared_credentials_file}

---

##### `AwsStsEndpoint`<sup>Optional</sup> <a name="AwsStsEndpoint" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsStsEndpoint"></a>

```go
AwsStsEndpoint *string
```

- *Type:* *string

The STS endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#aws_sts_endpoint VaultProvider#aws_sts_endpoint}

---

##### `AwsWebIdentityTokenFile`<sup>Optional</sup> <a name="AwsWebIdentityTokenFile" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsWebIdentityTokenFile"></a>

```go
AwsWebIdentityTokenFile *string
```

- *Type:* *string

Path to the file containing an OAuth 2.0 access token or OpenID Connect ID token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#aws_web_identity_token_file VaultProvider#aws_web_identity_token_file}

---

##### `HeaderValue`<sup>Optional</sup> <a name="HeaderValue" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.headerValue"></a>

```go
HeaderValue *string
```

- *Type:* *string

The Vault header value to include in the STS signing request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#header_value VaultProvider#header_value}

---

##### `Mount`<sup>Optional</sup> <a name="Mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#mount VaultProvider#mount}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#namespace VaultProvider#namespace}

---

### VaultProviderAuthLoginAzure <a name="VaultProviderAuthLoginAzure" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/provider"

&provider.VaultProviderAuthLoginAzure {
	ResourceGroupName: *string,
	Role: *string,
	SubscriptionId: *string,
	ClientId: *string,
	Jwt: *string,
	Mount: *string,
	Namespace: *string,
	Scope: *string,
	TenantId: *string,
	VmName: *string,
	VmssName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | The resource group for the machine that generated the MSI token. This information can be obtained through instance metadata. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.role">Role</a></code> | <code>*string</code> | Name of the login role. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | The subscription ID for the machine that generated the MSI token. This information can be obtained through instance metadata. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.clientId">ClientId</a></code> | <code>*string</code> | The identity's client ID. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.jwt">Jwt</a></code> | <code>*string</code> | A signed JSON Web Token. If not specified on will be created automatically. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.mount">Mount</a></code> | <code>*string</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.namespace">Namespace</a></code> | <code>*string</code> | The authentication engine's namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.scope">Scope</a></code> | <code>*string</code> | The scopes to include in the token request. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.tenantId">TenantId</a></code> | <code>*string</code> | Provides the tenant ID to use in a multi-tenant authentication scenario. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.vmName">VmName</a></code> | <code>*string</code> | The virtual machine name for the machine that generated the MSI token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.vmssName">VmssName</a></code> | <code>*string</code> | The virtual machine scale set name for the machine that generated the MSI token. |

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

The resource group for the machine that generated the MSI token. This information can be obtained through instance metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#resource_group_name VaultProvider#resource_group_name}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.role"></a>

```go
Role *string
```

- *Type:* *string

Name of the login role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#role VaultProvider#role}

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

The subscription ID for the machine that generated the MSI token. This information can be obtained through instance metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#subscription_id VaultProvider#subscription_id}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The identity's client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#client_id VaultProvider#client_id}

---

##### `Jwt`<sup>Optional</sup> <a name="Jwt" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.jwt"></a>

```go
Jwt *string
```

- *Type:* *string

A signed JSON Web Token. If not specified on will be created automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#jwt VaultProvider#jwt}

---

##### `Mount`<sup>Optional</sup> <a name="Mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#mount VaultProvider#mount}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#namespace VaultProvider#namespace}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

The scopes to include in the token request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#scope VaultProvider#scope}

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Provides the tenant ID to use in a multi-tenant authentication scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#tenant_id VaultProvider#tenant_id}

---

##### `VmName`<sup>Optional</sup> <a name="VmName" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.vmName"></a>

```go
VmName *string
```

- *Type:* *string

The virtual machine name for the machine that generated the MSI token.

This information can be obtained through instance metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#vm_name VaultProvider#vm_name}

---

##### `VmssName`<sup>Optional</sup> <a name="VmssName" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.vmssName"></a>

```go
VmssName *string
```

- *Type:* *string

The virtual machine scale set name for the machine that generated the MSI token.

This information can be obtained through instance metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#vmss_name VaultProvider#vmss_name}

---

### VaultProviderAuthLoginCert <a name="VaultProviderAuthLoginCert" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/provider"

&provider.VaultProviderAuthLoginCert {
	CertFile: *string,
	KeyFile: *string,
	Mount: *string,
	Name: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.certFile">CertFile</a></code> | <code>*string</code> | Path to a file containing the client certificate. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.keyFile">KeyFile</a></code> | <code>*string</code> | Path to a file containing the private key that the certificate was issued for. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.mount">Mount</a></code> | <code>*string</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.name">Name</a></code> | <code>*string</code> | Name of the certificate's role. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.namespace">Namespace</a></code> | <code>*string</code> | The authentication engine's namespace. |

---

##### `CertFile`<sup>Required</sup> <a name="CertFile" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.certFile"></a>

```go
CertFile *string
```

- *Type:* *string

Path to a file containing the client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#cert_file VaultProvider#cert_file}

---

##### `KeyFile`<sup>Required</sup> <a name="KeyFile" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.keyFile"></a>

```go
KeyFile *string
```

- *Type:* *string

Path to a file containing the private key that the certificate was issued for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#key_file VaultProvider#key_file}

---

##### `Mount`<sup>Optional</sup> <a name="Mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#mount VaultProvider#mount}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the certificate's role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#name VaultProvider#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#namespace VaultProvider#namespace}

---

### VaultProviderAuthLoginGcp <a name="VaultProviderAuthLoginGcp" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/provider"

&provider.VaultProviderAuthLoginGcp {
	Role: *string,
	Credentials: *string,
	Jwt: *string,
	Mount: *string,
	Namespace: *string,
	ServiceAccount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.role">Role</a></code> | <code>*string</code> | Name of the login role. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.credentials">Credentials</a></code> | <code>*string</code> | Path to the Google Cloud credentials file. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.jwt">Jwt</a></code> | <code>*string</code> | A signed JSON Web Token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.mount">Mount</a></code> | <code>*string</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.namespace">Namespace</a></code> | <code>*string</code> | The authentication engine's namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | IAM service account. |

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.role"></a>

```go
Role *string
```

- *Type:* *string

Name of the login role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#role VaultProvider#role}

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.credentials"></a>

```go
Credentials *string
```

- *Type:* *string

Path to the Google Cloud credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#credentials VaultProvider#credentials}

---

##### `Jwt`<sup>Optional</sup> <a name="Jwt" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.jwt"></a>

```go
Jwt *string
```

- *Type:* *string

A signed JSON Web Token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#jwt VaultProvider#jwt}

---

##### `Mount`<sup>Optional</sup> <a name="Mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#mount VaultProvider#mount}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#namespace VaultProvider#namespace}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

IAM service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#service_account VaultProvider#service_account}

---

### VaultProviderAuthLoginJwt <a name="VaultProviderAuthLoginJwt" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/provider"

&provider.VaultProviderAuthLoginJwt {
	Jwt: *string,
	Role: *string,
	Mount: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.jwt">Jwt</a></code> | <code>*string</code> | A signed JSON Web Token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.role">Role</a></code> | <code>*string</code> | Name of the login role. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.mount">Mount</a></code> | <code>*string</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.namespace">Namespace</a></code> | <code>*string</code> | The authentication engine's namespace. |

---

##### `Jwt`<sup>Required</sup> <a name="Jwt" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.jwt"></a>

```go
Jwt *string
```

- *Type:* *string

A signed JSON Web Token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#jwt VaultProvider#jwt}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.role"></a>

```go
Role *string
```

- *Type:* *string

Name of the login role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#role VaultProvider#role}

---

##### `Mount`<sup>Optional</sup> <a name="Mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#mount VaultProvider#mount}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#namespace VaultProvider#namespace}

---

### VaultProviderAuthLoginKerberos <a name="VaultProviderAuthLoginKerberos" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/provider"

&provider.VaultProviderAuthLoginKerberos {
	DisableFastNegotiation: interface{},
	KeytabPath: *string,
	Krb5ConfPath: *string,
	Mount: *string,
	Namespace: *string,
	Realm: *string,
	RemoveInstanceName: interface{},
	Service: *string,
	Token: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.disableFastNegotiation">DisableFastNegotiation</a></code> | <code>interface{}</code> | Disable the Kerberos FAST negotiation. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.keytabPath">KeytabPath</a></code> | <code>*string</code> | The Kerberos keytab file containing the entry of the login entity. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.krb5ConfPath">Krb5ConfPath</a></code> | <code>*string</code> | A valid Kerberos configuration file e.g. /etc/krb5.conf. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.mount">Mount</a></code> | <code>*string</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.namespace">Namespace</a></code> | <code>*string</code> | The authentication engine's namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.realm">Realm</a></code> | <code>*string</code> | The Kerberos server's authoritative authentication domain. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.removeInstanceName">RemoveInstanceName</a></code> | <code>interface{}</code> | Strip the host from the username found in the keytab. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.service">Service</a></code> | <code>*string</code> | The service principle name. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.token">Token</a></code> | <code>*string</code> | Simple and Protected GSSAPI Negotiation Mechanism (SPNEGO) token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.username">Username</a></code> | <code>*string</code> | The username to login into Kerberos with. |

---

##### `DisableFastNegotiation`<sup>Optional</sup> <a name="DisableFastNegotiation" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.disableFastNegotiation"></a>

```go
DisableFastNegotiation interface{}
```

- *Type:* interface{}

Disable the Kerberos FAST negotiation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#disable_fast_negotiation VaultProvider#disable_fast_negotiation}

---

##### `KeytabPath`<sup>Optional</sup> <a name="KeytabPath" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.keytabPath"></a>

```go
KeytabPath *string
```

- *Type:* *string

The Kerberos keytab file containing the entry of the login entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#keytab_path VaultProvider#keytab_path}

---

##### `Krb5ConfPath`<sup>Optional</sup> <a name="Krb5ConfPath" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.krb5ConfPath"></a>

```go
Krb5ConfPath *string
```

- *Type:* *string

A valid Kerberos configuration file e.g. /etc/krb5.conf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#krb5conf_path VaultProvider#krb5conf_path}

---

##### `Mount`<sup>Optional</sup> <a name="Mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#mount VaultProvider#mount}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#namespace VaultProvider#namespace}

---

##### `Realm`<sup>Optional</sup> <a name="Realm" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.realm"></a>

```go
Realm *string
```

- *Type:* *string

The Kerberos server's authoritative authentication domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#realm VaultProvider#realm}

---

##### `RemoveInstanceName`<sup>Optional</sup> <a name="RemoveInstanceName" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.removeInstanceName"></a>

```go
RemoveInstanceName interface{}
```

- *Type:* interface{}

Strip the host from the username found in the keytab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#remove_instance_name VaultProvider#remove_instance_name}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.service"></a>

```go
Service *string
```

- *Type:* *string

The service principle name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#service VaultProvider#service}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.token"></a>

```go
Token *string
```

- *Type:* *string

Simple and Protected GSSAPI Negotiation Mechanism (SPNEGO) token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#token VaultProvider#token}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.username"></a>

```go
Username *string
```

- *Type:* *string

The username to login into Kerberos with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#username VaultProvider#username}

---

### VaultProviderAuthLoginOci <a name="VaultProviderAuthLoginOci" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOci"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/provider"

&provider.VaultProviderAuthLoginOci {
	AuthType: *string,
	Role: *string,
	Mount: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.authType">AuthType</a></code> | <code>*string</code> | Authentication type to use when getting OCI credentials. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.role">Role</a></code> | <code>*string</code> | Name of the login role. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.mount">Mount</a></code> | <code>*string</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.namespace">Namespace</a></code> | <code>*string</code> | The authentication engine's namespace. |

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

Authentication type to use when getting OCI credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#auth_type VaultProvider#auth_type}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.role"></a>

```go
Role *string
```

- *Type:* *string

Name of the login role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#role VaultProvider#role}

---

##### `Mount`<sup>Optional</sup> <a name="Mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#mount VaultProvider#mount}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#namespace VaultProvider#namespace}

---

### VaultProviderAuthLoginOidc <a name="VaultProviderAuthLoginOidc" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/provider"

&provider.VaultProviderAuthLoginOidc {
	Role: *string,
	CallbackAddress: *string,
	CallbackListenerAddress: *string,
	Mount: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.role">Role</a></code> | <code>*string</code> | Name of the login role. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.callbackAddress">CallbackAddress</a></code> | <code>*string</code> | The callback address. Must be a valid URI without the path. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.callbackListenerAddress">CallbackListenerAddress</a></code> | <code>*string</code> | The callback listener's address. Must be a valid URI without the path. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.mount">Mount</a></code> | <code>*string</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.namespace">Namespace</a></code> | <code>*string</code> | The authentication engine's namespace. |

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.role"></a>

```go
Role *string
```

- *Type:* *string

Name of the login role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#role VaultProvider#role}

---

##### `CallbackAddress`<sup>Optional</sup> <a name="CallbackAddress" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.callbackAddress"></a>

```go
CallbackAddress *string
```

- *Type:* *string

The callback address. Must be a valid URI without the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#callback_address VaultProvider#callback_address}

---

##### `CallbackListenerAddress`<sup>Optional</sup> <a name="CallbackListenerAddress" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.callbackListenerAddress"></a>

```go
CallbackListenerAddress *string
```

- *Type:* *string

The callback listener's address. Must be a valid URI without the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#callback_listener_address VaultProvider#callback_listener_address}

---

##### `Mount`<sup>Optional</sup> <a name="Mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#mount VaultProvider#mount}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#namespace VaultProvider#namespace}

---

### VaultProviderAuthLoginRadius <a name="VaultProviderAuthLoginRadius" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/provider"

&provider.VaultProviderAuthLoginRadius {
	Password: *string,
	Username: *string,
	Mount: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.password">Password</a></code> | <code>*string</code> | The Radius password for username. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.username">Username</a></code> | <code>*string</code> | The Radius username. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.mount">Mount</a></code> | <code>*string</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.namespace">Namespace</a></code> | <code>*string</code> | The authentication engine's namespace. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.password"></a>

```go
Password *string
```

- *Type:* *string

The Radius password for username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#password VaultProvider#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.username"></a>

```go
Username *string
```

- *Type:* *string

The Radius username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#username VaultProvider#username}

---

##### `Mount`<sup>Optional</sup> <a name="Mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#mount VaultProvider#mount}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#namespace VaultProvider#namespace}

---

### VaultProviderAuthLoginTokenFile <a name="VaultProviderAuthLoginTokenFile" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/provider"

&provider.VaultProviderAuthLoginTokenFile {
	Filename: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile.property.filename">Filename</a></code> | <code>*string</code> | The name of a file containing a single line that is a valid Vault token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile.property.namespace">Namespace</a></code> | <code>*string</code> | The authentication engine's namespace. |

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile.property.filename"></a>

```go
Filename *string
```

- *Type:* *string

The name of a file containing a single line that is a valid Vault token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#filename VaultProvider#filename}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#namespace VaultProvider#namespace}

---

### VaultProviderAuthLoginUserpass <a name="VaultProviderAuthLoginUserpass" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/provider"

&provider.VaultProviderAuthLoginUserpass {
	Username: *string,
	Mount: *string,
	Namespace: *string,
	Password: *string,
	PasswordFile: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.username">Username</a></code> | <code>*string</code> | Login with username. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.mount">Mount</a></code> | <code>*string</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.namespace">Namespace</a></code> | <code>*string</code> | The authentication engine's namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.password">Password</a></code> | <code>*string</code> | Login with password. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.passwordFile">PasswordFile</a></code> | <code>*string</code> | Login with password from a file. |

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.username"></a>

```go
Username *string
```

- *Type:* *string

Login with username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#username VaultProvider#username}

---

##### `Mount`<sup>Optional</sup> <a name="Mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#mount VaultProvider#mount}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#namespace VaultProvider#namespace}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.password"></a>

```go
Password *string
```

- *Type:* *string

Login with password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#password VaultProvider#password}

---

##### `PasswordFile`<sup>Optional</sup> <a name="PasswordFile" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.passwordFile"></a>

```go
PasswordFile *string
```

- *Type:* *string

Login with password from a file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#password_file VaultProvider#password_file}

---

### VaultProviderClientAuth <a name="VaultProviderClientAuth" id="@cdktf/provider-vault.provider.VaultProviderClientAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderClientAuth.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/provider"

&provider.VaultProviderClientAuth {
	CertFile: *string,
	KeyFile: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth.property.certFile">CertFile</a></code> | <code>*string</code> | Path to a file containing the client certificate. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth.property.keyFile">KeyFile</a></code> | <code>*string</code> | Path to a file containing the private key that the certificate was issued for. |

---

##### `CertFile`<sup>Optional</sup> <a name="CertFile" id="@cdktf/provider-vault.provider.VaultProviderClientAuth.property.certFile"></a>

```go
CertFile *string
```

- *Type:* *string

Path to a file containing the client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#cert_file VaultProvider#cert_file}

---

##### `KeyFile`<sup>Optional</sup> <a name="KeyFile" id="@cdktf/provider-vault.provider.VaultProviderClientAuth.property.keyFile"></a>

```go
KeyFile *string
```

- *Type:* *string

Path to a file containing the private key that the certificate was issued for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#key_file VaultProvider#key_file}

---

### VaultProviderConfig <a name="VaultProviderConfig" id="@cdktf/provider-vault.provider.VaultProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/provider"

&provider.VaultProviderConfig {
	Address: *string,
	AddAddressToEnv: *string,
	Alias: *string,
	AuthLogin: github.com/cdktf/cdktf-provider-vault-go/vault/v10.provider.VaultProviderAuthLogin,
	AuthLoginAws: github.com/cdktf/cdktf-provider-vault-go/vault/v10.provider.VaultProviderAuthLoginAws,
	AuthLoginAzure: github.com/cdktf/cdktf-provider-vault-go/vault/v10.provider.VaultProviderAuthLoginAzure,
	AuthLoginCert: github.com/cdktf/cdktf-provider-vault-go/vault/v10.provider.VaultProviderAuthLoginCert,
	AuthLoginGcp: github.com/cdktf/cdktf-provider-vault-go/vault/v10.provider.VaultProviderAuthLoginGcp,
	AuthLoginJwt: github.com/cdktf/cdktf-provider-vault-go/vault/v10.provider.VaultProviderAuthLoginJwt,
	AuthLoginKerberos: github.com/cdktf/cdktf-provider-vault-go/vault/v10.provider.VaultProviderAuthLoginKerberos,
	AuthLoginOci: github.com/cdktf/cdktf-provider-vault-go/vault/v10.provider.VaultProviderAuthLoginOci,
	AuthLoginOidc: github.com/cdktf/cdktf-provider-vault-go/vault/v10.provider.VaultProviderAuthLoginOidc,
	AuthLoginRadius: github.com/cdktf/cdktf-provider-vault-go/vault/v10.provider.VaultProviderAuthLoginRadius,
	AuthLoginTokenFile: github.com/cdktf/cdktf-provider-vault-go/vault/v10.provider.VaultProviderAuthLoginTokenFile,
	AuthLoginUserpass: github.com/cdktf/cdktf-provider-vault-go/vault/v10.provider.VaultProviderAuthLoginUserpass,
	CaCertDir: *string,
	CaCertFile: *string,
	ClientAuth: github.com/cdktf/cdktf-provider-vault-go/vault/v10.provider.VaultProviderClientAuth,
	Headers: interface{},
	MaxLeaseTtlSeconds: *f64,
	MaxRetries: *f64,
	MaxRetriesCcc: *f64,
	Namespace: *string,
	SkipChildToken: interface{},
	SkipGetVaultVersion: interface{},
	SkipTlsVerify: interface{},
	TlsServerName: *string,
	Token: *string,
	TokenName: *string,
	VaultVersionOverride: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.address">Address</a></code> | <code>*string</code> | URL of the root of the target Vault server. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.addAddressToEnv">AddAddressToEnv</a></code> | <code>*string</code> | If true, adds the value of the `address` argument to the Terraform process environment. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLogin">AuthLogin</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin">VaultProviderAuthLogin</a></code> | auth_login block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginAws">AuthLoginAws</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws">VaultProviderAuthLoginAws</a></code> | auth_login_aws block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginAzure">AuthLoginAzure</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure">VaultProviderAuthLoginAzure</a></code> | auth_login_azure block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginCert">AuthLoginCert</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert">VaultProviderAuthLoginCert</a></code> | auth_login_cert block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginGcp">AuthLoginGcp</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp">VaultProviderAuthLoginGcp</a></code> | auth_login_gcp block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginJwt">AuthLoginJwt</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt">VaultProviderAuthLoginJwt</a></code> | auth_login_jwt block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginKerberos">AuthLoginKerberos</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos">VaultProviderAuthLoginKerberos</a></code> | auth_login_kerberos block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginOci">AuthLoginOci</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci">VaultProviderAuthLoginOci</a></code> | auth_login_oci block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginOidc">AuthLoginOidc</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc">VaultProviderAuthLoginOidc</a></code> | auth_login_oidc block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginRadius">AuthLoginRadius</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius">VaultProviderAuthLoginRadius</a></code> | auth_login_radius block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginTokenFile">AuthLoginTokenFile</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile">VaultProviderAuthLoginTokenFile</a></code> | auth_login_token_file block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginUserpass">AuthLoginUserpass</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass">VaultProviderAuthLoginUserpass</a></code> | auth_login_userpass block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.caCertDir">CaCertDir</a></code> | <code>*string</code> | Path to directory containing CA certificate files to validate the server's certificate. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.caCertFile">CaCertFile</a></code> | <code>*string</code> | Path to a CA certificate file to validate the server's certificate. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.clientAuth">ClientAuth</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a></code> | client_auth block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.headers">Headers</a></code> | <code>interface{}</code> | headers block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>*f64</code> | Maximum TTL for secret leases requested by this provider. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | Maximum number of retries when a 5xx error code is encountered. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.maxRetriesCcc">MaxRetriesCcc</a></code> | <code>*f64</code> | Maximum number of retries for Client Controlled Consistency related operations. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.namespace">Namespace</a></code> | <code>*string</code> | The namespace to use. Available only for Vault Enterprise. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.skipChildToken">SkipChildToken</a></code> | <code>interface{}</code> | Set this to true to prevent the creation of ephemeral child token used by this provider. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.skipGetVaultVersion">SkipGetVaultVersion</a></code> | <code>interface{}</code> | Skip the dynamic fetching of the Vault server version. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.skipTlsVerify">SkipTlsVerify</a></code> | <code>interface{}</code> | Set this to true only if the target Vault server is an insecure development instance. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.tlsServerName">TlsServerName</a></code> | <code>*string</code> | Name to use as the SNI host when connecting via TLS. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.token">Token</a></code> | <code>*string</code> | Token to use to authenticate to Vault. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.tokenName">TokenName</a></code> | <code>*string</code> | Token name to use for creating the Vault child token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.vaultVersionOverride">VaultVersionOverride</a></code> | <code>*string</code> | Override the Vault server version, which is normally determined dynamically from the target Vault server. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.address"></a>

```go
Address *string
```

- *Type:* *string

URL of the root of the target Vault server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#address VaultProvider#address}

---

##### `AddAddressToEnv`<sup>Optional</sup> <a name="AddAddressToEnv" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.addAddressToEnv"></a>

```go
AddAddressToEnv *string
```

- *Type:* *string

If true, adds the value of the `address` argument to the Terraform process environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#add_address_to_env VaultProvider#add_address_to_env}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#alias VaultProvider#alias}

---

##### `AuthLogin`<sup>Optional</sup> <a name="AuthLogin" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLogin"></a>

```go
AuthLogin VaultProviderAuthLogin
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin">VaultProviderAuthLogin</a>

auth_login block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#auth_login VaultProvider#auth_login}

---

##### `AuthLoginAws`<sup>Optional</sup> <a name="AuthLoginAws" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginAws"></a>

```go
AuthLoginAws VaultProviderAuthLoginAws
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws">VaultProviderAuthLoginAws</a>

auth_login_aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#auth_login_aws VaultProvider#auth_login_aws}

---

##### `AuthLoginAzure`<sup>Optional</sup> <a name="AuthLoginAzure" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginAzure"></a>

```go
AuthLoginAzure VaultProviderAuthLoginAzure
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure">VaultProviderAuthLoginAzure</a>

auth_login_azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#auth_login_azure VaultProvider#auth_login_azure}

---

##### `AuthLoginCert`<sup>Optional</sup> <a name="AuthLoginCert" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginCert"></a>

```go
AuthLoginCert VaultProviderAuthLoginCert
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert">VaultProviderAuthLoginCert</a>

auth_login_cert block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#auth_login_cert VaultProvider#auth_login_cert}

---

##### `AuthLoginGcp`<sup>Optional</sup> <a name="AuthLoginGcp" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginGcp"></a>

```go
AuthLoginGcp VaultProviderAuthLoginGcp
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp">VaultProviderAuthLoginGcp</a>

auth_login_gcp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#auth_login_gcp VaultProvider#auth_login_gcp}

---

##### `AuthLoginJwt`<sup>Optional</sup> <a name="AuthLoginJwt" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginJwt"></a>

```go
AuthLoginJwt VaultProviderAuthLoginJwt
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt">VaultProviderAuthLoginJwt</a>

auth_login_jwt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#auth_login_jwt VaultProvider#auth_login_jwt}

---

##### `AuthLoginKerberos`<sup>Optional</sup> <a name="AuthLoginKerberos" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginKerberos"></a>

```go
AuthLoginKerberos VaultProviderAuthLoginKerberos
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos">VaultProviderAuthLoginKerberos</a>

auth_login_kerberos block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#auth_login_kerberos VaultProvider#auth_login_kerberos}

---

##### `AuthLoginOci`<sup>Optional</sup> <a name="AuthLoginOci" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginOci"></a>

```go
AuthLoginOci VaultProviderAuthLoginOci
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci">VaultProviderAuthLoginOci</a>

auth_login_oci block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#auth_login_oci VaultProvider#auth_login_oci}

---

##### `AuthLoginOidc`<sup>Optional</sup> <a name="AuthLoginOidc" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginOidc"></a>

```go
AuthLoginOidc VaultProviderAuthLoginOidc
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc">VaultProviderAuthLoginOidc</a>

auth_login_oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#auth_login_oidc VaultProvider#auth_login_oidc}

---

##### `AuthLoginRadius`<sup>Optional</sup> <a name="AuthLoginRadius" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginRadius"></a>

```go
AuthLoginRadius VaultProviderAuthLoginRadius
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius">VaultProviderAuthLoginRadius</a>

auth_login_radius block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#auth_login_radius VaultProvider#auth_login_radius}

---

##### `AuthLoginTokenFile`<sup>Optional</sup> <a name="AuthLoginTokenFile" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginTokenFile"></a>

```go
AuthLoginTokenFile VaultProviderAuthLoginTokenFile
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile">VaultProviderAuthLoginTokenFile</a>

auth_login_token_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#auth_login_token_file VaultProvider#auth_login_token_file}

---

##### `AuthLoginUserpass`<sup>Optional</sup> <a name="AuthLoginUserpass" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginUserpass"></a>

```go
AuthLoginUserpass VaultProviderAuthLoginUserpass
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass">VaultProviderAuthLoginUserpass</a>

auth_login_userpass block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#auth_login_userpass VaultProvider#auth_login_userpass}

---

##### `CaCertDir`<sup>Optional</sup> <a name="CaCertDir" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.caCertDir"></a>

```go
CaCertDir *string
```

- *Type:* *string

Path to directory containing CA certificate files to validate the server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#ca_cert_dir VaultProvider#ca_cert_dir}

---

##### `CaCertFile`<sup>Optional</sup> <a name="CaCertFile" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.caCertFile"></a>

```go
CaCertFile *string
```

- *Type:* *string

Path to a CA certificate file to validate the server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#ca_cert_file VaultProvider#ca_cert_file}

---

##### `ClientAuth`<sup>Optional</sup> <a name="ClientAuth" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.clientAuth"></a>

```go
ClientAuth VaultProviderClientAuth
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a>

client_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#client_auth VaultProvider#client_auth}

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.headers"></a>

```go
Headers interface{}
```

- *Type:* interface{}

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#headers VaultProvider#headers}

---

##### `MaxLeaseTtlSeconds`<sup>Optional</sup> <a name="MaxLeaseTtlSeconds" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.maxLeaseTtlSeconds"></a>

```go
MaxLeaseTtlSeconds *f64
```

- *Type:* *f64

Maximum TTL for secret leases requested by this provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#max_lease_ttl_seconds VaultProvider#max_lease_ttl_seconds}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.maxRetries"></a>

```go
MaxRetries *f64
```

- *Type:* *f64

Maximum number of retries when a 5xx error code is encountered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#max_retries VaultProvider#max_retries}

---

##### `MaxRetriesCcc`<sup>Optional</sup> <a name="MaxRetriesCcc" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.maxRetriesCcc"></a>

```go
MaxRetriesCcc *f64
```

- *Type:* *f64

Maximum number of retries for Client Controlled Consistency related operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#max_retries_ccc VaultProvider#max_retries_ccc}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The namespace to use. Available only for Vault Enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#namespace VaultProvider#namespace}

---

##### `SkipChildToken`<sup>Optional</sup> <a name="SkipChildToken" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.skipChildToken"></a>

```go
SkipChildToken interface{}
```

- *Type:* interface{}

Set this to true to prevent the creation of ephemeral child token used by this provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#skip_child_token VaultProvider#skip_child_token}

---

##### `SkipGetVaultVersion`<sup>Optional</sup> <a name="SkipGetVaultVersion" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.skipGetVaultVersion"></a>

```go
SkipGetVaultVersion interface{}
```

- *Type:* interface{}

Skip the dynamic fetching of the Vault server version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#skip_get_vault_version VaultProvider#skip_get_vault_version}

---

##### `SkipTlsVerify`<sup>Optional</sup> <a name="SkipTlsVerify" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.skipTlsVerify"></a>

```go
SkipTlsVerify interface{}
```

- *Type:* interface{}

Set this to true only if the target Vault server is an insecure development instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#skip_tls_verify VaultProvider#skip_tls_verify}

---

##### `TlsServerName`<sup>Optional</sup> <a name="TlsServerName" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.tlsServerName"></a>

```go
TlsServerName *string
```

- *Type:* *string

Name to use as the SNI host when connecting via TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#tls_server_name VaultProvider#tls_server_name}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.token"></a>

```go
Token *string
```

- *Type:* *string

Token to use to authenticate to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#token VaultProvider#token}

---

##### `TokenName`<sup>Optional</sup> <a name="TokenName" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.tokenName"></a>

```go
TokenName *string
```

- *Type:* *string

Token name to use for creating the Vault child token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#token_name VaultProvider#token_name}

---

##### `VaultVersionOverride`<sup>Optional</sup> <a name="VaultVersionOverride" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.vaultVersionOverride"></a>

```go
VaultVersionOverride *string
```

- *Type:* *string

Override the Vault server version, which is normally determined dynamically from the target Vault server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#vault_version_override VaultProvider#vault_version_override}

---

### VaultProviderHeaders <a name="VaultProviderHeaders" id="@cdktf/provider-vault.provider.VaultProviderHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/provider"

&provider.VaultProviderHeaders {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderHeaders.property.name">Name</a></code> | <code>*string</code> | The header name. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderHeaders.property.value">Value</a></code> | <code>*string</code> | The header value. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.provider.VaultProviderHeaders.property.name"></a>

```go
Name *string
```

- *Type:* *string

The header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#name VaultProvider#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.provider.VaultProviderHeaders.property.value"></a>

```go
Value *string
```

- *Type:* *string

The header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs#value VaultProvider#value}

---



