# `provider`

Refer to the Terraform Registory for docs: [`vault`](https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-vault.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultProvider <a name="VaultProvider" id="@cdktf/provider-vault.provider.VaultProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.provider.VaultProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new VaultProvider(Construct Scope, string Id, VaultProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig">VaultProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.provider.VaultProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.provider.VaultProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.provider.VaultProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.provider.VaultProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.provider.VaultProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.provider.VaultProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.provider.VaultProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.provider.VaultProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAddAddressToEnv` <a name="ResetAddAddressToEnv" id="@cdktf/provider-vault.provider.VaultProvider.resetAddAddressToEnv"></a>

```csharp
private void ResetAddAddressToEnv()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-vault.provider.VaultProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetAuthLogin` <a name="ResetAuthLogin" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLogin"></a>

```csharp
private void ResetAuthLogin()
```

##### `ResetAuthLoginAws` <a name="ResetAuthLoginAws" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginAws"></a>

```csharp
private void ResetAuthLoginAws()
```

##### `ResetAuthLoginAzure` <a name="ResetAuthLoginAzure" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginAzure"></a>

```csharp
private void ResetAuthLoginAzure()
```

##### `ResetAuthLoginCert` <a name="ResetAuthLoginCert" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginCert"></a>

```csharp
private void ResetAuthLoginCert()
```

##### `ResetAuthLoginGcp` <a name="ResetAuthLoginGcp" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginGcp"></a>

```csharp
private void ResetAuthLoginGcp()
```

##### `ResetAuthLoginJwt` <a name="ResetAuthLoginJwt" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginJwt"></a>

```csharp
private void ResetAuthLoginJwt()
```

##### `ResetAuthLoginKerberos` <a name="ResetAuthLoginKerberos" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginKerberos"></a>

```csharp
private void ResetAuthLoginKerberos()
```

##### `ResetAuthLoginOci` <a name="ResetAuthLoginOci" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginOci"></a>

```csharp
private void ResetAuthLoginOci()
```

##### `ResetAuthLoginOidc` <a name="ResetAuthLoginOidc" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginOidc"></a>

```csharp
private void ResetAuthLoginOidc()
```

##### `ResetAuthLoginRadius` <a name="ResetAuthLoginRadius" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginRadius"></a>

```csharp
private void ResetAuthLoginRadius()
```

##### `ResetAuthLoginTokenFile` <a name="ResetAuthLoginTokenFile" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginTokenFile"></a>

```csharp
private void ResetAuthLoginTokenFile()
```

##### `ResetAuthLoginUserpass` <a name="ResetAuthLoginUserpass" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginUserpass"></a>

```csharp
private void ResetAuthLoginUserpass()
```

##### `ResetCaCertDir` <a name="ResetCaCertDir" id="@cdktf/provider-vault.provider.VaultProvider.resetCaCertDir"></a>

```csharp
private void ResetCaCertDir()
```

##### `ResetCaCertFile` <a name="ResetCaCertFile" id="@cdktf/provider-vault.provider.VaultProvider.resetCaCertFile"></a>

```csharp
private void ResetCaCertFile()
```

##### `ResetClientAuth` <a name="ResetClientAuth" id="@cdktf/provider-vault.provider.VaultProvider.resetClientAuth"></a>

```csharp
private void ResetClientAuth()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-vault.provider.VaultProvider.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetMaxLeaseTtlSeconds` <a name="ResetMaxLeaseTtlSeconds" id="@cdktf/provider-vault.provider.VaultProvider.resetMaxLeaseTtlSeconds"></a>

```csharp
private void ResetMaxLeaseTtlSeconds()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktf/provider-vault.provider.VaultProvider.resetMaxRetries"></a>

```csharp
private void ResetMaxRetries()
```

##### `ResetMaxRetriesCcc` <a name="ResetMaxRetriesCcc" id="@cdktf/provider-vault.provider.VaultProvider.resetMaxRetriesCcc"></a>

```csharp
private void ResetMaxRetriesCcc()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.provider.VaultProvider.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetSkipChildToken` <a name="ResetSkipChildToken" id="@cdktf/provider-vault.provider.VaultProvider.resetSkipChildToken"></a>

```csharp
private void ResetSkipChildToken()
```

##### `ResetSkipGetVaultVersion` <a name="ResetSkipGetVaultVersion" id="@cdktf/provider-vault.provider.VaultProvider.resetSkipGetVaultVersion"></a>

```csharp
private void ResetSkipGetVaultVersion()
```

##### `ResetSkipTlsVerify` <a name="ResetSkipTlsVerify" id="@cdktf/provider-vault.provider.VaultProvider.resetSkipTlsVerify"></a>

```csharp
private void ResetSkipTlsVerify()
```

##### `ResetTlsServerName` <a name="ResetTlsServerName" id="@cdktf/provider-vault.provider.VaultProvider.resetTlsServerName"></a>

```csharp
private void ResetTlsServerName()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-vault.provider.VaultProvider.resetToken"></a>

```csharp
private void ResetToken()
```

##### `ResetTokenName` <a name="ResetTokenName" id="@cdktf/provider-vault.provider.VaultProvider.resetTokenName"></a>

```csharp
private void ResetTokenName()
```

##### `ResetVaultVersionOverride` <a name="ResetVaultVersionOverride" id="@cdktf/provider-vault.provider.VaultProvider.resetVaultVersionOverride"></a>

```csharp
private void ResetVaultVersionOverride()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.provider.VaultProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

VaultProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.provider.VaultProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.provider.VaultProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

VaultProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.provider.VaultProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-vault.provider.VaultProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

VaultProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.provider.VaultProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.addAddressToEnvInput">AddAddressToEnvInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
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
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.caCertDirInput">CaCertDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.caCertFileInput">CaCertFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.clientAuthInput">ClientAuthInput</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.headersInput">HeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.maxLeaseTtlSecondsInput">MaxLeaseTtlSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.maxRetriesCccInput">MaxRetriesCccInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.skipChildTokenInput">SkipChildTokenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.skipGetVaultVersionInput">SkipGetVaultVersionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.skipTlsVerifyInput">SkipTlsVerifyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.tlsServerNameInput">TlsServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.tokenNameInput">TokenNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.vaultVersionOverrideInput">VaultVersionOverrideInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.addAddressToEnv">AddAddressToEnv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.address">Address</a></code> | <code>string</code> | *No description.* |
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
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.caCertDir">CaCertDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.caCertFile">CaCertFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.clientAuth">ClientAuth</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.headers">Headers</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.maxRetries">MaxRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.maxRetriesCcc">MaxRetriesCcc</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.skipChildToken">SkipChildToken</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.skipGetVaultVersion">SkipGetVaultVersion</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.skipTlsVerify">SkipTlsVerify</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.tlsServerName">TlsServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.tokenName">TokenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.vaultVersionOverride">VaultVersionOverride</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.provider.VaultProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.provider.VaultProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.provider.VaultProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.provider.VaultProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-vault.provider.VaultProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.provider.VaultProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.provider.VaultProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-vault.provider.VaultProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-vault.provider.VaultProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AddAddressToEnvInput`<sup>Optional</sup> <a name="AddAddressToEnvInput" id="@cdktf/provider-vault.provider.VaultProvider.property.addAddressToEnvInput"></a>

```csharp
public string AddAddressToEnvInput { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-vault.provider.VaultProvider.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-vault.provider.VaultProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `AuthLoginAwsInput`<sup>Optional</sup> <a name="AuthLoginAwsInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginAwsInput"></a>

```csharp
public VaultProviderAuthLoginAws AuthLoginAwsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws">VaultProviderAuthLoginAws</a>

---

##### `AuthLoginAzureInput`<sup>Optional</sup> <a name="AuthLoginAzureInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginAzureInput"></a>

```csharp
public VaultProviderAuthLoginAzure AuthLoginAzureInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure">VaultProviderAuthLoginAzure</a>

---

##### `AuthLoginCertInput`<sup>Optional</sup> <a name="AuthLoginCertInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginCertInput"></a>

```csharp
public VaultProviderAuthLoginCert AuthLoginCertInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert">VaultProviderAuthLoginCert</a>

---

##### `AuthLoginGcpInput`<sup>Optional</sup> <a name="AuthLoginGcpInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginGcpInput"></a>

```csharp
public VaultProviderAuthLoginGcp AuthLoginGcpInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp">VaultProviderAuthLoginGcp</a>

---

##### `AuthLoginInput`<sup>Optional</sup> <a name="AuthLoginInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginInput"></a>

```csharp
public VaultProviderAuthLogin AuthLoginInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin">VaultProviderAuthLogin</a>

---

##### `AuthLoginJwtInput`<sup>Optional</sup> <a name="AuthLoginJwtInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginJwtInput"></a>

```csharp
public VaultProviderAuthLoginJwt AuthLoginJwtInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt">VaultProviderAuthLoginJwt</a>

---

##### `AuthLoginKerberosInput`<sup>Optional</sup> <a name="AuthLoginKerberosInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginKerberosInput"></a>

```csharp
public VaultProviderAuthLoginKerberos AuthLoginKerberosInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos">VaultProviderAuthLoginKerberos</a>

---

##### `AuthLoginOciInput`<sup>Optional</sup> <a name="AuthLoginOciInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginOciInput"></a>

```csharp
public VaultProviderAuthLoginOci AuthLoginOciInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci">VaultProviderAuthLoginOci</a>

---

##### `AuthLoginOidcInput`<sup>Optional</sup> <a name="AuthLoginOidcInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginOidcInput"></a>

```csharp
public VaultProviderAuthLoginOidc AuthLoginOidcInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc">VaultProviderAuthLoginOidc</a>

---

##### `AuthLoginRadiusInput`<sup>Optional</sup> <a name="AuthLoginRadiusInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginRadiusInput"></a>

```csharp
public VaultProviderAuthLoginRadius AuthLoginRadiusInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius">VaultProviderAuthLoginRadius</a>

---

##### `AuthLoginTokenFileInput`<sup>Optional</sup> <a name="AuthLoginTokenFileInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginTokenFileInput"></a>

```csharp
public VaultProviderAuthLoginTokenFile AuthLoginTokenFileInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile">VaultProviderAuthLoginTokenFile</a>

---

##### `AuthLoginUserpassInput`<sup>Optional</sup> <a name="AuthLoginUserpassInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginUserpassInput"></a>

```csharp
public VaultProviderAuthLoginUserpass AuthLoginUserpassInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass">VaultProviderAuthLoginUserpass</a>

---

##### `CaCertDirInput`<sup>Optional</sup> <a name="CaCertDirInput" id="@cdktf/provider-vault.provider.VaultProvider.property.caCertDirInput"></a>

```csharp
public string CaCertDirInput { get; }
```

- *Type:* string

---

##### `CaCertFileInput`<sup>Optional</sup> <a name="CaCertFileInput" id="@cdktf/provider-vault.provider.VaultProvider.property.caCertFileInput"></a>

```csharp
public string CaCertFileInput { get; }
```

- *Type:* string

---

##### `ClientAuthInput`<sup>Optional</sup> <a name="ClientAuthInput" id="@cdktf/provider-vault.provider.VaultProvider.property.clientAuthInput"></a>

```csharp
public VaultProviderClientAuth ClientAuthInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-vault.provider.VaultProvider.property.headersInput"></a>

```csharp
public object HeadersInput { get; }
```

- *Type:* object

---

##### `MaxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="MaxLeaseTtlSecondsInput" id="@cdktf/provider-vault.provider.VaultProvider.property.maxLeaseTtlSecondsInput"></a>

```csharp
public double MaxLeaseTtlSecondsInput { get; }
```

- *Type:* double

---

##### `MaxRetriesCccInput`<sup>Optional</sup> <a name="MaxRetriesCccInput" id="@cdktf/provider-vault.provider.VaultProvider.property.maxRetriesCccInput"></a>

```csharp
public double MaxRetriesCccInput { get; }
```

- *Type:* double

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktf/provider-vault.provider.VaultProvider.property.maxRetriesInput"></a>

```csharp
public double MaxRetriesInput { get; }
```

- *Type:* double

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.provider.VaultProvider.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `SkipChildTokenInput`<sup>Optional</sup> <a name="SkipChildTokenInput" id="@cdktf/provider-vault.provider.VaultProvider.property.skipChildTokenInput"></a>

```csharp
public object SkipChildTokenInput { get; }
```

- *Type:* object

---

##### `SkipGetVaultVersionInput`<sup>Optional</sup> <a name="SkipGetVaultVersionInput" id="@cdktf/provider-vault.provider.VaultProvider.property.skipGetVaultVersionInput"></a>

```csharp
public object SkipGetVaultVersionInput { get; }
```

- *Type:* object

---

##### `SkipTlsVerifyInput`<sup>Optional</sup> <a name="SkipTlsVerifyInput" id="@cdktf/provider-vault.provider.VaultProvider.property.skipTlsVerifyInput"></a>

```csharp
public object SkipTlsVerifyInput { get; }
```

- *Type:* object

---

##### `TlsServerNameInput`<sup>Optional</sup> <a name="TlsServerNameInput" id="@cdktf/provider-vault.provider.VaultProvider.property.tlsServerNameInput"></a>

```csharp
public string TlsServerNameInput { get; }
```

- *Type:* string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-vault.provider.VaultProvider.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `TokenNameInput`<sup>Optional</sup> <a name="TokenNameInput" id="@cdktf/provider-vault.provider.VaultProvider.property.tokenNameInput"></a>

```csharp
public string TokenNameInput { get; }
```

- *Type:* string

---

##### `VaultVersionOverrideInput`<sup>Optional</sup> <a name="VaultVersionOverrideInput" id="@cdktf/provider-vault.provider.VaultProvider.property.vaultVersionOverrideInput"></a>

```csharp
public string VaultVersionOverrideInput { get; }
```

- *Type:* string

---

##### `AddAddressToEnv`<sup>Optional</sup> <a name="AddAddressToEnv" id="@cdktf/provider-vault.provider.VaultProvider.property.addAddressToEnv"></a>

```csharp
public string AddAddressToEnv { get; }
```

- *Type:* string

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-vault.provider.VaultProvider.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `AuthLogin`<sup>Optional</sup> <a name="AuthLogin" id="@cdktf/provider-vault.provider.VaultProvider.property.authLogin"></a>

```csharp
public VaultProviderAuthLogin AuthLogin { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin">VaultProviderAuthLogin</a>

---

##### `AuthLoginAws`<sup>Optional</sup> <a name="AuthLoginAws" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginAws"></a>

```csharp
public VaultProviderAuthLoginAws AuthLoginAws { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws">VaultProviderAuthLoginAws</a>

---

##### `AuthLoginAzure`<sup>Optional</sup> <a name="AuthLoginAzure" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginAzure"></a>

```csharp
public VaultProviderAuthLoginAzure AuthLoginAzure { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure">VaultProviderAuthLoginAzure</a>

---

##### `AuthLoginCert`<sup>Optional</sup> <a name="AuthLoginCert" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginCert"></a>

```csharp
public VaultProviderAuthLoginCert AuthLoginCert { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert">VaultProviderAuthLoginCert</a>

---

##### `AuthLoginGcp`<sup>Optional</sup> <a name="AuthLoginGcp" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginGcp"></a>

```csharp
public VaultProviderAuthLoginGcp AuthLoginGcp { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp">VaultProviderAuthLoginGcp</a>

---

##### `AuthLoginJwt`<sup>Optional</sup> <a name="AuthLoginJwt" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginJwt"></a>

```csharp
public VaultProviderAuthLoginJwt AuthLoginJwt { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt">VaultProviderAuthLoginJwt</a>

---

##### `AuthLoginKerberos`<sup>Optional</sup> <a name="AuthLoginKerberos" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginKerberos"></a>

```csharp
public VaultProviderAuthLoginKerberos AuthLoginKerberos { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos">VaultProviderAuthLoginKerberos</a>

---

##### `AuthLoginOci`<sup>Optional</sup> <a name="AuthLoginOci" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginOci"></a>

```csharp
public VaultProviderAuthLoginOci AuthLoginOci { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci">VaultProviderAuthLoginOci</a>

---

##### `AuthLoginOidc`<sup>Optional</sup> <a name="AuthLoginOidc" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginOidc"></a>

```csharp
public VaultProviderAuthLoginOidc AuthLoginOidc { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc">VaultProviderAuthLoginOidc</a>

---

##### `AuthLoginRadius`<sup>Optional</sup> <a name="AuthLoginRadius" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginRadius"></a>

```csharp
public VaultProviderAuthLoginRadius AuthLoginRadius { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius">VaultProviderAuthLoginRadius</a>

---

##### `AuthLoginTokenFile`<sup>Optional</sup> <a name="AuthLoginTokenFile" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginTokenFile"></a>

```csharp
public VaultProviderAuthLoginTokenFile AuthLoginTokenFile { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile">VaultProviderAuthLoginTokenFile</a>

---

##### `AuthLoginUserpass`<sup>Optional</sup> <a name="AuthLoginUserpass" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginUserpass"></a>

```csharp
public VaultProviderAuthLoginUserpass AuthLoginUserpass { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass">VaultProviderAuthLoginUserpass</a>

---

##### `CaCertDir`<sup>Optional</sup> <a name="CaCertDir" id="@cdktf/provider-vault.provider.VaultProvider.property.caCertDir"></a>

```csharp
public string CaCertDir { get; }
```

- *Type:* string

---

##### `CaCertFile`<sup>Optional</sup> <a name="CaCertFile" id="@cdktf/provider-vault.provider.VaultProvider.property.caCertFile"></a>

```csharp
public string CaCertFile { get; }
```

- *Type:* string

---

##### `ClientAuth`<sup>Optional</sup> <a name="ClientAuth" id="@cdktf/provider-vault.provider.VaultProvider.property.clientAuth"></a>

```csharp
public VaultProviderClientAuth ClientAuth { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a>

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-vault.provider.VaultProvider.property.headers"></a>

```csharp
public object Headers { get; }
```

- *Type:* object

---

##### `MaxLeaseTtlSeconds`<sup>Optional</sup> <a name="MaxLeaseTtlSeconds" id="@cdktf/provider-vault.provider.VaultProvider.property.maxLeaseTtlSeconds"></a>

```csharp
public double MaxLeaseTtlSeconds { get; }
```

- *Type:* double

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-vault.provider.VaultProvider.property.maxRetries"></a>

```csharp
public double MaxRetries { get; }
```

- *Type:* double

---

##### `MaxRetriesCcc`<sup>Optional</sup> <a name="MaxRetriesCcc" id="@cdktf/provider-vault.provider.VaultProvider.property.maxRetriesCcc"></a>

```csharp
public double MaxRetriesCcc { get; }
```

- *Type:* double

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.provider.VaultProvider.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `SkipChildToken`<sup>Optional</sup> <a name="SkipChildToken" id="@cdktf/provider-vault.provider.VaultProvider.property.skipChildToken"></a>

```csharp
public object SkipChildToken { get; }
```

- *Type:* object

---

##### `SkipGetVaultVersion`<sup>Optional</sup> <a name="SkipGetVaultVersion" id="@cdktf/provider-vault.provider.VaultProvider.property.skipGetVaultVersion"></a>

```csharp
public object SkipGetVaultVersion { get; }
```

- *Type:* object

---

##### `SkipTlsVerify`<sup>Optional</sup> <a name="SkipTlsVerify" id="@cdktf/provider-vault.provider.VaultProvider.property.skipTlsVerify"></a>

```csharp
public object SkipTlsVerify { get; }
```

- *Type:* object

---

##### `TlsServerName`<sup>Optional</sup> <a name="TlsServerName" id="@cdktf/provider-vault.provider.VaultProvider.property.tlsServerName"></a>

```csharp
public string TlsServerName { get; }
```

- *Type:* string

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-vault.provider.VaultProvider.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `TokenName`<sup>Optional</sup> <a name="TokenName" id="@cdktf/provider-vault.provider.VaultProvider.property.tokenName"></a>

```csharp
public string TokenName { get; }
```

- *Type:* string

---

##### `VaultVersionOverride`<sup>Optional</sup> <a name="VaultVersionOverride" id="@cdktf/provider-vault.provider.VaultProvider.property.vaultVersionOverride"></a>

```csharp
public string VaultVersionOverride { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.provider.VaultProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultProviderAuthLogin <a name="VaultProviderAuthLogin" id="@cdktf/provider-vault.provider.VaultProviderAuthLogin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLogin.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new VaultProviderAuthLogin {
    string Path,
    string Method = null,
    string Namespace = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#path VaultProvider#path}. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.method">Method</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#method VaultProvider#method}. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#namespace VaultProvider#namespace}. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#parameters VaultProvider#parameters}. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#path VaultProvider#path}.

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#method VaultProvider#method}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#namespace VaultProvider#namespace}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#parameters VaultProvider#parameters}.

---

### VaultProviderAuthLoginAws <a name="VaultProviderAuthLoginAws" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new VaultProviderAuthLoginAws {
    string Role,
    string AwsAccessKeyId = null,
    string AwsIamEndpoint = null,
    string AwsProfile = null,
    string AwsRegion = null,
    string AwsRoleArn = null,
    string AwsRoleSessionName = null,
    string AwsSecretAccessKey = null,
    string AwsSessionToken = null,
    string AwsSharedCredentialsFile = null,
    string AwsStsEndpoint = null,
    string AwsWebIdentityTokenFile = null,
    string HeaderValue = null,
    string Mount = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.role">Role</a></code> | <code>string</code> | The Vault role to use when logging into Vault. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsAccessKeyId">AwsAccessKeyId</a></code> | <code>string</code> | The AWS access key ID. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsIamEndpoint">AwsIamEndpoint</a></code> | <code>string</code> | The IAM endpoint URL. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsProfile">AwsProfile</a></code> | <code>string</code> | The name of the AWS profile. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsRegion">AwsRegion</a></code> | <code>string</code> | The AWS region. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsRoleArn">AwsRoleArn</a></code> | <code>string</code> | The ARN of the AWS Role to assume.Used during STS AssumeRole. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsRoleSessionName">AwsRoleSessionName</a></code> | <code>string</code> | Specifies the name to attach to the AWS role session. Used during STS AssumeRole. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsSecretAccessKey">AwsSecretAccessKey</a></code> | <code>string</code> | The AWS secret access key. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsSessionToken">AwsSessionToken</a></code> | <code>string</code> | The AWS session token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsSharedCredentialsFile">AwsSharedCredentialsFile</a></code> | <code>string</code> | Path to the AWS shared credentials file. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsStsEndpoint">AwsStsEndpoint</a></code> | <code>string</code> | The STS endpoint URL. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsWebIdentityTokenFile">AwsWebIdentityTokenFile</a></code> | <code>string</code> | Path to the file containing an OAuth 2.0 access token or OpenID Connect ID token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.headerValue">HeaderValue</a></code> | <code>string</code> | The Vault header value to include in the STS signing request. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.mount">Mount</a></code> | <code>string</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.namespace">Namespace</a></code> | <code>string</code> | The authentication engine's namespace. |

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

The Vault role to use when logging into Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#role VaultProvider#role}

---

##### `AwsAccessKeyId`<sup>Optional</sup> <a name="AwsAccessKeyId" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsAccessKeyId"></a>

```csharp
public string AwsAccessKeyId { get; set; }
```

- *Type:* string

The AWS access key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#aws_access_key_id VaultProvider#aws_access_key_id}

---

##### `AwsIamEndpoint`<sup>Optional</sup> <a name="AwsIamEndpoint" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsIamEndpoint"></a>

```csharp
public string AwsIamEndpoint { get; set; }
```

- *Type:* string

The IAM endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#aws_iam_endpoint VaultProvider#aws_iam_endpoint}

---

##### `AwsProfile`<sup>Optional</sup> <a name="AwsProfile" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsProfile"></a>

```csharp
public string AwsProfile { get; set; }
```

- *Type:* string

The name of the AWS profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#aws_profile VaultProvider#aws_profile}

---

##### `AwsRegion`<sup>Optional</sup> <a name="AwsRegion" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsRegion"></a>

```csharp
public string AwsRegion { get; set; }
```

- *Type:* string

The AWS region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#aws_region VaultProvider#aws_region}

---

##### `AwsRoleArn`<sup>Optional</sup> <a name="AwsRoleArn" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsRoleArn"></a>

```csharp
public string AwsRoleArn { get; set; }
```

- *Type:* string

The ARN of the AWS Role to assume.Used during STS AssumeRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#aws_role_arn VaultProvider#aws_role_arn}

---

##### `AwsRoleSessionName`<sup>Optional</sup> <a name="AwsRoleSessionName" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsRoleSessionName"></a>

```csharp
public string AwsRoleSessionName { get; set; }
```

- *Type:* string

Specifies the name to attach to the AWS role session. Used during STS AssumeRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#aws_role_session_name VaultProvider#aws_role_session_name}

---

##### `AwsSecretAccessKey`<sup>Optional</sup> <a name="AwsSecretAccessKey" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsSecretAccessKey"></a>

```csharp
public string AwsSecretAccessKey { get; set; }
```

- *Type:* string

The AWS secret access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#aws_secret_access_key VaultProvider#aws_secret_access_key}

---

##### `AwsSessionToken`<sup>Optional</sup> <a name="AwsSessionToken" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsSessionToken"></a>

```csharp
public string AwsSessionToken { get; set; }
```

- *Type:* string

The AWS session token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#aws_session_token VaultProvider#aws_session_token}

---

##### `AwsSharedCredentialsFile`<sup>Optional</sup> <a name="AwsSharedCredentialsFile" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsSharedCredentialsFile"></a>

```csharp
public string AwsSharedCredentialsFile { get; set; }
```

- *Type:* string

Path to the AWS shared credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#aws_shared_credentials_file VaultProvider#aws_shared_credentials_file}

---

##### `AwsStsEndpoint`<sup>Optional</sup> <a name="AwsStsEndpoint" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsStsEndpoint"></a>

```csharp
public string AwsStsEndpoint { get; set; }
```

- *Type:* string

The STS endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#aws_sts_endpoint VaultProvider#aws_sts_endpoint}

---

##### `AwsWebIdentityTokenFile`<sup>Optional</sup> <a name="AwsWebIdentityTokenFile" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsWebIdentityTokenFile"></a>

```csharp
public string AwsWebIdentityTokenFile { get; set; }
```

- *Type:* string

Path to the file containing an OAuth 2.0 access token or OpenID Connect ID token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#aws_web_identity_token_file VaultProvider#aws_web_identity_token_file}

---

##### `HeaderValue`<sup>Optional</sup> <a name="HeaderValue" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.headerValue"></a>

```csharp
public string HeaderValue { get; set; }
```

- *Type:* string

The Vault header value to include in the STS signing request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#header_value VaultProvider#header_value}

---

##### `Mount`<sup>Optional</sup> <a name="Mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#mount VaultProvider#mount}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#namespace VaultProvider#namespace}

---

### VaultProviderAuthLoginAzure <a name="VaultProviderAuthLoginAzure" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new VaultProviderAuthLoginAzure {
    string ResourceGroupName,
    string Role,
    string SubscriptionId,
    string ClientId = null,
    string Jwt = null,
    string Mount = null,
    string Namespace = null,
    string Scope = null,
    string TenantId = null,
    string VmName = null,
    string VmssName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | The resource group for the machine that generated the MSI token. This information can be obtained through instance metadata. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.role">Role</a></code> | <code>string</code> | Name of the login role. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | The subscription ID for the machine that generated the MSI token. This information can be obtained through instance metadata. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.clientId">ClientId</a></code> | <code>string</code> | The identity's client ID. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.jwt">Jwt</a></code> | <code>string</code> | A signed JSON Web Token. If not specified on will be created automatically. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.mount">Mount</a></code> | <code>string</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.namespace">Namespace</a></code> | <code>string</code> | The authentication engine's namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.scope">Scope</a></code> | <code>string</code> | The scopes to include in the token request. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.tenantId">TenantId</a></code> | <code>string</code> | Provides the tenant ID to use in a multi-tenant authentication scenario. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.vmName">VmName</a></code> | <code>string</code> | The virtual machine name for the machine that generated the MSI token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.vmssName">VmssName</a></code> | <code>string</code> | The virtual machine scale set name for the machine that generated the MSI token. |

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

The resource group for the machine that generated the MSI token. This information can be obtained through instance metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#resource_group_name VaultProvider#resource_group_name}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Name of the login role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#role VaultProvider#role}

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; set; }
```

- *Type:* string

The subscription ID for the machine that generated the MSI token. This information can be obtained through instance metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#subscription_id VaultProvider#subscription_id}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The identity's client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#client_id VaultProvider#client_id}

---

##### `Jwt`<sup>Optional</sup> <a name="Jwt" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.jwt"></a>

```csharp
public string Jwt { get; set; }
```

- *Type:* string

A signed JSON Web Token. If not specified on will be created automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#jwt VaultProvider#jwt}

---

##### `Mount`<sup>Optional</sup> <a name="Mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#mount VaultProvider#mount}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#namespace VaultProvider#namespace}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

The scopes to include in the token request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#scope VaultProvider#scope}

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Provides the tenant ID to use in a multi-tenant authentication scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#tenant_id VaultProvider#tenant_id}

---

##### `VmName`<sup>Optional</sup> <a name="VmName" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.vmName"></a>

```csharp
public string VmName { get; set; }
```

- *Type:* string

The virtual machine name for the machine that generated the MSI token.

This information can be obtained through instance metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#vm_name VaultProvider#vm_name}

---

##### `VmssName`<sup>Optional</sup> <a name="VmssName" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.vmssName"></a>

```csharp
public string VmssName { get; set; }
```

- *Type:* string

The virtual machine scale set name for the machine that generated the MSI token.

This information can be obtained through instance metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#vmss_name VaultProvider#vmss_name}

---

### VaultProviderAuthLoginCert <a name="VaultProviderAuthLoginCert" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new VaultProviderAuthLoginCert {
    string CertFile,
    string KeyFile,
    string Mount = null,
    string Name = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.certFile">CertFile</a></code> | <code>string</code> | Path to a file containing the client certificate. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.keyFile">KeyFile</a></code> | <code>string</code> | Path to a file containing the private key that the certificate was issued for. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.mount">Mount</a></code> | <code>string</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.name">Name</a></code> | <code>string</code> | Name of the certificate's role. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.namespace">Namespace</a></code> | <code>string</code> | The authentication engine's namespace. |

---

##### `CertFile`<sup>Required</sup> <a name="CertFile" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.certFile"></a>

```csharp
public string CertFile { get; set; }
```

- *Type:* string

Path to a file containing the client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#cert_file VaultProvider#cert_file}

---

##### `KeyFile`<sup>Required</sup> <a name="KeyFile" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.keyFile"></a>

```csharp
public string KeyFile { get; set; }
```

- *Type:* string

Path to a file containing the private key that the certificate was issued for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#key_file VaultProvider#key_file}

---

##### `Mount`<sup>Optional</sup> <a name="Mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#mount VaultProvider#mount}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the certificate's role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#name VaultProvider#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#namespace VaultProvider#namespace}

---

### VaultProviderAuthLoginGcp <a name="VaultProviderAuthLoginGcp" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new VaultProviderAuthLoginGcp {
    string Role,
    string Credentials = null,
    string Jwt = null,
    string Mount = null,
    string Namespace = null,
    string ServiceAccount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.role">Role</a></code> | <code>string</code> | Name of the login role. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.credentials">Credentials</a></code> | <code>string</code> | Path to the Google Cloud credentials file. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.jwt">Jwt</a></code> | <code>string</code> | A signed JSON Web Token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.mount">Mount</a></code> | <code>string</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.namespace">Namespace</a></code> | <code>string</code> | The authentication engine's namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | IAM service account. |

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Name of the login role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#role VaultProvider#role}

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.credentials"></a>

```csharp
public string Credentials { get; set; }
```

- *Type:* string

Path to the Google Cloud credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#credentials VaultProvider#credentials}

---

##### `Jwt`<sup>Optional</sup> <a name="Jwt" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.jwt"></a>

```csharp
public string Jwt { get; set; }
```

- *Type:* string

A signed JSON Web Token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#jwt VaultProvider#jwt}

---

##### `Mount`<sup>Optional</sup> <a name="Mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#mount VaultProvider#mount}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#namespace VaultProvider#namespace}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

IAM service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#service_account VaultProvider#service_account}

---

### VaultProviderAuthLoginJwt <a name="VaultProviderAuthLoginJwt" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new VaultProviderAuthLoginJwt {
    string Jwt,
    string Role,
    string Mount = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.jwt">Jwt</a></code> | <code>string</code> | A signed JSON Web Token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.role">Role</a></code> | <code>string</code> | Name of the login role. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.mount">Mount</a></code> | <code>string</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.namespace">Namespace</a></code> | <code>string</code> | The authentication engine's namespace. |

---

##### `Jwt`<sup>Required</sup> <a name="Jwt" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.jwt"></a>

```csharp
public string Jwt { get; set; }
```

- *Type:* string

A signed JSON Web Token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#jwt VaultProvider#jwt}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Name of the login role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#role VaultProvider#role}

---

##### `Mount`<sup>Optional</sup> <a name="Mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#mount VaultProvider#mount}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#namespace VaultProvider#namespace}

---

### VaultProviderAuthLoginKerberos <a name="VaultProviderAuthLoginKerberos" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new VaultProviderAuthLoginKerberos {
    object DisableFastNegotiation = null,
    string KeytabPath = null,
    string Krb5ConfPath = null,
    string Mount = null,
    string Namespace = null,
    string Realm = null,
    object RemoveInstanceName = null,
    string Service = null,
    string Token = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.disableFastNegotiation">DisableFastNegotiation</a></code> | <code>object</code> | Disable the Kerberos FAST negotiation. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.keytabPath">KeytabPath</a></code> | <code>string</code> | The Kerberos keytab file containing the entry of the login entity. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.krb5ConfPath">Krb5ConfPath</a></code> | <code>string</code> | A valid Kerberos configuration file e.g. /etc/krb5.conf. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.mount">Mount</a></code> | <code>string</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.namespace">Namespace</a></code> | <code>string</code> | The authentication engine's namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.realm">Realm</a></code> | <code>string</code> | The Kerberos server's authoritative authentication domain. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.removeInstanceName">RemoveInstanceName</a></code> | <code>object</code> | Strip the host from the username found in the keytab. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.service">Service</a></code> | <code>string</code> | The service principle name. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.token">Token</a></code> | <code>string</code> | Simple and Protected GSSAPI Negotiation Mechanism (SPNEGO) token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.username">Username</a></code> | <code>string</code> | The username to login into Kerberos with. |

---

##### `DisableFastNegotiation`<sup>Optional</sup> <a name="DisableFastNegotiation" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.disableFastNegotiation"></a>

```csharp
public object DisableFastNegotiation { get; set; }
```

- *Type:* object

Disable the Kerberos FAST negotiation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#disable_fast_negotiation VaultProvider#disable_fast_negotiation}

---

##### `KeytabPath`<sup>Optional</sup> <a name="KeytabPath" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.keytabPath"></a>

```csharp
public string KeytabPath { get; set; }
```

- *Type:* string

The Kerberos keytab file containing the entry of the login entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#keytab_path VaultProvider#keytab_path}

---

##### `Krb5ConfPath`<sup>Optional</sup> <a name="Krb5ConfPath" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.krb5ConfPath"></a>

```csharp
public string Krb5ConfPath { get; set; }
```

- *Type:* string

A valid Kerberos configuration file e.g. /etc/krb5.conf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#krb5conf_path VaultProvider#krb5conf_path}

---

##### `Mount`<sup>Optional</sup> <a name="Mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#mount VaultProvider#mount}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#namespace VaultProvider#namespace}

---

##### `Realm`<sup>Optional</sup> <a name="Realm" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.realm"></a>

```csharp
public string Realm { get; set; }
```

- *Type:* string

The Kerberos server's authoritative authentication domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#realm VaultProvider#realm}

---

##### `RemoveInstanceName`<sup>Optional</sup> <a name="RemoveInstanceName" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.removeInstanceName"></a>

```csharp
public object RemoveInstanceName { get; set; }
```

- *Type:* object

Strip the host from the username found in the keytab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#remove_instance_name VaultProvider#remove_instance_name}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The service principle name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#service VaultProvider#service}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

Simple and Protected GSSAPI Negotiation Mechanism (SPNEGO) token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#token VaultProvider#token}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The username to login into Kerberos with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#username VaultProvider#username}

---

### VaultProviderAuthLoginOci <a name="VaultProviderAuthLoginOci" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOci"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new VaultProviderAuthLoginOci {
    string AuthType,
    string Role,
    string Mount = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.authType">AuthType</a></code> | <code>string</code> | Authentication type to use when getting OCI credentials. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.role">Role</a></code> | <code>string</code> | Name of the login role. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.mount">Mount</a></code> | <code>string</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.namespace">Namespace</a></code> | <code>string</code> | The authentication engine's namespace. |

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.authType"></a>

```csharp
public string AuthType { get; set; }
```

- *Type:* string

Authentication type to use when getting OCI credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#auth_type VaultProvider#auth_type}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Name of the login role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#role VaultProvider#role}

---

##### `Mount`<sup>Optional</sup> <a name="Mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#mount VaultProvider#mount}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#namespace VaultProvider#namespace}

---

### VaultProviderAuthLoginOidc <a name="VaultProviderAuthLoginOidc" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new VaultProviderAuthLoginOidc {
    string Role,
    string CallbackAddress = null,
    string CallbackListenerAddress = null,
    string Mount = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.role">Role</a></code> | <code>string</code> | Name of the login role. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.callbackAddress">CallbackAddress</a></code> | <code>string</code> | The callback address. Must be a valid URI without the path. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.callbackListenerAddress">CallbackListenerAddress</a></code> | <code>string</code> | The callback listener's address. Must be a valid URI without the path. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.mount">Mount</a></code> | <code>string</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.namespace">Namespace</a></code> | <code>string</code> | The authentication engine's namespace. |

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Name of the login role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#role VaultProvider#role}

---

##### `CallbackAddress`<sup>Optional</sup> <a name="CallbackAddress" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.callbackAddress"></a>

```csharp
public string CallbackAddress { get; set; }
```

- *Type:* string

The callback address. Must be a valid URI without the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#callback_address VaultProvider#callback_address}

---

##### `CallbackListenerAddress`<sup>Optional</sup> <a name="CallbackListenerAddress" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.callbackListenerAddress"></a>

```csharp
public string CallbackListenerAddress { get; set; }
```

- *Type:* string

The callback listener's address. Must be a valid URI without the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#callback_listener_address VaultProvider#callback_listener_address}

---

##### `Mount`<sup>Optional</sup> <a name="Mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#mount VaultProvider#mount}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#namespace VaultProvider#namespace}

---

### VaultProviderAuthLoginRadius <a name="VaultProviderAuthLoginRadius" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new VaultProviderAuthLoginRadius {
    string Password,
    string Username,
    string Mount = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.password">Password</a></code> | <code>string</code> | The Radius password for username. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.username">Username</a></code> | <code>string</code> | The Radius username. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.mount">Mount</a></code> | <code>string</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.namespace">Namespace</a></code> | <code>string</code> | The authentication engine's namespace. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The Radius password for username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#password VaultProvider#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The Radius username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#username VaultProvider#username}

---

##### `Mount`<sup>Optional</sup> <a name="Mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#mount VaultProvider#mount}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#namespace VaultProvider#namespace}

---

### VaultProviderAuthLoginTokenFile <a name="VaultProviderAuthLoginTokenFile" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new VaultProviderAuthLoginTokenFile {
    string Filename,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile.property.filename">Filename</a></code> | <code>string</code> | The name of a file containing a single line that is a valid Vault token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile.property.namespace">Namespace</a></code> | <code>string</code> | The authentication engine's namespace. |

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile.property.filename"></a>

```csharp
public string Filename { get; set; }
```

- *Type:* string

The name of a file containing a single line that is a valid Vault token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#filename VaultProvider#filename}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#namespace VaultProvider#namespace}

---

### VaultProviderAuthLoginUserpass <a name="VaultProviderAuthLoginUserpass" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new VaultProviderAuthLoginUserpass {
    string Username,
    string Mount = null,
    string Namespace = null,
    string Password = null,
    string PasswordFile = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.username">Username</a></code> | <code>string</code> | Login with username. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.mount">Mount</a></code> | <code>string</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.namespace">Namespace</a></code> | <code>string</code> | The authentication engine's namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.password">Password</a></code> | <code>string</code> | Login with password. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.passwordFile">PasswordFile</a></code> | <code>string</code> | Login with password from a file. |

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Login with username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#username VaultProvider#username}

---

##### `Mount`<sup>Optional</sup> <a name="Mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#mount VaultProvider#mount}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#namespace VaultProvider#namespace}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Login with password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#password VaultProvider#password}

---

##### `PasswordFile`<sup>Optional</sup> <a name="PasswordFile" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.passwordFile"></a>

```csharp
public string PasswordFile { get; set; }
```

- *Type:* string

Login with password from a file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#password_file VaultProvider#password_file}

---

### VaultProviderClientAuth <a name="VaultProviderClientAuth" id="@cdktf/provider-vault.provider.VaultProviderClientAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderClientAuth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new VaultProviderClientAuth {
    string CertFile = null,
    string KeyFile = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth.property.certFile">CertFile</a></code> | <code>string</code> | Path to a file containing the client certificate. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth.property.keyFile">KeyFile</a></code> | <code>string</code> | Path to a file containing the private key that the certificate was issued for. |

---

##### `CertFile`<sup>Optional</sup> <a name="CertFile" id="@cdktf/provider-vault.provider.VaultProviderClientAuth.property.certFile"></a>

```csharp
public string CertFile { get; set; }
```

- *Type:* string

Path to a file containing the client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#cert_file VaultProvider#cert_file}

---

##### `KeyFile`<sup>Optional</sup> <a name="KeyFile" id="@cdktf/provider-vault.provider.VaultProviderClientAuth.property.keyFile"></a>

```csharp
public string KeyFile { get; set; }
```

- *Type:* string

Path to a file containing the private key that the certificate was issued for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#key_file VaultProvider#key_file}

---

### VaultProviderConfig <a name="VaultProviderConfig" id="@cdktf/provider-vault.provider.VaultProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new VaultProviderConfig {
    string Address,
    string AddAddressToEnv = null,
    string Alias = null,
    VaultProviderAuthLogin AuthLogin = null,
    VaultProviderAuthLoginAws AuthLoginAws = null,
    VaultProviderAuthLoginAzure AuthLoginAzure = null,
    VaultProviderAuthLoginCert AuthLoginCert = null,
    VaultProviderAuthLoginGcp AuthLoginGcp = null,
    VaultProviderAuthLoginJwt AuthLoginJwt = null,
    VaultProviderAuthLoginKerberos AuthLoginKerberos = null,
    VaultProviderAuthLoginOci AuthLoginOci = null,
    VaultProviderAuthLoginOidc AuthLoginOidc = null,
    VaultProviderAuthLoginRadius AuthLoginRadius = null,
    VaultProviderAuthLoginTokenFile AuthLoginTokenFile = null,
    VaultProviderAuthLoginUserpass AuthLoginUserpass = null,
    string CaCertDir = null,
    string CaCertFile = null,
    VaultProviderClientAuth ClientAuth = null,
    object Headers = null,
    double MaxLeaseTtlSeconds = null,
    double MaxRetries = null,
    double MaxRetriesCcc = null,
    string Namespace = null,
    object SkipChildToken = null,
    object SkipGetVaultVersion = null,
    object SkipTlsVerify = null,
    string TlsServerName = null,
    string Token = null,
    string TokenName = null,
    string VaultVersionOverride = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.address">Address</a></code> | <code>string</code> | URL of the root of the target Vault server. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.addAddressToEnv">AddAddressToEnv</a></code> | <code>string</code> | If true, adds the value of the `address` argument to the Terraform process environment. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
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
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.caCertDir">CaCertDir</a></code> | <code>string</code> | Path to directory containing CA certificate files to validate the server's certificate. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.caCertFile">CaCertFile</a></code> | <code>string</code> | Path to a CA certificate file to validate the server's certificate. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.clientAuth">ClientAuth</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a></code> | client_auth block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.headers">Headers</a></code> | <code>object</code> | headers block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>double</code> | Maximum TTL for secret leases requested by this provider. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.maxRetries">MaxRetries</a></code> | <code>double</code> | Maximum number of retries when a 5xx error code is encountered. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.maxRetriesCcc">MaxRetriesCcc</a></code> | <code>double</code> | Maximum number of retries for Client Controlled Consistency related operations. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.namespace">Namespace</a></code> | <code>string</code> | The namespace to use. Available only for Vault Enterprise. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.skipChildToken">SkipChildToken</a></code> | <code>object</code> | Set this to true to prevent the creation of ephemeral child token used by this provider. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.skipGetVaultVersion">SkipGetVaultVersion</a></code> | <code>object</code> | Skip the dynamic fetching of the Vault server version. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.skipTlsVerify">SkipTlsVerify</a></code> | <code>object</code> | Set this to true only if the target Vault server is an insecure development instance. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.tlsServerName">TlsServerName</a></code> | <code>string</code> | Name to use as the SNI host when connecting via TLS. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.token">Token</a></code> | <code>string</code> | Token to use to authenticate to Vault. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.tokenName">TokenName</a></code> | <code>string</code> | Token name to use for creating the Vault child token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.vaultVersionOverride">VaultVersionOverride</a></code> | <code>string</code> | Override the Vault server version, which is normally determined dynamically from the target Vault server. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

URL of the root of the target Vault server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#address VaultProvider#address}

---

##### `AddAddressToEnv`<sup>Optional</sup> <a name="AddAddressToEnv" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.addAddressToEnv"></a>

```csharp
public string AddAddressToEnv { get; set; }
```

- *Type:* string

If true, adds the value of the `address` argument to the Terraform process environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#add_address_to_env VaultProvider#add_address_to_env}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#alias VaultProvider#alias}

---

##### `AuthLogin`<sup>Optional</sup> <a name="AuthLogin" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLogin"></a>

```csharp
public VaultProviderAuthLogin AuthLogin { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin">VaultProviderAuthLogin</a>

auth_login block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#auth_login VaultProvider#auth_login}

---

##### `AuthLoginAws`<sup>Optional</sup> <a name="AuthLoginAws" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginAws"></a>

```csharp
public VaultProviderAuthLoginAws AuthLoginAws { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws">VaultProviderAuthLoginAws</a>

auth_login_aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#auth_login_aws VaultProvider#auth_login_aws}

---

##### `AuthLoginAzure`<sup>Optional</sup> <a name="AuthLoginAzure" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginAzure"></a>

```csharp
public VaultProviderAuthLoginAzure AuthLoginAzure { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure">VaultProviderAuthLoginAzure</a>

auth_login_azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#auth_login_azure VaultProvider#auth_login_azure}

---

##### `AuthLoginCert`<sup>Optional</sup> <a name="AuthLoginCert" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginCert"></a>

```csharp
public VaultProviderAuthLoginCert AuthLoginCert { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert">VaultProviderAuthLoginCert</a>

auth_login_cert block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#auth_login_cert VaultProvider#auth_login_cert}

---

##### `AuthLoginGcp`<sup>Optional</sup> <a name="AuthLoginGcp" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginGcp"></a>

```csharp
public VaultProviderAuthLoginGcp AuthLoginGcp { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp">VaultProviderAuthLoginGcp</a>

auth_login_gcp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#auth_login_gcp VaultProvider#auth_login_gcp}

---

##### `AuthLoginJwt`<sup>Optional</sup> <a name="AuthLoginJwt" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginJwt"></a>

```csharp
public VaultProviderAuthLoginJwt AuthLoginJwt { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt">VaultProviderAuthLoginJwt</a>

auth_login_jwt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#auth_login_jwt VaultProvider#auth_login_jwt}

---

##### `AuthLoginKerberos`<sup>Optional</sup> <a name="AuthLoginKerberos" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginKerberos"></a>

```csharp
public VaultProviderAuthLoginKerberos AuthLoginKerberos { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos">VaultProviderAuthLoginKerberos</a>

auth_login_kerberos block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#auth_login_kerberos VaultProvider#auth_login_kerberos}

---

##### `AuthLoginOci`<sup>Optional</sup> <a name="AuthLoginOci" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginOci"></a>

```csharp
public VaultProviderAuthLoginOci AuthLoginOci { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci">VaultProviderAuthLoginOci</a>

auth_login_oci block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#auth_login_oci VaultProvider#auth_login_oci}

---

##### `AuthLoginOidc`<sup>Optional</sup> <a name="AuthLoginOidc" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginOidc"></a>

```csharp
public VaultProviderAuthLoginOidc AuthLoginOidc { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc">VaultProviderAuthLoginOidc</a>

auth_login_oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#auth_login_oidc VaultProvider#auth_login_oidc}

---

##### `AuthLoginRadius`<sup>Optional</sup> <a name="AuthLoginRadius" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginRadius"></a>

```csharp
public VaultProviderAuthLoginRadius AuthLoginRadius { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius">VaultProviderAuthLoginRadius</a>

auth_login_radius block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#auth_login_radius VaultProvider#auth_login_radius}

---

##### `AuthLoginTokenFile`<sup>Optional</sup> <a name="AuthLoginTokenFile" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginTokenFile"></a>

```csharp
public VaultProviderAuthLoginTokenFile AuthLoginTokenFile { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile">VaultProviderAuthLoginTokenFile</a>

auth_login_token_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#auth_login_token_file VaultProvider#auth_login_token_file}

---

##### `AuthLoginUserpass`<sup>Optional</sup> <a name="AuthLoginUserpass" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginUserpass"></a>

```csharp
public VaultProviderAuthLoginUserpass AuthLoginUserpass { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass">VaultProviderAuthLoginUserpass</a>

auth_login_userpass block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#auth_login_userpass VaultProvider#auth_login_userpass}

---

##### `CaCertDir`<sup>Optional</sup> <a name="CaCertDir" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.caCertDir"></a>

```csharp
public string CaCertDir { get; set; }
```

- *Type:* string

Path to directory containing CA certificate files to validate the server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#ca_cert_dir VaultProvider#ca_cert_dir}

---

##### `CaCertFile`<sup>Optional</sup> <a name="CaCertFile" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.caCertFile"></a>

```csharp
public string CaCertFile { get; set; }
```

- *Type:* string

Path to a CA certificate file to validate the server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#ca_cert_file VaultProvider#ca_cert_file}

---

##### `ClientAuth`<sup>Optional</sup> <a name="ClientAuth" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.clientAuth"></a>

```csharp
public VaultProviderClientAuth ClientAuth { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a>

client_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#client_auth VaultProvider#client_auth}

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.headers"></a>

```csharp
public object Headers { get; set; }
```

- *Type:* object

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#headers VaultProvider#headers}

---

##### `MaxLeaseTtlSeconds`<sup>Optional</sup> <a name="MaxLeaseTtlSeconds" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.maxLeaseTtlSeconds"></a>

```csharp
public double MaxLeaseTtlSeconds { get; set; }
```

- *Type:* double

Maximum TTL for secret leases requested by this provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#max_lease_ttl_seconds VaultProvider#max_lease_ttl_seconds}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.maxRetries"></a>

```csharp
public double MaxRetries { get; set; }
```

- *Type:* double

Maximum number of retries when a 5xx error code is encountered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#max_retries VaultProvider#max_retries}

---

##### `MaxRetriesCcc`<sup>Optional</sup> <a name="MaxRetriesCcc" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.maxRetriesCcc"></a>

```csharp
public double MaxRetriesCcc { get; set; }
```

- *Type:* double

Maximum number of retries for Client Controlled Consistency related operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#max_retries_ccc VaultProvider#max_retries_ccc}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The namespace to use. Available only for Vault Enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#namespace VaultProvider#namespace}

---

##### `SkipChildToken`<sup>Optional</sup> <a name="SkipChildToken" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.skipChildToken"></a>

```csharp
public object SkipChildToken { get; set; }
```

- *Type:* object

Set this to true to prevent the creation of ephemeral child token used by this provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#skip_child_token VaultProvider#skip_child_token}

---

##### `SkipGetVaultVersion`<sup>Optional</sup> <a name="SkipGetVaultVersion" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.skipGetVaultVersion"></a>

```csharp
public object SkipGetVaultVersion { get; set; }
```

- *Type:* object

Skip the dynamic fetching of the Vault server version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#skip_get_vault_version VaultProvider#skip_get_vault_version}

---

##### `SkipTlsVerify`<sup>Optional</sup> <a name="SkipTlsVerify" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.skipTlsVerify"></a>

```csharp
public object SkipTlsVerify { get; set; }
```

- *Type:* object

Set this to true only if the target Vault server is an insecure development instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#skip_tls_verify VaultProvider#skip_tls_verify}

---

##### `TlsServerName`<sup>Optional</sup> <a name="TlsServerName" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.tlsServerName"></a>

```csharp
public string TlsServerName { get; set; }
```

- *Type:* string

Name to use as the SNI host when connecting via TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#tls_server_name VaultProvider#tls_server_name}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

Token to use to authenticate to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#token VaultProvider#token}

---

##### `TokenName`<sup>Optional</sup> <a name="TokenName" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.tokenName"></a>

```csharp
public string TokenName { get; set; }
```

- *Type:* string

Token name to use for creating the Vault child token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#token_name VaultProvider#token_name}

---

##### `VaultVersionOverride`<sup>Optional</sup> <a name="VaultVersionOverride" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.vaultVersionOverride"></a>

```csharp
public string VaultVersionOverride { get; set; }
```

- *Type:* string

Override the Vault server version, which is normally determined dynamically from the target Vault server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#vault_version_override VaultProvider#vault_version_override}

---

### VaultProviderHeaders <a name="VaultProviderHeaders" id="@cdktf/provider-vault.provider.VaultProviderHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new VaultProviderHeaders {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderHeaders.property.name">Name</a></code> | <code>string</code> | The header name. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderHeaders.property.value">Value</a></code> | <code>string</code> | The header value. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.provider.VaultProviderHeaders.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#name VaultProvider#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.provider.VaultProviderHeaders.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs#value VaultProvider#value}

---



