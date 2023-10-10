# `vault_ldap_secret_backend`

Refer to the Terraform Registory for docs: [`vault_ldap_secret_backend`](https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend).

# `ldapSecretBackend` Submodule <a name="`ldapSecretBackend` Submodule" id="@cdktf/provider-vault.ldapSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LdapSecretBackend <a name="LdapSecretBackend" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend vault_ldap_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import ldap_secret_backend

ldapSecretBackend.LdapSecretBackend(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  binddn: str,
  bindpass: str,
  allowed_managed_keys: typing.List[str] = None,
  audit_non_hmac_request_keys: typing.List[str] = None,
  audit_non_hmac_response_keys: typing.List[str] = None,
  certificate: str = None,
  client_tls_cert: str = None,
  client_tls_key: str = None,
  connection_timeout: typing.Union[int, float] = None,
  default_lease_ttl_seconds: typing.Union[int, float] = None,
  description: str = None,
  disable_remount: typing.Union[bool, IResolvable] = None,
  external_entropy_access: typing.Union[bool, IResolvable] = None,
  id: str = None,
  insecure_tls: typing.Union[bool, IResolvable] = None,
  length: typing.Union[int, float] = None,
  local: typing.Union[bool, IResolvable] = None,
  max_lease_ttl_seconds: typing.Union[int, float] = None,
  namespace: str = None,
  options: typing.Mapping[str] = None,
  password_policy: str = None,
  path: str = None,
  request_timeout: typing.Union[int, float] = None,
  schema: str = None,
  seal_wrap: typing.Union[bool, IResolvable] = None,
  starttls: typing.Union[bool, IResolvable] = None,
  upndomain: str = None,
  url: str = None,
  userattr: str = None,
  userdn: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.binddn">binddn</a></code> | <code>str</code> | Distinguished name of object to bind when performing user and group search. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.bindpass">bindpass</a></code> | <code>str</code> | LDAP password for searching for the user DN. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.allowedManagedKeys">allowed_managed_keys</a></code> | <code>typing.List[str]</code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.auditNonHmacRequestKeys">audit_non_hmac_request_keys</a></code> | <code>typing.List[str]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.auditNonHmacResponseKeys">audit_non_hmac_response_keys</a></code> | <code>typing.List[str]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.certificate">certificate</a></code> | <code>str</code> | CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.clientTlsCert">client_tls_cert</a></code> | <code>str</code> | Client certificate to provide to the LDAP server, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.clientTlsKey">client_tls_key</a></code> | <code>str</code> | Client certificate key to provide to the LDAP server, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.connectionTimeout">connection_timeout</a></code> | <code>typing.Union[int, float]</code> | Timeout, in seconds, when attempting to connect to the LDAP server before trying the next URL in the configuration. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Default lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.description">description</a></code> | <code>str</code> | Human-friendly description of the mount. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.externalEntropyAccess">external_entropy_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#id LdapSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.insecureTls">insecure_tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Skip LDAP server SSL Certificate verification - insecure and not recommended for production use. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.length">length</a></code> | <code>typing.Union[int, float]</code> | The desired length of passwords that Vault generates. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.local">local</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Maximum possible lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.options">options</a></code> | <code>typing.Mapping[str]</code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.passwordPolicy">password_policy</a></code> | <code>str</code> | Name of the password policy to use to generate passwords. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.path">path</a></code> | <code>str</code> | The path where the LDAP secrets backend is mounted. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.requestTimeout">request_timeout</a></code> | <code>typing.Union[int, float]</code> | Timeout, in seconds, for the connection when making requests against the server before returning back an error. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The LDAP schema to use when storing entry passwords. Valid schemas include openldap, ad, and racf. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.sealWrap">seal_wrap</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.starttls">starttls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Issue a StartTLS command after establishing unencrypted connection. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.upndomain">upndomain</a></code> | <code>str</code> | Enables userPrincipalDomain login with [username]@UPNDomain. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.url">url</a></code> | <code>str</code> | LDAP URL to connect to (default: ldap://127.0.0.1). Multiple URLs can be specified by concatenating them with commas; they will be tried in-order. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.userattr">userattr</a></code> | <code>str</code> | Attribute used for users (default: cn). |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.userdn">userdn</a></code> | <code>str</code> | LDAP domain to use for users (eg: ou=People,dc=example,dc=org). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `binddn`<sup>Required</sup> <a name="binddn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.binddn"></a>

- *Type:* str

Distinguished name of object to bind when performing user and group search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#binddn LdapSecretBackend#binddn}

---

##### `bindpass`<sup>Required</sup> <a name="bindpass" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.bindpass"></a>

- *Type:* str

LDAP password for searching for the user DN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#bindpass LdapSecretBackend#bindpass}

---

##### `allowed_managed_keys`<sup>Optional</sup> <a name="allowed_managed_keys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.allowedManagedKeys"></a>

- *Type:* typing.List[str]

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#allowed_managed_keys LdapSecretBackend#allowed_managed_keys}

---

##### `audit_non_hmac_request_keys`<sup>Optional</sup> <a name="audit_non_hmac_request_keys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.auditNonHmacRequestKeys"></a>

- *Type:* typing.List[str]

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#audit_non_hmac_request_keys LdapSecretBackend#audit_non_hmac_request_keys}

---

##### `audit_non_hmac_response_keys`<sup>Optional</sup> <a name="audit_non_hmac_response_keys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.auditNonHmacResponseKeys"></a>

- *Type:* typing.List[str]

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#audit_non_hmac_response_keys LdapSecretBackend#audit_non_hmac_response_keys}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.certificate"></a>

- *Type:* str

CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#certificate LdapSecretBackend#certificate}

---

##### `client_tls_cert`<sup>Optional</sup> <a name="client_tls_cert" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.clientTlsCert"></a>

- *Type:* str

Client certificate to provide to the LDAP server, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#client_tls_cert LdapSecretBackend#client_tls_cert}

---

##### `client_tls_key`<sup>Optional</sup> <a name="client_tls_key" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.clientTlsKey"></a>

- *Type:* str

Client certificate key to provide to the LDAP server, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#client_tls_key LdapSecretBackend#client_tls_key}

---

##### `connection_timeout`<sup>Optional</sup> <a name="connection_timeout" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.connectionTimeout"></a>

- *Type:* typing.Union[int, float]

Timeout, in seconds, when attempting to connect to the LDAP server before trying the next URL in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#connection_timeout LdapSecretBackend#connection_timeout}

---

##### `default_lease_ttl_seconds`<sup>Optional</sup> <a name="default_lease_ttl_seconds" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds"></a>

- *Type:* typing.Union[int, float]

Default lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#default_lease_ttl_seconds LdapSecretBackend#default_lease_ttl_seconds}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.description"></a>

- *Type:* str

Human-friendly description of the mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#description LdapSecretBackend#description}

---

##### `disable_remount`<sup>Optional</sup> <a name="disable_remount" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.disableRemount"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#disable_remount LdapSecretBackend#disable_remount}

---

##### `external_entropy_access`<sup>Optional</sup> <a name="external_entropy_access" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.externalEntropyAccess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#external_entropy_access LdapSecretBackend#external_entropy_access}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#id LdapSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insecure_tls`<sup>Optional</sup> <a name="insecure_tls" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.insecureTls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Skip LDAP server SSL Certificate verification - insecure and not recommended for production use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#insecure_tls LdapSecretBackend#insecure_tls}

---

##### `length`<sup>Optional</sup> <a name="length" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.length"></a>

- *Type:* typing.Union[int, float]

The desired length of passwords that Vault generates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#length LdapSecretBackend#length}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.local"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#local LdapSecretBackend#local}

---

##### `max_lease_ttl_seconds`<sup>Optional</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.maxLeaseTtlSeconds"></a>

- *Type:* typing.Union[int, float]

Maximum possible lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#max_lease_ttl_seconds LdapSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#namespace LdapSecretBackend#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.options"></a>

- *Type:* typing.Mapping[str]

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#options LdapSecretBackend#options}

---

##### `password_policy`<sup>Optional</sup> <a name="password_policy" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.passwordPolicy"></a>

- *Type:* str

Name of the password policy to use to generate passwords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#password_policy LdapSecretBackend#password_policy}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.path"></a>

- *Type:* str

The path where the LDAP secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#path LdapSecretBackend#path}

---

##### `request_timeout`<sup>Optional</sup> <a name="request_timeout" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.requestTimeout"></a>

- *Type:* typing.Union[int, float]

Timeout, in seconds, for the connection when making requests against the server before returning back an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#request_timeout LdapSecretBackend#request_timeout}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.schema"></a>

- *Type:* str

The LDAP schema to use when storing entry passwords. Valid schemas include openldap, ad, and racf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#schema LdapSecretBackend#schema}

---

##### `seal_wrap`<sup>Optional</sup> <a name="seal_wrap" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.sealWrap"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#seal_wrap LdapSecretBackend#seal_wrap}

---

##### `starttls`<sup>Optional</sup> <a name="starttls" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.starttls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Issue a StartTLS command after establishing unencrypted connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#starttls LdapSecretBackend#starttls}

---

##### `upndomain`<sup>Optional</sup> <a name="upndomain" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.upndomain"></a>

- *Type:* str

Enables userPrincipalDomain login with [username]@UPNDomain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#upndomain LdapSecretBackend#upndomain}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.url"></a>

- *Type:* str

LDAP URL to connect to (default: ldap://127.0.0.1). Multiple URLs can be specified by concatenating them with commas; they will be tried in-order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#url LdapSecretBackend#url}

---

##### `userattr`<sup>Optional</sup> <a name="userattr" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.userattr"></a>

- *Type:* str

Attribute used for users (default: cn).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#userattr LdapSecretBackend#userattr}

---

##### `userdn`<sup>Optional</sup> <a name="userdn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.userdn"></a>

- *Type:* str

LDAP domain to use for users (eg: ou=People,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#userdn LdapSecretBackend#userdn}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAllowedManagedKeys">reset_allowed_managed_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAuditNonHmacRequestKeys">reset_audit_non_hmac_request_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAuditNonHmacResponseKeys">reset_audit_non_hmac_response_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetClientTlsCert">reset_client_tls_cert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetClientTlsKey">reset_client_tls_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetConnectionTimeout">reset_connection_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDefaultLeaseTtlSeconds">reset_default_lease_ttl_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDisableRemount">reset_disable_remount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetExternalEntropyAccess">reset_external_entropy_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetInsecureTls">reset_insecure_tls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetLength">reset_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetLocal">reset_local</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetMaxLeaseTtlSeconds">reset_max_lease_ttl_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetPasswordPolicy">reset_password_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetRequestTimeout">reset_request_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetSchema">reset_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetSealWrap">reset_seal_wrap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetStarttls">reset_starttls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUpndomain">reset_upndomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUrl">reset_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUserattr">reset_userattr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUserdn">reset_userdn</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_allowed_managed_keys` <a name="reset_allowed_managed_keys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAllowedManagedKeys"></a>

```python
def reset_allowed_managed_keys() -> None
```

##### `reset_audit_non_hmac_request_keys` <a name="reset_audit_non_hmac_request_keys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAuditNonHmacRequestKeys"></a>

```python
def reset_audit_non_hmac_request_keys() -> None
```

##### `reset_audit_non_hmac_response_keys` <a name="reset_audit_non_hmac_response_keys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAuditNonHmacResponseKeys"></a>

```python
def reset_audit_non_hmac_response_keys() -> None
```

##### `reset_certificate` <a name="reset_certificate" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_client_tls_cert` <a name="reset_client_tls_cert" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetClientTlsCert"></a>

```python
def reset_client_tls_cert() -> None
```

##### `reset_client_tls_key` <a name="reset_client_tls_key" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetClientTlsKey"></a>

```python
def reset_client_tls_key() -> None
```

##### `reset_connection_timeout` <a name="reset_connection_timeout" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetConnectionTimeout"></a>

```python
def reset_connection_timeout() -> None
```

##### `reset_default_lease_ttl_seconds` <a name="reset_default_lease_ttl_seconds" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```python
def reset_default_lease_ttl_seconds() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disable_remount` <a name="reset_disable_remount" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDisableRemount"></a>

```python
def reset_disable_remount() -> None
```

##### `reset_external_entropy_access` <a name="reset_external_entropy_access" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetExternalEntropyAccess"></a>

```python
def reset_external_entropy_access() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_insecure_tls` <a name="reset_insecure_tls" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetInsecureTls"></a>

```python
def reset_insecure_tls() -> None
```

##### `reset_length` <a name="reset_length" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetLength"></a>

```python
def reset_length() -> None
```

##### `reset_local` <a name="reset_local" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetLocal"></a>

```python
def reset_local() -> None
```

##### `reset_max_lease_ttl_seconds` <a name="reset_max_lease_ttl_seconds" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetMaxLeaseTtlSeconds"></a>

```python
def reset_max_lease_ttl_seconds() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_password_policy` <a name="reset_password_policy" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetPasswordPolicy"></a>

```python
def reset_password_policy() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_request_timeout` <a name="reset_request_timeout" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetRequestTimeout"></a>

```python
def reset_request_timeout() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetSchema"></a>

```python
def reset_schema() -> None
```

##### `reset_seal_wrap` <a name="reset_seal_wrap" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetSealWrap"></a>

```python
def reset_seal_wrap() -> None
```

##### `reset_starttls` <a name="reset_starttls" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetStarttls"></a>

```python
def reset_starttls() -> None
```

##### `reset_upndomain` <a name="reset_upndomain" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUpndomain"></a>

```python
def reset_upndomain() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUrl"></a>

```python
def reset_url() -> None
```

##### `reset_userattr` <a name="reset_userattr" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUserattr"></a>

```python
def reset_userattr() -> None
```

##### `reset_userdn` <a name="reset_userdn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUserdn"></a>

```python
def reset_userdn() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import ldap_secret_backend

ldapSecretBackend.LdapSecretBackend.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import ldap_secret_backend

ldapSecretBackend.LdapSecretBackend.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import ldap_secret_backend

ldapSecretBackend.LdapSecretBackend.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.accessor">accessor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.allowedManagedKeysInput">allowed_managed_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacRequestKeysInput">audit_non_hmac_request_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacResponseKeysInput">audit_non_hmac_response_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.binddnInput">binddn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.bindpassInput">bindpass_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.certificateInput">certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsCertInput">client_tls_cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsKeyInput">client_tls_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.connectionTimeoutInput">connection_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.defaultLeaseTtlSecondsInput">default_lease_ttl_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.disableRemountInput">disable_remount_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.externalEntropyAccessInput">external_entropy_access_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.insecureTlsInput">insecure_tls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.lengthInput">length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.localInput">local_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.maxLeaseTtlSecondsInput">max_lease_ttl_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.optionsInput">options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.passwordPolicyInput">password_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.requestTimeoutInput">request_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.sealWrapInput">seal_wrap_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.starttlsInput">starttls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.upndomainInput">upndomain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userattrInput">userattr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userdnInput">userdn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.allowedManagedKeys">allowed_managed_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacRequestKeys">audit_non_hmac_request_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacResponseKeys">audit_non_hmac_response_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.binddn">binddn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.bindpass">bindpass</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsCert">client_tls_cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsKey">client_tls_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.connectionTimeout">connection_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.externalEntropyAccess">external_entropy_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.insecureTls">insecure_tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.length">length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.local">local</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.options">options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.passwordPolicy">password_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.requestTimeout">request_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.sealWrap">seal_wrap</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.starttls">starttls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.upndomain">upndomain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userattr">userattr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userdn">userdn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.accessor"></a>

```python
accessor: str
```

- *Type:* str

---

##### `allowed_managed_keys_input`<sup>Optional</sup> <a name="allowed_managed_keys_input" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.allowedManagedKeysInput"></a>

```python
allowed_managed_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_non_hmac_request_keys_input`<sup>Optional</sup> <a name="audit_non_hmac_request_keys_input" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacRequestKeysInput"></a>

```python
audit_non_hmac_request_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_non_hmac_response_keys_input`<sup>Optional</sup> <a name="audit_non_hmac_response_keys_input" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacResponseKeysInput"></a>

```python
audit_non_hmac_response_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `binddn_input`<sup>Optional</sup> <a name="binddn_input" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.binddnInput"></a>

```python
binddn_input: str
```

- *Type:* str

---

##### `bindpass_input`<sup>Optional</sup> <a name="bindpass_input" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.bindpassInput"></a>

```python
bindpass_input: str
```

- *Type:* str

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.certificateInput"></a>

```python
certificate_input: str
```

- *Type:* str

---

##### `client_tls_cert_input`<sup>Optional</sup> <a name="client_tls_cert_input" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsCertInput"></a>

```python
client_tls_cert_input: str
```

- *Type:* str

---

##### `client_tls_key_input`<sup>Optional</sup> <a name="client_tls_key_input" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsKeyInput"></a>

```python
client_tls_key_input: str
```

- *Type:* str

---

##### `connection_timeout_input`<sup>Optional</sup> <a name="connection_timeout_input" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.connectionTimeoutInput"></a>

```python
connection_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_lease_ttl_seconds_input`<sup>Optional</sup> <a name="default_lease_ttl_seconds_input" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```python
default_lease_ttl_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disable_remount_input`<sup>Optional</sup> <a name="disable_remount_input" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.disableRemountInput"></a>

```python
disable_remount_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_entropy_access_input`<sup>Optional</sup> <a name="external_entropy_access_input" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.externalEntropyAccessInput"></a>

```python
external_entropy_access_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `insecure_tls_input`<sup>Optional</sup> <a name="insecure_tls_input" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.insecureTlsInput"></a>

```python
insecure_tls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `length_input`<sup>Optional</sup> <a name="length_input" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.lengthInput"></a>

```python
length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_input`<sup>Optional</sup> <a name="local_input" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.localInput"></a>

```python
local_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_lease_ttl_seconds_input`<sup>Optional</sup> <a name="max_lease_ttl_seconds_input" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```python
max_lease_ttl_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.optionsInput"></a>

```python
options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `password_policy_input`<sup>Optional</sup> <a name="password_policy_input" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.passwordPolicyInput"></a>

```python
password_policy_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `request_timeout_input`<sup>Optional</sup> <a name="request_timeout_input" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.requestTimeoutInput"></a>

```python
request_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `seal_wrap_input`<sup>Optional</sup> <a name="seal_wrap_input" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.sealWrapInput"></a>

```python
seal_wrap_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `starttls_input`<sup>Optional</sup> <a name="starttls_input" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.starttlsInput"></a>

```python
starttls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `upndomain_input`<sup>Optional</sup> <a name="upndomain_input" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.upndomainInput"></a>

```python
upndomain_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `userattr_input`<sup>Optional</sup> <a name="userattr_input" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userattrInput"></a>

```python
userattr_input: str
```

- *Type:* str

---

##### `userdn_input`<sup>Optional</sup> <a name="userdn_input" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userdnInput"></a>

```python
userdn_input: str
```

- *Type:* str

---

##### `allowed_managed_keys`<sup>Required</sup> <a name="allowed_managed_keys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.allowedManagedKeys"></a>

```python
allowed_managed_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_non_hmac_request_keys`<sup>Required</sup> <a name="audit_non_hmac_request_keys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacRequestKeys"></a>

```python
audit_non_hmac_request_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_non_hmac_response_keys`<sup>Required</sup> <a name="audit_non_hmac_response_keys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacResponseKeys"></a>

```python
audit_non_hmac_response_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `binddn`<sup>Required</sup> <a name="binddn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.binddn"></a>

```python
binddn: str
```

- *Type:* str

---

##### `bindpass`<sup>Required</sup> <a name="bindpass" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.bindpass"></a>

```python
bindpass: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `client_tls_cert`<sup>Required</sup> <a name="client_tls_cert" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsCert"></a>

```python
client_tls_cert: str
```

- *Type:* str

---

##### `client_tls_key`<sup>Required</sup> <a name="client_tls_key" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsKey"></a>

```python
client_tls_key: str
```

- *Type:* str

---

##### `connection_timeout`<sup>Required</sup> <a name="connection_timeout" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.connectionTimeout"></a>

```python
connection_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_lease_ttl_seconds`<sup>Required</sup> <a name="default_lease_ttl_seconds" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.defaultLeaseTtlSeconds"></a>

```python
default_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_remount`<sup>Required</sup> <a name="disable_remount" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.disableRemount"></a>

```python
disable_remount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_entropy_access`<sup>Required</sup> <a name="external_entropy_access" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.externalEntropyAccess"></a>

```python
external_entropy_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `insecure_tls`<sup>Required</sup> <a name="insecure_tls" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.insecureTls"></a>

```python
insecure_tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.length"></a>

```python
length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.local"></a>

```python
local: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_lease_ttl_seconds`<sup>Required</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.maxLeaseTtlSeconds"></a>

```python
max_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `password_policy`<sup>Required</sup> <a name="password_policy" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.passwordPolicy"></a>

```python
password_policy: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `request_timeout`<sup>Required</sup> <a name="request_timeout" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.requestTimeout"></a>

```python
request_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `seal_wrap`<sup>Required</sup> <a name="seal_wrap" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.sealWrap"></a>

```python
seal_wrap: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `starttls`<sup>Required</sup> <a name="starttls" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.starttls"></a>

```python
starttls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `upndomain`<sup>Required</sup> <a name="upndomain" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.upndomain"></a>

```python
upndomain: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `userattr`<sup>Required</sup> <a name="userattr" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userattr"></a>

```python
userattr: str
```

- *Type:* str

---

##### `userdn`<sup>Required</sup> <a name="userdn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userdn"></a>

```python
userdn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LdapSecretBackendConfig <a name="LdapSecretBackendConfig" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import ldap_secret_backend

ldapSecretBackend.LdapSecretBackendConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  binddn: str,
  bindpass: str,
  allowed_managed_keys: typing.List[str] = None,
  audit_non_hmac_request_keys: typing.List[str] = None,
  audit_non_hmac_response_keys: typing.List[str] = None,
  certificate: str = None,
  client_tls_cert: str = None,
  client_tls_key: str = None,
  connection_timeout: typing.Union[int, float] = None,
  default_lease_ttl_seconds: typing.Union[int, float] = None,
  description: str = None,
  disable_remount: typing.Union[bool, IResolvable] = None,
  external_entropy_access: typing.Union[bool, IResolvable] = None,
  id: str = None,
  insecure_tls: typing.Union[bool, IResolvable] = None,
  length: typing.Union[int, float] = None,
  local: typing.Union[bool, IResolvable] = None,
  max_lease_ttl_seconds: typing.Union[int, float] = None,
  namespace: str = None,
  options: typing.Mapping[str] = None,
  password_policy: str = None,
  path: str = None,
  request_timeout: typing.Union[int, float] = None,
  schema: str = None,
  seal_wrap: typing.Union[bool, IResolvable] = None,
  starttls: typing.Union[bool, IResolvable] = None,
  upndomain: str = None,
  url: str = None,
  userattr: str = None,
  userdn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.binddn">binddn</a></code> | <code>str</code> | Distinguished name of object to bind when performing user and group search. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.bindpass">bindpass</a></code> | <code>str</code> | LDAP password for searching for the user DN. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.allowedManagedKeys">allowed_managed_keys</a></code> | <code>typing.List[str]</code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.auditNonHmacRequestKeys">audit_non_hmac_request_keys</a></code> | <code>typing.List[str]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.auditNonHmacResponseKeys">audit_non_hmac_response_keys</a></code> | <code>typing.List[str]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.certificate">certificate</a></code> | <code>str</code> | CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.clientTlsCert">client_tls_cert</a></code> | <code>str</code> | Client certificate to provide to the LDAP server, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.clientTlsKey">client_tls_key</a></code> | <code>str</code> | Client certificate key to provide to the LDAP server, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.connectionTimeout">connection_timeout</a></code> | <code>typing.Union[int, float]</code> | Timeout, in seconds, when attempting to connect to the LDAP server before trying the next URL in the configuration. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Default lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.description">description</a></code> | <code>str</code> | Human-friendly description of the mount. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.externalEntropyAccess">external_entropy_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#id LdapSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.insecureTls">insecure_tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Skip LDAP server SSL Certificate verification - insecure and not recommended for production use. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.length">length</a></code> | <code>typing.Union[int, float]</code> | The desired length of passwords that Vault generates. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.local">local</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Maximum possible lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.options">options</a></code> | <code>typing.Mapping[str]</code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.passwordPolicy">password_policy</a></code> | <code>str</code> | Name of the password policy to use to generate passwords. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.path">path</a></code> | <code>str</code> | The path where the LDAP secrets backend is mounted. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.requestTimeout">request_timeout</a></code> | <code>typing.Union[int, float]</code> | Timeout, in seconds, for the connection when making requests against the server before returning back an error. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.schema">schema</a></code> | <code>str</code> | The LDAP schema to use when storing entry passwords. Valid schemas include openldap, ad, and racf. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.sealWrap">seal_wrap</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.starttls">starttls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Issue a StartTLS command after establishing unencrypted connection. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.upndomain">upndomain</a></code> | <code>str</code> | Enables userPrincipalDomain login with [username]@UPNDomain. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.url">url</a></code> | <code>str</code> | LDAP URL to connect to (default: ldap://127.0.0.1). Multiple URLs can be specified by concatenating them with commas; they will be tried in-order. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.userattr">userattr</a></code> | <code>str</code> | Attribute used for users (default: cn). |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.userdn">userdn</a></code> | <code>str</code> | LDAP domain to use for users (eg: ou=People,dc=example,dc=org). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `binddn`<sup>Required</sup> <a name="binddn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.binddn"></a>

```python
binddn: str
```

- *Type:* str

Distinguished name of object to bind when performing user and group search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#binddn LdapSecretBackend#binddn}

---

##### `bindpass`<sup>Required</sup> <a name="bindpass" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.bindpass"></a>

```python
bindpass: str
```

- *Type:* str

LDAP password for searching for the user DN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#bindpass LdapSecretBackend#bindpass}

---

##### `allowed_managed_keys`<sup>Optional</sup> <a name="allowed_managed_keys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.allowedManagedKeys"></a>

```python
allowed_managed_keys: typing.List[str]
```

- *Type:* typing.List[str]

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#allowed_managed_keys LdapSecretBackend#allowed_managed_keys}

---

##### `audit_non_hmac_request_keys`<sup>Optional</sup> <a name="audit_non_hmac_request_keys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.auditNonHmacRequestKeys"></a>

```python
audit_non_hmac_request_keys: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#audit_non_hmac_request_keys LdapSecretBackend#audit_non_hmac_request_keys}

---

##### `audit_non_hmac_response_keys`<sup>Optional</sup> <a name="audit_non_hmac_response_keys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.auditNonHmacResponseKeys"></a>

```python
audit_non_hmac_response_keys: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#audit_non_hmac_response_keys LdapSecretBackend#audit_non_hmac_response_keys}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#certificate LdapSecretBackend#certificate}

---

##### `client_tls_cert`<sup>Optional</sup> <a name="client_tls_cert" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.clientTlsCert"></a>

```python
client_tls_cert: str
```

- *Type:* str

Client certificate to provide to the LDAP server, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#client_tls_cert LdapSecretBackend#client_tls_cert}

---

##### `client_tls_key`<sup>Optional</sup> <a name="client_tls_key" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.clientTlsKey"></a>

```python
client_tls_key: str
```

- *Type:* str

Client certificate key to provide to the LDAP server, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#client_tls_key LdapSecretBackend#client_tls_key}

---

##### `connection_timeout`<sup>Optional</sup> <a name="connection_timeout" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.connectionTimeout"></a>

```python
connection_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Timeout, in seconds, when attempting to connect to the LDAP server before trying the next URL in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#connection_timeout LdapSecretBackend#connection_timeout}

---

##### `default_lease_ttl_seconds`<sup>Optional</sup> <a name="default_lease_ttl_seconds" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```python
default_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Default lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#default_lease_ttl_seconds LdapSecretBackend#default_lease_ttl_seconds}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Human-friendly description of the mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#description LdapSecretBackend#description}

---

##### `disable_remount`<sup>Optional</sup> <a name="disable_remount" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.disableRemount"></a>

```python
disable_remount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#disable_remount LdapSecretBackend#disable_remount}

---

##### `external_entropy_access`<sup>Optional</sup> <a name="external_entropy_access" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.externalEntropyAccess"></a>

```python
external_entropy_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#external_entropy_access LdapSecretBackend#external_entropy_access}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#id LdapSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insecure_tls`<sup>Optional</sup> <a name="insecure_tls" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.insecureTls"></a>

```python
insecure_tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Skip LDAP server SSL Certificate verification - insecure and not recommended for production use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#insecure_tls LdapSecretBackend#insecure_tls}

---

##### `length`<sup>Optional</sup> <a name="length" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.length"></a>

```python
length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The desired length of passwords that Vault generates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#length LdapSecretBackend#length}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.local"></a>

```python
local: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#local LdapSecretBackend#local}

---

##### `max_lease_ttl_seconds`<sup>Optional</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```python
max_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum possible lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#max_lease_ttl_seconds LdapSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#namespace LdapSecretBackend#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#options LdapSecretBackend#options}

---

##### `password_policy`<sup>Optional</sup> <a name="password_policy" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.passwordPolicy"></a>

```python
password_policy: str
```

- *Type:* str

Name of the password policy to use to generate passwords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#password_policy LdapSecretBackend#password_policy}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.path"></a>

```python
path: str
```

- *Type:* str

The path where the LDAP secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#path LdapSecretBackend#path}

---

##### `request_timeout`<sup>Optional</sup> <a name="request_timeout" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.requestTimeout"></a>

```python
request_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Timeout, in seconds, for the connection when making requests against the server before returning back an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#request_timeout LdapSecretBackend#request_timeout}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The LDAP schema to use when storing entry passwords. Valid schemas include openldap, ad, and racf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#schema LdapSecretBackend#schema}

---

##### `seal_wrap`<sup>Optional</sup> <a name="seal_wrap" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.sealWrap"></a>

```python
seal_wrap: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#seal_wrap LdapSecretBackend#seal_wrap}

---

##### `starttls`<sup>Optional</sup> <a name="starttls" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.starttls"></a>

```python
starttls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Issue a StartTLS command after establishing unencrypted connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#starttls LdapSecretBackend#starttls}

---

##### `upndomain`<sup>Optional</sup> <a name="upndomain" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.upndomain"></a>

```python
upndomain: str
```

- *Type:* str

Enables userPrincipalDomain login with [username]@UPNDomain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#upndomain LdapSecretBackend#upndomain}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.url"></a>

```python
url: str
```

- *Type:* str

LDAP URL to connect to (default: ldap://127.0.0.1). Multiple URLs can be specified by concatenating them with commas; they will be tried in-order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#url LdapSecretBackend#url}

---

##### `userattr`<sup>Optional</sup> <a name="userattr" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.userattr"></a>

```python
userattr: str
```

- *Type:* str

Attribute used for users (default: cn).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#userattr LdapSecretBackend#userattr}

---

##### `userdn`<sup>Optional</sup> <a name="userdn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.userdn"></a>

```python
userdn: str
```

- *Type:* str

LDAP domain to use for users (eg: ou=People,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#userdn LdapSecretBackend#userdn}

---



