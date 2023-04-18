# `vault_ad_secret_backend`

Refer to the Terraform Registory for docs: [`vault_ad_secret_backend`](https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend).

# `adSecretBackend` Submodule <a name="`adSecretBackend` Submodule" id="@cdktf/provider-vault.adSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdSecretBackend <a name="AdSecretBackend" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend vault_ad_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.ad_secret_backend.AdSecretBackend;

AdSecretBackend.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .binddn(java.lang.String)
    .bindpass(java.lang.String)
//  .anonymousGroupSearch(java.lang.Boolean)
//  .anonymousGroupSearch(IResolvable)
//  .backend(java.lang.String)
//  .caseSensitiveNames(java.lang.Boolean)
//  .caseSensitiveNames(IResolvable)
//  .certificate(java.lang.String)
//  .clientTlsCert(java.lang.String)
//  .clientTlsKey(java.lang.String)
//  .defaultLeaseTtlSeconds(java.lang.Number)
//  .denyNullBind(java.lang.Boolean)
//  .denyNullBind(IResolvable)
//  .description(java.lang.String)
//  .disableRemount(java.lang.Boolean)
//  .disableRemount(IResolvable)
//  .discoverdn(java.lang.Boolean)
//  .discoverdn(IResolvable)
//  .formatter(java.lang.String)
//  .groupattr(java.lang.String)
//  .groupdn(java.lang.String)
//  .groupfilter(java.lang.String)
//  .id(java.lang.String)
//  .insecureTls(java.lang.Boolean)
//  .insecureTls(IResolvable)
//  .lastRotationTolerance(java.lang.Number)
//  .length(java.lang.Number)
//  .local(java.lang.Boolean)
//  .local(IResolvable)
//  .maxLeaseTtlSeconds(java.lang.Number)
//  .maxTtl(java.lang.Number)
//  .namespace(java.lang.String)
//  .passwordPolicy(java.lang.String)
//  .requestTimeout(java.lang.Number)
//  .starttls(java.lang.Boolean)
//  .starttls(IResolvable)
//  .tlsMaxVersion(java.lang.String)
//  .tlsMinVersion(java.lang.String)
//  .ttl(java.lang.Number)
//  .upndomain(java.lang.String)
//  .url(java.lang.String)
//  .usePre111GroupCnBehavior(java.lang.Boolean)
//  .usePre111GroupCnBehavior(IResolvable)
//  .userattr(java.lang.String)
//  .userdn(java.lang.String)
//  .useTokenGroups(java.lang.Boolean)
//  .useTokenGroups(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.binddn">binddn</a></code> | <code>java.lang.String</code> | Distinguished name of object to bind when performing user and group search. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.bindpass">bindpass</a></code> | <code>java.lang.String</code> | LDAP password for searching for the user DN. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.anonymousGroupSearch">anonymousGroupSearch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Use anonymous binds when performing LDAP group searches (if true the initial credentials will still be used for the initial connection test). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | The mount path for a backend, for example, the path given in "$ vault auth enable -path=my-ad ad". |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.caseSensitiveNames">caseSensitiveNames</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, case sensitivity will be used when comparing usernames and groups for matching policies. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.certificate">certificate</a></code> | <code>java.lang.String</code> | CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.clientTlsCert">clientTlsCert</a></code> | <code>java.lang.String</code> | Client certificate to provide to the LDAP server, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.clientTlsKey">clientTlsKey</a></code> | <code>java.lang.String</code> | Client certificate key to provide to the LDAP server, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.denyNullBind">denyNullBind</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Denies an unauthenticated LDAP bind request if the user's password is empty; defaults to true. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.discoverdn">discoverdn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Use anonymous bind to discover the bind DN of a user. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.formatter">formatter</a></code> | <code>java.lang.String</code> | Text to insert the password into, ex. "customPrefix{{PASSWORD}}customSuffix". |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.groupattr">groupattr</a></code> | <code>java.lang.String</code> | LDAP attribute to follow on objects returned by <groupfilter> in order to enumerate user group membership. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.groupdn">groupdn</a></code> | <code>java.lang.String</code> | LDAP search base to use for group membership search (eg: ou=Groups,dc=example,dc=org). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.groupfilter">groupfilter</a></code> | <code>java.lang.String</code> | Go template for querying group membership of user. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#id AdSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.insecureTls">insecureTls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Skip LDAP server SSL Certificate verification - insecure and not recommended for production use. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.lastRotationTolerance">lastRotationTolerance</a></code> | <code>java.lang.Number</code> | The number of seconds after a Vault rotation where, if Active Directory shows a later rotation, it should be considered out-of-band. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.length">length</a></code> | <code>java.lang.Number</code> | The desired length of passwords that Vault generates. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.local">local</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Mark the secrets engine as local-only. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | In seconds, the maximum password time-to-live. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.passwordPolicy">passwordPolicy</a></code> | <code>java.lang.String</code> | Name of the password policy to use to generate passwords. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.requestTimeout">requestTimeout</a></code> | <code>java.lang.Number</code> | Timeout, in seconds, for the connection when making requests against the server before returning back an error. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.starttls">starttls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Issue a StartTLS command after establishing unencrypted connection. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.tlsMaxVersion">tlsMaxVersion</a></code> | <code>java.lang.String</code> | Maximum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Defaults to 'tls12'. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.tlsMinVersion">tlsMinVersion</a></code> | <code>java.lang.String</code> | Minimum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Defaults to 'tls12'. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.Number</code> | In seconds, the default password time-to-live. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.upndomain">upndomain</a></code> | <code>java.lang.String</code> | Enables userPrincipalDomain login with [username]@UPNDomain. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.url">url</a></code> | <code>java.lang.String</code> | LDAP URL to connect to (default: ldap://127.0.0.1). Multiple URLs can be specified by concatenating them with commas; they will be tried in-order. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.usePre111GroupCnBehavior">usePre111GroupCnBehavior</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | In Vault 1.1.1 a fix for handling group CN values of different cases unfortunately introduced a regression that could cause previously defined groups to not be found due to a change in the resulting name. If set true, the pre-1.1.1 behavior for matching group CNs will be used. This is only needed in some upgrade scenarios for backwards compatibility. It is enabled by default if the config is upgraded but disabled by default on new configurations. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.userattr">userattr</a></code> | <code>java.lang.String</code> | Attribute used for users (default: cn). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.userdn">userdn</a></code> | <code>java.lang.String</code> | LDAP domain to use for users (eg: ou=People,dc=example,dc=org). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.useTokenGroups">useTokenGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, use the Active Directory tokenGroups constructed attribute of the user to find the group memberships. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `binddn`<sup>Required</sup> <a name="binddn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.binddn"></a>

- *Type:* java.lang.String

Distinguished name of object to bind when performing user and group search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#binddn AdSecretBackend#binddn}

---

##### `bindpass`<sup>Required</sup> <a name="bindpass" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.bindpass"></a>

- *Type:* java.lang.String

LDAP password for searching for the user DN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#bindpass AdSecretBackend#bindpass}

---

##### `anonymousGroupSearch`<sup>Optional</sup> <a name="anonymousGroupSearch" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.anonymousGroupSearch"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Use anonymous binds when performing LDAP group searches (if true the initial credentials will still be used for the initial connection test).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#anonymous_group_search AdSecretBackend#anonymous_group_search}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

The mount path for a backend, for example, the path given in "$ vault auth enable -path=my-ad ad".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#backend AdSecretBackend#backend}

---

##### `caseSensitiveNames`<sup>Optional</sup> <a name="caseSensitiveNames" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.caseSensitiveNames"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, case sensitivity will be used when comparing usernames and groups for matching policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#case_sensitive_names AdSecretBackend#case_sensitive_names}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.certificate"></a>

- *Type:* java.lang.String

CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#certificate AdSecretBackend#certificate}

---

##### `clientTlsCert`<sup>Optional</sup> <a name="clientTlsCert" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.clientTlsCert"></a>

- *Type:* java.lang.String

Client certificate to provide to the LDAP server, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#client_tls_cert AdSecretBackend#client_tls_cert}

---

##### `clientTlsKey`<sup>Optional</sup> <a name="clientTlsKey" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.clientTlsKey"></a>

- *Type:* java.lang.String

Client certificate key to provide to the LDAP server, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#client_tls_key AdSecretBackend#client_tls_key}

---

##### `defaultLeaseTtlSeconds`<sup>Optional</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds"></a>

- *Type:* java.lang.Number

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#default_lease_ttl_seconds AdSecretBackend#default_lease_ttl_seconds}

---

##### `denyNullBind`<sup>Optional</sup> <a name="denyNullBind" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.denyNullBind"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Denies an unauthenticated LDAP bind request if the user's password is empty; defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#deny_null_bind AdSecretBackend#deny_null_bind}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#description AdSecretBackend#description}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.disableRemount"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#disable_remount AdSecretBackend#disable_remount}

---

##### `discoverdn`<sup>Optional</sup> <a name="discoverdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.discoverdn"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Use anonymous bind to discover the bind DN of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#discoverdn AdSecretBackend#discoverdn}

---

##### `formatter`<sup>Optional</sup> <a name="formatter" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.formatter"></a>

- *Type:* java.lang.String

Text to insert the password into, ex. "customPrefix{{PASSWORD}}customSuffix".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#formatter AdSecretBackend#formatter}

---

##### `groupattr`<sup>Optional</sup> <a name="groupattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.groupattr"></a>

- *Type:* java.lang.String

LDAP attribute to follow on objects returned by <groupfilter> in order to enumerate user group membership.

Examples: "cn" or "memberOf", etc. Default: cn

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#groupattr AdSecretBackend#groupattr}

---

##### `groupdn`<sup>Optional</sup> <a name="groupdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.groupdn"></a>

- *Type:* java.lang.String

LDAP search base to use for group membership search (eg: ou=Groups,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#groupdn AdSecretBackend#groupdn}

---

##### `groupfilter`<sup>Optional</sup> <a name="groupfilter" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.groupfilter"></a>

- *Type:* java.lang.String

Go template for querying group membership of user.

The template can access the following context variables: UserDN, Username Example: (&(objectClass=group)(member:1.2.840.113556.1.4.1941:={{.UserDN}})) Default: (|(memberUid={{.Username}})(member={{.UserDN}})(uniqueMember={{.UserDN}}))

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#groupfilter AdSecretBackend#groupfilter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#id AdSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insecureTls`<sup>Optional</sup> <a name="insecureTls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.insecureTls"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Skip LDAP server SSL Certificate verification - insecure and not recommended for production use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#insecure_tls AdSecretBackend#insecure_tls}

---

##### `lastRotationTolerance`<sup>Optional</sup> <a name="lastRotationTolerance" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.lastRotationTolerance"></a>

- *Type:* java.lang.Number

The number of seconds after a Vault rotation where, if Active Directory shows a later rotation, it should be considered out-of-band.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#last_rotation_tolerance AdSecretBackend#last_rotation_tolerance}

---

##### `length`<sup>Optional</sup> <a name="length" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.length"></a>

- *Type:* java.lang.Number

The desired length of passwords that Vault generates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#length AdSecretBackend#length}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.local"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Mark the secrets engine as local-only.

Local engines are not replicated or removed by replication.Tolerance duration to use when checking the last rotation time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#local AdSecretBackend#local}

---

##### `maxLeaseTtlSeconds`<sup>Optional</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.maxLeaseTtlSeconds"></a>

- *Type:* java.lang.Number

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#max_lease_ttl_seconds AdSecretBackend#max_lease_ttl_seconds}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.maxTtl"></a>

- *Type:* java.lang.Number

In seconds, the maximum password time-to-live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#max_ttl AdSecretBackend#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#namespace AdSecretBackend#namespace}

---

##### `passwordPolicy`<sup>Optional</sup> <a name="passwordPolicy" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.passwordPolicy"></a>

- *Type:* java.lang.String

Name of the password policy to use to generate passwords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#password_policy AdSecretBackend#password_policy}

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.requestTimeout"></a>

- *Type:* java.lang.Number

Timeout, in seconds, for the connection when making requests against the server before returning back an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#request_timeout AdSecretBackend#request_timeout}

---

##### `starttls`<sup>Optional</sup> <a name="starttls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.starttls"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Issue a StartTLS command after establishing unencrypted connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#starttls AdSecretBackend#starttls}

---

##### `tlsMaxVersion`<sup>Optional</sup> <a name="tlsMaxVersion" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.tlsMaxVersion"></a>

- *Type:* java.lang.String

Maximum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Defaults to 'tls12'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#tls_max_version AdSecretBackend#tls_max_version}

---

##### `tlsMinVersion`<sup>Optional</sup> <a name="tlsMinVersion" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.tlsMinVersion"></a>

- *Type:* java.lang.String

Minimum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Defaults to 'tls12'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#tls_min_version AdSecretBackend#tls_min_version}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.ttl"></a>

- *Type:* java.lang.Number

In seconds, the default password time-to-live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#ttl AdSecretBackend#ttl}

---

##### `upndomain`<sup>Optional</sup> <a name="upndomain" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.upndomain"></a>

- *Type:* java.lang.String

Enables userPrincipalDomain login with [username]@UPNDomain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#upndomain AdSecretBackend#upndomain}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.url"></a>

- *Type:* java.lang.String

LDAP URL to connect to (default: ldap://127.0.0.1). Multiple URLs can be specified by concatenating them with commas; they will be tried in-order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#url AdSecretBackend#url}

---

##### `usePre111GroupCnBehavior`<sup>Optional</sup> <a name="usePre111GroupCnBehavior" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.usePre111GroupCnBehavior"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

In Vault 1.1.1 a fix for handling group CN values of different cases unfortunately introduced a regression that could cause previously defined groups to not be found due to a change in the resulting name. If set true, the pre-1.1.1 behavior for matching group CNs will be used. This is only needed in some upgrade scenarios for backwards compatibility. It is enabled by default if the config is upgraded but disabled by default on new configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#use_pre111_group_cn_behavior AdSecretBackend#use_pre111_group_cn_behavior}

---

##### `userattr`<sup>Optional</sup> <a name="userattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.userattr"></a>

- *Type:* java.lang.String

Attribute used for users (default: cn).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#userattr AdSecretBackend#userattr}

---

##### `userdn`<sup>Optional</sup> <a name="userdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.userdn"></a>

- *Type:* java.lang.String

LDAP domain to use for users (eg: ou=People,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#userdn AdSecretBackend#userdn}

---

##### `useTokenGroups`<sup>Optional</sup> <a name="useTokenGroups" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.useTokenGroups"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, use the Active Directory tokenGroups constructed attribute of the user to find the group memberships.

This will find all security groups including nested ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#use_token_groups AdSecretBackend#use_token_groups}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetAnonymousGroupSearch">resetAnonymousGroupSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetCaseSensitiveNames">resetCaseSensitiveNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetClientTlsCert">resetClientTlsCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetClientTlsKey">resetClientTlsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDefaultLeaseTtlSeconds">resetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDenyNullBind">resetDenyNullBind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDisableRemount">resetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDiscoverdn">resetDiscoverdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetFormatter">resetFormatter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetGroupattr">resetGroupattr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetGroupdn">resetGroupdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetGroupfilter">resetGroupfilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetInsecureTls">resetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetLastRotationTolerance">resetLastRotationTolerance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetLength">resetLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetLocal">resetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetMaxLeaseTtlSeconds">resetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetPasswordPolicy">resetPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetRequestTimeout">resetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetStarttls">resetStarttls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetTlsMaxVersion">resetTlsMaxVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetTlsMinVersion">resetTlsMinVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUpndomain">resetUpndomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUsePre111GroupCnBehavior">resetUsePre111GroupCnBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUserattr">resetUserattr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUserdn">resetUserdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUseTokenGroups">resetUseTokenGroups</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAnonymousGroupSearch` <a name="resetAnonymousGroupSearch" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetAnonymousGroupSearch"></a>

```java
public void resetAnonymousGroupSearch()
```

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetBackend"></a>

```java
public void resetBackend()
```

##### `resetCaseSensitiveNames` <a name="resetCaseSensitiveNames" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetCaseSensitiveNames"></a>

```java
public void resetCaseSensitiveNames()
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetClientTlsCert` <a name="resetClientTlsCert" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetClientTlsCert"></a>

```java
public void resetClientTlsCert()
```

##### `resetClientTlsKey` <a name="resetClientTlsKey" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetClientTlsKey"></a>

```java
public void resetClientTlsKey()
```

##### `resetDefaultLeaseTtlSeconds` <a name="resetDefaultLeaseTtlSeconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```java
public void resetDefaultLeaseTtlSeconds()
```

##### `resetDenyNullBind` <a name="resetDenyNullBind" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDenyNullBind"></a>

```java
public void resetDenyNullBind()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisableRemount` <a name="resetDisableRemount" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDisableRemount"></a>

```java
public void resetDisableRemount()
```

##### `resetDiscoverdn` <a name="resetDiscoverdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDiscoverdn"></a>

```java
public void resetDiscoverdn()
```

##### `resetFormatter` <a name="resetFormatter" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetFormatter"></a>

```java
public void resetFormatter()
```

##### `resetGroupattr` <a name="resetGroupattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetGroupattr"></a>

```java
public void resetGroupattr()
```

##### `resetGroupdn` <a name="resetGroupdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetGroupdn"></a>

```java
public void resetGroupdn()
```

##### `resetGroupfilter` <a name="resetGroupfilter" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetGroupfilter"></a>

```java
public void resetGroupfilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetId"></a>

```java
public void resetId()
```

##### `resetInsecureTls` <a name="resetInsecureTls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetInsecureTls"></a>

```java
public void resetInsecureTls()
```

##### `resetLastRotationTolerance` <a name="resetLastRotationTolerance" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetLastRotationTolerance"></a>

```java
public void resetLastRotationTolerance()
```

##### `resetLength` <a name="resetLength" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetLength"></a>

```java
public void resetLength()
```

##### `resetLocal` <a name="resetLocal" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetLocal"></a>

```java
public void resetLocal()
```

##### `resetMaxLeaseTtlSeconds` <a name="resetMaxLeaseTtlSeconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetMaxLeaseTtlSeconds"></a>

```java
public void resetMaxLeaseTtlSeconds()
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetMaxTtl"></a>

```java
public void resetMaxTtl()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPasswordPolicy` <a name="resetPasswordPolicy" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetPasswordPolicy"></a>

```java
public void resetPasswordPolicy()
```

##### `resetRequestTimeout` <a name="resetRequestTimeout" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetRequestTimeout"></a>

```java
public void resetRequestTimeout()
```

##### `resetStarttls` <a name="resetStarttls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetStarttls"></a>

```java
public void resetStarttls()
```

##### `resetTlsMaxVersion` <a name="resetTlsMaxVersion" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetTlsMaxVersion"></a>

```java
public void resetTlsMaxVersion()
```

##### `resetTlsMinVersion` <a name="resetTlsMinVersion" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetTlsMinVersion"></a>

```java
public void resetTlsMinVersion()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetTtl"></a>

```java
public void resetTtl()
```

##### `resetUpndomain` <a name="resetUpndomain" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUpndomain"></a>

```java
public void resetUpndomain()
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUrl"></a>

```java
public void resetUrl()
```

##### `resetUsePre111GroupCnBehavior` <a name="resetUsePre111GroupCnBehavior" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUsePre111GroupCnBehavior"></a>

```java
public void resetUsePre111GroupCnBehavior()
```

##### `resetUserattr` <a name="resetUserattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUserattr"></a>

```java
public void resetUserattr()
```

##### `resetUserdn` <a name="resetUserdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUserdn"></a>

```java
public void resetUserdn()
```

##### `resetUseTokenGroups` <a name="resetUseTokenGroups" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUseTokenGroups"></a>

```java
public void resetUseTokenGroups()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.ad_secret_backend.AdSecretBackend;

AdSecretBackend.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.ad_secret_backend.AdSecretBackend;

AdSecretBackend.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.ad_secret_backend.AdSecretBackend;

AdSecretBackend.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.anonymousGroupSearchInput">anonymousGroupSearchInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.binddnInput">binddnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.bindpassInput">bindpassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.caseSensitiveNamesInput">caseSensitiveNamesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.certificateInput">certificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsCertInput">clientTlsCertInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsKeyInput">clientTlsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.defaultLeaseTtlSecondsInput">defaultLeaseTtlSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.denyNullBindInput">denyNullBindInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.disableRemountInput">disableRemountInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.discoverdnInput">discoverdnInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.formatterInput">formatterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupattrInput">groupattrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupdnInput">groupdnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupfilterInput">groupfilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.insecureTlsInput">insecureTlsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lastRotationToleranceInput">lastRotationToleranceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lengthInput">lengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.localInput">localInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxLeaseTtlSecondsInput">maxLeaseTtlSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxTtlInput">maxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.passwordPolicyInput">passwordPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.requestTimeoutInput">requestTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.starttlsInput">starttlsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMaxVersionInput">tlsMaxVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMinVersionInput">tlsMinVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.upndomainInput">upndomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.usePre111GroupCnBehaviorInput">usePre111GroupCnBehaviorInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userattrInput">userattrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userdnInput">userdnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.useTokenGroupsInput">useTokenGroupsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.anonymousGroupSearch">anonymousGroupSearch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.binddn">binddn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.bindpass">bindpass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.caseSensitiveNames">caseSensitiveNames</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsCert">clientTlsCert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsKey">clientTlsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.denyNullBind">denyNullBind</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.discoverdn">discoverdn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.formatter">formatter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupattr">groupattr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupdn">groupdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupfilter">groupfilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.insecureTls">insecureTls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lastRotationTolerance">lastRotationTolerance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.length">length</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.local">local</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.passwordPolicy">passwordPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.requestTimeout">requestTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.starttls">starttls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMaxVersion">tlsMaxVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMinVersion">tlsMinVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.upndomain">upndomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.usePre111GroupCnBehavior">usePre111GroupCnBehavior</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userattr">userattr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userdn">userdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.useTokenGroups">useTokenGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `anonymousGroupSearchInput`<sup>Optional</sup> <a name="anonymousGroupSearchInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.anonymousGroupSearchInput"></a>

```java
public java.lang.Object getAnonymousGroupSearchInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `binddnInput`<sup>Optional</sup> <a name="binddnInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.binddnInput"></a>

```java
public java.lang.String getBinddnInput();
```

- *Type:* java.lang.String

---

##### `bindpassInput`<sup>Optional</sup> <a name="bindpassInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.bindpassInput"></a>

```java
public java.lang.String getBindpassInput();
```

- *Type:* java.lang.String

---

##### `caseSensitiveNamesInput`<sup>Optional</sup> <a name="caseSensitiveNamesInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.caseSensitiveNamesInput"></a>

```java
public java.lang.Object getCaseSensitiveNamesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.certificateInput"></a>

```java
public java.lang.String getCertificateInput();
```

- *Type:* java.lang.String

---

##### `clientTlsCertInput`<sup>Optional</sup> <a name="clientTlsCertInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsCertInput"></a>

```java
public java.lang.String getClientTlsCertInput();
```

- *Type:* java.lang.String

---

##### `clientTlsKeyInput`<sup>Optional</sup> <a name="clientTlsKeyInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsKeyInput"></a>

```java
public java.lang.String getClientTlsKeyInput();
```

- *Type:* java.lang.String

---

##### `defaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="defaultLeaseTtlSecondsInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```java
public java.lang.Number getDefaultLeaseTtlSecondsInput();
```

- *Type:* java.lang.Number

---

##### `denyNullBindInput`<sup>Optional</sup> <a name="denyNullBindInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.denyNullBindInput"></a>

```java
public java.lang.Object getDenyNullBindInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disableRemountInput`<sup>Optional</sup> <a name="disableRemountInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.disableRemountInput"></a>

```java
public java.lang.Object getDisableRemountInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `discoverdnInput`<sup>Optional</sup> <a name="discoverdnInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.discoverdnInput"></a>

```java
public java.lang.Object getDiscoverdnInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `formatterInput`<sup>Optional</sup> <a name="formatterInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.formatterInput"></a>

```java
public java.lang.String getFormatterInput();
```

- *Type:* java.lang.String

---

##### `groupattrInput`<sup>Optional</sup> <a name="groupattrInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupattrInput"></a>

```java
public java.lang.String getGroupattrInput();
```

- *Type:* java.lang.String

---

##### `groupdnInput`<sup>Optional</sup> <a name="groupdnInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupdnInput"></a>

```java
public java.lang.String getGroupdnInput();
```

- *Type:* java.lang.String

---

##### `groupfilterInput`<sup>Optional</sup> <a name="groupfilterInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupfilterInput"></a>

```java
public java.lang.String getGroupfilterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `insecureTlsInput`<sup>Optional</sup> <a name="insecureTlsInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.insecureTlsInput"></a>

```java
public java.lang.Object getInsecureTlsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `lastRotationToleranceInput`<sup>Optional</sup> <a name="lastRotationToleranceInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lastRotationToleranceInput"></a>

```java
public java.lang.Number getLastRotationToleranceInput();
```

- *Type:* java.lang.Number

---

##### `lengthInput`<sup>Optional</sup> <a name="lengthInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lengthInput"></a>

```java
public java.lang.Number getLengthInput();
```

- *Type:* java.lang.Number

---

##### `localInput`<sup>Optional</sup> <a name="localInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.localInput"></a>

```java
public java.lang.Object getLocalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="maxLeaseTtlSecondsInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```java
public java.lang.Number getMaxLeaseTtlSecondsInput();
```

- *Type:* java.lang.Number

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxTtlInput"></a>

```java
public java.lang.Number getMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `passwordPolicyInput`<sup>Optional</sup> <a name="passwordPolicyInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.passwordPolicyInput"></a>

```java
public java.lang.String getPasswordPolicyInput();
```

- *Type:* java.lang.String

---

##### `requestTimeoutInput`<sup>Optional</sup> <a name="requestTimeoutInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.requestTimeoutInput"></a>

```java
public java.lang.Number getRequestTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `starttlsInput`<sup>Optional</sup> <a name="starttlsInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.starttlsInput"></a>

```java
public java.lang.Object getStarttlsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tlsMaxVersionInput`<sup>Optional</sup> <a name="tlsMaxVersionInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMaxVersionInput"></a>

```java
public java.lang.String getTlsMaxVersionInput();
```

- *Type:* java.lang.String

---

##### `tlsMinVersionInput`<sup>Optional</sup> <a name="tlsMinVersionInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMinVersionInput"></a>

```java
public java.lang.String getTlsMinVersionInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `upndomainInput`<sup>Optional</sup> <a name="upndomainInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.upndomainInput"></a>

```java
public java.lang.String getUpndomainInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `usePre111GroupCnBehaviorInput`<sup>Optional</sup> <a name="usePre111GroupCnBehaviorInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.usePre111GroupCnBehaviorInput"></a>

```java
public java.lang.Object getUsePre111GroupCnBehaviorInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `userattrInput`<sup>Optional</sup> <a name="userattrInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userattrInput"></a>

```java
public java.lang.String getUserattrInput();
```

- *Type:* java.lang.String

---

##### `userdnInput`<sup>Optional</sup> <a name="userdnInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userdnInput"></a>

```java
public java.lang.String getUserdnInput();
```

- *Type:* java.lang.String

---

##### `useTokenGroupsInput`<sup>Optional</sup> <a name="useTokenGroupsInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.useTokenGroupsInput"></a>

```java
public java.lang.Object getUseTokenGroupsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `anonymousGroupSearch`<sup>Required</sup> <a name="anonymousGroupSearch" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.anonymousGroupSearch"></a>

```java
public java.lang.Object getAnonymousGroupSearch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `binddn`<sup>Required</sup> <a name="binddn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.binddn"></a>

```java
public java.lang.String getBinddn();
```

- *Type:* java.lang.String

---

##### `bindpass`<sup>Required</sup> <a name="bindpass" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.bindpass"></a>

```java
public java.lang.String getBindpass();
```

- *Type:* java.lang.String

---

##### `caseSensitiveNames`<sup>Required</sup> <a name="caseSensitiveNames" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.caseSensitiveNames"></a>

```java
public java.lang.Object getCaseSensitiveNames();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `clientTlsCert`<sup>Required</sup> <a name="clientTlsCert" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsCert"></a>

```java
public java.lang.String getClientTlsCert();
```

- *Type:* java.lang.String

---

##### `clientTlsKey`<sup>Required</sup> <a name="clientTlsKey" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsKey"></a>

```java
public java.lang.String getClientTlsKey();
```

- *Type:* java.lang.String

---

##### `defaultLeaseTtlSeconds`<sup>Required</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.defaultLeaseTtlSeconds"></a>

```java
public java.lang.Number getDefaultLeaseTtlSeconds();
```

- *Type:* java.lang.Number

---

##### `denyNullBind`<sup>Required</sup> <a name="denyNullBind" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.denyNullBind"></a>

```java
public java.lang.Object getDenyNullBind();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableRemount`<sup>Required</sup> <a name="disableRemount" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.disableRemount"></a>

```java
public java.lang.Object getDisableRemount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `discoverdn`<sup>Required</sup> <a name="discoverdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.discoverdn"></a>

```java
public java.lang.Object getDiscoverdn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `formatter`<sup>Required</sup> <a name="formatter" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.formatter"></a>

```java
public java.lang.String getFormatter();
```

- *Type:* java.lang.String

---

##### `groupattr`<sup>Required</sup> <a name="groupattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupattr"></a>

```java
public java.lang.String getGroupattr();
```

- *Type:* java.lang.String

---

##### `groupdn`<sup>Required</sup> <a name="groupdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupdn"></a>

```java
public java.lang.String getGroupdn();
```

- *Type:* java.lang.String

---

##### `groupfilter`<sup>Required</sup> <a name="groupfilter" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupfilter"></a>

```java
public java.lang.String getGroupfilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `insecureTls`<sup>Required</sup> <a name="insecureTls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.insecureTls"></a>

```java
public java.lang.Object getInsecureTls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `lastRotationTolerance`<sup>Required</sup> <a name="lastRotationTolerance" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lastRotationTolerance"></a>

```java
public java.lang.Number getLastRotationTolerance();
```

- *Type:* java.lang.Number

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.length"></a>

```java
public java.lang.Number getLength();
```

- *Type:* java.lang.Number

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.local"></a>

```java
public java.lang.Object getLocal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxLeaseTtlSeconds`<sup>Required</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxLeaseTtlSeconds"></a>

```java
public java.lang.Number getMaxLeaseTtlSeconds();
```

- *Type:* java.lang.Number

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxTtl"></a>

```java
public java.lang.Number getMaxTtl();
```

- *Type:* java.lang.Number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `passwordPolicy`<sup>Required</sup> <a name="passwordPolicy" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.passwordPolicy"></a>

```java
public java.lang.String getPasswordPolicy();
```

- *Type:* java.lang.String

---

##### `requestTimeout`<sup>Required</sup> <a name="requestTimeout" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.requestTimeout"></a>

```java
public java.lang.Number getRequestTimeout();
```

- *Type:* java.lang.Number

---

##### `starttls`<sup>Required</sup> <a name="starttls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.starttls"></a>

```java
public java.lang.Object getStarttls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tlsMaxVersion`<sup>Required</sup> <a name="tlsMaxVersion" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMaxVersion"></a>

```java
public java.lang.String getTlsMaxVersion();
```

- *Type:* java.lang.String

---

##### `tlsMinVersion`<sup>Required</sup> <a name="tlsMinVersion" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMinVersion"></a>

```java
public java.lang.String getTlsMinVersion();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `upndomain`<sup>Required</sup> <a name="upndomain" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.upndomain"></a>

```java
public java.lang.String getUpndomain();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `usePre111GroupCnBehavior`<sup>Required</sup> <a name="usePre111GroupCnBehavior" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.usePre111GroupCnBehavior"></a>

```java
public java.lang.Object getUsePre111GroupCnBehavior();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `userattr`<sup>Required</sup> <a name="userattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userattr"></a>

```java
public java.lang.String getUserattr();
```

- *Type:* java.lang.String

---

##### `userdn`<sup>Required</sup> <a name="userdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userdn"></a>

```java
public java.lang.String getUserdn();
```

- *Type:* java.lang.String

---

##### `useTokenGroups`<sup>Required</sup> <a name="useTokenGroups" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.useTokenGroups"></a>

```java
public java.lang.Object getUseTokenGroups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AdSecretBackendConfig <a name="AdSecretBackendConfig" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.ad_secret_backend.AdSecretBackendConfig;

AdSecretBackendConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .binddn(java.lang.String)
    .bindpass(java.lang.String)
//  .anonymousGroupSearch(java.lang.Boolean)
//  .anonymousGroupSearch(IResolvable)
//  .backend(java.lang.String)
//  .caseSensitiveNames(java.lang.Boolean)
//  .caseSensitiveNames(IResolvable)
//  .certificate(java.lang.String)
//  .clientTlsCert(java.lang.String)
//  .clientTlsKey(java.lang.String)
//  .defaultLeaseTtlSeconds(java.lang.Number)
//  .denyNullBind(java.lang.Boolean)
//  .denyNullBind(IResolvable)
//  .description(java.lang.String)
//  .disableRemount(java.lang.Boolean)
//  .disableRemount(IResolvable)
//  .discoverdn(java.lang.Boolean)
//  .discoverdn(IResolvable)
//  .formatter(java.lang.String)
//  .groupattr(java.lang.String)
//  .groupdn(java.lang.String)
//  .groupfilter(java.lang.String)
//  .id(java.lang.String)
//  .insecureTls(java.lang.Boolean)
//  .insecureTls(IResolvable)
//  .lastRotationTolerance(java.lang.Number)
//  .length(java.lang.Number)
//  .local(java.lang.Boolean)
//  .local(IResolvable)
//  .maxLeaseTtlSeconds(java.lang.Number)
//  .maxTtl(java.lang.Number)
//  .namespace(java.lang.String)
//  .passwordPolicy(java.lang.String)
//  .requestTimeout(java.lang.Number)
//  .starttls(java.lang.Boolean)
//  .starttls(IResolvable)
//  .tlsMaxVersion(java.lang.String)
//  .tlsMinVersion(java.lang.String)
//  .ttl(java.lang.Number)
//  .upndomain(java.lang.String)
//  .url(java.lang.String)
//  .usePre111GroupCnBehavior(java.lang.Boolean)
//  .usePre111GroupCnBehavior(IResolvable)
//  .userattr(java.lang.String)
//  .userdn(java.lang.String)
//  .useTokenGroups(java.lang.Boolean)
//  .useTokenGroups(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.binddn">binddn</a></code> | <code>java.lang.String</code> | Distinguished name of object to bind when performing user and group search. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.bindpass">bindpass</a></code> | <code>java.lang.String</code> | LDAP password for searching for the user DN. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.anonymousGroupSearch">anonymousGroupSearch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Use anonymous binds when performing LDAP group searches (if true the initial credentials will still be used for the initial connection test). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | The mount path for a backend, for example, the path given in "$ vault auth enable -path=my-ad ad". |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.caseSensitiveNames">caseSensitiveNames</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, case sensitivity will be used when comparing usernames and groups for matching policies. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.certificate">certificate</a></code> | <code>java.lang.String</code> | CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.clientTlsCert">clientTlsCert</a></code> | <code>java.lang.String</code> | Client certificate to provide to the LDAP server, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.clientTlsKey">clientTlsKey</a></code> | <code>java.lang.String</code> | Client certificate key to provide to the LDAP server, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.denyNullBind">denyNullBind</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Denies an unauthenticated LDAP bind request if the user's password is empty; defaults to true. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.description">description</a></code> | <code>java.lang.String</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.discoverdn">discoverdn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Use anonymous bind to discover the bind DN of a user. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.formatter">formatter</a></code> | <code>java.lang.String</code> | Text to insert the password into, ex. "customPrefix{{PASSWORD}}customSuffix". |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.groupattr">groupattr</a></code> | <code>java.lang.String</code> | LDAP attribute to follow on objects returned by <groupfilter> in order to enumerate user group membership. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.groupdn">groupdn</a></code> | <code>java.lang.String</code> | LDAP search base to use for group membership search (eg: ou=Groups,dc=example,dc=org). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.groupfilter">groupfilter</a></code> | <code>java.lang.String</code> | Go template for querying group membership of user. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#id AdSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.insecureTls">insecureTls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Skip LDAP server SSL Certificate verification - insecure and not recommended for production use. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.lastRotationTolerance">lastRotationTolerance</a></code> | <code>java.lang.Number</code> | The number of seconds after a Vault rotation where, if Active Directory shows a later rotation, it should be considered out-of-band. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.length">length</a></code> | <code>java.lang.Number</code> | The desired length of passwords that Vault generates. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.local">local</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Mark the secrets engine as local-only. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | In seconds, the maximum password time-to-live. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.passwordPolicy">passwordPolicy</a></code> | <code>java.lang.String</code> | Name of the password policy to use to generate passwords. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.requestTimeout">requestTimeout</a></code> | <code>java.lang.Number</code> | Timeout, in seconds, for the connection when making requests against the server before returning back an error. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.starttls">starttls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Issue a StartTLS command after establishing unencrypted connection. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.tlsMaxVersion">tlsMaxVersion</a></code> | <code>java.lang.String</code> | Maximum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Defaults to 'tls12'. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.tlsMinVersion">tlsMinVersion</a></code> | <code>java.lang.String</code> | Minimum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Defaults to 'tls12'. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | In seconds, the default password time-to-live. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.upndomain">upndomain</a></code> | <code>java.lang.String</code> | Enables userPrincipalDomain login with [username]@UPNDomain. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.url">url</a></code> | <code>java.lang.String</code> | LDAP URL to connect to (default: ldap://127.0.0.1). Multiple URLs can be specified by concatenating them with commas; they will be tried in-order. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.usePre111GroupCnBehavior">usePre111GroupCnBehavior</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | In Vault 1.1.1 a fix for handling group CN values of different cases unfortunately introduced a regression that could cause previously defined groups to not be found due to a change in the resulting name. If set true, the pre-1.1.1 behavior for matching group CNs will be used. This is only needed in some upgrade scenarios for backwards compatibility. It is enabled by default if the config is upgraded but disabled by default on new configurations. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.userattr">userattr</a></code> | <code>java.lang.String</code> | Attribute used for users (default: cn). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.userdn">userdn</a></code> | <code>java.lang.String</code> | LDAP domain to use for users (eg: ou=People,dc=example,dc=org). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.useTokenGroups">useTokenGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, use the Active Directory tokenGroups constructed attribute of the user to find the group memberships. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `binddn`<sup>Required</sup> <a name="binddn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.binddn"></a>

```java
public java.lang.String getBinddn();
```

- *Type:* java.lang.String

Distinguished name of object to bind when performing user and group search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#binddn AdSecretBackend#binddn}

---

##### `bindpass`<sup>Required</sup> <a name="bindpass" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.bindpass"></a>

```java
public java.lang.String getBindpass();
```

- *Type:* java.lang.String

LDAP password for searching for the user DN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#bindpass AdSecretBackend#bindpass}

---

##### `anonymousGroupSearch`<sup>Optional</sup> <a name="anonymousGroupSearch" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.anonymousGroupSearch"></a>

```java
public java.lang.Object getAnonymousGroupSearch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Use anonymous binds when performing LDAP group searches (if true the initial credentials will still be used for the initial connection test).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#anonymous_group_search AdSecretBackend#anonymous_group_search}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

The mount path for a backend, for example, the path given in "$ vault auth enable -path=my-ad ad".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#backend AdSecretBackend#backend}

---

##### `caseSensitiveNames`<sup>Optional</sup> <a name="caseSensitiveNames" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.caseSensitiveNames"></a>

```java
public java.lang.Object getCaseSensitiveNames();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, case sensitivity will be used when comparing usernames and groups for matching policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#case_sensitive_names AdSecretBackend#case_sensitive_names}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#certificate AdSecretBackend#certificate}

---

##### `clientTlsCert`<sup>Optional</sup> <a name="clientTlsCert" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.clientTlsCert"></a>

```java
public java.lang.String getClientTlsCert();
```

- *Type:* java.lang.String

Client certificate to provide to the LDAP server, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#client_tls_cert AdSecretBackend#client_tls_cert}

---

##### `clientTlsKey`<sup>Optional</sup> <a name="clientTlsKey" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.clientTlsKey"></a>

```java
public java.lang.String getClientTlsKey();
```

- *Type:* java.lang.String

Client certificate key to provide to the LDAP server, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#client_tls_key AdSecretBackend#client_tls_key}

---

##### `defaultLeaseTtlSeconds`<sup>Optional</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```java
public java.lang.Number getDefaultLeaseTtlSeconds();
```

- *Type:* java.lang.Number

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#default_lease_ttl_seconds AdSecretBackend#default_lease_ttl_seconds}

---

##### `denyNullBind`<sup>Optional</sup> <a name="denyNullBind" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.denyNullBind"></a>

```java
public java.lang.Object getDenyNullBind();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Denies an unauthenticated LDAP bind request if the user's password is empty; defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#deny_null_bind AdSecretBackend#deny_null_bind}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#description AdSecretBackend#description}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.disableRemount"></a>

```java
public java.lang.Object getDisableRemount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#disable_remount AdSecretBackend#disable_remount}

---

##### `discoverdn`<sup>Optional</sup> <a name="discoverdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.discoverdn"></a>

```java
public java.lang.Object getDiscoverdn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Use anonymous bind to discover the bind DN of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#discoverdn AdSecretBackend#discoverdn}

---

##### `formatter`<sup>Optional</sup> <a name="formatter" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.formatter"></a>

```java
public java.lang.String getFormatter();
```

- *Type:* java.lang.String

Text to insert the password into, ex. "customPrefix{{PASSWORD}}customSuffix".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#formatter AdSecretBackend#formatter}

---

##### `groupattr`<sup>Optional</sup> <a name="groupattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.groupattr"></a>

```java
public java.lang.String getGroupattr();
```

- *Type:* java.lang.String

LDAP attribute to follow on objects returned by <groupfilter> in order to enumerate user group membership.

Examples: "cn" or "memberOf", etc. Default: cn

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#groupattr AdSecretBackend#groupattr}

---

##### `groupdn`<sup>Optional</sup> <a name="groupdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.groupdn"></a>

```java
public java.lang.String getGroupdn();
```

- *Type:* java.lang.String

LDAP search base to use for group membership search (eg: ou=Groups,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#groupdn AdSecretBackend#groupdn}

---

##### `groupfilter`<sup>Optional</sup> <a name="groupfilter" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.groupfilter"></a>

```java
public java.lang.String getGroupfilter();
```

- *Type:* java.lang.String

Go template for querying group membership of user.

The template can access the following context variables: UserDN, Username Example: (&(objectClass=group)(member:1.2.840.113556.1.4.1941:={{.UserDN}})) Default: (|(memberUid={{.Username}})(member={{.UserDN}})(uniqueMember={{.UserDN}}))

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#groupfilter AdSecretBackend#groupfilter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#id AdSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insecureTls`<sup>Optional</sup> <a name="insecureTls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.insecureTls"></a>

```java
public java.lang.Object getInsecureTls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Skip LDAP server SSL Certificate verification - insecure and not recommended for production use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#insecure_tls AdSecretBackend#insecure_tls}

---

##### `lastRotationTolerance`<sup>Optional</sup> <a name="lastRotationTolerance" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.lastRotationTolerance"></a>

```java
public java.lang.Number getLastRotationTolerance();
```

- *Type:* java.lang.Number

The number of seconds after a Vault rotation where, if Active Directory shows a later rotation, it should be considered out-of-band.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#last_rotation_tolerance AdSecretBackend#last_rotation_tolerance}

---

##### `length`<sup>Optional</sup> <a name="length" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.length"></a>

```java
public java.lang.Number getLength();
```

- *Type:* java.lang.Number

The desired length of passwords that Vault generates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#length AdSecretBackend#length}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.local"></a>

```java
public java.lang.Object getLocal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Mark the secrets engine as local-only.

Local engines are not replicated or removed by replication.Tolerance duration to use when checking the last rotation time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#local AdSecretBackend#local}

---

##### `maxLeaseTtlSeconds`<sup>Optional</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```java
public java.lang.Number getMaxLeaseTtlSeconds();
```

- *Type:* java.lang.Number

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#max_lease_ttl_seconds AdSecretBackend#max_lease_ttl_seconds}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.maxTtl"></a>

```java
public java.lang.Number getMaxTtl();
```

- *Type:* java.lang.Number

In seconds, the maximum password time-to-live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#max_ttl AdSecretBackend#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#namespace AdSecretBackend#namespace}

---

##### `passwordPolicy`<sup>Optional</sup> <a name="passwordPolicy" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.passwordPolicy"></a>

```java
public java.lang.String getPasswordPolicy();
```

- *Type:* java.lang.String

Name of the password policy to use to generate passwords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#password_policy AdSecretBackend#password_policy}

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.requestTimeout"></a>

```java
public java.lang.Number getRequestTimeout();
```

- *Type:* java.lang.Number

Timeout, in seconds, for the connection when making requests against the server before returning back an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#request_timeout AdSecretBackend#request_timeout}

---

##### `starttls`<sup>Optional</sup> <a name="starttls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.starttls"></a>

```java
public java.lang.Object getStarttls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Issue a StartTLS command after establishing unencrypted connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#starttls AdSecretBackend#starttls}

---

##### `tlsMaxVersion`<sup>Optional</sup> <a name="tlsMaxVersion" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.tlsMaxVersion"></a>

```java
public java.lang.String getTlsMaxVersion();
```

- *Type:* java.lang.String

Maximum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Defaults to 'tls12'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#tls_max_version AdSecretBackend#tls_max_version}

---

##### `tlsMinVersion`<sup>Optional</sup> <a name="tlsMinVersion" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.tlsMinVersion"></a>

```java
public java.lang.String getTlsMinVersion();
```

- *Type:* java.lang.String

Minimum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Defaults to 'tls12'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#tls_min_version AdSecretBackend#tls_min_version}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

In seconds, the default password time-to-live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#ttl AdSecretBackend#ttl}

---

##### `upndomain`<sup>Optional</sup> <a name="upndomain" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.upndomain"></a>

```java
public java.lang.String getUpndomain();
```

- *Type:* java.lang.String

Enables userPrincipalDomain login with [username]@UPNDomain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#upndomain AdSecretBackend#upndomain}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

LDAP URL to connect to (default: ldap://127.0.0.1). Multiple URLs can be specified by concatenating them with commas; they will be tried in-order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#url AdSecretBackend#url}

---

##### `usePre111GroupCnBehavior`<sup>Optional</sup> <a name="usePre111GroupCnBehavior" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.usePre111GroupCnBehavior"></a>

```java
public java.lang.Object getUsePre111GroupCnBehavior();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

In Vault 1.1.1 a fix for handling group CN values of different cases unfortunately introduced a regression that could cause previously defined groups to not be found due to a change in the resulting name. If set true, the pre-1.1.1 behavior for matching group CNs will be used. This is only needed in some upgrade scenarios for backwards compatibility. It is enabled by default if the config is upgraded but disabled by default on new configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#use_pre111_group_cn_behavior AdSecretBackend#use_pre111_group_cn_behavior}

---

##### `userattr`<sup>Optional</sup> <a name="userattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.userattr"></a>

```java
public java.lang.String getUserattr();
```

- *Type:* java.lang.String

Attribute used for users (default: cn).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#userattr AdSecretBackend#userattr}

---

##### `userdn`<sup>Optional</sup> <a name="userdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.userdn"></a>

```java
public java.lang.String getUserdn();
```

- *Type:* java.lang.String

LDAP domain to use for users (eg: ou=People,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#userdn AdSecretBackend#userdn}

---

##### `useTokenGroups`<sup>Optional</sup> <a name="useTokenGroups" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.useTokenGroups"></a>

```java
public java.lang.Object getUseTokenGroups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, use the Active Directory tokenGroups constructed attribute of the user to find the group memberships.

This will find all security groups including nested ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/ad_secret_backend#use_token_groups AdSecretBackend#use_token_groups}

---



