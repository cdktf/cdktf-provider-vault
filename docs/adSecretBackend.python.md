# `adSecretBackend` Submodule <a name="`adSecretBackend` Submodule" id="@cdktf/provider-vault.adSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdSecretBackend <a name="AdSecretBackend" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend vault_ad_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import ad_secret_backend

adSecretBackend.AdSecretBackend(
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
  anonymous_group_search: typing.Union[bool, IResolvable] = None,
  backend: str = None,
  case_sensitive_names: typing.Union[bool, IResolvable] = None,
  certificate: str = None,
  client_tls_cert: str = None,
  client_tls_key: str = None,
  default_lease_ttl_seconds: typing.Union[int, float] = None,
  deny_null_bind: typing.Union[bool, IResolvable] = None,
  description: str = None,
  disable_remount: typing.Union[bool, IResolvable] = None,
  discoverdn: typing.Union[bool, IResolvable] = None,
  groupattr: str = None,
  groupdn: str = None,
  groupfilter: str = None,
  id: str = None,
  insecure_tls: typing.Union[bool, IResolvable] = None,
  last_rotation_tolerance: typing.Union[int, float] = None,
  local: typing.Union[bool, IResolvable] = None,
  max_lease_ttl_seconds: typing.Union[int, float] = None,
  max_ttl: typing.Union[int, float] = None,
  namespace: str = None,
  password_policy: str = None,
  request_timeout: typing.Union[int, float] = None,
  starttls: typing.Union[bool, IResolvable] = None,
  tls_max_version: str = None,
  tls_min_version: str = None,
  ttl: typing.Union[int, float] = None,
  upndomain: str = None,
  url: str = None,
  use_pre111_group_cn_behavior: typing.Union[bool, IResolvable] = None,
  userattr: str = None,
  userdn: str = None,
  use_token_groups: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.binddn">binddn</a></code> | <code>str</code> | Distinguished name of object to bind when performing user and group search. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.bindpass">bindpass</a></code> | <code>str</code> | LDAP password for searching for the user DN. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.anonymousGroupSearch">anonymous_group_search</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use anonymous binds when performing LDAP group searches (if true the initial credentials will still be used for the initial connection test). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.backend">backend</a></code> | <code>str</code> | The mount path for a backend, for example, the path given in "$ vault auth enable -path=my-ad ad". |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.caseSensitiveNames">case_sensitive_names</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, case sensitivity will be used when comparing usernames and groups for matching policies. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.certificate">certificate</a></code> | <code>str</code> | CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.clientTlsCert">client_tls_cert</a></code> | <code>str</code> | Client certificate to provide to the LDAP server, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.clientTlsKey">client_tls_key</a></code> | <code>str</code> | Client certificate key to provide to the LDAP server, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.denyNullBind">deny_null_bind</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denies an unauthenticated LDAP bind request if the user's password is empty; defaults to true. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.description">description</a></code> | <code>str</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.discoverdn">discoverdn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use anonymous bind to discover the bind DN of a user. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.groupattr">groupattr</a></code> | <code>str</code> | LDAP attribute to follow on objects returned by <groupfilter> in order to enumerate user group membership. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.groupdn">groupdn</a></code> | <code>str</code> | LDAP search base to use for group membership search (eg: ou=Groups,dc=example,dc=org). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.groupfilter">groupfilter</a></code> | <code>str</code> | Go template for querying group membership of user. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#id AdSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.insecureTls">insecure_tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Skip LDAP server SSL Certificate verification - insecure and not recommended for production use. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.lastRotationTolerance">last_rotation_tolerance</a></code> | <code>typing.Union[int, float]</code> | The number of seconds after a Vault rotation where, if Active Directory shows a later rotation, it should be considered out-of-band. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.local">local</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Mark the secrets engine as local-only. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | In seconds, the maximum password time-to-live. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.passwordPolicy">password_policy</a></code> | <code>str</code> | Name of the password policy to use to generate passwords. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.requestTimeout">request_timeout</a></code> | <code>typing.Union[int, float]</code> | Timeout, in seconds, for the connection when making requests against the server before returning back an error. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.starttls">starttls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Issue a StartTLS command after establishing unencrypted connection. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.tlsMaxVersion">tls_max_version</a></code> | <code>str</code> | Maximum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Defaults to 'tls12'. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.tlsMinVersion">tls_min_version</a></code> | <code>str</code> | Minimum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Defaults to 'tls12'. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | In seconds, the default password time-to-live. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.upndomain">upndomain</a></code> | <code>str</code> | Enables userPrincipalDomain login with [username]@UPNDomain. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.url">url</a></code> | <code>str</code> | LDAP URL to connect to (default: ldap://127.0.0.1). Multiple URLs can be specified by concatenating them with commas; they will be tried in-order. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.usePre111GroupCnBehavior">use_pre111_group_cn_behavior</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | In Vault 1.1.1 a fix for handling group CN values of different cases unfortunately introduced a regression that could cause previously defined groups to not be found due to a change in the resulting name. If set true, the pre-1.1.1 behavior for matching group CNs will be used. This is only needed in some upgrade scenarios for backwards compatibility. It is enabled by default if the config is upgraded but disabled by default on new configurations. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.userattr">userattr</a></code> | <code>str</code> | Attribute used for users (default: cn). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.userdn">userdn</a></code> | <code>str</code> | LDAP domain to use for users (eg: ou=People,dc=example,dc=org). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.useTokenGroups">use_token_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, use the Active Directory tokenGroups constructed attribute of the user to find the group memberships. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `binddn`<sup>Required</sup> <a name="binddn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.binddn"></a>

- *Type:* str

Distinguished name of object to bind when performing user and group search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#binddn AdSecretBackend#binddn}

---

##### `bindpass`<sup>Required</sup> <a name="bindpass" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.bindpass"></a>

- *Type:* str

LDAP password for searching for the user DN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#bindpass AdSecretBackend#bindpass}

---

##### `anonymous_group_search`<sup>Optional</sup> <a name="anonymous_group_search" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.anonymousGroupSearch"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use anonymous binds when performing LDAP group searches (if true the initial credentials will still be used for the initial connection test).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#anonymous_group_search AdSecretBackend#anonymous_group_search}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.backend"></a>

- *Type:* str

The mount path for a backend, for example, the path given in "$ vault auth enable -path=my-ad ad".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#backend AdSecretBackend#backend}

---

##### `case_sensitive_names`<sup>Optional</sup> <a name="case_sensitive_names" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.caseSensitiveNames"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, case sensitivity will be used when comparing usernames and groups for matching policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#case_sensitive_names AdSecretBackend#case_sensitive_names}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.certificate"></a>

- *Type:* str

CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#certificate AdSecretBackend#certificate}

---

##### `client_tls_cert`<sup>Optional</sup> <a name="client_tls_cert" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.clientTlsCert"></a>

- *Type:* str

Client certificate to provide to the LDAP server, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#client_tls_cert AdSecretBackend#client_tls_cert}

---

##### `client_tls_key`<sup>Optional</sup> <a name="client_tls_key" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.clientTlsKey"></a>

- *Type:* str

Client certificate key to provide to the LDAP server, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#client_tls_key AdSecretBackend#client_tls_key}

---

##### `default_lease_ttl_seconds`<sup>Optional</sup> <a name="default_lease_ttl_seconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds"></a>

- *Type:* typing.Union[int, float]

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#default_lease_ttl_seconds AdSecretBackend#default_lease_ttl_seconds}

---

##### `deny_null_bind`<sup>Optional</sup> <a name="deny_null_bind" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.denyNullBind"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denies an unauthenticated LDAP bind request if the user's password is empty; defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#deny_null_bind AdSecretBackend#deny_null_bind}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.description"></a>

- *Type:* str

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#description AdSecretBackend#description}

---

##### `disable_remount`<sup>Optional</sup> <a name="disable_remount" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.disableRemount"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#disable_remount AdSecretBackend#disable_remount}

---

##### `discoverdn`<sup>Optional</sup> <a name="discoverdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.discoverdn"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use anonymous bind to discover the bind DN of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#discoverdn AdSecretBackend#discoverdn}

---

##### `groupattr`<sup>Optional</sup> <a name="groupattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.groupattr"></a>

- *Type:* str

LDAP attribute to follow on objects returned by <groupfilter> in order to enumerate user group membership.

Examples: "cn" or "memberOf", etc. Default: cn

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#groupattr AdSecretBackend#groupattr}

---

##### `groupdn`<sup>Optional</sup> <a name="groupdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.groupdn"></a>

- *Type:* str

LDAP search base to use for group membership search (eg: ou=Groups,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#groupdn AdSecretBackend#groupdn}

---

##### `groupfilter`<sup>Optional</sup> <a name="groupfilter" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.groupfilter"></a>

- *Type:* str

Go template for querying group membership of user.

The template can access the following context variables: UserDN, Username Example: (&(objectClass=group)(member:1.2.840.113556.1.4.1941:={{.UserDN}})) Default: (|(memberUid={{.Username}})(member={{.UserDN}})(uniqueMember={{.UserDN}}))

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#groupfilter AdSecretBackend#groupfilter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#id AdSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insecure_tls`<sup>Optional</sup> <a name="insecure_tls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.insecureTls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Skip LDAP server SSL Certificate verification - insecure and not recommended for production use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#insecure_tls AdSecretBackend#insecure_tls}

---

##### `last_rotation_tolerance`<sup>Optional</sup> <a name="last_rotation_tolerance" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.lastRotationTolerance"></a>

- *Type:* typing.Union[int, float]

The number of seconds after a Vault rotation where, if Active Directory shows a later rotation, it should be considered out-of-band.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#last_rotation_tolerance AdSecretBackend#last_rotation_tolerance}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.local"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Mark the secrets engine as local-only.

Local engines are not replicated or removed by replication.Tolerance duration to use when checking the last rotation time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#local AdSecretBackend#local}

---

##### `max_lease_ttl_seconds`<sup>Optional</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.maxLeaseTtlSeconds"></a>

- *Type:* typing.Union[int, float]

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#max_lease_ttl_seconds AdSecretBackend#max_lease_ttl_seconds}

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.maxTtl"></a>

- *Type:* typing.Union[int, float]

In seconds, the maximum password time-to-live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#max_ttl AdSecretBackend#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#namespace AdSecretBackend#namespace}

---

##### `password_policy`<sup>Optional</sup> <a name="password_policy" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.passwordPolicy"></a>

- *Type:* str

Name of the password policy to use to generate passwords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#password_policy AdSecretBackend#password_policy}

---

##### `request_timeout`<sup>Optional</sup> <a name="request_timeout" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.requestTimeout"></a>

- *Type:* typing.Union[int, float]

Timeout, in seconds, for the connection when making requests against the server before returning back an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#request_timeout AdSecretBackend#request_timeout}

---

##### `starttls`<sup>Optional</sup> <a name="starttls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.starttls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Issue a StartTLS command after establishing unencrypted connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#starttls AdSecretBackend#starttls}

---

##### `tls_max_version`<sup>Optional</sup> <a name="tls_max_version" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.tlsMaxVersion"></a>

- *Type:* str

Maximum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Defaults to 'tls12'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#tls_max_version AdSecretBackend#tls_max_version}

---

##### `tls_min_version`<sup>Optional</sup> <a name="tls_min_version" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.tlsMinVersion"></a>

- *Type:* str

Minimum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Defaults to 'tls12'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#tls_min_version AdSecretBackend#tls_min_version}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

In seconds, the default password time-to-live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#ttl AdSecretBackend#ttl}

---

##### `upndomain`<sup>Optional</sup> <a name="upndomain" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.upndomain"></a>

- *Type:* str

Enables userPrincipalDomain login with [username]@UPNDomain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#upndomain AdSecretBackend#upndomain}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.url"></a>

- *Type:* str

LDAP URL to connect to (default: ldap://127.0.0.1). Multiple URLs can be specified by concatenating them with commas; they will be tried in-order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#url AdSecretBackend#url}

---

##### `use_pre111_group_cn_behavior`<sup>Optional</sup> <a name="use_pre111_group_cn_behavior" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.usePre111GroupCnBehavior"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

In Vault 1.1.1 a fix for handling group CN values of different cases unfortunately introduced a regression that could cause previously defined groups to not be found due to a change in the resulting name. If set true, the pre-1.1.1 behavior for matching group CNs will be used. This is only needed in some upgrade scenarios for backwards compatibility. It is enabled by default if the config is upgraded but disabled by default on new configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#use_pre111_group_cn_behavior AdSecretBackend#use_pre111_group_cn_behavior}

---

##### `userattr`<sup>Optional</sup> <a name="userattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.userattr"></a>

- *Type:* str

Attribute used for users (default: cn).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#userattr AdSecretBackend#userattr}

---

##### `userdn`<sup>Optional</sup> <a name="userdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.userdn"></a>

- *Type:* str

LDAP domain to use for users (eg: ou=People,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#userdn AdSecretBackend#userdn}

---

##### `use_token_groups`<sup>Optional</sup> <a name="use_token_groups" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.useTokenGroups"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, use the Active Directory tokenGroups constructed attribute of the user to find the group memberships.

This will find all security groups including nested ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#use_token_groups AdSecretBackend#use_token_groups}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetAnonymousGroupSearch">reset_anonymous_group_search</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetBackend">reset_backend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetCaseSensitiveNames">reset_case_sensitive_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetClientTlsCert">reset_client_tls_cert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetClientTlsKey">reset_client_tls_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDefaultLeaseTtlSeconds">reset_default_lease_ttl_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDenyNullBind">reset_deny_null_bind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDisableRemount">reset_disable_remount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDiscoverdn">reset_discoverdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetGroupattr">reset_groupattr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetGroupdn">reset_groupdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetGroupfilter">reset_groupfilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetInsecureTls">reset_insecure_tls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetLastRotationTolerance">reset_last_rotation_tolerance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetLocal">reset_local</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetMaxLeaseTtlSeconds">reset_max_lease_ttl_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetMaxTtl">reset_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetPasswordPolicy">reset_password_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetRequestTimeout">reset_request_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetStarttls">reset_starttls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetTlsMaxVersion">reset_tls_max_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetTlsMinVersion">reset_tls_min_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetTtl">reset_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUpndomain">reset_upndomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUrl">reset_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUsePre111GroupCnBehavior">reset_use_pre111_group_cn_behavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUserattr">reset_userattr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUserdn">reset_userdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUseTokenGroups">reset_use_token_groups</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_anonymous_group_search` <a name="reset_anonymous_group_search" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetAnonymousGroupSearch"></a>

```python
def reset_anonymous_group_search() -> None
```

##### `reset_backend` <a name="reset_backend" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetBackend"></a>

```python
def reset_backend() -> None
```

##### `reset_case_sensitive_names` <a name="reset_case_sensitive_names" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetCaseSensitiveNames"></a>

```python
def reset_case_sensitive_names() -> None
```

##### `reset_certificate` <a name="reset_certificate" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_client_tls_cert` <a name="reset_client_tls_cert" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetClientTlsCert"></a>

```python
def reset_client_tls_cert() -> None
```

##### `reset_client_tls_key` <a name="reset_client_tls_key" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetClientTlsKey"></a>

```python
def reset_client_tls_key() -> None
```

##### `reset_default_lease_ttl_seconds` <a name="reset_default_lease_ttl_seconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```python
def reset_default_lease_ttl_seconds() -> None
```

##### `reset_deny_null_bind` <a name="reset_deny_null_bind" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDenyNullBind"></a>

```python
def reset_deny_null_bind() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disable_remount` <a name="reset_disable_remount" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDisableRemount"></a>

```python
def reset_disable_remount() -> None
```

##### `reset_discoverdn` <a name="reset_discoverdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDiscoverdn"></a>

```python
def reset_discoverdn() -> None
```

##### `reset_groupattr` <a name="reset_groupattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetGroupattr"></a>

```python
def reset_groupattr() -> None
```

##### `reset_groupdn` <a name="reset_groupdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetGroupdn"></a>

```python
def reset_groupdn() -> None
```

##### `reset_groupfilter` <a name="reset_groupfilter" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetGroupfilter"></a>

```python
def reset_groupfilter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_insecure_tls` <a name="reset_insecure_tls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetInsecureTls"></a>

```python
def reset_insecure_tls() -> None
```

##### `reset_last_rotation_tolerance` <a name="reset_last_rotation_tolerance" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetLastRotationTolerance"></a>

```python
def reset_last_rotation_tolerance() -> None
```

##### `reset_local` <a name="reset_local" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetLocal"></a>

```python
def reset_local() -> None
```

##### `reset_max_lease_ttl_seconds` <a name="reset_max_lease_ttl_seconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetMaxLeaseTtlSeconds"></a>

```python
def reset_max_lease_ttl_seconds() -> None
```

##### `reset_max_ttl` <a name="reset_max_ttl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetMaxTtl"></a>

```python
def reset_max_ttl() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_password_policy` <a name="reset_password_policy" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetPasswordPolicy"></a>

```python
def reset_password_policy() -> None
```

##### `reset_request_timeout` <a name="reset_request_timeout" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetRequestTimeout"></a>

```python
def reset_request_timeout() -> None
```

##### `reset_starttls` <a name="reset_starttls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetStarttls"></a>

```python
def reset_starttls() -> None
```

##### `reset_tls_max_version` <a name="reset_tls_max_version" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetTlsMaxVersion"></a>

```python
def reset_tls_max_version() -> None
```

##### `reset_tls_min_version` <a name="reset_tls_min_version" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetTlsMinVersion"></a>

```python
def reset_tls_min_version() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetTtl"></a>

```python
def reset_ttl() -> None
```

##### `reset_upndomain` <a name="reset_upndomain" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUpndomain"></a>

```python
def reset_upndomain() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUrl"></a>

```python
def reset_url() -> None
```

##### `reset_use_pre111_group_cn_behavior` <a name="reset_use_pre111_group_cn_behavior" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUsePre111GroupCnBehavior"></a>

```python
def reset_use_pre111_group_cn_behavior() -> None
```

##### `reset_userattr` <a name="reset_userattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUserattr"></a>

```python
def reset_userattr() -> None
```

##### `reset_userdn` <a name="reset_userdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUserdn"></a>

```python
def reset_userdn() -> None
```

##### `reset_use_token_groups` <a name="reset_use_token_groups" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUseTokenGroups"></a>

```python
def reset_use_token_groups() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AdSecretBackend resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import ad_secret_backend

adSecretBackend.AdSecretBackend.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import ad_secret_backend

adSecretBackend.AdSecretBackend.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import ad_secret_backend

adSecretBackend.AdSecretBackend.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import ad_secret_backend

adSecretBackend.AdSecretBackend.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AdSecretBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AdSecretBackend to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AdSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AdSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.anonymousGroupSearchInput">anonymous_group_search_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.binddnInput">binddn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.bindpassInput">bindpass_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.caseSensitiveNamesInput">case_sensitive_names_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.certificateInput">certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsCertInput">client_tls_cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsKeyInput">client_tls_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.defaultLeaseTtlSecondsInput">default_lease_ttl_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.denyNullBindInput">deny_null_bind_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.disableRemountInput">disable_remount_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.discoverdnInput">discoverdn_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupattrInput">groupattr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupdnInput">groupdn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupfilterInput">groupfilter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.insecureTlsInput">insecure_tls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lastRotationToleranceInput">last_rotation_tolerance_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.localInput">local_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxLeaseTtlSecondsInput">max_lease_ttl_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxTtlInput">max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.passwordPolicyInput">password_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.requestTimeoutInput">request_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.starttlsInput">starttls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMaxVersionInput">tls_max_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMinVersionInput">tls_min_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.upndomainInput">upndomain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.usePre111GroupCnBehaviorInput">use_pre111_group_cn_behavior_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userattrInput">userattr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userdnInput">userdn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.useTokenGroupsInput">use_token_groups_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.anonymousGroupSearch">anonymous_group_search</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.binddn">binddn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.bindpass">bindpass</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.caseSensitiveNames">case_sensitive_names</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsCert">client_tls_cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsKey">client_tls_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.denyNullBind">deny_null_bind</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.discoverdn">discoverdn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupattr">groupattr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupdn">groupdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupfilter">groupfilter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.insecureTls">insecure_tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lastRotationTolerance">last_rotation_tolerance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.local">local</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.passwordPolicy">password_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.requestTimeout">request_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.starttls">starttls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMaxVersion">tls_max_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMinVersion">tls_min_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.upndomain">upndomain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.usePre111GroupCnBehavior">use_pre111_group_cn_behavior</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userattr">userattr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userdn">userdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.useTokenGroups">use_token_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `anonymous_group_search_input`<sup>Optional</sup> <a name="anonymous_group_search_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.anonymousGroupSearchInput"></a>

```python
anonymous_group_search_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `binddn_input`<sup>Optional</sup> <a name="binddn_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.binddnInput"></a>

```python
binddn_input: str
```

- *Type:* str

---

##### `bindpass_input`<sup>Optional</sup> <a name="bindpass_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.bindpassInput"></a>

```python
bindpass_input: str
```

- *Type:* str

---

##### `case_sensitive_names_input`<sup>Optional</sup> <a name="case_sensitive_names_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.caseSensitiveNamesInput"></a>

```python
case_sensitive_names_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.certificateInput"></a>

```python
certificate_input: str
```

- *Type:* str

---

##### `client_tls_cert_input`<sup>Optional</sup> <a name="client_tls_cert_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsCertInput"></a>

```python
client_tls_cert_input: str
```

- *Type:* str

---

##### `client_tls_key_input`<sup>Optional</sup> <a name="client_tls_key_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsKeyInput"></a>

```python
client_tls_key_input: str
```

- *Type:* str

---

##### `default_lease_ttl_seconds_input`<sup>Optional</sup> <a name="default_lease_ttl_seconds_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```python
default_lease_ttl_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `deny_null_bind_input`<sup>Optional</sup> <a name="deny_null_bind_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.denyNullBindInput"></a>

```python
deny_null_bind_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disable_remount_input`<sup>Optional</sup> <a name="disable_remount_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.disableRemountInput"></a>

```python
disable_remount_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `discoverdn_input`<sup>Optional</sup> <a name="discoverdn_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.discoverdnInput"></a>

```python
discoverdn_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `groupattr_input`<sup>Optional</sup> <a name="groupattr_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupattrInput"></a>

```python
groupattr_input: str
```

- *Type:* str

---

##### `groupdn_input`<sup>Optional</sup> <a name="groupdn_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupdnInput"></a>

```python
groupdn_input: str
```

- *Type:* str

---

##### `groupfilter_input`<sup>Optional</sup> <a name="groupfilter_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupfilterInput"></a>

```python
groupfilter_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `insecure_tls_input`<sup>Optional</sup> <a name="insecure_tls_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.insecureTlsInput"></a>

```python
insecure_tls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `last_rotation_tolerance_input`<sup>Optional</sup> <a name="last_rotation_tolerance_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lastRotationToleranceInput"></a>

```python
last_rotation_tolerance_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_input`<sup>Optional</sup> <a name="local_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.localInput"></a>

```python
local_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_lease_ttl_seconds_input`<sup>Optional</sup> <a name="max_lease_ttl_seconds_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```python
max_lease_ttl_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_ttl_input`<sup>Optional</sup> <a name="max_ttl_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxTtlInput"></a>

```python
max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `password_policy_input`<sup>Optional</sup> <a name="password_policy_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.passwordPolicyInput"></a>

```python
password_policy_input: str
```

- *Type:* str

---

##### `request_timeout_input`<sup>Optional</sup> <a name="request_timeout_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.requestTimeoutInput"></a>

```python
request_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `starttls_input`<sup>Optional</sup> <a name="starttls_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.starttlsInput"></a>

```python
starttls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_max_version_input`<sup>Optional</sup> <a name="tls_max_version_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMaxVersionInput"></a>

```python
tls_max_version_input: str
```

- *Type:* str

---

##### `tls_min_version_input`<sup>Optional</sup> <a name="tls_min_version_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMinVersionInput"></a>

```python
tls_min_version_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `upndomain_input`<sup>Optional</sup> <a name="upndomain_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.upndomainInput"></a>

```python
upndomain_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `use_pre111_group_cn_behavior_input`<sup>Optional</sup> <a name="use_pre111_group_cn_behavior_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.usePre111GroupCnBehaviorInput"></a>

```python
use_pre111_group_cn_behavior_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `userattr_input`<sup>Optional</sup> <a name="userattr_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userattrInput"></a>

```python
userattr_input: str
```

- *Type:* str

---

##### `userdn_input`<sup>Optional</sup> <a name="userdn_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userdnInput"></a>

```python
userdn_input: str
```

- *Type:* str

---

##### `use_token_groups_input`<sup>Optional</sup> <a name="use_token_groups_input" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.useTokenGroupsInput"></a>

```python
use_token_groups_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `anonymous_group_search`<sup>Required</sup> <a name="anonymous_group_search" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.anonymousGroupSearch"></a>

```python
anonymous_group_search: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `binddn`<sup>Required</sup> <a name="binddn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.binddn"></a>

```python
binddn: str
```

- *Type:* str

---

##### `bindpass`<sup>Required</sup> <a name="bindpass" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.bindpass"></a>

```python
bindpass: str
```

- *Type:* str

---

##### `case_sensitive_names`<sup>Required</sup> <a name="case_sensitive_names" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.caseSensitiveNames"></a>

```python
case_sensitive_names: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `client_tls_cert`<sup>Required</sup> <a name="client_tls_cert" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsCert"></a>

```python
client_tls_cert: str
```

- *Type:* str

---

##### `client_tls_key`<sup>Required</sup> <a name="client_tls_key" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsKey"></a>

```python
client_tls_key: str
```

- *Type:* str

---

##### `default_lease_ttl_seconds`<sup>Required</sup> <a name="default_lease_ttl_seconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.defaultLeaseTtlSeconds"></a>

```python
default_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `deny_null_bind`<sup>Required</sup> <a name="deny_null_bind" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.denyNullBind"></a>

```python
deny_null_bind: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_remount`<sup>Required</sup> <a name="disable_remount" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.disableRemount"></a>

```python
disable_remount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `discoverdn`<sup>Required</sup> <a name="discoverdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.discoverdn"></a>

```python
discoverdn: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `groupattr`<sup>Required</sup> <a name="groupattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupattr"></a>

```python
groupattr: str
```

- *Type:* str

---

##### `groupdn`<sup>Required</sup> <a name="groupdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupdn"></a>

```python
groupdn: str
```

- *Type:* str

---

##### `groupfilter`<sup>Required</sup> <a name="groupfilter" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupfilter"></a>

```python
groupfilter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `insecure_tls`<sup>Required</sup> <a name="insecure_tls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.insecureTls"></a>

```python
insecure_tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `last_rotation_tolerance`<sup>Required</sup> <a name="last_rotation_tolerance" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lastRotationTolerance"></a>

```python
last_rotation_tolerance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.local"></a>

```python
local: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_lease_ttl_seconds`<sup>Required</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxLeaseTtlSeconds"></a>

```python
max_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_ttl`<sup>Required</sup> <a name="max_ttl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `password_policy`<sup>Required</sup> <a name="password_policy" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.passwordPolicy"></a>

```python
password_policy: str
```

- *Type:* str

---

##### `request_timeout`<sup>Required</sup> <a name="request_timeout" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.requestTimeout"></a>

```python
request_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `starttls`<sup>Required</sup> <a name="starttls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.starttls"></a>

```python
starttls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_max_version`<sup>Required</sup> <a name="tls_max_version" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMaxVersion"></a>

```python
tls_max_version: str
```

- *Type:* str

---

##### `tls_min_version`<sup>Required</sup> <a name="tls_min_version" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMinVersion"></a>

```python
tls_min_version: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `upndomain`<sup>Required</sup> <a name="upndomain" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.upndomain"></a>

```python
upndomain: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `use_pre111_group_cn_behavior`<sup>Required</sup> <a name="use_pre111_group_cn_behavior" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.usePre111GroupCnBehavior"></a>

```python
use_pre111_group_cn_behavior: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `userattr`<sup>Required</sup> <a name="userattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userattr"></a>

```python
userattr: str
```

- *Type:* str

---

##### `userdn`<sup>Required</sup> <a name="userdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userdn"></a>

```python
userdn: str
```

- *Type:* str

---

##### `use_token_groups`<sup>Required</sup> <a name="use_token_groups" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.useTokenGroups"></a>

```python
use_token_groups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AdSecretBackendConfig <a name="AdSecretBackendConfig" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import ad_secret_backend

adSecretBackend.AdSecretBackendConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  binddn: str,
  bindpass: str,
  anonymous_group_search: typing.Union[bool, IResolvable] = None,
  backend: str = None,
  case_sensitive_names: typing.Union[bool, IResolvable] = None,
  certificate: str = None,
  client_tls_cert: str = None,
  client_tls_key: str = None,
  default_lease_ttl_seconds: typing.Union[int, float] = None,
  deny_null_bind: typing.Union[bool, IResolvable] = None,
  description: str = None,
  disable_remount: typing.Union[bool, IResolvable] = None,
  discoverdn: typing.Union[bool, IResolvable] = None,
  groupattr: str = None,
  groupdn: str = None,
  groupfilter: str = None,
  id: str = None,
  insecure_tls: typing.Union[bool, IResolvable] = None,
  last_rotation_tolerance: typing.Union[int, float] = None,
  local: typing.Union[bool, IResolvable] = None,
  max_lease_ttl_seconds: typing.Union[int, float] = None,
  max_ttl: typing.Union[int, float] = None,
  namespace: str = None,
  password_policy: str = None,
  request_timeout: typing.Union[int, float] = None,
  starttls: typing.Union[bool, IResolvable] = None,
  tls_max_version: str = None,
  tls_min_version: str = None,
  ttl: typing.Union[int, float] = None,
  upndomain: str = None,
  url: str = None,
  use_pre111_group_cn_behavior: typing.Union[bool, IResolvable] = None,
  userattr: str = None,
  userdn: str = None,
  use_token_groups: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.binddn">binddn</a></code> | <code>str</code> | Distinguished name of object to bind when performing user and group search. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.bindpass">bindpass</a></code> | <code>str</code> | LDAP password for searching for the user DN. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.anonymousGroupSearch">anonymous_group_search</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use anonymous binds when performing LDAP group searches (if true the initial credentials will still be used for the initial connection test). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.backend">backend</a></code> | <code>str</code> | The mount path for a backend, for example, the path given in "$ vault auth enable -path=my-ad ad". |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.caseSensitiveNames">case_sensitive_names</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, case sensitivity will be used when comparing usernames and groups for matching policies. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.certificate">certificate</a></code> | <code>str</code> | CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.clientTlsCert">client_tls_cert</a></code> | <code>str</code> | Client certificate to provide to the LDAP server, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.clientTlsKey">client_tls_key</a></code> | <code>str</code> | Client certificate key to provide to the LDAP server, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.denyNullBind">deny_null_bind</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denies an unauthenticated LDAP bind request if the user's password is empty; defaults to true. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.description">description</a></code> | <code>str</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.discoverdn">discoverdn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use anonymous bind to discover the bind DN of a user. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.groupattr">groupattr</a></code> | <code>str</code> | LDAP attribute to follow on objects returned by <groupfilter> in order to enumerate user group membership. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.groupdn">groupdn</a></code> | <code>str</code> | LDAP search base to use for group membership search (eg: ou=Groups,dc=example,dc=org). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.groupfilter">groupfilter</a></code> | <code>str</code> | Go template for querying group membership of user. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#id AdSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.insecureTls">insecure_tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Skip LDAP server SSL Certificate verification - insecure and not recommended for production use. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.lastRotationTolerance">last_rotation_tolerance</a></code> | <code>typing.Union[int, float]</code> | The number of seconds after a Vault rotation where, if Active Directory shows a later rotation, it should be considered out-of-band. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.local">local</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Mark the secrets engine as local-only. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | In seconds, the maximum password time-to-live. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.passwordPolicy">password_policy</a></code> | <code>str</code> | Name of the password policy to use to generate passwords. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.requestTimeout">request_timeout</a></code> | <code>typing.Union[int, float]</code> | Timeout, in seconds, for the connection when making requests against the server before returning back an error. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.starttls">starttls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Issue a StartTLS command after establishing unencrypted connection. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.tlsMaxVersion">tls_max_version</a></code> | <code>str</code> | Maximum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Defaults to 'tls12'. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.tlsMinVersion">tls_min_version</a></code> | <code>str</code> | Minimum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Defaults to 'tls12'. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | In seconds, the default password time-to-live. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.upndomain">upndomain</a></code> | <code>str</code> | Enables userPrincipalDomain login with [username]@UPNDomain. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.url">url</a></code> | <code>str</code> | LDAP URL to connect to (default: ldap://127.0.0.1). Multiple URLs can be specified by concatenating them with commas; they will be tried in-order. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.usePre111GroupCnBehavior">use_pre111_group_cn_behavior</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | In Vault 1.1.1 a fix for handling group CN values of different cases unfortunately introduced a regression that could cause previously defined groups to not be found due to a change in the resulting name. If set true, the pre-1.1.1 behavior for matching group CNs will be used. This is only needed in some upgrade scenarios for backwards compatibility. It is enabled by default if the config is upgraded but disabled by default on new configurations. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.userattr">userattr</a></code> | <code>str</code> | Attribute used for users (default: cn). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.userdn">userdn</a></code> | <code>str</code> | LDAP domain to use for users (eg: ou=People,dc=example,dc=org). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.useTokenGroups">use_token_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, use the Active Directory tokenGroups constructed attribute of the user to find the group memberships. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `binddn`<sup>Required</sup> <a name="binddn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.binddn"></a>

```python
binddn: str
```

- *Type:* str

Distinguished name of object to bind when performing user and group search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#binddn AdSecretBackend#binddn}

---

##### `bindpass`<sup>Required</sup> <a name="bindpass" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.bindpass"></a>

```python
bindpass: str
```

- *Type:* str

LDAP password for searching for the user DN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#bindpass AdSecretBackend#bindpass}

---

##### `anonymous_group_search`<sup>Optional</sup> <a name="anonymous_group_search" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.anonymousGroupSearch"></a>

```python
anonymous_group_search: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use anonymous binds when performing LDAP group searches (if true the initial credentials will still be used for the initial connection test).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#anonymous_group_search AdSecretBackend#anonymous_group_search}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

The mount path for a backend, for example, the path given in "$ vault auth enable -path=my-ad ad".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#backend AdSecretBackend#backend}

---

##### `case_sensitive_names`<sup>Optional</sup> <a name="case_sensitive_names" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.caseSensitiveNames"></a>

```python
case_sensitive_names: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, case sensitivity will be used when comparing usernames and groups for matching policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#case_sensitive_names AdSecretBackend#case_sensitive_names}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#certificate AdSecretBackend#certificate}

---

##### `client_tls_cert`<sup>Optional</sup> <a name="client_tls_cert" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.clientTlsCert"></a>

```python
client_tls_cert: str
```

- *Type:* str

Client certificate to provide to the LDAP server, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#client_tls_cert AdSecretBackend#client_tls_cert}

---

##### `client_tls_key`<sup>Optional</sup> <a name="client_tls_key" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.clientTlsKey"></a>

```python
client_tls_key: str
```

- *Type:* str

Client certificate key to provide to the LDAP server, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#client_tls_key AdSecretBackend#client_tls_key}

---

##### `default_lease_ttl_seconds`<sup>Optional</sup> <a name="default_lease_ttl_seconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```python
default_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#default_lease_ttl_seconds AdSecretBackend#default_lease_ttl_seconds}

---

##### `deny_null_bind`<sup>Optional</sup> <a name="deny_null_bind" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.denyNullBind"></a>

```python
deny_null_bind: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denies an unauthenticated LDAP bind request if the user's password is empty; defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#deny_null_bind AdSecretBackend#deny_null_bind}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#description AdSecretBackend#description}

---

##### `disable_remount`<sup>Optional</sup> <a name="disable_remount" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.disableRemount"></a>

```python
disable_remount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#disable_remount AdSecretBackend#disable_remount}

---

##### `discoverdn`<sup>Optional</sup> <a name="discoverdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.discoverdn"></a>

```python
discoverdn: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use anonymous bind to discover the bind DN of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#discoverdn AdSecretBackend#discoverdn}

---

##### `groupattr`<sup>Optional</sup> <a name="groupattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.groupattr"></a>

```python
groupattr: str
```

- *Type:* str

LDAP attribute to follow on objects returned by <groupfilter> in order to enumerate user group membership.

Examples: "cn" or "memberOf", etc. Default: cn

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#groupattr AdSecretBackend#groupattr}

---

##### `groupdn`<sup>Optional</sup> <a name="groupdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.groupdn"></a>

```python
groupdn: str
```

- *Type:* str

LDAP search base to use for group membership search (eg: ou=Groups,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#groupdn AdSecretBackend#groupdn}

---

##### `groupfilter`<sup>Optional</sup> <a name="groupfilter" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.groupfilter"></a>

```python
groupfilter: str
```

- *Type:* str

Go template for querying group membership of user.

The template can access the following context variables: UserDN, Username Example: (&(objectClass=group)(member:1.2.840.113556.1.4.1941:={{.UserDN}})) Default: (|(memberUid={{.Username}})(member={{.UserDN}})(uniqueMember={{.UserDN}}))

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#groupfilter AdSecretBackend#groupfilter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#id AdSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insecure_tls`<sup>Optional</sup> <a name="insecure_tls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.insecureTls"></a>

```python
insecure_tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Skip LDAP server SSL Certificate verification - insecure and not recommended for production use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#insecure_tls AdSecretBackend#insecure_tls}

---

##### `last_rotation_tolerance`<sup>Optional</sup> <a name="last_rotation_tolerance" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.lastRotationTolerance"></a>

```python
last_rotation_tolerance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of seconds after a Vault rotation where, if Active Directory shows a later rotation, it should be considered out-of-band.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#last_rotation_tolerance AdSecretBackend#last_rotation_tolerance}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.local"></a>

```python
local: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Mark the secrets engine as local-only.

Local engines are not replicated or removed by replication.Tolerance duration to use when checking the last rotation time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#local AdSecretBackend#local}

---

##### `max_lease_ttl_seconds`<sup>Optional</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```python
max_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#max_lease_ttl_seconds AdSecretBackend#max_lease_ttl_seconds}

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

In seconds, the maximum password time-to-live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#max_ttl AdSecretBackend#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#namespace AdSecretBackend#namespace}

---

##### `password_policy`<sup>Optional</sup> <a name="password_policy" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.passwordPolicy"></a>

```python
password_policy: str
```

- *Type:* str

Name of the password policy to use to generate passwords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#password_policy AdSecretBackend#password_policy}

---

##### `request_timeout`<sup>Optional</sup> <a name="request_timeout" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.requestTimeout"></a>

```python
request_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Timeout, in seconds, for the connection when making requests against the server before returning back an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#request_timeout AdSecretBackend#request_timeout}

---

##### `starttls`<sup>Optional</sup> <a name="starttls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.starttls"></a>

```python
starttls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Issue a StartTLS command after establishing unencrypted connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#starttls AdSecretBackend#starttls}

---

##### `tls_max_version`<sup>Optional</sup> <a name="tls_max_version" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.tlsMaxVersion"></a>

```python
tls_max_version: str
```

- *Type:* str

Maximum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Defaults to 'tls12'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#tls_max_version AdSecretBackend#tls_max_version}

---

##### `tls_min_version`<sup>Optional</sup> <a name="tls_min_version" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.tlsMinVersion"></a>

```python
tls_min_version: str
```

- *Type:* str

Minimum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Defaults to 'tls12'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#tls_min_version AdSecretBackend#tls_min_version}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

In seconds, the default password time-to-live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#ttl AdSecretBackend#ttl}

---

##### `upndomain`<sup>Optional</sup> <a name="upndomain" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.upndomain"></a>

```python
upndomain: str
```

- *Type:* str

Enables userPrincipalDomain login with [username]@UPNDomain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#upndomain AdSecretBackend#upndomain}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.url"></a>

```python
url: str
```

- *Type:* str

LDAP URL to connect to (default: ldap://127.0.0.1). Multiple URLs can be specified by concatenating them with commas; they will be tried in-order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#url AdSecretBackend#url}

---

##### `use_pre111_group_cn_behavior`<sup>Optional</sup> <a name="use_pre111_group_cn_behavior" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.usePre111GroupCnBehavior"></a>

```python
use_pre111_group_cn_behavior: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

In Vault 1.1.1 a fix for handling group CN values of different cases unfortunately introduced a regression that could cause previously defined groups to not be found due to a change in the resulting name. If set true, the pre-1.1.1 behavior for matching group CNs will be used. This is only needed in some upgrade scenarios for backwards compatibility. It is enabled by default if the config is upgraded but disabled by default on new configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#use_pre111_group_cn_behavior AdSecretBackend#use_pre111_group_cn_behavior}

---

##### `userattr`<sup>Optional</sup> <a name="userattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.userattr"></a>

```python
userattr: str
```

- *Type:* str

Attribute used for users (default: cn).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#userattr AdSecretBackend#userattr}

---

##### `userdn`<sup>Optional</sup> <a name="userdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.userdn"></a>

```python
userdn: str
```

- *Type:* str

LDAP domain to use for users (eg: ou=People,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#userdn AdSecretBackend#userdn}

---

##### `use_token_groups`<sup>Optional</sup> <a name="use_token_groups" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.useTokenGroups"></a>

```python
use_token_groups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, use the Active Directory tokenGroups constructed attribute of the user to find the group memberships.

This will find all security groups including nested ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_backend#use_token_groups AdSecretBackend#use_token_groups}

---



