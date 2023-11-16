# `provider`

Refer to the Terraform Registory for docs: [`vault`](https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-vault.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultProvider <a name="VaultProvider" id="@cdktf/provider-vault.provider.VaultProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.provider.VaultProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import provider

provider.VaultProvider(
  scope: Construct,
  id: str,
  address: str,
  add_address_to_env: str = None,
  alias: str = None,
  auth_login: VaultProviderAuthLogin = None,
  auth_login_aws: VaultProviderAuthLoginAws = None,
  auth_login_azure: VaultProviderAuthLoginAzure = None,
  auth_login_cert: VaultProviderAuthLoginCert = None,
  auth_login_gcp: VaultProviderAuthLoginGcp = None,
  auth_login_jwt: VaultProviderAuthLoginJwt = None,
  auth_login_kerberos: VaultProviderAuthLoginKerberos = None,
  auth_login_oci: VaultProviderAuthLoginOci = None,
  auth_login_oidc: VaultProviderAuthLoginOidc = None,
  auth_login_radius: VaultProviderAuthLoginRadius = None,
  auth_login_token_file: VaultProviderAuthLoginTokenFile = None,
  auth_login_userpass: VaultProviderAuthLoginUserpass = None,
  ca_cert_dir: str = None,
  ca_cert_file: str = None,
  client_auth: VaultProviderClientAuth = None,
  headers: typing.Union[IResolvable, typing.List[VaultProviderHeaders]] = None,
  max_lease_ttl_seconds: typing.Union[int, float] = None,
  max_retries: typing.Union[int, float] = None,
  max_retries_ccc: typing.Union[int, float] = None,
  namespace: str = None,
  set_namespace_from_token: typing.Union[bool, IResolvable] = None,
  skip_child_token: typing.Union[bool, IResolvable] = None,
  skip_get_vault_version: typing.Union[bool, IResolvable] = None,
  skip_tls_verify: typing.Union[bool, IResolvable] = None,
  tls_server_name: str = None,
  token: str = None,
  token_name: str = None,
  vault_version_override: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.address">address</a></code> | <code>str</code> | URL of the root of the target Vault server. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.addAddressToEnv">add_address_to_env</a></code> | <code>str</code> | If true, adds the value of the `address` argument to the Terraform process environment. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLogin">auth_login</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin">VaultProviderAuthLogin</a></code> | auth_login block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginAws">auth_login_aws</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws">VaultProviderAuthLoginAws</a></code> | auth_login_aws block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginAzure">auth_login_azure</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure">VaultProviderAuthLoginAzure</a></code> | auth_login_azure block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginCert">auth_login_cert</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert">VaultProviderAuthLoginCert</a></code> | auth_login_cert block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginGcp">auth_login_gcp</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp">VaultProviderAuthLoginGcp</a></code> | auth_login_gcp block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginJwt">auth_login_jwt</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt">VaultProviderAuthLoginJwt</a></code> | auth_login_jwt block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginKerberos">auth_login_kerberos</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos">VaultProviderAuthLoginKerberos</a></code> | auth_login_kerberos block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginOci">auth_login_oci</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci">VaultProviderAuthLoginOci</a></code> | auth_login_oci block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginOidc">auth_login_oidc</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc">VaultProviderAuthLoginOidc</a></code> | auth_login_oidc block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginRadius">auth_login_radius</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius">VaultProviderAuthLoginRadius</a></code> | auth_login_radius block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginTokenFile">auth_login_token_file</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile">VaultProviderAuthLoginTokenFile</a></code> | auth_login_token_file block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginUserpass">auth_login_userpass</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass">VaultProviderAuthLoginUserpass</a></code> | auth_login_userpass block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.caCertDir">ca_cert_dir</a></code> | <code>str</code> | Path to directory containing CA certificate files to validate the server's certificate. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.caCertFile">ca_cert_file</a></code> | <code>str</code> | Path to a CA certificate file to validate the server's certificate. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.clientAuth">client_auth</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a></code> | client_auth block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.headers">headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.provider.VaultProviderHeaders">VaultProviderHeaders</a>]]</code> | headers block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Maximum TTL for secret leases requested by this provider. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | Maximum number of retries when a 5xx error code is encountered. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.maxRetriesCcc">max_retries_ccc</a></code> | <code>typing.Union[int, float]</code> | Maximum number of retries for Client Controlled Consistency related operations. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | The namespace to use. Available only for Vault Enterprise. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.setNamespaceFromToken">set_namespace_from_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | In the case where the Vault token is for a specific namespace and the provider namespace is not configured, use the token namespace as the root namespace for all resources. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.skipChildToken">skip_child_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set this to true to prevent the creation of ephemeral child token used by this provider. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.skipGetVaultVersion">skip_get_vault_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Skip the dynamic fetching of the Vault server version. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.skipTlsVerify">skip_tls_verify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set this to true only if the target Vault server is an insecure development instance. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.tlsServerName">tls_server_name</a></code> | <code>str</code> | Name to use as the SNI host when connecting via TLS. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.token">token</a></code> | <code>str</code> | Token to use to authenticate to Vault. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.tokenName">token_name</a></code> | <code>str</code> | Token name to use for creating the Vault child token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.vaultVersionOverride">vault_version_override</a></code> | <code>str</code> | Override the Vault server version, which is normally determined dynamically from the target Vault server. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.address"></a>

- *Type:* str

URL of the root of the target Vault server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#address VaultProvider#address}

---

##### `add_address_to_env`<sup>Optional</sup> <a name="add_address_to_env" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.addAddressToEnv"></a>

- *Type:* str

If true, adds the value of the `address` argument to the Terraform process environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#add_address_to_env VaultProvider#add_address_to_env}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#alias VaultProvider#alias}

---

##### `auth_login`<sup>Optional</sup> <a name="auth_login" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLogin"></a>

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin">VaultProviderAuthLogin</a>

auth_login block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#auth_login VaultProvider#auth_login}

---

##### `auth_login_aws`<sup>Optional</sup> <a name="auth_login_aws" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginAws"></a>

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws">VaultProviderAuthLoginAws</a>

auth_login_aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#auth_login_aws VaultProvider#auth_login_aws}

---

##### `auth_login_azure`<sup>Optional</sup> <a name="auth_login_azure" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginAzure"></a>

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure">VaultProviderAuthLoginAzure</a>

auth_login_azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#auth_login_azure VaultProvider#auth_login_azure}

---

##### `auth_login_cert`<sup>Optional</sup> <a name="auth_login_cert" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginCert"></a>

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert">VaultProviderAuthLoginCert</a>

auth_login_cert block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#auth_login_cert VaultProvider#auth_login_cert}

---

##### `auth_login_gcp`<sup>Optional</sup> <a name="auth_login_gcp" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginGcp"></a>

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp">VaultProviderAuthLoginGcp</a>

auth_login_gcp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#auth_login_gcp VaultProvider#auth_login_gcp}

---

##### `auth_login_jwt`<sup>Optional</sup> <a name="auth_login_jwt" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginJwt"></a>

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt">VaultProviderAuthLoginJwt</a>

auth_login_jwt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#auth_login_jwt VaultProvider#auth_login_jwt}

---

##### `auth_login_kerberos`<sup>Optional</sup> <a name="auth_login_kerberos" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginKerberos"></a>

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos">VaultProviderAuthLoginKerberos</a>

auth_login_kerberos block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#auth_login_kerberos VaultProvider#auth_login_kerberos}

---

##### `auth_login_oci`<sup>Optional</sup> <a name="auth_login_oci" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginOci"></a>

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci">VaultProviderAuthLoginOci</a>

auth_login_oci block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#auth_login_oci VaultProvider#auth_login_oci}

---

##### `auth_login_oidc`<sup>Optional</sup> <a name="auth_login_oidc" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginOidc"></a>

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc">VaultProviderAuthLoginOidc</a>

auth_login_oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#auth_login_oidc VaultProvider#auth_login_oidc}

---

##### `auth_login_radius`<sup>Optional</sup> <a name="auth_login_radius" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginRadius"></a>

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius">VaultProviderAuthLoginRadius</a>

auth_login_radius block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#auth_login_radius VaultProvider#auth_login_radius}

---

##### `auth_login_token_file`<sup>Optional</sup> <a name="auth_login_token_file" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginTokenFile"></a>

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile">VaultProviderAuthLoginTokenFile</a>

auth_login_token_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#auth_login_token_file VaultProvider#auth_login_token_file}

---

##### `auth_login_userpass`<sup>Optional</sup> <a name="auth_login_userpass" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.authLoginUserpass"></a>

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass">VaultProviderAuthLoginUserpass</a>

auth_login_userpass block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#auth_login_userpass VaultProvider#auth_login_userpass}

---

##### `ca_cert_dir`<sup>Optional</sup> <a name="ca_cert_dir" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.caCertDir"></a>

- *Type:* str

Path to directory containing CA certificate files to validate the server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#ca_cert_dir VaultProvider#ca_cert_dir}

---

##### `ca_cert_file`<sup>Optional</sup> <a name="ca_cert_file" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.caCertFile"></a>

- *Type:* str

Path to a CA certificate file to validate the server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#ca_cert_file VaultProvider#ca_cert_file}

---

##### `client_auth`<sup>Optional</sup> <a name="client_auth" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.clientAuth"></a>

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a>

client_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#client_auth VaultProvider#client_auth}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.headers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.provider.VaultProviderHeaders">VaultProviderHeaders</a>]]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#headers VaultProvider#headers}

---

##### `max_lease_ttl_seconds`<sup>Optional</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.maxLeaseTtlSeconds"></a>

- *Type:* typing.Union[int, float]

Maximum TTL for secret leases requested by this provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#max_lease_ttl_seconds VaultProvider#max_lease_ttl_seconds}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.maxRetries"></a>

- *Type:* typing.Union[int, float]

Maximum number of retries when a 5xx error code is encountered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#max_retries VaultProvider#max_retries}

---

##### `max_retries_ccc`<sup>Optional</sup> <a name="max_retries_ccc" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.maxRetriesCcc"></a>

- *Type:* typing.Union[int, float]

Maximum number of retries for Client Controlled Consistency related operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#max_retries_ccc VaultProvider#max_retries_ccc}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.namespace"></a>

- *Type:* str

The namespace to use. Available only for Vault Enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#namespace VaultProvider#namespace}

---

##### `set_namespace_from_token`<sup>Optional</sup> <a name="set_namespace_from_token" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.setNamespaceFromToken"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

In the case where the Vault token is for a specific namespace and the provider namespace is not configured, use the token namespace as the root namespace for all resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#set_namespace_from_token VaultProvider#set_namespace_from_token}

---

##### `skip_child_token`<sup>Optional</sup> <a name="skip_child_token" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.skipChildToken"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set this to true to prevent the creation of ephemeral child token used by this provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#skip_child_token VaultProvider#skip_child_token}

---

##### `skip_get_vault_version`<sup>Optional</sup> <a name="skip_get_vault_version" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.skipGetVaultVersion"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Skip the dynamic fetching of the Vault server version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#skip_get_vault_version VaultProvider#skip_get_vault_version}

---

##### `skip_tls_verify`<sup>Optional</sup> <a name="skip_tls_verify" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.skipTlsVerify"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set this to true only if the target Vault server is an insecure development instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#skip_tls_verify VaultProvider#skip_tls_verify}

---

##### `tls_server_name`<sup>Optional</sup> <a name="tls_server_name" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.tlsServerName"></a>

- *Type:* str

Name to use as the SNI host when connecting via TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#tls_server_name VaultProvider#tls_server_name}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.token"></a>

- *Type:* str

Token to use to authenticate to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#token VaultProvider#token}

---

##### `token_name`<sup>Optional</sup> <a name="token_name" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.tokenName"></a>

- *Type:* str

Token name to use for creating the Vault child token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#token_name VaultProvider#token_name}

---

##### `vault_version_override`<sup>Optional</sup> <a name="vault_version_override" id="@cdktf/provider-vault.provider.VaultProvider.Initializer.parameter.vaultVersionOverride"></a>

- *Type:* str

Override the Vault server version, which is normally determined dynamically from the target Vault server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#vault_version_override VaultProvider#vault_version_override}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAddAddressToEnv">reset_add_address_to_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLogin">reset_auth_login</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginAws">reset_auth_login_aws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginAzure">reset_auth_login_azure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginCert">reset_auth_login_cert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginGcp">reset_auth_login_gcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginJwt">reset_auth_login_jwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginKerberos">reset_auth_login_kerberos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginOci">reset_auth_login_oci</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginOidc">reset_auth_login_oidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginRadius">reset_auth_login_radius</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginTokenFile">reset_auth_login_token_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginUserpass">reset_auth_login_userpass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetCaCertDir">reset_ca_cert_dir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetCaCertFile">reset_ca_cert_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetClientAuth">reset_client_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetMaxLeaseTtlSeconds">reset_max_lease_ttl_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetMaxRetries">reset_max_retries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetMaxRetriesCcc">reset_max_retries_ccc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetSetNamespaceFromToken">reset_set_namespace_from_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetSkipChildToken">reset_skip_child_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetSkipGetVaultVersion">reset_skip_get_vault_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetSkipTlsVerify">reset_skip_tls_verify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetTlsServerName">reset_tls_server_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetToken">reset_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetTokenName">reset_token_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.resetVaultVersionOverride">reset_vault_version_override</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.provider.VaultProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.provider.VaultProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.provider.VaultProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.provider.VaultProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.provider.VaultProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.provider.VaultProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.provider.VaultProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.provider.VaultProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.provider.VaultProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_add_address_to_env` <a name="reset_add_address_to_env" id="@cdktf/provider-vault.provider.VaultProvider.resetAddAddressToEnv"></a>

```python
def reset_add_address_to_env() -> None
```

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-vault.provider.VaultProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_auth_login` <a name="reset_auth_login" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLogin"></a>

```python
def reset_auth_login() -> None
```

##### `reset_auth_login_aws` <a name="reset_auth_login_aws" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginAws"></a>

```python
def reset_auth_login_aws() -> None
```

##### `reset_auth_login_azure` <a name="reset_auth_login_azure" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginAzure"></a>

```python
def reset_auth_login_azure() -> None
```

##### `reset_auth_login_cert` <a name="reset_auth_login_cert" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginCert"></a>

```python
def reset_auth_login_cert() -> None
```

##### `reset_auth_login_gcp` <a name="reset_auth_login_gcp" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginGcp"></a>

```python
def reset_auth_login_gcp() -> None
```

##### `reset_auth_login_jwt` <a name="reset_auth_login_jwt" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginJwt"></a>

```python
def reset_auth_login_jwt() -> None
```

##### `reset_auth_login_kerberos` <a name="reset_auth_login_kerberos" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginKerberos"></a>

```python
def reset_auth_login_kerberos() -> None
```

##### `reset_auth_login_oci` <a name="reset_auth_login_oci" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginOci"></a>

```python
def reset_auth_login_oci() -> None
```

##### `reset_auth_login_oidc` <a name="reset_auth_login_oidc" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginOidc"></a>

```python
def reset_auth_login_oidc() -> None
```

##### `reset_auth_login_radius` <a name="reset_auth_login_radius" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginRadius"></a>

```python
def reset_auth_login_radius() -> None
```

##### `reset_auth_login_token_file` <a name="reset_auth_login_token_file" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginTokenFile"></a>

```python
def reset_auth_login_token_file() -> None
```

##### `reset_auth_login_userpass` <a name="reset_auth_login_userpass" id="@cdktf/provider-vault.provider.VaultProvider.resetAuthLoginUserpass"></a>

```python
def reset_auth_login_userpass() -> None
```

##### `reset_ca_cert_dir` <a name="reset_ca_cert_dir" id="@cdktf/provider-vault.provider.VaultProvider.resetCaCertDir"></a>

```python
def reset_ca_cert_dir() -> None
```

##### `reset_ca_cert_file` <a name="reset_ca_cert_file" id="@cdktf/provider-vault.provider.VaultProvider.resetCaCertFile"></a>

```python
def reset_ca_cert_file() -> None
```

##### `reset_client_auth` <a name="reset_client_auth" id="@cdktf/provider-vault.provider.VaultProvider.resetClientAuth"></a>

```python
def reset_client_auth() -> None
```

##### `reset_headers` <a name="reset_headers" id="@cdktf/provider-vault.provider.VaultProvider.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_max_lease_ttl_seconds` <a name="reset_max_lease_ttl_seconds" id="@cdktf/provider-vault.provider.VaultProvider.resetMaxLeaseTtlSeconds"></a>

```python
def reset_max_lease_ttl_seconds() -> None
```

##### `reset_max_retries` <a name="reset_max_retries" id="@cdktf/provider-vault.provider.VaultProvider.resetMaxRetries"></a>

```python
def reset_max_retries() -> None
```

##### `reset_max_retries_ccc` <a name="reset_max_retries_ccc" id="@cdktf/provider-vault.provider.VaultProvider.resetMaxRetriesCcc"></a>

```python
def reset_max_retries_ccc() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.provider.VaultProvider.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_set_namespace_from_token` <a name="reset_set_namespace_from_token" id="@cdktf/provider-vault.provider.VaultProvider.resetSetNamespaceFromToken"></a>

```python
def reset_set_namespace_from_token() -> None
```

##### `reset_skip_child_token` <a name="reset_skip_child_token" id="@cdktf/provider-vault.provider.VaultProvider.resetSkipChildToken"></a>

```python
def reset_skip_child_token() -> None
```

##### `reset_skip_get_vault_version` <a name="reset_skip_get_vault_version" id="@cdktf/provider-vault.provider.VaultProvider.resetSkipGetVaultVersion"></a>

```python
def reset_skip_get_vault_version() -> None
```

##### `reset_skip_tls_verify` <a name="reset_skip_tls_verify" id="@cdktf/provider-vault.provider.VaultProvider.resetSkipTlsVerify"></a>

```python
def reset_skip_tls_verify() -> None
```

##### `reset_tls_server_name` <a name="reset_tls_server_name" id="@cdktf/provider-vault.provider.VaultProvider.resetTlsServerName"></a>

```python
def reset_tls_server_name() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-vault.provider.VaultProvider.resetToken"></a>

```python
def reset_token() -> None
```

##### `reset_token_name` <a name="reset_token_name" id="@cdktf/provider-vault.provider.VaultProvider.resetTokenName"></a>

```python
def reset_token_name() -> None
```

##### `reset_vault_version_override` <a name="reset_vault_version_override" id="@cdktf/provider-vault.provider.VaultProvider.resetVaultVersionOverride"></a>

```python
def reset_vault_version_override() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VaultProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.provider.VaultProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import provider

provider.VaultProvider.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.provider.VaultProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import provider

provider.VaultProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.provider.VaultProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-vault.provider.VaultProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_vault import provider

provider.VaultProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.provider.VaultProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.provider.VaultProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import provider

provider.VaultProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VaultProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.provider.VaultProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.provider.VaultProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VaultProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.provider.VaultProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VaultProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.provider.VaultProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VaultProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.addAddressToEnvInput">add_address_to_env_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginAwsInput">auth_login_aws_input</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws">VaultProviderAuthLoginAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginAzureInput">auth_login_azure_input</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure">VaultProviderAuthLoginAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginCertInput">auth_login_cert_input</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert">VaultProviderAuthLoginCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginGcpInput">auth_login_gcp_input</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp">VaultProviderAuthLoginGcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginInput">auth_login_input</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin">VaultProviderAuthLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginJwtInput">auth_login_jwt_input</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt">VaultProviderAuthLoginJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginKerberosInput">auth_login_kerberos_input</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos">VaultProviderAuthLoginKerberos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginOciInput">auth_login_oci_input</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci">VaultProviderAuthLoginOci</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginOidcInput">auth_login_oidc_input</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc">VaultProviderAuthLoginOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginRadiusInput">auth_login_radius_input</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius">VaultProviderAuthLoginRadius</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginTokenFileInput">auth_login_token_file_input</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile">VaultProviderAuthLoginTokenFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginUserpassInput">auth_login_userpass_input</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass">VaultProviderAuthLoginUserpass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.caCertDirInput">ca_cert_dir_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.caCertFileInput">ca_cert_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.clientAuthInput">client_auth_input</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.headersInput">headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.provider.VaultProviderHeaders">VaultProviderHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.maxLeaseTtlSecondsInput">max_lease_ttl_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.maxRetriesCccInput">max_retries_ccc_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.maxRetriesInput">max_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.setNamespaceFromTokenInput">set_namespace_from_token_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.skipChildTokenInput">skip_child_token_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.skipGetVaultVersionInput">skip_get_vault_version_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.skipTlsVerifyInput">skip_tls_verify_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.tlsServerNameInput">tls_server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.tokenNameInput">token_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.vaultVersionOverrideInput">vault_version_override_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.addAddressToEnv">add_address_to_env</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLogin">auth_login</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin">VaultProviderAuthLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginAws">auth_login_aws</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws">VaultProviderAuthLoginAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginAzure">auth_login_azure</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure">VaultProviderAuthLoginAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginCert">auth_login_cert</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert">VaultProviderAuthLoginCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginGcp">auth_login_gcp</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp">VaultProviderAuthLoginGcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginJwt">auth_login_jwt</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt">VaultProviderAuthLoginJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginKerberos">auth_login_kerberos</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos">VaultProviderAuthLoginKerberos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginOci">auth_login_oci</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci">VaultProviderAuthLoginOci</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginOidc">auth_login_oidc</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc">VaultProviderAuthLoginOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginRadius">auth_login_radius</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius">VaultProviderAuthLoginRadius</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginTokenFile">auth_login_token_file</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile">VaultProviderAuthLoginTokenFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.authLoginUserpass">auth_login_userpass</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass">VaultProviderAuthLoginUserpass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.caCertDir">ca_cert_dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.caCertFile">ca_cert_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.clientAuth">client_auth</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.headers">headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.provider.VaultProviderHeaders">VaultProviderHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.maxRetriesCcc">max_retries_ccc</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.setNamespaceFromToken">set_namespace_from_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.skipChildToken">skip_child_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.skipGetVaultVersion">skip_get_vault_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.skipTlsVerify">skip_tls_verify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.tlsServerName">tls_server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.tokenName">token_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.vaultVersionOverride">vault_version_override</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.provider.VaultProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.provider.VaultProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.provider.VaultProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.provider.VaultProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-vault.provider.VaultProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.provider.VaultProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.provider.VaultProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-vault.provider.VaultProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-vault.provider.VaultProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `add_address_to_env_input`<sup>Optional</sup> <a name="add_address_to_env_input" id="@cdktf/provider-vault.provider.VaultProvider.property.addAddressToEnvInput"></a>

```python
add_address_to_env_input: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-vault.provider.VaultProvider.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-vault.provider.VaultProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `auth_login_aws_input`<sup>Optional</sup> <a name="auth_login_aws_input" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginAwsInput"></a>

```python
auth_login_aws_input: VaultProviderAuthLoginAws
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws">VaultProviderAuthLoginAws</a>

---

##### `auth_login_azure_input`<sup>Optional</sup> <a name="auth_login_azure_input" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginAzureInput"></a>

```python
auth_login_azure_input: VaultProviderAuthLoginAzure
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure">VaultProviderAuthLoginAzure</a>

---

##### `auth_login_cert_input`<sup>Optional</sup> <a name="auth_login_cert_input" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginCertInput"></a>

```python
auth_login_cert_input: VaultProviderAuthLoginCert
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert">VaultProviderAuthLoginCert</a>

---

##### `auth_login_gcp_input`<sup>Optional</sup> <a name="auth_login_gcp_input" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginGcpInput"></a>

```python
auth_login_gcp_input: VaultProviderAuthLoginGcp
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp">VaultProviderAuthLoginGcp</a>

---

##### `auth_login_input`<sup>Optional</sup> <a name="auth_login_input" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginInput"></a>

```python
auth_login_input: VaultProviderAuthLogin
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin">VaultProviderAuthLogin</a>

---

##### `auth_login_jwt_input`<sup>Optional</sup> <a name="auth_login_jwt_input" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginJwtInput"></a>

```python
auth_login_jwt_input: VaultProviderAuthLoginJwt
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt">VaultProviderAuthLoginJwt</a>

---

##### `auth_login_kerberos_input`<sup>Optional</sup> <a name="auth_login_kerberos_input" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginKerberosInput"></a>

```python
auth_login_kerberos_input: VaultProviderAuthLoginKerberos
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos">VaultProviderAuthLoginKerberos</a>

---

##### `auth_login_oci_input`<sup>Optional</sup> <a name="auth_login_oci_input" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginOciInput"></a>

```python
auth_login_oci_input: VaultProviderAuthLoginOci
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci">VaultProviderAuthLoginOci</a>

---

##### `auth_login_oidc_input`<sup>Optional</sup> <a name="auth_login_oidc_input" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginOidcInput"></a>

```python
auth_login_oidc_input: VaultProviderAuthLoginOidc
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc">VaultProviderAuthLoginOidc</a>

---

##### `auth_login_radius_input`<sup>Optional</sup> <a name="auth_login_radius_input" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginRadiusInput"></a>

```python
auth_login_radius_input: VaultProviderAuthLoginRadius
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius">VaultProviderAuthLoginRadius</a>

---

##### `auth_login_token_file_input`<sup>Optional</sup> <a name="auth_login_token_file_input" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginTokenFileInput"></a>

```python
auth_login_token_file_input: VaultProviderAuthLoginTokenFile
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile">VaultProviderAuthLoginTokenFile</a>

---

##### `auth_login_userpass_input`<sup>Optional</sup> <a name="auth_login_userpass_input" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginUserpassInput"></a>

```python
auth_login_userpass_input: VaultProviderAuthLoginUserpass
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass">VaultProviderAuthLoginUserpass</a>

---

##### `ca_cert_dir_input`<sup>Optional</sup> <a name="ca_cert_dir_input" id="@cdktf/provider-vault.provider.VaultProvider.property.caCertDirInput"></a>

```python
ca_cert_dir_input: str
```

- *Type:* str

---

##### `ca_cert_file_input`<sup>Optional</sup> <a name="ca_cert_file_input" id="@cdktf/provider-vault.provider.VaultProvider.property.caCertFileInput"></a>

```python
ca_cert_file_input: str
```

- *Type:* str

---

##### `client_auth_input`<sup>Optional</sup> <a name="client_auth_input" id="@cdktf/provider-vault.provider.VaultProvider.property.clientAuthInput"></a>

```python
client_auth_input: VaultProviderClientAuth
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a>

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktf/provider-vault.provider.VaultProvider.property.headersInput"></a>

```python
headers_input: typing.Union[IResolvable, typing.List[VaultProviderHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.provider.VaultProviderHeaders">VaultProviderHeaders</a>]]

---

##### `max_lease_ttl_seconds_input`<sup>Optional</sup> <a name="max_lease_ttl_seconds_input" id="@cdktf/provider-vault.provider.VaultProvider.property.maxLeaseTtlSecondsInput"></a>

```python
max_lease_ttl_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retries_ccc_input`<sup>Optional</sup> <a name="max_retries_ccc_input" id="@cdktf/provider-vault.provider.VaultProvider.property.maxRetriesCccInput"></a>

```python
max_retries_ccc_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retries_input`<sup>Optional</sup> <a name="max_retries_input" id="@cdktf/provider-vault.provider.VaultProvider.property.maxRetriesInput"></a>

```python
max_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.provider.VaultProvider.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `set_namespace_from_token_input`<sup>Optional</sup> <a name="set_namespace_from_token_input" id="@cdktf/provider-vault.provider.VaultProvider.property.setNamespaceFromTokenInput"></a>

```python
set_namespace_from_token_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_child_token_input`<sup>Optional</sup> <a name="skip_child_token_input" id="@cdktf/provider-vault.provider.VaultProvider.property.skipChildTokenInput"></a>

```python
skip_child_token_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_get_vault_version_input`<sup>Optional</sup> <a name="skip_get_vault_version_input" id="@cdktf/provider-vault.provider.VaultProvider.property.skipGetVaultVersionInput"></a>

```python
skip_get_vault_version_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_tls_verify_input`<sup>Optional</sup> <a name="skip_tls_verify_input" id="@cdktf/provider-vault.provider.VaultProvider.property.skipTlsVerifyInput"></a>

```python
skip_tls_verify_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_server_name_input`<sup>Optional</sup> <a name="tls_server_name_input" id="@cdktf/provider-vault.provider.VaultProvider.property.tlsServerNameInput"></a>

```python
tls_server_name_input: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-vault.provider.VaultProvider.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `token_name_input`<sup>Optional</sup> <a name="token_name_input" id="@cdktf/provider-vault.provider.VaultProvider.property.tokenNameInput"></a>

```python
token_name_input: str
```

- *Type:* str

---

##### `vault_version_override_input`<sup>Optional</sup> <a name="vault_version_override_input" id="@cdktf/provider-vault.provider.VaultProvider.property.vaultVersionOverrideInput"></a>

```python
vault_version_override_input: str
```

- *Type:* str

---

##### `add_address_to_env`<sup>Optional</sup> <a name="add_address_to_env" id="@cdktf/provider-vault.provider.VaultProvider.property.addAddressToEnv"></a>

```python
add_address_to_env: str
```

- *Type:* str

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-vault.provider.VaultProvider.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `auth_login`<sup>Optional</sup> <a name="auth_login" id="@cdktf/provider-vault.provider.VaultProvider.property.authLogin"></a>

```python
auth_login: VaultProviderAuthLogin
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin">VaultProviderAuthLogin</a>

---

##### `auth_login_aws`<sup>Optional</sup> <a name="auth_login_aws" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginAws"></a>

```python
auth_login_aws: VaultProviderAuthLoginAws
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws">VaultProviderAuthLoginAws</a>

---

##### `auth_login_azure`<sup>Optional</sup> <a name="auth_login_azure" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginAzure"></a>

```python
auth_login_azure: VaultProviderAuthLoginAzure
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure">VaultProviderAuthLoginAzure</a>

---

##### `auth_login_cert`<sup>Optional</sup> <a name="auth_login_cert" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginCert"></a>

```python
auth_login_cert: VaultProviderAuthLoginCert
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert">VaultProviderAuthLoginCert</a>

---

##### `auth_login_gcp`<sup>Optional</sup> <a name="auth_login_gcp" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginGcp"></a>

```python
auth_login_gcp: VaultProviderAuthLoginGcp
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp">VaultProviderAuthLoginGcp</a>

---

##### `auth_login_jwt`<sup>Optional</sup> <a name="auth_login_jwt" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginJwt"></a>

```python
auth_login_jwt: VaultProviderAuthLoginJwt
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt">VaultProviderAuthLoginJwt</a>

---

##### `auth_login_kerberos`<sup>Optional</sup> <a name="auth_login_kerberos" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginKerberos"></a>

```python
auth_login_kerberos: VaultProviderAuthLoginKerberos
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos">VaultProviderAuthLoginKerberos</a>

---

##### `auth_login_oci`<sup>Optional</sup> <a name="auth_login_oci" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginOci"></a>

```python
auth_login_oci: VaultProviderAuthLoginOci
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci">VaultProviderAuthLoginOci</a>

---

##### `auth_login_oidc`<sup>Optional</sup> <a name="auth_login_oidc" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginOidc"></a>

```python
auth_login_oidc: VaultProviderAuthLoginOidc
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc">VaultProviderAuthLoginOidc</a>

---

##### `auth_login_radius`<sup>Optional</sup> <a name="auth_login_radius" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginRadius"></a>

```python
auth_login_radius: VaultProviderAuthLoginRadius
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius">VaultProviderAuthLoginRadius</a>

---

##### `auth_login_token_file`<sup>Optional</sup> <a name="auth_login_token_file" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginTokenFile"></a>

```python
auth_login_token_file: VaultProviderAuthLoginTokenFile
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile">VaultProviderAuthLoginTokenFile</a>

---

##### `auth_login_userpass`<sup>Optional</sup> <a name="auth_login_userpass" id="@cdktf/provider-vault.provider.VaultProvider.property.authLoginUserpass"></a>

```python
auth_login_userpass: VaultProviderAuthLoginUserpass
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass">VaultProviderAuthLoginUserpass</a>

---

##### `ca_cert_dir`<sup>Optional</sup> <a name="ca_cert_dir" id="@cdktf/provider-vault.provider.VaultProvider.property.caCertDir"></a>

```python
ca_cert_dir: str
```

- *Type:* str

---

##### `ca_cert_file`<sup>Optional</sup> <a name="ca_cert_file" id="@cdktf/provider-vault.provider.VaultProvider.property.caCertFile"></a>

```python
ca_cert_file: str
```

- *Type:* str

---

##### `client_auth`<sup>Optional</sup> <a name="client_auth" id="@cdktf/provider-vault.provider.VaultProvider.property.clientAuth"></a>

```python
client_auth: VaultProviderClientAuth
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a>

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-vault.provider.VaultProvider.property.headers"></a>

```python
headers: typing.Union[IResolvable, typing.List[VaultProviderHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.provider.VaultProviderHeaders">VaultProviderHeaders</a>]]

---

##### `max_lease_ttl_seconds`<sup>Optional</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.provider.VaultProvider.property.maxLeaseTtlSeconds"></a>

```python
max_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-vault.provider.VaultProvider.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retries_ccc`<sup>Optional</sup> <a name="max_retries_ccc" id="@cdktf/provider-vault.provider.VaultProvider.property.maxRetriesCcc"></a>

```python
max_retries_ccc: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProvider.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `set_namespace_from_token`<sup>Optional</sup> <a name="set_namespace_from_token" id="@cdktf/provider-vault.provider.VaultProvider.property.setNamespaceFromToken"></a>

```python
set_namespace_from_token: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_child_token`<sup>Optional</sup> <a name="skip_child_token" id="@cdktf/provider-vault.provider.VaultProvider.property.skipChildToken"></a>

```python
skip_child_token: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_get_vault_version`<sup>Optional</sup> <a name="skip_get_vault_version" id="@cdktf/provider-vault.provider.VaultProvider.property.skipGetVaultVersion"></a>

```python
skip_get_vault_version: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_tls_verify`<sup>Optional</sup> <a name="skip_tls_verify" id="@cdktf/provider-vault.provider.VaultProvider.property.skipTlsVerify"></a>

```python
skip_tls_verify: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_server_name`<sup>Optional</sup> <a name="tls_server_name" id="@cdktf/provider-vault.provider.VaultProvider.property.tlsServerName"></a>

```python
tls_server_name: str
```

- *Type:* str

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-vault.provider.VaultProvider.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `token_name`<sup>Optional</sup> <a name="token_name" id="@cdktf/provider-vault.provider.VaultProvider.property.tokenName"></a>

```python
token_name: str
```

- *Type:* str

---

##### `vault_version_override`<sup>Optional</sup> <a name="vault_version_override" id="@cdktf/provider-vault.provider.VaultProvider.property.vaultVersionOverride"></a>

```python
vault_version_override: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.provider.VaultProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VaultProviderAuthLogin <a name="VaultProviderAuthLogin" id="@cdktf/provider-vault.provider.VaultProviderAuthLogin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLogin.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import provider

provider.VaultProviderAuthLogin(
  path: str,
  method: str = None,
  namespace: str = None,
  parameters: typing.Mapping[str] = None,
  use_root_namespace: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#path VaultProvider#path}. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.method">method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#method VaultProvider#method}. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.namespace">namespace</a></code> | <code>str</code> | The authentication engine's namespace. Conflicts with use_root_namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#parameters VaultProvider#parameters}. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.useRootNamespace">use_root_namespace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Authenticate to the root Vault namespace. Conflicts with namespace. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#path VaultProvider#path}.

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.method"></a>

```python
method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#method VaultProvider#method}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The authentication engine's namespace. Conflicts with use_root_namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#namespace VaultProvider#namespace}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#parameters VaultProvider#parameters}.

---

##### `use_root_namespace`<sup>Optional</sup> <a name="use_root_namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLogin.property.useRootNamespace"></a>

```python
use_root_namespace: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Authenticate to the root Vault namespace. Conflicts with namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#use_root_namespace VaultProvider#use_root_namespace}

---

### VaultProviderAuthLoginAws <a name="VaultProviderAuthLoginAws" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import provider

provider.VaultProviderAuthLoginAws(
  role: str,
  aws_access_key_id: str = None,
  aws_iam_endpoint: str = None,
  aws_profile: str = None,
  aws_region: str = None,
  aws_role_arn: str = None,
  aws_role_session_name: str = None,
  aws_secret_access_key: str = None,
  aws_session_token: str = None,
  aws_shared_credentials_file: str = None,
  aws_sts_endpoint: str = None,
  aws_web_identity_token_file: str = None,
  header_value: str = None,
  mount: str = None,
  namespace: str = None,
  use_root_namespace: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.role">role</a></code> | <code>str</code> | The Vault role to use when logging into Vault. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsAccessKeyId">aws_access_key_id</a></code> | <code>str</code> | The AWS access key ID. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsIamEndpoint">aws_iam_endpoint</a></code> | <code>str</code> | The IAM endpoint URL. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsProfile">aws_profile</a></code> | <code>str</code> | The name of the AWS profile. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsRegion">aws_region</a></code> | <code>str</code> | The AWS region. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsRoleArn">aws_role_arn</a></code> | <code>str</code> | The ARN of the AWS Role to assume.Used during STS AssumeRole. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsRoleSessionName">aws_role_session_name</a></code> | <code>str</code> | Specifies the name to attach to the AWS role session. Used during STS AssumeRole. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsSecretAccessKey">aws_secret_access_key</a></code> | <code>str</code> | The AWS secret access key. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsSessionToken">aws_session_token</a></code> | <code>str</code> | The AWS session token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsSharedCredentialsFile">aws_shared_credentials_file</a></code> | <code>str</code> | Path to the AWS shared credentials file. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsStsEndpoint">aws_sts_endpoint</a></code> | <code>str</code> | The STS endpoint URL. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsWebIdentityTokenFile">aws_web_identity_token_file</a></code> | <code>str</code> | Path to the file containing an OAuth 2.0 access token or OpenID Connect ID token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.headerValue">header_value</a></code> | <code>str</code> | The Vault header value to include in the STS signing request. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.mount">mount</a></code> | <code>str</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.namespace">namespace</a></code> | <code>str</code> | The authentication engine's namespace. Conflicts with use_root_namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.useRootNamespace">use_root_namespace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Authenticate to the root Vault namespace. Conflicts with namespace. |

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.role"></a>

```python
role: str
```

- *Type:* str

The Vault role to use when logging into Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#role VaultProvider#role}

---

##### `aws_access_key_id`<sup>Optional</sup> <a name="aws_access_key_id" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsAccessKeyId"></a>

```python
aws_access_key_id: str
```

- *Type:* str

The AWS access key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#aws_access_key_id VaultProvider#aws_access_key_id}

---

##### `aws_iam_endpoint`<sup>Optional</sup> <a name="aws_iam_endpoint" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsIamEndpoint"></a>

```python
aws_iam_endpoint: str
```

- *Type:* str

The IAM endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#aws_iam_endpoint VaultProvider#aws_iam_endpoint}

---

##### `aws_profile`<sup>Optional</sup> <a name="aws_profile" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsProfile"></a>

```python
aws_profile: str
```

- *Type:* str

The name of the AWS profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#aws_profile VaultProvider#aws_profile}

---

##### `aws_region`<sup>Optional</sup> <a name="aws_region" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

The AWS region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#aws_region VaultProvider#aws_region}

---

##### `aws_role_arn`<sup>Optional</sup> <a name="aws_role_arn" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsRoleArn"></a>

```python
aws_role_arn: str
```

- *Type:* str

The ARN of the AWS Role to assume.Used during STS AssumeRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#aws_role_arn VaultProvider#aws_role_arn}

---

##### `aws_role_session_name`<sup>Optional</sup> <a name="aws_role_session_name" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsRoleSessionName"></a>

```python
aws_role_session_name: str
```

- *Type:* str

Specifies the name to attach to the AWS role session. Used during STS AssumeRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#aws_role_session_name VaultProvider#aws_role_session_name}

---

##### `aws_secret_access_key`<sup>Optional</sup> <a name="aws_secret_access_key" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsSecretAccessKey"></a>

```python
aws_secret_access_key: str
```

- *Type:* str

The AWS secret access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#aws_secret_access_key VaultProvider#aws_secret_access_key}

---

##### `aws_session_token`<sup>Optional</sup> <a name="aws_session_token" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsSessionToken"></a>

```python
aws_session_token: str
```

- *Type:* str

The AWS session token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#aws_session_token VaultProvider#aws_session_token}

---

##### `aws_shared_credentials_file`<sup>Optional</sup> <a name="aws_shared_credentials_file" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsSharedCredentialsFile"></a>

```python
aws_shared_credentials_file: str
```

- *Type:* str

Path to the AWS shared credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#aws_shared_credentials_file VaultProvider#aws_shared_credentials_file}

---

##### `aws_sts_endpoint`<sup>Optional</sup> <a name="aws_sts_endpoint" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsStsEndpoint"></a>

```python
aws_sts_endpoint: str
```

- *Type:* str

The STS endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#aws_sts_endpoint VaultProvider#aws_sts_endpoint}

---

##### `aws_web_identity_token_file`<sup>Optional</sup> <a name="aws_web_identity_token_file" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.awsWebIdentityTokenFile"></a>

```python
aws_web_identity_token_file: str
```

- *Type:* str

Path to the file containing an OAuth 2.0 access token or OpenID Connect ID token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#aws_web_identity_token_file VaultProvider#aws_web_identity_token_file}

---

##### `header_value`<sup>Optional</sup> <a name="header_value" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.headerValue"></a>

```python
header_value: str
```

- *Type:* str

The Vault header value to include in the STS signing request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#header_value VaultProvider#header_value}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.mount"></a>

```python
mount: str
```

- *Type:* str

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#mount VaultProvider#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The authentication engine's namespace. Conflicts with use_root_namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#namespace VaultProvider#namespace}

---

##### `use_root_namespace`<sup>Optional</sup> <a name="use_root_namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAws.property.useRootNamespace"></a>

```python
use_root_namespace: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Authenticate to the root Vault namespace. Conflicts with namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#use_root_namespace VaultProvider#use_root_namespace}

---

### VaultProviderAuthLoginAzure <a name="VaultProviderAuthLoginAzure" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import provider

provider.VaultProviderAuthLoginAzure(
  resource_group_name: str,
  role: str,
  subscription_id: str,
  client_id: str = None,
  jwt: str = None,
  mount: str = None,
  namespace: str = None,
  scope: str = None,
  tenant_id: str = None,
  use_root_namespace: typing.Union[bool, IResolvable] = None,
  vm_name: str = None,
  vmss_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | The resource group for the machine that generated the MSI token. This information can be obtained through instance metadata. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.role">role</a></code> | <code>str</code> | Name of the login role. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.subscriptionId">subscription_id</a></code> | <code>str</code> | The subscription ID for the machine that generated the MSI token. This information can be obtained through instance metadata. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.clientId">client_id</a></code> | <code>str</code> | The identity's client ID. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.jwt">jwt</a></code> | <code>str</code> | A signed JSON Web Token. If not specified on will be created automatically. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.mount">mount</a></code> | <code>str</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.namespace">namespace</a></code> | <code>str</code> | The authentication engine's namespace. Conflicts with use_root_namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.scope">scope</a></code> | <code>str</code> | The scopes to include in the token request. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.tenantId">tenant_id</a></code> | <code>str</code> | Provides the tenant ID to use in a multi-tenant authentication scenario. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.useRootNamespace">use_root_namespace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Authenticate to the root Vault namespace. Conflicts with namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.vmName">vm_name</a></code> | <code>str</code> | The virtual machine name for the machine that generated the MSI token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.vmssName">vmss_name</a></code> | <code>str</code> | The virtual machine scale set name for the machine that generated the MSI token. |

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

The resource group for the machine that generated the MSI token. This information can be obtained through instance metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#resource_group_name VaultProvider#resource_group_name}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.role"></a>

```python
role: str
```

- *Type:* str

Name of the login role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#role VaultProvider#role}

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

The subscription ID for the machine that generated the MSI token. This information can be obtained through instance metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#subscription_id VaultProvider#subscription_id}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The identity's client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#client_id VaultProvider#client_id}

---

##### `jwt`<sup>Optional</sup> <a name="jwt" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.jwt"></a>

```python
jwt: str
```

- *Type:* str

A signed JSON Web Token. If not specified on will be created automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#jwt VaultProvider#jwt}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.mount"></a>

```python
mount: str
```

- *Type:* str

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#mount VaultProvider#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The authentication engine's namespace. Conflicts with use_root_namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#namespace VaultProvider#namespace}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.scope"></a>

```python
scope: str
```

- *Type:* str

The scopes to include in the token request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#scope VaultProvider#scope}

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Provides the tenant ID to use in a multi-tenant authentication scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#tenant_id VaultProvider#tenant_id}

---

##### `use_root_namespace`<sup>Optional</sup> <a name="use_root_namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.useRootNamespace"></a>

```python
use_root_namespace: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Authenticate to the root Vault namespace. Conflicts with namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#use_root_namespace VaultProvider#use_root_namespace}

---

##### `vm_name`<sup>Optional</sup> <a name="vm_name" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.vmName"></a>

```python
vm_name: str
```

- *Type:* str

The virtual machine name for the machine that generated the MSI token.

This information can be obtained through instance metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#vm_name VaultProvider#vm_name}

---

##### `vmss_name`<sup>Optional</sup> <a name="vmss_name" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure.property.vmssName"></a>

```python
vmss_name: str
```

- *Type:* str

The virtual machine scale set name for the machine that generated the MSI token.

This information can be obtained through instance metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#vmss_name VaultProvider#vmss_name}

---

### VaultProviderAuthLoginCert <a name="VaultProviderAuthLoginCert" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import provider

provider.VaultProviderAuthLoginCert(
  cert_file: str,
  key_file: str,
  mount: str = None,
  name: str = None,
  namespace: str = None,
  use_root_namespace: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.certFile">cert_file</a></code> | <code>str</code> | Path to a file containing the client certificate. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.keyFile">key_file</a></code> | <code>str</code> | Path to a file containing the private key that the certificate was issued for. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.mount">mount</a></code> | <code>str</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.name">name</a></code> | <code>str</code> | Name of the certificate's role. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.namespace">namespace</a></code> | <code>str</code> | The authentication engine's namespace. Conflicts with use_root_namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.useRootNamespace">use_root_namespace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Authenticate to the root Vault namespace. Conflicts with namespace. |

---

##### `cert_file`<sup>Required</sup> <a name="cert_file" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.certFile"></a>

```python
cert_file: str
```

- *Type:* str

Path to a file containing the client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#cert_file VaultProvider#cert_file}

---

##### `key_file`<sup>Required</sup> <a name="key_file" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.keyFile"></a>

```python
key_file: str
```

- *Type:* str

Path to a file containing the private key that the certificate was issued for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#key_file VaultProvider#key_file}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.mount"></a>

```python
mount: str
```

- *Type:* str

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#mount VaultProvider#mount}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the certificate's role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#name VaultProvider#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The authentication engine's namespace. Conflicts with use_root_namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#namespace VaultProvider#namespace}

---

##### `use_root_namespace`<sup>Optional</sup> <a name="use_root_namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginCert.property.useRootNamespace"></a>

```python
use_root_namespace: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Authenticate to the root Vault namespace. Conflicts with namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#use_root_namespace VaultProvider#use_root_namespace}

---

### VaultProviderAuthLoginGcp <a name="VaultProviderAuthLoginGcp" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import provider

provider.VaultProviderAuthLoginGcp(
  role: str,
  credentials: str = None,
  jwt: str = None,
  mount: str = None,
  namespace: str = None,
  service_account: str = None,
  use_root_namespace: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.role">role</a></code> | <code>str</code> | Name of the login role. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.credentials">credentials</a></code> | <code>str</code> | Path to the Google Cloud credentials file. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.jwt">jwt</a></code> | <code>str</code> | A signed JSON Web Token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.mount">mount</a></code> | <code>str</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.namespace">namespace</a></code> | <code>str</code> | The authentication engine's namespace. Conflicts with use_root_namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.serviceAccount">service_account</a></code> | <code>str</code> | IAM service account. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.useRootNamespace">use_root_namespace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Authenticate to the root Vault namespace. Conflicts with namespace. |

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.role"></a>

```python
role: str
```

- *Type:* str

Name of the login role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#role VaultProvider#role}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.credentials"></a>

```python
credentials: str
```

- *Type:* str

Path to the Google Cloud credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#credentials VaultProvider#credentials}

---

##### `jwt`<sup>Optional</sup> <a name="jwt" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.jwt"></a>

```python
jwt: str
```

- *Type:* str

A signed JSON Web Token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#jwt VaultProvider#jwt}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.mount"></a>

```python
mount: str
```

- *Type:* str

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#mount VaultProvider#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The authentication engine's namespace. Conflicts with use_root_namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#namespace VaultProvider#namespace}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

IAM service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#service_account VaultProvider#service_account}

---

##### `use_root_namespace`<sup>Optional</sup> <a name="use_root_namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp.property.useRootNamespace"></a>

```python
use_root_namespace: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Authenticate to the root Vault namespace. Conflicts with namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#use_root_namespace VaultProvider#use_root_namespace}

---

### VaultProviderAuthLoginJwt <a name="VaultProviderAuthLoginJwt" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import provider

provider.VaultProviderAuthLoginJwt(
  jwt: str,
  role: str,
  mount: str = None,
  namespace: str = None,
  use_root_namespace: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.jwt">jwt</a></code> | <code>str</code> | A signed JSON Web Token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.role">role</a></code> | <code>str</code> | Name of the login role. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.mount">mount</a></code> | <code>str</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.namespace">namespace</a></code> | <code>str</code> | The authentication engine's namespace. Conflicts with use_root_namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.useRootNamespace">use_root_namespace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Authenticate to the root Vault namespace. Conflicts with namespace. |

---

##### `jwt`<sup>Required</sup> <a name="jwt" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.jwt"></a>

```python
jwt: str
```

- *Type:* str

A signed JSON Web Token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#jwt VaultProvider#jwt}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.role"></a>

```python
role: str
```

- *Type:* str

Name of the login role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#role VaultProvider#role}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.mount"></a>

```python
mount: str
```

- *Type:* str

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#mount VaultProvider#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The authentication engine's namespace. Conflicts with use_root_namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#namespace VaultProvider#namespace}

---

##### `use_root_namespace`<sup>Optional</sup> <a name="use_root_namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt.property.useRootNamespace"></a>

```python
use_root_namespace: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Authenticate to the root Vault namespace. Conflicts with namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#use_root_namespace VaultProvider#use_root_namespace}

---

### VaultProviderAuthLoginKerberos <a name="VaultProviderAuthLoginKerberos" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import provider

provider.VaultProviderAuthLoginKerberos(
  disable_fast_negotiation: typing.Union[bool, IResolvable] = None,
  keytab_path: str = None,
  krb5_conf_path: str = None,
  mount: str = None,
  namespace: str = None,
  realm: str = None,
  remove_instance_name: typing.Union[bool, IResolvable] = None,
  service: str = None,
  token: str = None,
  username: str = None,
  use_root_namespace: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.disableFastNegotiation">disable_fast_negotiation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable the Kerberos FAST negotiation. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.keytabPath">keytab_path</a></code> | <code>str</code> | The Kerberos keytab file containing the entry of the login entity. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.krb5ConfPath">krb5_conf_path</a></code> | <code>str</code> | A valid Kerberos configuration file e.g. /etc/krb5.conf. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.mount">mount</a></code> | <code>str</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.namespace">namespace</a></code> | <code>str</code> | The authentication engine's namespace. Conflicts with use_root_namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.realm">realm</a></code> | <code>str</code> | The Kerberos server's authoritative authentication domain. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.removeInstanceName">remove_instance_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Strip the host from the username found in the keytab. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.service">service</a></code> | <code>str</code> | The service principle name. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.token">token</a></code> | <code>str</code> | Simple and Protected GSSAPI Negotiation Mechanism (SPNEGO) token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.username">username</a></code> | <code>str</code> | The username to login into Kerberos with. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.useRootNamespace">use_root_namespace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Authenticate to the root Vault namespace. Conflicts with namespace. |

---

##### `disable_fast_negotiation`<sup>Optional</sup> <a name="disable_fast_negotiation" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.disableFastNegotiation"></a>

```python
disable_fast_negotiation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable the Kerberos FAST negotiation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#disable_fast_negotiation VaultProvider#disable_fast_negotiation}

---

##### `keytab_path`<sup>Optional</sup> <a name="keytab_path" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.keytabPath"></a>

```python
keytab_path: str
```

- *Type:* str

The Kerberos keytab file containing the entry of the login entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#keytab_path VaultProvider#keytab_path}

---

##### `krb5_conf_path`<sup>Optional</sup> <a name="krb5_conf_path" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.krb5ConfPath"></a>

```python
krb5_conf_path: str
```

- *Type:* str

A valid Kerberos configuration file e.g. /etc/krb5.conf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#krb5conf_path VaultProvider#krb5conf_path}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.mount"></a>

```python
mount: str
```

- *Type:* str

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#mount VaultProvider#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The authentication engine's namespace. Conflicts with use_root_namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#namespace VaultProvider#namespace}

---

##### `realm`<sup>Optional</sup> <a name="realm" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.realm"></a>

```python
realm: str
```

- *Type:* str

The Kerberos server's authoritative authentication domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#realm VaultProvider#realm}

---

##### `remove_instance_name`<sup>Optional</sup> <a name="remove_instance_name" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.removeInstanceName"></a>

```python
remove_instance_name: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Strip the host from the username found in the keytab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#remove_instance_name VaultProvider#remove_instance_name}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.service"></a>

```python
service: str
```

- *Type:* str

The service principle name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#service VaultProvider#service}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.token"></a>

```python
token: str
```

- *Type:* str

Simple and Protected GSSAPI Negotiation Mechanism (SPNEGO) token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#token VaultProvider#token}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.username"></a>

```python
username: str
```

- *Type:* str

The username to login into Kerberos with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#username VaultProvider#username}

---

##### `use_root_namespace`<sup>Optional</sup> <a name="use_root_namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos.property.useRootNamespace"></a>

```python
use_root_namespace: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Authenticate to the root Vault namespace. Conflicts with namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#use_root_namespace VaultProvider#use_root_namespace}

---

### VaultProviderAuthLoginOci <a name="VaultProviderAuthLoginOci" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOci"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import provider

provider.VaultProviderAuthLoginOci(
  auth_type: str,
  role: str,
  mount: str = None,
  namespace: str = None,
  use_root_namespace: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.authType">auth_type</a></code> | <code>str</code> | Authentication type to use when getting OCI credentials. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.role">role</a></code> | <code>str</code> | Name of the login role. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.mount">mount</a></code> | <code>str</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.namespace">namespace</a></code> | <code>str</code> | The authentication engine's namespace. Conflicts with use_root_namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.useRootNamespace">use_root_namespace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Authenticate to the root Vault namespace. Conflicts with namespace. |

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

Authentication type to use when getting OCI credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#auth_type VaultProvider#auth_type}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.role"></a>

```python
role: str
```

- *Type:* str

Name of the login role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#role VaultProvider#role}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.mount"></a>

```python
mount: str
```

- *Type:* str

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#mount VaultProvider#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The authentication engine's namespace. Conflicts with use_root_namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#namespace VaultProvider#namespace}

---

##### `use_root_namespace`<sup>Optional</sup> <a name="use_root_namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOci.property.useRootNamespace"></a>

```python
use_root_namespace: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Authenticate to the root Vault namespace. Conflicts with namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#use_root_namespace VaultProvider#use_root_namespace}

---

### VaultProviderAuthLoginOidc <a name="VaultProviderAuthLoginOidc" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import provider

provider.VaultProviderAuthLoginOidc(
  role: str,
  callback_address: str = None,
  callback_listener_address: str = None,
  mount: str = None,
  namespace: str = None,
  use_root_namespace: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.role">role</a></code> | <code>str</code> | Name of the login role. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.callbackAddress">callback_address</a></code> | <code>str</code> | The callback address. Must be a valid URI without the path. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.callbackListenerAddress">callback_listener_address</a></code> | <code>str</code> | The callback listener's address. Must be a valid URI without the path. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.mount">mount</a></code> | <code>str</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.namespace">namespace</a></code> | <code>str</code> | The authentication engine's namespace. Conflicts with use_root_namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.useRootNamespace">use_root_namespace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Authenticate to the root Vault namespace. Conflicts with namespace. |

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.role"></a>

```python
role: str
```

- *Type:* str

Name of the login role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#role VaultProvider#role}

---

##### `callback_address`<sup>Optional</sup> <a name="callback_address" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.callbackAddress"></a>

```python
callback_address: str
```

- *Type:* str

The callback address. Must be a valid URI without the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#callback_address VaultProvider#callback_address}

---

##### `callback_listener_address`<sup>Optional</sup> <a name="callback_listener_address" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.callbackListenerAddress"></a>

```python
callback_listener_address: str
```

- *Type:* str

The callback listener's address. Must be a valid URI without the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#callback_listener_address VaultProvider#callback_listener_address}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.mount"></a>

```python
mount: str
```

- *Type:* str

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#mount VaultProvider#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The authentication engine's namespace. Conflicts with use_root_namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#namespace VaultProvider#namespace}

---

##### `use_root_namespace`<sup>Optional</sup> <a name="use_root_namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc.property.useRootNamespace"></a>

```python
use_root_namespace: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Authenticate to the root Vault namespace. Conflicts with namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#use_root_namespace VaultProvider#use_root_namespace}

---

### VaultProviderAuthLoginRadius <a name="VaultProviderAuthLoginRadius" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import provider

provider.VaultProviderAuthLoginRadius(
  password: str,
  username: str,
  mount: str = None,
  namespace: str = None,
  use_root_namespace: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.password">password</a></code> | <code>str</code> | The Radius password for username. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.username">username</a></code> | <code>str</code> | The Radius username. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.mount">mount</a></code> | <code>str</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.namespace">namespace</a></code> | <code>str</code> | The authentication engine's namespace. Conflicts with use_root_namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.useRootNamespace">use_root_namespace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Authenticate to the root Vault namespace. Conflicts with namespace. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.password"></a>

```python
password: str
```

- *Type:* str

The Radius password for username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#password VaultProvider#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.username"></a>

```python
username: str
```

- *Type:* str

The Radius username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#username VaultProvider#username}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.mount"></a>

```python
mount: str
```

- *Type:* str

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#mount VaultProvider#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The authentication engine's namespace. Conflicts with use_root_namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#namespace VaultProvider#namespace}

---

##### `use_root_namespace`<sup>Optional</sup> <a name="use_root_namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius.property.useRootNamespace"></a>

```python
use_root_namespace: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Authenticate to the root Vault namespace. Conflicts with namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#use_root_namespace VaultProvider#use_root_namespace}

---

### VaultProviderAuthLoginTokenFile <a name="VaultProviderAuthLoginTokenFile" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import provider

provider.VaultProviderAuthLoginTokenFile(
  filename: str,
  namespace: str = None,
  use_root_namespace: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile.property.filename">filename</a></code> | <code>str</code> | The name of a file containing a single line that is a valid Vault token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile.property.namespace">namespace</a></code> | <code>str</code> | The authentication engine's namespace. Conflicts with use_root_namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile.property.useRootNamespace">use_root_namespace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Authenticate to the root Vault namespace. Conflicts with namespace. |

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile.property.filename"></a>

```python
filename: str
```

- *Type:* str

The name of a file containing a single line that is a valid Vault token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#filename VaultProvider#filename}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The authentication engine's namespace. Conflicts with use_root_namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#namespace VaultProvider#namespace}

---

##### `use_root_namespace`<sup>Optional</sup> <a name="use_root_namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile.property.useRootNamespace"></a>

```python
use_root_namespace: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Authenticate to the root Vault namespace. Conflicts with namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#use_root_namespace VaultProvider#use_root_namespace}

---

### VaultProviderAuthLoginUserpass <a name="VaultProviderAuthLoginUserpass" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import provider

provider.VaultProviderAuthLoginUserpass(
  username: str,
  mount: str = None,
  namespace: str = None,
  password: str = None,
  password_file: str = None,
  use_root_namespace: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.username">username</a></code> | <code>str</code> | Login with username. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.mount">mount</a></code> | <code>str</code> | The path where the authentication engine is mounted. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.namespace">namespace</a></code> | <code>str</code> | The authentication engine's namespace. Conflicts with use_root_namespace. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.password">password</a></code> | <code>str</code> | Login with password. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.passwordFile">password_file</a></code> | <code>str</code> | Login with password from a file. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.useRootNamespace">use_root_namespace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Authenticate to the root Vault namespace. Conflicts with namespace. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.username"></a>

```python
username: str
```

- *Type:* str

Login with username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#username VaultProvider#username}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.mount"></a>

```python
mount: str
```

- *Type:* str

The path where the authentication engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#mount VaultProvider#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The authentication engine's namespace. Conflicts with use_root_namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#namespace VaultProvider#namespace}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.password"></a>

```python
password: str
```

- *Type:* str

Login with password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#password VaultProvider#password}

---

##### `password_file`<sup>Optional</sup> <a name="password_file" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.passwordFile"></a>

```python
password_file: str
```

- *Type:* str

Login with password from a file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#password_file VaultProvider#password_file}

---

##### `use_root_namespace`<sup>Optional</sup> <a name="use_root_namespace" id="@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass.property.useRootNamespace"></a>

```python
use_root_namespace: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Authenticate to the root Vault namespace. Conflicts with namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#use_root_namespace VaultProvider#use_root_namespace}

---

### VaultProviderClientAuth <a name="VaultProviderClientAuth" id="@cdktf/provider-vault.provider.VaultProviderClientAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderClientAuth.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import provider

provider.VaultProviderClientAuth(
  cert_file: str = None,
  key_file: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth.property.certFile">cert_file</a></code> | <code>str</code> | Path to a file containing the client certificate. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth.property.keyFile">key_file</a></code> | <code>str</code> | Path to a file containing the private key that the certificate was issued for. |

---

##### `cert_file`<sup>Optional</sup> <a name="cert_file" id="@cdktf/provider-vault.provider.VaultProviderClientAuth.property.certFile"></a>

```python
cert_file: str
```

- *Type:* str

Path to a file containing the client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#cert_file VaultProvider#cert_file}

---

##### `key_file`<sup>Optional</sup> <a name="key_file" id="@cdktf/provider-vault.provider.VaultProviderClientAuth.property.keyFile"></a>

```python
key_file: str
```

- *Type:* str

Path to a file containing the private key that the certificate was issued for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#key_file VaultProvider#key_file}

---

### VaultProviderConfig <a name="VaultProviderConfig" id="@cdktf/provider-vault.provider.VaultProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import provider

provider.VaultProviderConfig(
  address: str,
  add_address_to_env: str = None,
  alias: str = None,
  auth_login: VaultProviderAuthLogin = None,
  auth_login_aws: VaultProviderAuthLoginAws = None,
  auth_login_azure: VaultProviderAuthLoginAzure = None,
  auth_login_cert: VaultProviderAuthLoginCert = None,
  auth_login_gcp: VaultProviderAuthLoginGcp = None,
  auth_login_jwt: VaultProviderAuthLoginJwt = None,
  auth_login_kerberos: VaultProviderAuthLoginKerberos = None,
  auth_login_oci: VaultProviderAuthLoginOci = None,
  auth_login_oidc: VaultProviderAuthLoginOidc = None,
  auth_login_radius: VaultProviderAuthLoginRadius = None,
  auth_login_token_file: VaultProviderAuthLoginTokenFile = None,
  auth_login_userpass: VaultProviderAuthLoginUserpass = None,
  ca_cert_dir: str = None,
  ca_cert_file: str = None,
  client_auth: VaultProviderClientAuth = None,
  headers: typing.Union[IResolvable, typing.List[VaultProviderHeaders]] = None,
  max_lease_ttl_seconds: typing.Union[int, float] = None,
  max_retries: typing.Union[int, float] = None,
  max_retries_ccc: typing.Union[int, float] = None,
  namespace: str = None,
  set_namespace_from_token: typing.Union[bool, IResolvable] = None,
  skip_child_token: typing.Union[bool, IResolvable] = None,
  skip_get_vault_version: typing.Union[bool, IResolvable] = None,
  skip_tls_verify: typing.Union[bool, IResolvable] = None,
  tls_server_name: str = None,
  token: str = None,
  token_name: str = None,
  vault_version_override: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.address">address</a></code> | <code>str</code> | URL of the root of the target Vault server. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.addAddressToEnv">add_address_to_env</a></code> | <code>str</code> | If true, adds the value of the `address` argument to the Terraform process environment. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLogin">auth_login</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin">VaultProviderAuthLogin</a></code> | auth_login block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginAws">auth_login_aws</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws">VaultProviderAuthLoginAws</a></code> | auth_login_aws block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginAzure">auth_login_azure</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure">VaultProviderAuthLoginAzure</a></code> | auth_login_azure block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginCert">auth_login_cert</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert">VaultProviderAuthLoginCert</a></code> | auth_login_cert block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginGcp">auth_login_gcp</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp">VaultProviderAuthLoginGcp</a></code> | auth_login_gcp block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginJwt">auth_login_jwt</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt">VaultProviderAuthLoginJwt</a></code> | auth_login_jwt block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginKerberos">auth_login_kerberos</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos">VaultProviderAuthLoginKerberos</a></code> | auth_login_kerberos block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginOci">auth_login_oci</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci">VaultProviderAuthLoginOci</a></code> | auth_login_oci block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginOidc">auth_login_oidc</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc">VaultProviderAuthLoginOidc</a></code> | auth_login_oidc block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginRadius">auth_login_radius</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius">VaultProviderAuthLoginRadius</a></code> | auth_login_radius block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginTokenFile">auth_login_token_file</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile">VaultProviderAuthLoginTokenFile</a></code> | auth_login_token_file block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginUserpass">auth_login_userpass</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass">VaultProviderAuthLoginUserpass</a></code> | auth_login_userpass block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.caCertDir">ca_cert_dir</a></code> | <code>str</code> | Path to directory containing CA certificate files to validate the server's certificate. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.caCertFile">ca_cert_file</a></code> | <code>str</code> | Path to a CA certificate file to validate the server's certificate. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.clientAuth">client_auth</a></code> | <code><a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a></code> | client_auth block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.headers">headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.provider.VaultProviderHeaders">VaultProviderHeaders</a>]]</code> | headers block. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Maximum TTL for secret leases requested by this provider. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | Maximum number of retries when a 5xx error code is encountered. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.maxRetriesCcc">max_retries_ccc</a></code> | <code>typing.Union[int, float]</code> | Maximum number of retries for Client Controlled Consistency related operations. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.namespace">namespace</a></code> | <code>str</code> | The namespace to use. Available only for Vault Enterprise. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.setNamespaceFromToken">set_namespace_from_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | In the case where the Vault token is for a specific namespace and the provider namespace is not configured, use the token namespace as the root namespace for all resources. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.skipChildToken">skip_child_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set this to true to prevent the creation of ephemeral child token used by this provider. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.skipGetVaultVersion">skip_get_vault_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Skip the dynamic fetching of the Vault server version. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.skipTlsVerify">skip_tls_verify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set this to true only if the target Vault server is an insecure development instance. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.tlsServerName">tls_server_name</a></code> | <code>str</code> | Name to use as the SNI host when connecting via TLS. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.token">token</a></code> | <code>str</code> | Token to use to authenticate to Vault. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.tokenName">token_name</a></code> | <code>str</code> | Token name to use for creating the Vault child token. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderConfig.property.vaultVersionOverride">vault_version_override</a></code> | <code>str</code> | Override the Vault server version, which is normally determined dynamically from the target Vault server. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.address"></a>

```python
address: str
```

- *Type:* str

URL of the root of the target Vault server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#address VaultProvider#address}

---

##### `add_address_to_env`<sup>Optional</sup> <a name="add_address_to_env" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.addAddressToEnv"></a>

```python
add_address_to_env: str
```

- *Type:* str

If true, adds the value of the `address` argument to the Terraform process environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#add_address_to_env VaultProvider#add_address_to_env}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#alias VaultProvider#alias}

---

##### `auth_login`<sup>Optional</sup> <a name="auth_login" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLogin"></a>

```python
auth_login: VaultProviderAuthLogin
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLogin">VaultProviderAuthLogin</a>

auth_login block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#auth_login VaultProvider#auth_login}

---

##### `auth_login_aws`<sup>Optional</sup> <a name="auth_login_aws" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginAws"></a>

```python
auth_login_aws: VaultProviderAuthLoginAws
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAws">VaultProviderAuthLoginAws</a>

auth_login_aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#auth_login_aws VaultProvider#auth_login_aws}

---

##### `auth_login_azure`<sup>Optional</sup> <a name="auth_login_azure" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginAzure"></a>

```python
auth_login_azure: VaultProviderAuthLoginAzure
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginAzure">VaultProviderAuthLoginAzure</a>

auth_login_azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#auth_login_azure VaultProvider#auth_login_azure}

---

##### `auth_login_cert`<sup>Optional</sup> <a name="auth_login_cert" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginCert"></a>

```python
auth_login_cert: VaultProviderAuthLoginCert
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginCert">VaultProviderAuthLoginCert</a>

auth_login_cert block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#auth_login_cert VaultProvider#auth_login_cert}

---

##### `auth_login_gcp`<sup>Optional</sup> <a name="auth_login_gcp" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginGcp"></a>

```python
auth_login_gcp: VaultProviderAuthLoginGcp
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginGcp">VaultProviderAuthLoginGcp</a>

auth_login_gcp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#auth_login_gcp VaultProvider#auth_login_gcp}

---

##### `auth_login_jwt`<sup>Optional</sup> <a name="auth_login_jwt" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginJwt"></a>

```python
auth_login_jwt: VaultProviderAuthLoginJwt
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginJwt">VaultProviderAuthLoginJwt</a>

auth_login_jwt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#auth_login_jwt VaultProvider#auth_login_jwt}

---

##### `auth_login_kerberos`<sup>Optional</sup> <a name="auth_login_kerberos" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginKerberos"></a>

```python
auth_login_kerberos: VaultProviderAuthLoginKerberos
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginKerberos">VaultProviderAuthLoginKerberos</a>

auth_login_kerberos block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#auth_login_kerberos VaultProvider#auth_login_kerberos}

---

##### `auth_login_oci`<sup>Optional</sup> <a name="auth_login_oci" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginOci"></a>

```python
auth_login_oci: VaultProviderAuthLoginOci
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOci">VaultProviderAuthLoginOci</a>

auth_login_oci block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#auth_login_oci VaultProvider#auth_login_oci}

---

##### `auth_login_oidc`<sup>Optional</sup> <a name="auth_login_oidc" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginOidc"></a>

```python
auth_login_oidc: VaultProviderAuthLoginOidc
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginOidc">VaultProviderAuthLoginOidc</a>

auth_login_oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#auth_login_oidc VaultProvider#auth_login_oidc}

---

##### `auth_login_radius`<sup>Optional</sup> <a name="auth_login_radius" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginRadius"></a>

```python
auth_login_radius: VaultProviderAuthLoginRadius
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginRadius">VaultProviderAuthLoginRadius</a>

auth_login_radius block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#auth_login_radius VaultProvider#auth_login_radius}

---

##### `auth_login_token_file`<sup>Optional</sup> <a name="auth_login_token_file" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginTokenFile"></a>

```python
auth_login_token_file: VaultProviderAuthLoginTokenFile
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginTokenFile">VaultProviderAuthLoginTokenFile</a>

auth_login_token_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#auth_login_token_file VaultProvider#auth_login_token_file}

---

##### `auth_login_userpass`<sup>Optional</sup> <a name="auth_login_userpass" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.authLoginUserpass"></a>

```python
auth_login_userpass: VaultProviderAuthLoginUserpass
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderAuthLoginUserpass">VaultProviderAuthLoginUserpass</a>

auth_login_userpass block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#auth_login_userpass VaultProvider#auth_login_userpass}

---

##### `ca_cert_dir`<sup>Optional</sup> <a name="ca_cert_dir" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.caCertDir"></a>

```python
ca_cert_dir: str
```

- *Type:* str

Path to directory containing CA certificate files to validate the server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#ca_cert_dir VaultProvider#ca_cert_dir}

---

##### `ca_cert_file`<sup>Optional</sup> <a name="ca_cert_file" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.caCertFile"></a>

```python
ca_cert_file: str
```

- *Type:* str

Path to a CA certificate file to validate the server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#ca_cert_file VaultProvider#ca_cert_file}

---

##### `client_auth`<sup>Optional</sup> <a name="client_auth" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.clientAuth"></a>

```python
client_auth: VaultProviderClientAuth
```

- *Type:* <a href="#@cdktf/provider-vault.provider.VaultProviderClientAuth">VaultProviderClientAuth</a>

client_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#client_auth VaultProvider#client_auth}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.headers"></a>

```python
headers: typing.Union[IResolvable, typing.List[VaultProviderHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.provider.VaultProviderHeaders">VaultProviderHeaders</a>]]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#headers VaultProvider#headers}

---

##### `max_lease_ttl_seconds`<sup>Optional</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.maxLeaseTtlSeconds"></a>

```python
max_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum TTL for secret leases requested by this provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#max_lease_ttl_seconds VaultProvider#max_lease_ttl_seconds}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of retries when a 5xx error code is encountered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#max_retries VaultProvider#max_retries}

---

##### `max_retries_ccc`<sup>Optional</sup> <a name="max_retries_ccc" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.maxRetriesCcc"></a>

```python
max_retries_ccc: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of retries for Client Controlled Consistency related operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#max_retries_ccc VaultProvider#max_retries_ccc}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The namespace to use. Available only for Vault Enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#namespace VaultProvider#namespace}

---

##### `set_namespace_from_token`<sup>Optional</sup> <a name="set_namespace_from_token" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.setNamespaceFromToken"></a>

```python
set_namespace_from_token: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

In the case where the Vault token is for a specific namespace and the provider namespace is not configured, use the token namespace as the root namespace for all resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#set_namespace_from_token VaultProvider#set_namespace_from_token}

---

##### `skip_child_token`<sup>Optional</sup> <a name="skip_child_token" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.skipChildToken"></a>

```python
skip_child_token: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set this to true to prevent the creation of ephemeral child token used by this provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#skip_child_token VaultProvider#skip_child_token}

---

##### `skip_get_vault_version`<sup>Optional</sup> <a name="skip_get_vault_version" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.skipGetVaultVersion"></a>

```python
skip_get_vault_version: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Skip the dynamic fetching of the Vault server version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#skip_get_vault_version VaultProvider#skip_get_vault_version}

---

##### `skip_tls_verify`<sup>Optional</sup> <a name="skip_tls_verify" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.skipTlsVerify"></a>

```python
skip_tls_verify: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set this to true only if the target Vault server is an insecure development instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#skip_tls_verify VaultProvider#skip_tls_verify}

---

##### `tls_server_name`<sup>Optional</sup> <a name="tls_server_name" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.tlsServerName"></a>

```python
tls_server_name: str
```

- *Type:* str

Name to use as the SNI host when connecting via TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#tls_server_name VaultProvider#tls_server_name}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.token"></a>

```python
token: str
```

- *Type:* str

Token to use to authenticate to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#token VaultProvider#token}

---

##### `token_name`<sup>Optional</sup> <a name="token_name" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.tokenName"></a>

```python
token_name: str
```

- *Type:* str

Token name to use for creating the Vault child token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#token_name VaultProvider#token_name}

---

##### `vault_version_override`<sup>Optional</sup> <a name="vault_version_override" id="@cdktf/provider-vault.provider.VaultProviderConfig.property.vaultVersionOverride"></a>

```python
vault_version_override: str
```

- *Type:* str

Override the Vault server version, which is normally determined dynamically from the target Vault server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#vault_version_override VaultProvider#vault_version_override}

---

### VaultProviderHeaders <a name="VaultProviderHeaders" id="@cdktf/provider-vault.provider.VaultProviderHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.provider.VaultProviderHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import provider

provider.VaultProviderHeaders(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderHeaders.property.name">name</a></code> | <code>str</code> | The header name. |
| <code><a href="#@cdktf/provider-vault.provider.VaultProviderHeaders.property.value">value</a></code> | <code>str</code> | The header value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.provider.VaultProviderHeaders.property.name"></a>

```python
name: str
```

- *Type:* str

The header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#name VaultProvider#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.provider.VaultProviderHeaders.property.value"></a>

```python
value: str
```

- *Type:* str

The header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs#value VaultProvider#value}

---



