# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-vault.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultProvider <a name="VaultProvider" id="@cdktf/provider-vault.provider.VaultProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.provider.VaultProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.provider.VaultProvider;

VaultProvider.Builder.create(Construct scope, java.lang.String id)
//  .addAddressToEnv(java.lang.String)
//  .address(java.lang.String)
//  .alias(java.lang.String)
//  .authLogin(IResolvable|java.util.List<VaultProviderAuthLogin>)
//  .authLoginAws(IResolvable|java.util.List<VaultProviderAuthLoginAws>)
//  .authLoginAzure(IResolvable|java.util.List<VaultProviderAuthLoginAzure>)
//  .authLoginCert(IResolvable|java.util.List<VaultProviderAuthLoginCert>)
//  .authLoginGcp(IResolvable|java.util.List<VaultProviderAuthLoginGcp>)
//  .authLoginJwt(IResolvable|java.util.List<VaultProviderAuthLoginJwt>)
//  .authLoginKerberos(IResolvable|java.util.List<VaultProviderAuthLoginKerberos>)
//  .authLoginOci(IResolvable|java.util.List<VaultProviderAuthLoginOci>)
//  .authLoginOidc(IResolvable|java.util.List<VaultProviderAuthLoginOidc>)
//  .authLoginRadius(IResolvable|java.util.List<VaultProviderAuthLoginRadius>)
//  .authLoginTokenFile(IResolvable|java.util.List<VaultProviderAuthLoginTokenFile>)
//  .authLoginUserpass(IResolvable|java.util.List<VaultProviderAuthLoginUserpass>)
//  .caCertDir(java.lang.String)
//  .caCertFile(java.lang.String)
//  .clientAuth(IResolvable|java.util.List<VaultProviderClientAuth>)
//  .headers(IResolvable|java.util.List<VaultProviderHeaders>)
//  .maxLeaseTtlSeconds(java.lang.Number)
//  .maxRetries(java.lang.Number)
//  .maxRetriesCcc(java.lang.Number)
//  .namespace(java.lang.String)
//  .setNamespaceFromToken(java.lang.Boolean|IResolvable)
//  .skipChildToken(java.lang.Boolean|IResolvable)
//  .skipGetVaultVersion(java.lang.Boolean|IResolvable)
//  .skipTlsVerify(java.lang.Boolean|IResolvable)
//  .tlsServerName(java.lang.String)
//  .token(java.lang.String)
//  .tokenName(java.lang.String)
//  .vaultVersionOverride(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.addAddressToEnv">addAddressToEnv</a></code> | <code>java.lang.String</code> | If true, adds the value of the `address` argument to the Terraform process environment. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.address">address</a></code> | <code>java.lang.String</code> | URL of the root of the target Vault server. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLogin">authLogin</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin">VaultProviderAuthLogin</a>></code> | auth_login block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginAws">authLoginAws</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws">VaultProviderAuthLoginAws</a>></code> | auth_login_aws block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginAzure">authLoginAzure</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure">VaultProviderAuthLoginAzure</a>></code> | auth_login_azure block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginCert">authLoginCert</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert">VaultProviderAuthLoginCert</a>></code> | auth_login_cert block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginGcp">authLoginGcp</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp">VaultProviderAuthLoginGcp</a>></code> | auth_login_gcp block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginJwt">authLoginJwt</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt">VaultProviderAuthLoginJwt</a>></code> | auth_login_jwt block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginKerberos">authLoginKerberos</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos">VaultProviderAuthLoginKerberos</a>></code> | auth_login_kerberos block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginOci">authLoginOci</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci">VaultProviderAuthLoginOci</a>></code> | auth_login_oci block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginOidc">authLoginOidc</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc">VaultProviderAuthLoginOidc</a>></code> | auth_login_oidc block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginRadius">authLoginRadius</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius">VaultProviderAuthLoginRadius</a>></code> | auth_login_radius block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginTokenFile">authLoginTokenFile</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile">VaultProviderAuthLoginTokenFile</a>></code> | auth_login_token_file block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginUserpass">authLoginUserpass</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass">VaultProviderAuthLoginUserpass</a>></code> | auth_login_userpass block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.caCertDir">caCertDir</a></code> | <code>java.lang.String</code> | Path to directory containing CA certificate files to validate the server's certificate. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.caCertFile">caCertFile</a></code> | <code>java.lang.String</code> | Path to a CA certificate file to validate the server's certificate. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.clientAuth">clientAuth</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a>></code> | client_auth block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.headers">headers</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderHeaders">VaultProviderHeaders</a>></code> | headers block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Maximum TTL for secret leases requested by this provider. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | Maximum number of retries when a 5xx error code is encountered. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.maxRetriesCcc">maxRetriesCcc</a></code> | <code>java.lang.Number</code> | Maximum number of retries for Client Controlled Consistency related operations. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace to use. Available only for Vault Enterprise. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.setNamespaceFromToken">setNamespaceFromToken</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | In the case where the Vault token is for a specific namespace and the provider namespace is not configured, use the token namespace as the root namespace for all resources. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.skipChildToken">skipChildToken</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set this to true to prevent the creation of ephemeral child token used by this provider. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.skipGetVaultVersion">skipGetVaultVersion</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Skip the dynamic fetching of the Vault server version. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.skipTlsVerify">skipTlsVerify</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set this to true only if the target Vault server is an insecure development instance. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.tlsServerName">tlsServerName</a></code> | <code>java.lang.String</code> | Name to use as the SNI host when connecting via TLS. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | Token to use to authenticate to Vault. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.tokenName">tokenName</a></code> | <code>java.lang.String</code> | Token name to use for creating the Vault child token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.vaultVersionOverride">vaultVersionOverride</a></code> | <code>java.lang.String</code> | Override the Vault server version, which is normally determined dynamically from the target Vault server. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `addAddressToEnv`<sup>Optional</sup> <a name="addAddressToEnv" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.addAddressToEnv"></a>

- *Type:* java.lang.String

If true, adds the value of the `address` argument to the Terraform process environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#add_address_to_env VaultProvider#add_address_to_env}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.address"></a>

- *Type:* java.lang.String

URL of the root of the target Vault server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#address VaultProvider#address}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#alias VaultProvider#alias}

---

##### `authLogin`<sup>Optional</sup> <a name="authLogin" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLogin"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin">VaultProviderAuthLogin</a>>

auth_login block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#auth_login VaultProvider#auth_login}

---

##### `authLoginAws`<sup>Optional</sup> <a name="authLoginAws" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginAws"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws">VaultProviderAuthLoginAws</a>>

auth_login_aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#auth_login_aws VaultProvider#auth_login_aws}

---

##### `authLoginAzure`<sup>Optional</sup> <a name="authLoginAzure" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginAzure"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure">VaultProviderAuthLoginAzure</a>>

auth_login_azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#auth_login_azure VaultProvider#auth_login_azure}

---

##### `authLoginCert`<sup>Optional</sup> <a name="authLoginCert" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginCert"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert">VaultProviderAuthLoginCert</a>>

auth_login_cert block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#auth_login_cert VaultProvider#auth_login_cert}

---

##### `authLoginGcp`<sup>Optional</sup> <a name="authLoginGcp" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginGcp"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp">VaultProviderAuthLoginGcp</a>>

auth_login_gcp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#auth_login_gcp VaultProvider#auth_login_gcp}

---

##### `authLoginJwt`<sup>Optional</sup> <a name="authLoginJwt" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginJwt"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt">VaultProviderAuthLoginJwt</a>>

auth_login_jwt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#auth_login_jwt VaultProvider#auth_login_jwt}

---

##### `authLoginKerberos`<sup>Optional</sup> <a name="authLoginKerberos" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginKerberos"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos">VaultProviderAuthLoginKerberos</a>>

auth_login_kerberos block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#auth_login_kerberos VaultProvider#auth_login_kerberos}

---

##### `authLoginOci`<sup>Optional</sup> <a name="authLoginOci" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginOci"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci">VaultProviderAuthLoginOci</a>>

auth_login_oci block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#auth_login_oci VaultProvider#auth_login_oci}

---

##### `authLoginOidc`<sup>Optional</sup> <a name="authLoginOidc" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginOidc"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc">VaultProviderAuthLoginOidc</a>>

auth_login_oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#auth_login_oidc VaultProvider#auth_login_oidc}

---

##### `authLoginRadius`<sup>Optional</sup> <a name="authLoginRadius" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginRadius"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius">VaultProviderAuthLoginRadius</a>>

auth_login_radius block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#auth_login_radius VaultProvider#auth_login_radius}

---

##### `authLoginTokenFile`<sup>Optional</sup> <a name="authLoginTokenFile" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginTokenFile"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile">VaultProviderAuthLoginTokenFile</a>>

auth_login_token_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#auth_login_token_file VaultProvider#auth_login_token_file}

---

##### `authLoginUserpass`<sup>Optional</sup> <a name="authLoginUserpass" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginUserpass"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass">VaultProviderAuthLoginUserpass</a>>

auth_login_userpass block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#auth_login_userpass VaultProvider#auth_login_userpass}

---

##### `caCertDir`<sup>Optional</sup> <a name="caCertDir" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.caCertDir"></a>

- *Type:* java.lang.String

Path to directory containing CA certificate files to validate the server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#ca_cert_dir VaultProvider#ca_cert_dir}

---

##### `caCertFile`<sup>Optional</sup> <a name="caCertFile" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.caCertFile"></a>

- *Type:* java.lang.String

Path to a CA certificate file to validate the server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#ca_cert_file VaultProvider#ca_cert_file}

---

##### `clientAuth`<sup>Optional</sup> <a name="clientAuth" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.clientAuth"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a>>

client_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#client_auth VaultProvider#client_auth}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.headers"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderHeaders">VaultProviderHeaders</a>>

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#headers VaultProvider#headers}

---

##### `maxLeaseTtlSeconds`<sup>Optional</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.maxLeaseTtlSeconds"></a>

- *Type:* java.lang.Number

Maximum TTL for secret leases requested by this provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#max_lease_ttl_seconds VaultProvider#max_lease_ttl_seconds}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.maxRetries"></a>

- *Type:* java.lang.Number

Maximum number of retries when a 5xx error code is encountered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#max_retries VaultProvider#max_retries}

---

##### `maxRetriesCcc`<sup>Optional</sup> <a name="maxRetriesCcc" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.maxRetriesCcc"></a>

- *Type:* java.lang.Number

Maximum number of retries for Client Controlled Consistency related operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#max_retries_ccc VaultProvider#max_retries_ccc}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

The namespace to use. Available only for Vault Enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#namespace VaultProvider#namespace}

---

##### `setNamespaceFromToken`<sup>Optional</sup> <a name="setNamespaceFromToken" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.setNamespaceFromToken"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

In the case where the Vault token is for a specific namespace and the provider namespace is not configured, use the token namespace as the root namespace for all resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#set_namespace_from_token VaultProvider#set_namespace_from_token}

---

##### `skipChildToken`<sup>Optional</sup> <a name="skipChildToken" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.skipChildToken"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set this to true to prevent the creation of ephemeral child token used by this provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#skip_child_token VaultProvider#skip_child_token}

---

##### `skipGetVaultVersion`<sup>Optional</sup> <a name="skipGetVaultVersion" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.skipGetVaultVersion"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Skip the dynamic fetching of the Vault server version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#skip_get_vault_version VaultProvider#skip_get_vault_version}

---

##### `skipTlsVerify`<sup>Optional</sup> <a name="skipTlsVerify" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.skipTlsVerify"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set this to true only if the target Vault server is an insecure development instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#skip_tls_verify VaultProvider#skip_tls_verify}

---

##### `tlsServerName`<sup>Optional</sup> <a name="tlsServerName" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.tlsServerName"></a>

- *Type:* java.lang.String

Name to use as the SNI host when connecting via TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#tls_server_name VaultProvider#tls_server_name}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.token"></a>

- *Type:* java.lang.String

Token to use to authenticate to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#token VaultProvider#token}

---

##### `tokenName`<sup>Optional</sup> <a name="tokenName" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.tokenName"></a>

- *Type:* java.lang.String

Token name to use for creating the Vault child token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#token_name VaultProvider#token_name}

---

##### `vaultVersionOverride`<sup>Optional</sup> <a name="vaultVersionOverride" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.vaultVersionOverride"></a>

- *Type:* java.lang.String

Override the Vault server version, which is normally determined dynamically from the target Vault server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#vault_version_override VaultProvider#vault_version_override}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAddAddressToEnv">resetAddAddressToEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAddress">resetAddress</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetSetNamespaceFromToken">resetSetNamespaceFromToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetSkipChildToken">resetSkipChildToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetSkipGetVaultVersion">resetSkipGetVaultVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetSkipTlsVerify">resetSkipTlsVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetTlsServerName">resetTlsServerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetTokenName">resetTokenName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetVaultVersionOverride">resetVaultVersionOverride</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.provider.VaultProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.provider.VaultProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.provider.VaultProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.provider.VaultProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.provider.VaultProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.provider.VaultProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.provider.VaultProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.provider.VaultProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.provider.VaultProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.provider.VaultProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAddAddressToEnv` <a name="resetAddAddressToEnv" id="@cdktf/provider-vault.provider.VaultProvider.resetAddAddressToEnv"></a>

```java
public void resetAddAddressToEnv()
```

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-vault.provider.VaultProvider.resetAddress"></a>

```java
public void resetAddress()
```

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-vault.provider.VaultProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetAuthLogin` <a name="resetAuthLogin" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLogin"></a>

```java
public void resetAuthLogin()
```

##### `resetAuthLoginAws` <a name="resetAuthLoginAws" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginAws"></a>

```java
public void resetAuthLoginAws()
```

##### `resetAuthLoginAzure` <a name="resetAuthLoginAzure" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginAzure"></a>

```java
public void resetAuthLoginAzure()
```

##### `resetAuthLoginCert` <a name="resetAuthLoginCert" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginCert"></a>

```java
public void resetAuthLoginCert()
```

##### `resetAuthLoginGcp` <a name="resetAuthLoginGcp" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginGcp"></a>

```java
public void resetAuthLoginGcp()
```

##### `resetAuthLoginJwt` <a name="resetAuthLoginJwt" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginJwt"></a>

```java
public void resetAuthLoginJwt()
```

##### `resetAuthLoginKerberos` <a name="resetAuthLoginKerberos" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginKerberos"></a>

```java
public void resetAuthLoginKerberos()
```

##### `resetAuthLoginOci` <a name="resetAuthLoginOci" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginOci"></a>

```java
public void resetAuthLoginOci()
```

##### `resetAuthLoginOidc` <a name="resetAuthLoginOidc" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginOidc"></a>

```java
public void resetAuthLoginOidc()
```

##### `resetAuthLoginRadius` <a name="resetAuthLoginRadius" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginRadius"></a>

```java
public void resetAuthLoginRadius()
```

##### `resetAuthLoginTokenFile` <a name="resetAuthLoginTokenFile" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginTokenFile"></a>

```java
public void resetAuthLoginTokenFile()
```

##### `resetAuthLoginUserpass` <a name="resetAuthLoginUserpass" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginUserpass"></a>

```java
public void resetAuthLoginUserpass()
```

##### `resetCaCertDir` <a name="resetCaCertDir" id="@cdktf/provider-vault.provider.VaultProvider.resetCaCertDir"></a>

```java
public void resetCaCertDir()
```

##### `resetCaCertFile` <a name="resetCaCertFile" id="@cdktf/provider-vault.provider.VaultProvider.resetCaCertFile"></a>

```java
public void resetCaCertFile()
```

##### `resetClientAuth` <a name="resetClientAuth" id="@cdktf/provider-vault.provider.VaultProvider.resetClientAuth"></a>

```java
public void resetClientAuth()
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-vault.provider.VaultProvider.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetMaxLeaseTtlSeconds` <a name="resetMaxLeaseTtlSeconds" id="@cdktf/provider-vault.provider.VaultProvider.resetMaxLeaseTtlSeconds"></a>

```java
public void resetMaxLeaseTtlSeconds()
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktf/provider-vault.provider.VaultProvider.resetMaxRetries"></a>

```java
public void resetMaxRetries()
```

##### `resetMaxRetriesCcc` <a name="resetMaxRetriesCcc" id="@cdktf/provider-vault.provider.VaultProvider.resetMaxRetriesCcc"></a>

```java
public void resetMaxRetriesCcc()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.provider.VaultProvider.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetSetNamespaceFromToken` <a name="resetSetNamespaceFromToken" id="@cdktf/provider-vault.provider.VaultProvider.resetSetNamespaceFromToken"></a>

```java
public void resetSetNamespaceFromToken()
```

##### `resetSkipChildToken` <a name="resetSkipChildToken" id="@cdktf/provider-vault.provider.VaultProvider.resetSkipChildToken"></a>

```java
public void resetSkipChildToken()
```

##### `resetSkipGetVaultVersion` <a name="resetSkipGetVaultVersion" id="@cdktf/provider-vault.provider.VaultProvider.resetSkipGetVaultVersion"></a>

```java
public void resetSkipGetVaultVersion()
```

##### `resetSkipTlsVerify` <a name="resetSkipTlsVerify" id="@cdktf/provider-vault.provider.VaultProvider.resetSkipTlsVerify"></a>

```java
public void resetSkipTlsVerify()
```

##### `resetTlsServerName` <a name="resetTlsServerName" id="@cdktf/provider-vault.provider.VaultProvider.resetTlsServerName"></a>

```java
public void resetTlsServerName()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-vault.provider.VaultProvider.resetToken"></a>

```java
public void resetToken()
```

##### `resetTokenName` <a name="resetTokenName" id="@cdktf/provider-vault.provider.VaultProvider.resetTokenName"></a>

```java
public void resetTokenName()
```

##### `resetVaultVersionOverride` <a name="resetVaultVersionOverride" id="@cdktf/provider-vault.provider.VaultProvider.resetVaultVersionOverride"></a>

```java
public void resetVaultVersionOverride()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VaultProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.provider.VaultProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.provider.VaultProvider;

VaultProvider.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.provider.VaultProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.provider.VaultProvider;

VaultProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.provider.VaultProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-vault.provider.VaultProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.vault.provider.VaultProvider;

VaultProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.provider.VaultProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.provider.VaultProvider.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.provider.VaultProvider;

VaultProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VaultProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VaultProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.provider.VaultProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.provider.VaultProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VaultProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.provider.VaultProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VaultProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.provider.VaultProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VaultProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.addAddressToEnvInput">addAddressToEnvInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginAwsInput">authLoginAwsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws">VaultProviderAuthLoginAws</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginAzureInput">authLoginAzureInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure">VaultProviderAuthLoginAzure</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginCertInput">authLoginCertInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert">VaultProviderAuthLoginCert</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginGcpInput">authLoginGcpInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp">VaultProviderAuthLoginGcp</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginInput">authLoginInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin">VaultProviderAuthLogin</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginJwtInput">authLoginJwtInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt">VaultProviderAuthLoginJwt</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginKerberosInput">authLoginKerberosInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos">VaultProviderAuthLoginKerberos</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginOciInput">authLoginOciInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci">VaultProviderAuthLoginOci</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginOidcInput">authLoginOidcInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc">VaultProviderAuthLoginOidc</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginRadiusInput">authLoginRadiusInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius">VaultProviderAuthLoginRadius</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginTokenFileInput">authLoginTokenFileInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile">VaultProviderAuthLoginTokenFile</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginUserpassInput">authLoginUserpassInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass">VaultProviderAuthLoginUserpass</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.caCertDirInput">caCertDirInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.caCertFileInput">caCertFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.clientAuthInput">clientAuthInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.headersInput">headersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderHeaders">VaultProviderHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.maxLeaseTtlSecondsInput">maxLeaseTtlSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.maxRetriesCccInput">maxRetriesCccInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.maxRetriesInput">maxRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.setNamespaceFromTokenInput">setNamespaceFromTokenInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.skipChildTokenInput">skipChildTokenInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.skipGetVaultVersionInput">skipGetVaultVersionInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.skipTlsVerifyInput">skipTlsVerifyInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.tlsServerNameInput">tlsServerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.tokenNameInput">tokenNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.vaultVersionOverrideInput">vaultVersionOverrideInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.addAddressToEnv">addAddressToEnv</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLogin">authLogin</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin">VaultProviderAuthLogin</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginAws">authLoginAws</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws">VaultProviderAuthLoginAws</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginAzure">authLoginAzure</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure">VaultProviderAuthLoginAzure</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginCert">authLoginCert</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert">VaultProviderAuthLoginCert</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginGcp">authLoginGcp</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp">VaultProviderAuthLoginGcp</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginJwt">authLoginJwt</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt">VaultProviderAuthLoginJwt</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginKerberos">authLoginKerberos</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos">VaultProviderAuthLoginKerberos</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginOci">authLoginOci</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci">VaultProviderAuthLoginOci</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginOidc">authLoginOidc</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc">VaultProviderAuthLoginOidc</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginRadius">authLoginRadius</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius">VaultProviderAuthLoginRadius</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginTokenFile">authLoginTokenFile</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile">VaultProviderAuthLoginTokenFile</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginUserpass">authLoginUserpass</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass">VaultProviderAuthLoginUserpass</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.caCertDir">caCertDir</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.caCertFile">caCertFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.clientAuth">clientAuth</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.headers">headers</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderHeaders">VaultProviderHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.maxRetriesCcc">maxRetriesCcc</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.setNamespaceFromToken">setNamespaceFromToken</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.skipChildToken">skipChildToken</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.skipGetVaultVersion">skipGetVaultVersion</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.skipTlsVerify">skipTlsVerify</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.tlsServerName">tlsServerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.tokenName">tokenName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.vaultVersionOverride">vaultVersionOverride</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.provider.VaultProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.provider.VaultProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.provider.VaultProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.provider.VaultProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-vault.provider.VaultProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.provider.VaultProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.provider.VaultProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-vault.provider.VaultProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-vault.provider.VaultProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `addAddressToEnvInput`<sup>Optional</sup> <a name="addAddressToEnvInput" id="@cdktf/provider-vault.provider.VaultProvider.property.addAddressToEnvInput"></a>

```java
public java.lang.String getAddAddressToEnvInput();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-vault.provider.VaultProvider.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-vault.provider.VaultProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `authLoginAwsInput`<sup>Optional</sup> <a name="authLoginAwsInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginAwsInput"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginAws> getAuthLoginAwsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws">VaultProviderAuthLoginAws</a>>

---

##### `authLoginAzureInput`<sup>Optional</sup> <a name="authLoginAzureInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginAzureInput"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginAzure> getAuthLoginAzureInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure">VaultProviderAuthLoginAzure</a>>

---

##### `authLoginCertInput`<sup>Optional</sup> <a name="authLoginCertInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginCertInput"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginCert> getAuthLoginCertInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert">VaultProviderAuthLoginCert</a>>

---

##### `authLoginGcpInput`<sup>Optional</sup> <a name="authLoginGcpInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginGcpInput"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginGcp> getAuthLoginGcpInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp">VaultProviderAuthLoginGcp</a>>

---

##### `authLoginInput`<sup>Optional</sup> <a name="authLoginInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginInput"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLogin> getAuthLoginInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin">VaultProviderAuthLogin</a>>

---

##### `authLoginJwtInput`<sup>Optional</sup> <a name="authLoginJwtInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginJwtInput"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginJwt> getAuthLoginJwtInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt">VaultProviderAuthLoginJwt</a>>

---

##### `authLoginKerberosInput`<sup>Optional</sup> <a name="authLoginKerberosInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginKerberosInput"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginKerberos> getAuthLoginKerberosInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos">VaultProviderAuthLoginKerberos</a>>

---

##### `authLoginOciInput`<sup>Optional</sup> <a name="authLoginOciInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginOciInput"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginOci> getAuthLoginOciInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci">VaultProviderAuthLoginOci</a>>

---

##### `authLoginOidcInput`<sup>Optional</sup> <a name="authLoginOidcInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginOidcInput"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginOidc> getAuthLoginOidcInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc">VaultProviderAuthLoginOidc</a>>

---

##### `authLoginRadiusInput`<sup>Optional</sup> <a name="authLoginRadiusInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginRadiusInput"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginRadius> getAuthLoginRadiusInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius">VaultProviderAuthLoginRadius</a>>

---

##### `authLoginTokenFileInput`<sup>Optional</sup> <a name="authLoginTokenFileInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginTokenFileInput"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginTokenFile> getAuthLoginTokenFileInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile">VaultProviderAuthLoginTokenFile</a>>

---

##### `authLoginUserpassInput`<sup>Optional</sup> <a name="authLoginUserpassInput" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginUserpassInput"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginUserpass> getAuthLoginUserpassInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass">VaultProviderAuthLoginUserpass</a>>

---

##### `caCertDirInput`<sup>Optional</sup> <a name="caCertDirInput" id="@cdktf/provider-vault.provider.VaultProvider.property.caCertDirInput"></a>

```java
public java.lang.String getCaCertDirInput();
```

- *Type:* java.lang.String

---

##### `caCertFileInput`<sup>Optional</sup> <a name="caCertFileInput" id="@cdktf/provider-vault.provider.VaultProvider.property.caCertFileInput"></a>

```java
public java.lang.String getCaCertFileInput();
```

- *Type:* java.lang.String

---

##### `clientAuthInput`<sup>Optional</sup> <a name="clientAuthInput" id="@cdktf/provider-vault.provider.VaultProvider.property.clientAuthInput"></a>

```java
public IResolvable|java.util.List<VaultProviderClientAuth> getClientAuthInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a>>

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-vault.provider.VaultProvider.property.headersInput"></a>

```java
public IResolvable|java.util.List<VaultProviderHeaders> getHeadersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderHeaders">VaultProviderHeaders</a>>

---

##### `maxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="maxLeaseTtlSecondsInput" id="@cdktf/provider-vault.provider.VaultProvider.property.maxLeaseTtlSecondsInput"></a>

```java
public java.lang.Number getMaxLeaseTtlSecondsInput();
```

- *Type:* java.lang.Number

---

##### `maxRetriesCccInput`<sup>Optional</sup> <a name="maxRetriesCccInput" id="@cdktf/provider-vault.provider.VaultProvider.property.maxRetriesCccInput"></a>

```java
public java.lang.Number getMaxRetriesCccInput();
```

- *Type:* java.lang.Number

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-vault.provider.VaultProvider.property.maxRetriesInput"></a>

```java
public java.lang.Number getMaxRetriesInput();
```

- *Type:* java.lang.Number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.provider.VaultProvider.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `setNamespaceFromTokenInput`<sup>Optional</sup> <a name="setNamespaceFromTokenInput" id="@cdktf/provider-vault.provider.VaultProvider.property.setNamespaceFromTokenInput"></a>

```java
public java.lang.Boolean|IResolvable getSetNamespaceFromTokenInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `skipChildTokenInput`<sup>Optional</sup> <a name="skipChildTokenInput" id="@cdktf/provider-vault.provider.VaultProvider.property.skipChildTokenInput"></a>

```java
public java.lang.Boolean|IResolvable getSkipChildTokenInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `skipGetVaultVersionInput`<sup>Optional</sup> <a name="skipGetVaultVersionInput" id="@cdktf/provider-vault.provider.VaultProvider.property.skipGetVaultVersionInput"></a>

```java
public java.lang.Boolean|IResolvable getSkipGetVaultVersionInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `skipTlsVerifyInput`<sup>Optional</sup> <a name="skipTlsVerifyInput" id="@cdktf/provider-vault.provider.VaultProvider.property.skipTlsVerifyInput"></a>

```java
public java.lang.Boolean|IResolvable getSkipTlsVerifyInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tlsServerNameInput`<sup>Optional</sup> <a name="tlsServerNameInput" id="@cdktf/provider-vault.provider.VaultProvider.property.tlsServerNameInput"></a>

```java
public java.lang.String getTlsServerNameInput();
```

- *Type:* java.lang.String

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-vault.provider.VaultProvider.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `tokenNameInput`<sup>Optional</sup> <a name="tokenNameInput" id="@cdktf/provider-vault.provider.VaultProvider.property.tokenNameInput"></a>

```java
public java.lang.String getTokenNameInput();
```

- *Type:* java.lang.String

---

##### `vaultVersionOverrideInput`<sup>Optional</sup> <a name="vaultVersionOverrideInput" id="@cdktf/provider-vault.provider.VaultProvider.property.vaultVersionOverrideInput"></a>

```java
public java.lang.String getVaultVersionOverrideInput();
```

- *Type:* java.lang.String

---

##### `addAddressToEnv`<sup>Optional</sup> <a name="addAddressToEnv" id="@cdktf/provider-vault.provider.VaultProvider.property.addAddressToEnv"></a>

```java
public java.lang.String getAddAddressToEnv();
```

- *Type:* java.lang.String

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-vault.provider.VaultProvider.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `authLogin`<sup>Optional</sup> <a name="authLogin" id="@cdktf/provider-vault.provider.VaultProvider.property.authLogin"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLogin> getAuthLogin();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin">VaultProviderAuthLogin</a>>

---

##### `authLoginAws`<sup>Optional</sup> <a name="authLoginAws" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginAws"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginAws> getAuthLoginAws();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws">VaultProviderAuthLoginAws</a>>

---

##### `authLoginAzure`<sup>Optional</sup> <a name="authLoginAzure" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginAzure"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginAzure> getAuthLoginAzure();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure">VaultProviderAuthLoginAzure</a>>

---

##### `authLoginCert`<sup>Optional</sup> <a name="authLoginCert" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginCert"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginCert> getAuthLoginCert();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert">VaultProviderAuthLoginCert</a>>

---

##### `authLoginGcp`<sup>Optional</sup> <a name="authLoginGcp" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginGcp"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginGcp> getAuthLoginGcp();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp">VaultProviderAuthLoginGcp</a>>

---

##### `authLoginJwt`<sup>Optional</sup> <a name="authLoginJwt" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginJwt"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginJwt> getAuthLoginJwt();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt">VaultProviderAuthLoginJwt</a>>

---

##### `authLoginKerberos`<sup>Optional</sup> <a name="authLoginKerberos" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginKerberos"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginKerberos> getAuthLoginKerberos();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos">VaultProviderAuthLoginKerberos</a>>

---

##### `authLoginOci`<sup>Optional</sup> <a name="authLoginOci" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginOci"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginOci> getAuthLoginOci();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci">VaultProviderAuthLoginOci</a>>

---

##### `authLoginOidc`<sup>Optional</sup> <a name="authLoginOidc" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginOidc"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginOidc> getAuthLoginOidc();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc">VaultProviderAuthLoginOidc</a>>

---

##### `authLoginRadius`<sup>Optional</sup> <a name="authLoginRadius" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginRadius"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginRadius> getAuthLoginRadius();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius">VaultProviderAuthLoginRadius</a>>

---

##### `authLoginTokenFile`<sup>Optional</sup> <a name="authLoginTokenFile" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginTokenFile"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginTokenFile> getAuthLoginTokenFile();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile">VaultProviderAuthLoginTokenFile</a>>

---

##### `authLoginUserpass`<sup>Optional</sup> <a name="authLoginUserpass" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginUserpass"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginUserpass> getAuthLoginUserpass();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass">VaultProviderAuthLoginUserpass</a>>

---

##### `caCertDir`<sup>Optional</sup> <a name="caCertDir" id="@cdktf/provider-vault.provider.VaultProvider.property.caCertDir"></a>

```java
public java.lang.String getCaCertDir();
```

- *Type:* java.lang.String

---

##### `caCertFile`<sup>Optional</sup> <a name="caCertFile" id="@cdktf/provider-vault.provider.VaultProvider.property.caCertFile"></a>

```java
public java.lang.String getCaCertFile();
```

- *Type:* java.lang.String

---

##### `clientAuth`<sup>Optional</sup> <a name="clientAuth" id="@cdktf/provider-vault.provider.VaultProvider.property.clientAuth"></a>

```java
public IResolvable|java.util.List<VaultProviderClientAuth> getClientAuth();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a>>

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-vault.provider.VaultProvider.property.headers"></a>

```java
public IResolvable|java.util.List<VaultProviderHeaders> getHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderHeaders">VaultProviderHeaders</a>>

---

##### `maxLeaseTtlSeconds`<sup>Optional</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.provider.VaultProvider.property.maxLeaseTtlSeconds"></a>

```java
public java.lang.Number getMaxLeaseTtlSeconds();
```

- *Type:* java.lang.Number

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-vault.provider.VaultProvider.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

---

##### `maxRetriesCcc`<sup>Optional</sup> <a name="maxRetriesCcc" id="@cdktf/provider-vault.provider.VaultProvider.property.maxRetriesCcc"></a>

```java
public java.lang.Number getMaxRetriesCcc();
```

- *Type:* java.lang.Number

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProvider.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `setNamespaceFromToken`<sup>Optional</sup> <a name="setNamespaceFromToken" id="@cdktf/provider-vault.provider.VaultProvider.property.setNamespaceFromToken"></a>

```java
public java.lang.Boolean|IResolvable getSetNamespaceFromToken();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `skipChildToken`<sup>Optional</sup> <a name="skipChildToken" id="@cdktf/provider-vault.provider.VaultProvider.property.skipChildToken"></a>

```java
public java.lang.Boolean|IResolvable getSkipChildToken();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `skipGetVaultVersion`<sup>Optional</sup> <a name="skipGetVaultVersion" id="@cdktf/provider-vault.provider.VaultProvider.property.skipGetVaultVersion"></a>

```java
public java.lang.Boolean|IResolvable getSkipGetVaultVersion();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `skipTlsVerify`<sup>Optional</sup> <a name="skipTlsVerify" id="@cdktf/provider-vault.provider.VaultProvider.property.skipTlsVerify"></a>

```java
public java.lang.Boolean|IResolvable getSkipTlsVerify();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tlsServerName`<sup>Optional</sup> <a name="tlsServerName" id="@cdktf/provider-vault.provider.VaultProvider.property.tlsServerName"></a>

```java
public java.lang.String getTlsServerName();
```

- *Type:* java.lang.String

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-vault.provider.VaultProvider.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `tokenName`<sup>Optional</sup> <a name="tokenName" id="@cdktf/provider-vault.provider.VaultProvider.property.tokenName"></a>

```java
public java.lang.String getTokenName();
```

- *Type:* java.lang.String

---

##### `vaultVersionOverride`<sup>Optional</sup> <a name="vaultVersionOverride" id="@cdktf/provider-vault.provider.VaultProvider.property.vaultVersionOverride"></a>

```java
public java.lang.String getVaultVersionOverride();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.provider.VaultProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VaultProviderAuthLogin <a name="VaultProviderAuthLogin" id="@cdktf/provider-vault.provider.VaultProviderAuthLogin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLogin.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.provider.VaultProviderAuthLogin;

VaultProviderAuthLogin.builder()
    .path(java.lang.String)
//  .method(java.lang.String)
//  .namespace(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .useRootNamespace(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#path VaultProvider#path}. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.method">method</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#method VaultProvider#method}. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The authentication engine's namespace. Conflicts with use_root_namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#parameters VaultProvider#parameters}. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.useRootNamespace">useRootNamespace</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Authenticate to the root Vault namespace. Conflicts with namespace. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#path VaultProvider#path}.

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#method VaultProvider#method}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The authentication engine's namespace. Conflicts with use_root_namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#namespace VaultProvider#namespace}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#parameters VaultProvider#parameters}.

---

##### `useRootNamespace`<sup>Optional</sup> <a name="useRootNamespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.useRootNamespace"></a>

```java
public java.lang.Boolean|IResolvable getUseRootNamespace();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Authenticate to the root Vault namespace. Conflicts with namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#use_root_namespace VaultProvider#use_root_namespace}

---

### VaultProviderAuthLoginAws <a name="VaultProviderAuthLoginAws" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.provider.VaultProviderAuthLoginAws;

VaultProviderAuthLoginAws.builder()
    .role(java.lang.String)
//  .awsAccessKeyId(java.lang.String)
//  .awsIamEndpoint(java.lang.String)
//  .awsProfile(java.lang.String)
//  .awsRegion(java.lang.String)
//  .awsRoleArn(java.lang.String)
//  .awsRoleSessionName(java.lang.String)
//  .awsSecretAccessKey(java.lang.String)
//  .awsSessionToken(java.lang.String)
//  .awsSharedCredentialsFile(java.lang.String)
//  .awsStsEndpoint(java.lang.String)
//  .awsWebIdentityTokenFile(java.lang.String)
//  .headerValue(java.lang.String)
//  .mount(java.lang.String)
//  .namespace(java.lang.String)
//  .useRootNamespace(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.role">role</a></code> | <code>java.lang.String</code> | The Vault role to use when logging into Vault. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsAccessKeyId">awsAccessKeyId</a></code> | <code>java.lang.String</code> | The AWS access key ID. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsIamEndpoint">awsIamEndpoint</a></code> | <code>java.lang.String</code> | The IAM endpoint URL. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsProfile">awsProfile</a></code> | <code>java.lang.String</code> | The name of the AWS profile. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | The AWS region. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsRoleArn">awsRoleArn</a></code> | <code>java.lang.String</code> | The ARN of the AWS Role to assume.Used during STS AssumeRole. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsRoleSessionName">awsRoleSessionName</a></code> | <code>java.lang.String</code> | Specifies the name to attach to the AWS role session. Used during STS AssumeRole. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsSecretAccessKey">awsSecretAccessKey</a></code> | <code>java.lang.String</code> | The AWS secret access key. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsSessionToken">awsSessionToken</a></code> | <code>java.lang.String</code> | The AWS session token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsSharedCredentialsFile">awsSharedCredentialsFile</a></code> | <code>java.lang.String</code> | Path to the AWS shared credentials file. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsStsEndpoint">awsStsEndpoint</a></code> | <code>java.lang.String</code> | The STS endpoint URL. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsWebIdentityTokenFile">awsWebIdentityTokenFile</a></code> | <code>java.lang.String</code> | Path to the file containing an OAuth 2.0 access token or OpenID Connect ID token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.headerValue">headerValue</a></code> | <code>java.lang.String</code> | The Vault header value to include in the STS signing request. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.mount">mount</a></code> | <code>java.lang.String</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The authentication engine's namespace. Conflicts with use_root_namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.useRootNamespace">useRootNamespace</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Authenticate to the root Vault namespace. Conflicts with namespace. |

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

The Vault role to use when logging into Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#role VaultProvider#role}

---

##### `awsAccessKeyId`<sup>Optional</sup> <a name="awsAccessKeyId" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsAccessKeyId"></a>

```java
public java.lang.String getAwsAccessKeyId();
```

- *Type:* java.lang.String

The AWS access key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#aws_access_key_id VaultProvider#aws_access_key_id}

---

##### `awsIamEndpoint`<sup>Optional</sup> <a name="awsIamEndpoint" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsIamEndpoint"></a>

```java
public java.lang.String getAwsIamEndpoint();
```

- *Type:* java.lang.String

The IAM endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#aws_iam_endpoint VaultProvider#aws_iam_endpoint}

---

##### `awsProfile`<sup>Optional</sup> <a name="awsProfile" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsProfile"></a>

```java
public java.lang.String getAwsProfile();
```

- *Type:* java.lang.String

The name of the AWS profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#aws_profile VaultProvider#aws_profile}

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

The AWS region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#aws_region VaultProvider#aws_region}

---

##### `awsRoleArn`<sup>Optional</sup> <a name="awsRoleArn" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsRoleArn"></a>

```java
public java.lang.String getAwsRoleArn();
```

- *Type:* java.lang.String

The ARN of the AWS Role to assume.Used during STS AssumeRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#aws_role_arn VaultProvider#aws_role_arn}

---

##### `awsRoleSessionName`<sup>Optional</sup> <a name="awsRoleSessionName" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsRoleSessionName"></a>

```java
public java.lang.String getAwsRoleSessionName();
```

- *Type:* java.lang.String

Specifies the name to attach to the AWS role session. Used during STS AssumeRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#aws_role_session_name VaultProvider#aws_role_session_name}

---

##### `awsSecretAccessKey`<sup>Optional</sup> <a name="awsSecretAccessKey" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsSecretAccessKey"></a>

```java
public java.lang.String getAwsSecretAccessKey();
```

- *Type:* java.lang.String

The AWS secret access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#aws_secret_access_key VaultProvider#aws_secret_access_key}

---

##### `awsSessionToken`<sup>Optional</sup> <a name="awsSessionToken" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsSessionToken"></a>

```java
public java.lang.String getAwsSessionToken();
```

- *Type:* java.lang.String

The AWS session token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#aws_session_token VaultProvider#aws_session_token}

---

##### `awsSharedCredentialsFile`<sup>Optional</sup> <a name="awsSharedCredentialsFile" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsSharedCredentialsFile"></a>

```java
public java.lang.String getAwsSharedCredentialsFile();
```

- *Type:* java.lang.String

Path to the AWS shared credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#aws_shared_credentials_file VaultProvider#aws_shared_credentials_file}

---

##### `awsStsEndpoint`<sup>Optional</sup> <a name="awsStsEndpoint" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsStsEndpoint"></a>

```java
public java.lang.String getAwsStsEndpoint();
```

- *Type:* java.lang.String

The STS endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#aws_sts_endpoint VaultProvider#aws_sts_endpoint}

---

##### `awsWebIdentityTokenFile`<sup>Optional</sup> <a name="awsWebIdentityTokenFile" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsWebIdentityTokenFile"></a>

```java
public java.lang.String getAwsWebIdentityTokenFile();
```

- *Type:* java.lang.String

Path to the file containing an OAuth 2.0 access token or OpenID Connect ID token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#aws_web_identity_token_file VaultProvider#aws_web_identity_token_file}

---

##### `headerValue`<sup>Optional</sup> <a name="headerValue" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.headerValue"></a>

```java
public java.lang.String getHeaderValue();
```

- *Type:* java.lang.String

The Vault header value to include in the STS signing request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#header_value VaultProvider#header_value}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#mount VaultProvider#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The authentication engine's namespace. Conflicts with use_root_namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#namespace VaultProvider#namespace}

---

##### `useRootNamespace`<sup>Optional</sup> <a name="useRootNamespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.useRootNamespace"></a>

```java
public java.lang.Boolean|IResolvable getUseRootNamespace();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Authenticate to the root Vault namespace. Conflicts with namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#use_root_namespace VaultProvider#use_root_namespace}

---

### VaultProviderAuthLoginAzure <a name="VaultProviderAuthLoginAzure" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.provider.VaultProviderAuthLoginAzure;

VaultProviderAuthLoginAzure.builder()
    .resourceGroupName(java.lang.String)
    .role(java.lang.String)
    .subscriptionId(java.lang.String)
//  .clientId(java.lang.String)
//  .jwt(java.lang.String)
//  .mount(java.lang.String)
//  .namespace(java.lang.String)
//  .scope(java.lang.String)
//  .tenantId(java.lang.String)
//  .useRootNamespace(java.lang.Boolean|IResolvable)
//  .vmName(java.lang.String)
//  .vmssName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | The resource group for the machine that generated the MSI token. This information can be obtained through instance metadata. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.role">role</a></code> | <code>java.lang.String</code> | Name of the login role. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | The subscription ID for the machine that generated the MSI token. This information can be obtained through instance metadata. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The identity's client ID. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.jwt">jwt</a></code> | <code>java.lang.String</code> | A signed JSON Web Token. If not specified on will be created automatically. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.mount">mount</a></code> | <code>java.lang.String</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The authentication engine's namespace. Conflicts with use_root_namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.scope">scope</a></code> | <code>java.lang.String</code> | The scopes to include in the token request. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Provides the tenant ID to use in a multi-tenant authentication scenario. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.useRootNamespace">useRootNamespace</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Authenticate to the root Vault namespace. Conflicts with namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.vmName">vmName</a></code> | <code>java.lang.String</code> | The virtual machine name for the machine that generated the MSI token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.vmssName">vmssName</a></code> | <code>java.lang.String</code> | The virtual machine scale set name for the machine that generated the MSI token. |

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

The resource group for the machine that generated the MSI token. This information can be obtained through instance metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#resource_group_name VaultProvider#resource_group_name}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Name of the login role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#role VaultProvider#role}

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

The subscription ID for the machine that generated the MSI token. This information can be obtained through instance metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#subscription_id VaultProvider#subscription_id}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The identity's client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#client_id VaultProvider#client_id}

---

##### `jwt`<sup>Optional</sup> <a name="jwt" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.jwt"></a>

```java
public java.lang.String getJwt();
```

- *Type:* java.lang.String

A signed JSON Web Token. If not specified on will be created automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#jwt VaultProvider#jwt}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#mount VaultProvider#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The authentication engine's namespace. Conflicts with use_root_namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#namespace VaultProvider#namespace}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

The scopes to include in the token request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#scope VaultProvider#scope}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Provides the tenant ID to use in a multi-tenant authentication scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#tenant_id VaultProvider#tenant_id}

---

##### `useRootNamespace`<sup>Optional</sup> <a name="useRootNamespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.useRootNamespace"></a>

```java
public java.lang.Boolean|IResolvable getUseRootNamespace();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Authenticate to the root Vault namespace. Conflicts with namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#use_root_namespace VaultProvider#use_root_namespace}

---

##### `vmName`<sup>Optional</sup> <a name="vmName" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.vmName"></a>

```java
public java.lang.String getVmName();
```

- *Type:* java.lang.String

The virtual machine name for the machine that generated the MSI token.

This information can be obtained through instance metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#vm_name VaultProvider#vm_name}

---

##### `vmssName`<sup>Optional</sup> <a name="vmssName" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.vmssName"></a>

```java
public java.lang.String getVmssName();
```

- *Type:* java.lang.String

The virtual machine scale set name for the machine that generated the MSI token.

This information can be obtained through instance metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#vmss_name VaultProvider#vmss_name}

---

### VaultProviderAuthLoginCert <a name="VaultProviderAuthLoginCert" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.provider.VaultProviderAuthLoginCert;

VaultProviderAuthLoginCert.builder()
    .certFile(java.lang.String)
    .keyFile(java.lang.String)
//  .mount(java.lang.String)
//  .name(java.lang.String)
//  .namespace(java.lang.String)
//  .useRootNamespace(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.certFile">certFile</a></code> | <code>java.lang.String</code> | Path to a file containing the client certificate. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.keyFile">keyFile</a></code> | <code>java.lang.String</code> | Path to a file containing the private key that the certificate was issued for. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.mount">mount</a></code> | <code>java.lang.String</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.name">name</a></code> | <code>java.lang.String</code> | Name of the certificate's role. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The authentication engine's namespace. Conflicts with use_root_namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.useRootNamespace">useRootNamespace</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Authenticate to the root Vault namespace. Conflicts with namespace. |

---

##### `certFile`<sup>Required</sup> <a name="certFile" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.certFile"></a>

```java
public java.lang.String getCertFile();
```

- *Type:* java.lang.String

Path to a file containing the client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#cert_file VaultProvider#cert_file}

---

##### `keyFile`<sup>Required</sup> <a name="keyFile" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.keyFile"></a>

```java
public java.lang.String getKeyFile();
```

- *Type:* java.lang.String

Path to a file containing the private key that the certificate was issued for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#key_file VaultProvider#key_file}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#mount VaultProvider#mount}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the certificate's role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#name VaultProvider#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The authentication engine's namespace. Conflicts with use_root_namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#namespace VaultProvider#namespace}

---

##### `useRootNamespace`<sup>Optional</sup> <a name="useRootNamespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.useRootNamespace"></a>

```java
public java.lang.Boolean|IResolvable getUseRootNamespace();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Authenticate to the root Vault namespace. Conflicts with namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#use_root_namespace VaultProvider#use_root_namespace}

---

### VaultProviderAuthLoginGcp <a name="VaultProviderAuthLoginGcp" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.provider.VaultProviderAuthLoginGcp;

VaultProviderAuthLoginGcp.builder()
    .role(java.lang.String)
//  .credentials(java.lang.String)
//  .jwt(java.lang.String)
//  .mount(java.lang.String)
//  .namespace(java.lang.String)
//  .serviceAccount(java.lang.String)
//  .useRootNamespace(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.role">role</a></code> | <code>java.lang.String</code> | Name of the login role. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.credentials">credentials</a></code> | <code>java.lang.String</code> | Path to the Google Cloud credentials file. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.jwt">jwt</a></code> | <code>java.lang.String</code> | A signed JSON Web Token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.mount">mount</a></code> | <code>java.lang.String</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The authentication engine's namespace. Conflicts with use_root_namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | IAM service account. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.useRootNamespace">useRootNamespace</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Authenticate to the root Vault namespace. Conflicts with namespace. |

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Name of the login role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#role VaultProvider#role}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.credentials"></a>

```java
public java.lang.String getCredentials();
```

- *Type:* java.lang.String

Path to the Google Cloud credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#credentials VaultProvider#credentials}

---

##### `jwt`<sup>Optional</sup> <a name="jwt" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.jwt"></a>

```java
public java.lang.String getJwt();
```

- *Type:* java.lang.String

A signed JSON Web Token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#jwt VaultProvider#jwt}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#mount VaultProvider#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The authentication engine's namespace. Conflicts with use_root_namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#namespace VaultProvider#namespace}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

IAM service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#service_account VaultProvider#service_account}

---

##### `useRootNamespace`<sup>Optional</sup> <a name="useRootNamespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.useRootNamespace"></a>

```java
public java.lang.Boolean|IResolvable getUseRootNamespace();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Authenticate to the root Vault namespace. Conflicts with namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#use_root_namespace VaultProvider#use_root_namespace}

---

### VaultProviderAuthLoginJwt <a name="VaultProviderAuthLoginJwt" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.provider.VaultProviderAuthLoginJwt;

VaultProviderAuthLoginJwt.builder()
    .role(java.lang.String)
//  .jwt(java.lang.String)
//  .mount(java.lang.String)
//  .namespace(java.lang.String)
//  .useRootNamespace(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.role">role</a></code> | <code>java.lang.String</code> | Name of the login role. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.jwt">jwt</a></code> | <code>java.lang.String</code> | A signed JSON Web Token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.mount">mount</a></code> | <code>java.lang.String</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The authentication engine's namespace. Conflicts with use_root_namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.useRootNamespace">useRootNamespace</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Authenticate to the root Vault namespace. Conflicts with namespace. |

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Name of the login role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#role VaultProvider#role}

---

##### `jwt`<sup>Optional</sup> <a name="jwt" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.jwt"></a>

```java
public java.lang.String getJwt();
```

- *Type:* java.lang.String

A signed JSON Web Token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#jwt VaultProvider#jwt}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#mount VaultProvider#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The authentication engine's namespace. Conflicts with use_root_namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#namespace VaultProvider#namespace}

---

##### `useRootNamespace`<sup>Optional</sup> <a name="useRootNamespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.useRootNamespace"></a>

```java
public java.lang.Boolean|IResolvable getUseRootNamespace();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Authenticate to the root Vault namespace. Conflicts with namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#use_root_namespace VaultProvider#use_root_namespace}

---

### VaultProviderAuthLoginKerberos <a name="VaultProviderAuthLoginKerberos" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.provider.VaultProviderAuthLoginKerberos;

VaultProviderAuthLoginKerberos.builder()
//  .disableFastNegotiation(java.lang.Boolean|IResolvable)
//  .keytabPath(java.lang.String)
//  .krb5ConfPath(java.lang.String)
//  .mount(java.lang.String)
//  .namespace(java.lang.String)
//  .realm(java.lang.String)
//  .removeInstanceName(java.lang.Boolean|IResolvable)
//  .service(java.lang.String)
//  .token(java.lang.String)
//  .username(java.lang.String)
//  .useRootNamespace(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.disableFastNegotiation">disableFastNegotiation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Disable the Kerberos FAST negotiation. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.keytabPath">keytabPath</a></code> | <code>java.lang.String</code> | The Kerberos keytab file containing the entry of the login entity. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.krb5ConfPath">krb5ConfPath</a></code> | <code>java.lang.String</code> | A valid Kerberos configuration file e.g. /etc/krb5.conf. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.mount">mount</a></code> | <code>java.lang.String</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The authentication engine's namespace. Conflicts with use_root_namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.realm">realm</a></code> | <code>java.lang.String</code> | The Kerberos server's authoritative authentication domain. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.removeInstanceName">removeInstanceName</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Strip the host from the username found in the keytab. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.service">service</a></code> | <code>java.lang.String</code> | The service principle name. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.token">token</a></code> | <code>java.lang.String</code> | Simple and Protected GSSAPI Negotiation Mechanism (SPNEGO) token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.username">username</a></code> | <code>java.lang.String</code> | The username to login into Kerberos with. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.useRootNamespace">useRootNamespace</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Authenticate to the root Vault namespace. Conflicts with namespace. |

---

##### `disableFastNegotiation`<sup>Optional</sup> <a name="disableFastNegotiation" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.disableFastNegotiation"></a>

```java
public java.lang.Boolean|IResolvable getDisableFastNegotiation();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Disable the Kerberos FAST negotiation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#disable_fast_negotiation VaultProvider#disable_fast_negotiation}

---

##### `keytabPath`<sup>Optional</sup> <a name="keytabPath" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.keytabPath"></a>

```java
public java.lang.String getKeytabPath();
```

- *Type:* java.lang.String

The Kerberos keytab file containing the entry of the login entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#keytab_path VaultProvider#keytab_path}

---

##### `krb5ConfPath`<sup>Optional</sup> <a name="krb5ConfPath" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.krb5ConfPath"></a>

```java
public java.lang.String getKrb5ConfPath();
```

- *Type:* java.lang.String

A valid Kerberos configuration file e.g. /etc/krb5.conf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#krb5conf_path VaultProvider#krb5conf_path}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#mount VaultProvider#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The authentication engine's namespace. Conflicts with use_root_namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#namespace VaultProvider#namespace}

---

##### `realm`<sup>Optional</sup> <a name="realm" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.realm"></a>

```java
public java.lang.String getRealm();
```

- *Type:* java.lang.String

The Kerberos server's authoritative authentication domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#realm VaultProvider#realm}

---

##### `removeInstanceName`<sup>Optional</sup> <a name="removeInstanceName" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.removeInstanceName"></a>

```java
public java.lang.Boolean|IResolvable getRemoveInstanceName();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Strip the host from the username found in the keytab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#remove_instance_name VaultProvider#remove_instance_name}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

The service principle name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#service VaultProvider#service}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Simple and Protected GSSAPI Negotiation Mechanism (SPNEGO) token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#token VaultProvider#token}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The username to login into Kerberos with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#username VaultProvider#username}

---

##### `useRootNamespace`<sup>Optional</sup> <a name="useRootNamespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.useRootNamespace"></a>

```java
public java.lang.Boolean|IResolvable getUseRootNamespace();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Authenticate to the root Vault namespace. Conflicts with namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#use_root_namespace VaultProvider#use_root_namespace}

---

### VaultProviderAuthLoginOci <a name="VaultProviderAuthLoginOci" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOci"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.provider.VaultProviderAuthLoginOci;

VaultProviderAuthLoginOci.builder()
    .authType(java.lang.String)
    .role(java.lang.String)
//  .mount(java.lang.String)
//  .namespace(java.lang.String)
//  .useRootNamespace(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.authType">authType</a></code> | <code>java.lang.String</code> | Authentication type to use when getting OCI credentials. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.role">role</a></code> | <code>java.lang.String</code> | Name of the login role. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.mount">mount</a></code> | <code>java.lang.String</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The authentication engine's namespace. Conflicts with use_root_namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.useRootNamespace">useRootNamespace</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Authenticate to the root Vault namespace. Conflicts with namespace. |

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

Authentication type to use when getting OCI credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#auth_type VaultProvider#auth_type}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Name of the login role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#role VaultProvider#role}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#mount VaultProvider#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The authentication engine's namespace. Conflicts with use_root_namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#namespace VaultProvider#namespace}

---

##### `useRootNamespace`<sup>Optional</sup> <a name="useRootNamespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.useRootNamespace"></a>

```java
public java.lang.Boolean|IResolvable getUseRootNamespace();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Authenticate to the root Vault namespace. Conflicts with namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#use_root_namespace VaultProvider#use_root_namespace}

---

### VaultProviderAuthLoginOidc <a name="VaultProviderAuthLoginOidc" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.provider.VaultProviderAuthLoginOidc;

VaultProviderAuthLoginOidc.builder()
    .role(java.lang.String)
//  .callbackAddress(java.lang.String)
//  .callbackListenerAddress(java.lang.String)
//  .mount(java.lang.String)
//  .namespace(java.lang.String)
//  .useRootNamespace(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.role">role</a></code> | <code>java.lang.String</code> | Name of the login role. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.callbackAddress">callbackAddress</a></code> | <code>java.lang.String</code> | The callback address. Must be a valid URI without the path. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.callbackListenerAddress">callbackListenerAddress</a></code> | <code>java.lang.String</code> | The callback listener's address. Must be a valid URI without the path. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.mount">mount</a></code> | <code>java.lang.String</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The authentication engine's namespace. Conflicts with use_root_namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.useRootNamespace">useRootNamespace</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Authenticate to the root Vault namespace. Conflicts with namespace. |

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Name of the login role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#role VaultProvider#role}

---

##### `callbackAddress`<sup>Optional</sup> <a name="callbackAddress" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.callbackAddress"></a>

```java
public java.lang.String getCallbackAddress();
```

- *Type:* java.lang.String

The callback address. Must be a valid URI without the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#callback_address VaultProvider#callback_address}

---

##### `callbackListenerAddress`<sup>Optional</sup> <a name="callbackListenerAddress" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.callbackListenerAddress"></a>

```java
public java.lang.String getCallbackListenerAddress();
```

- *Type:* java.lang.String

The callback listener's address. Must be a valid URI without the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#callback_listener_address VaultProvider#callback_listener_address}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#mount VaultProvider#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The authentication engine's namespace. Conflicts with use_root_namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#namespace VaultProvider#namespace}

---

##### `useRootNamespace`<sup>Optional</sup> <a name="useRootNamespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.useRootNamespace"></a>

```java
public java.lang.Boolean|IResolvable getUseRootNamespace();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Authenticate to the root Vault namespace. Conflicts with namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#use_root_namespace VaultProvider#use_root_namespace}

---

### VaultProviderAuthLoginRadius <a name="VaultProviderAuthLoginRadius" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.provider.VaultProviderAuthLoginRadius;

VaultProviderAuthLoginRadius.builder()
//  .mount(java.lang.String)
//  .namespace(java.lang.String)
//  .password(java.lang.String)
//  .username(java.lang.String)
//  .useRootNamespace(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.mount">mount</a></code> | <code>java.lang.String</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The authentication engine's namespace. Conflicts with use_root_namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.password">password</a></code> | <code>java.lang.String</code> | The Radius password for username. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.username">username</a></code> | <code>java.lang.String</code> | The Radius username. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.useRootNamespace">useRootNamespace</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Authenticate to the root Vault namespace. Conflicts with namespace. |

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#mount VaultProvider#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The authentication engine's namespace. Conflicts with use_root_namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#namespace VaultProvider#namespace}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The Radius password for username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#password VaultProvider#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The Radius username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#username VaultProvider#username}

---

##### `useRootNamespace`<sup>Optional</sup> <a name="useRootNamespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.useRootNamespace"></a>

```java
public java.lang.Boolean|IResolvable getUseRootNamespace();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Authenticate to the root Vault namespace. Conflicts with namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#use_root_namespace VaultProvider#use_root_namespace}

---

### VaultProviderAuthLoginTokenFile <a name="VaultProviderAuthLoginTokenFile" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.provider.VaultProviderAuthLoginTokenFile;

VaultProviderAuthLoginTokenFile.builder()
//  .filename(java.lang.String)
//  .namespace(java.lang.String)
//  .useRootNamespace(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile.property.filename">filename</a></code> | <code>java.lang.String</code> | The name of a file containing a single line that is a valid Vault token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The authentication engine's namespace. Conflicts with use_root_namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile.property.useRootNamespace">useRootNamespace</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Authenticate to the root Vault namespace. Conflicts with namespace. |

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile.property.filename"></a>

```java
public java.lang.String getFilename();
```

- *Type:* java.lang.String

The name of a file containing a single line that is a valid Vault token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#filename VaultProvider#filename}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The authentication engine's namespace. Conflicts with use_root_namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#namespace VaultProvider#namespace}

---

##### `useRootNamespace`<sup>Optional</sup> <a name="useRootNamespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile.property.useRootNamespace"></a>

```java
public java.lang.Boolean|IResolvable getUseRootNamespace();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Authenticate to the root Vault namespace. Conflicts with namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#use_root_namespace VaultProvider#use_root_namespace}

---

### VaultProviderAuthLoginUserpass <a name="VaultProviderAuthLoginUserpass" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.provider.VaultProviderAuthLoginUserpass;

VaultProviderAuthLoginUserpass.builder()
//  .mount(java.lang.String)
//  .namespace(java.lang.String)
//  .password(java.lang.String)
//  .passwordFile(java.lang.String)
//  .username(java.lang.String)
//  .useRootNamespace(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.mount">mount</a></code> | <code>java.lang.String</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The authentication engine's namespace. Conflicts with use_root_namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.password">password</a></code> | <code>java.lang.String</code> | Login with password. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.passwordFile">passwordFile</a></code> | <code>java.lang.String</code> | Login with password from a file. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.username">username</a></code> | <code>java.lang.String</code> | Login with username. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.useRootNamespace">useRootNamespace</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Authenticate to the root Vault namespace. Conflicts with namespace. |

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#mount VaultProvider#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The authentication engine's namespace. Conflicts with use_root_namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#namespace VaultProvider#namespace}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Login with password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#password VaultProvider#password}

---

##### `passwordFile`<sup>Optional</sup> <a name="passwordFile" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.passwordFile"></a>

```java
public java.lang.String getPasswordFile();
```

- *Type:* java.lang.String

Login with password from a file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#password_file VaultProvider#password_file}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Login with username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#username VaultProvider#username}

---

##### `useRootNamespace`<sup>Optional</sup> <a name="useRootNamespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.useRootNamespace"></a>

```java
public java.lang.Boolean|IResolvable getUseRootNamespace();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Authenticate to the root Vault namespace. Conflicts with namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#use_root_namespace VaultProvider#use_root_namespace}

---

### VaultProviderClientAuth <a name="VaultProviderClientAuth" id="@cdktf/provider-vault.provider.VaultProviderClientAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderClientAuth.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.provider.VaultProviderClientAuth;

VaultProviderClientAuth.builder()
    .certFile(java.lang.String)
    .keyFile(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth.property.certFile">certFile</a></code> | <code>java.lang.String</code> | Path to a file containing the client certificate. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth.property.keyFile">keyFile</a></code> | <code>java.lang.String</code> | Path to a file containing the private key that the certificate was issued for. |

---

##### `certFile`<sup>Required</sup> <a name="certFile" id="@cdktf/provider-vault.provider.VaultProviderClientAuth.property.certFile"></a>

```java
public java.lang.String getCertFile();
```

- *Type:* java.lang.String

Path to a file containing the client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#cert_file VaultProvider#cert_file}

---

##### `keyFile`<sup>Required</sup> <a name="keyFile" id="@cdktf/provider-vault.provider.VaultProviderClientAuth.property.keyFile"></a>

```java
public java.lang.String getKeyFile();
```

- *Type:* java.lang.String

Path to a file containing the private key that the certificate was issued for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#key_file VaultProvider#key_file}

---

### VaultProviderConfig <a name="VaultProviderConfig" id="@cdktf/provider-vault.provider.VaultProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.provider.VaultProviderConfig;

VaultProviderConfig.builder()
//  .addAddressToEnv(java.lang.String)
//  .address(java.lang.String)
//  .alias(java.lang.String)
//  .authLogin(IResolvable|java.util.List<VaultProviderAuthLogin>)
//  .authLoginAws(IResolvable|java.util.List<VaultProviderAuthLoginAws>)
//  .authLoginAzure(IResolvable|java.util.List<VaultProviderAuthLoginAzure>)
//  .authLoginCert(IResolvable|java.util.List<VaultProviderAuthLoginCert>)
//  .authLoginGcp(IResolvable|java.util.List<VaultProviderAuthLoginGcp>)
//  .authLoginJwt(IResolvable|java.util.List<VaultProviderAuthLoginJwt>)
//  .authLoginKerberos(IResolvable|java.util.List<VaultProviderAuthLoginKerberos>)
//  .authLoginOci(IResolvable|java.util.List<VaultProviderAuthLoginOci>)
//  .authLoginOidc(IResolvable|java.util.List<VaultProviderAuthLoginOidc>)
//  .authLoginRadius(IResolvable|java.util.List<VaultProviderAuthLoginRadius>)
//  .authLoginTokenFile(IResolvable|java.util.List<VaultProviderAuthLoginTokenFile>)
//  .authLoginUserpass(IResolvable|java.util.List<VaultProviderAuthLoginUserpass>)
//  .caCertDir(java.lang.String)
//  .caCertFile(java.lang.String)
//  .clientAuth(IResolvable|java.util.List<VaultProviderClientAuth>)
//  .headers(IResolvable|java.util.List<VaultProviderHeaders>)
//  .maxLeaseTtlSeconds(java.lang.Number)
//  .maxRetries(java.lang.Number)
//  .maxRetriesCcc(java.lang.Number)
//  .namespace(java.lang.String)
//  .setNamespaceFromToken(java.lang.Boolean|IResolvable)
//  .skipChildToken(java.lang.Boolean|IResolvable)
//  .skipGetVaultVersion(java.lang.Boolean|IResolvable)
//  .skipTlsVerify(java.lang.Boolean|IResolvable)
//  .tlsServerName(java.lang.String)
//  .token(java.lang.String)
//  .tokenName(java.lang.String)
//  .vaultVersionOverride(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.addAddressToEnv">addAddressToEnv</a></code> | <code>java.lang.String</code> | If true, adds the value of the `address` argument to the Terraform process environment. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.address">address</a></code> | <code>java.lang.String</code> | URL of the root of the target Vault server. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLogin">authLogin</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin">VaultProviderAuthLogin</a>></code> | auth_login block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginAws">authLoginAws</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws">VaultProviderAuthLoginAws</a>></code> | auth_login_aws block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginAzure">authLoginAzure</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure">VaultProviderAuthLoginAzure</a>></code> | auth_login_azure block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginCert">authLoginCert</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert">VaultProviderAuthLoginCert</a>></code> | auth_login_cert block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginGcp">authLoginGcp</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp">VaultProviderAuthLoginGcp</a>></code> | auth_login_gcp block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginJwt">authLoginJwt</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt">VaultProviderAuthLoginJwt</a>></code> | auth_login_jwt block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginKerberos">authLoginKerberos</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos">VaultProviderAuthLoginKerberos</a>></code> | auth_login_kerberos block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginOci">authLoginOci</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci">VaultProviderAuthLoginOci</a>></code> | auth_login_oci block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginOidc">authLoginOidc</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc">VaultProviderAuthLoginOidc</a>></code> | auth_login_oidc block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginRadius">authLoginRadius</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius">VaultProviderAuthLoginRadius</a>></code> | auth_login_radius block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginTokenFile">authLoginTokenFile</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile">VaultProviderAuthLoginTokenFile</a>></code> | auth_login_token_file block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginUserpass">authLoginUserpass</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass">VaultProviderAuthLoginUserpass</a>></code> | auth_login_userpass block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.caCertDir">caCertDir</a></code> | <code>java.lang.String</code> | Path to directory containing CA certificate files to validate the server's certificate. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.caCertFile">caCertFile</a></code> | <code>java.lang.String</code> | Path to a CA certificate file to validate the server's certificate. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.clientAuth">clientAuth</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a>></code> | client_auth block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.headers">headers</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderHeaders">VaultProviderHeaders</a>></code> | headers block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Maximum TTL for secret leases requested by this provider. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | Maximum number of retries when a 5xx error code is encountered. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.maxRetriesCcc">maxRetriesCcc</a></code> | <code>java.lang.Number</code> | Maximum number of retries for Client Controlled Consistency related operations. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace to use. Available only for Vault Enterprise. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.setNamespaceFromToken">setNamespaceFromToken</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | In the case where the Vault token is for a specific namespace and the provider namespace is not configured, use the token namespace as the root namespace for all resources. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.skipChildToken">skipChildToken</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set this to true to prevent the creation of ephemeral child token used by this provider. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.skipGetVaultVersion">skipGetVaultVersion</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Skip the dynamic fetching of the Vault server version. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.skipTlsVerify">skipTlsVerify</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set this to true only if the target Vault server is an insecure development instance. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.tlsServerName">tlsServerName</a></code> | <code>java.lang.String</code> | Name to use as the SNI host when connecting via TLS. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.token">token</a></code> | <code>java.lang.String</code> | Token to use to authenticate to Vault. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.tokenName">tokenName</a></code> | <code>java.lang.String</code> | Token name to use for creating the Vault child token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.vaultVersionOverride">vaultVersionOverride</a></code> | <code>java.lang.String</code> | Override the Vault server version, which is normally determined dynamically from the target Vault server. |

---

##### `addAddressToEnv`<sup>Optional</sup> <a name="addAddressToEnv" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.addAddressToEnv"></a>

```java
public java.lang.String getAddAddressToEnv();
```

- *Type:* java.lang.String

If true, adds the value of the `address` argument to the Terraform process environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#add_address_to_env VaultProvider#add_address_to_env}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

URL of the root of the target Vault server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#address VaultProvider#address}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#alias VaultProvider#alias}

---

##### `authLogin`<sup>Optional</sup> <a name="authLogin" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLogin"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLogin> getAuthLogin();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin">VaultProviderAuthLogin</a>>

auth_login block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#auth_login VaultProvider#auth_login}

---

##### `authLoginAws`<sup>Optional</sup> <a name="authLoginAws" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginAws"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginAws> getAuthLoginAws();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws">VaultProviderAuthLoginAws</a>>

auth_login_aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#auth_login_aws VaultProvider#auth_login_aws}

---

##### `authLoginAzure`<sup>Optional</sup> <a name="authLoginAzure" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginAzure"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginAzure> getAuthLoginAzure();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure">VaultProviderAuthLoginAzure</a>>

auth_login_azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#auth_login_azure VaultProvider#auth_login_azure}

---

##### `authLoginCert`<sup>Optional</sup> <a name="authLoginCert" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginCert"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginCert> getAuthLoginCert();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert">VaultProviderAuthLoginCert</a>>

auth_login_cert block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#auth_login_cert VaultProvider#auth_login_cert}

---

##### `authLoginGcp`<sup>Optional</sup> <a name="authLoginGcp" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginGcp"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginGcp> getAuthLoginGcp();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp">VaultProviderAuthLoginGcp</a>>

auth_login_gcp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#auth_login_gcp VaultProvider#auth_login_gcp}

---

##### `authLoginJwt`<sup>Optional</sup> <a name="authLoginJwt" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginJwt"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginJwt> getAuthLoginJwt();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt">VaultProviderAuthLoginJwt</a>>

auth_login_jwt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#auth_login_jwt VaultProvider#auth_login_jwt}

---

##### `authLoginKerberos`<sup>Optional</sup> <a name="authLoginKerberos" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginKerberos"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginKerberos> getAuthLoginKerberos();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos">VaultProviderAuthLoginKerberos</a>>

auth_login_kerberos block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#auth_login_kerberos VaultProvider#auth_login_kerberos}

---

##### `authLoginOci`<sup>Optional</sup> <a name="authLoginOci" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginOci"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginOci> getAuthLoginOci();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci">VaultProviderAuthLoginOci</a>>

auth_login_oci block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#auth_login_oci VaultProvider#auth_login_oci}

---

##### `authLoginOidc`<sup>Optional</sup> <a name="authLoginOidc" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginOidc"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginOidc> getAuthLoginOidc();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc">VaultProviderAuthLoginOidc</a>>

auth_login_oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#auth_login_oidc VaultProvider#auth_login_oidc}

---

##### `authLoginRadius`<sup>Optional</sup> <a name="authLoginRadius" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginRadius"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginRadius> getAuthLoginRadius();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius">VaultProviderAuthLoginRadius</a>>

auth_login_radius block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#auth_login_radius VaultProvider#auth_login_radius}

---

##### `authLoginTokenFile`<sup>Optional</sup> <a name="authLoginTokenFile" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginTokenFile"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginTokenFile> getAuthLoginTokenFile();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile">VaultProviderAuthLoginTokenFile</a>>

auth_login_token_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#auth_login_token_file VaultProvider#auth_login_token_file}

---

##### `authLoginUserpass`<sup>Optional</sup> <a name="authLoginUserpass" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginUserpass"></a>

```java
public IResolvable|java.util.List<VaultProviderAuthLoginUserpass> getAuthLoginUserpass();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass">VaultProviderAuthLoginUserpass</a>>

auth_login_userpass block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#auth_login_userpass VaultProvider#auth_login_userpass}

---

##### `caCertDir`<sup>Optional</sup> <a name="caCertDir" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.caCertDir"></a>

```java
public java.lang.String getCaCertDir();
```

- *Type:* java.lang.String

Path to directory containing CA certificate files to validate the server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#ca_cert_dir VaultProvider#ca_cert_dir}

---

##### `caCertFile`<sup>Optional</sup> <a name="caCertFile" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.caCertFile"></a>

```java
public java.lang.String getCaCertFile();
```

- *Type:* java.lang.String

Path to a CA certificate file to validate the server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#ca_cert_file VaultProvider#ca_cert_file}

---

##### `clientAuth`<sup>Optional</sup> <a name="clientAuth" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.clientAuth"></a>

```java
public IResolvable|java.util.List<VaultProviderClientAuth> getClientAuth();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a>>

client_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#client_auth VaultProvider#client_auth}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.headers"></a>

```java
public IResolvable|java.util.List<VaultProviderHeaders> getHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.provider.VaultProviderHeaders">VaultProviderHeaders</a>>

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#headers VaultProvider#headers}

---

##### `maxLeaseTtlSeconds`<sup>Optional</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.maxLeaseTtlSeconds"></a>

```java
public java.lang.Number getMaxLeaseTtlSeconds();
```

- *Type:* java.lang.Number

Maximum TTL for secret leases requested by this provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#max_lease_ttl_seconds VaultProvider#max_lease_ttl_seconds}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

Maximum number of retries when a 5xx error code is encountered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#max_retries VaultProvider#max_retries}

---

##### `maxRetriesCcc`<sup>Optional</sup> <a name="maxRetriesCcc" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.maxRetriesCcc"></a>

```java
public java.lang.Number getMaxRetriesCcc();
```

- *Type:* java.lang.Number

Maximum number of retries for Client Controlled Consistency related operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#max_retries_ccc VaultProvider#max_retries_ccc}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The namespace to use. Available only for Vault Enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#namespace VaultProvider#namespace}

---

##### `setNamespaceFromToken`<sup>Optional</sup> <a name="setNamespaceFromToken" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.setNamespaceFromToken"></a>

```java
public java.lang.Boolean|IResolvable getSetNamespaceFromToken();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

In the case where the Vault token is for a specific namespace and the provider namespace is not configured, use the token namespace as the root namespace for all resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#set_namespace_from_token VaultProvider#set_namespace_from_token}

---

##### `skipChildToken`<sup>Optional</sup> <a name="skipChildToken" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.skipChildToken"></a>

```java
public java.lang.Boolean|IResolvable getSkipChildToken();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set this to true to prevent the creation of ephemeral child token used by this provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#skip_child_token VaultProvider#skip_child_token}

---

##### `skipGetVaultVersion`<sup>Optional</sup> <a name="skipGetVaultVersion" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.skipGetVaultVersion"></a>

```java
public java.lang.Boolean|IResolvable getSkipGetVaultVersion();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Skip the dynamic fetching of the Vault server version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#skip_get_vault_version VaultProvider#skip_get_vault_version}

---

##### `skipTlsVerify`<sup>Optional</sup> <a name="skipTlsVerify" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.skipTlsVerify"></a>

```java
public java.lang.Boolean|IResolvable getSkipTlsVerify();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set this to true only if the target Vault server is an insecure development instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#skip_tls_verify VaultProvider#skip_tls_verify}

---

##### `tlsServerName`<sup>Optional</sup> <a name="tlsServerName" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.tlsServerName"></a>

```java
public java.lang.String getTlsServerName();
```

- *Type:* java.lang.String

Name to use as the SNI host when connecting via TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#tls_server_name VaultProvider#tls_server_name}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Token to use to authenticate to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#token VaultProvider#token}

---

##### `tokenName`<sup>Optional</sup> <a name="tokenName" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.tokenName"></a>

```java
public java.lang.String getTokenName();
```

- *Type:* java.lang.String

Token name to use for creating the Vault child token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#token_name VaultProvider#token_name}

---

##### `vaultVersionOverride`<sup>Optional</sup> <a name="vaultVersionOverride" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.vaultVersionOverride"></a>

```java
public java.lang.String getVaultVersionOverride();
```

- *Type:* java.lang.String

Override the Vault server version, which is normally determined dynamically from the target Vault server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#vault_version_override VaultProvider#vault_version_override}

---

### VaultProviderHeaders <a name="VaultProviderHeaders" id="@cdktf/provider-vault.provider.VaultProviderHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.provider.VaultProviderHeaders;

VaultProviderHeaders.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderHeaders.property.name">name</a></code> | <code>java.lang.String</code> | The header name. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderHeaders.property.value">value</a></code> | <code>java.lang.String</code> | The header value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.provider.VaultProviderHeaders.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#name VaultProvider#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.provider.VaultProviderHeaders.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs#value VaultProvider#value}

---



