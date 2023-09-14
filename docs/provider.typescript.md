# `provider`

Refer to the Terraform Registory for docs: [`vault`](https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-vault.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultProvider <a name="VaultProvider" id="@cdktf/provider-vault.provider.VaultProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.provider.VaultProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-vault'

new provider.VaultProvider(scope: Construct, id: string, config: VaultProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig">VaultProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderConfig">VaultProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAddAddressToEnv">resetAddAddressToEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLogin">resetAuthLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginAws">resetAuthLoginAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginAzure">resetAuthLoginAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginCert">resetAuthLoginCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginGcp">resetAuthLoginGcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginJwt">resetAuthLoginJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginKerberos">resetAuthLoginKerberos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginOci">resetAuthLoginOci</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginOidc">resetAuthLoginOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginRadius">resetAuthLoginRadius</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginTokenFile">resetAuthLoginTokenFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginUserpass">resetAuthLoginUserpass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetCaCertDir">resetCaCertDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetCaCertFile">resetCaCertFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetClientAuth">resetClientAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetMaxLeaseTtlSeconds">resetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetMaxRetriesCcc">resetMaxRetriesCcc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetSkipChildToken">resetSkipChildToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetSkipGetVaultVersion">resetSkipGetVaultVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetSkipTlsVerify">resetSkipTlsVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetTlsServerName">resetTlsServerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetTokenName">resetTokenName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetVaultVersionOverride">resetVaultVersionOverride</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.provider.VaultProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.provider.VaultProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.provider.VaultProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.provider.VaultProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.provider.VaultProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.provider.VaultProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.provider.VaultProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.provider.VaultProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.provider.VaultProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAddAddressToEnv` <a name="resetAddAddressToEnv" id="@cdktf/provider-vault.provider.VaultProvider.resetAddAddressToEnv"></a>

```typescript
public resetAddAddressToEnv(): void
```

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-vault.provider.VaultProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetAuthLogin` <a name="resetAuthLogin" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLogin"></a>

```typescript
public resetAuthLogin(): void
```

##### `resetAuthLoginAws` <a name="resetAuthLoginAws" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginAws"></a>

```typescript
public resetAuthLoginAws(): void
```

##### `resetAuthLoginAzure` <a name="resetAuthLoginAzure" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginAzure"></a>

```typescript
public resetAuthLoginAzure(): void
```

##### `resetAuthLoginCert` <a name="resetAuthLoginCert" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginCert"></a>

```typescript
public resetAuthLoginCert(): void
```

##### `resetAuthLoginGcp` <a name="resetAuthLoginGcp" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginGcp"></a>

```typescript
public resetAuthLoginGcp(): void
```

##### `resetAuthLoginJwt` <a name="resetAuthLoginJwt" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginJwt"></a>

```typescript
public resetAuthLoginJwt(): void
```

##### `resetAuthLoginKerberos` <a name="resetAuthLoginKerberos" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginKerberos"></a>

```typescript
public resetAuthLoginKerberos(): void
```

##### `resetAuthLoginOci` <a name="resetAuthLoginOci" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginOci"></a>

```typescript
public resetAuthLoginOci(): void
```

##### `resetAuthLoginOidc` <a name="resetAuthLoginOidc" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginOidc"></a>

```typescript
public resetAuthLoginOidc(): void
```

##### `resetAuthLoginRadius` <a name="resetAuthLoginRadius" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginRadius"></a>

```typescript
public resetAuthLoginRadius(): void
```

##### `resetAuthLoginTokenFile` <a name="resetAuthLoginTokenFile" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginTokenFile"></a>

```typescript
public resetAuthLoginTokenFile(): void
```

##### `resetAuthLoginUserpass` <a name="resetAuthLoginUserpass" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginUserpass"></a>

```typescript
public resetAuthLoginUserpass(): void
```

##### `resetCaCertDir` <a name="resetCaCertDir" id="@cdktf/provider-vault.provider.VaultProvider.resetCaCertDir"></a>

```typescript
public resetCaCertDir(): void
```

##### `resetCaCertFile` <a name="resetCaCertFile" id="@cdktf/provider-vault.provider.VaultProvider.resetCaCertFile"></a>

```typescript
public resetCaCertFile(): void
```

##### `resetClientAuth` <a name="resetClientAuth" id="@cdktf/provider-vault.provider.VaultProvider.resetClientAuth"></a>

```typescript
public resetClientAuth(): void
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-vault.provider.VaultProvider.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetMaxLeaseTtlSeconds` <a name="resetMaxLeaseTtlSeconds" id="@cdktf/provider-vault.provider.VaultProvider.resetMaxLeaseTtlSeconds"></a>

```typescript
public resetMaxLeaseTtlSeconds(): void
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktf/provider-vault.provider.VaultProvider.resetMaxRetries"></a>

```typescript
public resetMaxRetries(): void
```

##### `resetMaxRetriesCcc` <a name="resetMaxRetriesCcc" id="@cdktf/provider-vault.provider.VaultProvider.resetMaxRetriesCcc"></a>

```typescript
public resetMaxRetriesCcc(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.provider.VaultProvider.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetSkipChildToken` <a name="resetSkipChildToken" id="@cdktf/provider-vault.provider.VaultProvider.resetSkipChildToken"></a>

```typescript
public resetSkipChildToken(): void
```

##### `resetSkipGetVaultVersion` <a name="resetSkipGetVaultVersion" id="@cdktf/provider-vault.provider.VaultProvider.resetSkipGetVaultVersion"></a>

```typescript
public resetSkipGetVaultVersion(): void
```

##### `resetSkipTlsVerify` <a name="resetSkipTlsVerify" id="@cdktf/provider-vault.provider.VaultProvider.resetSkipTlsVerify"></a>

```typescript
public resetSkipTlsVerify(): void
```

##### `resetTlsServerName` <a name="resetTlsServerName" id="@cdktf/provider-vault.provider.VaultProvider.resetTlsServerName"></a>

```typescript
public resetTlsServerName(): void
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-vault.provider.VaultProvider.resetToken"></a>

```typescript
public resetToken(): void
```

##### `resetTokenName` <a name="resetTokenName" id="@cdktf/provider-vault.provider.VaultProvider.resetTokenName"></a>

```typescript
public resetTokenName(): void
```

##### `resetVaultVersionOverride` <a name="resetVaultVersionOverride" id="@cdktf/provider-vault.provider.VaultProvider.resetVaultVersionOverride"></a>

```typescript
public resetVaultVersionOverride(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.provider.VaultProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-vault'

provider.VaultProvider.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.provider.VaultProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-vault'

provider.VaultProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.provider.VaultProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-vault.provider.VaultProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-vault'

provider.VaultProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.provider.VaultProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.addAddressToEnvInput">addAddressToEnvInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginAwsInput">authLoginAwsInput</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws">VaultProviderAuthLoginAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginAzureInput">authLoginAzureInput</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure">VaultProviderAuthLoginAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginCertInput">authLoginCertInput</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert">VaultProviderAuthLoginCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginGcpInput">authLoginGcpInput</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp">VaultProviderAuthLoginGcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginInput">authLoginInput</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin">VaultProviderAuthLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginJwtInput">authLoginJwtInput</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt">VaultProviderAuthLoginJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginKerberosInput">authLoginKerberosInput</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos">VaultProviderAuthLoginKerberos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginOciInput">authLoginOciInput</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci">VaultProviderAuthLoginOci</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginOidcInput">authLoginOidcInput</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc">VaultProviderAuthLoginOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginRadiusInput">authLoginRadiusInput</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius">VaultProviderAuthLoginRadius</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginTokenFileInput">authLoginTokenFileInput</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile">VaultProviderAuthLoginTokenFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginUserpassInput">authLoginUserpassInput</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass">VaultProviderAuthLoginUserpass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.caCertDirInput">caCertDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.caCertFileInput">caCertFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.clientAuthInput">clientAuthInput</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.headersInput">headersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.provider.VaultProviderHeaders">VaultProviderHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.maxLeaseTtlSecondsInput">maxLeaseTtlSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.maxRetriesCccInput">maxRetriesCccInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.skipChildTokenInput">skipChildTokenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.skipGetVaultVersionInput">skipGetVaultVersionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.skipTlsVerifyInput">skipTlsVerifyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.tlsServerNameInput">tlsServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.tokenNameInput">tokenNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.vaultVersionOverrideInput">vaultVersionOverrideInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.addAddressToEnv">addAddressToEnv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLogin">authLogin</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin">VaultProviderAuthLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginAws">authLoginAws</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws">VaultProviderAuthLoginAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginAzure">authLoginAzure</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure">VaultProviderAuthLoginAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginCert">authLoginCert</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert">VaultProviderAuthLoginCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginGcp">authLoginGcp</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp">VaultProviderAuthLoginGcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginJwt">authLoginJwt</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt">VaultProviderAuthLoginJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginKerberos">authLoginKerberos</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos">VaultProviderAuthLoginKerberos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginOci">authLoginOci</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci">VaultProviderAuthLoginOci</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginOidc">authLoginOidc</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc">VaultProviderAuthLoginOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginRadius">authLoginRadius</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius">VaultProviderAuthLoginRadius</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginTokenFile">authLoginTokenFile</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile">VaultProviderAuthLoginTokenFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginUserpass">authLoginUserpass</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass">VaultProviderAuthLoginUserpass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.caCertDir">caCertDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.caCertFile">caCertFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.clientAuth">clientAuth</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.headers">headers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.provider.VaultProviderHeaders">VaultProviderHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.maxRetriesCcc">maxRetriesCcc</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.skipChildToken">skipChildToken</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.skipGetVaultVersion">skipGetVaultVersion</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.skipTlsVerify">skipTlsVerify</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.tlsServerName">tlsServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.tokenName">tokenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.vaultVersionOverride">vaultVersionOverride</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.provider.VaultProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.provider.VaultProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.provider.VaultProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.provider.VaultProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-vault.provider.VaultProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.provider.VaultProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.provider.VaultProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-vault.provider.VaultProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-vault.provider.VaultProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `addAddressToEnvInput`<sup>Optional</sup> <a name="addAddressToEnvInput" id="@cdktf/provider-vault.provider.VaultProvider.property.addAddressToEnvInput"></a>

```typescript
public readonly addAddressToEnvInput: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-vault.provider.VaultProvider.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-vault.provider.VaultProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `authLoginAwsInput`<sup>Optional</sup> <a name="authLoginAwsInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginAwsInput"></a>

```typescript
public readonly authLoginAwsInput: VaultProviderAuthLoginAws;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws">VaultProviderAuthLoginAws</a>

---

##### `authLoginAzureInput`<sup>Optional</sup> <a name="authLoginAzureInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginAzureInput"></a>

```typescript
public readonly authLoginAzureInput: VaultProviderAuthLoginAzure;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure">VaultProviderAuthLoginAzure</a>

---

##### `authLoginCertInput`<sup>Optional</sup> <a name="authLoginCertInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginCertInput"></a>

```typescript
public readonly authLoginCertInput: VaultProviderAuthLoginCert;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert">VaultProviderAuthLoginCert</a>

---

##### `authLoginGcpInput`<sup>Optional</sup> <a name="authLoginGcpInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginGcpInput"></a>

```typescript
public readonly authLoginGcpInput: VaultProviderAuthLoginGcp;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp">VaultProviderAuthLoginGcp</a>

---

##### `authLoginInput`<sup>Optional</sup> <a name="authLoginInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginInput"></a>

```typescript
public readonly authLoginInput: VaultProviderAuthLogin;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin">VaultProviderAuthLogin</a>

---

##### `authLoginJwtInput`<sup>Optional</sup> <a name="authLoginJwtInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginJwtInput"></a>

```typescript
public readonly authLoginJwtInput: VaultProviderAuthLoginJwt;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt">VaultProviderAuthLoginJwt</a>

---

##### `authLoginKerberosInput`<sup>Optional</sup> <a name="authLoginKerberosInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginKerberosInput"></a>

```typescript
public readonly authLoginKerberosInput: VaultProviderAuthLoginKerberos;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos">VaultProviderAuthLoginKerberos</a>

---

##### `authLoginOciInput`<sup>Optional</sup> <a name="authLoginOciInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginOciInput"></a>

```typescript
public readonly authLoginOciInput: VaultProviderAuthLoginOci;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci">VaultProviderAuthLoginOci</a>

---

##### `authLoginOidcInput`<sup>Optional</sup> <a name="authLoginOidcInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginOidcInput"></a>

```typescript
public readonly authLoginOidcInput: VaultProviderAuthLoginOidc;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc">VaultProviderAuthLoginOidc</a>

---

##### `authLoginRadiusInput`<sup>Optional</sup> <a name="authLoginRadiusInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginRadiusInput"></a>

```typescript
public readonly authLoginRadiusInput: VaultProviderAuthLoginRadius;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius">VaultProviderAuthLoginRadius</a>

---

##### `authLoginTokenFileInput`<sup>Optional</sup> <a name="authLoginTokenFileInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginTokenFileInput"></a>

```typescript
public readonly authLoginTokenFileInput: VaultProviderAuthLoginTokenFile;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile">VaultProviderAuthLoginTokenFile</a>

---

##### `authLoginUserpassInput`<sup>Optional</sup> <a name="authLoginUserpassInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginUserpassInput"></a>

```typescript
public readonly authLoginUserpassInput: VaultProviderAuthLoginUserpass;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass">VaultProviderAuthLoginUserpass</a>

---

##### `caCertDirInput`<sup>Optional</sup> <a name="caCertDirInput" id="@cdktf/provider-vault.provider.VaultProvider.property.caCertDirInput"></a>

```typescript
public readonly caCertDirInput: string;
```

- *Type:* string

---

##### `caCertFileInput`<sup>Optional</sup> <a name="caCertFileInput" id="@cdktf/provider-vault.provider.VaultProvider.property.caCertFileInput"></a>

```typescript
public readonly caCertFileInput: string;
```

- *Type:* string

---

##### `clientAuthInput`<sup>Optional</sup> <a name="clientAuthInput" id="@cdktf/provider-vault.provider.VaultProvider.property.clientAuthInput"></a>

```typescript
public readonly clientAuthInput: VaultProviderClientAuth;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a>

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-vault.provider.VaultProvider.property.headersInput"></a>

```typescript
public readonly headersInput: IResolvable | VaultProviderHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.provider.VaultProviderHeaders">VaultProviderHeaders</a>[]

---

##### `maxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="maxLeaseTtlSecondsInput" id="@cdktf/provider-vault.provider.VaultProvider.property.maxLeaseTtlSecondsInput"></a>

```typescript
public readonly maxLeaseTtlSecondsInput: number;
```

- *Type:* number

---

##### `maxRetriesCccInput`<sup>Optional</sup> <a name="maxRetriesCccInput" id="@cdktf/provider-vault.provider.VaultProvider.property.maxRetriesCccInput"></a>

```typescript
public readonly maxRetriesCccInput: number;
```

- *Type:* number

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-vault.provider.VaultProvider.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.provider.VaultProvider.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `skipChildTokenInput`<sup>Optional</sup> <a name="skipChildTokenInput" id="@cdktf/provider-vault.provider.VaultProvider.property.skipChildTokenInput"></a>

```typescript
public readonly skipChildTokenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipGetVaultVersionInput`<sup>Optional</sup> <a name="skipGetVaultVersionInput" id="@cdktf/provider-vault.provider.VaultProvider.property.skipGetVaultVersionInput"></a>

```typescript
public readonly skipGetVaultVersionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipTlsVerifyInput`<sup>Optional</sup> <a name="skipTlsVerifyInput" id="@cdktf/provider-vault.provider.VaultProvider.property.skipTlsVerifyInput"></a>

```typescript
public readonly skipTlsVerifyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsServerNameInput`<sup>Optional</sup> <a name="tlsServerNameInput" id="@cdktf/provider-vault.provider.VaultProvider.property.tlsServerNameInput"></a>

```typescript
public readonly tlsServerNameInput: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-vault.provider.VaultProvider.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `tokenNameInput`<sup>Optional</sup> <a name="tokenNameInput" id="@cdktf/provider-vault.provider.VaultProvider.property.tokenNameInput"></a>

```typescript
public readonly tokenNameInput: string;
```

- *Type:* string

---

##### `vaultVersionOverrideInput`<sup>Optional</sup> <a name="vaultVersionOverrideInput" id="@cdktf/provider-vault.provider.VaultProvider.property.vaultVersionOverrideInput"></a>

```typescript
public readonly vaultVersionOverrideInput: string;
```

- *Type:* string

---

##### `addAddressToEnv`<sup>Optional</sup> <a name="addAddressToEnv" id="@cdktf/provider-vault.provider.VaultProvider.property.addAddressToEnv"></a>

```typescript
public readonly addAddressToEnv: string;
```

- *Type:* string

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-vault.provider.VaultProvider.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `authLogin`<sup>Optional</sup> <a name="authLogin" id="@cdktf/provider-vault.provider.VaultProvider.property.authLogin"></a>

```typescript
public readonly authLogin: VaultProviderAuthLogin;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin">VaultProviderAuthLogin</a>

---

##### `authLoginAws`<sup>Optional</sup> <a name="authLoginAws" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginAws"></a>

```typescript
public readonly authLoginAws: VaultProviderAuthLoginAws;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws">VaultProviderAuthLoginAws</a>

---

##### `authLoginAzure`<sup>Optional</sup> <a name="authLoginAzure" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginAzure"></a>

```typescript
public readonly authLoginAzure: VaultProviderAuthLoginAzure;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure">VaultProviderAuthLoginAzure</a>

---

##### `authLoginCert`<sup>Optional</sup> <a name="authLoginCert" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginCert"></a>

```typescript
public readonly authLoginCert: VaultProviderAuthLoginCert;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert">VaultProviderAuthLoginCert</a>

---

##### `authLoginGcp`<sup>Optional</sup> <a name="authLoginGcp" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginGcp"></a>

```typescript
public readonly authLoginGcp: VaultProviderAuthLoginGcp;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp">VaultProviderAuthLoginGcp</a>

---

##### `authLoginJwt`<sup>Optional</sup> <a name="authLoginJwt" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginJwt"></a>

```typescript
public readonly authLoginJwt: VaultProviderAuthLoginJwt;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt">VaultProviderAuthLoginJwt</a>

---

##### `authLoginKerberos`<sup>Optional</sup> <a name="authLoginKerberos" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginKerberos"></a>

```typescript
public readonly authLoginKerberos: VaultProviderAuthLoginKerberos;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos">VaultProviderAuthLoginKerberos</a>

---

##### `authLoginOci`<sup>Optional</sup> <a name="authLoginOci" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginOci"></a>

```typescript
public readonly authLoginOci: VaultProviderAuthLoginOci;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci">VaultProviderAuthLoginOci</a>

---

##### `authLoginOidc`<sup>Optional</sup> <a name="authLoginOidc" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginOidc"></a>

```typescript
public readonly authLoginOidc: VaultProviderAuthLoginOidc;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc">VaultProviderAuthLoginOidc</a>

---

##### `authLoginRadius`<sup>Optional</sup> <a name="authLoginRadius" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginRadius"></a>

```typescript
public readonly authLoginRadius: VaultProviderAuthLoginRadius;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius">VaultProviderAuthLoginRadius</a>

---

##### `authLoginTokenFile`<sup>Optional</sup> <a name="authLoginTokenFile" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginTokenFile"></a>

```typescript
public readonly authLoginTokenFile: VaultProviderAuthLoginTokenFile;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile">VaultProviderAuthLoginTokenFile</a>

---

##### `authLoginUserpass`<sup>Optional</sup> <a name="authLoginUserpass" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginUserpass"></a>

```typescript
public readonly authLoginUserpass: VaultProviderAuthLoginUserpass;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass">VaultProviderAuthLoginUserpass</a>

---

##### `caCertDir`<sup>Optional</sup> <a name="caCertDir" id="@cdktf/provider-vault.provider.VaultProvider.property.caCertDir"></a>

```typescript
public readonly caCertDir: string;
```

- *Type:* string

---

##### `caCertFile`<sup>Optional</sup> <a name="caCertFile" id="@cdktf/provider-vault.provider.VaultProvider.property.caCertFile"></a>

```typescript
public readonly caCertFile: string;
```

- *Type:* string

---

##### `clientAuth`<sup>Optional</sup> <a name="clientAuth" id="@cdktf/provider-vault.provider.VaultProvider.property.clientAuth"></a>

```typescript
public readonly clientAuth: VaultProviderClientAuth;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a>

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-vault.provider.VaultProvider.property.headers"></a>

```typescript
public readonly headers: IResolvable | VaultProviderHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.provider.VaultProviderHeaders">VaultProviderHeaders</a>[]

---

##### `maxLeaseTtlSeconds`<sup>Optional</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.provider.VaultProvider.property.maxLeaseTtlSeconds"></a>

```typescript
public readonly maxLeaseTtlSeconds: number;
```

- *Type:* number

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-vault.provider.VaultProvider.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `maxRetriesCcc`<sup>Optional</sup> <a name="maxRetriesCcc" id="@cdktf/provider-vault.provider.VaultProvider.property.maxRetriesCcc"></a>

```typescript
public readonly maxRetriesCcc: number;
```

- *Type:* number

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProvider.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `skipChildToken`<sup>Optional</sup> <a name="skipChildToken" id="@cdktf/provider-vault.provider.VaultProvider.property.skipChildToken"></a>

```typescript
public readonly skipChildToken: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipGetVaultVersion`<sup>Optional</sup> <a name="skipGetVaultVersion" id="@cdktf/provider-vault.provider.VaultProvider.property.skipGetVaultVersion"></a>

```typescript
public readonly skipGetVaultVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipTlsVerify`<sup>Optional</sup> <a name="skipTlsVerify" id="@cdktf/provider-vault.provider.VaultProvider.property.skipTlsVerify"></a>

```typescript
public readonly skipTlsVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsServerName`<sup>Optional</sup> <a name="tlsServerName" id="@cdktf/provider-vault.provider.VaultProvider.property.tlsServerName"></a>

```typescript
public readonly tlsServerName: string;
```

- *Type:* string

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-vault.provider.VaultProvider.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `tokenName`<sup>Optional</sup> <a name="tokenName" id="@cdktf/provider-vault.provider.VaultProvider.property.tokenName"></a>

```typescript
public readonly tokenName: string;
```

- *Type:* string

---

##### `vaultVersionOverride`<sup>Optional</sup> <a name="vaultVersionOverride" id="@cdktf/provider-vault.provider.VaultProvider.property.vaultVersionOverride"></a>

```typescript
public readonly vaultVersionOverride: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.provider.VaultProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultProviderAuthLogin <a name="VaultProviderAuthLogin" id="@cdktf/provider-vault.provider.VaultProviderAuthLogin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLogin.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-vault'

const vaultProviderAuthLogin: provider.VaultProviderAuthLogin = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#path VaultProvider#path}. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.method">method</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#method VaultProvider#method}. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#namespace VaultProvider#namespace}. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#parameters VaultProvider#parameters}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#path VaultProvider#path}.

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#method VaultProvider#method}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#namespace VaultProvider#namespace}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#parameters VaultProvider#parameters}.

---

### VaultProviderAuthLoginAws <a name="VaultProviderAuthLoginAws" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-vault'

const vaultProviderAuthLoginAws: provider.VaultProviderAuthLoginAws = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.role">role</a></code> | <code>string</code> | The Vault role to use when logging into Vault. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsAccessKeyId">awsAccessKeyId</a></code> | <code>string</code> | The AWS access key ID. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsIamEndpoint">awsIamEndpoint</a></code> | <code>string</code> | The IAM endpoint URL. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsProfile">awsProfile</a></code> | <code>string</code> | The name of the AWS profile. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsRegion">awsRegion</a></code> | <code>string</code> | The AWS region. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsRoleArn">awsRoleArn</a></code> | <code>string</code> | The ARN of the AWS Role to assume.Used during STS AssumeRole. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsRoleSessionName">awsRoleSessionName</a></code> | <code>string</code> | Specifies the name to attach to the AWS role session. Used during STS AssumeRole. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsSecretAccessKey">awsSecretAccessKey</a></code> | <code>string</code> | The AWS secret access key. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsSessionToken">awsSessionToken</a></code> | <code>string</code> | The AWS session token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsSharedCredentialsFile">awsSharedCredentialsFile</a></code> | <code>string</code> | Path to the AWS shared credentials file. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsStsEndpoint">awsStsEndpoint</a></code> | <code>string</code> | The STS endpoint URL. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsWebIdentityTokenFile">awsWebIdentityTokenFile</a></code> | <code>string</code> | Path to the file containing an OAuth 2.0 access token or OpenID Connect ID token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.headerValue">headerValue</a></code> | <code>string</code> | The Vault header value to include in the STS signing request. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.mount">mount</a></code> | <code>string</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.namespace">namespace</a></code> | <code>string</code> | The authentication engine's namespace. |

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

The Vault role to use when logging into Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#role VaultProvider#role}

---

##### `awsAccessKeyId`<sup>Optional</sup> <a name="awsAccessKeyId" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsAccessKeyId"></a>

```typescript
public readonly awsAccessKeyId: string;
```

- *Type:* string

The AWS access key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#aws_access_key_id VaultProvider#aws_access_key_id}

---

##### `awsIamEndpoint`<sup>Optional</sup> <a name="awsIamEndpoint" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsIamEndpoint"></a>

```typescript
public readonly awsIamEndpoint: string;
```

- *Type:* string

The IAM endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#aws_iam_endpoint VaultProvider#aws_iam_endpoint}

---

##### `awsProfile`<sup>Optional</sup> <a name="awsProfile" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsProfile"></a>

```typescript
public readonly awsProfile: string;
```

- *Type:* string

The name of the AWS profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#aws_profile VaultProvider#aws_profile}

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

The AWS region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#aws_region VaultProvider#aws_region}

---

##### `awsRoleArn`<sup>Optional</sup> <a name="awsRoleArn" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsRoleArn"></a>

```typescript
public readonly awsRoleArn: string;
```

- *Type:* string

The ARN of the AWS Role to assume.Used during STS AssumeRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#aws_role_arn VaultProvider#aws_role_arn}

---

##### `awsRoleSessionName`<sup>Optional</sup> <a name="awsRoleSessionName" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsRoleSessionName"></a>

```typescript
public readonly awsRoleSessionName: string;
```

- *Type:* string

Specifies the name to attach to the AWS role session. Used during STS AssumeRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#aws_role_session_name VaultProvider#aws_role_session_name}

---

##### `awsSecretAccessKey`<sup>Optional</sup> <a name="awsSecretAccessKey" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsSecretAccessKey"></a>

```typescript
public readonly awsSecretAccessKey: string;
```

- *Type:* string

The AWS secret access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#aws_secret_access_key VaultProvider#aws_secret_access_key}

---

##### `awsSessionToken`<sup>Optional</sup> <a name="awsSessionToken" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsSessionToken"></a>

```typescript
public readonly awsSessionToken: string;
```

- *Type:* string

The AWS session token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#aws_session_token VaultProvider#aws_session_token}

---

##### `awsSharedCredentialsFile`<sup>Optional</sup> <a name="awsSharedCredentialsFile" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsSharedCredentialsFile"></a>

```typescript
public readonly awsSharedCredentialsFile: string;
```

- *Type:* string

Path to the AWS shared credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#aws_shared_credentials_file VaultProvider#aws_shared_credentials_file}

---

##### `awsStsEndpoint`<sup>Optional</sup> <a name="awsStsEndpoint" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsStsEndpoint"></a>

```typescript
public readonly awsStsEndpoint: string;
```

- *Type:* string

The STS endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#aws_sts_endpoint VaultProvider#aws_sts_endpoint}

---

##### `awsWebIdentityTokenFile`<sup>Optional</sup> <a name="awsWebIdentityTokenFile" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsWebIdentityTokenFile"></a>

```typescript
public readonly awsWebIdentityTokenFile: string;
```

- *Type:* string

Path to the file containing an OAuth 2.0 access token or OpenID Connect ID token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#aws_web_identity_token_file VaultProvider#aws_web_identity_token_file}

---

##### `headerValue`<sup>Optional</sup> <a name="headerValue" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.headerValue"></a>

```typescript
public readonly headerValue: string;
```

- *Type:* string

The Vault header value to include in the STS signing request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#header_value VaultProvider#header_value}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#mount VaultProvider#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#namespace VaultProvider#namespace}

---

### VaultProviderAuthLoginAzure <a name="VaultProviderAuthLoginAzure" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-vault'

const vaultProviderAuthLoginAzure: provider.VaultProviderAuthLoginAzure = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | The resource group for the machine that generated the MSI token. This information can be obtained through instance metadata. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.role">role</a></code> | <code>string</code> | Name of the login role. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | The subscription ID for the machine that generated the MSI token. This information can be obtained through instance metadata. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.clientId">clientId</a></code> | <code>string</code> | The identity's client ID. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.jwt">jwt</a></code> | <code>string</code> | A signed JSON Web Token. If not specified on will be created automatically. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.mount">mount</a></code> | <code>string</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.namespace">namespace</a></code> | <code>string</code> | The authentication engine's namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.scope">scope</a></code> | <code>string</code> | The scopes to include in the token request. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.tenantId">tenantId</a></code> | <code>string</code> | Provides the tenant ID to use in a multi-tenant authentication scenario. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.vmName">vmName</a></code> | <code>string</code> | The virtual machine name for the machine that generated the MSI token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.vmssName">vmssName</a></code> | <code>string</code> | The virtual machine scale set name for the machine that generated the MSI token. |

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

The resource group for the machine that generated the MSI token. This information can be obtained through instance metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#resource_group_name VaultProvider#resource_group_name}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Name of the login role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#role VaultProvider#role}

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

The subscription ID for the machine that generated the MSI token. This information can be obtained through instance metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#subscription_id VaultProvider#subscription_id}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The identity's client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#client_id VaultProvider#client_id}

---

##### `jwt`<sup>Optional</sup> <a name="jwt" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.jwt"></a>

```typescript
public readonly jwt: string;
```

- *Type:* string

A signed JSON Web Token. If not specified on will be created automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#jwt VaultProvider#jwt}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#mount VaultProvider#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#namespace VaultProvider#namespace}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The scopes to include in the token request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#scope VaultProvider#scope}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Provides the tenant ID to use in a multi-tenant authentication scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#tenant_id VaultProvider#tenant_id}

---

##### `vmName`<sup>Optional</sup> <a name="vmName" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.vmName"></a>

```typescript
public readonly vmName: string;
```

- *Type:* string

The virtual machine name for the machine that generated the MSI token.

This information can be obtained through instance metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#vm_name VaultProvider#vm_name}

---

##### `vmssName`<sup>Optional</sup> <a name="vmssName" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.vmssName"></a>

```typescript
public readonly vmssName: string;
```

- *Type:* string

The virtual machine scale set name for the machine that generated the MSI token.

This information can be obtained through instance metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#vmss_name VaultProvider#vmss_name}

---

### VaultProviderAuthLoginCert <a name="VaultProviderAuthLoginCert" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-vault'

const vaultProviderAuthLoginCert: provider.VaultProviderAuthLoginCert = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.certFile">certFile</a></code> | <code>string</code> | Path to a file containing the client certificate. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.keyFile">keyFile</a></code> | <code>string</code> | Path to a file containing the private key that the certificate was issued for. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.mount">mount</a></code> | <code>string</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.name">name</a></code> | <code>string</code> | Name of the certificate's role. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.namespace">namespace</a></code> | <code>string</code> | The authentication engine's namespace. |

---

##### `certFile`<sup>Required</sup> <a name="certFile" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.certFile"></a>

```typescript
public readonly certFile: string;
```

- *Type:* string

Path to a file containing the client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#cert_file VaultProvider#cert_file}

---

##### `keyFile`<sup>Required</sup> <a name="keyFile" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.keyFile"></a>

```typescript
public readonly keyFile: string;
```

- *Type:* string

Path to a file containing the private key that the certificate was issued for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#key_file VaultProvider#key_file}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#mount VaultProvider#mount}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the certificate's role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#name VaultProvider#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#namespace VaultProvider#namespace}

---

### VaultProviderAuthLoginGcp <a name="VaultProviderAuthLoginGcp" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-vault'

const vaultProviderAuthLoginGcp: provider.VaultProviderAuthLoginGcp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.role">role</a></code> | <code>string</code> | Name of the login role. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.credentials">credentials</a></code> | <code>string</code> | Path to the Google Cloud credentials file. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.jwt">jwt</a></code> | <code>string</code> | A signed JSON Web Token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.mount">mount</a></code> | <code>string</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.namespace">namespace</a></code> | <code>string</code> | The authentication engine's namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | IAM service account. |

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Name of the login role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#role VaultProvider#role}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.credentials"></a>

```typescript
public readonly credentials: string;
```

- *Type:* string

Path to the Google Cloud credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#credentials VaultProvider#credentials}

---

##### `jwt`<sup>Optional</sup> <a name="jwt" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.jwt"></a>

```typescript
public readonly jwt: string;
```

- *Type:* string

A signed JSON Web Token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#jwt VaultProvider#jwt}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#mount VaultProvider#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#namespace VaultProvider#namespace}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

IAM service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#service_account VaultProvider#service_account}

---

### VaultProviderAuthLoginJwt <a name="VaultProviderAuthLoginJwt" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-vault'

const vaultProviderAuthLoginJwt: provider.VaultProviderAuthLoginJwt = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.jwt">jwt</a></code> | <code>string</code> | A signed JSON Web Token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.role">role</a></code> | <code>string</code> | Name of the login role. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.mount">mount</a></code> | <code>string</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.namespace">namespace</a></code> | <code>string</code> | The authentication engine's namespace. |

---

##### `jwt`<sup>Required</sup> <a name="jwt" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.jwt"></a>

```typescript
public readonly jwt: string;
```

- *Type:* string

A signed JSON Web Token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#jwt VaultProvider#jwt}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Name of the login role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#role VaultProvider#role}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#mount VaultProvider#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#namespace VaultProvider#namespace}

---

### VaultProviderAuthLoginKerberos <a name="VaultProviderAuthLoginKerberos" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-vault'

const vaultProviderAuthLoginKerberos: provider.VaultProviderAuthLoginKerberos = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.disableFastNegotiation">disableFastNegotiation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable the Kerberos FAST negotiation. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.keytabPath">keytabPath</a></code> | <code>string</code> | The Kerberos keytab file containing the entry of the login entity. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.krb5ConfPath">krb5ConfPath</a></code> | <code>string</code> | A valid Kerberos configuration file e.g. /etc/krb5.conf. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.mount">mount</a></code> | <code>string</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.namespace">namespace</a></code> | <code>string</code> | The authentication engine's namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.realm">realm</a></code> | <code>string</code> | The Kerberos server's authoritative authentication domain. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.removeInstanceName">removeInstanceName</a></code> | <code>boolean \| cdktf.IResolvable</code> | Strip the host from the username found in the keytab. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.service">service</a></code> | <code>string</code> | The service principle name. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.token">token</a></code> | <code>string</code> | Simple and Protected GSSAPI Negotiation Mechanism (SPNEGO) token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.username">username</a></code> | <code>string</code> | The username to login into Kerberos with. |

---

##### `disableFastNegotiation`<sup>Optional</sup> <a name="disableFastNegotiation" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.disableFastNegotiation"></a>

```typescript
public readonly disableFastNegotiation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable the Kerberos FAST negotiation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#disable_fast_negotiation VaultProvider#disable_fast_negotiation}

---

##### `keytabPath`<sup>Optional</sup> <a name="keytabPath" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.keytabPath"></a>

```typescript
public readonly keytabPath: string;
```

- *Type:* string

The Kerberos keytab file containing the entry of the login entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#keytab_path VaultProvider#keytab_path}

---

##### `krb5ConfPath`<sup>Optional</sup> <a name="krb5ConfPath" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.krb5ConfPath"></a>

```typescript
public readonly krb5ConfPath: string;
```

- *Type:* string

A valid Kerberos configuration file e.g. /etc/krb5.conf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#krb5conf_path VaultProvider#krb5conf_path}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#mount VaultProvider#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#namespace VaultProvider#namespace}

---

##### `realm`<sup>Optional</sup> <a name="realm" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.realm"></a>

```typescript
public readonly realm: string;
```

- *Type:* string

The Kerberos server's authoritative authentication domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#realm VaultProvider#realm}

---

##### `removeInstanceName`<sup>Optional</sup> <a name="removeInstanceName" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.removeInstanceName"></a>

```typescript
public readonly removeInstanceName: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Strip the host from the username found in the keytab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#remove_instance_name VaultProvider#remove_instance_name}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The service principle name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#service VaultProvider#service}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Simple and Protected GSSAPI Negotiation Mechanism (SPNEGO) token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#token VaultProvider#token}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username to login into Kerberos with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#username VaultProvider#username}

---

### VaultProviderAuthLoginOci <a name="VaultProviderAuthLoginOci" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOci"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-vault'

const vaultProviderAuthLoginOci: provider.VaultProviderAuthLoginOci = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.authType">authType</a></code> | <code>string</code> | Authentication type to use when getting OCI credentials. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.role">role</a></code> | <code>string</code> | Name of the login role. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.mount">mount</a></code> | <code>string</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.namespace">namespace</a></code> | <code>string</code> | The authentication engine's namespace. |

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

Authentication type to use when getting OCI credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#auth_type VaultProvider#auth_type}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Name of the login role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#role VaultProvider#role}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#mount VaultProvider#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#namespace VaultProvider#namespace}

---

### VaultProviderAuthLoginOidc <a name="VaultProviderAuthLoginOidc" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-vault'

const vaultProviderAuthLoginOidc: provider.VaultProviderAuthLoginOidc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.role">role</a></code> | <code>string</code> | Name of the login role. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.callbackAddress">callbackAddress</a></code> | <code>string</code> | The callback address. Must be a valid URI without the path. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.callbackListenerAddress">callbackListenerAddress</a></code> | <code>string</code> | The callback listener's address. Must be a valid URI without the path. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.mount">mount</a></code> | <code>string</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.namespace">namespace</a></code> | <code>string</code> | The authentication engine's namespace. |

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Name of the login role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#role VaultProvider#role}

---

##### `callbackAddress`<sup>Optional</sup> <a name="callbackAddress" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.callbackAddress"></a>

```typescript
public readonly callbackAddress: string;
```

- *Type:* string

The callback address. Must be a valid URI without the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#callback_address VaultProvider#callback_address}

---

##### `callbackListenerAddress`<sup>Optional</sup> <a name="callbackListenerAddress" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.callbackListenerAddress"></a>

```typescript
public readonly callbackListenerAddress: string;
```

- *Type:* string

The callback listener's address. Must be a valid URI without the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#callback_listener_address VaultProvider#callback_listener_address}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#mount VaultProvider#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#namespace VaultProvider#namespace}

---

### VaultProviderAuthLoginRadius <a name="VaultProviderAuthLoginRadius" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-vault'

const vaultProviderAuthLoginRadius: provider.VaultProviderAuthLoginRadius = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.password">password</a></code> | <code>string</code> | The Radius password for username. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.username">username</a></code> | <code>string</code> | The Radius username. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.mount">mount</a></code> | <code>string</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.namespace">namespace</a></code> | <code>string</code> | The authentication engine's namespace. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The Radius password for username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#password VaultProvider#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The Radius username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#username VaultProvider#username}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#mount VaultProvider#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#namespace VaultProvider#namespace}

---

### VaultProviderAuthLoginTokenFile <a name="VaultProviderAuthLoginTokenFile" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-vault'

const vaultProviderAuthLoginTokenFile: provider.VaultProviderAuthLoginTokenFile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile.property.filename">filename</a></code> | <code>string</code> | The name of a file containing a single line that is a valid Vault token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile.property.namespace">namespace</a></code> | <code>string</code> | The authentication engine's namespace. |

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

The name of a file containing a single line that is a valid Vault token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#filename VaultProvider#filename}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#namespace VaultProvider#namespace}

---

### VaultProviderAuthLoginUserpass <a name="VaultProviderAuthLoginUserpass" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-vault'

const vaultProviderAuthLoginUserpass: provider.VaultProviderAuthLoginUserpass = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.username">username</a></code> | <code>string</code> | Login with username. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.mount">mount</a></code> | <code>string</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.namespace">namespace</a></code> | <code>string</code> | The authentication engine's namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.password">password</a></code> | <code>string</code> | Login with password. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.passwordFile">passwordFile</a></code> | <code>string</code> | Login with password from a file. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Login with username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#username VaultProvider#username}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#mount VaultProvider#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The authentication engine's namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#namespace VaultProvider#namespace}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Login with password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#password VaultProvider#password}

---

##### `passwordFile`<sup>Optional</sup> <a name="passwordFile" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.passwordFile"></a>

```typescript
public readonly passwordFile: string;
```

- *Type:* string

Login with password from a file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#password_file VaultProvider#password_file}

---

### VaultProviderClientAuth <a name="VaultProviderClientAuth" id="@cdktf/provider-vault.provider.VaultProviderClientAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderClientAuth.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-vault'

const vaultProviderClientAuth: provider.VaultProviderClientAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth.property.certFile">certFile</a></code> | <code>string</code> | Path to a file containing the client certificate. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth.property.keyFile">keyFile</a></code> | <code>string</code> | Path to a file containing the private key that the certificate was issued for. |

---

##### `certFile`<sup>Optional</sup> <a name="certFile" id="@cdktf/provider-vault.provider.VaultProviderClientAuth.property.certFile"></a>

```typescript
public readonly certFile: string;
```

- *Type:* string

Path to a file containing the client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#cert_file VaultProvider#cert_file}

---

##### `keyFile`<sup>Optional</sup> <a name="keyFile" id="@cdktf/provider-vault.provider.VaultProviderClientAuth.property.keyFile"></a>

```typescript
public readonly keyFile: string;
```

- *Type:* string

Path to a file containing the private key that the certificate was issued for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#key_file VaultProvider#key_file}

---

### VaultProviderConfig <a name="VaultProviderConfig" id="@cdktf/provider-vault.provider.VaultProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-vault'

const vaultProviderConfig: provider.VaultProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.address">address</a></code> | <code>string</code> | URL of the root of the target Vault server. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.addAddressToEnv">addAddressToEnv</a></code> | <code>string</code> | If true, adds the value of the `address` argument to the Terraform process environment. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLogin">authLogin</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin">VaultProviderAuthLogin</a></code> | auth_login block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginAws">authLoginAws</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws">VaultProviderAuthLoginAws</a></code> | auth_login_aws block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginAzure">authLoginAzure</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure">VaultProviderAuthLoginAzure</a></code> | auth_login_azure block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginCert">authLoginCert</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert">VaultProviderAuthLoginCert</a></code> | auth_login_cert block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginGcp">authLoginGcp</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp">VaultProviderAuthLoginGcp</a></code> | auth_login_gcp block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginJwt">authLoginJwt</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt">VaultProviderAuthLoginJwt</a></code> | auth_login_jwt block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginKerberos">authLoginKerberos</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos">VaultProviderAuthLoginKerberos</a></code> | auth_login_kerberos block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginOci">authLoginOci</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci">VaultProviderAuthLoginOci</a></code> | auth_login_oci block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginOidc">authLoginOidc</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc">VaultProviderAuthLoginOidc</a></code> | auth_login_oidc block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginRadius">authLoginRadius</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius">VaultProviderAuthLoginRadius</a></code> | auth_login_radius block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginTokenFile">authLoginTokenFile</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile">VaultProviderAuthLoginTokenFile</a></code> | auth_login_token_file block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginUserpass">authLoginUserpass</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass">VaultProviderAuthLoginUserpass</a></code> | auth_login_userpass block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.caCertDir">caCertDir</a></code> | <code>string</code> | Path to directory containing CA certificate files to validate the server's certificate. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.caCertFile">caCertFile</a></code> | <code>string</code> | Path to a CA certificate file to validate the server's certificate. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.clientAuth">clientAuth</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a></code> | client_auth block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.headers">headers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.provider.VaultProviderHeaders">VaultProviderHeaders</a>[]</code> | headers block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>number</code> | Maximum TTL for secret leases requested by this provider. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.maxRetries">maxRetries</a></code> | <code>number</code> | Maximum number of retries when a 5xx error code is encountered. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.maxRetriesCcc">maxRetriesCcc</a></code> | <code>number</code> | Maximum number of retries for Client Controlled Consistency related operations. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.namespace">namespace</a></code> | <code>string</code> | The namespace to use. Available only for Vault Enterprise. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.skipChildToken">skipChildToken</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set this to true to prevent the creation of ephemeral child token used by this provider. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.skipGetVaultVersion">skipGetVaultVersion</a></code> | <code>boolean \| cdktf.IResolvable</code> | Skip the dynamic fetching of the Vault server version. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.skipTlsVerify">skipTlsVerify</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set this to true only if the target Vault server is an insecure development instance. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.tlsServerName">tlsServerName</a></code> | <code>string</code> | Name to use as the SNI host when connecting via TLS. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.token">token</a></code> | <code>string</code> | Token to use to authenticate to Vault. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.tokenName">tokenName</a></code> | <code>string</code> | Token name to use for creating the Vault child token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.vaultVersionOverride">vaultVersionOverride</a></code> | <code>string</code> | Override the Vault server version, which is normally determined dynamically from the target Vault server. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

URL of the root of the target Vault server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#address VaultProvider#address}

---

##### `addAddressToEnv`<sup>Optional</sup> <a name="addAddressToEnv" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.addAddressToEnv"></a>

```typescript
public readonly addAddressToEnv: string;
```

- *Type:* string

If true, adds the value of the `address` argument to the Terraform process environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#add_address_to_env VaultProvider#add_address_to_env}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#alias VaultProvider#alias}

---

##### `authLogin`<sup>Optional</sup> <a name="authLogin" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLogin"></a>

```typescript
public readonly authLogin: VaultProviderAuthLogin;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin">VaultProviderAuthLogin</a>

auth_login block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#auth_login VaultProvider#auth_login}

---

##### `authLoginAws`<sup>Optional</sup> <a name="authLoginAws" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginAws"></a>

```typescript
public readonly authLoginAws: VaultProviderAuthLoginAws;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws">VaultProviderAuthLoginAws</a>

auth_login_aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#auth_login_aws VaultProvider#auth_login_aws}

---

##### `authLoginAzure`<sup>Optional</sup> <a name="authLoginAzure" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginAzure"></a>

```typescript
public readonly authLoginAzure: VaultProviderAuthLoginAzure;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure">VaultProviderAuthLoginAzure</a>

auth_login_azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#auth_login_azure VaultProvider#auth_login_azure}

---

##### `authLoginCert`<sup>Optional</sup> <a name="authLoginCert" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginCert"></a>

```typescript
public readonly authLoginCert: VaultProviderAuthLoginCert;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert">VaultProviderAuthLoginCert</a>

auth_login_cert block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#auth_login_cert VaultProvider#auth_login_cert}

---

##### `authLoginGcp`<sup>Optional</sup> <a name="authLoginGcp" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginGcp"></a>

```typescript
public readonly authLoginGcp: VaultProviderAuthLoginGcp;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp">VaultProviderAuthLoginGcp</a>

auth_login_gcp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#auth_login_gcp VaultProvider#auth_login_gcp}

---

##### `authLoginJwt`<sup>Optional</sup> <a name="authLoginJwt" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginJwt"></a>

```typescript
public readonly authLoginJwt: VaultProviderAuthLoginJwt;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt">VaultProviderAuthLoginJwt</a>

auth_login_jwt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#auth_login_jwt VaultProvider#auth_login_jwt}

---

##### `authLoginKerberos`<sup>Optional</sup> <a name="authLoginKerberos" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginKerberos"></a>

```typescript
public readonly authLoginKerberos: VaultProviderAuthLoginKerberos;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos">VaultProviderAuthLoginKerberos</a>

auth_login_kerberos block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#auth_login_kerberos VaultProvider#auth_login_kerberos}

---

##### `authLoginOci`<sup>Optional</sup> <a name="authLoginOci" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginOci"></a>

```typescript
public readonly authLoginOci: VaultProviderAuthLoginOci;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci">VaultProviderAuthLoginOci</a>

auth_login_oci block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#auth_login_oci VaultProvider#auth_login_oci}

---

##### `authLoginOidc`<sup>Optional</sup> <a name="authLoginOidc" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginOidc"></a>

```typescript
public readonly authLoginOidc: VaultProviderAuthLoginOidc;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc">VaultProviderAuthLoginOidc</a>

auth_login_oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#auth_login_oidc VaultProvider#auth_login_oidc}

---

##### `authLoginRadius`<sup>Optional</sup> <a name="authLoginRadius" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginRadius"></a>

```typescript
public readonly authLoginRadius: VaultProviderAuthLoginRadius;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius">VaultProviderAuthLoginRadius</a>

auth_login_radius block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#auth_login_radius VaultProvider#auth_login_radius}

---

##### `authLoginTokenFile`<sup>Optional</sup> <a name="authLoginTokenFile" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginTokenFile"></a>

```typescript
public readonly authLoginTokenFile: VaultProviderAuthLoginTokenFile;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile">VaultProviderAuthLoginTokenFile</a>

auth_login_token_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#auth_login_token_file VaultProvider#auth_login_token_file}

---

##### `authLoginUserpass`<sup>Optional</sup> <a name="authLoginUserpass" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginUserpass"></a>

```typescript
public readonly authLoginUserpass: VaultProviderAuthLoginUserpass;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass">VaultProviderAuthLoginUserpass</a>

auth_login_userpass block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#auth_login_userpass VaultProvider#auth_login_userpass}

---

##### `caCertDir`<sup>Optional</sup> <a name="caCertDir" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.caCertDir"></a>

```typescript
public readonly caCertDir: string;
```

- *Type:* string

Path to directory containing CA certificate files to validate the server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#ca_cert_dir VaultProvider#ca_cert_dir}

---

##### `caCertFile`<sup>Optional</sup> <a name="caCertFile" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.caCertFile"></a>

```typescript
public readonly caCertFile: string;
```

- *Type:* string

Path to a CA certificate file to validate the server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#ca_cert_file VaultProvider#ca_cert_file}

---

##### `clientAuth`<sup>Optional</sup> <a name="clientAuth" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.clientAuth"></a>

```typescript
public readonly clientAuth: VaultProviderClientAuth;
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a>

client_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#client_auth VaultProvider#client_auth}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.headers"></a>

```typescript
public readonly headers: IResolvable | VaultProviderHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.provider.VaultProviderHeaders">VaultProviderHeaders</a>[]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#headers VaultProvider#headers}

---

##### `maxLeaseTtlSeconds`<sup>Optional</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.maxLeaseTtlSeconds"></a>

```typescript
public readonly maxLeaseTtlSeconds: number;
```

- *Type:* number

Maximum TTL for secret leases requested by this provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#max_lease_ttl_seconds VaultProvider#max_lease_ttl_seconds}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

Maximum number of retries when a 5xx error code is encountered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#max_retries VaultProvider#max_retries}

---

##### `maxRetriesCcc`<sup>Optional</sup> <a name="maxRetriesCcc" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.maxRetriesCcc"></a>

```typescript
public readonly maxRetriesCcc: number;
```

- *Type:* number

Maximum number of retries for Client Controlled Consistency related operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#max_retries_ccc VaultProvider#max_retries_ccc}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace to use. Available only for Vault Enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#namespace VaultProvider#namespace}

---

##### `skipChildToken`<sup>Optional</sup> <a name="skipChildToken" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.skipChildToken"></a>

```typescript
public readonly skipChildToken: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set this to true to prevent the creation of ephemeral child token used by this provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#skip_child_token VaultProvider#skip_child_token}

---

##### `skipGetVaultVersion`<sup>Optional</sup> <a name="skipGetVaultVersion" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.skipGetVaultVersion"></a>

```typescript
public readonly skipGetVaultVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Skip the dynamic fetching of the Vault server version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#skip_get_vault_version VaultProvider#skip_get_vault_version}

---

##### `skipTlsVerify`<sup>Optional</sup> <a name="skipTlsVerify" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.skipTlsVerify"></a>

```typescript
public readonly skipTlsVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set this to true only if the target Vault server is an insecure development instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#skip_tls_verify VaultProvider#skip_tls_verify}

---

##### `tlsServerName`<sup>Optional</sup> <a name="tlsServerName" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.tlsServerName"></a>

```typescript
public readonly tlsServerName: string;
```

- *Type:* string

Name to use as the SNI host when connecting via TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#tls_server_name VaultProvider#tls_server_name}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Token to use to authenticate to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#token VaultProvider#token}

---

##### `tokenName`<sup>Optional</sup> <a name="tokenName" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.tokenName"></a>

```typescript
public readonly tokenName: string;
```

- *Type:* string

Token name to use for creating the Vault child token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#token_name VaultProvider#token_name}

---

##### `vaultVersionOverride`<sup>Optional</sup> <a name="vaultVersionOverride" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.vaultVersionOverride"></a>

```typescript
public readonly vaultVersionOverride: string;
```

- *Type:* string

Override the Vault server version, which is normally determined dynamically from the target Vault server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#vault_version_override VaultProvider#vault_version_override}

---

### VaultProviderHeaders <a name="VaultProviderHeaders" id="@cdktf/provider-vault.provider.VaultProviderHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderHeaders.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-vault'

const vaultProviderHeaders: provider.VaultProviderHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderHeaders.property.name">name</a></code> | <code>string</code> | The header name. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderHeaders.property.value">value</a></code> | <code>string</code> | The header value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.provider.VaultProviderHeaders.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#name VaultProvider#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.provider.VaultProviderHeaders.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs#value VaultProvider#value}

---



